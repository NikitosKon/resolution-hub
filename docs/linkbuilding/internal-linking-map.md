# Resolution Hub — системная внутренняя перелинковка

Статус: подготовительный пакет, не публикация. Дата: 2026-07-23.

## Цель

Связать страницы по реальной задаче читателя: от симптома к проверке, затем к безопасному следующему шагу. Каждая ссылка должна отвечать на следующий вопрос, а не добавляться ради количества.

## Текущий опубликованный корпус

| Платформа | Страница | URL | Роль в кластере |
|---|---|---|---|
| PayPal | Funds held for 180 days | `/en/paypal/funds-held-180-days/` (также `/ru/` и `/uk/`) | payout/hold diagnostic |
| eBay | MC011 documents requested | `/en/ebay/mc011-documents-requested/` (также `/ru/` и `/uk/`) | document-request preparation |
| Grailed | Frozen after sale | `/en/grailed/frozen-after-sale/` (также `/ru/` и `/uk/`) | account/payout diagnostic |

Planned rows in `content-plan/pages.csv` are not treated as live URLs until independently published and validated.

## Link rules

1. Link only when the destination resolves a distinct next question.
2. Use descriptive, varied anchors; do not repeat exact-match anchors in every paragraph.
3. Keep the same locale in a link whenever that locale exists; never silently send a Russian reader to English.
4. Do not link to drafts, previews, admin routes, search results or unverified URLs.
5. Place the first useful link after the relevant explanation, not in the opening sentence.
6. Keep primary CTA separate from editorial links; a related guide must not look like an endorsement or a guaranteed solution.
7. Recheck links after every slug or publication change.

## Recommended links for the live guides

| Source page | Contextual destination | Suggested anchor variants | Placement | Why it helps |
|---|---|---|---|---|
| PayPal funds held 180 days | eBay MC011 documents requested | `если проблема связана с eBay`, `разбор запроса документов eBay` | only in a short cross-platform comparison or “if this is another platform” note | Provides a clearly labelled alternative without conflating PayPal policy with eBay policy |
| PayPal funds held 180 days | Grailed frozen after sale | `если заморозка произошла после продажи на Grailed`, `разбор заморозки Grailed после сделки` | “Another marketplace” callout near the end | Captures adjacent user intent while preserving platform scope |
| eBay MC011 documents requested | PayPal funds held 180 days | `если удержание относится к PayPal`, `что проверить при длительном удержании PayPal` | only where payout holds are contrasted with document requests | Prevents readers from applying MC011 advice to PayPal |
| eBay MC011 documents requested | Grailed frozen after sale | `если аккаунт заморожен после продажи на Grailed`, `похожая ситуация на Grailed` | related-guide block after eBay-specific next steps | Offers a distinct marketplace path |
| Grailed frozen after sale | PayPal funds held 180 days | `если средства удерживает PayPal`, `отдельный разбор удержания PayPal` | payout clarification section | Separates marketplace freeze from payment-account hold |
| Grailed frozen after sale | eBay MC011 documents requested | `если платформа запросила документы eBay`, `разбор MC011 и документов` | “not the same notice” clarification | Helps users identify the correct guide |

These cross-platform links should remain secondary. The main guide must answer the current platform problem first.

## Platform and cluster links after future publication

When a planned page passes Final QA and is actually published, add it to the same-locale platform hub and to exactly 2–4 contextually relevant sibling guides. Use this order:

1. symptom/notice page → verification or payout page;
2. verification page → document-preparation or appeal page;
3. payout page → account-status page;
4. recovery/appeal page → official source and evidence checklist.

Do not pre-link to rows marked `proposed`.

## Orphan prevention checklist

- Every published issue is linked from its platform hub.
- Every published issue has at least one sibling link and one platform-level return path.
- Every new page is added to the locale-equivalent link graph before release.
- Link checks run for `en`, `ru`, and `uk` separately.
- Broken, preview, draft, admin and localhost links are blocked in pre-launch audit.
