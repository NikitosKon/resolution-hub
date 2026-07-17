import type { V4LocalizedArticle } from "./types";

const sources = [
  "https://www.paypal.com/ua/legalhub/paypal/useragreement-full?country.x=UA&locale.x=en_UA",
  "https://www.paypal.com/us/legalhub/paypal/useragreement-full?locale.x=en-US",
  "https://www.paypal.com/c2/legalhub/paypal/useragreement-full?locale.x=en_C2",
  "https://www.paypal.com/us/cshelp/article/how-do-i-remove-a-limitation-from-my-account-help535",
  "https://www.paypal.com/ua/cshelp/article/%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8-%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D1%83%D0%B5%D1%82%D1%81%D1%8F-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-%D1%81%D0%BD%D1%8F%D1%82%D1%8C-%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-%D0%BC%D0%BE%D0%B5%D0%B3%D0%BE-%D1%81%D1%87%D0%B5%D1%82%D0%B0-paypal-help531",
  "https://www.paypal.com/c2/cshelp/article/what-is-the-resolution-center-help246?locale.x=en_C2",
  "https://www.paypal.com/us/cshelp/article/what-does-the-status-of-my-payment-or-money-request-mean-on-my-paypal-account-help668",
  "https://securepayments.paypal.com/us/cshelp/article/how-can-i-release-my-payments-on-hold-help129",
];

