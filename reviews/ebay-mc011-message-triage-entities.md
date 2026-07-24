# Entity coverage review: ebay-mc011-message-triage

**Reviewed artifact:** `drafts/ebay-mc011-message-triage-rhythm.md`
**Inputs:** `research/ebay-mc011-message-triage.md`, `strategy/ebay-mc011-message-triage.md`, `serp/ebay-mc011-message-triage.md`, and relevant platform/source records
**Review date:** 2026-07-24
**Scope:** Russian diagnostic guide for interpreting an authenticated eBay MC011 message. This audit recommends only natural additions that improve comprehension. It does not edit the article or turn market-specific examples into universal rules.

## Topic model

The page models a message-first diagnostic path:

`eBay account` → `authenticated MC011 notice` → `registered eBay site / seller context` → `affected account function` → `named action or evidence request` → `official route shown in the notice` → `receipt/status check`.

The page also needs to preserve the following distinctions:

- MC011 is a message/restriction label, not a complete diagnosis;
- an email and its copy in **eBay Messages** are separate evidence surfaces, with the authenticated copy taking priority;
- a restriction, suspension, document/evidence request, payout effect, and appeal route are related but not interchangeable states;
- eBay Japan examples, US seller-registration requirements, and UK help guidance are market/workflow-specific evidence, not a global MC011 checklist;
- an authentic record must match the account and request; missing information remains unresolved rather than an invitation to invent a substitute;
- support or a consultation can help organize facts, but cannot determine eBay's decision, timing, payout release, or restoration.

## Entity coverage table

