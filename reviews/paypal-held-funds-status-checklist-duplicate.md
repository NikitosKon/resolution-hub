# Duplicate review: paypal-held-funds-status-checklist

## Comparison corpus

The comparison was rebuilt on 2026-07-24 from the current repository. The target is `drafts/paypal-held-funds-status-checklist-rhythm.md`; it is a proposed Russian resource and is not a published route.

### Included as reader-facing corpus

- The 19 published issue slugs in `content-audit/article-inventory.csv` and `src/data/issues.ts`, across their EN/RU/UK editions: `permanently-limited`, `limitation-appeal`, `appeal-denied`, `funds-held-180-days`, `funds-frozen-after-limitation`, `supplier-invoices-requested`, `proof-of-identity-requested`, `proof-of-address-requested`, `limited-after-receiving-money`, `business-account-under-review`, `account-suspended`, `mc011-restriction`, `mc011-documents-requested`, `suspended-after-first-listing`, `payout-on-hold`, `permanently-suspended`, `suspension-appeal`, `shop-suspended-after-opening`, `frozen-after-sale`, and `payout-or-account-blocked`. The inventory contains the localized runtime records and their current route/intent metadata.
- Prepared reader-facing packages: `prepared/funds-held-180-days.md`, `prepared/frozen-after-sale.md`, `prepared/mc011-documents-requested.md`, `prepared/can-you-sell-on-ebay-from-ukraine-2026.md`, `prepared/paypal-payment-hold-after-sale.md`, `prepared/paypal-withdrawal-unavailable.md`, `prepared/paypal-held-funds-status-checklist.md`, and the related conversion/link packages where they contain article-facing wording.
- Independent rhythm drafts with adjacent value: `drafts/funds-held-180-days-rhythm.md`, `drafts/paypal-payment-hold-after-sale-rhythm.md`, `drafts/paypal-withdrawal-unavailable-rhythm.md`, `drafts/frozen-after-sale-rhythm.md`, and `drafts/mc011-documents-requested-rhythm.md`.
- The proposed-intent rows in `content-plan/pages.csv`, especially `funds-held-180-days`, `paypal-payment-hold-after-sale`, `paypal-withdrawal-unavailable`, `funds-frozen-after-limitation`, limitation/appeal, verification, and payout rows, were checked for future collision even when no independent body exists.

### Same-lineage and operational files

- `drafts/paypal-held-funds-status-checklist.md`, `-verified.md`, `-experience.md`, `-narrative.md`, and `-psychology.md`, plus the target's prepared package, are the same article lineage. They were checked for repeated wording but were not counted as additional URLs.
- Research, SERP, questions, fact-check, entity, internal-link, conversion, media, SEO, and QA files were excluded from the reader-facing score because they are evidence or workflow artifacts, not independent pages.
- `prepared/previews/` and implementation previews were excluded from the numeric score; none is an indexable route.
- The 147 generated draft records in `src/data/issues.ts` were checked for taxonomy and intent context but excluded as publication competitors because they have no live route/body in the current release.

Every available article was therefore included as a current body, checked as a planned intent, classified as same-slug lineage, or explicitly excluded for having no independent public route. No external backlink corpus or Search Console query-to-page export was available for this run.

## Method and confidence

Each available locale was compared with its matching locale where a localized body exists. A normalized Unicode-token cosine sample was used only to surface candidates; it is not a plagiarism percentage. Candidate values against the current prepared corpus were approximately: `paypal-payment-hold-after-sale` 0.803, `paypal-withdrawal-unavailable` 0.770, `funds-held-180-days` 0.519, `can-you-sell-on-ebay-from-ukraine-2026` 0.426, `frozen-after-sale` 0.311, and `mc011-documents-requested` 0.261. Necessary words such as PayPal, status, hold, balance, notice, market, account, and withdrawal inflate these lexical signals.

The final score is a manual comparison of search job, entry condition, affected object, decision sequence, information gain, H2 purpose, FAQ use, CTA context, and handoff boundaries. Shared safety and data-minimisation language is not treated as duplicate value unless it replaces page-specific guidance.

**Confidence: HIGH for the repository corpus and current strategy boundary; MEDIUM for future cannibalization.** The local bodies and route inventory are available, but the target is not published and there is no real query/page performance evidence.

## Similarity Score (0-100)

