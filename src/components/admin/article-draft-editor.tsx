"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, FileText, Save, Trash2 } from "lucide-react";
import {
  createDraft,
  draftTemplates,
  draftToMarkdown,
  type ArticleDraft,
  type DraftTemplateId,
} from "@/lib/article-draft";
import { locales, type Locale } from "@/lib/locales";

const storageKey = "resolution-hub.article-draft";

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
  const markdown = useMemo(() => draftToMarkdown(draft), [draft]);
  const wordCount = useMemo(
    () => markdown.split(/\s+/).filter(Boolean).length,
    [markdown],
  );

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    let frame = 0;
    try {
      const savedDraft = JSON.parse(saved) as ArticleDraft;
      frame = requestAnimationFrame(() => setDraft(savedDraft));
    } catch {
      localStorage.removeItem(storageKey);
    }
    return () => cancelAnimationFrame(frame);
  }, []);

  function setField<Key extends keyof ArticleDraft>(
    key: Key,
    value: ArticleDraft[Key],
  ) {
    setDraft((current) => ({ ...current, [key]: value }));
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
  }

  return (
    <main id="main" className="admin-page">
      <section className="admin-shell">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Resolution Hub internal</p>
            <h1>Article draft builder</h1>
            <p>
              Local draft only. Nothing is published, sent or written into the
              content pipeline from this screen.
            </p>
          </div>
          <div className="admin-status">
            <span>Draft</span>
            <strong>{wordCount} words</strong>
          </div>
        </header>

        <div className="admin-actions">
          <button
            type="button"
            className="button secondary"
            onClick={() => {
              localStorage.setItem(storageKey, JSON.stringify(draft));
            }}
          >
            <Save size={16} aria-hidden="true" />
            Save draft
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
