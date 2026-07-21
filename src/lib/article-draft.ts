import type { Locale } from "./locales";
import { locales } from "./locales";

export type DraftTemplateId =
  "restriction" | "verification" | "payout-hold" | "appeal";

export type DraftSection = {
  heading: string;
  body: string;
  factChecked?: boolean;
};

export type DraftTable = {
  heading: string;
  columns: string[];
  rows: string[][];
  /** Insert after this zero-based article section when present. */
  afterSection?: number;
};

export type DraftVisualBlockType = "checklist" | "timeline" | "decision-tree" | "callout" | "source-card";

export type DraftVisualBlock = {
  type: DraftVisualBlockType;
  heading: string;
  body: string;
  items: string[];
  source?: string;
  /** Insert after this zero-based article section when present. */
  afterSection?: number;
};

export type DraftImage = {
  src: string;
  alt: string;
  caption: string;
  afterSection?: number;
};

export type DraftTranslation = {
  title: string;
  summary: string;
  quickAnswer: string;
};

export type ArticleDraft = {
  templateId: DraftTemplateId;
  locale: Locale;
  platform: string;
  slug: string;
  primaryKeyword: string;
  title: string;
  summary: string;
  quickAnswer: string;
  sections: DraftSection[];
  tables: DraftTable[];
  visualBlocks: DraftVisualBlock[];
  images: DraftImage[];
  warnings: string;
  faq: DraftSection[];
  officialSources: string;
  cta: string;
  translations: Record<Locale, DraftTranslation>;
};

export type DraftCheck = {
  label: string;
  ok: boolean;
  detail: string;
};

