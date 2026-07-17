import { locales } from "./locales";
import { absoluteUrl, pathFor } from "./urls";

export function escapeXml(value: string) {
  return value.replace(
    /[<>&'\"]/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[char]!,
  );
}

export function sitemapXml(
  entries: { segments?: string[]; lastmod: string }[],
) {
  const urls = entries
    .flatMap((entry) =>
      locales.map((locale) => {
        const location = absoluteUrl(pathFor(locale, entry.segments));
        const alternates = locales
          .map(
            (alt) =>
              `<xhtml:link rel="alternate" hreflang="${alt}" href="${escapeXml(absoluteUrl(pathFor(alt, entry.segments)))}"/>`,
          )
          .join("");
        return `<url><loc>${escapeXml(location)}</loc><lastmod>${entry.lastmod}</lastmod>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absoluteUrl("/"))}"/></url>`;
      }),
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
}

export const xmlResponse = (body: string) =>
  new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
