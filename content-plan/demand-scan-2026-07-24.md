# Demand scan — 2026-07-24

Статус: приоритизация, не публикация. Числовые объёмы поиска не выдумывались.

## Источники сигнала

- Search Console, скриншот владельца: последние 7 дней — 144 показа, 3 клика, CTR 2,1%, средняя позиция 15,5.
- Search Console queries: `resolution hub` (9), `paypal 180 days` (3), `paypal 180 days hold` (2), `paypal 180 days limited account` (2), `21 day hold paypal` (2). Queries outside supported platforms were excluded from prioritization.
- Google Autocomplete, проверка 2026-07-24, английская локаль: использован только как discovery-сигнал формулировок, не как volume или ranking evidence.

## Топ-5 приоритетов

| Приоритет | Действие | Основной запрос | Сигнал | Решение |
|---:|---|---|---|---|
| 1 | Усилить существующий PayPal-гайд | `paypal 180 days hold`, `paypal 180 days withdrawal`, `paypal 180 days refund` | Уже есть показы по кластеру 180 days; позиция сайта в среднем около второй страницы | Не создавать дубль; расширить видимые формулировки и внутренние ссылки на текущей странице |
| 2 | Усилить существующий PayPal limitation-гайд | `paypal account limited for no reason`, `paypal account limited how to fix` | Autocomplete показывает устойчивый problem-intent; существующий guide уже покрывает permanent limitation | Не создавать второй limitation URL; перепозиционировать существующий guide под диагностику уведомления |
| 3 | Усилить существующий Grailed frozen-after-sale guide | `grailed frozen account`, `grailed account frozen meaning` | Autocomplete signal; опубликованный guide уже покрывает этот сценарий | Не создавать дубль; улучшить title, related links и видимый ответ |
| 4 | Создать eBay seller verification guide | `ebay seller verification in progress`, `ebay seller identity verification` | Autocomplete signal; problem-intent, но GSC evidence пока нет | Создавать только после проверки спроса в GSC/Trends и без пересечения с MC011 |
| 5 | Создать Etsy payment reserve guide | `etsy payment reserve how long`, `etsy payment reserve removed` | Autocomplete signal; сильная payout-problem формулировка | Создавать как reserve-status guide, не как общий Etsy suspension guide |

## Что не делать

- Не создавать новую страницу под каждый вариант `paypal 180 days`: это один кластер и один URL.
- Не выпускать MC011 triage сейчас: текущий duplicate score 47/100 и нет подтверждённого спроса.
- Не называть Autocomplete «годовой популярностью» и не публиковать fabricated volume.
- Не генерировать пять полных статей до проверки первых сигналов; сначала обновить существующие PayPal и Grailed-гайды.

## Рекомендуемая последовательность

1. Обновить текущие PayPal title/description и добавить естественные варианты `hold`, `withdrawal`, `refund` в видимый текст только там, где они подтверждены содержанием.
2. Усилить существующие PayPal и Grailed URL без создания дублей.
3. Через 14 дней сравнить показы, CTR, позиции и запросы.
4. Только при подтверждении дополнительного спроса запускать eBay verification и Etsy reserve.
