"use client";

import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { Download, FileText, LogOut, Save, Sparkles, Trash2, Upload } from "lucide-react";
import {
  createDraft,
  draftTemplates,
  draftToMarkdown,
  validateDraft,
  type ArticleDraft,
  type DraftTemplateId,
  type DraftTable,
} from "@/lib/article-draft";
import { locales, type Locale } from "@/lib/locales";
import { articleIdeaCriteria, starterArticleIdeas, type ArticleIdea } from "@/lib/article-ideas";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const storageKey = "resolution-hub.article-draft";
const libraryKey = "resolution-hub.article-drafts";
const ideasKey = "resolution-hub.article-ideas";

type SavedDraft = {
  id: string;
  title: string;
  slug: string;
  updatedAt: string;
  status: ArticleStatus;
  draft: ArticleDraft;
};

type ArticleStatus = "draft" | "review" | "approved" | "published";

const articleStatuses: Array<{ value: ArticleStatus; label: string }> = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "approved", label: "Approved" },
  { value: "published", label: "Published" },
];

function slugify(value: string) {
  return value
    .toLocaleLowerCase("en")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function updateSection(
  draft: ArticleDraft,
  collection: "sections" | "faq",
  index: number,
  field: "heading" | "body",
  value: string,
) {
  return {
    ...draft,
    [collection]: draft[collection].map((item, itemIndex) =>
      itemIndex === index ? { ...item, [field]: value } : item,
    ),
  };
}

function updateTable(
  draft: ArticleDraft,
  index: number,
  updater: (table: DraftTable) => DraftTable,
) {
  return {
    ...draft,
    tables: (draft.tables ?? []).map((table, tableIndex) =>
      tableIndex === index ? updater(table) : table,
    ),
  };
}

function downloadText(filename: string, value: string, type: string) {
  const blob = new Blob([value], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function ArticleDraftEditor() {
  const [draft, setDraft] = useState<ArticleDraft>(() =>
    createDraft("restriction"),
  );
  const [savedDrafts, setSavedDrafts] = useState<SavedDraft[]>([]);
  const [accountEmail, setAccountEmail] = useState("");
  const [cloudReady, setCloudReady] = useState(false);
  const [status, setStatus] = useState<ArticleStatus>("draft");
  const [groqBusy, setGroqBusy] = useState(false);
  const [groqError, setGroqError] = useState("");
  const [publishBusy, setPublishBusy] = useState(false);
  const [publishMessage, setPublishMessage] = useState("");
  const [ideas, setIdeas] = useState<ArticleIdea[]>([]);
  const [ideasError, setIdeasError] = useState("");
  const markdown = useMemo(() => draftToMarkdown(draft, status), [draft, status]);
  const wordCount = useMemo(
    () => markdown.split(/\s+/).filter(Boolean).length,
    [markdown],
  );

  useEffect(() => {
    let cancelled = false;
    async function loadCloudDrafts() {
      try {
        const supabase = createSupabaseBrowserClient();
        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError || !userData.user) throw userError ?? new Error("No session");
        if (cancelled) return;
        setAccountEmail(userData.user.email ?? "");
        setCloudReady(true);
        const { data, error } = await supabase
          .from("article_drafts")
          .select("id, slug, title, draft, status, updated_at")
          .order("updated_at", { ascending: false });
        if (error) throw error;
        setSavedDrafts(
          (data ?? []).map((item) => ({
            id: item.id as string,
            title: item.title as string,
            slug: item.slug as string,
            updatedAt: item.updated_at as string,
            status: (item.status as ArticleStatus) || "draft",
            draft: item.draft as ArticleDraft,
          })),
        );
        const { data: ideaData, error: ideaError } = await supabase
          .from("article_ideas")
          .select("id, title, platform, locale, primary_keyword, intent, priority, status, demand_evidence, source, source_checked_at")
          .order("priority", { ascending: true })
          .order("created_at", { ascending: false });
        if (ideaError) throw ideaError;
        const allCloudIdeas = (ideaData ?? []).map((item) => ({
          id: item.id as string,
          title: item.title as string,
          platform: item.platform as string,
          locale: (item.locale as Locale) || "ru",
          primaryKeyword: item.primary_keyword as string,
          intent: item.intent as string,
          priority: (item.priority as ArticleIdea["priority"]) || "medium",
          status: (item.status as ArticleIdea["status"]) || "new",
          demandEvidence: item.demand_evidence as string,
          source: item.source as string,
          sourceCheckedAt: (item.source_checked_at as string) || "",
        }));
        const cloudIdeas = allCloudIdeas.filter((idea) => idea.status === "new" || idea.status === "planned");
        const existingTitles = new Set(allCloudIdeas.map((idea) => idea.title));
        const missingIdeas = starterArticleIdeas
          .filter((idea) => !existingTitles.has(idea.title))
          .map((idea, index) => ({ ...idea, id: `seed-${cloudIdeas.length}-${index}`, status: "new" as const }));
        const mergedIdeas = [...cloudIdeas, ...missingIdeas];
        setIdeas(mergedIdeas);
        if (missingIdeas.length) {
          setIdeasError("Банк идей синхронизирован до 100 тем. Приоритет нужно подтвердить данными Google перед публикацией.");
          const { error: seedError } = await supabase.from("article_ideas").upsert(missingIdeas.map((idea) => ({
            owner_id: userData.user.id,
            title: idea.title,
            platform: idea.platform,
            locale: idea.locale,
            primary_keyword: idea.primaryKeyword,
            intent: idea.intent,
            priority: idea.priority,
            status: idea.status,
            demand_evidence: idea.demandEvidence,
            source: idea.source,
            source_checked_at: idea.sourceCheckedAt,
            updated_at: new Date().toISOString(),
          })), { onConflict: "owner_id,title" });
          if (seedError) setIdeasError("Стартовые идеи загружены локально. Проверь права таблицы article_ideas в Supabase.");
        }
        return;
      } catch {
        // Keep the local library available if the database is not configured yet.
        const seeded = starterArticleIdeas.map((idea, index) => ({ ...idea, id: `seed-${index}`, status: "new" as const }));
        setIdeas((current) => current.length ? current : seeded);
        setIdeasError("Стартовые идеи загружены локально. Выполни SQL-миграцию, чтобы хранить их в Cloud library.");
      }
    }
    void loadCloudDrafts();
    const saved = localStorage.getItem(storageKey);
    const library = localStorage.getItem(libraryKey);
    const savedIdeas = localStorage.getItem(ideasKey);
    let libraryFrame = 0;
    if (library) {
      try {
        const parsedLibrary = JSON.parse(library) as SavedDraft[];
        libraryFrame = requestAnimationFrame(() =>
          setSavedDrafts(
            parsedLibrary.map((item) => ({ ...item, status: item.status || "draft" })),
          ),
        );
      } catch {
        localStorage.removeItem(libraryKey);
      }
    }
    if (savedIdeas) {
      try {
        const parsedIdeas = JSON.parse(savedIdeas) as ArticleIdea[];
        requestAnimationFrame(() => setIdeas(parsedIdeas));
      } catch {
        localStorage.removeItem(ideasKey);
      }
    }
    if (!saved) return;
    let frame = 0;
    try {
      const savedDraft = JSON.parse(saved) as ArticleDraft;
      frame = requestAnimationFrame(() => setDraft(savedDraft));
    } catch {
      localStorage.removeItem(storageKey);
    }
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(libraryFrame);
    };
  }, []);

  function ideaFromRow(row: Record<string, string>, index: number): ArticleIdea {
    const priority = row.priority?.toLowerCase();
    return {
      id: `local-${Date.now()}-${index}`,
      title: row.title || row.idea || row.topic || "",
      platform: row.platform || "",
      locale: (row.language || row.locale || "ru") as Locale,
      primaryKeyword: row.primary_keyword || row.primaryKeyword || row.keyword || row.title || "",
      intent: row.intent || "",
      priority: priority === "high" || priority === "low" ? priority : "medium",
      status: "new",
      demandEvidence: row.demand_evidence || row.demand || row.impressions || "",
      source: row.source || "",
      sourceCheckedAt: row.source_checked_at || row.checked_at || new Date().toISOString().slice(0, 10),
    };
  }

  async function importIdeas(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    const lines = (await file.text()).split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) {
      setIdeasError("CSV должен содержать строку заголовков и хотя бы одну идею.");
      return;
    }
    const headers = (lines[0] ?? "").split(",").map((header) => header.trim().replace(/^"|"$/g, ""));
    const imported = lines.slice(1).map((line, index) => {
      const values = line.split(",").map((value) => value.trim().replace(/^"|"$/g, ""));
      return ideaFromRow(Object.fromEntries(headers.map((header, headerIndex) => [header, values[headerIndex] || ""])), index);
    }).filter((idea) => idea.title);
    if (!imported.length) {
      setIdeasError("В CSV не найдено ни одной идеи с заполненным title.");
      return;
    }
    setIdeasError("");
    setIdeas((current) => [...imported, ...current]);
    localStorage.setItem(ideasKey, JSON.stringify([...imported, ...ideas]));
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { error } = await supabase.from("article_ideas").upsert(imported.map((idea) => ({
        owner_id: userData.user.id,
        title: idea.title,
        platform: idea.platform,
        locale: idea.locale,
        primary_keyword: idea.primaryKeyword,
        intent: idea.intent,
        priority: idea.priority,
        status: idea.status,
        demand_evidence: idea.demandEvidence,
        source: idea.source,
        source_checked_at: idea.sourceCheckedAt || null,
        updated_at: new Date().toISOString(),
      })), { onConflict: "owner_id,title" });
      if (error) throw error;
    } catch {
      setIdeasError("Идеи сохранены локально. Для Cloud library проверь таблицу article_ideas в Supabase.");
    }
  }

  async function applyIdea(idea: ArticleIdea) {
    setDraft((current) => ({
      ...current,
      title: idea.title,
      platform: idea.platform || current.platform,
      locale: idea.locale,
      primaryKeyword: idea.primaryKeyword || idea.title,
      slug: slugify(idea.title),
    }));
    const remainingIdeas = ideas.filter((item) => item.id !== idea.id);
    setIdeas(remainingIdeas);
    localStorage.setItem(ideasKey, JSON.stringify(remainingIdeas));
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        const { error } = await supabase
          .from("article_ideas")
          .update({ status: "used", updated_at: new Date().toISOString() })
          .eq("owner_id", userData.user.id)
          .eq("title", idea.title);
        if (error) throw error;
      }
    } catch {
      setIdeasError("Идея убрана из списка локально, но статус в Cloud library не обновился.");
    }
    setStatus("draft");
  }

  function setField<Key extends keyof ArticleDraft>(
    key: Key,
    value: ArticleDraft[Key],
  ) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function setTranslation(
    locale: Locale,
    field: "title" | "summary" | "quickAnswer",
    value: string,
  ) {
    setDraft((current) => ({
      ...current,
      translations: {
        ...current.translations,
        [locale]: { ...current.translations[locale], [field]: value },
      },
    }));
  }

  function addTable() {
    setDraft((current) => ({
      ...current,
      tables: [
        ...(current.tables ?? []),
        { heading: "", columns: ["Пункт", "Что проверить"], rows: [["", ""]] },
      ],
    }));
  }

  function removeTable(index: number) {
    setDraft((current) => ({
      ...current,
      tables: (current.tables ?? []).filter((_, tableIndex) => tableIndex !== index),
    }));
  }

  function addTableRow(tableIndex: number) {
    setDraft((current) => updateTable(current, tableIndex, (table) => ({
      ...table,
      rows: [...table.rows, table.columns.map(() => "")],
    })));
  }

  function addTableColumn(tableIndex: number) {
    setDraft((current) => updateTable(current, tableIndex, (table) => ({
      ...table,
      columns: [...table.columns, "Новая колонка"],
      rows: table.rows.map((row) => [...row, ""]),
    })));
  }

  function removeTableRow(tableIndex: number, rowIndex: number) {
    setDraft((current) => updateTable(current, tableIndex, (table) => ({
      ...table,
      rows: table.rows.filter((_, index) => index !== rowIndex),
    })));
  }

  function removeTableColumn(tableIndex: number, columnIndex: number) {
    setDraft((current) => updateTable(current, tableIndex, (table) => {
      if (table.columns.length <= 1) return table;
      return {
        ...table,
        columns: table.columns.filter((_, index) => index !== columnIndex),
        rows: table.rows.map((row) => row.filter((_, index) => index !== columnIndex)),
      };
    }));
  }

  async function saveToLibrary(nextStatus: ArticleStatus = status) {
    const record: SavedDraft = {
      id: `${Date.now()}`,
      title: draft.title || "Untitled guide",
      slug: draft.slug || "no-slug",
      updatedAt: new Date().toISOString(),
      status: nextStatus,
      draft,
    };
    const next = [record, ...savedDrafts.filter((item) => item.slug !== draft.slug)];
    setSavedDrafts(next);
    localStorage.setItem(libraryKey, JSON.stringify(next));
    localStorage.setItem(storageKey, JSON.stringify(draft));
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return false;
      const { error } = await supabase.from("article_drafts").upsert(
        {
          owner_id: userData.user.id,
          slug: record.slug,
          title: record.title,
          draft: record.draft,
          status: record.status,
          translations: record.draft.translations,
          updated_at: record.updatedAt,
        },
        { onConflict: "owner_id,slug" },
      );
      if (error) throw error;
      setCloudReady(true);
      return true;
    } catch {
      // LocalStorage remains a safe offline fallback.
      return false;
    }
  }

  async function publishDraft() {
    const checks = validateDraft(draft);
    const missing = checks.filter((check) => !check.ok).map((check) => check.label);
    if (!draft.title.trim() || !draft.slug.trim() || !draft.officialSources.trim()) {
      setGroqError(`Перед публикацией заполни: ${[...missing, !draft.officialSources.trim() ? "Official sources" : ""].filter(Boolean).join(", ")}.`);
      setPublishMessage("");
      return;
    }
    setGroqError("");
    setPublishBusy(true);
    setPublishMessage("Публикую статью…");
    setStatus("published");
    const savedToCloud = await saveToLibrary("published");
    setPublishMessage(savedToCloud ? "Статья опубликована в Cloud library. Публичный URL уже доступен после обновления страницы." : "Черновик сохранён локально. Cloud library недоступна, поэтому публичная публикация не выполнена.");
    setPublishBusy(false);
  }

  async function removeSavedDraft(id: string) {
    const next = savedDrafts.filter((item) => item.id !== id);
    setSavedDrafts(next);
    localStorage.setItem(libraryKey, JSON.stringify(next));
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase
        .from("article_drafts")
        .delete()
        .eq("id", id);
      if (error) throw error;
    } catch {
      // LocalStorage remains a safe offline fallback.
    }
  }

  async function signOut() {
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
    } finally {
      window.location.assign("/admin/login");
    }
  }

  async function generateWithGroq() {
    setGroqBusy(true);
    setGroqError("");
    try {
      const response = await fetch("/api/admin/groq/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: draft.platform,
          locale: draft.locale,
          primaryKeyword: draft.primaryKeyword,
          title: draft.title,
          summary: draft.summary,
          quickAnswer: draft.quickAnswer,
          sectionHeadings: draft.sections.map((section) => section.heading),
        }),
      });
      const result = (await response.json()) as { draft?: Partial<ArticleDraft>; error?: string };
      if (!response.ok || !result.draft) throw new Error(result.error || "Groq request failed");
      const generated = result.draft;
      setDraft((current) => ({
        ...current,
        title: generated.title || current.title,
        summary: generated.summary || current.summary,
        quickAnswer: generated.quickAnswer || current.quickAnswer,
        sections: Array.isArray(generated.sections) ? generated.sections : current.sections,
        tables: Array.isArray(generated.tables) && generated.tables.length
          ? generated.tables
          : (current.tables ?? []),
        warnings: generated.warnings || current.warnings,
        officialSources: generated.officialSources || current.officialSources,
        faq: Array.isArray(generated.faq) ? generated.faq : current.faq,
        translations: { ...current.translations, ...(generated.translations || {}) },
      }));
      setStatus("draft");
    } catch (error) {
      setGroqError(error instanceof Error ? error.message : "Groq request failed");
    } finally {
      setGroqBusy(false);
    }
  }

  function selectTemplate(templateId: DraftTemplateId) {
    setDraft((current) => ({
      ...createDraft(templateId),
      locale: current.locale,
      platform: current.platform,
      slug: current.slug,
      primaryKeyword: current.primaryKeyword,
      title: current.title,
      summary: current.summary,
    }));
    setStatus("draft");
  }

  const checks = validateDraft(draft);
  const passedChecks = checks.filter((check) => check.ok).length;

  return (
    <main id="main" className="admin-page">
      <section className="admin-shell">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Resolution Hub internal</p>
            <h1>Article draft builder</h1>
            <p>
              Drafts stay private until you export and review them. Nothing is
              published automatically from this screen.
            </p>
          </div>
          <div className="admin-status">
            <span>{cloudReady ? "Cloud library" : "Local draft"}</span>
            <strong>{wordCount} words</strong>
            {accountEmail ? <small>{accountEmail}</small> : null}
          </div>
        </header>

        <div className="admin-actions">
          <button
            type="button"
            className="button secondary"
            onClick={() => void saveToLibrary()}
          >
            <Save size={16} aria-hidden="true" />
            Save to library
          </button>
          <button
            type="button"
            className="button secondary"
            onClick={generateWithGroq}
            disabled={groqBusy}
          >
            <Sparkles size={16} aria-hidden="true" />
            {groqBusy ? "Пишу статью…" : "Написать по заголовку"}
          </button>
          <button type="button" className="button primary" onClick={() => void publishDraft()} disabled={publishBusy}>
            <Upload size={16} aria-hidden="true" />
            {publishBusy ? "Публикую…" : "Опубликовать в библиотеке"}
          </button>
          <button type="button" className="button secondary" onClick={signOut}>
            <LogOut size={16} aria-hidden="true" />
            Sign out
          </button>
          <button
            type="button"
            className="button secondary"
            onClick={() =>
              downloadText(
                `${draft.slug || "resolution-hub-draft"}.md`,
                markdown,
                "text/markdown",
              )
            }
          >
            <Download size={16} aria-hidden="true" />
            Export Markdown
          </button>
          <button
            type="button"
            className="button secondary"
            onClick={() =>
              downloadText(
                `${draft.slug || "resolution-hub-draft"}.json`,
                JSON.stringify(draft, null, 2),
                "application/json",
              )
            }
          >
            <FileText size={16} aria-hidden="true" />
            Export JSON
          </button>
          <button
            type="button"
            className="button ghost"
            onClick={() => {
              localStorage.removeItem(storageKey);
              setDraft(createDraft("restriction"));
            }}
          >
            <Trash2 size={16} aria-hidden="true" />
            Clear
          </button>
        </div>
        {groqError ? <p className="admin-form-error">{groqError}</p> : null}
        {publishMessage ? <p className="admin-form-success">{publishMessage}</p> : null}
        <p className="admin-muted">
          Введи заголовок — Groq подготовит русскую статью и варианты EN/UK. Только черновик: не вводи пароли, коды подтверждения или полные документы.
        </p>

        <section className="admin-card admin-ideas">
          <div className="admin-card-heading">
            <div>
              <p className="eyebrow">Demand backlog</p>
              <h2>Банк идей</h2>
            </div>
            <strong>{ideas.length}</strong>
            <label className="button secondary admin-upload">
              <Upload size={16} aria-hidden="true" />
              Импорт CSV
              <input type="file" accept=".csv,text/csv" onChange={importIdeas} hidden />
            </label>
          </div>
          <p className="admin-muted">
            Импортируй запросы из Search Console, Trends или Keyword Planner. Популярность — сигнал для приоритета, не доказательство правила платформы.
          </p>
          <details className="admin-idea-criteria">
            <summary>Критерии сортировки идей</summary>
            <ul>
              {articleIdeaCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
            </ul>
          </details>
          {ideasError ? <p className="admin-form-error">{ideasError}</p> : null}
          {ideas.length === 0 ? (
            <p className="admin-muted">Пока нет идей. CSV должен начинаться с `title`; также можно указать platform, language, keyword, intent, priority, demand, source.</p>
          ) : (
            <div className="admin-ideas-list">
              {ideas.map((idea) => (
                <div className="admin-idea-row" key={idea.id}>
                  <div>
                    <strong>{idea.title}</strong>
                    <small>{idea.platform || "Без платформы"} · {idea.locale.toUpperCase()} · {idea.priority} · {idea.status}</small>
                    {idea.demandEvidence ? <small>{idea.demandEvidence}</small> : null}
                  </div>
                  <button type="button" className="button ghost" onClick={() => void applyIdea(idea)}>В черновик</button>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="admin-utility-grid">
          <section className="admin-card admin-preflight">
            <div className="admin-card-heading">
              <div>
                <p className="eyebrow">Before review</p>
                <h2>Local preflight</h2>
              </div>
              <strong>{passedChecks}/{checks.length}</strong>
            </div>
            <p className="admin-muted">
              A quick local check. It does not replace research, fact-checking or Final QA.
            </p>
            <ul className="admin-check-list">
              {checks.map((check) => (
                <li key={check.label} className={check.ok ? "ok" : "needs-review"}>
                  <span aria-hidden="true">{check.ok ? "✓" : "!"}</span>
                  <div><strong>{check.label}</strong><small>{check.detail}</small></div>
                </li>
              ))}
            </ul>
          </section>

          <section className="admin-card">
            <div className="admin-card-heading">
              <div>
                <p className="eyebrow">Workspace</p>
                <h2>Draft library</h2>
              </div>
              <strong>{savedDrafts.length}</strong>
            </div>
            {savedDrafts.length === 0 ? (
              <p className="admin-muted">Saved drafts will appear here.</p>
            ) : (
              <div className="admin-library-list">
                {savedDrafts.slice(0, 6).map((item) => (
                  <div className="admin-library-item" key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setDraft(item.draft);
                        setStatus(item.status || "draft");
                      }}
                    >
                      <strong>{item.title}</strong>
                      <small>{item.slug} · {item.status}</small>
                    </button>
                    <button type="button" className="admin-remove" onClick={() => removeSavedDraft(item.id)} aria-label={`Delete ${item.title}`}>×</button>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="admin-grid">
          <form
            className="admin-editor"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="admin-card">
              <h2>Template</h2>
              <div className="template-grid">
                {(Object.keys(draftTemplates) as DraftTemplateId[]).map(
                  (templateId) => (
                    <button
                      type="button"
                      className={
                        draft.templateId === templateId
                          ? "template-option active"
                          : "template-option"
                      }
                      key={templateId}
                      onClick={() => selectTemplate(templateId)}
                    >
                      {draftTemplates[templateId].label}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="admin-card form-grid">
              <label className="field">
                <span>Language</span>
                <select
                  value={draft.locale}
                  onChange={(event) =>
                    setField("locale", event.target.value as Locale)
                  }
                >
                  {locales.map((locale) => (
                    <option key={locale} value={locale}>
                      {locale.toUpperCase()}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Article status</span>
                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value as ArticleStatus)}
                >
                  {articleStatuses.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Platform</span>
                <input
                  value={draft.platform}
                  onChange={(event) => setField("platform", event.target.value)}
                />
              </label>
              <label className="field">
                <span>Primary keyword</span>
                <input
                  value={draft.primaryKeyword}
                  onChange={(event) =>
                    setField("primaryKeyword", event.target.value)
                  }
                />
              </label>
              <label className="field">
                <span>Slug</span>
                <input
                  value={draft.slug}
                  onChange={(event) =>
                    setField("slug", slugify(event.target.value))
                  }
                />
              </label>
              <label className="field full">
                <span>Title</span>
                <input
                  value={draft.title}
                  onChange={(event) => {
                    setField("title", event.target.value);
                    if (!draft.slug)
                      setField("slug", slugify(event.target.value));
                  }}
                />
              </label>
              <label className="field full">
                <span>Summary</span>
                <textarea
                  value={draft.summary}
                  onChange={(event) => setField("summary", event.target.value)}
                />
              </label>
              <label className="field full">
                <span>Quick answer</span>
                <textarea
                  value={draft.quickAnswer}
                  onChange={(event) =>
                    setField("quickAnswer", event.target.value)
                  }
                />
              </label>
            </div>

            <div className="admin-card">
              <h2>Language versions</h2>
              <p className="admin-muted">
                Keep one article identity while preparing separate RU, EN and UK copy.
              </p>
              <div className="admin-stack">
                {locales.map((locale) => (
                  <div className="admin-section-editor" key={locale}>
                    <strong>{locale.toUpperCase()} version</strong>
                    <input
                      value={draft.translations?.[locale]?.title ?? ""}
                      placeholder="Translated title"
                      onChange={(event) => setTranslation(locale, "title", event.target.value)}
                    />
                    <textarea
                      value={draft.translations?.[locale]?.summary ?? ""}
                      placeholder="Translated summary"
                      onChange={(event) => setTranslation(locale, "summary", event.target.value)}
                    />
                    <textarea
                      value={draft.translations?.[locale]?.quickAnswer ?? ""}
                      placeholder="Translated quick answer"
                      onChange={(event) => setTranslation(locale, "quickAnswer", event.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card">
              <h2>Guide body</h2>
              <div className="admin-stack">
                {draft.sections.map((section, index) => (
                  <div
                    className="admin-section-editor"
                    key={`${index}-${section.heading}`}
                  >
                    <input
                      value={section.heading}
                      onChange={(event) =>
                        setDraft((current) =>
                          updateSection(
                            current,
                            "sections",
                            index,
                            "heading",
                            event.target.value,
                          ),
                        )
                      }
                    />
                    <textarea
                      value={section.body}
                      onChange={(event) =>
                        setDraft((current) =>
                          updateSection(
                            current,
                            "sections",
                            index,
                            "body",
                            event.target.value,
                          ),
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-heading">
                <div>
                  <h2>Structured tables</h2>
                  <p className="admin-muted">Добавляй таблицы для сравнений, проверок, документов и следующих шагов.</p>
                </div>
                <button type="button" className="button secondary" onClick={addTable}>Добавить таблицу</button>
              </div>
              {(draft.tables ?? []).length === 0 ? (
                <p className="admin-muted">Таблицы необязательны. Используй их только там, где они упрощают сравнение.</p>
              ) : (
                <div className="admin-table-editors">
                  {(draft.tables ?? []).map((table, tableIndex) => (
                    <div className="admin-table-editor" key={`table-${tableIndex}`}>
                      <div className="admin-table-editor-head">
                        <input
                          value={table.heading}
                          placeholder="Название таблицы"
                          onChange={(event) => setDraft((current) => updateTable(current, tableIndex, (item) => ({ ...item, heading: event.target.value })))}
                        />
                        <button type="button" className="button ghost" onClick={() => removeTable(tableIndex)}>Удалить таблицу</button>
                      </div>
                      <div className="admin-table-scroll">
                        <table className="v4-table admin-edit-table">
                          <thead>
                            <tr>
                              {table.columns.map((column, columnIndex) => (
                                <th key={`column-${columnIndex}`}>
                                  <input
                                    value={column}
                                    aria-label={`Название колонки ${columnIndex + 1}`}
                                    onChange={(event) => setDraft((current) => updateTable(current, tableIndex, (item) => ({
                                      ...item,
                                      columns: item.columns.map((value, index) => index === columnIndex ? event.target.value : value),
                                    })))}
                                  />
                                  <button type="button" className="admin-remove" onClick={() => removeTableColumn(tableIndex, columnIndex)} aria-label={`Удалить колонку ${columnIndex + 1}`}>×</button>
                                </th>
                              ))}
                              <th aria-label="Действия" />
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row, rowIndex) => (
                              <tr key={`row-${rowIndex}`}>
                                {table.columns.map((_, columnIndex) => (
                                  <td key={`cell-${rowIndex}-${columnIndex}`}>
                                    <textarea
                                      value={row[columnIndex] ?? ""}
                                      aria-label={`Строка ${rowIndex + 1}, колонка ${columnIndex + 1}`}
                                      onChange={(event) => setDraft((current) => updateTable(current, tableIndex, (item) => ({
                                        ...item,
                                        rows: item.rows.map((itemRow, index) => index === rowIndex
                                          ? itemRow.map((value, cellIndex) => cellIndex === columnIndex ? event.target.value : value)
                                          : itemRow),
                                      })))}
                                    />
                                  </td>
                                ))}
                                <td><button type="button" className="admin-remove" onClick={() => removeTableRow(tableIndex, rowIndex)} aria-label={`Удалить строку ${rowIndex + 1}`}>×</button></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="admin-table-actions">
                        <button type="button" className="button ghost" onClick={() => addTableRow(tableIndex)}>Добавить строку</button>
                        <button type="button" className="button ghost" onClick={() => addTableColumn(tableIndex)}>Добавить колонку</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="admin-card form-grid">
              <label className="field full">
                <span>Warnings</span>
                <textarea
                  value={draft.warnings}
                  onChange={(event) => setField("warnings", event.target.value)}
                />
              </label>
              <label className="field full">
                <span>Official sources</span>
                <textarea
                  value={draft.officialSources}
                  onChange={(event) =>
                    setField("officialSources", event.target.value)
                  }
                />
              </label>
              <label className="field full">
                <span>Telegram CTA</span>
                <textarea
                  value={draft.cta}
                  onChange={(event) => setField("cta", event.target.value)}
                />
              </label>
            </div>

            <div className="admin-card">
              <h2>Common questions</h2>
              <div className="admin-stack">
                {draft.faq.map((item, index) => (
                  <div
                    className="admin-section-editor"
                    key={`${index}-${item.heading}`}
                  >
                    <input
                      value={item.heading}
                      onChange={(event) =>
                        setDraft((current) =>
                          updateSection(
                            current,
                            "faq",
                            index,
                            "heading",
                            event.target.value,
                          ),
                        )
                      }
                    />
                    <textarea
                      value={item.body}
                      onChange={(event) =>
                        setDraft((current) =>
                          updateSection(
                            current,
                            "faq",
                            index,
                            "body",
                            event.target.value,
                          ),
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>

          <aside className="admin-preview" aria-label="Draft preview">
            <article>
              <p className="eyebrow">
                {draft.platform || "Platform"} ·{" "}
                {draftTemplates[draft.templateId].label}
              </p>
              <h1>{draft.title || "Untitled guide"}</h1>
              <p className="lede">
                {draft.summary || "Summary will appear here."}
              </p>
              <div className="quick-answer">
                <h2>Quick answer</h2>
                <p>
                  {draft.quickAnswer || "Write the short practical answer."}
                </p>
              </div>
              {draft.sections.map((section, index) => (
                <section key={`${section.heading}-${index}`}>
                  <h2>{section.heading}</h2>
                  <p>{section.body || "Draft section text."}</p>
                </section>
              ))}
              {(draft.tables ?? []).map((table, tableIndex) => (
                <section key={`preview-table-${tableIndex}`}>
                  <h2>{table.heading || "Table"}</h2>
                  <div className="v4-table-wrap">
                    <table className="v4-table">
                      <thead><tr>{table.columns.map((column, index) => <th key={`preview-column-${index}`}>{column || "Column"}</th>)}</tr></thead>
                      <tbody>{table.rows.map((row, rowIndex) => <tr key={`preview-row-${rowIndex}`}>{table.columns.map((_, columnIndex) => <td key={`preview-cell-${rowIndex}-${columnIndex}`}>{row[columnIndex] || "—"}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                </section>
              ))}
              <section>
                <h2>Before you continue</h2>
                <p>
                  {draft.warnings ||
                    "Add limitations, risks and no-guarantee wording."}
                </p>
              </section>
              <section>
                <h2>Common questions</h2>
                {draft.faq.map((item, index) => (
                  <div key={`${item.heading}-${index}`}>
                    <h3>{item.heading}</h3>
                    <p>{item.body || "Draft answer."}</p>
                  </div>
                ))}
              </section>
            </article>
          </aside>
        </div>
      </section>
    </main>
  );
}
