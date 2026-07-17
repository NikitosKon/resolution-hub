import type { Locale } from "@/lib/locales";

const dictionaries = {
  en: {
    nav: {
      platforms: "Platforms",
      guides: "Guides",
      review: "Case review",
      search: "Search",
    },
    hero: {
      eyebrow: "Independent. Sources checked.",
      title: "Understand what happened to your account.",
      text: "Clear guides for account restrictions, identity checks and payment holds.",
      primary: "Find your platform",
      secondary: "Request a case review",
    },
    home: {
      platforms: "Choose your platform",
      platformText: "Start with the service named in your notification.",
      popular: "Priority guides",
      process: "A calm, evidence-first review",
      processText:
        "We organize the notification, timeline and available records before suggesting the safest next step.",
      safe: "What you can safely share",
      never: "Never send",
      latest: "Latest reviewed guides",
      faq: "Common questions",
    },
    article: {
      quick: "What this means",
      meaning: "Worth knowing",
      symptoms: "Worth checking",
      reasons: "Why this may happen",
      steps: "What to do next",
      documents: "What to prepare",
      mistakes: "Before you continue",
      support: "Still not sure what to do?",
      related: "What to check next",
      sources: "Official sources",
      reviewed: "Sources checked",
      toc: "In this guide",
    },
    category: {
      title: "help and account issue guides",
      intro:
        "Reviewed guidance for common account, verification, appeal and payout situations.",
      all: "All reviewed guides",
      search: "Search this platform",
      empty: "No reviewed guide matches your search.",
    },
    form: {
      title: "Request a case review",
      intro:
        "Tell us what the platform showed you. Do not include passwords, full card numbers or unredacted identity documents.",
      submit: "Check submission",
      configured: "Your case was sent through the configured secure provider.",
      development:
        "The form is valid, but no delivery provider is configured. Nothing was sent or stored. Use a contact option below or configure the backend.",
      error: "Please review the highlighted fields.",
    },
    common: {
      view: "View guide",
      browse: "Browse guides",
      read: "Read",
      contact: "Contact",
      disclaimer:
        "Resolution Hub is independent. PayPal, eBay and other platforms do not run this site. We cannot promise an account restoration or release of funds.",
      sensitive:
        "Redact document numbers and unrelated personal data. Never send a password or complete bank/card details.",
      official: "Independent from the platforms we cover",
    },
  },
  ru: {
    nav: {
      platforms: "Платформы",
      guides: "Разборы",
      review: "Разбор ситуации",
      search: "Поиск",
    },
    hero: {
      eyebrow: "Независимо. Источники проверены.",
      title: "Разберитесь, что произошло с вашим аккаунтом.",
      text: "Понятные разборы ограничений, проверок личности и задержек выплат.",
      primary: "Найти платформу",
      secondary: "Запросить разбор",
    },
    home: {
      platforms: "Выберите платформу",
      platformText: "Начните с сервиса, указанного в уведомлении.",
      popular: "Приоритетные материалы",
      process: "Спокойный разбор на основе фактов",
      processText:
        "Сначала мы структурируем уведомление, хронологию и доступные документы, затем оцениваем безопасный следующий шаг.",
      safe: "Что можно безопасно прислать",
      never: "Никогда не отправляйте",
      latest: "Последние проверенные материалы",
      faq: "Частые вопросы",
    },
    article: {
      quick: "Что это означает",
      meaning: "Стоит знать",
      symptoms: "Стоит проверить",
      reasons: "Почему это могло произойти",
      steps: "Что делать дальше",
      documents: "Что подготовить",
      mistakes: "Перед тем как продолжить",
      support: "Не уверены, что делать дальше?",
      related: "Что проверить дальше",
      sources: "Официальные источники",
      reviewed: "Источники проверены",
      toc: "В этом разборе",
    },
    category: {
      title: "помощь с аккаунтом",
      intro:
        "Проверенные материалы по ограничениям, верификации, апелляциям и выплатам.",
      all: "Все проверенные материалы",
      search: "Поиск по платформе",
      empty: "Подходящих проверенных материалов не найдено.",
    },
    form: {
      title: "Запросить разбор ситуации",
      intro:
        "Расскажите, что показала платформа. Не указывайте пароль, полный номер карты или незакрытые документы личности.",
      submit: "Проверить заявку",
      configured: "Ситуация отправлена через настроенный защищённый канал.",
      development:
        "Форма заполнена верно, но провайдер доставки не настроен. Данные не отправлены и не сохранены. Используйте контакт ниже или настройте backend.",
      error: "Проверьте выделенные поля.",
    },
    common: {
      view: "Открыть материал",
      browse: "Смотреть материалы",
      read: "Читать",
      contact: "Связаться",
      disclaimer:
        "Resolution Hub — независимый проект. PayPal, eBay и другие платформы не управляют этим сайтом. Мы не можем обещать восстановление аккаунта или выплату средств.",
      sensitive:
        "Закрывайте номера документов и лишние персональные данные. Никогда не отправляйте пароль или полные банковские/карточные реквизиты.",
      official: "Независимо от упомянутых платформ",
    },
  },
  uk: {
    nav: {
      platforms: "Платформи",
      guides: "Розбори",
      review: "Розбір ситуації",
      search: "Пошук",
    },
    hero: {
      eyebrow: "Незалежно. Джерела перевірено.",
      title: "Розберіться, що сталося з вашим акаунтом.",
      text: "Зрозумілі розбори обмежень, перевірок особи та затримок виплат.",
      primary: "Знайти платформу",
      secondary: "Запросити розбір",
    },
    home: {
      platforms: "Оберіть платформу",
      platformText: "Почніть із сервісу, зазначеного в повідомленні.",
      popular: "Пріоритетні матеріали",
      process: "Спокійний розбір на основі фактів",
      processText:
        "Спочатку ми структуруємо повідомлення, хронологію та доступні документи, потім оцінюємо безпечний наступний крок.",
      safe: "Що можна безпечно надіслати",
      never: "Ніколи не надсилайте",
      latest: "Останні перевірені матеріали",
      faq: "Поширені запитання",
    },
    article: {
      quick: "Що це означає",
      meaning: "Варто знати",
      symptoms: "Варто перевірити",
      reasons: "Чому це могло статися",
      steps: "Що робити далі",
      documents: "Що підготувати",
      mistakes: "Перед тим як продовжити",
      support: "Не впевнені, що робити далі?",
      related: "Що перевірити далі",
      sources: "Офіційні джерела",
      reviewed: "Джерела перевірено",
      toc: "У цьому розборі",
    },
    category: {
      title: "допомога з акаунтом",
      intro:
        "Перевірені матеріали про обмеження, верифікацію, апеляції та виплати.",
      all: "Усі перевірені матеріали",
      search: "Пошук за платформою",
      empty: "Відповідних перевірених матеріалів не знайдено.",
    },
    form: {
      title: "Запросити розбір ситуації",
      intro:
        "Розкажіть, що показала платформа. Не вказуйте пароль, повний номер картки або незакриті документи особи.",
      submit: "Перевірити заявку",
      configured: "Ситуацію надіслано через налаштований захищений канал.",
      development:
        "Форму заповнено правильно, але провайдер доставки не налаштовано. Дані не надіслано й не збережено. Скористайтеся контактом нижче або налаштуйте backend.",
      error: "Перевірте виділені поля.",
    },
    common: {
      view: "Відкрити матеріал",
      browse: "Переглянути матеріали",
      read: "Читати",
      contact: "Зв’язатися",
      disclaimer:
        "Resolution Hub — незалежний проєкт. PayPal, eBay та інші платформи не керують цим сайтом. Ми не можемо обіцяти відновлення акаунта чи виплату коштів.",
      sensitive:
        "Закривайте номери документів і зайві персональні дані. Ніколи не надсилайте пароль або повні банківські/карткові реквізити.",
      official: "Незалежно від згаданих платформ",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
export type Dictionary = (typeof dictionaries)["en"];
