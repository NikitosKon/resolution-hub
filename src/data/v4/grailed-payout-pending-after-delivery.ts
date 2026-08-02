import type { V4ArticleContent, V4LocalizedArticle } from "./types";

const sources = [
  "When do I get paid? — https://support.grailed.com/hc/en-us/articles/30298995312653-When-do-I-get-paid",
  "I just sold an item on Grailed, what's next? — https://support.grailed.com/hc/en-us/articles/30298942151949-I-just-sold-an-item-on-Grailed-what-s-next",
  "Do I need to ship my sold item with tracking information? — https://support.grailed.com/hc/en-us/articles/30299395757837-Do-I-need-to-ship-my-sold-item-with-tracking-information",
  "How do transactions qualify for faster payouts? — https://support.grailed.com/hc/en-us/articles/30299037200013-How-do-transactions-qualify-for-faster-payouts",
  "Submit a request — https://support.grailed.com/hc/en-us/requests/new",
];

const en: V4ArticleContent = {
  title: "Grailed shows delivered but payout is pending: what to check",
  metaTitle: "Grailed Payout Pending After Delivery: What to Check",
  metaDescription:
    "Tracking says delivered but your Grailed payout is pending? Separate delivery, release, processing and cash-out status before contacting support.",
  intro:
    "A delivered scan does not by itself mean that money has reached your bank. Grailed can release a payment after delivery, while a bank or payment provider processes the released transfer separately. Start by identifying which stage your sale is actually showing.",
  quickAnswerTitle: "Separate four statuses",
  quickAnswer:
    "Check the sale, the delivery record, the payout release status and the cash-out or bank status separately. Grailed says ordinary funds are released within three calendar days after tracking shows delivery, subject to listed exceptions. For sellers outside the US, processing after release can take up to an additional ten business days. These are official reference points, not a promise for an individual account.",
  sections: [
    {
      id: "status-table",
      title: "Start with the status you can actually see",
      blocks: [
        {
          type: "table",
          headers: ["Status shown", "What it confirms", "Next check"],
          rows: [
            ["Delivered, payout pending", "The carrier reports delivery; release is not shown", "Open the same sale in Sold and Messages"],
            ["Payout released or sent", "Grailed reports that the payment left its release stage", "Check the receiving bank or provider"],
            ["A dispute, investigation or hold notice", "An exception may be controlling the sale", "Follow the exact notice in the authenticated account"],
            ["Cancelled or refunded", "The sale is not on the ordinary payout branch", "Confirm whether an active sale still exists"],
          ],
        },
        {
          type: "note",
          title: "A label is not a diagnosis",
          text: "Words such as pending, released and delivered describe different systems. Do not infer a reason, date or outcome from one label alone.",
        },
      ],
    },
    {
      id: "delivery",
      title: "Confirm that tracking belongs to this sale",
      blocks: [
        {
          type: "paragraph",
          text: "Open the exact order in Grailed and compare the order reference, carrier, tracking number, complete tracking history and final delivered event. A carrier scan on its own may not be linked to the sale in Grailed. Do not replace a number with another shipment or add a guessed status.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Confirm the sale appears in Sold or Messages.",
            "Check that the full tracking number is attached to that sale.",
            "Save the delivered date and time shown by the carrier.",
            "Record whether Grailed shows a dispute, investigation, cancellation or refund.",
          ],
        },
        {
          type: "paragraph",
          text: "Grailed says missing or incomplete tracking can lead to cancellation and a buyer refund under its shipping guidance. That general rule does not determine what to do when an account restriction hides normal controls; use the instructions displayed for the authenticated order.",
        },
      ],
    },
    {
      id: "timeline",
      title: "Do not turn reference windows into a promise",
      blocks: [
        {
          type: "paragraph",
          text: "Grailed’s published sequence is: confirmed sale, shipment and tracking, delivery or an exception, release decision, processing and cash-out. The ordinary three-calendar-day release reference starts from the delivery event shown for the transaction, not from the date you shipped. A buyer dispute or Grailed investigation can change that branch.",
        },
        {
          type: "paragraph",
          text: "After release, Grailed’s guidance describes processing windows that differ by seller location and provider. For sellers outside the US it says processing may take up to an additional ten business days. Do not add the windows into a guaranteed total or use another seller’s date as evidence for your account.",
        },
      ],
    },
    {
      id: "messages",
      title: "Read Sold and Messages precisely",
      blocks: [
        {
          type: "paragraph",
          text: "Write down the exact wording shown in Sold, Messages and the payout area. Replace “my money disappeared” with the observable state: carrier delivered, payout pending; payout released, bank not credited; or an exception notice is displayed. Grailed’s public pages cannot expose the internal state of an individual account.",
        },
        {
          type: "list",
          items: [
            "payout pending — release is not shown;",
            "payout released or sent — the release stage is shown;",
            "cancelled or refunded — the ordinary payout branch may no longer apply;",
            "dispute, investigation or hold — follow the separate instruction shown.",
          ],
        },
      ],
    },
    {
      id: "exceptions",
      title: "Check for an exception before contacting support",
      blocks: [
        {
          type: "paragraph",
          text: "Grailed lists buyer disputes and investigations among situations in which funds may not be released on the ordinary reference window. It may notify a seller when a payment needs to be held. The absence of a visible notice does not prove that no internal review exists, so keep the account wording and timestamps rather than guessing.",
        },
        {
          type: "note",
          title: "Keep one chronology",
          text: "Record sale confirmation, shipment, delivered event, the latest Grailed status and any notice. One consistent timeline is more useful than repeated identical requests.",
        },
      ],
    },
    {
      id: "faster-payout",
      title: "Faster payout is a separate feature",
      blocks: [
        {
          type: "paragraph",
          text: "Grailed describes faster payouts for some transactions while an item is in transit. The page refers to factors such as seller history, timely shipment, accurate item descriptions, feedback, compliance with its rules and item price. Availability can differ and may be removed. Not having faster payout does not by itself establish a restriction or error.",
        },
      ],
    },
    {
      id: "support-pack",
      title: "Prepare a focused support message",
      blocks: [
        {
          type: "paragraph",
          text: "Use Grailed’s official request route and include only the facts needed to identify the branch: the sale reference (partly redacted), seller market, carrier and tracking status, delivery date, exact payout label, and any notice. Ask which status currently controls the funds and what action is available for this order.",
        },
        {
          type: "list",
          items: [
            "Do not send a password, authentication code or recovery phrase.",
            "Do not send full card details or unnecessary identity documents.",
            "Redact addresses, phone numbers, emails and unrelated order data.",
            "Use one official thread unless Grailed tells you otherwise.",
          ],
        },
      ],
    },
    {
      id: "limits",
      title: "What this guide cannot determine",
      blocks: [
        {
          type: "paragraph",
          text: "Public guidance cannot establish why a particular payout is pending, whether a sale caused an account restriction, the exact review duration, a release date or the outcome of a dispute. A reference window is not a guarantee. The final decision and account-specific instructions remain with Grailed and the relevant payment provider.",
        },
      ],
    },
  ],
  sources,
  visual: { id: "grailed-four-state-check", afterSectionId: "status-table" },
  ctaTitle: "Still unsure what the status means?",
  ctaText:
    "Request an individual review in Telegram at @helpgrailed. This is a paid consultation based on the facts you provide; no payout, review or timing is guaranteed. Never send a password or login code.",
  reviewedAt: "2026-08-02",
};

