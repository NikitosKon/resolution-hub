import test from "node:test";
import assert from "node:assert/strict";
import { createMetadata } from "@/lib/metadata";
import { languageAlternates, pathFor } from "@/lib/urls";
import { locales } from "@/lib/locales";
import { publishedIssues } from "@/data";
import { sitemapXml } from "@/lib/xml";
import { GET as getUpdatesFeed } from "@/app/[locale]/updates.xml/route";
import { siteConfig } from "@/lib/config";

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
test("production configuration includes Google site verification", () => {
  assert.equal(
    siteConfig.googleSiteVerification,
    "EHxggE9ENAwY5nP_j56kUtT7wa0E5bzLBarM0KWnAcM",
  );
});
test("draft pages stay out of the issue sitemap", () => {
  const xml = sitemapXml(
    publishedIssues.map((issue) => ({
      segments: [issue.platformId, issue.slug],
      lastmod: issue.updatedAt,
    })),
  );
  assert.equal((xml.match(/<url>/g) || []).length, 9);
  assert.ok(!xml.includes("paypal/account-restricted"));
  assert.ok(!xml.includes("paypal/permanently-limited"));
});
test("RSS contains only the controlled release", async () => {
  const response = await getUpdatesFeed(
    new Request("https://resolutionhub.net/en/updates.xml"),
    {
      params: Promise.resolve({ locale: "en" }),
    },
  );
  const xml = await response.text();
  assert.equal((xml.match(/<item>/g) || []).length, 3);
  for (const issue of publishedIssues)
    assert.ok(xml.includes(`/${issue.platformId}/${issue.slug}/`));
  assert.ok(!xml.includes("paypal/permanently-limited"));
  assert.ok(!xml.includes("ebay/mc011-restriction"));
});
test("sitemap uses stored lastmod values", () => {
  const xml = sitemapXml([{ segments: ["paypal"], lastmod: "2026-07-15" }]);
  assert.ok(xml.includes("<lastmod>2026-07-15</lastmod>"));
});