**38/100 — material same-platform overlap, defensible as a separate resource only while the status-triage boundary and conditional handoffs remain explicit.**

The target answers: “What exact PayPal status do I see, what object is affected, which registered market and authenticated account surface apply, and what should I check first?” It does not answer how to release funds, appeal a limitation, submit documents, or repair a withdrawal.

The score is above low risk because the target and the published `funds-held-180-days` guide both classify unavailable money, preserve notice/date evidence, qualify the market, distinguish balance and withdrawal states, and warn that a date is not a guarantee. The proposed payment-hold and withdrawal guides also share the same status vocabulary. The overlap is currently bounded by different entry conditions and by explicit off-ramps.

## Closest matches

| Match | Status | Wording/structure signal | Intent and value distinction | Risk |
|---|---|---|---|---|
| `paypal-payment-hold-after-sale` | Proposed sibling; prepared body, no live route | Highest lexical candidate (about 0.803); both classify PayPal money-unavailable states, exact notices, market, evidence, dates, and safe CTA language | Owns one seller payment that became held after a sale and its transaction-level branch. Target only identifies that branch, then hands off. | Moderate if target adds a release workflow |
| `paypal-withdrawal-unavailable` | Proposed sibling; prepared body, no live route | High lexical candidate (about 0.770); shared withdrawal, balance, pending/failed, market, and evidence terms | Owns a withdrawal that was initiated or shown as available but cannot transfer. Target stops once the evidence is withdrawal-only. | Moderate if target troubleshoots bank/card rails |
| `funds-held-180-days` | Published V4 guide and prepared package | Strongest live competitor; shared hold/status, account market, date/event, balance, passed-date, and no-guarantee vocabulary (about 0.519) | Owns an authenticated notice that explicitly names a long hold or “up to 180 days.” Target owns the earlier ambiguous-status classification. | Moderate; explicit 180-day handoff required |
| `funds-frozen-after-limitation` | Published/repositioned PayPal intent | Shared limitation, unavailable balance, reserve, dispute, withdrawal, and scope mapping | Owns a post-limitation unavailable balance when no specific long-hold timeline is shown. Target only classifies the object and routes the account-level branch. | Low-to-moderate |
| `permanently-limited`, `limited-after-receiving-money`, `business-account-under-review` | Published PayPal issue records | Shared account notices, affected functions, evidence capture, and Resolution Center language | Own account-status or review decisions; target must not diagnose cause or teach recovery/appeal steps. | Low while used as terminal handoff |
| `limitation-appeal`, `appeal-denied`, verification/document rows | Published or planned PayPal intents | Shared documents, notices, and support wording | Own appeal, denial, or named-document preparation. Target may say that a specific request changes the branch but must not supply a universal document package. | Low-to-moderate |
| `payout-on-hold`, `frozen-after-sale`, `payout-or-account-blocked` | Published eBay/Grailed/Vestiaire bodies | Shared marketplace payout/status language and governed CTA | Different platform, official source set, and reader action. Similarity is structural, not a search collision. | Low |
| `mc011-restriction`, `mc011-documents-requested`, Etsy and eBay verification/suspension pages | Published cross-platform records | Shared authenticated-message and evidence safeguards | Different platform and verification job; no meaningful PayPal status collision. | Low |

## High Risk Areas

1. **`Сначала поймите, что именно затронуто`.** This is the target's core value, but it can become a generic “all PayPal holds explained” article. Keep each branch as a classification gate and do not expand it into release, reserve, appeal, or withdrawal procedures.
2. **The date and passed-date sections.** A date shown in an ambiguous notice must be recorded, not recalculated. If the notice explicitly names “up to 180 days” or another long-hold period, use the separate guide and do not repeat its agreement/date analysis here.
3. **Market comparison.** Both target and long-hold guide require the registered-account market. The target should qualify why the market matters and point to the applicable authenticated source; detailed market-agreement interpretation belongs to the 180-day page.
4. **Payment-after-sale branch.** Mention it only to distinguish one transaction from a balance/account issue. Do not add tracking, release conditions, post-sale timing, or seller-payment troubleshooting from the proposed sibling.
5. **Withdrawal branch.** Keep “only withdrawal is affected” as a terminal classification and handoff. Do not add bank/card method troubleshooting, transfer timing, failure causes, or retry advice.
6. **Account limitation and document branches.** The target may identify an account banner, Resolution Center task, or explicit document request, but it must not assert the cause, list universal documents, prepare an appeal, or describe a recovery path.
7. **Shared CTA and evidence snapshot.** Redacted notices, no passwords/codes, no account access, no affiliation, individual pricing, and no guaranteed outcome are canonical governance. Keep any Telegram invitation after diagnostic value and tie it to reviewing the exact visible status rather than promising release.
8. **Runtime exclusivity.** The same-slug prepared copy and legacy issue taxonomy must never be exposed as a second indexable route. If this resource is released, use one canonical URL and one rendered body.

