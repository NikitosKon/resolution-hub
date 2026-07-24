# Template-pattern audit: eBay MC011 message triage

## Corpus reviewed

Rebuilt on 2026-07-24 from the current repository:

- **Target:** `drafts/ebay-mc011-message-triage-rhythm.md` (Russian diagnostic resource).
- **Same-lineage files excluded from repeat counts:** `drafts/ebay-mc011-message-triage.md`, `-verified.md`, `-experience.md`, `-narrative.md`, `-psychology.md`, `-edited.md`, and `prepared/ebay-mc011-message-triage.md`. These are upstream or packaging copies of the target, not independent articles.
- **Independent rhythm comparison:** the other seven available `drafts/*-rhythm.md` files: `ebay-seller-verification-failed`, `frozen-after-sale`, `funds-held-180-days`, `mc011-documents-requested`, `paypal-held-funds-status-checklist`, `paypal-payment-hold-after-sale`, and `paypal-withdrawal-unavailable`.
- **Independent prepared comparison:** current reader-facing packages for the existing PayPal, eBay, Grailed, and Ukraine-market guides under `prepared/`; conversion and links appendices were checked for leakage but not scored as article bodies.
- **Published corpus:** the 20 public issue records represented by `src/data/issues.ts` and the 60 localized inventory rows in `content-audit/article-inventory.csv`. The three locale renderings of one issue are treated as one structural unit.
- **Intent context:** `content-plan/pages.csv` and `strategy/ebay-mc011-message-triage.md`.

The operational V4 sections appended to rhythm files (`Editorial changes`, `Open verification items`, `Experience opportunity map`, and similar) are pipeline evidence, not public article prose. They are included in the packaging check only to ensure that they do not leak into rendering.

## Method and limitations

The review compared the target's introduction, H1/H2/H3 order, information order, tables, callouts, transitions, paragraph rhythm, FAQ and CTA wording, conclusion shape, generic statements, semantic scope, and whether the platform name could be swapped without changing the copy. A deterministic exact-block scan was run with `skills/seo-content-pipeline/scripts/template_pattern_scan.py` using a six-word minimum across the declared rhythm and prepared corpus. The scan found repeated operational and governed-service blocks, but no independent target body block that establishes a mass-generated article shell.

This is a structural/editorial comparison, not an AI-detector or authorship test. Shared eBay terms (`MC011`, `eBay Messages`, `seller`, `appeal`, and market names) are necessary vocabulary and are not template defects by themselves. The public corpus contains legacy pages generated from a common renderer; that legacy sameness is recorded as a corpus condition, not attributed to the target's new draft. Exact matching does not detect paraphrased semantic similarity, so the structural reading below remains required.

## Repeated patterns found

### 1. Notice-first diagnostic opening — LOW, intentional

The target opens by telling the reader to read the authenticated MC011 notice and identify the market, affected function, and named action. `ebay-seller-verification-failed` also starts from the account message, but its decision is a failed seller-verification check; `mc011-documents-requested` starts from an already authenticated evidence request. The same first principle is justified by eBay's account-specific instructions and does not create a swappable article shell.

### 2. Repeated safety boundaries — LOW, governed

The target and other guides warn against passwords, authentication codes, full card data, altered records, and bypassing restrictions. This language is required by the canonical service definition and by the safety rules, not decorative filler. It is acceptable once at the relevant risk point and once in the bounded consultation close; it must not be copied into every section.

### 3. Generic `Common questions` label — LOW / INFO

The target uses the English label `## Common questions` despite Russian body copy. Other current and legacy guides use FAQ-like endings and some use the same label. This is a consistency issue, not a material template defect: the five questions are specific to MC011 message triage (cause inference, payout inference, market transfer, account circumvention, and missing evidence). If the public language policy requires Russian labels, change only the heading to `## Частые вопросы`; do not add the legacy fixed FAQ set.

### 4. Market qualification and uncertainty states — LOW, necessary

The target, seller-verification guide, and MC011 document guide all separate market, account context, and unknown fields. The exact labels `CONFIRMED`, `UNKNOWN`, `NOT_MENTIONED`, `MATCHED`, and `UNRESOLVED` are functional state values rather than boilerplate. They support the target's diagnostic intent and should remain stable across related eBay guides.

### 5. Telegram consultation close — LOW, governed and intent-bounded

