import { siteConfig } from "@/lib/config";
import { xmlResponse } from "@/lib/xml";

export const dynamic = "force-static";
export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const names = ["core", "platforms", "issues"];
  const body = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${names.map((name) => `<sitemap><loc>${siteConfig.url}/sitemaps/${name}.xml</loc><lastmod>${lastmod}</lastmod></sitemap>`).join("")}</sitemapindex>`;
  return xmlResponse(body);
}
