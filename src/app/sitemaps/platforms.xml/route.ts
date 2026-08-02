import { platforms } from "@/data";
import { sitemapXml, xmlResponse } from "@/lib/xml";

export const dynamic = "force-static";
export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  return xmlResponse(
    sitemapXml(
      platforms.map((platform) => ({
        segments: [platform.slug],
        lastmod,
      })),
    ),
  );
}
