# Fact check: ebay-mc011-message-triage

## Summary

Status: **PASS_WITH_MANUAL_REVIEW**. The Russian draft was checked against the latest live official eBay pages on 2026-07-23 and the current research, strategy, and service definition. The diagnostic intent is preserved. Market-specific examples remain labelled; no universal MC011 document list, upload limit, deadline, review time, payout-release date, restoration probability, or trigger theory is presented as fact. No confirmed owner case exists for this slug. The original draft was not edited.

The verified copy is `drafts/ebay-mc011-message-triage-verified.md`. Blocking markers remain because the target market, authenticated notice, and owner experience are still missing.

## Live-source check

| Source | Live result checked 2026-07-23 | Scope decision |
|---|---|---|
| S1 — eBay UK, Account restrictions and suspensions | Current page states that reasons and next steps are in the account email/Messages; effects such as selling, listings, messages, profile changes and payouts are conditional. | Use only as UK help context and conditional account-effect support. |
| S2 — eBay US, Registering as a seller | Current page separates identity, bank/payout and business verification; documents must match, be current/readable, and follow the US upload rules. | Use only for US seller-registration context; never as a universal MC011 specification. |
| S3 — eBay Japan, account restriction guidance | Page updated 2026-06-10; explicitly names `[MC011 We restricted your account]`, gives Japan-specific document examples and limits, and says to follow the exact message for additional action. | Keep every document, format, size and language detail Japan-only. |
| S4 — eBay UK, Appeal an action taken by eBay | Page says appeal eligibility is explained case-by-case and routes payments, blocked payouts and verification issues to relevant help/support paths. | Use only for conditional UK appeal branch. |
| S5 — eBay US, Recognizing phishing phone calls and emails | Current page advises checking eBay Messages and warns against passwords, financial data, unsolicited links/attachments and urgent requests. | Use as a security check, not proof of a specific restriction. |
| S6 — eBay US, User Agreement policy | Current policy prohibits false/incomplete information used to circumvent policies and additional accounts used to circumvent restrictions or suspension. | Use as eBay.com policy context and safety boundary. |

## Material-claim ledger

### MCMT-01
- Exact claim: MC011 is not a diagnosis or universal document list; the reader must inspect the authenticated notice, registered eBay site/market, affected function, named action and route.
- Location: opening and “MC011 — это обозначение сообщения, а не готовый диагноз”.
- Source level: LEVEL 1 plus editorial synthesis.
- Source/record: S1, S3; research/ebay-mc011-message-triage.md; organization: eBay.
- URLs: S1 https://www.ebay.co.uk/help/default/default/account-holds-restrictions-suspensions?id=4190; S3 https://www.ebay.co.jp/info/announcement-190305/article212
- Applicability: diagnostic method across markets; official examples are market-limited; checked 2026-07-23.
- Exact support: S1 says details and required steps are in the account message; S3 says follow the specific MC011 email when additional action is requested.
- Confidence: HIGH for the account-message requirement; MEDIUM for the editorial four-field synthesis.
- Status: SUPPORTED.
- Correction: none; target-market marker retained.
- Safety note: does not infer a cause or outcome.

### MCMT-02
- Exact claim: Depending on the reason, an eBay restriction may affect selling, bidding/buying, listings, messages, profile information or payouts; not every function is affected in every account.
- Location: “MC011 — это обозначение…” and “Что именно ограничено в аккаунте?”.
- Source level: LEVEL 1.
- Source/record: S1; organization: eBay UK; URL above; checked 2026-07-23.
- Applicability: eBay UK help context; conditional wording only.
- Exact support: S1 lists conditional inability to bid/buy/sell, create/revise listings, contact bidders, reply to messages, update personal information and possible payout hold.
- Confidence: HIGH within UK context.
- Status: SUPPORTED.
- Correction: retain “может/в зависимости от причины”; no universal effect claimed.
- Safety note: payout concern is not treated as an established hold.

