# Internal-link plan: paypal-held-funds-status-checklist

## Classification

- **Primary platform:** PayPal.
- **Primary problem type:** `Payments, payouts and reserves`.
- **Non-indexable secondary tags:** hold status; pending payment; reserve; unavailable balance; account limitation; dispute/reversal; withdrawal status; registered-account market; authenticated notice.
- **Primary intent:** diagnose the exact PayPal status and affected object before choosing a first account-specific check.
- **Language:** Russian (`ru`). Matching `en` and `uk` routes are future localization work, not assumptions about this Russian draft.

These tags are editorial metadata only. They must not create archives, filters, or additional URLs. The page is a proposed resource (`content-plan/pages.csv` status `proposed`) and has no public route yet.

## Page role and route status

This is a proposed PayPal status-triage resource for a reader who sees `held`, `on hold`, `pending`, `reserve`, `unavailable`, or a similar notice. It owns the first classification: exact wording, affected object, registered market, affected account function, and the authenticated PayPal surface that shows the next instruction.

It does not own a release date, a 180-day explainer, ordinary post-sale payment-hold workflow, withdrawal troubleshooting, limitation appeal, or document preparation. Those are separate jobs and must not be folded into this page merely to increase link count.

The planned slug is `paypal-held-funds-status-checklist`; `/ru/paypal/held-funds-status-checklist/` is **planned and non-clickable** until this article passes the V4 publication gates and is explicitly released. Do not add it to the sitemap, search index, platform cards, or public navigation during preview.

## Reader-question link map

| Reader's next question | Destination and relationship | Natural anchor variants | Locale/status | Decision |
|---|---|---|---|---|
| “Where can I see other PayPal problem guides?” | `/ru/paypal/` — platform parent | `другие разборы по PayPal`; `гайды по проблемам PayPal` | `ru`; generated platform route, live | One contextual link is optional when breadcrumb/platform navigation does not already answer discovery. |
| “Where are the guides about holds, reserves and payout states?” | `/ru/payout-holds/` — problem-type parent | `разборы удержаний и выплат`; `раздел об удержаниях PayPal` | `ru`; generated hub route, live | Use once after the article explains why labels must be classified before action. Omit if the rendered hub card already serves this question. |
| “My notice explicitly says up to 180 days or names a long hold. What should I check?” | `/ru/paypal/funds-held-180-days/` — published long-hold sibling | `разобрать уведомление с указанием до 180 дней`; `отдельная проверка длительного удержания` | `ru`; current-release published route | Conditional body link only after the reader's own notice contains the long-hold wording. Never use “180 дней” as a default answer to an ambiguous hold. |
| “Several account functions are limited, not just one payment. What does that state affect?” | `/ru/paypal/permanently-limited/` — account-restriction sibling | `что может затронуть постоянное ограничение`; `проверить последствия ограничения аккаунта` | `ru`; generated published route, currently flagged `REWRITE` in inventory | Conditional handoff after the scope table identifies account-level limitation. Align target wording before inserting. |
| “The next task is to prepare an appeal. Where is that separate workflow?” | `/ru/paypal/limitation-appeal/` — appeal sibling | `подготовить апелляцию по ограничению`; `если следующий шаг — апелляция` | `ru`; generated published route, currently `REWRITE` in inventory | One link after the article says restoration/appeal work is out of scope. Never imply that an appeal guarantees release. |
| “This is one payment after a sale, not a balance or account issue. What should I read?” | `paypal-payment-hold-after-sale` — planned sibling | `удержание платежа после продажи`; `отдельный разбор платежа после продажи` | `ru`; proposed, non-clickable | Editorial handoff only until the page has its own approved V4 route. No URL-shaped link or live-looking card. |
| “The balance is available, but the withdrawal itself fails. What is that branch?” | `paypal-withdrawal-unavailable` — planned sibling | `отдельная проблема с выводом PayPal`; `если недоступен именно вывод` | `ru`; proposed, non-clickable | Plain-text off-ramp only. Do not send the reader to the long-hold page for a withdrawal-only error. |
| “The balance became unavailable after a limitation, without a named long-hold period. What is the broader branch?” | `paypal-funds-frozen-after-limitation` — planned sibling | `баланс недоступен после ограничения`; `разобрать баланс после ограничения` | `ru`; not approved for this resource, non-clickable until status is confirmed | Mention only as a future handoff if the page is independently approved; do not force a same-intent link. |

