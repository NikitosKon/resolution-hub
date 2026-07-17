import { platforms } from "@/data";
import { sitemapXml, xmlResponse } from "@/lib/xml";

export const dynamic = "force-static";
export function GET() {
  return xmlResponse(
    sitemapXml(
      platforms.map((platform) => ({
        segments: [platform.slug],
        lastmod: "2026-07-15",
      })),
    ),
  );
}
