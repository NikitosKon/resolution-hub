---
slug: paypal-held-funds-status-checklist
language: ru
primary_intent: "Диагностировать статус удержания средств PayPal и определить первую проверку без предположения о причине или сроке"
source_research_path: research/paypal-held-funds-status-checklist.md
source_strategy_path: strategy/paypal-held-funds-status-checklist.md
source_draft_path: drafts/paypal-held-funds-status-checklist.md
status: experience_review_manual_input_required
source_verified_path: drafts/paypal-held-funds-status-checklist-verified.md
fact_check_status: MANUAL_REVIEW_REQUIRED
market_scope: "Требует подтверждения зарегистрированного рынка аккаунта"
checked: 2026-07-23
---

# PayPal удерживает средства: как разобрать статус и понять, что проверить первым

Если PayPal показывает `held`, `on hold`, `pending`, `reserve` или `unavailable`, одного слова недостаточно, чтобы установить причину, срок или итог. Эти обозначения могут относиться к отдельному платежу, резерву, ограничению аккаунта, проверке операции, спору или выводу. Официальные соглашения и справка PayPal рассматривают такие состояния отдельно, а точные действия зависят от рынка, типа аккаунта и текста уведомления. [Claims: OF-01–OF-04, OF-08, OF-13; Sources: S1, S2, S4, S5]

Начните не с расчёта даты и не со списка документов, а с фиксации того, что действительно видно в авторизованном аккаунте. Эта статья помогает классифицировать статус и выбрать первую проверку. Она не определяет внутреннюю причину удержания, не обещает освобождение денег и не заменяет инструкцию PayPal для конкретного аккаунта.

## Сначала сохраните точную формулировку

### Что записать до любых изменений

Скопируйте без пересказа:

1. точную фразу в баннере, карточке платежа, балансе или письме;
2. название статуса, если оно отображается отдельно;
3. дату уведомления и названное событие или операцию;
4. валюту и сумму, если они показаны;
5. ссылку или кнопку, которую PayPal предлагает открыть;
6. что именно недоступно: отправка, получение, вывод или только один платёж.

Официальные материалы PayPal направляют за account-specific объяснением к уведомлению, панели аккаунта, балансу, Resolution Center/Resolution Centre или к другому маршруту, который указан в аккаунте. Публичная справка не видит частное уведомление и не может заменить его текст. [Claims: OF-02–OF-03, OF-09, OF-14; Sources: S1–S6]

### Не заменяйте английский UI-термин догадкой

Если в аккаунте написано `On hold`, оставьте этот термин в заметке и рядом укажите перевод. В разных продуктах и странах PayPal может показывать разные подписи; американская справка, например, отдельно перечисляет `Pending`, `On hold`, `Held`, `Temporary hold`, `Refunded`, `Returned`, `Denied`, `Unclaimed` и `Completed`. Этот список описывает конкретный справочный контекст США, а не универсальный словарь для всех аккаунтов. [Claim: OF-04; Source: S4]

## Определите, какой объект затронут

Один и тот же поисковый запрос «PayPal удерживает деньги» скрывает разные задачи. Сначала сопоставьте экран аккаунта с ближайшей веткой.

| Что видно в аккаунте | Что это может обозначать | Чего это не доказывает | Первая проверка |
| --- | --- | --- | --- |
| Один платёж имеет `held`, `on hold` или `pending` | Состояние конкретной транзакции или её проверки | Причину, дату выпуска или итог спора | Открыть сам платёж и его уведомление |
| Часть баланса отмечена как reserve или unavailable | Резерв или другой балансный механизм | Что весь аккаунт ограничен или действует правило 180 дней | Открыть детали баланса и условия, показанные аккаунту |
| Есть баннер account limitation или задача в Resolution Center | Ограничение уровня аккаунта | Что причиной был именно этот платёж | Сверить задачу и затронутые функции |
| Видны dispute, chargeback, refund или negative balance | Отдельное состояние, влияющее на расчёт баланса | Что после спора деньги автоматически станут доступными | Открыть соответствующее дело/операцию |
| Не работает только вывод | Отдельный статус перевода или доступности вывода | Что это удержание конкретного платежа | Проверить карточку withdrawal и сообщение об ошибке |
| Уведомление называет маркетплейс или приложение | Возможна инструкция от marketplace/third party | Что PayPal сам установил причину | Проверить уведомление и условия названного сервиса |

