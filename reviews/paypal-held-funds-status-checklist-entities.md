# Entity Coverage Review: PayPal held-funds status checklist

Slug: `paypal-held-funds-status-checklist`
Language: Russian
Reviewed artifact: `drafts/paypal-held-funds-status-checklist-rhythm.md`
Review date: 2026-07-24

## Topic model

The page is a diagnostic resource for a reader who already sees a PayPal status such as `held`, `on hold`, `pending`, `reserve`, or `unavailable`. Its semantic centre is not “how to release money”; it is the relationship between the exact notice, the affected object, the account's registered market/type, and the official authenticated route shown by PayPal.

Core relationships:

`PayPal account` → displays an `account/transaction notice` → identifies an affected object (`payment`, `balance/reserve`, `account limitation`, `withdrawal`, or `dispute`) → points to a conditional `official account route` (for example, Resolution Center/Resolution Centre or a notice action). `Registered market` and `account type` qualify which agreement, labels, features, documents, and timing examples can apply. A marketplace or third-party app may be an external initiator when the notice explicitly names it.

The page intentionally does not model a universal cause, document list, release date, success outcome, KYC/AML rule, or legal remedy.

## Entity coverage table

| Entity / attribute | Role in this topic | Current coverage | Evidence source | Importance | Recommendation |
|---|---|---|---|---|---|
| PayPal | Platform whose notice and account surfaces are being interpreted | Explicit throughout title, headings, body, links and source register | Research OF-01–OF-03; S1–S7 | Core | Keep. Do not imply Resolution Hub affiliation. |
| PayPal account | Container in which notices, balance, limitations and functions are observed | Explicit in the introduction, account-function checks, market section and evidence snapshot | Research OF-02, OF-13–OF-14; S1, S6 | Core | Keep. Ask for account type and registered market before applying examples. |
| Registered market / governing agreement | Qualifies labels, rules, routes and time examples | Strong: dedicated section and comparison table; also open `MANUAL_REVIEW_REQUIRED` for the page's final market scope | Research evidence gap 1; S1–S3, S9 | Core | Retain. Resolve scope before publication; never collapse US/UK/Ukraine-EU contexts. |
| Account type (personal/business) | Changes which reserve, balance and help material may apply | Captured in the minimal state snapshot and market caveats; not over-expanded | Research OF-08–OF-09; S5 | Core context | Keep as a field. Add no account-type rule without a matching official source. |
| Exact notice / banner / email | Primary case-specific evidence | Strong: opening capture checklist and repeated account-specific boundary | Research OF-02–OF-03; S1–S3 | Core | Keep. Preserve exact wording and date rather than paraphrasing. |
| Payment / transaction | Object that can have its own status | Strong: status-to-scope matrix, function checks, passed-status matrix | Research OF-01, OF-04, OF-11; S1, S4 | Core | Keep. Do not merge it with balance or account limitation. |
| `Pending`, `held`, `on hold`, `Held`, `temporary hold`, `unavailable` | Interface/status labels requiring contextual interpretation | Strong: labels are quoted and explicitly not treated as a universal taxonomy | Research OF-02, OF-04, OF-21; S1, S4, S9 | Core | Keep as observed labels. Recheck current market labels under `SOURCE_FRESHNESS_REQUIRED`. |
| Reserve | Balance mechanism that can make funds unavailable | Strong: separate matrix branch, definition and market qualification | Research OF-08–OF-10; S1, S5 | Core | Keep. State only what the account's reserve details show; no release prediction. |
| Balance / available balance | Scope needed to distinguish unavailable funds from a completed release or withdrawal | Strong: balance comparison and passed-status table | Research OF-08–OF-10; S1, S5 | Core | Keep. Distinguish available balance from completed bank transfer. |
| Account limitation | Account-level state distinct from one payment hold | Strong: matrix branch, function impact and separate handoff boundary | Research OF-13–OF-14; S1, S6 | Core | Keep. Do not infer the reason or turn this page into an appeal guide. |
| Sending / receiving / withdrawing functions | Observable scope signals for triage | Strong: dedicated three-function check and evidence snapshot | Research OF-13–OF-14; S1, S6 | Core relationship | Keep. Treat unavailable functions as observations, not proof of cause. |
| Withdrawal | Separate transfer object that can be pending/failed/returned | Strong: dedicated branch and exclusion boundary | Research OF-14; S6 and related official help context | Core boundary | Keep. Handoff to withdrawal guide when withdrawal-only evidence is present. |
| Dispute / chargeback / refund / negative balance | Distinct transaction or balance states that may coexist with a hold | Present in matrix and passed-status table without claiming causation | Research OF-04, OF-07, OF-13, OF-19; S1, S3, S4, S8 | Important contextual | Keep as conditional states. Do not imply any one is the cause of the reader's hold. |
| Resolution Center / Resolution Centre | Official authenticated surface for account-specific instructions | Strong: named repeatedly with US/UK spelling qualification | Research OF-03, OF-14, OF-18; S1–S3, S6, S8 | Core route | Keep. Verify exact current name/URL for the selected market before publication. |
| Official account action / release option | Conditional route shown only to a logged-in account | Covered as “instruction/button shown by account” and “Know your options” caveat | Research OF-18; S8 (with freshness/error note) | Core relationship | Keep conditionally. Do not present a control as universal or promise release. |
| Marketplace / authorized third-party app | Possible external party instructing PayPal to hold funds | Strong, limited to notices that explicitly name such a party | Research OF-15–OF-16; S1, S2 | Important conditional | Keep. Direct questions about the instruction to the named marketplace/third party; do not generalize. |
| Identity confirmation / identity-related hold | One market-specific branch where an account asks for identity information | Covered conditionally in the official-route section; no universal document list | Research OF-17; S7 | Important conditional | Keep only as notice-led. Do not add “KYC” or a global identity checklist. |
| Documents / requested information | Evidence requested by the account notice, not a universal package | Strong boundary: follow only the named request; do not send documents “just in case” | Research evidence gap 4; S1–S9 | Core safety relationship | Keep. Any document example requires the selected market's current source and the exact notice. |
| Registered country versus citizenship/current location | Prevents a common misclassification of applicable market | Explicit warning that language, citizenship and location do not determine governing market | Strategy scope; Research evidence gap 1 | Important | Keep. It improves comprehension without asserting a platform rule beyond source scope. |
| Evidence snapshot / redacted screenshot | Safe way to preserve status facts before support or consultation | Strong: exact fields and data-minimisation instructions; no fabricated case | `knowledge/services/telegram-service-scope-draft.md`; experience map | Important | Keep. Legal/privacy wording remains subject to `LEGAL_REVIEW_REQUIRED`. |