const ru: V4ArticleContent = {
  title: "Grailed показывает доставку, но выплата не пришла: что проверить",
  metaTitle: "Выплата Grailed после доставки не пришла: что проверить",
  metaDescription:
    "Трекинг показывает delivered, но выплата Grailed всё ещё pending? Разделите доставку, выпуск, обработку и вывод средств.",
  intro:
    "Отметка delivered сама по себе не означает, что деньги уже поступили в банк. Grailed может выпустить выплату после доставки, а банк или платёжный провайдер обрабатывает уже выпущенный перевод отдельно. Сначала определите, на каком этапе находится именно ваша продажа.",
  quickAnswerTitle: "Разделите четыре статуса",
  quickAnswer:
    "Проверьте отдельно продажу, доставку, выпуск выплаты и статус банка или вывода средств. Grailed указывает, что обычно выпускает средства в течение трёх календарных дней после отображения доставки, если нет перечисленных исключений. Для продавцов за пределами США обработка после выпуска может занять ещё до десяти рабочих дней. Это официальные ориентиры, а не обещание для конкретного аккаунта.",
  sections: [
    { id: "status-table", title: "Начните с того, что реально показано", blocks: [{ type: "table", headers: ["Что видно", "Что это подтверждает", "Что проверить дальше"], rows: [["Delivered, payout pending", "Перевозчик показывает доставку, выпуск не показан", "Откройте ту же продажу в Sold и Messages"], ["Payout released/sent", "Grailed показывает выпуск выплаты", "Проверьте банк или провайдера"], ["Dispute, investigation или hold", "Может действовать отдельное исключение", "Следуйте тексту уведомления в аккаунте"], ["Cancelled/refunded", "Продажа вышла из обычной ветки выплаты", "Проверьте, существует ли активная продажа"]] }, { type: "note", title: "Статус не объясняет причину", text: "Слова pending, released и delivered относятся к разным этапам. Не выводите причину, дату или результат из одного ярлыка." }] },
    { id: "delivery", title: "Убедитесь, что трекинг относится к этой продаже", blocks: [{ type: "paragraph", text: "Откройте нужный заказ в Grailed и сравните номер заказа, перевозчика, полный tracking, историю и конечную отметку delivered. Не подменяйте номер другой отправкой и не добавляйте статус по догадке." }, { type: "list", ordered: true, items: ["Проверьте продажу в Sold или Messages.", "Убедитесь, что полный tracking прикреплён к этой продаже.", "Сохраните дату и время delivered у перевозчика.", "Проверьте dispute, investigation, cancellation или refund."] }, { type: "paragraph", text: "Grailed пишет, что отсутствие полного tracking может привести к отмене заказа и возврату покупателю по правилам доставки. При ограниченном аккаунте ориентируйтесь на инструкцию, показанную для конкретного заказа." }] },
    { id: "timeline", title: "Не превращайте ориентир в обещание", blocks: [{ type: "paragraph", text: "Обычная последовательность такова: подтверждённая продажа, отправка и tracking, доставка или исключение, решение о выпуске, обработка и вывод. Отсчёт трёх календарных дней связан с отметкой доставки, а не с датой отправки. Спор или расследование могут изменить ветку." }, { type: "paragraph", text: "После release Grailed описывает отдельные сроки обработки, зависящие от рынка и провайдера. Для продавцов за пределами США указано до десяти дополнительных рабочих дней. Не складывайте эти окна в точный прогноз и не переносите срок другого продавца на свой аккаунт." }] },
    { id: "messages", title: "Точно прочитайте Sold и Messages", blocks: [{ type: "paragraph", text: "Запишите точную формулировку в Sold, Messages и разделе выплаты. Вместо «деньги пропали» укажите наблюдаемый статус: carrier delivered, payout pending; payout released, банк не зачислил; либо отображается отдельное уведомление." }, { type: "list", items: ["payout pending — release не показан;", "payout released/sent — показан выпуск;", "cancelled/refunded — обычная ветка выплаты может не применяться;", "dispute, investigation или hold — действует отдельная инструкция."] }] },
    { id: "exceptions", title: "Проверьте исключение до обращения", blocks: [{ type: "paragraph", text: "Grailed перечисляет спор покупателя и расследование среди обстоятельств, при которых средства могут не выпуститься по обычному ориентиру. Если выплата удерживается, платформа может уведомить продавца. Отсутствие видимого уведомления не доказывает отсутствие внутренней проверки." }, { type: "note", title: "Ведите одну хронологию", text: "Запишите продажу, отправку, delivered, последний статус Grailed и уведомления. Это полезнее, чем отправлять несколько одинаковых запросов." }] },
    { id: "faster-payout", title: "Быстрая выплата — отдельная функция", blocks: [{ type: "paragraph", text: "Grailed описывает faster payout для части сделок ещё в пути. Платформа упоминает историю продавца, своевременную отправку, точность описания, отзывы, соблюдение правил и цену вещи. Доступность различается и может быть отменена. Отсутствие этой опции само по себе не доказывает ошибку или ограничение." }] },
    { id: "support-pack", title: "Подготовьте точное обращение", blocks: [{ type: "paragraph", text: "Используйте официальный канал Grailed и укажите только факты: частично скрытый номер продажи, рынок продавца, перевозчика и tracking, дату доставки, точный payout status и текст уведомления. Спросите, какой статус сейчас управляет выплатой и что доступно по этому заказу." }, { type: "list", items: ["Не отправляйте пароль, код входа или recovery phrase.", "Не отправляйте полный номер карты и ненужные документы личности.", "Скройте адреса, телефоны, email и чужие заказы.", "Используйте один официальный диалог, если Grailed не просит иначе."] }] },
    { id: "limits", title: "Чего эта проверка не определит", blocks: [{ type: "paragraph", text: "Публичные материалы не устанавливают причину задержки конкретной выплаты, связь продажи с ограничением, точный срок проверки, дату выпуска или исход спора. Окончательное решение и инструкции по аккаунту остаются за Grailed и платёжным провайдером." }] },
  ],
  sources,
  visual: { id: "grailed-four-state-check", afterSectionId: "status-table" },
  ctaTitle: "Не уверены, что означает статус?",
  ctaText: "Запросите индивидуальный разбор в Telegram: @helpgrailed. Это платная консультация по предоставленным фактам; выплата, решение и срок не гарантируются. Не отправляйте пароль или код входа.",
  reviewedAt: "2026-08-02",
};

