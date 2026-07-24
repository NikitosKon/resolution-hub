# Duplicate review: ebay-mc011-message-triage

## Comparison corpus

The comparison was rebuilt on 2026-07-24 from the current local corpus. The following were included or explicitly excluded:

- **Included issue inventory:** all 167 records in `src/data/issues.ts` (published and unpublished issue records, with EN/RU/UK variants). The records for `mc011-restriction`, `mc011-documents-requested`, `account-suspended`, `suspended-after-first-listing`, `payout-on-hold`, `ebay-seller-verification-failed`, and related eBay evidence/restriction entries were checked for intent and repeated value.
- **Included reader-facing drafts/prepared packages:** every independent article under `drafts/` and `prepared/`, including `drafts/mc011-documents-requested-rhythm.md`, `prepared/mc011-documents-requested.md`, `drafts/ebay-seller-verification-failed-rhythm.md`, `drafts/ebay-seller-verification-failed.md`, `drafts/frozen-after-sale-rhythm.md`, `drafts/funds-held-180-days-rhythm.md`, and the other platform guides. Earlier stages of `ebay-mc011-message-triage` were treated as derivatives of the target, not separate competitors.
- **Included V4 source:** `src/data/v4/mc011-documents-requested.ts` and the other V4 articles were checked for runtime headings, tables, CTA language, and route ownership. The target has no V4 runtime entry yet.
- **Included planning and intent evidence:** `content-plan/pages.csv`, `strategy/ebay-mc011-message-triage.md`, and `content-audit/ebay-mc011-intent-resolution.md` were used to test primary intent and the approved eBay repositioning.
- **Excluded from wording comparison:** research, SERP, question, fact-check, entity, link, conversion, QA, media, and workflow files unless they contained a reader-facing excerpt. They remain evidence for scope and are not competitors.
- **Excluded as independent competitors:** `drafts/ebay-mc011-message-triage.md`, `-verified.md`, `-experience.md`, `-narrative.md`, `-psychology.md`, `-edited.md`, and `prepared/ebay-mc011-message-triage.md`; these are the same slug's pipeline derivatives.

No external pages or untracked historical production copies were available locally. The corpus is complete for the repository and current prepared packages, but not a substitute for a crawl of every external or previously removed URL.

## Method and confidence

The article was compared in Russian against each Russian competitor where available; English and Ukrainian records were used to identify structural templates and route ownership. A normalized-token pass was used only to surface candidates. The final assessment compares primary intent, reader entry state, decision stage, information gain, H2 purpose, tables, FAQs, introductions, handoffs, and CTA language. Necessary shared eBay safety terms (`MC011`, `eBay Messages`, authenticated notice, market, genuine records) were separated from replaceable wording and repeated reader value.

**Confidence: HIGH for the local eBay collision; MEDIUM-HIGH for the full corpus.** The two MC011 intents and current route ownership are explicit in the strategy and source records. Confidence is not absolute because generated unpublished issue records are broader than the actual indexable corpus and no live external crawl was performed.

## Similarity Score (0-100)

**47/100 — material overlap risk; above the pilot maximum of 30/100.**

This is an overlap-risk score, not a content-quality score. The target has a defensible diagnostic label, but its current rhythm draft still performs much of the same first-check and affected-function explanation already owned by `mc011-restriction`, while also repeating the document handoff language owned by `mc011-documents-requested`. The score therefore triggers a stop/rewrite before publication.

## Closest matches

