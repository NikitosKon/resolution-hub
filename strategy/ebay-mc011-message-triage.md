# Intent strategy: ebay-mc011-message-triage

## Primary intent

**Diagnostic:** help a reader classify an eBay MC011 or related restriction notice from the authenticated account context, identify the next task named by that notice, and choose the correct market-specific checking route before preparing or sending anything.

This page is a triage resource. It does not answer a document request, predict an outcome, or promise recovery.

## Intent classification

- **Primary — diagnostic:** interpret the authenticated notice, identify the registered eBay market and account context, record the affected function, and classify the next task.
- **Secondary — informational:** provide only the context needed to understand why the notice and market determine the next branch.
- **Secondary — preparation (conditional):** tell the reader when they have crossed into a concrete evidence request and should use the dedicated preparation page; do not prepare the evidence package here.
- **Secondary — payout (conditional):** identify a payout-related branch only when the notice explicitly names it; hand off to payout-specific guidance without discussing release conditions or timing.
- **Secondary — commercial-help:** optional individual review of redacted, reader-supplied facts when the self-check cannot resolve the branch; it is not a support substitute or outcome promise.
- **Out of scope — appeal/recovery:** no appeal strategy, escalation workaround, replacement account, restoration prediction, or account-access bypass.

## Decision stage

- **Funnel stage:** consideration.
- **Reader state:** the reader has encountered an MC011 reference, restriction message, or suspected account notice and needs to decide what it actually asks before taking a consequential action.
- **Dominant decision:** verify the account-context copy, classify the requested task, follow the matching official route, hand off to a narrower guide, or stop because a required fact is missing.
- **Not this stage:** assembling documents for an already authenticated request, troubleshooting a Returned/Cancelled payout, or pursuing an appeal/recovery outcome.

## User job

Determine whether the reader is looking at an authenticated eBay account notice; capture the registered market, account context, exact wording, affected function, and requested action; distinguish a general restriction from a concrete evidence request, payout issue, or appeal question; and select only the next check supported by the notice and current official market guidance. The reader should leave with a classified next task and a clear list of facts that remain unknown.

## Primary query

**eBay MC011: как разобрать сообщение и понять, что проверить первым** (`eBay MC011 restriction`; `eBay MC011 message`; `eBay ограничение продавца что проверить`).

Close variants remain subordinate to the same message-triage job. They must not broaden the page into a universal MC011 document checklist, recovery promise, payout-release guide, or generic suspension article.

## Secondary needs

- Verify that the notice and its requested action are visible in the authenticated eBay account surface rather than relying on an email alone.
- Record the registered eBay site/market and seller context before applying any localized source or example.
- Identify the exact blocked function instead of assuming that every MC011 affects selling, listings, messages, profile changes, or payouts in the same way.
- Classify the notice as a general restriction, concrete document/evidence request, payout branch, appeal-related branch, or another named task.
- Check whether the notice names a deadline, submission channel, payment action, listing change, tracking request, or other special instruction; do not fill an unstated field from a generic list.
- Move to `mc011-documents-requested` only after an authenticated notice explicitly requests documents or evidence.
- Move to an eBay payout guide only when the account notice identifies a payout state; do not infer a hold or a release date from MC011 alone.
- Keep market-specific examples labelled and treat unverified global rules, limits, substitutes, timing, and outcomes as unknown.
- Protect sensitive information: use redacted facts for any review and never disclose passwords, authentication codes, full card data, or unnecessary identity records.

## Page type

- **Type:** Russian, market-aware, notice-led diagnostic resource guide.
- **Primary problem type:** interpretation and first-task classification for an MC011/restriction message.
- **Primary search-intent metadata:** diagnostic.
- **Useful supporting tags:** `ebay-mc011`, `account-restriction`, `notice-triage`, `seller-account`, `market-scope`, `message-authenticity`.
- **Not:** the published `mc011-documents-requested` preparation guide; the published `mc011-restriction` broad explanation; a universal document inventory; a payout-remediation page; an appeal/recovery page; or a page asserting why a particular account was restricted.

## Unique value

Provide a notice-first decision aid that keeps four layers separate:

1. the account-context facts the reader must verify;
2. the task explicitly named by the notice;
3. the market-specific official route that should be checked next; and
4. the unresolved questions that prevent a safe conclusion.

The differentiator is classification before preparation. The page should help a reader avoid sending unrelated, unsupported, or unsafe material while making a clean handoff to a narrower guide when the evidence-request state is confirmed. It must preserve the research and SERP caveats rather than turning community language into eBay procedure.

## Cannibalization check

**Recommendation: keep this resource separate, with a hard diagnostic boundary.** The distinction is allowed only because the page stops after message interpretation and task classification; it must not repeat the preparation workflow or the published restriction explainer.

### Published `mc011-restriction`

- **Known ownership:** broad MC011/restriction meaning, authenticity/context checks, explicitly named affected functions, first checks, and classification of the next task.
- **Relationship:** this resource may overlap at the discovery level because both can be found by an MC011 query. It must take a narrower notice-triage angle: use the exact message and classify the next action, then stop.
- **No duplication:** do not reproduce its broad definition, account-effects explanation, or first-check sequence as a standalone article. Link or hand off only where the reader needs the broader restriction context.
- **Blocking condition:** if the rendered page becomes a second general “what MC011 means” explainer, reposition or merge before publication.

### Published `mc011-documents-requested`

