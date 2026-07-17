import { publishedIssues } from "@/data";
import { sitemapXml, xmlResponse } from "@/lib/xml";
import { getV4Article } from "@/data/v4";

export const dynamic = "force-static";
export function GET() {
  return xmlResponse(
    sitemapXml(
      publishedIssues.map((issue) => ({
        segments: [issue.platformId, issue.slug],
        lastmod: getV4Article(issue.id, "en")?.reviewedAt ?? issue.updatedAt,
      })),
    ),
  );
}