export function draftWordCount(draft: ArticleDraft) {
  const parts = [
    draft.title,
    draft.summary,
    draft.quickAnswer,
    ...draft.sections.flatMap((section) => [section.heading, section.body]),
    ...(draft.tables ?? []).flatMap((table) => [table.heading, ...table.columns, ...table.rows.flat()]),
    ...(draft.visualBlocks ?? []).flatMap((block) => [block.heading, block.body, ...block.items]),
    ...(draft.images ?? []).flatMap((image) => [image.alt, image.caption]),
    draft.warnings,
    ...draft.faq.flatMap((item) => [item.heading, item.body]),
  ];
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

/** Local preflight only. It never replaces V4 research or Final QA. */
export function validateDraft(draft: ArticleDraft): DraftCheck[] {
  const checks: DraftCheck[] = [
    {
      label: "Title",
      ok: Boolean(draft.title.trim()),
      detail: draft.title.trim() ? "Title is present." : "Add an H1 title.",
    },
    {
      label: "Slug",
      ok: Boolean(draft.slug.trim()),
      detail: draft.slug.trim() ? "Slug is present." : "Add a stable slug.",
    },
    {
      label: "Quick answer",
      ok: Boolean(draft.quickAnswer.trim()),
      detail: draft.quickAnswer.trim()
        ? "Short answer is present."
        : "Add the answer before the long sections.",
    },
    {
      label: "Sections",
      ok: draft.sections.every((section) => section.body.trim()),
      detail: draft.sections.every((section) => section.body.trim())
        ? "Every section has text."
        : "Fill every section or remove it from the template.",
    },
    {
      label: "Section fact review",
      ok: draft.sections.length > 0 && draft.sections.every((section) => section.factChecked === true),
      detail:
        draft.sections.length > 0 && draft.sections.every((section) => section.factChecked === true)
          ? "Every section is marked as checked against an official source."
          : "Check every section against an official source before approval.",
    },
    {
      label: "Visual structure",
      ok: (draft.tables ?? []).length >= 1 && (draft.tables ?? []).length <= 5 && (draft.visualBlocks ?? []).length >= 2 && (draft.visualBlocks ?? []).length <= 10,
      detail:
        (draft.tables ?? []).length >= 1 && (draft.tables ?? []).length <= 5 && (draft.visualBlocks ?? []).length >= 2 && (draft.visualBlocks ?? []).length <= 10
          ? `${draft.tables.length} contextual table(s) and ${draft.visualBlocks.length} visual block(s) are present.`
          : "Use 1–5 contextual tables and 2–10 useful visual blocks; remove blocks that add no information.",
    },
    {
      label: "Article depth",
      // Length is an editorial signal, not a publication gate. A shorter,
      // well-supported guide is preferable to padding a draft with repetition.
      ok: true,
      detail: `Current article length: ${draftWordCount(draft)} words. Length is advisory; add detail only when it helps the reader.`,
    },
    {
      label: "Official sources",
      ok: Boolean(draft.officialSources.trim()),
      detail: draft.officialSources.trim()
        ? "Source field is present."
        : "Add official source URLs before review.",
    },
    {
      label: "Safety wording",
      ok: Boolean(draft.warnings.trim()) && Boolean(draft.cta.trim()),
      detail:
        draft.warnings.trim() && draft.cta.trim()
          ? "Warnings and CTA are present."
          : "Add a warning and a calm, non-guaranteed CTA.",
    },
  ];

  return checks;
}

export const draftTemplates: Record<
  DraftTemplateId,
  { label: string; sections: string[] }
> = {
  restriction: {
    label: "Ограничение аккаунта",
    sections: [
      "Что означает уведомление",
      "Что проверить сначала",
      "Какие сведения подготовить",
      "Каких ошибок избежать",
      "Когда обращаться в поддержку",
    ],
  },
  verification: {
    label: "Проблема с проверкой",
    sections: [
      "Что именно проверяется",
      "Как понять запрос платформы",
      "Какие сведения могут понадобиться",
      "Ошибки при отправке",
      "Что зависит от конкретного аккаунта",
    ],
  },
  "payout-hold": {
    label: "Задержка выплаты",
    sections: [
      "Что именно удерживается",
      "Какие события могут влиять на срок",
      "Что проверить в аккаунте",
      "Чего не следует предполагать",
      "Безопасные следующие шаги",
    ],
  },
  appeal: {
    label: "Подготовка обращения",
    sections: [
      "Какое решение вы обжалуете",
      "Какие факты собрать",
      "Как организовать сведения",
      "Структура обращения",
      "Риски перед отправкой",
    ],
  },
};

export function createDraft(templateId: DraftTemplateId): ArticleDraft {
  const template = draftTemplates[templateId];
  return {
    templateId,
    locale: "ru",
    platform: "PayPal",
    slug: "",
    primaryKeyword: "",
    title: "",
    summary: "",
    quickAnswer: "",
    sections: template.sections.map((heading) => ({ heading, body: "", factChecked: false })),
    tables: [],
    visualBlocks: [],
    images: [],
    warnings: "",
    faq: [
      { heading: "Можно ли решить эту проблему?", body: "" },
      { heading: "Сколько это может занять?", body: "" },
      { heading: "Что отправить сначала?", body: "" },
    ],
    officialSources: "",
    cta: "Если ситуация остаётся неясной, можно попросить индивидуальный разбор в Telegram: @helpgrailed. Результат не гарантируется.",
    translations: {
      en: { title: "", summary: "", quickAnswer: "" },
      ru: { title: "", summary: "", quickAnswer: "" },
      uk: { title: "", summary: "", quickAnswer: "" },
    },
  };
}

export function draftToMarkdown(
  draft: ArticleDraft,
  status: "draft" | "review" | "approved" | "published" = "draft",
) {
  const sections = draft.sections
    .map((section) => `## ${section.heading}\n\n${section.body || "[Draft]"}\n\nFact checked: ${section.factChecked ? "yes" : "no"}`)
    .join("\n\n");
  const faq = draft.faq
    .map((item) => `### ${item.heading}\n\n${item.body || "[Draft]"}`)
    .join("\n\n");
  const tables = (draft.tables ?? []).map((table) => {
    const header = `| ${table.columns.join(" | ")} |`;
    const divider = `| ${table.columns.map(() => "---").join(" | ")} |`;
    const rows = table.rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
    return [`## ${table.heading || "Table"}`, table.afterSection !== undefined ? `Insert after section: ${table.afterSection + 1}` : "", header, divider, rows].filter(Boolean).join("\n");
  }).join("\n\n");
  const visualBlocks = (draft.visualBlocks ?? []).map((block) => [
    `## ${block.heading || block.type}`,
    block.afterSection !== undefined ? `Insert after section: ${block.afterSection + 1}` : "",
    block.body || "",
    ...(block.items.length ? [block.items.map((item) => `- ${item}`).join("\n")] : []),
    block.source ? `Source: ${block.source}` : "",
  ].filter(Boolean).join("\n\n")).join("\n\n");
  const images = (draft.images ?? []).map((image) => [
    "## Изображение",
    image.afterSection !== undefined ? `Insert after section: ${image.afterSection + 1}` : "",
    `![${image.alt || "Иллюстрация"}](${image.src})`,
    image.caption || "",
  ].filter(Boolean).join("\n\n")).join("\n\n");
  return [
    "---",
    `status: ${status}`,
    `slug: ${draft.slug || "[slug]"}`,
    `locale: ${draft.locale}`,
    "---",
    `# ${draft.title || "[Title]"}`,
    `Platform: ${draft.platform}`,
    `Locale: ${draft.locale}`,
    `Slug: ${draft.slug || "[slug]"}`,
    `Primary keyword: ${draft.primaryKeyword || "[keyword]"}`,
    "## Summary",
    draft.summary || "[Draft]",
    "## Quick answer",
    draft.quickAnswer || "[Draft]",
    sections,
    tables,
    visualBlocks,
    images,
    "## Before you continue",
    draft.warnings || "[Draft]",
    "## Common questions",
    faq,
    "## Official sources",
    draft.officialSources || "[Draft]",
    "## Telegram CTA",
    draft.cta,
    "## Language versions",
    ...locales.map((locale) => {
      const translation = draft.translations?.[locale];
      return [`### ${locale.toUpperCase()}`, translation?.title || "[Title]", translation?.summary || "[Summary]", translation?.quickAnswer || "[Quick answer]"].join("\n\n");
    }),
  ].join("\n\n");
}
