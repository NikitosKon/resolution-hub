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
};

export type DraftVisualBlockType = "checklist" | "timeline" | "decision-tree" | "callout" | "source-card";

export type DraftVisualBlock = {
  type: DraftVisualBlockType;
  heading: string;
  body: string;
  items: string[];
  source?: string;
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
      ok: (draft.tables ?? []).length === 1 && (draft.visualBlocks ?? []).length >= 2,
      detail:
        (draft.tables ?? []).length === 1 && (draft.visualBlocks ?? []).length >= 2
          ? "One table and at least two visual blocks are present."
          : "Add one table and at least two useful visual blocks before approval.",
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
    label: "Account restriction",
    sections: [
      "What the notice means",
      "What to check first",
      "Documents or evidence to prepare",
      "Mistakes to avoid",
      "When to contact support",
    ],
  },
  verification: {
    label: "Verification issue",
    sections: [
      "What is being verified",
      "How to read the request",
      "Evidence that may be relevant",
      "Submission mistakes",
      "What remains account-specific",
    ],
  },
  "payout-hold": {
    label: "Payout hold",
    sections: [
      "What is held",
      "Events that may affect the timeline",
      "What to check in the account",
      "What not to assume",
      "Next safe steps",
    ],
  },
  appeal: {
    label: "Appeal preparation",
    sections: [
      "What decision is being appealed",
      "Facts to collect",
      "Evidence to organize",
      "Appeal message structure",
      "Risks before submitting",
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
    warnings: "",
    faq: [
      { heading: "Can this be fixed?", body: "" },
      { heading: "How long can it take?", body: "" },
      { heading: "What should I send first?", body: "" },
    ],
    officialSources: "",
    cta: "Ask for an individual review in Telegram. No outcome is guaranteed.",
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
    return [`## ${table.heading || "Table"}`, header, divider, rows].join("\n");
  }).join("\n\n");
  const visualBlocks = (draft.visualBlocks ?? []).map((block) => [
    `## ${block.heading || block.type}`,
    block.body || "",
    ...(block.items.length ? [block.items.map((item) => `- ${item}`).join("\n")] : []),
    block.source ? `Source: ${block.source}` : "",
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
