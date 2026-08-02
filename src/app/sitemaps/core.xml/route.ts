import { hubDefinitions } from "@/components/pages";
import { sitemapXml, xmlResponse } from "@/lib/xml";

export const dynamic = "force-static";
export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const segments = [
    undefined,
    ...hubDefinitions.map((hub) => [hub.slug]),
    ...[
      "privacy",
      "terms",
      "cookies",
      "disclaimer",
    ].map((slug) => [slug]),
  ];
  return xmlResponse(
    sitemapXml(
      segments.map((item) => ({ segments: item, lastmod })),
    ),
  );
}
