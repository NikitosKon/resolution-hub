import test from "node:test";
import assert from "node:assert/strict";
import { issues, platforms, publishedIssues, validateContent } from "@/data";
import { locales } from "@/lib/locales";

test("content registry has the intended staged inventory", () => {
  assert.equal(platforms.length, 15);
  assert.ok(issues.length >= 165);
  assert.equal(publishedIssues.length, 20);
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