| Match | Evidence in corpus | Overlap assessment |
|---|---|---|
| `mc011-restriction` in `src/data/issues.ts` | Same code, same authenticated eBay notice, same Messages check, affected-function classification, market qualification, first checks, and conditional handoff to the documents guide. | **High intent and structural overlap.** Both currently answer what MC011 means and what to check first. The target's diagnostic framing is narrower in the strategy, but the draft expands back into the sibling's broad explanation. |
| `src/data/v4/mc011-documents-requested.ts` / `prepared/mc011-documents-requested.md` | Same code and notice, exact-request interpretation, document/evidence boundary, genuine-record warnings, and submission handoff. | **Medium-to-high boundary overlap.** The target correctly stops short of a package in several places, but its document tables, “do not copy a list” section, evidence states, and five document-related FAQs approach the preparation page's value. |
| `drafts/ebay-seller-verification-failed-rhythm.md` and `prepared/ebay-seller-verification-failed.md` | Seller restriction/verification notice, account-context capture, document and profile consistency checks, cautious next-step language. | **Medium lexical/structural overlap; lower intent collision.** This is a post-failure verification state, not a general MC011 message triage page. Keep the target from becoming a generic seller-verification checklist. |
| `account-suspended` and `suspended-after-first-listing` issue records | Account notice authentication, affected functions, first checks, and no-universal-cause language. | **Low-to-medium overlap.** These are broader suspension and new-listing contexts; they become a risk only if the target adds generic suspension causes or first-listing theories. |
| eBay evidence/restriction records (`supplier-invoices-requested`, `proof-of-address-requested`, `tracking-requested`, `business-information-requested`) | Shared evidence categories and “match the record to the notice” language. | **Medium future-collision risk.** The target may classify which evidence branch was named, but must not explain a full category-specific preparation process. |
| Other platform V4 and prepared guides | Shared privacy, no-credential, no-guarantee, and Telegram governance language. | **Low intent risk.** This is required product language and is not duplication of eBay value. |

## High Risk Areas

1. **General MC011 meaning and first checks (target H2 `MC011 — это обозначение сообщения, а не готовый диагноз`; `Сначала найдите ту же информацию в аккаунте eBay`; `Что именно ограничено в аккаунте?`).** These sections reproduce the sibling's ownership of what the code establishes, which functions can be affected, and how to authenticate the notice. Keep only a short gate: “find the authenticated message and record its exact wording.” Move broad meaning and affected-function explanation to `mc011-restriction`.
2. **The request-classification matrix (`К какому типу относится следующий шаг?`).** A compact triage row is unique value, but the current matrix explains documents, payout, appeal, and restriction branches at a depth that starts answering neighbouring guides. Reduce each branch to one classification sentence plus a link/handoff; do not provide preparation or remediation steps.
3. **Market/source table (`Какой аккаунт и рынок указаны в источнике?`).** Market qualification is necessary, but the Japan/US/UK comparison repeats the broad restriction article's explanatory context and can make this page a second MC011 explainer. Keep market as an input field and one caution; remove the extended comparative table from the target or turn it into a short “source applicability” note.
4. **Document sections (`Не копируйте чужой список документов`; `Перед ответом проверьте только то, что подтверждено сообщением`; `Если записи не хватает или она не совпадает`).** These are valuable preparation controls, but together they reproduce the documents-requested guide's request-to-record matching, genuine-record boundary, and unresolved-gap workflow. Keep one stop condition and an explicit handoff; move the worksheet and submission checks to the documents page.
5. **Five document/evidence FAQs.** `Подходит ли японский список документов...` and `Что делать, если документ потерян?` are preparation questions. They should not be answered here; replace with a single conditional FAQ directing readers with an actual evidence request to the dedicated guide.
6. **Repeated governed CTA/safety language.** Password, authentication-code, redaction, Telegram, and no-guarantee wording is required and not itself a collision. Keep the canonical safety language, but make the surrounding sentence about classifying an unresolved notice rather than “preparing an appeal” or recovering an account.

## Repeated FAQs

The target currently has five MC011 FAQs. The first two (`Можно ли понять причину только по коду MC011?`, `Значит ли MC011, что выплаты уже удерживаются?`) overlap the broad restriction/payout boundaries but can remain only as short diagnostic answers. The following are preparation duplicates and should be removed or moved:

- `Подходит ли японский список документов для Украины или Великобритании?` — repeats the documents guide's market-specific evidence boundary.
- `Можно ли открыть другой аккаунт, пока этот ограничен?` — generic restriction/recovery question; not required for message triage and risks unsafe workaround discussion.
- `Что делать, если документ потерян?` — evidence-preparation remediation; belongs to the documents-requested page only after an authenticated request.

Recommended target FAQ set after rewrite: at most three questions, all diagnostic: whether the code alone explains the cause, whether an unmentioned payout is established, and when to hand off to the documents guide.

