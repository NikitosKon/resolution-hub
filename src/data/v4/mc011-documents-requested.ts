import type { V4LocalizedArticle } from "./types";

const sources = [
  "https://www.ebay.com/help/default/default/account-holds-restrictions-suspensions?id=4190",
  "https://www.ebay.co.uk/help/account/account-restrictions-suspensions/account-restrictions-suspensions?id=4190",
  "https://www.ebay.com/help/account/account-safety/spoof-emails-websites?id=4195",
  "https://www.ebay.co.jp/info/announcement-190305/article212",
  "https://www.ebay.co.uk/help/selling/getting-paid/registering-sellers?id=4792",
  "https://www.ebay.com/help/selling/selling/seller-registration?id=4792",
];

export const mc011DocumentsRequestedV4: V4LocalizedArticle = {
  en: {
    title:
      "eBay MC011 documents requested: prepare from the notice, not a generic list",
    metaTitle: "eBay MC011 Documents Requested: What to Prepare",
    metaDescription:
      "Received an eBay MC011 document request? Verify it in eBay Messages, follow the market-specific notice, and match each request to genuine records.",
    intro:
      "Use this guide only if you received an actual MC011 request for information or documents. It is not a general explanation of every MC011 restriction.",
    quickAnswerTitle: "Let the authenticated notice control",
    quickAnswer:
      "The exact request controls. eBay’s public guidance says restriction messages explain what action applies to the account, but wording and requirements can differ by market and case. This page therefore does not provide a universal document list, deadline, file rule, affected-function list, or submission route.",
    sections: [
      {
        id: "verify-message",
        title: "Verify the message first",
        blocks: [
          {
            type: "paragraph",
            text: "Check that the same notice appears in your signed-in eBay Messages. Do not rely only on an email, text message, phone call, or external link.",
          },
          {
            type: "paragraph",
            text: "If the message is not present in eBay Messages, pause. Do not send records or account information through the unverified contact.",
          },
        ],
      },
      {
        id: "private-checklist",
        title: "Turn the notice into a private checklist",
        blocks: [
          {
            type: "paragraph",
            text: "Read the authenticated notice line by line. In a private working note, record each requested category using the notice’s exact wording. Keep the request separate from your interpretation of it.",
          },
          {
            type: "list",
            items: [
              "a genuine existing record appears to match;",
              "you are not sure whether a genuine record matches;",
              "no genuine matching record exists.",
            ],
          },
          {
            type: "paragraph",
            text: "This prevents a generic internet checklist from replacing the request actually shown in the account.",
          },
        ],
      },
      {
        id: "genuine-records",
        title: "Use only genuine, consistent records",
        blocks: [
          {
            type: "paragraph",
            text: "Before sharing anything, check that a proposed record is authentic, readable, relevant to the requested point, and consistent with the account and transaction information it is meant to support.",
          },
          {
            type: "note",
            title: "Do not alter evidence",
            text: "Do not create, alter, backfill, or borrow evidence. Do not use another person’s identity or account information. A document accepted in another seller’s case or another eBay market is not automatically suitable for yours.",
          },
        ],
      },
      {
        id: "evidence-gap",
        title: "Stop when the evidence does not fit",
        blocks: [
          {
            type: "paragraph",
            text: "If you do not have a genuine record that matches a requested point, do not force an unrelated document into that slot. Ask eBay to clarify the requirement or whether a legitimate alternative is accepted for your market and case.",
          },
          {
            type: "paragraph",
            text: "This guide cannot confirm an alternative, a review time, reinstatement, payout release, or any other outcome.",
          },
        ],
      },
      {
        id: "process-record",
        title: "Keep a clean record of the process",
        blocks: [
          {
            type: "paragraph",
            text: "Preserve the authenticated notice, the private request checklist, the genuine records you considered, and any confirmation eBay displays. Keep passwords, authentication codes, full payment-card information, and unnecessary identity documents out of an initial consultation message.",
          },
        ],
      },
    ],
    sources,
    visual: {
      id: "ebay-mc011-evidence-flow",
      afterSectionId: "private-checklist",
    },
    ctaTitle: "Need help reading the request?",
    ctaText:
      "Describe what the authenticated notice asks for and, if useful, share only minimum relevant redacted screenshots. This is a paid consultation; pricing is agreed in Telegram before work begins. Never send a password or login code.",
    reviewedAt: "2026-07-17",
  },
  ru: {
    title:
      "eBay MC011 запросил документы: готовьтесь по уведомлению, а не по общему списку",
    metaTitle: "eBay MC011 запрашивает документы: что подготовить",
    metaDescription:
      "Получили запрос документов eBay MC011? Проверьте его в eBay Messages, следуйте уведомлению для своего рынка и сопоставьте запросы с подлинными данными.",
    intro:
      "Используйте этот материал только тогда, когда вы получили реальный запрос MC011 на информацию или документы. Это не общее объяснение всех ограничений MC011.",
    quickAnswerTitle: "Ориентируйтесь на подтверждённое уведомление",
    quickAnswer:
      "Определяющим является текст запроса. В официальной справке eBay сказано, что сообщение об ограничении содержит действия для конкретного аккаунта, однако формулировки и требования могут различаться по рынкам и ситуациям. Поэтому здесь нет универсального перечня документов, сроков, правил для файлов, затронутых функций или способа отправки.",
    sections: [
      {
        id: "verify-message",
        title: "Сначала проверьте сообщение",
        blocks: [
          {
            type: "paragraph",
            text: "Убедитесь, что такое же уведомление есть в eBay Messages после входа в аккаунт. Не полагайтесь только на письмо, SMS, звонок или внешнюю ссылку.",
          },
          {
            type: "paragraph",
            text: "Если сообщения нет в eBay Messages, остановитесь. Не передавайте документы или сведения об аккаунте неподтверждённому отправителю.",
          },
        ],
      },
      {
        id: "private-checklist",
        title: "Превратите уведомление в личный чек-лист",
        blocks: [
          {
            type: "paragraph",
            text: "Читайте подтверждённое уведомление построчно. В закрытой рабочей заметке перепишите каждую запрошенную категорию точной формулировкой из сообщения. Не смешивайте запрос eBay со своей догадкой о нём.",
          },
          {
            type: "list",
            items: [
              "есть подлинная существующая запись, которая, вероятно, соответствует запросу;",
              "неясно, соответствует ли имеющаяся запись;",
              "подходящей подлинной записи нет.",
            ],
          },
          {
            type: "paragraph",
            text: "Так общий список из интернета не заменит запрос, который действительно показан в аккаунте.",
          },
        ],
      },
      {
        id: "genuine-records",
        title: "Используйте только подлинные и согласованные данные",
        blocks: [
          {
            type: "paragraph",
            text: "Перед передачей убедитесь, что запись подлинная, читаемая, относится к нужному пункту и не противоречит данным аккаунта или операции, которую она должна подтверждать.",
          },
          {
            type: "note",
            title: "Не изменяйте доказательства",
            text: "Не создавайте, не изменяйте и не дополняйте задним числом доказательства. Не используйте чужую личность или сведения чужого аккаунта. Документ, принятый у другого продавца или на другом рынке eBay, не становится автоматически подходящим для вашей ситуации.",
          },
        ],
      },
      {
        id: "evidence-gap",
        title: "Остановитесь, если данные не соответствуют запросу",
        blocks: [
          {
            type: "paragraph",
            text: "Если подлинной записи по пункту нет, не пытайтесь заменить её нерелевантным документом. Попросите eBay уточнить требование или подтвердить, допустима ли законная альтернатива для вашего рынка и случая.",
          },
          {
            type: "paragraph",
            text: "Этот материал не может подтвердить альтернативу, срок проверки, восстановление аккаунта, разблокировку выплаты или другой результат.",
          },
        ],
      },
      {
        id: "process-record",
        title: "Сохраните чистую историю процесса",
        blocks: [
          {
            type: "paragraph",
            text: "Сохраните подтверждённое уведомление, личный чек-лист запроса, рассмотренные подлинные записи и подтверждения, которые показывает eBay. Не отправляйте пароль, коды входа, полные данные карты или ненужные документы личности в первом сообщении консультанту.",
          },
        ],
      },
    ],
    sources,
    visual: {
      id: "ebay-mc011-evidence-flow",
      afterSectionId: "private-checklist",
    },
    ctaTitle: "Нужна помощь с разбором запроса?",
    ctaText:
      "Опишите, что запрашивает подтверждённое уведомление, и при необходимости покажите только минимально нужные редактированные скриншоты. Это платная консультация; стоимость согласуется в Telegram до начала работы. Никогда не отправляйте пароль или код входа.",
    reviewedAt: "2026-07-17",
  },
  uk: {
    title:
      "eBay MC011 запитав документи: готуйтеся за повідомленням, а не за загальним списком",
    metaTitle: "eBay MC011 запитує документи: що підготувати",
    metaDescription:
      "Отримали запит документів eBay MC011? Перевірте його в eBay Messages, дотримуйтеся вказівок для свого ринку й підберіть справжні документи.",
    intro:
      "Використовуйте цей матеріал лише тоді, коли ви отримали справжній запит MC011 на інформацію або документи. Це не загальне пояснення всіх обмежень MC011.",
    quickAnswerTitle: "Орієнтуйтеся на підтверджене повідомлення",
    quickAnswer:
      "Визначальним є текст запиту. Офіційна довідка eBay пояснює, що повідомлення про обмеження містить дії для конкретного акаунта, але формулювання й вимоги можуть відрізнятися залежно від ринку та справи. Тому тут немає універсального переліку документів, строків, правил для файлів, уражених функцій або способу надсилання.",
    sections: [
      {
        id: "verify-message",
        title: "Спочатку перевірте повідомлення",
        blocks: [
          {
            type: "paragraph",
            text: "Переконайтеся, що таке саме повідомлення є в eBay Messages після входу в акаунт. Не покладайтеся лише на лист, SMS, дзвінок або зовнішнє посилання.",
          },
          {
            type: "paragraph",
            text: "Якщо повідомлення немає в eBay Messages, зупиніться. Не передавайте записи або дані акаунта непідтвердженому відправнику.",
          },
        ],
      },
      {
        id: "private-checklist",
        title: "Перетворіть повідомлення на приватний чек-лист",
        blocks: [
          {
            type: "paragraph",
            text: "Читайте підтверджене повідомлення рядок за рядком. У приватній робочій нотатці запишіть кожну запитану категорію точною мовою повідомлення. Не змішуйте запит eBay зі своїм тлумаченням.",
          },
          {
            type: "list",
            items: [
              "є справжній наявний запис, який, імовірно, відповідає запиту;",
              "незрозуміло, чи відповідає наявний запис;",
              "відповідного справжнього запису немає.",
            ],
          },
          {
            type: "paragraph",
            text: "Так загальний список з інтернету не замінить запит, який фактично показано в акаунті.",
          },
        ],
      },
      {
        id: "genuine-records",
        title: "Використовуйте лише справжні й узгоджені записи",
        blocks: [
          {
            type: "paragraph",
            text: "Перед передаванням перевірте, що запис справжній, читабельний, стосується потрібного пункту та узгоджується з даними акаунта чи операції, яку він має підтверджувати.",
          },
          {
            type: "note",
            title: "Не змінюйте докази",
            text: "Не створюйте, не змінюйте й не доповнюйте заднім числом докази. Не використовуйте чужу особу або дані чужого акаунта. Документ, прийнятий в іншого продавця або на іншому ринку eBay, не стає автоматично придатним для вашої справи.",
          },
        ],
      },
      {
        id: "evidence-gap",
        title: "Зупиніться, якщо дані не відповідають запиту",
        blocks: [
          {
            type: "paragraph",
            text: "Якщо справжнього запису для пункту немає, не намагайтеся замінити його нерелевантним документом. Попросіть eBay уточнити вимогу або підтвердити, чи прийнятна законна альтернатива для вашого ринку та справи.",
          },
          {
            type: "paragraph",
            text: "Цей матеріал не може підтвердити альтернативу, строк перевірки, відновлення акаунта, розблокування виплати чи інший результат.",
          },
        ],
      },
      {
        id: "process-record",
        title: "Збережіть чисту історію процесу",
        blocks: [
          {
            type: "paragraph",
            text: "Збережіть підтверджене повідомлення, приватний чек-лист запиту, розглянуті справжні записи та підтвердження, які показує eBay. Не надсилайте пароль, коди входу, повні дані картки або непотрібні документи особи в першому повідомленні консультанту.",
          },
        ],
      },
    ],
    sources,
    visual: {
      id: "ebay-mc011-evidence-flow",
      afterSectionId: "private-checklist",
    },
    ctaTitle: "Потрібна допомога з розбором запиту?",
    ctaText:
      "Опишіть, що запитує підтверджене повідомлення, і за потреби покажіть лише мінімально потрібні відредаговані скриншоти. Це платна консультація; вартість узгоджується в Telegram до початку роботи. Ніколи не надсилайте пароль або код входу.",
    reviewedAt: "2026-07-17",
  },
};