PayPal определяет резерв как сумму, которая удерживается недоступной для покрытия потенциального риска; в американском материале для Business-аккаунтов могут показываться детали резерва и условия, доступные именно этому аккаунту. Это не позволяет по одному слову `reserve` вычислить дату выпуска или перенести пример США на другой рынок. [Claims: OF-08–OF-10; Source: S1, S5]

Если в уведомлении сказано, что удержание инициировал marketplace или другое авторизованное приложение, такой hold нельзя автоматически называть решением PayPal по риску. В американском и британском соглашениях указано, что в некоторых функциях удержание может быть связано с инструкцией marketplace или третьей стороны; вопрос о её распоряжении нужно проверять у названного сервиса. [Claims: OF-15–OF-16; Sources: S1, S2]

## Проверьте масштаб проблемы по функциям аккаунта

После классификации объекта сравните три функции. Отметьте только то, что видно после входа:

| Функция | Что записать | Как использовать запись |
| --- | --- | --- |
| Отправка денег | Доступна, ограничена или сообщение отсутствует | Помогает понять, есть ли ограничение шире одной операции |
| Получение денег | Доступно ли получение нового платежа | Не трактуйте отсутствие нового платежа как доказательство причины |
| Вывод | Доступен, ожидает, отклонён или не отображается | Если проблема только здесь, не называйте её автоматически hold баланса |

Американская справка о limited account говорит, что ограниченный аккаунт может потерять возможность отправлять или выводить деньги и направляет пользователя к Resolution Center или уведомлению панели. Это подтверждает возможный масштаб ограничения в указанном контексте, но не диагностирует ваш аккаунт. [Claim: OF-13–OF-14; Sources: S1, S6]

Сопоставьте также четыре экрана: уведомление, карточку операции, баланс и Resolution Center/Resolution Centre. Если подписи расходятся, сохраните все формулировки и дату, а не выбирайте наиболее тревожную из них. PayPal может показывать статус операции отдельно от состояния аккаунта или резерва. [Claims: OF-02–OF-03, OF-09, OF-14; Sources: S1–S6]

## Учитывайте зарегистрированный рынок

Язык страницы, гражданство или ваше нынешнее местонахождение не определяют, какое соглашение применяется к аккаунту. Нужны страна/регион регистрации и тип аккаунта. Только после этого можно читать локальную справку и оценивать подписи в интерфейсе.

| Контекст источника | Что он подтверждает | Как его нельзя использовать |
| --- | --- | --- |
| США | Определения hold, reserve и limitation, а также отдельные примеры статусов и условий | Нельзя превращать пример США в правило для Украины или другого рынка |
| Великобритания | Локальные формулировки удержаний, резервов, Resolution Centre и identity flow | Нельзя переносить британский срок проверки или список документов на другой аккаунт |
| Украина/EU-facing PDF | Отдельные положения о рисковом удержании и отображении pending в старой версии соглашения | Нельзя считать PDF текущим универсальным правилом без проверки действующего соглашения |
| Другой рынок | Только его собственное соглашение и справочный центр | Нельзя выбирать рынок по языку статьи или совету из форума |

`SOURCE_FRESHNESS_REQUIRED`: строка об Украине/EU-facing PDF требует проверки действующего соглашения перед публикацией. Не используйте этот старый PDF как текущую универсальную норму.

Американское соглашение и справка содержат примеры факторов риска и отдельных сроков, а британская справка говорит, что длительность зависит от обстоятельств и что после выполнения требуемых шагов PayPal может стремиться провести проверку в течение указанного периода. Это примеры условий конкретного рынка, а не обратный отсчёт для любого читателя. [Claims: OF-05–OF-07, OF-11–OF-12; Sources: S1–S3]

## Не превращайте дату в обещанный срок

Если на экране видна дата, запишите, к чему она привязана. Это может быть дата уведомления, операция, ожидаемый этап проверки или другая отметка. Не считайте период от закрытия аккаунта, последней продажи или другой даты, которую PayPal прямо не назвал.

