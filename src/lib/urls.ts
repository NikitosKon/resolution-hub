import { locales, type Locale } from "./locales";
import { siteConfig } from "./config";

export function pathFor(locale: Locale, segments: string[] = []) {
  return `/${[locale, ...segments].join("/")}/`;
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function languageAlternates(segments: string[] = []) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, pathFor(locale, segments)]),
    ),
    "x-default": "/",
  };
}

export function localizedPath(currentPath: string, locale: Locale) {
  const parts = currentPath.split("/").filter(Boolean);
  if (parts.length && locales.includes(parts[0] as Locale)) parts[0] = locale;
  else parts.unshift(locale);
  return `/${parts.join("/")}/`;
}
