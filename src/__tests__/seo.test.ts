import test from "node:test";
import assert from "node:assert/strict";
import { createMetadata } from "@/lib/metadata";
import { languageAlternates, pathFor } from "@/lib/urls";
import { locales } from "@/lib/locales";
import { publishedIssues } from "@/data";
import { sitemapXml } from "@/lib/xml";

test("URL generator uses clean trailing slashes", () => {
  assert.equal(
    pathFor("en", ["paypal", "permanently-limited"]),
    "/en/paypal/permanently-limited/",
  );
});
test("metadata has self canonical and all hreflang values", () => {
  const metadata = createMetadata({
    locale: "ru",
    segments: ["paypal"],
    title: "Title for a useful page",
    description:
      "A useful description that clearly explains the independent account support guide page.",
  });
  assert.equal(metadata.alternates?.canonical, "/ru/paypal/");
  assert.deepEqual(
    metadata.alternates?.languages,
    languageAlternates(["paypal"]),
  );
  assert.deepEqual(Object.keys(metadata.alternates?.languages || {}), [
    ...locales,
    "x-default",
  ]);
});
test("draft pages stay out of the issue sitemap", () => {
  const xml = sitemapXml(
    publishedIssues.map((issue) => ({
      segments: [issue.platformId, issue.slug],
      lastmod: issue.updatedAt,
    })),
  );
  assert.equal(
    (xml.match(/<url>/g) || []).length,
    publishedIssues.length * locales.length,
  );
  assert.ok(!xml.includes("paypal/account-restricted"));
});
test("sitemap uses stored lastmod values", () => {
  const xml = sitemapXml([{ segments: ["paypal"], lastmod: "2026-07-15" }]);
  assert.ok(xml.includes("<lastmod>2026-07-15</lastmod>"));
});