| Entity / relationship | Role in this topic | Current coverage in rhythm draft | Evidence source | Importance | Recommendation |
|---|---|---|---|---|---|
| **eBay** | Platform issuing the notice, account restriction, and next-step instruction | Strong and natural throughout the title, diagnostic steps, source notes, and FAQ | Research F1–F10; S1–S6 | Core | Keep. Do not add generic company history. |
| **MC011** | The exact code/string the reader is trying to interpret | Strong: correctly described as a message label rather than a diagnosis | Research F6–F7; SERP/strategy | Core | Keep exact code. Avoid adding speculative trigger meanings. |
| **eBay account** | Authenticated context in which the restriction and tasks appear | Strong; the article repeatedly directs the reader to the account | Research F1–F4, F9 | Core | Keep. Pair with registered site and seller type on the first checklist. |
| **eBay Messages** | Authenticated copy used to compare an email and confirm the instruction | Strong and placed before document/action decisions | Research F1, F9; S1, S5 | Core | Keep as the primary authenticity relationship. |
| **Restriction** | Account state that may limit one or more functions | Strong; possible effects are enumerated conditionally | Research F2–F3, F6; S1, S3 | Core | Keep with “may” and message-specific qualification. |
| **Suspension** | Related but distinct account state that can affect access or selling | Present in the restriction/suspension explanation and FAQ | Research F1–F3, F8 | High | Keep briefly; do not merge it with every MC011 notice. |
| **Registered eBay site / market** | Determines which official help, agreement, and operational rules apply | Strong and repeatedly marked unresolved when absent | Research F1, F6–F7; strategy markers | Core | Keep `MANUAL_REVIEW_REQUIRED`. Language or current location must not stand in for market. |
| **Seller/account type** | Provides context for the displayed requirement and applicable workflow | Present in the notice card and evidence checklist | Research F1, F4; strategy | Core | Keep beside registered site. No additional business/legal taxonomy is needed. |
| **Affected account function** | Distinguishes listings, selling, messages, profile, payouts, or access | Strong: separate classification and visibility states | Research F2, F6; S1, S3 | Core | Keep as a field, not as a universal list of blocked functions. |
| **Named next action** | Governing object in the notice: document, payment, listing change, tracking, or other task | Strong; request-to-route matrix makes it central | Research F3, F6–F7 | Core | Keep. This is the page's unique practical value. |
| **Document/evidence request** | Conditional branch for readers who received an actual request | Strongly separated from generic MC011 triage and linked to the sibling guide | Research F3, F6–F7; `mc011-documents-requested` boundary | Core conditional | Keep. Link only after the reader confirms a concrete request. |
| **Identity evidence** | One possible request category in a named workflow | Present as conditional, not universal | Research F4, F6–F7; S2–S3 | High | Keep only when tied to the authenticated notice or market-specific source. |
| **Proof of address** | Possible evidence category in eBay Japan example | Present with explicit Japan-only boundary | Research F6–F7; S3 | High | Keep as a bounded example. Do not make it a global requirement. |
| **Inventory / purchase evidence** | Evidence relationship for some requests | Present in the document and classification discussion | Research F6–F7; D1–D2 as discovery only | High | Keep conditional. Do not expand into a universal invoice checklist. |
| **Invoice / receipt / delivery record** | Potential genuine record that may be named by the notice | Present as examples and unresolved states | Research F6–F7; D1–D2 | High | Keep only as a notice-dependent category; no substitutes without evidence. |
| **Tracking / proof of delivery** | Another possible named action in an MC011 message | Present in the request-type table and safety wording | Research F6, SERP competitor patterns | High | Keep tied to the exact order/action shown by eBay. |
| **Payouts / sales proceeds** | Possible account effect, separate from the reader's inferred status | Strongly qualified; article says absence of wording is not proof of a hold | Research F2, F6; S1, S3 | Core qualification | Keep conditional. Do not add release dates or guarantees. |
| **Appeal** | Optional route whose availability and process are case/market-specific | Present with correct uncertainty boundary | Research F8; S4 | Secondary | Keep. Say eligibility is message/account-specific. |
| **Official eBay route** | Authenticated path for reply, upload, or support | Strong; route is treated as visible account instruction | Research F1, F3, F8–F9 | Core | Keep. Do not replace with third-party contacts or workarounds. |
| **Deadline / submission channel / file limits** | Operational attributes the notice may or may not show | Strong as fields to record; values remain unconfirmed | Research evidence gaps; S1–S3 | High | Keep `UNCONFIRMED` states. Add values only after exact-market verification. |
| **Genuine record / matching account details** | Integrity relationship between requested action and evidence | Strong, including anti-fabrication warning | Research F4, F6–F7; S2–S3 | Core | Keep. This is more useful than adding more document names. |
| **Phishing / spoof email** | Safety context for distinguishing authentic eBay contact | Strong through Messages and sensitive-data warnings | Research F9; S5 | High | Keep concise. Do not broaden into a generic cybersecurity article. |
| **Password / authentication code / full card data** | Sensitive information that must not be disclosed | Strong warning before any upload or consultation | Research F9; S5 | High | Keep. No additional personal-data inventory is needed. |
| **Additional account / circumvention** | Prohibited workaround that readers may consider | Strong, brief prohibition | Research F10; S6 | High | Keep without operational bypass detail. |
| **Payout hold / review time / restoration outcome** | High-anxiety questions but not universally inferable from MC011 | Correctly represented as unknown/account-specific | Research evidence gaps; SERP | High | Keep as uncertainty, not as entities with fixed values. |
| **Resolution Hub consultation / Telegram `@helpgrailed`** | Optional help organising redacted facts after self-check | Present after useful guidance and bounded by service scope | `knowledge/services/telegram-service-scope-draft.md` | Conversion/support | Keep one CTA outside the platform topic model. It is not eBay support or an escalation channel. |

### Coverage summary

The article covers the core entity graph and, importantly, its negative relationships: the code is not a diagnosis; a Japanese example is not a global rule; a visible payout concern is not proof of a hold; receipt is not acceptance; and a consultation is not platform access. This is stronger topical coverage than adding every compliance or document term associated with marketplace restrictions.

## Missing or weak relationships

1. **MC011 → exact official global definition.** The current official MC011-specific source is eBay Japan. UK/US sources support message-specific restrictions but do not establish one worldwide MC011 workflow. This is an evidence boundary, not a missing keyword.
2. **Language edition → registered market.** The Russian page cannot infer whether the reader uses eBay Japan, UK, US, EU, or another site. Keep the market field early and unresolved until the notice/account confirms it.
3. **Notice → exact requested evidence/channel/deadline.** No authenticated reader notice is available. The current article correctly records these as `CONFIRMED`, `NOT_SHOWN`, or `UNKNOWN`; no further entity should be invented.
4. **Evidence request → accepted substitute.** The draft correctly refuses to infer a replacement for a missing invoice, receipt, or delivery record. This relationship remains open until current official or authenticated account evidence supports it.
5. **Submission → receipt → acceptance → restoration/payout.** The guide distinguishes response/receipt from outcome, but public sources cannot establish acceptance, review duration, restoration, or payout release. Keep this as an explicit uncertainty chain.
6. **Restriction code → trigger.** No reviewed official source establishes that country, sales velocity, account age, category, or another single factor caused this notice. Do not add trigger entities.
7. **Owner experience → this specific MC011 flow.** No confirmed owner case, screenshot, timeline, or outcome exists. The existing `EXPERIENCE_REQUIRED` marker is correct and must remain if experience is presented as necessary.