- **Known ownership:** preparation after an authenticated MC011 notice explicitly requests documents/evidence; request-to-record matching, evidence boundaries, submission checks, and account-specific uncertainty.
- **Relationship:** this resource should link to it only conditionally, after the reader confirms a concrete evidence request.
- **No duplication:** no document inventory, substitute-document guidance, upload/file rules, deadline claims, package preparation, or submission workflow belongs here.
- **Blocking condition:** if the page answers “which documents should I send?” without the reader's notice, it cannibalizes the published preparation guide and fails this strategy.

### Other published/planned eBay pages

- `account-suspended` owns broad first checks for an account suspension; this page should hand off only when the reader's state is a general suspension rather than an MC011 triage question.
- `suspended-after-first-listing` owns the first-listing scenario; it is not a generic MC011 cause page.
- `payout-on-hold` owns an explicitly named payout state; this page must not troubleshoot or predict payout release.
- `ebay-seller-verification-failed` owns a failed seller-verification state; this page may distinguish that state but must not diagnose verification causes.
- `ebay-payout-returned-or-cancelled` (planned) owns Returned/Cancelled payout status; do not pre-empt its remediation job.

### Boundary test

A section belongs to this page only if removing it would make the reader unable to verify, interpret, or classify the authenticated notice. If it instead explains how to prepare evidence, repair a payout, appeal, restore access, or infer a trigger, it belongs elsewhere or must be omitted.

## Scope boundaries

**Include:**

- message-first verification and account-context capture;
- registered-market and seller-context qualification;
- exact wording, affected-function, requested-action, and special-instruction classification;
- a distinction between restriction, evidence request, payout branch, appeal question, and other named task;
- explicit uncertainty where the public source cannot replace the signed-in notice;
- market labels and source hierarchy from the latest research/SERP artifacts;
- a safe handoff to `mc011-documents-requested` only for a confirmed evidence request;
- a conditional, honest option for reviewing redacted facts after self-checking.

**Exclude:**

- universal causes, documents, substitutes, file formats, file sizes, deadlines, upload channels, review times, approval likelihood, payout-release conditions, or restoration outcomes;
- transplanting an eBay Japan, US, UK, or other market example into a Russian or global rule;
- request-to-record mapping and document-package preparation;
- payout troubleshooting or appeal instructions;
- replacement accounts, identity/country changes, circumvention, or any unsafe workaround;
- owner first-person experience, screenshots, timelines, or outcomes without a matching confirmed record and permission;
- article prose, FAQ answers, schema, metadata, or CTA copy in this strategy artifact.

## Conversion fit

- **Role:** secondary fallback after the self-service classification path.
- **Appropriate fit:** the reader has an authenticated notice but cannot classify the market-specific task or identify which redacted facts remain unresolved.
- **Offer boundary:** an individual review may help organize redacted facts and open questions; it cannot access the account, replace eBay's route, guarantee acceptance, restore access, release payouts, or promise timing.
- **Not appropriate:** requests for credentials, forged/altered records, bypasses, privileged support access, or a guaranteed result.

## Success criteria

- Exactly one primary intent is explicit: diagnose and classify an eBay MC011/restriction message before action.
- The row, research, SERP, reader questions, user job, funnel stage, and page type all describe the same diagnostic decision.
- The rendered page begins from authenticated-message and market context, not a universal MC011 checklist.
- The boundary with `mc011-restriction` is diagnostic/task classification versus broad restriction explanation.
- The boundary with `mc011-documents-requested` is triage versus evidence preparation, with only a conditional handoff.
- Payout and appeal needs remain conditional and do not acquire timing, outcome, or recovery promises.
- No unsupported market rule, document requirement, trigger theory, owner story, or community anecdote is presented as fact.
- Privacy and anti-circumvention boundaries remain visible without adding operational workaround advice.
- No new duplicate URL, language variant, taxonomy node, or publication status is created by the strategy.
- All downstream stages retain the unresolved research, source-freshness, manual-review, and experience markers.

## Manual review

`MANUAL_REVIEW_REQUIRED: Confirm the intended registered eBay market/site and seller context before any market-specific example is drafted.`

`MANUAL_REVIEW_REQUIRED: Obtain a redacted authenticated MC011 notice before stating exact requested evidence, affected functions, deadline, submission channel, or special action.`

`SOURCE_FRESHNESS_REQUIRED: Recheck the current official eBay source hierarchy immediately before publication; the SERP sample is contextual and not a geo-verified Google ranking.`

`MANUAL_REVIEW_REQUIRED: Preserve the diagnostic boundary from both published mc011-restriction and mc011-documents-requested during architecture, drafting, linking, duplicate review, and QA.`

`MANUAL_REVIEW_REQUIRED: Do not publish universal file limits, document substitutes, review time, payout-release conditions, appeal eligibility, or restoration predictions without current market-specific evidence.`

`EXPERIENCE_REQUIRED: No matching confirmed owner record, screenshot, timeline, or outcome exists for this slug; omit first-hand claims until a reviewed record and publication permission are available.`

## Rerun note

2026-07-23 17:45 EEST: Strategy created from the current `content-plan/pages.csv` row, `research/ebay-mc011-message-triage.md`, `serp/ebay-mc011-message-triage.md`, `questions/ebay-mc011-message-triage.md`, and `content-audit/article-inventory.csv`/`content-audit/ebay-mc011-intent-resolution.md`. No article, outline, CTA, source artifact, URL, or publication status was changed.
