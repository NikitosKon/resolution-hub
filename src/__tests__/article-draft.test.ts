import assert from "node:assert/strict";
import test from "node:test";
import { createDraft, draftToMarkdown } from "@/lib/article-draft";

test("article draft templates export a structured markdown draft", () => {
  const draft = createDraft("verification");
  draft.title = "eBay verification documents requested";
  draft.platform = "eBay";
  draft.slug = "ebay-verification-documents-requested";
  draft.primaryKeyword = "ebay verification documents requested";
  draft.summary = "A draft summary.";
  draft.quickAnswer = "A draft quick answer.";

  const markdown = draftToMarkdown(draft);

  assert.match(markdown, /^---\n\nstatus: draft/);
  assert.match(markdown, /# eBay verification documents requested/);
  assert.match(markdown, /## Quick answer/);
  assert.match(markdown, /## Official sources/);
  assert.match(markdown, /## Telegram CTA/);
});
