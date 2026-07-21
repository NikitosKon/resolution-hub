"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ArticleDraft } from "@/lib/article-draft";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const libraryKey = "resolution-hub.article-drafts";
type ArticleStatus = "draft" | "review" | "approved" | "published";

type LibraryRecord = {
  id: string;
  title: string;
  slug: string;
  status: ArticleStatus;
  updatedAt: string;
  draft: ArticleDraft;
};

const statusLabels: Record<ArticleStatus, string> = {
  draft: "Черновик",
  review: "На проверке",
  approved: "Одобрено",
  published: "Опубликовано",
};

function platformSlug(value: string) {
  return value.toLocaleLowerCase("en").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function ArticleLibrary() {
  const [records, setRecords] = useState<LibraryRecord[]>([]);
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("all");
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const local = localStorage.getItem(libraryKey);
        if (local) {
          const parsed = JSON.parse(local) as LibraryRecord[];
          if (!cancelled) setRecords(parsed.map((item) => ({ ...item, status: item.status || "draft" })));
        }
      } catch {
        localStorage.removeItem(libraryKey);
      }
      try {
        const supabase = createSupabaseBrowserClient();
        const { data: userData } = await supabase.auth.getUser();
        if (!userData.user) throw new Error("no-session");
        const { data, error } = await supabase
          .from("article_drafts")
          .select("id, slug, title, draft, status, updated_at")
          .order("updated_at", { ascending: false });
        if (error) throw error;
        if (!cancelled) setRecords((data ?? []).map((item) => ({
          id: item.id as string,
          title: item.title as string,
          slug: item.slug as string,
          draft: item.draft as ArticleDraft,
          status: (item.status as ArticleStatus) || "draft",
          updatedAt: item.updated_at as string,
        })));
      } catch {
        if (!cancelled) setMessage("Показана локальная библиотека. Для Cloud library войдите в аккаунт.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => { cancelled = true; };
  }, []);

  const platforms = useMemo(() => [...new Set(records.map((item) => item.draft.platform).filter(Boolean))].sort(), [records]);
  const filtered = useMemo(() => records.filter((item) => {
    const needle = search.trim().toLocaleLowerCase();
    const matchesSearch = !needle || `${item.title} ${item.slug} ${item.draft.primaryKeyword}`.toLocaleLowerCase().includes(needle);
    return matchesSearch && (platform === "all" || item.draft.platform === platform) && (status === "all" || item.status === status);
  }), [platform, records, search, status]);

  async function hideArticle(item: LibraryRecord) {
    if (!window.confirm("Скрыть статью? Она останется в библиотеке, но исчезнет с публичного сайта.")) return;
    await updateStatus(item, "draft");
  }

  async function updateStatus(item: LibraryRecord, nextStatus: ArticleStatus) {
    const next = records.map((record) => record.id === item.id ? { ...record, status: nextStatus, updatedAt: new Date().toISOString() } : record);
    setRecords(next);
    localStorage.setItem(libraryKey, JSON.stringify(next));
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.from("article_drafts").update({ status: nextStatus, updated_at: new Date().toISOString() }).eq("id", item.id);
      if (error) throw error;
    } catch {
      setMessage("Изменение сохранено локально. Cloud library не обновилась.");
    }
  }

  async function deleteArticle(item: LibraryRecord) {
    if (!window.confirm("Удалить статью без возможности восстановления?")) return;
    const next = records.filter((record) => record.id !== item.id);
    setRecords(next);
    localStorage.setItem(libraryKey, JSON.stringify(next));
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.from("article_drafts").delete().eq("id", item.id);
      if (error) throw error;
    } catch {
      setMessage("Статья удалена локально. Cloud library не обновилась.");
    }
  }

  return (
    <main id="main" className="admin-page">
      <section className="admin-shell">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Resolution Hub internal</p>
            <h1>Библиотека статей</h1>
            <p>Просматривай актуальные материалы, возвращай их в черновики или удаляй устаревшие записи.</p>
          </div>
          <div className="admin-actions">
            <Link className="button secondary" href="/admin/">Новый черновик</Link>
          </div>
        </header>
        {message ? <p className="admin-form-error">{message}</p> : null}
        <div className="admin-library-filters">
          <input aria-label="Поиск статей" placeholder="Поиск по названию, slug или ключевому слову" value={search} onChange={(event) => setSearch(event.target.value)} />
          <select aria-label="Фильтр по платформе" value={platform} onChange={(event) => setPlatform(event.target.value)}>
            <option value="all">Все платформы</option>
            {platforms.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select aria-label="Фильтр по статусу" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">Все статусы</option>
            {(Object.keys(statusLabels) as ArticleStatus[]).map((item) => <option key={item} value={item}>{statusLabels[item]}</option>)}
          </select>
        </div>
        {loading ? <p className="admin-muted">Загружаю библиотеку…</p> : null}
        {!loading && filtered.length === 0 ? <div className="admin-card"><p className="admin-muted">По выбранным условиям статей нет.</p></div> : null}
        <div className="admin-library-grid">
          {filtered.map((item) => (
            <article className="admin-library-card" key={item.id}>
              <div className="admin-library-card-top">
                <span className="eyebrow">{item.draft.platform || "Без платформы"}</span>
                <span className={`admin-library-status status-${item.status}`}>{statusLabels[item.status]}</span>
              </div>
              <h2>{item.title || "Без названия"}</h2>
              <p className="admin-muted">{item.draft.primaryKeyword || item.slug}</p>
              <small>Обновлено: {new Date(item.updatedAt).toLocaleDateString("ru-RU")}</small>
              <div className="admin-library-card-actions">
                <Link className="button primary" href={`/admin/?slug=${encodeURIComponent(item.slug)}`}>Редактировать</Link>
                {item.status === "published" ? <a className="button secondary" href={`/${item.draft.locale}/${platformSlug(item.draft.platform)}/${item.slug}/`} target="_blank" rel="noreferrer">Открыть</a> : null}
                {item.status === "published" ? <button type="button" className="button ghost" onClick={() => void hideArticle(item)}>Скрыть</button> : null}
                <button type="button" className="button ghost danger" onClick={() => void deleteArticle(item)}>Удалить</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