export const fundsHeld180DaysV4: V4LocalizedArticle = {
  en: {
    title:
      "PayPal funds held for up to 180 days: what the notice means and what to check next",
    metaTitle: "PayPal Funds Held for 180 Days: What to Check",
    metaDescription:
      "See what a PayPal 180-day hold may mean, which account market and notice date matter, and what to check if the shown date has passed.",
    intro:
      "“Up to 180 days” is not a universal PayPal deadline, and day 180 is not a documented global promise that every balance will be released automatically. The wording depends on the agreement governing the registered account.",
    quickAnswerTitle: "What the notice means",
    quickAnswer:
      "The current US agreement expressly uses “up to 180 days” for specified risk- or Acceptable Use Policy-related holds. The reviewed Ukraine and PayPal Pte. Ltd. agreements do not support treating 180 days as the same universal maximum. All three allow some holds to continue longer where a court order, regulatory requirement, or other legal process applies. Treat the date in your own PayPal notice as a checkpoint. First identify the type of restriction, the market in which the account is registered, the event attached to the date, and what the account shows now. None of those checks guarantees release, a final amount, a withdrawal method, or a transfer time.",
    sections: [
      {
        id: "hold-type",
        title: "Identify the type of hold before using a timeline",
        blocks: [
          {
            type: "paragraph",
            text: "A long account restriction can affect sending or withdrawing money. PayPal directs users to the account notice, dashboard instructions, or Resolution Centre for the steps and status that apply to that account. Public guidance cannot identify PayPal’s internal reason from a generic “held” label.",
          },
          { type: "paragraph", text: "These states are different:" },
          {
            type: "table",
            headers: [
              "What you see",
              "What it may describe",
              "Why the distinction matters",
            ],
            rows: [
              [
                "Account limitation or long balance restriction",
                "Account functions or part of the balance remain restricted",
                "This is the branch for a long-hold notice",
              ],
              [
                "Payment “On hold,” “Held,” or “Temporary hold”",
                "A transaction-level status; exact labels vary by market",
                "Seller-payment guidance may apply only to that payment",
              ],
              [
                "Reserve",
                "Money retained under a separate reserve mechanism",
                "It is not automatically the same as a long account restriction",
              ],
              [
                "Dispute, reversal, chargeback, or negative balance",
                "A separate liability affecting the balance",
                "It may change what ultimately becomes unrestricted",
              ],
              [
                "Pending or interrupted withdrawal",
                "A transfer has its own status",
                "Availability and transfer completion are different events",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "PayPal’s ordinary seller-payment-hold rules are a separate mechanism. The reviewed Ukraine agreement describes certain risk-based payment holds as generally up to 30 days unless there is reason to continue; a US help page describes narrow tracking or order-status steps for certain eligible seller payments and mentions a possible hold of up to 21 days in rare cases. Neither is a release procedure for a long account-level restriction.",
          },
          {
            type: "paragraph",
            text: "After naming the mechanism, the next question is which agreement governs the registered account; without that, the timeline language may belong to a different market.",
          },
        ],
      },
      {
        id: "governing-agreement",
        title: "Match the account to the governing agreement",
        blocks: [
          {
            type: "paragraph",
            text: "Page language and current physical location do not establish the account’s legal market. Check the country/region registered on the account and the legal agreement linked for that account before applying any timing language.",
          },
          {
            type: "table",
            headers: [
              "Agreement reviewed",
              "What the official wording supports",
              "What it does not support",
            ],
            rows: [
              [
                "United States",
                "Specified balances may be held for up to 180 days where reasonably needed for liability risk or after an AUP violation; listed legal processes may extend the hold",
                "A promise that every hold lasts 180 days or releases automatically on day 180",
              ],
              [
                "Ukraine",
                "Risk- or AUP-related balance holds are permitted; legal processes may keep a hold in place longer than 180 days",
                "A universal 180-day maximum or automatic release date",
              ],
              [
                "PayPal Pte. Ltd. markets",
                "Materially similar risk/AUP and legal-process wording, with country availability varying",
                "Permission to apply one rule to every country served by PayPal Pte. Ltd.",
              ],
            ],
          },
        ],
      },
      {
        id: "date-event",
        title: "Use the date and event in the notice",
        blocks: [
          {
            type: "paragraph",
            text: "There is no verified universal rule telling every reader to count from account closure, the limitation date, the last transaction, or another assumed event. Do not build a countdown from a date PayPal did not identify.",
          },
          { type: "paragraph", text: "Record five fields exactly as shown:" },
          {
            type: "list",
            items: [
              "the notice wording and status label;",
              "the notice date;",
              "the event from which PayPal says any period runs, if one is named;",
              "any displayed eligibility or availability date;",
              "today’s balance and withdrawal status.",
            ],
          },
          {
            type: "paragraph",
            text: "“180 days” can describe a permitted holding period in a defined market and context. It does not establish the exact cause, an automatic release event, the final withdrawable amount, or when money will reach a bank or card.",
          },
        ],
      },
      {
        id: "date-passed",
        title: "If the date in your notice has passed",
        blocks: [
          {
            type: "paragraph",
            text: "Compare the current state before choosing a route:",
          },
          {
            type: "table",
            headers: [
              "Current account state",
              "What it establishes",
              "Next factual check",
            ],
            rows: [
              [
                "Balance is still restricted or a limitation task remains",
                "A displayed account restriction or task remains open",
                "Compare the notice with the Resolution Centre and ask which requirement or status remains open",
              ],
              [
                "A dispute, reserve, reversal, chargeback, negative balance, or other liability appears",
                "Another balance-affecting state exists",
                "Use the matching case/status route; do not predict the final balance",
              ],
              [
                "Balance is unrestricted or available",
                "Availability changed",
                "Check whether a withdrawal must be started and which logged-in methods are actually offered",
              ],
              [
                "Withdrawal is pending or was interrupted",
                "A separate transfer state exists",
                "Follow the account- and market-specific withdrawal status; do not assume a universal completion time",
              ],
              [
                "Balance is available but there is no usable withdrawal route",
                "The long-hold question may have ended, while a withdrawal problem remains",
                "Treat it as a separate withdrawal-availability issue",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Under the reviewed Ukraine agreement, a pending withdrawal affected by a limitation or payment hold has to be reinitiated after the restriction is lifted. That wording is Ukraine-specific and should not be projected onto every market. Available methods are shown after login and depend on the registered country or region.",
          },
        ],
      },
      {
        id: "shortcuts",
        title: "Three shortcuts that do not prove release",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Adding tracking or updating an order may help with an eligible transaction-level seller hold; it does not establish release of a long account-level balance restriction.",
              "Completing every visible Resolution Centre task means those steps were submitted, not necessarily that review is finished or the long-held balance is available. The Ukraine help page’s usual three-business-day review wording concerns review after limitation steps, not release after 180 days.",
              "Contacting PayPal is the appropriate route for an account-specific status question, but no reviewed official source promises that contact will accelerate release or reverse the restriction.",
            ],
          },
        ],
      },
      {
        id: "account-evidence",
        title: "Put the account evidence in one place",
        blocks: [
          {
            type: "paragraph",
            text: "Keep the registered-account market, governing agreement, exact notice, named date/event, current balance label, Resolution Centre tasks, visible disputes/reserves/negative balance, and withdrawal messages together. Preserve authentic records, but do not share passwords, authentication codes, or unnecessary personal information.",
          },
          {
            type: "paragraph",
            text: "Public sources stop short of identifying the exact internal cause, end date, final unrestricted amount, withdrawal rail, or case-specific outcome. Those answers depend on the logged-in account and PayPal’s account-specific response.",
          },
          {
            type: "note",
            text: "Resolution Hub is not affiliated with PayPal. An individual review does not promise release, restoration, faster handling, or a successful withdrawal.",
          },
        ],
      },
    ],
    sources,
    visual: {
      id: "paypal-long-hold-state-check",
      afterSectionId: "date-event",
    },
    ctaTitle: "Still not sure what to do?",
    ctaText:
      "Tell us what happened and, if useful, share a redacted copy of the message you received. This is a paid consultation; pricing is agreed in Telegram before work begins. Never send a password or login code.",
    reviewedAt: "2026-07-17",
  },
  ru: {
    title:
      "PayPal удерживает средства до 180 дней: как читать уведомление и что сверить",
    metaTitle: "PayPal удерживает деньги 180 дней: что проверить",
    metaDescription:
      "Разберитесь, что означает удержание PayPal на 180 дней, почему важны рынок аккаунта и дата в уведомлении и что проверить после этой даты.",
    intro:
      "Фраза «до 180 дней» не означает единый срок для всех аккаунтов PayPal. Она также не подтверждает, что на 180-й день весь баланс разблокируется автоматически. В действующем соглашении для США такой период прямо указан для определённых удержаний, связанных с риском ответственности или нарушением Acceptable Use Policy. Проверенные соглашения для Украины и рынков PayPal Pte. Ltd. не дают оснований считать 180 дней одинаковым максимальным сроком для всех случаев. Кроме того, юридические и регуляторные процессы могут продлить удержание.",
    quickAnswerTitle: "Что означает уведомление",
    quickAnswer:
      "Дата из вашего уведомления — это точка проверки, а не обещанная дата выплаты. Сначала нужно установить четыре факта: что именно ограничено, в какой стране зарегистрирован аккаунт, к какому событию PayPal привязал дату и какой статус виден сейчас. Эти сведения не гарантируют итоговую сумму, способ вывода или срок зачисления.",
    sections: [
      {
        id: "hold-type",
        title: "Сначала определите тип ограничения",
        blocks: [
          {
            type: "paragraph",
            text: "Ограничение аккаунта может затрагивать отправку или вывод денег. Конкретные требования и состояние дела PayPal предлагает смотреть в уведомлении, на панели аккаунта или в Resolution Centre. По одному слову «удержано» нельзя достоверно определить внутреннюю причину.",
          },
          { type: "paragraph", text: "Не смешивайте разные состояния:" },
          {
            type: "table",
            headers: [
              "Что отображается",
              "О чём это может говорить",
              "Почему это важно",
            ],
            rows: [
              [
                "Ограничение аккаунта или длительное ограничение баланса",
                "Недоступны функции аккаунта или часть средств",
                "Именно к этой ветке относится уведомление о длительном удержании",
              ],
              [
                "Удержание отдельного платежа",
                "Статус конкретной транзакции",
                "Для него могут действовать другие правила продавца",
              ],
              [
                "Резерв",
                "Средства удерживаются отдельным механизмом",
                "Резерв нельзя автоматически считать ограничением всего аккаунта",
              ],
              [
                "Спор, возвратный платёж, списание или отрицательный баланс",
                "Есть отдельное обязательство по балансу",
                "Оно может повлиять на доступную сумму",
              ],
              [
                "Ожидающий или прерванный вывод",
                "Перевод находится в отдельном состоянии",
                "Доступность средств и завершение вывода — не одно событие",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Обычное удержание платежа продавца не равно длительному ограничению баланса. Соглашение для Украины описывает отдельные риск-ориентированные удержания платежей как обычно продолжающиеся до 30 дней, если нет оснований удерживать их дальше. Американская справка содержит узкие действия с трекингом или статусом заказа для некоторых платежей и упоминает до 21 дня в редких случаях. Эти правила не являются способом снять долгосрочное ограничение аккаунта.",
          },
          {
            type: "paragraph",
            text: "После определения механизма проверьте применимое соглашение: без рынка регистрации срок может относиться к другому аккаунту и другому контексту.",
          },
        ],
      },
      {
        id: "governing-agreement",
        title: "Проверьте, какое соглашение применяется к аккаунту",
        blocks: [
          {
            type: "paragraph",
            text: "Язык страницы и ваше нынешнее местонахождение не определяют рынок аккаунта. Нужны страна или регион регистрации и юридическое соглашение, доступное для этого аккаунта.",
          },
          {
            type: "table",
            headers: [
              "Проверенный рынок",
              "Что подтверждено официальным текстом",
              "Чего текст не обещает",
            ],
            rows: [
              [
                "США",
                "В определённом контексте средства могут удерживаться до 180 дней; указанные юридические процессы способны продлить срок",
                "Что каждый случай длится ровно 180 дней и завершается автоматической разблокировкой",
              ],
              [
                "Украина",
                "Допускаются удержания из-за риска или AUP; юридические процессы могут оставить удержание дольше 180 дней",
                "Универсальный максимум и автоматическую дату вывода",
              ],
              [
                "Рынки PayPal Pte. Ltd.",
                "Есть сходные положения о риске, AUP и юридических процессах; доступность услуг зависит от страны",
                "Одно правило для всех стран, обслуживаемых компанией",
              ],
            ],
          },
        ],
      },
      {
        id: "date-event",
        title: "Не придумывайте дату начала отсчёта",
        blocks: [
          {
            type: "paragraph",
            text: "Не найдено универсального официального правила, по которому 180 дней всегда считаются от закрытия аккаунта, даты ограничения, последней транзакции или другого одинакового события. Используйте только событие, прямо названное PayPal в вашем уведомлении.",
          },
          { type: "paragraph", text: "Сохраните пять точных деталей:" },
          {
            type: "list",
            items: [
              "формулировку уведомления и название статуса;",
              "дату уведомления;",
              "событие, от которого PayPal предлагает считать период, если оно указано;",
              "показанную дату доступности, если она есть;",
              "текущий статус баланса и вывода.",
            ],
          },
          {
            type: "paragraph",
            text: "Упоминание 180 дней может описывать допустимый период удержания в конкретном рынке и контексте. Оно не раскрывает точную причину, не гарантирует сумму и не подтверждает дату поступления денег на карту или банковский счёт.",
          },
        ],
      },
      {
        id: "date-passed",
        title: "Если дата из уведомления уже прошла",
        blocks: [
          {
            type: "table",
            headers: [
              "Что видно сейчас",
              "Что это подтверждает",
              "Что проверить дальше",
            ],
            rows: [
              [
                "Баланс всё ещё ограничен или осталось задание в Resolution Centre",
                "В аккаунте всё ещё отображается ограничение или открытое задание",
                "Сверить уведомление и Resolution Centre, затем уточнить, какое требование или состояние остаётся открытым",
              ],
              [
                "Видны спор, резерв, возвратный платёж, списание либо отрицательный баланс",
                "Есть отдельное состояние, влияющее на баланс",
                "Перейти к соответствующему делу или статусу, не предсказывая итоговую сумму",
              ],
              [
                "Средства отмечены как доступные",
                "Статус доступности изменился",
                "Проверить, нужно ли заново начать вывод и какие способы реально доступны после входа",
              ],
              [
                "Вывод ожидается или был прерван",
                "Отдельно остаётся вопрос перевода",
                "Следовать статусу вывода для своего рынка, не назначая универсальный срок",
              ],
              [
                "Баланс доступен, но вывести его нельзя",
                "Длительное удержание, возможно, уже не главный вопрос",
                "Рассматривать это как отдельную проблему доступности вывода",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "В соглашении для Украины указано, что прерванный ограничением или удержанием вывод нужно инициировать заново после снятия ограничения. Это правило нельзя без проверки переносить на другие рынки. Доступные способы вывода зависят от региона регистрации и видны в аккаунте.",
          },
        ],
      },
      {
        id: "shortcuts",
        title: "Что не доказывает разблокировку средств",
        blocks: [
          {
            type: "list",
            items: [
              "Трекинг и обновление заказа относятся к некоторым удержаниям отдельных платежей, а не к долгому ограничению баланса аккаунта.",
              "Выполненные задания в Resolution Centre ещё не доказывают, что проверка завершена и деньги стали доступны. Упоминание обычной проверки за три рабочих дня в справке PayPal UA относится к проверке после выполнения шагов, а не к выплате по истечении 180 дней.",
              "Обращение в PayPal позволяет задать вопрос по конкретному аккаунту, но официальные источники не обещают, что оно ускорит разблокировку или отменит ограничение.",
            ],
          },
        ],
      },
      {
        id: "account-evidence",
        title: "Соберите данные об аккаунте в одном месте",
        blocks: [
          {
            type: "paragraph",
            text: "Сведите вместе рынок регистрации, применимое соглашение, уведомление, названные дату и событие, статус баланса, задания Resolution Centre, видимые споры/резервы/отрицательный баланс и сообщения о выводе. Не передавайте пароль, коды входа и лишние персональные данные.",
          },
          {
            type: "paragraph",
            text: "По публичным материалам нельзя определить внутреннюю причину, точную дату окончания, окончательную доступную сумму, подходящий способ вывода или исход конкретного дела. Для этого нужны данные аккаунта и ответ PayPal по вашему случаю.",
          },
          {
            type: "note",
            text: "Resolution Hub не связан с PayPal. Индивидуальный разбор не обещает разблокировку, восстановление аккаунта, ускорение проверки или успешный вывод.",
          },
        ],
      },
    ],
    sources,
    visual: {
      id: "paypal-long-hold-state-check",
      afterSectionId: "date-event",
    },
    ctaTitle: "Не уверены, что делать дальше?",
    ctaText:
      "Опишите, что произошло, и при необходимости покажите отредактированную копию сообщения без личных данных. Это платная консультация; стоимость согласуется в Telegram до начала работы. Никогда не отправляйте пароль или код входа.",
    reviewedAt: "2026-07-17",
  },
  uk: {
    title:
      "PayPal утримує кошти до 180 днів: як зрозуміти повідомлення і що перевірити",
    metaTitle: "PayPal утримує гроші 180 днів: що перевірити",
    metaDescription:
      "Розберіться, що означає утримання PayPal на 180 днів, чому важливі ринок акаунта й дата в повідомленні та що перевірити далі.",
    intro:
      "«До 180 днів» — не єдиний строк для всіх акаунтів PayPal і не підтверджена глобальна обіцянка автоматично відкрити весь баланс на 180-й день.",
    quickAnswerTitle: "Що означає повідомлення",
    quickAnswer:
      "Чинна угода для США прямо містить такий період для визначених утримань через ризик відповідальності або порушення Acceptable Use Policy. Перевірені угоди для України та ринків PayPal Pte. Ltd. не дозволяють називати 180 днів однаковою максимальною межею для кожного випадку. Судові, регуляторні та інші юридичні процеси можуть подовжити утримання. Дата у вашому повідомленні — це момент для перевірки статусу, а не гарантована дата виплати. Спочатку з’ясуйте механізм, ринок реєстрації акаунта, подію, до якої прив’язано дату, і теперішній стан балансу та виведення. Жоден із цих пунктів не гарантує остаточну суму, спосіб виведення чи строк переказу.",
    sections: [
      {
        id: "hold-type",
        title: "Визначте, що саме обмежено",
        blocks: [
          {
            type: "paragraph",
            text: "Обмеження акаунта може забороняти надсилання чи виведення грошей. PayPal спрямовує користувача до повідомлення, підказок в акаунті або Resolution Centre, де зазначено актуальні для цього акаунта дії. Загальна позначка про утримання не розкриває внутрішню причину.",
          },
          {
            type: "table",
            headers: [
              "Позначка в акаунті",
              "Ймовірний тип стану",
              "Чому їх не можна змішувати",
            ],
            rows: [
              [
                "Обмеження акаунта або тривале обмеження балансу",
                "Недоступні певні функції чи кошти",
                "Це основна гілка для повідомлення про тривале утримання",
              ],
              [
                "Утримання окремого платежу",
                "Статус конкретної транзакції",
                "Для нього можуть діяти окремі правила продавця",
              ],
              [
                "Резерв",
                "Самостійний механізм утримання",
                "Він не тотожний довгому обмеженню всього акаунта",
              ],
              [
                "Спір, повернення платежу, списання чи від’ємний баланс",
                "Окреме зобов’язання впливає на суму",
                "Остаточно доступний залишок може змінитися",
              ],
              [
                "Очікуване або перерване виведення",
                "Переказ має власний статус",
                "Доступність коштів не дорівнює завершеному переказу",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Звичайне утримання платежу продавця — інший механізм. В угоді для України окремі ризик-орієнтовані утримання платежів описано як такі, що зазвичай тривають до 30 днів, якщо немає підстав продовжити строк. Довідка для США містить вузькі дії з трекінгом або статусом замовлення для певних платежів і згадує до 21 дня в рідкісних випадках. Це не інструкція для зняття тривалого обмеження акаунта.",
          },
          {
            type: "paragraph",
            text: "Після визначення механізму перевірте чинну угоду: без ринку реєстрації часовий орієнтир може стосуватися іншого акаунта й контексту.",
          },
        ],
      },
      {
        id: "governing-agreement",
        title: "Зіставте акаунт із чинною угодою",
        blocks: [
          {
            type: "paragraph",
            text: "Мова сторінки та ваше місцеперебування не визначають юридичний ринок акаунта. Перевірте країну або регіон реєстрації та угоду, доступну саме для цього акаунта.",
          },
          {
            type: "table",
            headers: [
              "Перевірена угода",
              "Що підтверджує офіційний текст",
              "Чого він не обіцяє",
            ],
            rows: [
              [
                "США",
                "За визначених умов кошти можуть утримувати до 180 днів; зазначені юридичні процеси здатні подовжити строк",
                "Що кожне утримання триває 180 днів і закінчується автоматичним відкриттям балансу",
              ],
              [
                "Україна",
                "Дозволені утримання через ризик або AUP; юридичні процеси можуть залишити утримання довше 180 днів",
                "Універсальну максимальну межу та автоматичну дату виплати",
              ],
              [
                "Ринки PayPal Pte. Ltd.",
                "Є подібні положення про ризик, AUP і юридичні процеси; доступність сервісів залежить від країни",
                "Одне правило для всіх країн у цій групі",
              ],
            ],
          },
        ],
      },
      {
        id: "date-event",
        title: "Не обирайте початкову дату навмання",
        blocks: [
          {
            type: "paragraph",
            text: "Немає підтвердженого універсального правила, за яким 180 днів завжди рахують від закриття акаунта, дня обмеження, останньої транзакції чи іншої однакової події. Спирайтеся лише на подію, яку PayPal прямо вказав у вашому повідомленні.",
          },
          { type: "paragraph", text: "Занотуйте:" },
          {
            type: "list",
            items: [
              "точний текст повідомлення та назву статусу;",
              "дату повідомлення;",
              "названу PayPal початкову подію, якщо вона є;",
              "показану дату доступності, якщо її зазначено;",
              "поточний стан балансу та виведення.",
            ],
          },
          {
            type: "paragraph",
            text: "Згадка про 180 днів може позначати дозволений період у конкретному ринку й контексті. Вона не встановлює причину, гарантовану суму чи дату надходження на картку або рахунок.",
          },
        ],
      },
      {
        id: "date-passed",
        title: "Якщо дата з повідомлення вже минула",
        blocks: [
          {
            type: "table",
            headers: [
              "Що показує акаунт",
              "Що вже відомо",
              "Наступна фактична перевірка",
            ],
            rows: [
              [
                "Баланс обмежено або завдання в Resolution Centre не закрито",
                "В акаунті ще відображається обмеження або відкрите завдання",
                "Зіставити повідомлення з Resolution Centre та уточнити, яка вимога чи перевірка відкрита",
              ],
              [
                "Є спір, резерв, повернення платежу, списання або від’ємний баланс",
                "Існує окремий стан, що впливає на баланс",
                "Відкрити відповідну справу чи статус, не прогнозуючи суму",
              ],
              [
                "Кошти позначено доступними",
                "Доступність змінилася",
                "Перевірити, чи треба почати виведення заново і які способи запропоновані після входу",
              ],
              [
                "Виведення очікується або перерване",
                "Переказ має окрему проблему",
                "Дотримуватися статусу для свого акаунта й ринку без універсального строку",
              ],
              [
                "Баланс доступний, але немає придатного способу виведення",
                "Тривале утримання може бути вже не головним питанням",
                "Розглядати це як окрему недоступність виведення",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Для української угоди підтверджено: якщо обмеження або утримання перервало очікуване виведення, після зняття обмеження його потрібно ініціювати повторно. Це не глобальне правило для кожного ринку. Способи виведення залежать від регіону реєстрації та відображаються в акаунті.",
          },
        ],
      },
      {
        id: "shortcuts",
        title: "Три дії, які ще не доводять доступність коштів",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Додавання трекінгу чи оновлення замовлення може стосуватися утримання окремого платежу, але не довгого обмеження балансу.",
              "Виконання завдань у Resolution Centre не означає автоматичного завершення перевірки або відкриття балансу. Згаданий у довідці PayPal UA звичайний триденний розгляд стосується перевірки після виконаних кроків, а не виплати після 180 днів.",
              "Звернення до PayPal дає змогу поставити питання про свій акаунт, але перевірені джерела не обіцяють прискорення чи скасування обмеження.",
            ],
          },
        ],
      },
      {
        id: "account-evidence",
        title: "Зберіть дані про стан акаунта в одному місці",
        blocks: [
          {
            type: "paragraph",
            text: "Зберіть разом ринок реєстрації, чинну угоду, точний текст повідомлення, названі дату й подію, позначку балансу, завдання Resolution Centre, видимі спори/резерви/від’ємний баланс і повідомлення про виведення. Не передавайте паролі, коди автентифікації та зайві персональні відомості.",
          },
          {
            type: "paragraph",
            text: "Публічні джерела не визначають внутрішню причину, кінцеву дату, остаточну доступну суму, придатний канал виведення чи результат окремої справи. Це можна з’ясувати лише з даних акаунта та відповіді PayPal щодо конкретного випадку.",
          },
          {
            type: "note",
            text: "Resolution Hub не пов’язаний із PayPal. Індивідуальний розбір не гарантує розблокування, відновлення акаунта, швидший розгляд або успішне виведення.",
          },
        ],
      },
    ],
    sources,
    visual: {
      id: "paypal-long-hold-state-check",
      afterSectionId: "date-event",
    },
    ctaTitle: "Не впевнені, що робити далі?",
    ctaText:
      "Опишіть, що сталося, і за потреби покажіть відредаговану копію повідомлення без особистих даних. Це платна консультація; вартість узгоджується в Telegram до початку роботи. Ніколи не надсилайте пароль або код входу.",
    reviewedAt: "2026-07-17",
  },
};