Every recommendation answers a distinct next question. Cross-platform guides are intentionally excluded: eBay, Grailed, Etsy, and Vestiaire pages cannot explain a PayPal status.

## Contextual link recommendations

### 1. PayPal platform parent

- **Source context:** after the opening promise and the instruction to preserve the exact notice, where a reader may want to browse other PayPal situations.
- **Destination:** `/ru/paypal/`.
- **Relationship:** platform parent and discovery route.
- **Suggested anchors:** `другие разборы по PayPal`; `гайды по проблемам PayPal`.
- **Locale/status:** `ru`; generated platform route, live.
- **Use:** at most once. Omit when breadcrumb or platform header already provides the same route.

### 2. Payout-holds hub

- **Source context:** after the comparison table distinguishes one payment, reserve/balance, limitation, dispute, and withdrawal.
- **Destination:** `/ru/payout-holds/`.
- **Relationship:** problem-type parent for payments, payouts, and reserves.
- **Suggested anchors:** `разборы удержаний и выплат`; `раздел об удержаниях PayPal`.
- **Locale/status:** `ru`; generated hub route, live.
- **Use:** one contextual link only when the reader needs broader discovery. Do not duplicate a hub card and body link for the same question.

### 3. Explicit 180-day/long-hold handoff

- **Source context:** the “Когда нужен отдельный разбор” section, directly after the conditional bullet that says the notice itself must mention 180 days or a long hold.
- **Destination:** `/ru/paypal/funds-held-180-days/`.
- **Relationship:** same-platform sibling with a distinct time-specific payout intent.
- **Suggested anchors:** `разобрать уведомление с указанием до 180 дней`; `отдельная проверка длительного удержания`.
- **Locale/status:** `ru`; current-release published route.
- **Use:** conditional and once. Do not link from the article title, introduction, or generic occurrences of “удержание”. Preserve the boundary: this article classifies the status; the target handles the named long-hold question.

### 4. Account-limitation handoff

- **Source context:** the branch where the reader sees that sending, receiving, and withdrawing are restricted together, or the authenticated notice says `account limitation`.
- **Destination:** `/ru/paypal/permanently-limited/`.
- **Relationship:** sibling in `Account restrictions`; account-function consequences, not transaction status.
- **Suggested anchors:** `что может затронуть постоянное ограничение`; `проверить последствия ограничения аккаунта`.
- **Locale/status:** `ru`; generated published route; current inventory marks it `REWRITE`.
- **Use:** only when the account-level state is visible. Align the target content first; do not imply that either page can restore the account.

### 5. Appeal handoff

- **Source context:** after the article states that appeal/recovery is a separate job and the reader has identified an actual limitation rather than a payment-only status.
- **Destination:** `/ru/paypal/limitation-appeal/`.
- **Relationship:** sibling in `Appeals and account recovery`.
- **Suggested anchors:** `подготовить апелляцию по ограничению`; `если следующий шаг — апелляция`.
- **Locale/status:** `ru`; generated published route; current inventory marks it `REWRITE`.
- **Use:** once, after the diagnostic answer. Never use “вернуть аккаунт” or “освободить деньги” as anchor language.

### 6. Planned branches — prose only

The following are not live destinations and must not receive hrefs, Markdown links, related cards, or sitemap entries from this draft:

- `paypal-payment-hold-after-sale` when the reader has one post-sale transaction;
- `paypal-withdrawal-unavailable` when the balance is available but a withdrawal route fails;
- `paypal-funds-frozen-after-limitation` when an account-linked balance is unavailable without a named long-hold notice.

Use a sentence such as “это отдельная тема: удержание платежа после продажи” only if it helps the reader choose the next question. Do not turn planned slugs into visible URLs.

## Parent pages

| Parent | Path | Why it is a parent | Status |
|---|---|---|---|
| PayPal platform | `/ru/paypal/` | Main platform discovery and breadcrumb parent for PayPal issue guides. | Generated route, live |
| Payout holds | `/ru/payout-holds/` | Problem-type discovery for holds, reserves, and payout availability. | Generated route, live |

The platform page remains the breadcrumb parent. The payout-holds hub is a discovery surface, not a second breadcrumb level and not a replacement for the status-specific resource.

## Child pages

No validated child page exists beneath this proposed slug. Do not create children for individual labels (`held`, `pending`, `reserve`) from this article: that would split one diagnostic intent into thin near-duplicates. A future child requires independent demand, evidence, and a separate V4 intent decision.