## Natural addition recommendations

These are optional wording-level recommendations for a later editorial pass; this review does not edit the draft.

1. Keep the paired phrase **“зарегистрированный сайт eBay и тип аккаунта”** in the first diagnostic card and before any market-specific example.
2. In the request matrix, label each row with **“названо в авторизованном сообщении”** so the relationship between the notice and the next action remains explicit.
3. Preserve the distinction **“сообщение получено / ответ отправлен / получение подтверждено / результат неизвестен”**. This improves semantic accuracy without adding a new platform claim.
4. Keep the conditional handoff to `mc011-documents-requested` immediately after the reader confirms an actual document request; do not repeat that guide's checklist.
5. Retain a single sentence linking payout language to the notice: if payouts are not named, the article cannot classify them. Avoid adding “Managed Payments”, KYC, or AML labels merely for completeness.
6. Keep the anti-fabrication and sensitive-data warning beside evidence preparation, not as a detached generic footer. This makes the relationship between records and account safety clear.
7. Keep the Telegram CTA after self-diagnosis and identify it as a paid consultation for redacted facts, not eBay support, document creation, or a route to change the platform decision.

All recommendations depend on the existing source hierarchy. None adds a market, fee, deadline, file limit, timeline, trigger, outcome, or document requirement.

## Rejected entity stuffing

The following terms were considered and rejected because they are unsupported, irrelevant, or would broaden the page beyond message triage:

- **KYC, AML, sanctions, beneficial owner, source of funds, payment regulation, tax reporting, legal remedies:** no reviewed source establishes these as the cause or workflow of this notice.
- **Managed Payments:** not required to explain the current diagnostic model; adding it could imply a payout-specific workflow that the notice may not contain.
- **Seller Performance, defect rate, late shipment rate, feedback score, account age, sales velocity, country of residence:** no evidence establishes them as universal MC011 triggers.
- **Universal passport, proof-of-address, invoice, supplier, or three-document checklist:** examples are market- and workflow-specific; the authenticated notice governs.
- **PayPal, Grailed, Etsy, Vestiaire Collective:** unrelated platforms for this page.
- **Alternative accounts, identity substitution, bypass, unlock, executive escalation, or “guaranteed recovery” language:** unsafe or misleading and prohibited by the editorial constitution.
- Repeated translations of “MC011”, “restriction”, or “documents” that do not add a relationship or reader action: keyword stuffing without semantic value.

## Fact-check dependencies

- Recheck S1–S6 immediately before publication; undated eBay help pages and operational routes may change.
- Confirm the target registered eBay market/site and seller context before any market-specific wording is retained.
- Obtain a redacted authenticated MC011 notice before stating an exact affected function, requested evidence, deadline, file limit, language, or upload/reply channel.
- Keep eBay Japan examples explicitly Japan-only; do not transplant them into RU/UK/US/Ukraine copy.
- Keep US seller-registration technical requirements bounded to that workflow; they do not establish universal MC011 upload rules.
- Do not add a substitute-evidence recommendation, review duration, payout release date, restoration likelihood, or appeal eligibility without current market-specific official evidence.
- Recheck the distinction between receipt, acceptance, restoration, and payout status; no public source currently supports collapsing these events.
- No owner-experience addition is permitted until a matching confirmed record, redaction review, and publication permission exist.
- Use only the canonical Telegram service definition for the support CTA; it must not imply eBay affiliation or a guaranteed result.

## Coverage score (0-100)

**Coverage score: 93/100.**

The draft covers all core entities and relationships needed for a safe, useful MC011 triage guide: platform, notice, authenticated message surface, market, account context, affected function, named action, evidence integrity, official route, uncertainty states, and safety boundaries. The remaining seven points reflect intentionally unresolved market/notice specifics and the absence of confirmed owner experience. Those are evidence dependencies that must not be filled with extra terminology or assumptions.

### Rerun note

2026-07-24: Audited the latest `drafts/ebay-mc011-message-triage-rhythm.md`. No article text, source register, publication status, URL, or blocking marker was changed. This file replaces any earlier entity review for the slug.
