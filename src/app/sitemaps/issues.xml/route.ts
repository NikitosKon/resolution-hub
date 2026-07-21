import { publishedIssues } from "@/data";
import { sitemapXml, xmlResponse } from "@/lib/xml";
import { getV4Article } from "@/data/v4";
import { listPublishedDrafts } from "@/lib/published-drafts";

export const dynamic = "force-dynamic";
export async function GET() {
  const publishedDrafts = await listPublishedDrafts();
  return xmlResponse(
    sitemapXml(
      [
        ...publishedIssues.map((issue) => ({
        segments: [issue.platformId, issue.slug],
        lastmod: getV4Article(issue.id, "en")?.reviewedAt ?? issue.updatedAt,
        })),
        ...publishedDrafts.map((item) => ({
          segments: [item.draft.platform.toLocaleLowerCase("en").replace(/[^a-z0-9]+/g, "-"), item.slug],
          lastmod: item.updatedAt,
        })),
      ],
    ),
  );
}