Американское соглашение описывает риск-ориентированные transaction holds, которые в определённом контексте могут длиться до 21 дня; британская справка использует отдельную цель проверки после требуемых действий. Ни одна из этих формулировок не является универсальным сроком выпуска средств и не описывает резерв, account limitation или каждый рынок. [Claims: OF-10–OF-12; Sources: S1–S3]

Фраза «до 180 дней» относится к отдельному долгому удержанию и не должна автоматически появляться в ответе на любой статус. Если ваше уведомление действительно содержит 180 дней или длительный hold, используйте отдельный разбор этой темы; здесь достаточно подтвердить, что статус сначала нужно классифицировать. [Research scope; strategy cannibalization boundary]

### Если дата уже прошла

Сверьте текущую карточку аккаунта с тем, что было записано:

| Текущее состояние | Что оно подтверждает | Чего оно не подтверждает | Куда смотреть дальше |
| --- | --- | --- | --- |
| Один платёж всё ещё pending/held | Состояние этой операции не изменилось | Причину и дату release | Карточка платежа и показанное действие |
| Остался reserve, limitation, dispute или negative balance | Есть отдельное состояние баланса/аккаунта | Что обычный payment-hold workflow подходит | Уведомление и связанное дело |
| Баланс стал available | Изменился статус доступности | Что банковский перевод уже завершён | Отдельный withdrawal status |
| Вывод pending, failed, returned или interrupted | У перевода есть собственное состояние | Что баланс снова ограничен | Карточка вывода и официальный маршрут |
| Назван marketplace | В цепочке есть сторонняя инструкция | Что PayPal уже сообщил внутреннюю причину | Уведомление marketplace и его условия |

Доступный баланс, выпущенный платеж и завершённый банковский вывод — разные события. Даже после изменения отметки баланса нельзя обещать дату поступления денег на карту или банковский счёт без данных аккаунта и банка.

## Используйте только действие, которое показывает аккаунт

Официальная последовательность выглядит так: **точное уведомление → затронутый объект → авторизованный экран PayPal → инструкция, показанная именно этому аккаунту**. Resolution Center/Resolution Centre, баланс, панель аккаунта и другие кнопки могут быть доступны только для конкретного продукта, рынка или статуса. [Claims: OF-03, OF-09, OF-14; Sources: S1–S6]

Если PayPal показывает запрос на подтверждение личности или другой информации, следуйте только этому запросу внутри авторизованного маршрута. Британская справка описывает identity-related hold и возможную дополнительную длительность проверки документов в своём контексте; из этого нельзя составить общий пакет документов для всех стран. [Claim: OF-17; Source: S7]

Не добавляйте трекинг, квитанции или документы «на всякий случай». В официальных источниках нет универсального списка, который следует отправлять при любом hold, reserve или limitation. Документ имеет смысл только если его название и способ отправки указаны в текущем уведомлении и подтверждены источником для рынка аккаунта. [Evidence gap 4; Sources: S1–S9]

Не используйте другой аккаунт, чужую личность, изменённые документы или обход проверки. Такие действия не относятся к безопасной диагностике и могут нарушать правила платформы.

## Соберите минимальный снимок состояния

Перед официальным вопросом подготовьте один связный набор фактов:

- зарегистрированный рынок и тип аккаунта;
- точный текст уведомления и статус;
- дату, событие и операцию, которые названы;
- сумму и валюту, если они видны;
- доступность отправки, получения и вывода;
- статус баланса, резерва, спора или отрицательного остатка;
- задачу в Resolution Center/Resolution Centre;
- ссылку или название официального экрана, который вы открыли.

Сохраняйте только необходимое. Для первичного описания не отправляйте пароль, код аутентификации, recovery phrase, полные данные карты или ненужные документы удостоверяющие личность. При внешнем просмотре используйте обезличенные скриншоты и закройте данные, которые не помогают понять статус. [Source: knowledge/services/telegram-service-scope-draft.md]

Такой снимок помогает задать точный вопрос, но не раскрывает конфиденциальные критерии риска PayPal. Публичные страницы не позволяют определить внутреннюю причину, окончательную сумму, дату release, универсальный список документов или итог поддержки. Американское соглашение прямо отмечает, что PayPal может использовать конфиденциальные критерии риска и не всегда раскрывает их. [Claim: OF-20; Source: S1]

