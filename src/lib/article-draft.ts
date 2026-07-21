import type { Locale } from "./locales";

export type DraftTemplateId =
  "restriction" | "verification" | "payout-hold" | "appeal";

export type DraftSection = {
  heading: string;
  body: string;
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
  warnings: string;
  faq: DraftSection[];
  officialSources: string;
  cta: string;
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
    locale: "en",
    platform: "PayPal",
    slug: "",
    primaryKeyword: "",
    title: "",
    summary: "",
    quickAnswer: "",
    sections: template.sections.map((heading) => ({ heading, body: "" })),
    warnings: "",
    faq: [
      { heading: "Can this be fixed?", body: "" },
      { heading: "How long can it take?", body: "" },
      { heading: "What should I send first?", body: "" },
    ],
    officialSources: "",
    cta: "Ask for an individual review in Telegram. No outcome is guaranteed.",
  };
}

export function draftToMarkdown(draft: ArticleDraft) {
  const sections = draft.sections
    .map((section) => `## ${section.heading}\n\n${section.body || "[Draft]"}`)
    .join("\n\n");
  const faq = draft.faq
    .map((item) => `### ${item.heading}\n\n${item.body || "[Draft]"}`)
    .join("\n\n");
  return [
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
    "## Before you continue",
    draft.warnings || "[Draft]",
    "## Common questions",
    faq,
    "## Official sources",
    draft.officialSources || "[Draft]",
    "## Telegram CTA",
    draft.cta,
  ].join("\n\n");
}
