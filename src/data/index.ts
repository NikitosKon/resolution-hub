import { issuePageSchema, platformSchema, type IssuePage } from "./schema";
import { issues as rawIssues } from "./issues";
import { platforms as rawPlatforms } from "./platforms";
import { isPublicationEligibleIssue } from "./release";

export { currentRelease, isPublicationEligibleIssue } from "./release";

export const platforms = platformSchema.array().parse(rawPlatforms);
export const issues = issuePageSchema.array().parse(rawIssues);
export const publishedIssues = issues.filter(isPublicationEligibleIssue);

export function validateContent() {
  const errors: string[] = [];
  const platformIds = new Set(platforms.map((platform) => platform.id));
  const ids = new Set(issues.map((issue) => issue.id));
  const routeKeys = new Set<string>();
  const metaTitles = new Set<string>();
  const metaDescriptions = new Set<string>();
  for (const issue of issues) {
    if (!platformIds.has(issue.platformId))
      errors.push(`${issue.id}: unknown platform`);
    const routeKey = `${issue.platformId}/${issue.slug}`;
    if (routeKeys.has(routeKey))
      errors.push(`${issue.id}: duplicate slug in platform`);
    routeKeys.add(routeKey);
    for (const locale of ["en", "ru", "uk"] as const) {
      const content = issue.content[locale];
      const titleKey = `${locale}:${content.metaTitle.toLocaleLowerCase(locale)}`;
      const descriptionKey = `${locale}:${content.metaDescription.toLocaleLowerCase(locale)}`;
      if (metaTitles.has(titleKey))
        errors.push(`${issue.id}/${locale}: duplicate meta title`);
      if (metaDescriptions.has(descriptionKey))
        errors.push(`${issue.id}/${locale}: duplicate meta description`);
      metaTitles.add(titleKey);
      metaDescriptions.add(descriptionKey);
      for (const relatedId of content.relatedIssueIds)
        if (!ids.has(relatedId))
          errors.push(`${issue.id}/${locale}: broken related ID ${relatedId}`);
      if (issue.status === "published") {
        const independentLength = JSON.stringify(content).length;
        if (independentLength < 1800)
          errors.push(`${issue.id}/${locale}: published content too short`);
        if (issue.needsFactCheck)
          errors.push(`${issue.id}: published page still needs fact check`);
        if (issue.reviewStatus !== "fact-checked")
          errors.push(`${issue.id}: published page is not fact-checked`);
      }
    }
  }
  if (new Set(issues.map((issue) => issue.id)).size !== issues.length)
    errors.push("Duplicate issue ID");
  if (errors.length)
    throw new Error(`Content validation failed:\n${errors.join("\n")}`);
  return {
    platforms: platforms.length,
    issues: issues.length,
    published: publishedIssues.length,
    drafts: issues.filter((issue) => issue.status === "draft").length,
  };
}

validateContent();

export function platformBySlug(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}
export function issueByRoute(platformSlug: string, issueSlug: string) {
  return issues.find(
    (issue) => issue.platformId === platformSlug && issue.slug === issueSlug,
  );
}
export function publishedForPlatform(platformId: string) {
  return publishedIssues.filter((issue) => issue.platformId === platformId);
}

export function relatedIssues(issue: IssuePage, limit = 4) {
  const explicit = issue.content.en.relatedIssueIds
    .map((id) => publishedIssues.find((candidate) => candidate.id === id))
    .filter(Boolean) as IssuePage[];
  const candidates = publishedIssues
    .filter(
      (candidate) =>
        candidate.id !== issue.id &&
        !explicit.some((item) => item.id === candidate.id),
    )
    .sort((a, b) => {
      const platformScore =
        Number(b.platformId === issue.platformId) -
        Number(a.platformId === issue.platformId);
      const intentScore =
        Number(b.intent === issue.intent) - Number(a.intent === issue.intent);
      const tagScore =
        b.tags.filter((tag) => issue.tags.includes(tag)).length -
        a.tags.filter((tag) => issue.tags.includes(tag)).length;
      return (
        platformScore * 10 +
        intentScore * 4 +
        tagScore * 2 +
        a.priority -
        b.priority
      );
    });
  return [...explicit, ...candidates].slice(0, limit);
}
