# Internal-link plan: ebay-mc011-message-triage

## Classification

- **Primary platform:** eBay.
- **Primary problem type:** `Account restrictions`.
- **Non-indexable secondary tags:** MC011; authenticated notice; seller restriction; market scope; message triage; affected function; evidence-request branch.
- The tags are editorial metadata only. They must not create archives, filters, or additional URLs.

The page's single intent is to help a reader classify an authenticated MC011/restriction message before taking action. It does not own a universal MC011 explanation, document preparation, payout troubleshooting, appeal strategy, or account recovery.

## Page role

This is a proposed Russian diagnostic resource. It is a notice-first triage page: confirm the message in eBay Messages, record the registered market and affected function, identify the task named by eBay, and hand off to a narrower guide only when that branch is confirmed.

The content-plan row is `resource-ebay-mc011-triage`; status is `proposed`; the slug is not in `currentRelease`. Therefore `/ru/ebay/mc011-message-triage/` and equivalent English/Ukrainian paths are planned and non-clickable. No route, sitemap entry, or related-ID was added.

## Reader-question link map

| Reader's next question | Destination | Relationship | Suggested natural anchors | Locale/status | Decision |
| --- | --- | --- | --- | --- | --- |
| “Where can I find the eBay guide list?” | `/ru/ebay/` | Live platform parent | `другие разборы по eBay`; `гайды по проблемам eBay` | RU; live | One discovery link at most; omit if the breadcrumb already answers it. |
| “Is this mainly a verification question?” | `/ru/verification/` | Live problem-type parent | `разборы проверок продавца`; `раздел о проверке данных` | RU; live | Link after the reader identifies identity, business, or seller verification as the named task. |
| “The authenticated notice explicitly requests documents. What do I prepare?” | `/ru/ebay/mc011-documents-requested/` | Live, narrower sibling | `подготовить документы по запросу MC011`; `сопоставить документы с запросом eBay` | RU; current release, live | Conditional link only after an evidence request is confirmed. Do not repeat the target's document matrix. |
| “This is a general suspension, not an MC011 task. Where do I start?” | `/ru/account-suspensions/` | Live broad hub/off-ramp | `общие проверки блокировки аккаунта`; `раздел о блокировках` | RU; live hub | Use once as an exit from this intent, not as a generic related card. |
| “The message names a payout problem instead.” | `/ru/payout-holds/` | Live broad payout hub/off-ramp | `отдельно проверить удержание выплаты`; `раздел об удержаниях выплат` | RU; live hub | Use only when the authenticated notice explicitly names a payout state. MC011 alone is not a payout diagnosis. |
| “What does the separate MC011 restriction explainer say?” | `mc011-restriction` | Diagnostic sibling | `что означает ограничение MC011`; `первые проверки по MC011` | RU; not in current release, planned | Keep as a future editorial handoff; no `href` or live-looking card until released. |

## Contextual link recommendations

### 1. eBay platform parent — live

- **Source context:** after the opening notice-verification paragraph, when the reader has recorded the exact message and wants other eBay problem guides.
- **Destination:** `/ru/ebay/`.
- **Relationship:** platform parent and discovery route.
- **Anchor variants:** `другие разборы по eBay`; `гайды по проблемам eBay`.
- **Placement:** one body link, unless the platform breadcrumb is already the only needed discovery path.
- **Boundary:** do not imply that the platform index can diagnose an account or replace the authenticated notice.

### 2. Verification hub — live

- **Source context:** the classification section, only after the message explicitly names identity, business, seller, or payment verification.
- **Destination:** `/ru/verification/`.
- **Relationship:** problem-type parent.
- **Anchor variants:** `разобрать проверку продавца`; `раздел о проверке данных`.
- **Placement:** one contextual link at the branch conclusion.
- **Boundary:** the hub is discovery only; it is not a universal list of acceptable documents.

### 3. MC011 documents preparation — live conditional sibling

- **Source context:** the branch stating that an authenticated message explicitly requests documents or evidence.
- **Destination:** `/ru/ebay/mc011-documents-requested/`.
- **Relationship:** narrower child/sibling handoff from diagnosis to preparation.
- **Anchor variants:** `подготовить документы по запросу MC011`; `сопоставить документы с запросом eBay`.
- **Placement:** once, immediately after the condition is established.
- **Boundary:** do not link on the basis of the code alone. Do not reproduce file lists, upload rules, deadlines, substitutes, review timing, or outcome language.

### 4. Account-suspension off-ramp — live hub

- **Source context:** the conclusion of the “different restriction” branch, when the notice is not an MC011 task.
- **Destination:** `/ru/account-suspensions/`.
- **Relationship:** broad diagnostic off-ramp.
- **Anchor variants:** `начать с общих проверок блокировки`; `раздел о блокировках аккаунтов`.
- **Placement:** at most once and only for a non-MC011/general suspension state.

### 5. Payout off-ramp — live hub

