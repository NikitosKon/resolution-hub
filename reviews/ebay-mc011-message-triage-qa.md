# Final QA: ebay-mc011-message-triage

Check time: 2026-07-24T08:10:31+03:00 (Europe/Kiev)
Scope: latest Russian rhythm draft and its prepared packaging. This is a release-gate review only; no article, route, URL, source, or publication status was changed.

Overall Quality Score: 44
Evidence Integrity Score: 68
Editorial Quality Score: 78
Search Intent Score: 58

## Publication Decision

FAIL

The package is useful and carefully sourced, but it is not publishable. Seven blocking markers remain, the duplicate detector reports a 47/100 overlap risk (pilot maximum 30), the target market and authenticated notice are unresolved, source freshness must be rerun immediately before publication, and no matching confirmed owner record exists. The target also requires a diagnostic repositioning before another duplicate audit.

## Artifact inventory

Present and non-empty:

- `research/ebay-mc011-message-triage.md`
- `serp/ebay-mc011-message-triage.md`
- `questions/ebay-mc011-message-triage.md`
- `strategy/ebay-mc011-message-triage.md`
- `outlines/ebay-mc011-message-triage.md`
- `drafts/ebay-mc011-message-triage.md`
- `drafts/ebay-mc011-message-triage-verified.md`
- `drafts/ebay-mc011-message-triage-experience.md`
- `drafts/ebay-mc011-message-triage-narrative.md`
- `drafts/ebay-mc011-message-triage-psychology.md`
- `drafts/ebay-mc011-message-triage-edited.md`
- `drafts/ebay-mc011-message-triage-rhythm.md`
- `prepared/ebay-mc011-message-triage.md`
- `prepared/ebay-mc011-message-triage-links.md`
- `prepared/ebay-mc011-message-triage-conversion.md`
- `reviews/ebay-mc011-message-triage-fact-check.md`
- `reviews/ebay-mc011-message-triage-entities.md`
- `reviews/ebay-mc011-message-triage-duplicate.md`
- `reviews/ebay-mc011-message-triage-template-patterns.md`

The run state records `serp-intelligence` and `experience-editor` as pending even though their files are present. `reader-psychology-editor` is now recorded as complete, and its latest artifact contains the page-specific reader-sequence review and rerun note. The remaining state/artifact mismatch must be reconciled before release; it is not treated as completion evidence. `final-qa` was pending before this report and remains a report-only gate here; no pipeline state was changed.

## Factual accuracy

The fact-check ledger contains 15 material claims and reports careful market scoping across eBay UK, US, and Japan. It correctly avoids universal document lists, deadlines, file limits, review times, payout-release dates, restoration probabilities, and trigger theories. However, the authenticated notice, registered market, seller context, and exact affected function are absent. Therefore the article cannot safely resolve account-specific claims. Evidence integrity is reduced rather than failed for fabrication: the uncertainty is explicitly retained.

## Source hierarchy compliance

PASS conditionally. Level 1 eBay sources are used for account-message, security, seller-registration, appeal, and policy claims. Discovery sources are labelled as language signals only. The eBay Japan document example and attachment constraints are marked market-specific. `SOURCE_FRESHNESS_REQUIRED` remains unresolved, so this section cannot support publication.

## Unanswered reader questions

- Which registered eBay site/market and seller context does the target notice belong to?
- What is the exact authenticated MC011 wording and named route?
- Which account function is actually restricted in this account?
- Does this notice request evidence, a payout action, an appeal, or only general restriction handling?
- Which deadline, channel, format, language, or limit is stated in the authenticated message?
- What outcome, if any, was actually observed by the owner?

The article correctly refuses to answer these by inference, but they remain blocking for the intended release.

## Adaptive structure quality

78/100. The notice-first order, request card, classification states, market boundary, safe-record stop, FAQ, and conditional handoffs are coherent. The structure currently expands into broad MC011 meaning, affected-function explanation, market comparison, document controls, and evidence-preparation FAQs. Those sections cross into the ownership of `mc011-restriction` and `mc011-documents-requested`; narrow them before rerunning duplicate detection.

## Narrative clarity

82/100. Narrative and human passes improve the transition from an anxious MC011 notice to classification and an explicit stop state. The diagnostic promise is understandable. Clarity is weakened by the amount of neighbouring-guide material retained after the classification step.

## Reader psychology

82/100. The completed psychology pass confirms that the article lowers risk by asking the reader to authenticate the notice, write down only visible facts, and stop when a field is unknown. It preserves the notice-first diagnostic sequence, avoids urgency and outcome promises, and keeps preparation, recovery, and timing outside the page's promise. The stage is now complete in the run state; this improvement does not resolve market, source-freshness, experience, or duplication blockers.

## Editorial rhythm

80/100. Paragraphs, lists, tables, and state callouts are readable and the rhythm pass preserves the intended notice-first sequence. The article is longer than necessary for triage because document-preparation material is still present; shortening that material should improve task focus rather than add prose.

## Template-pattern audit

PASS. `reviews/ebay-mc011-message-triage-template-patterns.md` reports PASS: no material swappable article shell was found. Shared safety and service language is governed and acceptable. The audit does not waive the separate semantic duplicate failure.

## Verified-case integrity

FAIL for release readiness. No matching confirmed owner record, screenshot, timeline, or outcome exists. The `EXPERIENCE_REQUIRED` marker is correctly preserved and no first-hand claim was fabricated. Publication cannot proceed while the strategy requires this experience layer.

## Duplication and cannibalization

