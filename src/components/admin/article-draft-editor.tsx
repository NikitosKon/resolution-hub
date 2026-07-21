"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, FileText, LogOut, Save, Trash2 } from "lucide-react";
import {
  createDraft,
  draftTemplates,
  draftToMarkdown,
  validateDraft,
  type ArticleDraft,
  type DraftTemplateId,
} from "@/lib/article-draft";
import { locales, type Locale } from "@/lib/locales";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

const storageKey = "resolution-hub.article-draft";
const libraryKey = "resolution-hub.article-drafts";

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
        return;
      } catch {
        // Keep the local library available if the database is not configured yet.
      }
    }
    void loadCloudDrafts();
    const saved = localStorage.getItem(storageKey);
    const library = localStorage.getItem(libraryKey);
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

  async function saveToLibrary() {
    const record: SavedDraft = {
      id: `${Date.now()}`,
      title: draft.title || "Untitled guide",
      slug: draft.slug || "no-slug",
      updatedAt: new Date().toISOString(),
      status,
      draft,
    };
    const next = [record, ...savedDrafts.filter((item) => item.slug !== draft.slug)];
    setSavedDrafts(next);
    localStorage.setItem(libraryKey, JSON.stringify(next));
    localStorage.setItem(storageKey, JSON.stringify(draft));
    try {
      const supabase = createSupabaseBrowserClient();
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
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
    } catch {
      // LocalStorage remains a safe offline fallback.
    }
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
            onClick={saveToLibrary}
          >
            <Save size={16} aria-hidden="true" />
            Save to library
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