- **Source context:** the limitations section, only when the signed-in notice explicitly names a payout or held-funds state.
- **Destination:** `/ru/payout-holds/`.
- **Relationship:** separate payments/payouts problem-type hub.
- **Anchor variants:** `проверить отдельное удержание выплаты`; `разборы удержаний выплат`.
- **Placement:** conditional; never claim that MC011 itself proves a payout hold or a release date.

### Planned handoff: MC011 restriction explainer — not live

The strategy keeps the broad `mc011-restriction` explainer separate from this message-triage page. Keep its title as plain text until the route is in an authorized release. Do not add `/ru/ebay/mc011-restriction/` as an `href`, sitemap URL, search result, or related card while it remains outside `currentRelease`.

## Parent pages

| Parent | Path | Why it is a parent | Status |
| --- | --- | --- | --- |
| eBay platform | `/ru/ebay/` | Platform-level discovery and breadcrumb parent. | Live |
| Account suspensions hub | `/ru/account-suspensions/` | Broad restrictions/suspensions discovery for readers whose notice is not this specific triage state. | Live hub |
| Verification hub | `/ru/verification/` | Discovery for identity, seller, address, and business verification branches. | Live hub |

The eBay platform page is the primary parent. The problem hubs are contextual off-ramps, not additional breadcrumb levels.

## Child pages

No validated live child exists under this proposed slug. Do not create market-specific, seller-type-specific, document-type-specific, or payout-specific children from this draft: the current evidence does not justify separate URLs and they would fragment intent.

## Sibling pages

- **Live narrower sibling:** `mc011-documents-requested` — evidence preparation after a confirmed authenticated request; conditional handoff only.
- **Planned diagnostic sibling:** `mc011-restriction` — broad meaning and first checks; keep non-clickable until released and preserve the diagnostic boundary.
- **Live broad off-ramp:** `/ru/account-suspensions/` — hub for a general suspension state, not a second MC011 article.
- **Live payout off-ramp:** `/ru/payout-holds/` — hub for an explicitly named payout state.
- **Rejected:** `suspended-after-first-listing` and `ebay-seller-verification-failed` are different questions and are not validated live destinations for this draft.
- **Rejected:** PayPal, Grailed, Etsy, and Vestiaire pages do not answer an eBay MC011 classification question.

## Inbound link opportunities

Because this slug is proposed and excluded from `currentRelease`, no current page should link to it yet. After an independent V4 run returns `PASS` and an authorized release makes it live, add only these curated edges:

1. **`/ru/ebay/` platform page** — one situation-led listing such as “Разобрать сообщение eBay MC011 перед отправкой документов”.
2. **`/ru/verification/` hub** — one entry under seller/account verification for readers who need to classify the named task before preparing evidence.
3. **Published `/ru/ebay/mc011-documents-requested/`** — a reverse, conditional handoff only where the reader has a document request but first needs to verify the message, market, and affected function.
4. **`/ru/account-suspensions/` hub** — one off-ramp for a reader whose notice is a general suspension and not an MC011 triage case.

Do not use the shared cross-platform related fallback as evidence of topical relevance, and do not add inbound links from unrelated payout, legal, tax, or other-platform pages.

## Anchor diversity

- Use action- or question-led Russian anchors rather than `читать далее` or repeated exact-match titles.
- Use each destination once in the article body; a navigation label and a body link should not duplicate the same question.
- Keep `eBay` in the anchor only when the surrounding sentence does not already establish the platform.
- Reserve “документы MC011” for the confirmed evidence-request branch; otherwise use “сообщение”, “уведомление”, “следующее действие”, or “проверка”.
- Never promise approval, restored selling access, payout release, review timing, or a successful appeal in link text.

## Orphan risk

**Current preview:** intentionally non-routed and therefore not an indexability orphan. No live inbound edge is appropriate while the row remains `proposed`.

**After authorized release:** medium semantic orphan risk unless the eBay platform page and verification hub each receive one curated, situation-led entry. The live MC011 preparation page can provide a conditional reverse edge, but generic related cards alone are insufficient. Keep the page out of navigation and sitemap until the publication gate is passed.

## Validation notes

- Inputs reviewed: `drafts/ebay-mc011-message-triage-rhythm.md`, `strategy/ebay-mc011-message-triage.md`, `content-plan/pages.csv`, `content-plan/runs/ebay-mc011-message-triage.json`, `src/data/release.ts`, `src/data/index.ts`, `src/data/issues.ts`, `src/components/pages.tsx`, existing eBay link plans, and the generated hub/route definitions.
- Current release contains only `paypal-funds-held-180-days`, `ebay-mc011-documents-requested`, and `grailed-frozen-after-sale`; the new triage slug is not eligible and has no public route.
- RU platform and hub paths listed as live are generated discovery routes; the only live eBay issue destination used here is `/ru/ebay/mc011-documents-requested/`.
- Planned `mc011-restriction` and other proposed issue routes are explicitly non-clickable. No URL, route, related ID, taxonomy node, sitemap entry, draft text, or publication status was edited.
- All recommendations retain the strategy's market, authenticated-notice, source-freshness, experience, and duplicate-boundary requirements.