## Repeated intros and CTA

The target opening and `mc011-restriction` both begin with the same reader state: an MC011 code appears, the reader should verify eBay Messages, and the code alone does not establish cause or scope. That shared setup is necessary once, but the target currently continues into the sibling's explanation of affected functions and first checks. The target intro should instead state its narrower ownership in one paragraph: “this page helps classify the exact authenticated message; it does not explain the general restriction or prepare documents.”

The CTA uses the common Resolution Hub governance skeleton (redacted facts, no credentials, individual review, no guaranteed outcome). This is approved cross-platform language and should not be cosmetically rewritten to lower a similarity signal. Only the page-specific value proposition should change: help organize the exact notice fields and unresolved questions, not promise appeal or restoration help.

## Similar H2

High-risk semantic matches:

- target `MC011 — это обозначение сообщения, а не готовый диагноз` ↔ sibling explanation of what the MC011 code can and cannot establish;
- target `Сначала найдите ту же информацию в аккаунте eBay` ↔ sibling’s authenticated-message and Messages first check;
- target `Что именно ограничено в аккаунте?` ↔ sibling’s affected-functions explanation;
- target `Не копируйте чужой список документов` ↔ documents guide’s exact-request and genuine-record preparation boundary;
- target `Перед ответом проверьте только то, что подтверждено сообщением` ↔ documents guide’s pre-submission integrity check.

Potentially unique H2s to preserve after narrowing:

- `Превратите сообщение в карточку запроса` — retain only as a small diagnostic capture list, not a document matrix;
- `К какому типу относится следующий шаг?` — retain as a four/five-row route classifier with no remediation details;
- `Выберите безопасное состояние, а не обещанный результат` — retain as a short uncertainty/status close.

## Intent collision

**Current recommendation: D. REPOSITION_ONE_PAGE (target stays separate only after rewrite).**

The target's intended primary intent is diagnostic message triage. `mc011-restriction` owns broad meaning, affected functions, and first checks. `mc011-documents-requested` owns exact evidence-request preparation and request-to-record matching. The strategy says these can be separate, but the current draft has regressed across both boundaries. KEEP_SEPARATE is not currently safe as-is.

Do not merge URLs or create redirects in this review. Reposition the target in place by removing broad MC011 explanation and evidence-preparation detail. After the rewrite, rerun duplicate detection against the same corpus. Publication must stop while the score remains above 30 or the draft still answers “what documents should I send?” without requiring an authenticated request.

## Recommended Rewrite Sections

1. **Replace the introduction** with a diagnostic-only promise and explicit boundaries: authenticate the notice, capture its fields, classify the next task, then stop or hand off.
2. **Reduce `MC011 — это обозначение...`** to 2–3 sentences and link to `mc011-restriction` for broad meaning and affected-function context.
3. **Keep a compact message card** with only: exact wording, authenticated surface, registered market, affected function as shown, named action, and visible deadline/channel. Remove document-status and money-status rows unless the notice explicitly names them.
4. **Compress the route matrix** to classification plus destination: restriction context → `mc011-restriction`; actual document request → `mc011-documents-requested`; named payout state → payout guide; appeal wording → official route check. No package, file, format, substitute, deadline, or appeal advice.
5. **Delete or move** the extended market comparison, “do not copy a document list” explanation, evidence-mismatch workflow, and document-loss FAQ. The target may retain one safety stop: use genuine records only and follow the authenticated route.
6. **Limit FAQs to diagnostic questions** and remove the replacement-account question entirely unless a separate safety-reviewed section is required.
7. **Keep the common CTA safeguards** but tie the offer to reviewing redacted message fields and unresolved classification—not to recovery, document preparation, or a platform outcome.
8. **Rerun this detector** after the rhythm draft is rebuilt. A score of 30 or lower is required before Final QA; a score of 21–30 still requires manual comparison and acceptance.

## Rerun note

2026-07-24: Duplicate review rebuilt from the current rhythm draft, issue inventory, V4 source, prepared corpus, content plan, strategy, and intent-resolution audit. No article, URL, route, or publication status was changed. The previous target state was `pending`; this output records a first scored comparison and the required repositioning work.
