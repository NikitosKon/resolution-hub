import test from "node:test";
import assert from "node:assert/strict";
import {
  currentRelease,
  issues,
  platforms,
  publishedIssues,
  validateContent,
} from "@/data";
import { locales } from "@/lib/locales";
import { getV4Article } from "@/data/v4";

test("content registry has the intended staged inventory", () => {
  assert.equal(platforms.length, 15);
  assert.ok(issues.length >= 165);
  assert.equal(publishedIssues.length, 3);
});
test("the controlled release contains only the three QA-passed pilots", () => {
  assert.deepEqual(
    currentRelease.map((entry) => [entry.issueId, entry.qaDecision]),
    [
      ["paypal-funds-held-180-days", "PASS"],
      ["ebay-mc011-documents-requested", "PASS"],
      ["grailed-frozen-after-sale", "PASS"],
    ],
  );
  assert.deepEqual(
    publishedIssues.map((issue) => issue.id),
    currentRelease.map((entry) => entry.issueId),
  );
  assert.equal(
    issues.filter((issue) => issue.status === "published").length,
    20,
    "legacy source statuses remain preserved while release eligibility is gated",
  );
});
test("content registry passes cross-record validation", () => {
  assert.doesNotThrow(() => validateContent());
});
test("every issue has complete localizations", () => {
  for (const issue of issues)
    for (const locale of locales) {
      assert.ok(issue.content[locale].title.length > 10);
      assert.ok(issue.content[locale].faq.length >= 3);
    }
});
test("slugs are unique inside a platform", () => {
  const keys = issues.map((issue) => `${issue.platformId}/${issue.slug}`);
  assert.equal(new Set(keys).size, keys.length);
});
test("explicit related links are not broken", () => {
  const ids = new Set(issues.map((issue) => issue.id));
  for (const issue of issues)
    for (const locale of locales)
      for (const id of issue.content[locale].relatedIssueIds)
        assert.ok(ids.has(id));
});
test("pilot headings are unique and V4 tables are structurally valid", () => {
  for (const issue of publishedIssues)
    for (const locale of locales) {
      const article = getV4Article(issue.id, locale);
      assert.ok(article, `${issue.id}/${locale} must use the V4 renderer`);
      const headings = [
        article.quickAnswerTitle,
        ...article.sections.map((section) => section.title),
      ];
      assert.equal(
        new Set(headings).size,
        headings.length,
        `${issue.id}/${locale} repeats a heading`,
      );
      for (const section of article.sections)
        for (const block of section.blocks)
          if (block.type === "table")
            for (const row of block.rows)
              assert.equal(
                row.length,
                block.headers.length,
                `${issue.id}/${locale}/${section.id} has a malformed table row`,
              );
    }
});