## Repeated FAQs

The target rhythm draft has no reader-facing FAQ block and its SEO package does not emit FAQ schema. It therefore does not duplicate the generic FAQ questions still present in older generated issue records. The closest V4 pages likewise avoid fixed FAQs.

Do not add FAQs about “when will PayPal release the money?”, a universal document list, or guaranteed appeal results merely for schema. If questions are added later, they should resolve a status/scope/market distinction not already answered in the body.

## Repeated intros and CTA

The target opening is distinct from `funds-held-180-days`: it begins with several ambiguous labels (`held`, `on hold`, `pending`, `reserve`, `unavailable`) and tells the reader to preserve the exact authenticated wording before choosing a route. The published long-hold guide begins only when the notice names a specific long period and owns date/event interpretation.

The target shares the canonical Telegram service safeguards with other V4 guides. This is required product governance, not duplicated search value. The target-specific CTA should remain an optional review of a redacted notice, affected object, registered market, and visible instruction; it must not offer faster review, release, restoration, or a guaranteed answer.

## Similar H2

No exact reader-facing H2 from the target is duplicated by the active V4 bodies. Functional similarities are intentional and must retain their distinct qualifiers:

- target `Сначала поймите, что именно затронуто` ↔ long-hold `Сначала определите тип ограничения`;
- target `Учитывайте зарегистрированный рынок` ↔ long-hold `Проверьте, какое соглашение применяется к аккаунту`;
- target `Не превращайте дату в обещанный срок` ↔ long-hold `Не придумывайте дату начала отсчёта`;
- target `Если после проверки статус всё ещё неясен` ↔ sibling CTAs and evidence sections.

These are shared diagnostic primitives, not duplicate sections, while the target remains a first-classifier and the related pages own their downstream workflows.

## Intent collision

**Recommendation: KEEP_SEPARATE, conditional on enforced boundaries.**

- `paypal-held-funds-status-checklist`: broad diagnostic entry; capture exact status and affected object, qualify market/account, locate the authenticated explanation, and choose the first safe check.
- `funds-held-180-days`: explicit long-hold/“up to 180 days” notice; interpret the governing market, date/event, and passed-date state.
- `paypal-payment-hold-after-sale`: one post-sale payment; classify transaction-level hold/review and its own official next step.
- `paypal-withdrawal-unavailable`: balance/amount is available or a withdrawal was initiated, but the transfer route is unavailable, failed, pending, returned, or interrupted.

If the target starts answering “how to release funds” generically, calculating timelines, listing documents, preparing an appeal, or troubleshooting bank rails, it loses its unique job. At that point the pages should be merged or re-scoped based on observed query/page evidence rather than cosmetic rewriting.

## Recommended Rewrite Sections

- No merge or URL change is recommended on current local evidence.
- Preserve the status-first opening, exact-label capture, affected-object table, market qualifier, and authenticated-route sequence; these are the target's information gain.
- Keep the 180-day branch to a qualified handoff. Do not reproduce the long-hold page's agreement table, date arithmetic, or passed-date explanation.
- Keep post-sale and withdrawal branches as short terminal distinctions. Do not import their full workflows before their routes are independently approved.
- Keep account limitation, appeal, and document-specific topics as off-ramps; remove any universal cause, document package, or recovery promise if introduced during editing.
- Preserve evidence-minimisation wording and the no-guarantee Telegram scope, but avoid copying a generic CTA block earlier in the article.
- Before publication, rerun this detector after any change to `funds-held-180-days`, the proposed payment-hold/withdrawal siblings, or the runtime issue registry. After release, compare Search Console query/page pairs and landing behavior before considering a merge.