The target offers a review of redacted facts only after self-checking and says it cannot access the account, guarantee a result, or replace eBay's route. Comparable guides use the same service scope. This is an approved conversion safeguard, not a repeated promotional argument. Keep it once, after the useful answer, and avoid a generic CTA before the notice classification.

### 6. Operational appendix structure — INFO, excluded from reader-facing score

All V4 rhythm files contain similar headings such as `Experience opportunity map`, `Evidence and privacy`, `Reader sequence review`, and `Rhythm changes`. These are required audit records. Rendering any of them would create visible process boilerplate and would be a packaging failure; they are not evidence that the target article body is templated.

### 7. No material repeated H2 sequence or platform-swapped body

The target's order is: authenticated message → account context and market → affected function → request classification → evidence boundaries → safe state and handoff. It does not reproduce the seller-verification order (failed check → seller type/market → document status), the documents guide's order (request worksheet → genuine record matching → submission parameters), or the broad `mc011-restriction` issue record. Replacing `eBay` with PayPal, Grailed, Etsy, or Vestiaire would break the target's objects (`eBay Messages`, MC011, registered eBay site, and evidence-request handoff), so no mechanical platform substitution was found.

## Affected pages

| Pattern | Affected pages | Assessment |
|---|---|---|
| Notice-first opening | Target; `ebay-seller-verification-failed`; `mc011-documents-requested` | LOW; shared because each handles an account message, while the decision and next step differ |
| Safety/privacy wording | Target and current V4 sibling guides | LOW; governed service and anti-circumvention language |
| `Common questions`/FAQ-style close | Target and some legacy/current guides | LOW/INFO; heading can be localized, questions remain target-specific |
| Market and uncertainty fields | Target and eBay sibling guides | LOW; required to avoid cross-market claims |
| Operational V4 headings | All rhythm drafts | INFO; internal only, must not render |
| Exact independent body block ≥6 words | None implicating the target | No material repetition found by deterministic scan |
| Legacy renderer shell | Legacy public issue records in `src/data/issues.ts` | HIGH for the unchanged legacy corpus, but not a target rewrite finding and not authorization to replace live pages |

## Severity

- **HIGH:** none in the target reader-facing body.
- **MEDIUM:** none.
- **LOW:** governed safety language, market qualification, uncertainty state labels, and the generic English FAQ heading.
- **INFO:** repeated operational appendices and the legacy public renderer's historical shell; both are excluded from the target body score.

## Exact examples

1. Target opening: “Если в вашем аккаунте eBay появился код MC011…” The seller-verification sibling also begins from an account message, but then branches into verification checks rather than MC011 task classification. This is shared problem framing, not a copied block.
2. Target table state: `CONFIRMED / UNKNOWN / NOT_MENTIONED`. These are explicit worksheet states; they are not interchangeable filler and should not be synonym-replaced.
3. Target FAQ heading: `## Common questions`. It is the only visible language inconsistency worth correcting; the questions beneath it are MC011-specific.
4. Target CTA boundary: “Не отправляйте пароль, код аутентификации…”. The same safety rule appears in the canonical service scope and sibling guides; it is a required privacy disclosure.
5. Target operational heading: `## Experience opportunity map`. This and the other V4 audit headings must remain outside the rendered guide.

## Required rewrites

No information-order rewrite is required for template-pattern reasons. Before publication or rendering:

1. Localize `## Common questions` to `## Частые вопросы` if the Russian UI/content language policy requires it; do not replace the questions with a stock FAQ.
2. Keep the notice-first order and the conditional handoff to `mc011-documents-requested`; do not add a universal document list, upload workflow, payout-release advice, or appeal strategy.
3. Keep the Telegram safety/service block once, after the diagnostic answer, and retain its page-specific value proposition.
4. Ensure all operational appendix headings and markers remain non-public. If they appear in the rendered article, stop and fail this audit.
5. Preserve `MC011` and the state labels as functional terminology; cosmetic synonym replacement would reduce clarity and would not solve template risk.

## Result

The target has a distinct diagnostic job and a different H2/information order from the eBay verification and document-preparation guides. Repeated safety, market, and uncertainty language is governed or necessary. No material independent repeated body pattern or mechanically swapped platform shell was found. The optional FAQ-heading localization and non-rendering of operational appendices are packaging improvements, not unresolved template defects. This result does not clear the target's existing market, source-freshness, manual-review, experience, or owner-approval blockers.

PASS