### MCMT-03
- Exact claim: Important restriction email should be checked against eBay Messages; absence of a matching copy is a phishing warning.
- Location: “Сначала найдите…” and checklist item 1.
- Source level: LEVEL 1.
- Source/record: S1, S5; organization: eBay; URLs above; checked 2026-07-23.
- Applicability: S1 UK account-help and S5 US-facing security guidance; use as a safety check, not a claim about every notification type.
- Exact support: S1 directs restricted users to Messages; S5 says to check Messages for a genuine request and warns about phishing.
- Confidence: HIGH.
- Status: SUPPORTED.
- Correction: none.
- Safety note: reader is told to use the official logged-in route.

### MCMT-04
- Exact claim: eBay security guidance warns that legitimate contact should not require passwords or card details and that suspicious links/attachments or urgent requests should not be used.
- Location: “Сравните письмо…” and “Before you continue”.
- Source level: LEVEL 1.
- Source/record: S5; organization: eBay; https://www.ebay.com/help/account/account-safety/spoof-emails-websites?id=4195; checked 2026-07-23.
- Applicability: security guidance; not a statement that a specific message is fake.
- Exact support: S5 identifies requests for passwords, bank/card details, urgent action, unsolicited attachments and suspicious links as phishing indicators.
- Confidence: HIGH.
- Status: SUPPORTED.
- Correction: none.
- Safety note: no credentials or full payment data should be sent to a consultant.

### MCMT-05
- Exact claim: The notice worksheet may record exact text, account surface, market, account type, affected function, named action, visible deadline, channel and payout status, while absent fields remain unresolved.
- Location: “Превратите сообщение в карточку запроса”.
- Source level: LEVEL 4 (editorial method) informed by LEVEL 1 account-message model.
- Source/record: strategy/ebay-mc011-message-triage.md; S1-S3; checked 2026-07-23.
- Applicability: Resolution Hub evidence-capture method; not an eBay form or required field list.
- Exact support: strategy requires these fields to distinguish a notice from a document, payout or appeal branch; S1-S3 establish that the message controls next steps.
- Confidence: HIGH as editorial method; MEDIUM as a complete field set.
- Status: SUPPORTED.
- Correction: worksheet labels remain `UNKNOWN`, `NOT_MENTIONED` or `UNRESOLVED`; no field is filled by inference.
- Safety note: copy only redacted text.

### MCMT-06
- Exact claim: A notice can be classified as general restriction, concrete evidence request, payout branch, appeal question or another named action; the article stops at classification and hands off to narrower resources.
- Location: “К какому типу относится следующий шаг?” and flow diagram.
- Source level: LEVEL 1 plus editorial architecture.
- Source/record: S1, S3, S4; strategy/ebay-mc011-message-triage.md; checked 2026-07-23.
- Applicability: classification framework; each branch remains dependent on the authenticated notice and market.
- Exact support: S1 describes restriction actions, S3 describes document/action exceptions, S4 separates appeal eligibility and payment/verification routes.
- Confidence: HIGH.
- Status: SUPPORTED.
- Correction: no remediation procedure or outcome added.
- Safety note: prevents sending unrelated material.

### MCMT-07
- Exact claim: eBay Japan's page is a Japan-specific example that names MC011 and three document categories, with its own attachment formats, limits and language notes; it cannot establish a global requirement.
- Location: market comparison table, “Не копируйте чужой список документов”, FAQ.
- Source level: LEVEL 1.
- Source/record: S3; organization: eBay Japan; https://www.ebay.co.jp/info/announcement-190305/article212; updated 2026-06-10; checked 2026-07-23.
- Applicability: Japan/eBay Japan only.
- Exact support: S3 names `[MC011 We restricted your account]`, lists identity/address/inventory evidence and states GIF/JPG/PNG/PDF, 2 MB per file, 20 MB total, English preferred/Japanese accepted, plus instruction to follow the email for exceptions.
- Confidence: HIGH in Japan; LOW if generalized.
- Status: SUPPORTED with market limitation.
- Correction: verified copy must preserve the Japan-only label and must not give those values as RU/UK/UA/global rules.
- Safety note: no substitute documents or fabricated records are suggested.

