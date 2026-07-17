import type { V4LocalizedArticle } from "./types";

const sources = [
  "Why was my account frozen? — https://support.grailed.com/hc/en-us/articles/30296274257421-Why-was-my-account-frozen",
  "Grailed, LLC Terms of Service — https://www.grailed.com/about/terms",
  "What is the Code of Conduct? — https://support.grailed.com/hc/en-us/articles/27294980902029-What-is-the-Code-of-Conduct",
  "I just sold an item on Grailed, what's next? — https://support.grailed.com/hc/en-us/articles/30298942151949-I-just-sold-an-item-on-Grailed-what-s-next",
  "When do I get paid? — https://support.grailed.com/hc/en-us/articles/30298995312653-When-do-I-get-paid",
  "Do I need to ship my sold item with tracking information? — https://support.grailed.com/hc/en-us/articles/30299395757837-Do-I-need-to-ship-my-sold-item-with-tracking-information",
  "Shipping Policy — https://support.grailed.com/hc/en-us/articles/32230394627853-Shipping-Policy",
  "Submit a request — https://support.grailed.com/hc/en-us/requests/new",
];

export const frozenAfterSaleV4: V4LocalizedArticle = {
  en: {
    title:
      "Grailed account frozen after a sale: check the order, payout, and account separately",
    metaTitle: "Grailed Account Frozen After a Sale: What to Check",
    metaDescription:
      "If Grailed froze your account after a sale, check the order, account access, payout release and cash-out separately before contacting support.",
    intro:
      "An account freeze and a sale may happen close together without the sale causing the freeze. Grailed says accounts may be frozen for suspected or actual Code of Conduct or Terms violations, but the reviewed official sources do not define “a sale caused the freeze” as a rule. The notice and its cited reason are needed for any case-specific connection.",
    quickAnswerTitle: "Check four separate states",
    quickAnswer:
      "The word “frozen” does not describe the whole situation. A seller may have restricted account access, a live order that still needs attention, funds not yet released, a payment already processing, or a credited balance that cannot be cashed out. Check the account, sale fulfilment, payout release or processing, and cash-out separately.",
    sections: [
      {
        id: "confirm-sale",
        title: "Confirm the sale in Grailed before acting",
        blocks: [
          {
            type: "paragraph",
            text: "Grailed’s public guidance identifies a combination of confirmation records: an in-app notification, a GrailedBot message with the buyer’s address, an email from Grailed, and an entry on the Sold page. Check the transaction in Grailed itself before shipping or relying on an isolated message or email. This confirms the sale record; it does not diagnose a suspicious message or explain the freeze.",
          },
        ],
      },
      {
        id: "item-status",
        title: "Start with the item’s current status",
        blocks: [
          { type: "subheading", text: "Not shipped, or tracking is missing" },
          {
            type: "paragraph",
            text: "For a standard sale, Grailed’s published rule requires shipment and accurate end-to-end tracking within seven calendar days of purchase; otherwise the order may be automatically canceled and the buyer refunded. Expedited Delivery has a shorter deadline, but the reviewed official pages are not fully aligned on its wording, so use the deadline displayed for the actual order.",
          },
          {
            type: "paragraph",
            text: "That ordinary rule does not answer what a frozen seller should do when the buyer address, Messages, or tracking controls are unavailable. Before taking a case-specific fulfilment action, verify the sale status, shipping method, displayed deadline, access to the buyer address and tracking controls, and any instruction from Grailed. Do not assume normal controls remain available during a freeze.",
          },
          { type: "subheading", text: "Shipped and in transit" },
          {
            type: "paragraph",
            text: "Preserve carrier acceptance and end-to-end tracking, then record whether the order shows a dispute, investigation, cancellation, or payout message. Shipment does not establish when funds will be released.",
          },
          { type: "subheading", text: "Delivered" },
          {
            type: "paragraph",
            text: "Grailed says ordinary seller funds are released within three calendar days after tracking shows delivery, but it also lists exceptions such as a buyer dispute, a Grailed investigation, or a hold required by law or regulation. This is a reference point for the sale state, not a freeze-resolution or appeal promise.",
          },
          {
            type: "subheading",
            text: "Disputed, canceled, refunded, or chargeback-related",
          },
          {
            type: "paragraph",
            text: "Use the displayed case status rather than the ordinary delivery rule. Grailed’s Terms treat refunds, chargebacks, seller debt, and related balance conditions separately; public guidance cannot predict the item, buyer, or money outcome in an individual case.",
          },
        ],
      },
      {
        id: "four-states",
        title: "Check four separate states",
        blocks: [
          {
            type: "table",
            headers: [
              "State",
              "Record what the account shows",
              "The next question it controls",
            ],
            rows: [
              [
                "Account",
                "Login, Messages, listing/selling access, notice wording",
                "Which functions are restricted and which notice requirement remains open?",
              ],
              [
                "Sale fulfilment",
                "Sold entry, buyer address, method/deadline, tracking, delivery, dispute/cancellation/refund",
                "What is the item’s current branch, and are normal transaction controls accessible?",
              ],
              [
                "Payout release/processing",
                "Awaiting delivery, held for dispute/investigation/law, released, processing",
                "Has Grailed released the payment, or is another release condition still displayed?",
              ],
              [
                "Cash-out",
                "Balance credited but cash-out unavailable; processor/onboarding message",
                "Is this a cash-out restriction rather than an unreleased sale payment?",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "With the item branch identified, this four-state view keeps an account restriction from being mistaken for a payout or cash-out status.",
          },
          {
            type: "note",
            text: "This matrix does not identify the reader’s state from the keyword alone. It turns one vague word into four account-specific checks.",
          },
        ],
      },
      {
        id: "read-notice",
        title: "Read the notice without guessing the cause",
        blocks: [
          {
            type: "paragraph",
            text: "Grailed’s current Terms permit suspension, termination, or cash-out restrictions in several contexts, including requested identity verification, inaccurate or incomplete account information, payment-processor onboarding, missing tax information, seller debt, refunds, and chargebacks. Prohibited conduct can also lead to account action. These are policy conditions, not a list of likely causes for your freeze. Check a condition only when the notice, account, or support correspondence makes it relevant.",
          },
          {
            type: "paragraph",
            text: "If the notice requests verification through Persona or a government-issued ID matching the account’s legal name, respond only through the authentic Grailed flow and with the relevant genuine information requested. Do not submit unrelated identity files, passwords, or authentication codes.",
          },
        ],
      },
      {
        id: "money-timelines",
        title: "Follow the money without mixing up timelines",
        blocks: [
          {
            type: "paragraph",
            text: "Use this event order: confirmed sale → fulfilment/tracking → delivery or dispute → release decision → processing → cash-out. Not every case reaches each event, and the sequence supplies no promised dates.",
          },
          {
            type: "paragraph",
            text: "Only after the payout status shows that Grailed released the payment does the published processing guidance become relevant: two to three business days for US sellers, and up to an additional ten business days for sellers outside the US. These are post-release processing windows, not appeal, freeze-review, or reinstatement timelines.",
          },
          {
            type: "paragraph",
            text: "Grailed also says it may delay funds while support researches an issue and will notify the seller if a payment needs to be held. A payout hold, processing payment, and cash-out freeze remain distinct labels; do not infer one from another.",
          },
        ],
      },
      {
        id: "keep-timeline",
        title: "Keep a timeline, not a generic appeal pack",
        blocks: [
          {
            type: "paragraph",
            text: "Keep only records relevant to this transaction and notice:",
          },
          {
            type: "list",
            items: [
              "freeze notice and Grailed correspondence;",
              "sale confirmations, listing/order reference, and buyer address as displayed;",
              "shipping method, displayed deadline, carrier acceptance, and tracking;",
              "delivery, dispute, cancellation, refund, or chargeback status;",
              "payout release, processing, cash-out, or payment-processor messages;",
              "verification or account records that Grailed actually requested.",
            ],
          },
          {
            type: "paragraph",
            text: "Grailed tells users who wish to appeal a freeze to contact it and provide supporting documentation, but it does not publish one universal document list, response time, or success standard.",
          },
        ],
      },
      {
        id: "official-route",
        title: "Send one precise question through the official route",
        blocks: [
          {
            type: "paragraph",
            text: "Use Grailed’s official request route and separate the unresolved issue:",
          },
          {
            type: "list",
            items: [
              "Account: “My notice says [exact wording]. I can access [functions] but not [functions]. Which stated requirement remains unresolved?”",
              "Live order: “The sale is confirmed as [order reference/status]. The item is [unshipped/in transit/delivered], the displayed deadline is [date], and I cannot access [specific control]. What case-specific instruction applies to this order?”",
              "Payout or cash-out: “Tracking shows [status]. The account shows [awaiting release/released/processing/cash-out unavailable], and [dispute/investigation/processor notice] is or is not displayed. Which status currently controls the funds?”",
            ],
          },
        ],
      },
      {
        id: "limits",
        title: "What cannot be predicted here",
        blocks: [
          {
            type: "paragraph",
            text: "The public record does not establish whether the sale caused the freeze, whether the restriction is temporary or permanent, how long an appeal will take, the chance of restoration, a payment date, or an outcome for the buyer or item. Ordinary payout timing cannot answer those questions.",
          },
          {
            type: "note",
            text: "Resolution Hub is not affiliated with Grailed and does not promise reinstatement, payout release, faster review, or a favorable transaction outcome.",
          },
        ],
      },
    ],
    sources,
    visual: { id: "grailed-four-state-check", afterSectionId: "four-states" },
    ctaTitle: "Still not sure what to do?",
    ctaText:
      "Tell us what happened and, if useful, share a redacted copy of the message you received. This is a paid consultation; pricing is agreed in Telegram before work begins. Never send a password or login code.",
    reviewedAt: "2026-07-17",
  },
  ru: {
    title:
      "Аккаунт Grailed заморожен после продажи: проверьте заказ, выплату и доступ по отдельности",
    metaTitle: "Grailed заморозил аккаунт после продажи: что проверить",
    metaDescription:
      "Если Grailed заморозил аккаунт после продажи, отдельно проверьте заказ, доступ, разблокировку выплаты и вывод средств перед обращением в поддержку.",
    intro:
      "Продажа и заморозка могли просто совпасть по времени. Grailed пишет, что аккаунт может быть заморожен при подозрении на нарушение или при нарушении Code of Conduct либо Terms of Service, но официальные материалы не подтверждают правило «сама продажа вызвала заморозку». Для вывода по конкретному случаю нужны формулировка уведомления и указанная в нём причина.",
    quickAnswerTitle: "Проверьте четыре разных статуса",
    quickAnswer:
      "Слово «заморожен» не описывает всё состояние аккаунта. Отдельно проверьте доступ к аккаунту, исполнение заказа, разблокировку и обработку выплаты, а также возможность вывести уже зачисленный баланс. Эти состояния различаются в материалах Grailed.",
    sections: [
      {
        id: "confirm-sale",
        title: "Сначала убедитесь, что продажа подтверждена в Grailed",
        blocks: [
          {
            type: "paragraph",
            text: "Официальная справка называет несколько записей: уведомление в приложении, сообщение GrailedBot с адресом покупателя, письмо от Grailed и заказ на странице Sold. До отправки товара сверьте продажу внутри Grailed, а не только по отдельному сообщению или письму. Такая сверка подтверждает транзакцию, но не объясняет причину ограничения.",
          },
        ],
      },
      {
        id: "item-status",
        title: "Начните с текущего состояния товара",
        blocks: [
          { type: "subheading", text: "Товар не отправлен или нет трекинга" },
          {
            type: "paragraph",
            text: "Для стандартной продажи Grailed требует отправить товар и добавить точный сквозной трекинг в течение семи календарных дней после покупки; иначе заказ может быть автоматически отменён, а покупателю вернут деньги. Для Expedited Delivery срок короче, но формулировки проверенных страниц расходятся, поэтому ориентируйтесь на срок, показанный в конкретном заказе.",
          },
          {
            type: "paragraph",
            text: "Это общее правило не отвечает на вопрос, что делать продавцу, если из-за ограничения недоступны адрес покупателя, Messages или элементы добавления трекинга. До решения по конкретной отправке подтвердите статус заказа, способ доставки, показанный срок, доступные элементы управления и инструкции Grailed. Не предполагайте, что при замороженном аккаунте обычный интерфейс работает как прежде.",
          },
          { type: "subheading", text: "Посылка уже в пути" },
          {
            type: "paragraph",
            text: "Сохраните подтверждение приёма перевозчиком и сквозной трекинг. Отдельно запишите, отображаются ли спор, расследование, отмена или сообщение о выплате. Факт отправки не определяет дату разблокировки денег.",
          },
          { type: "subheading", text: "Доставка подтверждена" },
          {
            type: "paragraph",
            text: "По обычному правилу Grailed средства продавца разблокируются в течение трёх календарных дней после того, как трекинг показывает доставку. Однако Grailed прямо называет исключения: спор покупателя, расследование платформы и удержание по требованию закона или регулятора. Это ориентир для состояния продажи, а не срок проверки замороженного аккаунта.",
          },
          {
            type: "subheading",
            text: "Есть спор, отмена, возврат или chargeback",
          },
          {
            type: "paragraph",
            text: "Ориентируйтесь на отображаемое дело, а не на обычный срок после доставки. Terms of Service отдельно рассматривают возвраты, chargeback, задолженность продавца и другие состояния баланса. Публичные правила не позволяют предсказать исход по товару, покупателю или выплате.",
          },
        ],
      },
      {
        id: "four-states",
        title: "Проверьте четыре разных статуса",
        blocks: [
          {
            type: "table",
            headers: [
              "Статус",
              "Что зафиксировать",
              "Какой вопрос он определяет",
            ],
            rows: [
              [
                "Доступ к аккаунту",
                "Вход, Messages, размещение и продажа, текст уведомления",
                "Какие функции недоступны и какое требование остаётся открытым?",
              ],
              [
                "Исполнение заказа",
                "Запись Sold, адрес, способ и срок доставки, трекинг, доставка, спор/отмена/возврат",
                "На каком этапе товар и доступны ли обычные элементы управления?",
              ],
              [
                "Разблокировка и обработка выплаты",
                "Ожидание доставки, удержание из-за спора/расследования/закона, release, processing",
                "Grailed уже разблокировал платёж или отображается другое условие?",
              ],
              [
                "Cash-out",
                "Баланс зачислен, но вывод недоступен; есть сообщение процессора или onboarding",
                "Это ограничение вывода или выплата по продаже ещё не разблокирована?",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Когда ветка заказа понятна, эта схема помогает не принять ограничение аккаунта за статус выплаты или cash-out.",
          },
        ],
      },
      {
        id: "read-notice",
        title: "Читайте уведомление, а не список предполагаемых причин",
        blocks: [
          {
            type: "paragraph",
            text: "Terms of Service допускают ограничение аккаунта или cash-out в разных ситуациях: запрошена проверка личности, данные аккаунта неточны или неполны, не завершён onboarding платёжного процессора, отсутствует требуемая налоговая информация, есть долг продавца, возврат или chargeback. Нарушение правил также может привести к мерам по аккаунту. Это не диагноз вашего случая. Проверяйте только условие, которое названо в уведомлении, аккаунте или переписке с Grailed.",
          },
          {
            type: "paragraph",
            text: "Если Grailed запросил проверку через Persona или удостоверение личности, совпадающее с юридическим именем аккаунта, используйте только подлинный официальный процесс и релевантные настоящие данные. Не отправляйте посторонние документы, пароль или коды входа.",
          },
        ],
      },
      {
        id: "money-timelines",
        title: "Не переносите один срок на другой процесс",
        blocks: [
          {
            type: "paragraph",
            text: "Последовательность выглядит так: подтверждённая продажа → отправка и трекинг → доставка или спор → решение о разблокировке → обработка → cash-out. Это порядок событий, а не обещанный календарь.",
          },
          {
            type: "paragraph",
            text: "Только после статуса release применимо опубликованное время обработки: два–три рабочих дня для продавцов в США и до десяти дополнительных рабочих дней для продавцов за пределами США. Эти сроки не относятся к апелляции, проверке заморозки или восстановлению аккаунта.",
          },
          {
            type: "paragraph",
            text: "Grailed также может задержать отправку денег, пока поддержка изучает вопрос, и обещает уведомить продавца, если платёж нужно удержать. Удержание выплаты, обработка платежа и запрет cash-out — разные состояния.",
          },
        ],
      },
      {
        id: "keep-timeline",
        title: "Соберите хронологию, а не универсальный пакет документов",
        blocks: [
          {
            type: "paragraph",
            text: "Сохраните уведомление и переписку, подтверждения продажи, номер заказа, адрес как он показан в Grailed, способ и срок доставки, трекинг, статус доставки/спора/отмены/возврата, сообщения о выплате и cash-out, а также только те данные аккаунта, которые Grailed действительно запросил.",
          },
          {
            type: "paragraph",
            text: "Grailed предлагает желающим обжаловать заморозку обратиться через официальный канал и приложить подтверждающие документы. Однако платформа не публикует единый список документов, срок ответа или критерий успеха для всех случаев.",
          },
        ],
      },
      {
        id: "official-route",
        title: "Отправьте один точный вопрос через официальный канал",
        blocks: [
          {
            type: "list",
            items: [
              "Аккаунт: приведите точный текст уведомления, перечислите доступные и недоступные функции и спросите, какое указанное требование остаётся открытым.",
              "Заказ: укажите подтверждённый заказ, состояние товара, срок на экране и конкретный недоступный элемент; запросите инструкцию именно по этому заказу.",
              "Выплата/cash-out: укажите доставку, спор или расследование, release/processing и доступность вывода; спросите, какой статус сейчас определяет деньги.",
            ],
          },
        ],
      },
      {
        id: "limits",
        title: "Чего нельзя определить по публичным правилам",
        blocks: [
          {
            type: "paragraph",
            text: "Нельзя подтвердить, что продажа вызвала заморозку; узнать, временно ли ограничение; назвать срок апелляции, вероятность восстановления, дату выплаты или исход по покупателю и товару. Обычные сроки обработки выплаты не отвечают на эти вопросы.",
          },
          {
            type: "note",
            text: "Resolution Hub не связан с Grailed и не обещает восстановление аккаунта, разблокировку выплаты, ускоренный ответ или благоприятный исход.",
          },
        ],
      },
    ],
    sources,
    visual: { id: "grailed-four-state-check", afterSectionId: "four-states" },
    ctaTitle: "Не уверены, что делать дальше?",
    ctaText:
      "Опишите, что произошло, и при необходимости покажите отредактированную копию сообщения без личных данных. Это платная консультация; стоимость согласуется в Telegram до начала работы. Никогда не отправляйте пароль или код входа.",
    reviewedAt: "2026-07-17",
  },
  uk: {
    title:
      "Акаунт Grailed заморожено після продажу: окремо перевірте замовлення, виплату й доступ",
    metaTitle: "Grailed заморозив акаунт після продажу: що перевірити",
    metaDescription:
      "Якщо Grailed заморозив акаунт після продажу, окремо перевірте замовлення, доступ, розблокування виплати й виведення коштів.",
    intro:
      "Продаж і замороження могли збігтися в часі. Grailed пояснює, що акаунт може бути заморожено через підозру в порушенні або фактичне порушення Code of Conduct чи Terms of Service, але офіційні матеріали не підтверджують, що сам продаж спричиняє замороження. Для висновку щодо конкретної справи потрібні повідомлення Grailed та зазначена в ньому підстава.",
    quickAnswerTitle: "Перевірте чотири окремі стани",
    quickAnswer:
      "Слово «заморожено» не визначає, що саме сталося. Перевіряйте чотири окремі площини: доступ до акаунта, виконання продажу, розблокування й обробку виплати, а також cash-out уже зарахованого балансу.",
    sections: [
      {
        id: "confirm-sale",
        title: "Спочатку перевірте, що продаж підтверджено в Grailed",
        blocks: [
          {
            type: "paragraph",
            text: "Grailed називає сукупність власних записів: сповіщення у застосунку, повідомлення GrailedBot з адресою покупця, лист від Grailed і запис на сторінці Sold. Перед відправленням звірте транзакцію всередині Grailed, а не покладайтеся лише на окремий лист чи повідомлення. Це підтверджує продаж, але не встановлює причину обмеження.",
          },
        ],
      },
      {
        id: "item-status",
        title: "Почніть із поточного стану товару",
        blocks: [
          {
            type: "subheading",
            text: "Товар не відправлено або трекінгу немає",
          },
          {
            type: "paragraph",
            text: "За звичайного продажу Grailed вимагає відправити товар і додати точний наскрізний трекінг протягом семи календарних днів після покупки. Інакше замовлення може бути автоматично скасовано, а покупцеві повернуть кошти.",
          },
          {
            type: "paragraph",
            text: "Для Expedited Delivery строк коротший, однак формулювання перевірених сторінок не повністю узгоджені, тому використовуйте строк, показаний у конкретному замовленні.",
          },
          {
            type: "paragraph",
            text: "Загальне правило не пояснює, як діяти, коли через замороження недоступні адреса покупця, Messages або керування трекінгом. Перед рішенням щодо відправлення перевірте стан продажу, спосіб доставки, строк на екрані, доступ до адреси й трекінгу та інструкцію Grailed. Не припускайте, що звичайні елементи керування залишилися доступними.",
          },
          { type: "subheading", text: "Посилка вже в дорозі" },
          {
            type: "paragraph",
            text: "Збережіть підтвердження приймання перевізником і наскрізний трекінг. Окремо зафіксуйте спір, розслідування, скасування чи повідомлення про виплату, якщо вони відображаються. Відправлення не встановлює дату розблокування коштів.",
          },
          { type: "subheading", text: "Товар доставлено" },
          {
            type: "paragraph",
            text: "За звичайним правилом Grailed кошти продавця розблоковують протягом трьох календарних днів після того, як трекінг показує доставку. Водночас офіційно названо винятки: спір покупця, розслідування Grailed та утримання, потрібне за законом або вимогою регулятора. Це орієнтир для стану продажу, а не строк розгляду замороженого акаунта.",
          },
          {
            type: "subheading",
            text: "Є спір, скасування, повернення або chargeback",
          },
          {
            type: "paragraph",
            text: "Орієнтуйтеся на показаний стан справи, а не на звичайне правило після доставки. Terms of Service окремо розглядають повернення, chargeback, борг продавця та інші умови балансу. Публічні правила не дають змоги передбачити результат для товару, покупця чи виплати.",
          },
        ],
      },
      {
        id: "four-states",
        title: "Перевірте чотири окремі стани",
        blocks: [
          {
            type: "table",
            headers: ["Стан", "Що зафіксувати", "Яке питання він визначає"],
            rows: [
              [
                "Акаунт",
                "Вхід, Messages, лістинги/продажі, текст повідомлення",
                "Які функції обмежено і яка вимога з повідомлення не виконана?",
              ],
              [
                "Виконання продажу",
                "Sold, адреса, спосіб і строк доставки, трекінг, доставка, спір/скасування/повернення",
                "Де зараз товар і чи доступне звичайне керування транзакцією?",
              ],
              [
                "Розблокування/обробка виплати",
                "Очікує доставки, утримується через спір/розслідування/закон, released, processing",
                "Grailed уже розблокував платіж чи діє інша умова?",
              ],
              [
                "Cash-out",
                "Баланс зараховано, але виведення недоступне; повідомлення процесора/onboarding",
                "Це обмеження cash-out чи виплату ще не розблоковано?",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Коли стан замовлення вже визначено, ця схема допомагає не сплутати обмеження акаунта зі станом виплати чи cash-out.",
          },
        ],
      },
      {
        id: "read-notice",
        title: "Зіставляйте повідомлення з акаунтом, не вгадуйте причину",
        blocks: [
          {
            type: "paragraph",
            text: "Terms of Service допускають обмеження за різних умов: запитана перевірка особи, неточні або неповні дані, незавершений onboarding платіжного процесора, відсутня потрібна податкова інформація, борг продавця, повернення або chargeback. Порушення правил також може призвести до заходів щодо акаунта. Це можливі положення політики, а не діагноз вашої справи. Перевіряйте пункт лише тоді, коли його названо в повідомленні, акаунті чи листуванні.",
          },
          {
            type: "paragraph",
            text: "Якщо Grailed просить пройти перевірку через Persona або надати державне посвідчення особи, ім’я в якому збігається з юридичним ім’ям акаунта, використовуйте справжній офіційний процес і лише релевантні достовірні дані. Не передавайте сторонні документи, пароль чи коди автентифікації.",
          },
        ],
      },
      {
        id: "money-timelines",
        title: "Для кожного процесу — свій часовий орієнтир",
        blocks: [
          {
            type: "paragraph",
            text: "Послідовність подій: підтверджений продаж → виконання і трекінг → доставка або спір → рішення про release → processing → cash-out. Це не календар із гарантованими датами.",
          },
          {
            type: "paragraph",
            text: "Лише після позначки про release застосовуються оприлюднені строки обробки: два–три робочі дні для продавців у США та до десяти додаткових робочих днів для продавців поза США. Вони не є строками апеляції, перевірки замороження чи відновлення.",
          },
          {
            type: "paragraph",
            text: "Grailed може затримати надсилання коштів, поки підтримка досліджує проблему, і повідомляє продавця, якщо платіж потрібно утримати. Утримана виплата, платіж у processing і недоступний cash-out — не одне й те саме.",
          },
        ],
      },
      {
        id: "keep-timeline",
        title: "Збережіть хронологію, а не універсальний пакет для апеляції",
        blocks: [
          {
            type: "paragraph",
            text: "Зберіть повідомлення про замороження та листування, підтвердження продажу, номер замовлення, показану адресу, спосіб і строк доставки, дані перевізника й трекінг, стан доставки/спору/скасування/повернення, повідомлення про виплату й cash-out та лише ті облікові дані, які Grailed справді запросив.",
          },
          {
            type: "paragraph",
            text: "Grailed спрямовує користувача, який хоче оскаржити замороження, до офіційного звернення з підтвердними документами. Платформа не публікує єдиного списку документів, строку відповіді або критерію успіху для всіх справ.",
          },
        ],
      },
      {
        id: "official-route",
        title: "Поставте одне точне питання через офіційний канал",
        blocks: [
          {
            type: "list",
            items: [
              "Акаунт: процитуйте повідомлення, назвіть доступні й недоступні функції та запитайте, яка вказана вимога залишається відкритою.",
              "Продаж: укажіть підтверджене замовлення, стан товару, строк на екрані та конкретний недоступний елемент; попросіть інструкцію для цього замовлення.",
              "Виплата/cash-out: укажіть доставку, спір або розслідування, release/processing і доступність виведення; запитайте, який стан зараз контролює кошти.",
            ],
          },
        ],
      },
      {
        id: "limits",
        title: "Чого ця перевірка не визначить",
        blocks: [
          {
            type: "paragraph",
            text: "Публічні джерела не підтверджують, що продаж спричинив замороження; не визначають, чи обмеження тимчасове; не дають строку апеляції, імовірності відновлення, дати виплати або прогнозу щодо покупця й товару. Звичайні строки обробки виплат не відповідають на ці питання.",
          },
          {
            type: "note",
            text: "Resolution Hub не пов’язаний із Grailed і не гарантує відновлення, release виплати, швидшу відповідь або сприятливий результат.",
          },
        ],
      },
    ],
    sources,
    visual: { id: "grailed-four-state-check", afterSectionId: "four-states" },
    ctaTitle: "Не впевнені, що робити далі?",
    ctaText:
      "Опишіть, що сталося, і за потреби покажіть відредаговану копію повідомлення без особистих даних. Це платна консультація; вартість узгоджується в Telegram до початку роботи. Ніколи не надсилайте пароль або код входу.",
    reviewedAt: "2026-07-17",
  },
};