FAIL. `reviews/ebay-mc011-message-triage-duplicate.md` reports Similarity Score 47/100, above the pilot maximum of 30. High-risk overlap is with `mc011-restriction` (meaning, Messages check, affected functions, first checks) and `mc011-documents-requested` (evidence boundary, document checks, missing-record workflow and FAQs). Required decision remains `D.REPOSITION_ONE_PAGE`: reduce the target to message classification and route selection, remove broad explanation and evidence preparation, then rerun the detector.

## Entity completeness

Good, 86/100 in the entity report. eBay, MC011, eBay Messages, registered market, account context, affected function, evidence boundary, payout/appeal distinctions, and Telegram scope are naturally covered. No entity stuffing was recommended. Missing owner experience is a separate blocker, not an entity omission.

## Internal links and orphan detection

The link plan is contextually sound and uses only live eBay hubs and the current documents guide; planned `mc011-restriction` links remain non-clickable. The preview is intentionally non-routed, so it is not currently an indexability orphan. After approval, semantic orphan risk is medium unless the eBay platform page and verification hub receive curated inbound links. Do not add this preview to navigation or sitemap before release.

## CTA honesty

PASS conditionally. The conversion review places a secondary CTA after self-service guidance, uses only `https://t.me/helpgrailed`, asks for redacted facts, and states paid pricing is agreed before work. It makes no affiliation, access, recovery, payout, timing, or approval promise. The CTA must remain held while the article's publication blockers and diagnostic boundary are unresolved.

## Metadata

SEO title, description, one H1, and the recommended `/ru/ebay/mc011-message-triage/` slug are coherent with diagnostic intent. The slug is only a recommendation and is not in the route inventory. No production metadata is emitted for this preview.

## Schema

The SEO artifact proposes `Article`, conditional visible `FAQPage`, and `BreadcrumbList`, and correctly rejects HowTo, Review, AggregateRating, and ClaimReview. Runtime schema/canonical validation cannot be performed for this non-routed preview. FAQ schema remains conditional on the visible FAQ surviving the rewrite and all blockers being resolved.

## Canonical

Recommended canonical is `https://resolutionhub.net/ru/ebay/mc011-message-triage/`, but no route exists and no canonical has been emitted. This is correct for a non-published preview; do not create the route as part of QA.

## Hreflang

The RU/EN/UK cluster is documented conditionally. No locale has an approved, independently reviewed equivalent for this new slug, so no hreflang should be emitted. The existing application-level hreflang tests pass for current routes.

## Source freshness

FAIL until rerun. The fact-check used live official eBay UK/US/Japan pages on 2026-07-23, but the explicit `SOURCE_FRESHNESS_REQUIRED` marker requires another applicability check immediately before publication. Market selection must be confirmed at the same time.

## Build integrity

PASS for the repository build, with no code changes made during this QA:

- `npm run validate:data` — exit 0; validated 15 platforms and 167 issues.
- `npm run typecheck` — exit 0.
- `npm run lint` — exit 0; 3 existing `@next/next/no-img-element` warnings, 0 errors.
- `npm test` — exit 0; 17 tests passed, 0 failed.
- `npm run build` — exit 0; Next.js production build generated 105 static pages.

These commands validate the repository, not publication eligibility for this non-routed slug.

## Article usefulness

84/100. The guide gives a practical, safe worksheet for reading an authenticated MC011 notice and choosing the next official route. Its strongest value is separating `MATCHED`, `UNRESOLVED`, and `CLARIFICATION_NEEDED`. Usefulness is diluted by content that belongs to the restriction explainer and documents-requested guide.

## Blocking markers

The following blockers remain unresolved in the latest rhythm/prepared package:

1. `MANUAL_REVIEW_REQUIRED`: confirm the target registered eBay market/site and seller context.
2. `MANUAL_REVIEW_REQUIRED`: review a redacted authenticated MC011 notice before naming any exact document, affected function, deadline, submission channel, file limit, or special action.
3. `MANUAL_REVIEW_REQUIRED`: keep the eBay Japan document example and attachment limits market-limited.
4. `SOURCE_FRESHNESS_REQUIRED`: recheck all official eBay URLs and applicability immediately before publication.
5. `MANUAL_REVIEW_REQUIRED`: preserve the diagnostic boundary with `mc011-restriction` and `mc011-documents-requested`.
6. `MANUAL_REVIEW_REQUIRED`: do not add universal review time, payout-release date, appeal eligibility, restoration probability, or trigger explanation without market-specific evidence.
7. `EXPERIENCE_REQUIRED`: no matching confirmed owner record, screenshot, timeline, or outcome is available.

The psychology-stage completion does not remove or downgrade any of these markers. No marker was deleted, reworded to appear non-blocking, or overridden by a score.

## Required fixes

- Obtain and review a redacted authenticated MC011 notice; record registered market, seller context, affected function, exact named action, channel, deadline, and any document request without inference.
- Reposition the page to diagnostic triage: replace the broad MC011 meaning section with a short gate, compress the route matrix, remove the extended market/document comparison and preparation FAQs, and preserve one safety stop plus the conditional handoff.
- Rerun duplicate detection; the score must be 30 or lower, followed by manual comparison.
- Obtain or deliberately change the approved experience requirement; until then keep `EXPERIENCE_REQUIRED` and do not publish.
- Recheck all official sources and their market applicability immediately before a future Final QA.
- Reconcile the pipeline state entries currently marked pending with the existing SERP, experience, and psychology artifacts; rerun dependent stages if any upstream artifact changes.
- After all blockers resolve, rerun final QA and technical validation. Do not add the slug to routes, sitemap, navigation, or release until the terminal decision is PASS.

DECISION: FAIL
