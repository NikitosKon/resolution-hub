import type { Locale } from "@/lib/locales";

export type V4ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; title?: string; text: string };

export type V4ArticleSection = {
  id: string;
  title: string;
  blocks: V4ArticleBlock[];
};

export type V4VisualId =
  | "paypal-long-hold-state-check"
  | "ebay-mc011-evidence-flow"
  | "grailed-four-state-check";

export type V4ArticleContent = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  quickAnswerTitle: string;
  quickAnswer: string;
  sections: V4ArticleSection[];
  sources: string[];
  visual?: { id: V4VisualId; afterSectionId: string };
  ctaTitle: string;
  ctaText: string;
  reviewedAt: string;
};

export type V4LocalizedArticle = Record<Locale, V4ArticleContent>;