## Missing or weak relationships

1. **Market → exact source set:** The article explains the relationship, but the final Russian page still has `MANUAL_REVIEW_REQUIRED` for which registered markets it explicitly covers. Until selected, no additional market entity or localized route should be added.
2. **Notice → authenticated action:** The draft correctly says to use only the action shown in the account, but the exact current action label/URL is not verified for the chosen market. Keep this relationship conditional and retain `SOURCE_FRESHNESS_REQUIRED`.
3. **Account type → reserve terminology:** Business reserves are sourced, while personal-account readers may see different controls. The draft avoids a false universal rule; do not broaden this relationship without a market/account-type source.
4. **Marketplace/third party → responsible support route:** The relationship is present only when the notice names an external party. No platform-specific marketplace should be added as an example without an observed notice or official source.
5. **Identity request → requested evidence:** The draft correctly avoids a document list. The relationship remains intentionally incomplete until a reader's actual notice and selected-market source identify the request.
6. **Status → cause/timing/outcome:** This is an intentional non-relationship. The page must not connect a label directly to a cause, fixed deadline, release event, or success probability.

## Natural addition recommendations

No mandatory entity injection is recommended. The draft already covers the entities needed to perform status triage without stuffing. If editorial review needs one small clarity improvement, add a one-sentence relationship reminder near the first matrix:

> `Статус относится к конкретному объекту — платежу, балансу/резерву, аккаунту или выводу; одна и та же подпись не доказывает одну и ту же причину.`

This is a synthesis of the article's existing, cited distinctions rather than a new platform fact; retain the nearby source references.

Optional, only after market confirmation:

- Add the selected market's exact localized name for Resolution Center/Resolution Centre beside the existing conditional wording.
- Add a source-qualified `identity confirmation` row only if the chosen market's current help page and the account notice support it.
- Add a redacted screenshot only from a reviewed owner record with market, account type, date, permission, and private-data boundaries. Current experience status is `OPTIONAL_EXPERIENCE_ENHANCEMENT`; no screenshot is available.

Do not add PayPal-related terms merely for topical breadth: KYC, AML, proof of address, seller performance, eBay, Etsy, Grailed, Vestiaire, bank, card issuer, or tax authority are not required for this diagnostic page unless the exact notice and source make the relationship relevant.

## Rejected entity stuffing

- **KYC / AML:** Generic compliance terminology would suggest rules or obligations not established for the selected market and would not help classify the visible status.
- **Proof of address / passport / driver's licence:** No universal document request is supported. Adding these as generic entities could cause unsafe oversharing.
- **eBay, Grailed, Etsy, Vestiaire:** Cross-platform names would broaden the page and blur the PayPal-only diagnostic intent. Mention a marketplace only when the account notice names it.
- **Bank, card network, tax authority, regulator:** These entities are outside the first PayPal status check and could imply financial/legal advice.
- **“180 days” as a generic status attribute:** It belongs to the separate long-hold/limitation guide and is only a conditional handoff here.
- **Support outcome, release date, success rate:** These are not entities and must not be represented as predictable relationships.

## Fact-check dependencies

- Recheck S1–S7 and the selected-market equivalent immediately before publication; terminology and account controls can change.
- Keep S9 (older Ukraine/EU-facing PDF) marked `SOURCE_FRESHNESS_REQUIRED`; it cannot establish a current universal rule.
- Preserve `MANUAL_REVIEW_REQUIRED` for registered-market scope and authenticated status-flow validation.
- Preserve `LEGAL_REVIEW_REQUIRED` for privacy/data-minimisation wording and any sentence that could be read as legal, tax, financial, or platform-policy advice.
- Preserve the duplicate/cannibalization boundary with `funds-held-180-days`, `paypal-payment-hold-after-sale`, `paypal-withdrawal-unavailable`, and limitation/appeal pages.
- No verified owner record exists for this slug. Do not add a first-person case, timeline, screenshot, or outcome.

## Coverage score (0-100)

**Coverage score: 94/100**

Rationale: all core semantic entities and their diagnostic relationships are present, separated by object and qualified by market/account context. Six unresolved relationships are deliberate evidence or scope dependencies rather than missing vocabulary. The score is not a publication decision and does not override the blocking markers in the rhythm draft.
