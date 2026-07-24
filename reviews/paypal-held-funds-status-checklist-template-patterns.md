# Template-pattern audit: PayPal held-funds status checklist

## Corpus reviewed

The audit was rebuilt on 2026-07-24 from the current files, not from a prior score:

- Target: `drafts/paypal-held-funds-status-checklist-rhythm.md` (Russian status-triage resource).
- Current prepared guides: `prepared/paypal-held-funds-status-checklist.md`, `prepared/paypal-payment-hold-after-sale.md`, `prepared/paypal-withdrawal-unavailable.md`, `prepared/funds-held-180-days.md`, `prepared/ebay-seller-verification-failed.md`, `prepared/mc011-documents-requested.md`, `prepared/frozen-after-sale.md`, and `prepared/can-you-sell-on-ebay-from-ukraine-2026.md`.
- Current rhythm-edited comparison set: every `drafts/*-rhythm.md` file available at audit time (eight files, including the three PayPal siblings and eBay/Grailed guides).
- Published-corpus inventory: `content-audit/article-inventory.csv` and the route/brief data in `src/data/issues.ts`.
- Intent context: `strategy/paypal-held-funds-status-checklist.md` and the target row in `content-plan/pages.csv`.

Operational appendices in rhythm/prepared artifacts were reviewed for leakage, but are not treated as reader-facing prose. They must remain outside the rendered article body.

## Method and limitations

The comparison checks normalized introductions, H1/H2/H3 order, section and FAQ labels, CTA wording, transition phrases, paragraph rhythm, callout labels, generic conclusions, semantic overlap, and mechanically swapped platform names. Exact phrase matches were checked across the available Russian, English, and Ukrainian drafts; near matches were then read in context.

This is a structural/editorial comparison, not an authorship or AI-detection test. Shared PayPal terminology (`held`, `pending`, `reserve`, `Resolution Center`) and truthful service-scope language are not template defects by themselves. The target is a proposed resource and has no independent production engagement data; this audit cannot predict ranking or reader response.

## Repeated patterns found

### 1. Diagnostic opening convention — low severity, intentional

The target opens with a visible-status qualification and then moves to the first observation. Its closest PayPal siblings also use an explicit “first classify what the account shows” opening. Examples:

- Target: “Если PayPal показывает `held`, `on hold`, `pending`, `reserve` или `unavailable`, одного слова недостаточно…”
- `paypal-payment-hold-after-sale`: “Фраза «платёж удерживается» слишком общая для безопасного совета.”
- `paypal-withdrawal-unavailable`: “Первый вопрос — перевод вообще был создан или в аккаунте нет доступного маршрута…”

These are the same editorial principle, not an identical introduction. The target's job is status triage; the sibling jobs are post-sale payment and withdrawal diagnosis. No information order or wording rewrite is required.

### 2. Market-qualification transitions — low severity, required platform safety

The target and PayPal siblings all warn that account language/location does not establish the governing market. This is necessary to prevent transferring a US or UK example to another account. The target's market matrix and its “зарегистрированный рынок” wording are specific to its intent and are not copied from the sibling H2 sequence.

### 3. Telegram scope and no-guarantee language — low severity, governed boilerplate

The target shares policy language with PayPal sibling guides, including the shortest locating phrase: “Resolution Hub не связан с PayPal и не получает доступ к аккаунтам.” The siblings also state that documents are not created or altered, bypasses are not offered, and outcomes are not guaranteed.

This repetition is required by the canonical service definition and protects readers. It is acceptable as a stable disclaimer, but it must remain after the diagnostic answer and must not be expanded into a generic promotional block. No rewrite is required for this target.

### 4. Internal editorial appendices — excluded from public-pattern score

The rhythm files repeat headings such as `Experience opportunity map`, `Evidence and privacy`, `Case integration changes`, `Narrative changes`, `Reader sequence review`, and `Rhythm changes`, with similar audit tables. These are pipeline records, not article sections. They are a material defect only if the renderer exposes them to readers. The target's prepared package currently treats them as operational material; keep that boundary intact.

### 5. No material repeated H2 sequence

The target's sequence is `exact notice → affected object → account functions → registered market → date qualification → authenticated action → evidence snapshot → narrow handoff`. It does not reproduce the sibling sequences:

- `funds-held-180-days`: long-hold mechanism → governing agreement → notice date/event → passed-date status;
- `paypal-payment-hold-after-sale`: transaction/post-sale classification → sale and marketplace signals → market → tracking/status;
- `paypal-withdrawal-unavailable`: missing withdrawal route versus existing transfer → exact error/status → market → transfer branches.

The overlap is thematic because all pages diagnose PayPal states; the information order and decision boundary are distinct.

### 6. No mechanical platform-name substitution detected

The target uses PayPal-specific objects, market qualification, Resolution Center/Resolution Centre terminology, reserve/withdrawal distinctions, and the approved handoff boundaries. No paragraph was found to be an eBay, Grailed, Etsy, or Vestiaire template with only the platform name changed.

## Affected pages

- `paypal-held-funds-status-checklist` — target; no material repeated pattern found.
- `paypal-payment-hold-after-sale` — shares the governed PayPal disclaimer and diagnostic opening convention only.
- `paypal-withdrawal-unavailable` — shares the governed PayPal disclaimer and market-qualification convention only.
- `funds-held-180-days` — shares the governed PayPal disclaimer and status-classification vocabulary only; its long-hold/date intent remains separate.
- eBay/Grailed comparison files — no mechanical body substitution or repeated target H2 sequence found.
- Internal rhythm/prepared appendices — repeated operational structure, excluded from reader-facing score and must not be rendered.

## Severity

- **HIGH:** none in the reader-facing target body.
- **MEDIUM:** none.
- **LOW:** stable market-qualification language and canonical Telegram safety disclaimer; both are intentional, source/governance-required repetitions.
- **INFO:** repeated operational appendix headings/tables; excluded from public article content.

## Exact examples

1. Target CTA boundary: “Resolution Hub не связан с PayPal и не получает доступ к аккаунтам.” The same governed sentence appears in the PayPal sibling set. It is a safety disclosure, not a value proposition or duplicated article section.
2. Target transition: “Учитывайте зарегистрированный рынок.” The sibling pages use equivalent market checks, but their surrounding questions and tables differ.
3. Target first-check framing: “Сначала сохраните точную формулировку.” The sibling pages use different first objects (`что именно показывает PayPal`, `что именно недоступно`, or the 180-day mechanism), so this is not an identical heading sequence.

## Required rewrites

No article rewrite is required for template-pattern reasons. Preserve the target's status-first order and its explicit handoffs. Before rendering or publication:

1. Keep the operational appendices out of the public body; if they become visible, stop and fail this audit.
2. Keep the Telegram disclaimer canonical, after the useful diagnostic answer, and do not repeat it in multiple body sections.
3. Do not add a generic “Common questions” block or a stock conclusion solely to match sibling pages.
4. Keep the 180-day, post-sale, and withdrawal links as narrow contextual handoffs; do not copy their core sections into this resource.

## Result

No unresolved material template pattern remains in the reader-facing target body. Shared language is either required platform terminology or a governed safety disclosure; the target's H2 order and diagnostic value remain distinct. Operational appendix repetition is explicitly excluded and must not leak into rendering.

PASS
