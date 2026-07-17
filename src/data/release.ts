import type { IssuePage } from "./schema";

export const currentRelease = [
  { issueId: "paypal-funds-held-180-days", qaDecision: "PASS" },
  { issueId: "ebay-mc011-documents-requested", qaDecision: "PASS" },
  { issueId: "grailed-frozen-after-sale", qaDecision: "PASS" },
] as const;

const currentReleaseIds = new Set<string>(
  currentRelease
    .filter((entry) => entry.qaDecision === "PASS")
    .map((entry) => entry.issueId),
);

export function isPublicationEligibleIssue(
  issue: IssuePage | undefined,
): issue is IssuePage {
  return Boolean(
    issue &&
    currentReleaseIds.has(issue.id) &&
    issue.status === "published" &&
    issue.reviewStatus === "fact-checked" &&
    !issue.needsFactCheck &&
    !issue.needsLegalReview,
  );
}
