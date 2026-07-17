import { z } from "zod";

export const localeSchema = z.enum(["en", "ru", "uk"]);
export const localizedTextSchema = z.object({
  en: z.string().min(12),
  ru: z.string().min(12),
  uk: z.string().min(12),
});

export const sectionSchema = z.object({
  title: z.string().min(3),
  text: z.string().min(20),
});

export const localizedIssueContentSchema = z.object({
  title: z.string().min(12),
  metaTitle: z.string().min(20).max(75),
  metaDescription: z.string().min(80).max(180),
  intro: z.string().min(80),
  quickAnswer: z.string().min(80),
  meaning: z.string().min(80),
  symptoms: z.array(z.string().min(15)).min(3),
  possibleReasons: z.array(sectionSchema).min(3),
  firstSteps: z.array(sectionSchema).min(3),
  mistakesToAvoid: z.array(sectionSchema).min(3),
  documentsOftenRequested: z.array(sectionSchema).min(2).optional(),
  whenToContactSupport: z.string().min(80),
  faq: z
    .array(
      z.object({ question: z.string().min(12), answer: z.string().min(40) }),
    )
    .min(3),
  relatedIssueIds: z.array(z.string()).max(6),
  ctaTitle: z.string().min(12),
  ctaText: z.string().min(50),
});

export const platformSchema = z.object({
  id: z.string().min(2),
  name: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  kind: z.enum(["marketplace", "payment"]),
  description: localizedTextSchema,
  disclaimer: localizedTextSchema,
});

export const issuePageSchema = z.object({
  id: z.string().min(4),
  platformId: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  intent: z.enum(["informational", "appeal", "verification", "payout"]),
  tags: z.array(z.string()).min(1),
  priority: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  status: z.enum(["draft", "reviewed", "published"]),
  updatedAt: z.string().date(),
  reviewedAt: z.string().date().nullable(),
  reviewStatus: z.enum(["unreviewed", "editorial", "fact-checked"]),
  sources: z.array(z.string().url()),
  needsLegalReview: z.boolean(),
  needsFactCheck: z.boolean(),
  keywords: z.object({
    primary: z.string().min(3),
    secondary: z.array(z.string()),
  }),
  content: z.record(localeSchema, localizedIssueContentSchema),
});

export type Platform = z.infer<typeof platformSchema>;
export type IssuePage = z.infer<typeof issuePageSchema>;
export type LocalizedIssueContent = z.infer<typeof localizedIssueContentSchema>;
export type ContentSection = z.infer<typeof sectionSchema>;