const uk: V4ArticleContent = {
  title: "Grailed показує доставку, але виплата не надійшла: що перевірити",
  metaTitle: "Виплата Grailed після доставки не надійшла: перевірка",
  metaDescription: "Трекінг показує delivered, але виплата Grailed pending? Розділіть доставку, release, обробку та виведення коштів.",
  intro: "Позначка delivered сама по собі не означає, що кошти вже зараховані банком. Grailed може випустити виплату після доставки, а банк або платіжний провайдер обробляє переказ окремо. Спочатку визначте, на якому етапі перебуває саме ваш продаж.",
  quickAnswerTitle: "Розділіть чотири статуси",
  quickAnswer: "Перевірте окремо продаж, доставку, release виплати та статус банку або виведення. Grailed вказує, що за звичайним сценарієм кошти випускаються протягом трьох календарних днів після відображення доставки, якщо немає винятків. Для продавців за межами США обробка після release може тривати до десяти додаткових робочих днів. Це орієнтири довідки, а не гарантія для конкретного акаунта.",
  sections: [
    { id: "status-table", title: "Почніть із того, що показано", blocks: [{ type: "table", headers: ["Що видно", "Що це підтверджує", "Що перевірити"], rows: [["Delivered, payout pending", "Перевізник показує доставку, release не показано", "Відкрийте цей продаж у Sold і Messages"], ["Payout released/sent", "Grailed показує випуск коштів", "Перевірте банк або провайдера"], ["Dispute, investigation або hold", "Може діяти окремий виняток", "Дотримуйтесь тексту notice в акаунті"], ["Cancelled/refunded", "Продаж більше не у звичайній гілці виплати", "Переконайтеся, що активний продаж існує"]] }, { type: "note", title: "Статус — не причина", text: "Pending, released і delivered описують різні етапи. Не робіть висновок про причину, дату або результат з одного напису." }] },
    { id: "delivery", title: "Переконайтеся, що трекінг належить цьому продажу", blocks: [{ type: "paragraph", text: "Відкрийте потрібне замовлення в Grailed і порівняйте номер замовлення, перевізника, повний tracking, історію та фінальну позначку delivered. Не замінюйте номер іншим відправленням і не додавайте статус навмання." }, { type: "list", ordered: true, items: ["Перевірте продаж у Sold або Messages.", "Переконайтеся, що повний tracking прикріплений до цього продажу.", "Збережіть дату й час delivered у перевізника.", "Перевірте dispute, investigation, cancellation або refund."] }, { type: "paragraph", text: "Grailed пише, що відсутність повного tracking може призвести до скасування замовлення та повернення коштів покупцеві за правилами доставки. Якщо доступ обмежений, використовуйте інструкцію, показану для цього замовлення." }] },
    { id: "timeline", title: "Не перетворюйте орієнтир на обіцянку", blocks: [{ type: "paragraph", text: "Звичайна послідовність: підтверджений продаж, відправлення й tracking, доставка або виняток, рішення про release, обробка та виведення. Три календарні дні пов’язані з подією доставки, а не з датою відправлення. Спір або розслідування можуть змінити послідовність." }, { type: "paragraph", text: "Після release Grailed описує окремий строк обробки, що залежить від ринку та провайдера. Для продавців за межами США вказано до десяти додаткових робочих днів. Не складайте ці вікна в точний прогноз і не переносіть строк іншого продавця на свій акаунт." }] },
    { id: "messages", title: "Точно прочитайте Sold і Messages", blocks: [{ type: "paragraph", text: "Запишіть точний текст у Sold, Messages і розділі виплати. Замість «гроші зникли» вкажіть спостережуваний стан: carrier delivered, payout pending; payout released, банк не зарахував; або відображається окреме повідомлення." }, { type: "list", items: ["payout pending — release не показано;", "payout released/sent — показано випуск;", "cancelled/refunded — звичайна гілка може не діяти;", "dispute, investigation або hold — діє окрема інструкція."] }] },
    { id: "exceptions", title: "Перевірте виняток до звернення", blocks: [{ type: "paragraph", text: "Grailed називає спір покупця та розслідування серед обставин, за яких кошти можуть не випускатися у звичайний строк. Якщо виплату потрібно затримати, платформа може повідомити продавця. Відсутність видимого notice не доводить відсутність внутрішньої перевірки." }, { type: "note", title: "Ведіть одну хронологію", text: "Запишіть продаж, відправлення, delivered, останній статус Grailed і повідомлення. Це корисніше за кілька однакових запитів." }] },
    { id: "faster-payout", title: "Швидша виплата — окрема функція", blocks: [{ type: "paragraph", text: "Grailed описує faster payout для частини угод ще в дорозі. Платформа згадує історію продавця, своєчасне відправлення, точність опису, відгуки, дотримання правил і ціну речі. Доступність може відрізнятися та бути скасована. Відсутність цієї опції сама по собі не доводить помилку або обмеження." }] },
    { id: "support-pack", title: "Підготуйте точне звернення", blocks: [{ type: "paragraph", text: "Скористайтеся офіційним каналом Grailed і вкажіть лише факти: частково прихований номер продажу, ринок продавця, перевізника й tracking, дату доставки, точний payout status і текст notice. Запитайте, який статус зараз визначає кошти та що можна зробити щодо цього замовлення." }, { type: "list", items: ["Не надсилайте пароль, код входу або recovery phrase.", "Не надсилайте повний номер картки та непотрібні документи особи.", "Приховайте адреси, телефони, email і сторонні замовлення.", "Використовуйте один офіційний діалог, якщо Grailed не просить інакше."] }] },
    { id: "limits", title: "Чого ця перевірка не визначить", blocks: [{ type: "paragraph", text: "Публічні матеріали не встановлюють причину затримки конкретної виплати, зв’язок продажу з обмеженням, точний строк перевірки, дату release або результат спору. Остаточне рішення та інструкції щодо акаунта залишаються за Grailed і платіжним провайдером." }] },
  ],
  sources,
  visual: { id: "grailed-four-state-check", afterSectionId: "status-table" },
  ctaTitle: "Не впевнені, що означає статус?",
  ctaText: "Замовте індивідуальний розбір у Telegram: @helpgrailed. Це платна консультація за наданими фактами; виплата, рішення та строк не гарантуються. Не надсилайте пароль або код входу.",
  reviewedAt: "2026-08-02",
};

export const grailedPayoutPendingAfterDeliveryV4: V4LocalizedArticle = { en, ru, uk };
