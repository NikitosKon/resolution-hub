import { notFound } from "next/navigation";
import { publishedIssues } from "@/data";
import { isLocale, locales } from "@/lib/locales";
import { siteConfig } from "@/lib/config";
import { escapeXml, xmlResponse } from "@/lib/xml";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function GET(
  _: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const items = [...publishedIssues]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 20)
    .map((issue) => {
      const c = issue.content[locale];
      const link = `${siteConfig.url}/${locale}/${issue.platformId}/${issue.slug}/`;
      return `<item><title>${escapeXml(c.title)}</title><link>${escapeXml(link)}</link><guid>${escapeXml(link)}</guid><pubDate>${new Date(`${issue.updatedAt}T12:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(c.metaDescription)}</description></item>`;
    })
    .join("");
  return xmlResponse(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(siteConfig.name)} updates</title><link>${siteConfig.url}/${locale}/</link><description>Recently reviewed account issue guides</description>${items}</channel></rss>`,
  );
}