### MCMT-08
- Exact claim: eBay US seller-registration guidance separates identity, bank/payout and business verification and requires matching, current, readable documents under that workflow; those requirements are not a universal MC011 checklist.
- Location: market comparison table and “Не копируйте чужой список документов”.
- Source level: LEVEL 1.
- Source/record: S2; organization: eBay US; https://www.ebay.com/help/selling/getting-paid/registering-seller?id=4792; checked 2026-07-23.
- Applicability: US seller-registration context only.
- Exact support: S2 distinguishes identity/bank/business checks and says names must match, files must be current/readable, with US-specific formats and limits.
- Confidence: HIGH within US context.
- Status: SUPPORTED.
- Correction: no US values are generalized to MC011.
- Safety note: readers are told to follow their own authenticated request.

### MCMT-09
- Exact claim: eBay UK appeal eligibility is explained case-by-case; payment disputes, blocked payouts and verification issues may use separate help/support routes.
- Location: market comparison table, appeal branch and “Что MC011 не позволяет узнать заранее”.
- Source level: LEVEL 1.
- Source/record: S4; organization: eBay UK; https://www.ebay.co.uk/help/account/regulatory/ebay-internal-complaint-handling-system?id=5413; checked 2026-07-23.
- Applicability: eBay UK regulatory/help context; local process may differ.
- Exact support: S4 states eBay informs users case-by-case when an appeal can be filed and lists payments, blocked payouts and account verification among matters routed to help/support.
- Confidence: HIGH within UK context.
- Status: SUPPORTED.
- Correction: no automatic appeal right is stated.
- Safety note: article does not promise appeal success.

### MCMT-10
- Exact claim: The MC011 code alone cannot establish the cause, missing-document substitute, universal file limit, review time, payout-release date, appeal eligibility, restoration probability or final decision.
- Location: “Что MC011 не позволяет узнать заранее” and FAQ.
- Source level: LEVEL 4 evidence-boundary claim.
- Source/record: research evidence gaps and strategy blockers; S1-S4 provide only conditional, market-specific information; checked 2026-07-23.
- Applicability: all unconfirmed markets/accounts.
- Exact support: no reviewed official source provides a universal answer; official pages defer to the account message and market-specific route.
- Confidence: HIGH that current evidence is insufficient; LOW for any hidden account-specific answer.
- Status: MANUAL_REVIEW_REQUIRED.
- Correction: retain explicit uncertainty and all blockers.
- Safety note: blocks guarantees and unsafe workarounds.

### MCMT-11
- Exact claim: Genuine records only: do not alter, backfill, buy, borrow or fabricate evidence, and do not use another account or false data to evade restrictions.
- Location: “Genuine records only”, safety FAQ and checklist.
- Source level: LEVEL 1 for eBay policy plus LEVEL 4 project safety rule.
- Source/record: S6; AGENTS.md/CONTENT_PIPELINE_V4.md; URL https://www.ebay.com/help/selling/selling-rules/selling-rules?id=4371; checked 2026-07-23.
- Applicability: S6 eBay.com policy context; project prohibition applies to all editions.
- Exact support: S6 prohibits false/incomplete information to circumvent policies and additional accounts to circumvent restrictions or suspension.
- Confidence: HIGH.
- Status: SUPPORTED.
- Correction: retain normative safety wording without claiming eBay accepts any replacement.
- Safety note: no circumvention or identity misuse.

### MCMT-12
- Exact claim: If a document is missing, mark it missing/unresolved and check the authenticated instruction; no universal substitute is established by community discussions.
- Location: “Не копируйте чужой список документов” and FAQ “Что делать, если документ потерян?”.
- Source level: LEVEL 3 for recurring questions; LEVEL 4 for absence of a universal substitute.
- Source/record: D1, D2, D4 discovery-only; research evidence gap; checked 2026-07-23.
- Applicability: community sources are mixed-market language signals only.
- Exact support: dated discussions show people asking about receipts/tracking/substitutes; none establishes eBay policy.
- Confidence: MEDIUM for question recurrence; LOW for any answer.
- Status: SUPPORTED as a boundary, not as procedure.
- Correction: community links remain explicitly discovery-only.
- Safety note: no borrowed or altered evidence.