## Когда нужен отдельный разбор

Перейдите к отдельной теме только после классификации:

- **180 дней или длительное удержание** — когда это прямо указано в вашем уведомлении;
- **удержание после продажи** — когда речь об одном post-sale payment, а не о всём балансе;
- **вывод недоступен** — когда баланс доступен, но отдельная withdrawal-операция не проходит;
- **ограничение аккаунта или апелляция** — когда основным объектом является account limitation;
- **документы** — только если PayPal явно назвал конкретный запрос.

Не переносите содержание этих страниц обратно в общий status-checklist: такой обмен создаёт дубли и может подсказать неверную ветку.

## Если после проверки статус всё ещё неясен

После того как вы сохранили уведомление, зарегистрированный рынок, затронутую функцию и видимую задачу, можно запросить индивидуальный разбор фактов в Telegram: [@helpgrailed](https://t.me/helpgrailed). Это платная консультация по материалам, которые вы сами предоставили; она может помочь объяснить видимые сообщения, найти недостающие сведения и подготовить черновик обращения, если это подходит ситуации.

Resolution Hub не связан с PayPal и не получает доступ к аккаунтам. В консультации не создаются и не изменяются документы, не предлагается обход правил и не даются юридические, налоговые или финансовые советы. Не гарантируются восстановление аккаунта, выпуск средств, одобрение проверки, результат рассмотрения, срок обработки или любое решение платформы. Стоимость обсуждается индивидуально до начала платной работы. [Source: knowledge/services/telegram-service-scope-draft.md]

## Где заканчивается публичная информация

Без точного уведомления, зарегистрированного рынка, типа аккаунта и истории операции нельзя надёжно ответить:

- почему PayPal применил конкретное состояние;
- когда именно деньги станут доступными;
- какая окончательная сумма будет выведена;
- какие документы нужны именно вам;
- можно ли вывести другой баланс во время этого состояния;
- ускорит ли обращение проверку или изменит решение.

`LEGAL_REVIEW_REQUIRED`: если вопрос касается налогов, банковских прав, регулирования или юридической защиты, эта статья не заменяет квалифицированную консультацию.

## Официальные источники

1. [PayPal User Agreement — United States](https://www.paypal.com/us/legalhub/paypal/useragreement-full?locale.x=en-US) — S1, проверено 2026-07-23.
2. [PayPal User Agreement — United Kingdom](https://www.paypal.com/uk/legalhub/paypal/useragreement-full?locale.x=en_GB) — S2, проверено 2026-07-23.
3. [Why Payments are Put on Hold or Unavailable](https://www.paypal.com/uk/brc/article/funds-availability) — S3, проверено 2026-07-23; `SOURCE_FRESHNESS_REQUIRED` (страница от 2023-10-10).
4. [What does the status of my payment or money request mean](https://pep.paypal.com/us/cshelp/article/what-does-the-status-of-my-payment-or-money-request-mean-on-my-paypal-account-help668) — S4, проверено 2026-07-23.
5. [PayPal Account Reserves](https://www.paypal.com/us/brc/article/account-reserves) — S5, проверено 2026-07-23.
6. [Why is my PayPal account limited?](https://www.paypal.com/c2/cshelp/article/why-is-my-paypal-account-limited-help534?locale.x=en_C2) — S6, проверено 2026-07-23.
7. [Why are my funds on hold until I confirm my identity?](https://www.paypal.com/uk/cshelp/article/why-is-my-payment-on-hold-or-unavailable-help126?locale.x=en_GB) — S7, проверено 2026-07-23.
8. [User Agreement — PayPal PDF](https://www.paypal.com/ua/EU_en_GB/ua.pdf) — S9, проверено 2026-07-23; `SOURCE_FRESHNESS_REQUIRED`, не использовать как текущую универсальную норму.

## Open verification items

- `MANUAL_REVIEW_REQUIRED`: подтвердить, какие зарегистрированные рынки и типы аккаунта охватывает русская версия. Не объединять правила США, Великобритании, Украины/EU-facing и других рынков.
- `MANUAL_REVIEW_REQUIRED`: сверить финальный чек-лист с актуальным авторизованным status flow выбранного рынка; если такой flow недоступен, оставить все действия условными.
- `SOURCE_FRESHNESS_REQUIRED`: перед публикацией повторно проверить соглашение, термины `held`, `pending`, `reserve`, `unavailable`, названия Resolution Center/Resolution Centre и текущий официальный URL для каждого используемого рынка.
- `MANUAL_REVIEW_REQUIRED`: удалить любые универсальные списки документов, причины, даты release, прогнозы суммы, вероятности успеха или обещания вывода, если они появятся при редактуре.
- `LEGAL_REVIEW_REQUIRED`: проверить формулировки о приватности, минимизации данных и границе между информацией и юридической, налоговой или финансовой консультацией.
- `MANUAL_REVIEW_REQUIRED`: подтвердить разграничение с `funds-held-180-days`, `paypal-payment-hold-after-sale`, `paypal-withdrawal-unavailable` и страницами ограничений при duplicate review.
- `OPTIONAL_EXPERIENCE_ENHANCEMENT`: подтверждённый и разрешённый обезличенный пример может улучшить классификацию, но matching owner record отсутствует; не добавлять личный кейс.

## Fact-check rerun note

Проверено 2026-07-23. S8 (migration URL для `Know your options`) при повторной проверке вернул внутреннюю ошибку, поэтому конкретное название этой кнопки удалено. Все остальные источниковые оговорки и блокирующие маркеры сохранены; оригинальный draft не изменён.


## Experience opportunity map

| Potential experience element | Intended reader value | Evidence status | Integration decision |
| --- | --- | --- | --- |
| A redacted PayPal notice showing an unfamiliar held/pending/reserve/unavailable label | Demonstrate how to preserve the exact wording and identify the affected object before choosing a route | No matching confirmed Level 2 record; available intake is `INTAKE_ONLY — NOT_CONFIRMED_EXPERIENCE` | Do not add a case, quote, screenshot, or first-person wording. Keep the existing `OPTIONAL_EXPERIENCE_ENHANCEMENT` marker. |
| A market-specific account-status sequence (notice → account surface → displayed action) | Show the distinction between observed sequence and inferred cause | No reviewed owner chronology or publication permission | Do not add a timeline or causal statement. Keep the conditional official-source workflow. |
| A screenshot of a balance/transaction/Resolution Center state | Help readers recognize which object is affected without exposing private data | No reviewed screenshot or public-use permission | Do not add an image. Any future screenshot must prove one exact state, include approximate date and registered market, and be redacted before review. |
| Owner-supported warning about a common status misunderstanding | Make a bounded warning more concrete | No evidence-reviewed owner warning | Do not add a warning attributed to experience; retain source-qualified caution only. |

## Evidence and privacy

The relevant knowledge base was searched. The only PayPal owner record is `knowledge/confirmed-experience/intake/paypal-funds-held-180-days-case-intake.md`, which concerns a different 180-day topic and is explicitly `INTAKE_ONLY — NOT_CONFIRMED_EXPERIENCE`. It cannot support this status-checklist page and is not used as evidence.

No owner experience, screenshot, quote, timeline, outcome, duration, or experience-backed warning has been added. All PayPal claims and citations remain exactly as supplied by the verified draft. No private information is exposed, and no account access is implied. Any future visual must remove names, email addresses, account and transaction identifiers, balances, card/bank details, authentication codes, support references, and other unnecessary personal data. Public-use permission must be explicit and scoped to the exact redacted asset.

## Case integration changes

- Preserved the verified draft's factual text, inline citations, official-source hierarchy, CTA boundaries, and every existing review marker.
- Added no case because no matching evidence-reviewed and permission-cleared Level 2 record exists for an ambiguous PayPal hold/status diagnosis.
- Kept `OPTIONAL_EXPERIENCE_ENHANCEMENT` rather than upgrading it to `EXPERIENCE_REQUIRED`: the page's intended diagnostic value can be delivered by market-qualified official sources without a personal case.
- Created the page-specific questionnaire only for optional owner evidence. No answer is assumed, and an intake response must be reviewed before any case can enter the article.
- Rerun note: initial experience pass on the latest verified draft; no prior experience output existed.
