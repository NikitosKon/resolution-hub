import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/locales";
import { createMetadata } from "@/lib/metadata";
import {
  issueByRoute,
  platformBySlug,
  platforms,
  publishedIssues,
} from "@/data";
import {
  ArticlePage,
  HomePage,
  HubPage,
  JsonLd,
  LegalPage,
  articleJsonLd,
  hubDefinitions,
  type LegalSlug,
  PlatformPage,
  websiteJsonLd,
} from "@/components/pages";
import { getDictionary } from "@/data/dictionaries";
import { getV4Article } from "@/data/v4";

type Props = { params: Promise<{ locale: string; segments?: string[] }> };
const legalSlugs = [
  "privacy",
  "terms",
  "cookies",
  "disclaimer",
  "contact",
] as const;

export const dynamicParams = false;
export function generateStaticParams() {
  return [
    { segments: [] },
    ...platforms.map((platform) => ({ segments: [platform.slug] })),
    ...hubDefinitions.map((hub) => ({ segments: [hub.slug] })),
    ...legalSlugs.map((slug) => ({ segments: [slug] })),
    ...publishedIssues.map((issue) => ({
      segments: [issue.platformId, issue.slug],
    })),
  ];
}

function assertLocale(value: string): asserts value is Locale {
  if (!isLocale(value)) notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, segments = [] } = await params;
  assertLocale(rawLocale);
  const locale = rawLocale;
  const d = getDictionary(locale);
  if (!segments.length)
    return createMetadata({
      locale,
      title: d.hero.title,
      description: d.hero.text,
    });
  if (segments.length === 1) {
    const segment = segments[0]!;
    const platform = platformBySlug(segment);
    if (platform)
      return createMetadata({
        locale,
        segments,
        title: `${platform.name} ${d.category.title}`,
        description: `${platform.description[locale]} ${d.category.intro}`,
      });
    const hub = hubDefinitions.find((item) => item.slug === segment);
    if (hub)
      return createMetadata({
        locale,
        segments,
        title: hub.title[locale],
        description: hub.description[locale],
      });
    if (legalSlugs.includes(segment as LegalSlug))
      return createMetadata({
        locale,
        segments,
        title: `${segment[0]!.toUpperCase()}${segment.slice(1)}`,
        description: `${d.common.disclaimer} ${d.common.sensitive}`,
        ...(segment === "contact"
          ? { robots: { index: false, follow: true } }
          : {}),
      });
  }
  if (segments.length === 2) {
    const issue = issueByRoute(segments[0]!, segments[1]!);
    if (issue && issue.status === "published" && !issue.needsFactCheck) {
      const content = getV4Article(issue.id, locale) ?? issue.content[locale];
      const modifiedTime =
        "reviewedAt" in content ? content.reviewedAt : issue.updatedAt;
      return createMetadata({
        locale,
        segments,
        title: content.metaTitle,
        description: content.metaDescription,
        article: {
          publishedTime: issue.updatedAt,
          modifiedTime,
        },
      });
    }
  }
  return { title: "Not found", robots: { index: false, follow: false } };
}

export default async function CatchAllPage({ params }: Props) {
  const { locale: rawLocale, segments = [] } = await params;
  assertLocale(rawLocale);
  const locale = rawLocale;
  if (!segments.length)
    return (
      <>
        <JsonLd data={websiteJsonLd(locale)} />
        <HomePage locale={locale} />
      </>
    );
  if (segments.length === 1) {
    const segment = segments[0]!;
    const platform = platformBySlug(segment);
    if (platform) return <PlatformPage locale={locale} platform={platform} />;
    const hub = hubDefinitions.find((item) => item.slug === segment);
    if (hub) return <HubPage locale={locale} hub={hub} />;
    if (legalSlugs.includes(segment as LegalSlug))
      return <LegalPage locale={locale} slug={segment as LegalSlug} />;
  }
  if (segments.length === 2) {
    const platform = platformBySlug(segments[0]!);
    const issue = issueByRoute(segments[0]!, segments[1]!);
    if (
      platform &&
      issue &&
      issue.status === "published" &&
      !issue.needsFactCheck
    )
      return (
        <>
          <JsonLd data={articleJsonLd(locale, issue, platform)} />
          <ArticlePage locale={locale} issue={issue} platform={platform} />
        </>
      );
  }
  notFound();
}