## Sibling pages and boundaries

- **Published, distinct sibling:** `funds-held-180-days` owns a notice that explicitly raises the long-hold/180-day question. Link only for that condition.
- **Generated account sibling:** `permanently-limited` owns broad account-function consequences. It is currently flagged `REWRITE`; align before using it as a prominent related card.
- **Generated appeal sibling:** `limitation-appeal` owns preparation for an appeal and is currently flagged `REWRITE`; it is not a status-classification substitute.
- **Planned sibling:** `paypal-payment-hold-after-sale` owns a post-sale transaction hold; keep non-clickable until published.
- **Planned sibling:** `paypal-withdrawal-unavailable` owns a withdrawal-only failure; keep non-clickable until published.
- **Planned sibling:** `paypal-funds-frozen-after-limitation` owns a limitation-linked unavailable balance without a named 180-day notice; do not expose until independently approved.
- **Rejected:** `appeal-denied`, verification-document pages, and all non-PayPal platform pages unless a later sentence answers a genuinely separate next question. They are not useful links for this diagnostic job.

## Inbound link opportunities

Because this page is `proposed` and excluded from the current release, **no current public page should link to it yet**. After an independent V4 run returns `PASS` and explicit release authorization exists, add only curated edges:

1. one situation-led entry from `/ru/paypal/` (for a reader who sees an unfamiliar funds status);
2. one entry from `/ru/payout-holds/` (for status classification, not generic “payment help”);
3. one conditional link from `/ru/paypal/funds-held-180-days/` for readers whose notice is ambiguous before the 180-day branch is selected;
4. optionally, one conditional link from `/ru/paypal/permanently-limited/` where the source first asks whether the issue is a payment or whole-account state.

Do not add inbound links from unrelated platform pages, legal/tax pages, or generic “money problems” pages. Do not use a shared related-card fallback as proof of semantic relevance.

## Anchor diversity

- Use each destination no more than once in the body of a locale edition.
- Prefer question-led and action-led Russian phrases over `читать далее`, `здесь`, or repeated exact-match titles.
- Keep “PayPal” in an anchor only when the surrounding text could be ambiguous.
- Use `до 180 дней` only in the conditional long-hold branch; never repeat it as a generic keyword anchor.
- Do not promise release, approval, restoration, a response time, or a successful appeal.
- Localize anchors independently for future EN/UK versions; do not mechanically translate Russian word order.
- Breadcrumb, platform navigation, related cards, and body links must not all repeat the same target without a distinct reader question.

## Orphan risk

**Current preview:** intentional non-routed state; no live inbound edge is allowed. This is not a technical orphan because the page is not indexable or published.

**After authorized release:** medium semantic orphan risk. The PayPal platform and payout-holds hub can provide two relevant inbound edges, and the long-hold page can provide a conditional diagnostic handoff. A generic related-card fallback alone is insufficient because it may blur the status-triage and 180-day intents.

**Mitigation after release:** add one curated platform entry, one payout-holds entry, and at most one conditional sibling link per distinct next question. Verify locale path, canonical, sitemap eligibility, and that the target is not still marked `proposed` or `REWRITE` before adding each edge.

## Validation notes

- Inputs reviewed: `drafts/paypal-held-funds-status-checklist-rhythm.md`, `strategy/paypal-held-funds-status-checklist.md`, `content-plan/pages.csv`, `content-audit/article-inventory.csv`, `src/data/release.ts`, `src/data/issues.ts`, `src/app/[locale]/[[...segments]]/page.tsx`, `src/components/pages.tsx`, and existing prepared internal-link plans.
- The resource row is `proposed` and therefore has no clickable route. No draft URL, sitemap entry, route, or navigation entry was added.
- `/ru/paypal/` and `/ru/payout-holds/` are live generated discovery routes. `/ru/paypal/funds-held-180-days/` is in the current release. The account-limitation and appeal routes exist in the generated corpus but are marked `REWRITE` in the inventory; wording alignment is required before prominent contextual use.
- Planned branches remain plain-text editorial handoffs. They are not represented as live links.
- Same-intent generic PayPal hold links and all cross-platform links were rejected.
- Existing manual-review, source-freshness, legal-review, and experience markers remain untouched. This file does not change content, routes, taxonomy, indexability, publication status, or CTA wording.
