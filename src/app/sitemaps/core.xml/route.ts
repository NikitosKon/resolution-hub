import { hubDefinitions } from "@/components/pages";
import { sitemapXml, xmlResponse } from "@/lib/xml";

export const dynamic = "force-static";
export function GET() {
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
      segments.map((item) => ({ segments: item, lastmod: "2026-07-15" })),
    ),
  );
}
