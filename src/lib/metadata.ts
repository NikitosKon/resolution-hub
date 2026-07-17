import type { Metadata } from "next";
import type { Locale } from "./locales";
import { absoluteUrl, languageAlternates, pathFor } from "./urls";
import { siteConfig } from "./config";

export function createMetadata(input: {
  locale: Locale;
  segments?: string[];
  title: string;
  description: string;
  published?: boolean;
  robots?: { index: boolean; follow: boolean };
  article?: { publishedTime: string; modifiedTime: string };
}): Metadata {
  const path = pathFor(input.locale, input.segments);
  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: path,
      languages: languageAlternates(input.segments),
    },
    robots:
      input.robots ??
      (input.published === false
        ? { index: false, follow: false }
        : { index: true, follow: true }),
    openGraph: {
      type: input.article ? "article" : "website",
      locale:
        input.locale === "en"
          ? "en_US"
          : input.locale === "ru"
            ? "ru_RU"
            : "uk_UA",
      url: absoluteUrl(path),
      title: input.title,
      description: input.description,
      siteName: siteConfig.name,
      ...(input.article
        ? {
            publishedTime: input.article.publishedTime,
            modifiedTime: input.article.modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