### MCMT-13
- Exact claim: `MATCHED`, `UNRESOLVED`, `CLARIFICATION_NEEDED`, `NEEDS_ACCOUNT_CLARIFICATION` and `CLASSIFIED_AND_ROUTE_VISIBLE` describe editorial states, not eBay decisions or proof of acceptance.
- Location: state section and flow diagram.
- Source level: LEVEL 4.
- Source/record: strategy/ebay-mc011-message-triage.md; checked 2026-07-23.
- Applicability: Resolution Hub worksheet only.
- Exact support: these states are defined by the draft and strategy to prevent inferred facts; no platform source is attributed.
- Confidence: HIGH as editorial method.
- Status: SUPPORTED.
- Correction: flow explicitly says classification does not mean acceptance, restoration, payout release or appeal confirmation.
- Safety note: avoids misleading progress claims.

### MCMT-14
- Exact claim: Telegram consultation may review redacted notices/screenshots, explain visible facts, identify missing information, help draft support messages and create an action plan; it cannot access accounts, create/modify documents, provide legal/tax/financial advice or guarantee an outcome/time.
- Location: “Когда нужна помощь с разбором фактов” and CTA.
- Source level: LEVEL 2.
- Source/record: knowledge/services/telegram-service-scope-draft.md; owner-confirmed canonical definition effective 2026-07-17; checked 2026-07-23.
- Applicability: Resolution Hub service scope, not eBay policy.
- Exact support: canonical definition lists supported platforms, deliverables, privacy boundary, exclusions and no-guarantee terms.
- Confidence: HIGH.
- Status: SUPPORTED.
- Correction: CTA remains secondary to self-help and uses only `@helpgrailed`.
- Safety note: initial contact excludes passwords, authentication codes, recovery phrases, full card data and unnecessary identity documents.

### MCMT-15
- Exact claim: No matching confirmed owner record, screenshot, timeline, submitted document set or outcome exists for this slug.
- Location: Open verification items and experience boundary.
- Source level: LEVEL 4 repository-state claim.
- Source/record: research/ebay-mc011-message-triage.md; knowledge/confirmed-experience/; checked 2026-07-23.
- Applicability: this Resolution Hub guide only.
- Exact support: no matching record is present in the confirmed-experience knowledge directory.
- Confidence: HIGH for repository state.
- Status: EXPERIENCE_REQUIRED.
- Correction: marker preserved in verified copy; no first-person claim added.
- Safety note: prevents fabricated case evidence.

## Blocking markers preserved

- `MANUAL_REVIEW_REQUIRED: Confirm the target registered eBay market/site and seller context before publication.`
- `MANUAL_REVIEW_REQUIRED: Review a redacted authenticated MC011 notice before naming any exact document, affected function, deadline, submission channel, file limit, or special action.`
- `MANUAL_REVIEW_REQUIRED: Keep eBay Japan's document example and attachment limits market-limited; do not present them as global requirements.`
- `SOURCE_FRESHNESS_REQUIRED: Recheck all official eBay URLs and their applicability immediately before publication.`
- `MANUAL_REVIEW_REQUIRED: Preserve the diagnostic boundary with mc011-restriction and mc011-documents-requested in fact checking, internal linking, and final QA.`
- `MANUAL_REVIEW_REQUIRED: Do not add a universal review time, payout-release date, appeal eligibility, restoration probability, or trigger explanation without current market-specific evidence.`
- `EXPERIENCE_REQUIRED: No matching confirmed owner record is available; no first-hand case, screenshot, timeline, or outcome is included.`

## Rerun note

Fact-check rerun completed 2026-07-23. Live eBay UK/US/Japan pages were rechecked. The source set remains current enough for a market-scoped draft, but publication is blocked until the listed markers are resolved. The original draft was not edited; only the contracted fact-check output and verified copy were produced.
