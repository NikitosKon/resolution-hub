import type { Locale } from "@/lib/locales";
import type { V4VisualId } from "@/data/v4/types";

const shared = {
  en: { label: "Simplified Resolution Hub diagram. Not a platform screen." },
  ru: { label: "Упрощённая схема Resolution Hub. Это не экран платформы." },
  uk: { label: "Спрощена схема Resolution Hub. Це не екран платформи." },
} as const;

const paypalCopy = {
  en: {
    title: "Check the state before using a date",
    steps: [
      [
        "01",
        "Hold type",
        "Account restriction, payment hold, reserve, dispute or withdrawal?",
      ],
      [
        "02",
        "Account market",
        "Use the agreement for the registered country or region.",
      ],
      [
        "03",
        "Notice",
        "Read the exact date and named event. Do not invent a start.",
      ],
      ["04", "Now", "Check balance, open tasks and withdrawal status."],
    ],
    warning: "A date is a checkpoint, not a release promise.",
    note: "Follow the current status and instructions shown in the registered account.",
  },
  ru: {
    title: "Сначала проверьте состояние, затем используйте дату",
    steps: [
      [
        "01",
        "Тип удержания",
        "Ограничение аккаунта, платёж, резерв, спор или вывод?",
      ],
      [
        "02",
        "Рынок аккаунта",
        "Используйте соглашение страны или региона регистрации.",
      ],
      [
        "03",
        "Уведомление",
        "Читайте точную дату и событие. Не придумывайте начало отсчёта.",
      ],
      ["04", "Сейчас", "Проверьте баланс, открытые задания и статус вывода."],
    ],
    warning: "Дата — точка проверки, а не обещание разблокировки.",
    note: "Ориентируйтесь на текущий статус и инструкции в зарегистрированном аккаунте.",
  },
  uk: {
    title: "Спочатку перевірте стан, потім використовуйте дату",
    steps: [
      [
        "01",
        "Тип утримання",
        "Обмеження акаунта, платіж, резерв, спір чи виведення?",
      ],
      [
        "02",
        "Ринок акаунта",
        "Використовуйте угоду країни або регіону реєстрації.",
      ],
      [
        "03",
        "Повідомлення",
        "Читайте точну дату й подію. Не вигадуйте початок відліку.",
      ],
      ["04", "Зараз", "Перевірте баланс, відкриті завдання та стан виведення."],
    ],
    warning: "Дата — точка перевірки, а не обіцянка розблокування.",
    note: "Орієнтуйтеся на поточний стан та інструкції в зареєстрованому акаунті.",
  },
} as const;

const ebayCopy = {
  en: {
    title: "Let the authenticated request control the package",
    authenticate: ["01 · Authenticate", "Open the request in eBay Messages"],
    match: ["02 · Match", "Match each requested item to one genuine record"],
    check: ["Check", "Does the authentic record match the request?"],
    stop: ["No · Stop", "Do not alter, backfill or invent evidence"],
    go: ["Yes · Continue", "Use only the route shown in the request"],
    note: "No universal document list, deadline, file limit, review time or outcome is implied.",
  },
  ru: {
    title: "Пусть пакет определяет подлинный запрос",
    authenticate: ["01 · Проверка", "Откройте запрос в eBay Messages"],
    match: [
      "02 · Сопоставление",
      "Каждому пункту запроса — один подлинный документ",
    ],
    check: ["Проверка", "Подлинный документ соответствует запросу?"],
    stop: [
      "Нет · Стоп",
      "Не изменяйте, не дополняйте задним числом и не выдумывайте доказательства",
    ],
    go: ["Да · Продолжить", "Используйте только канал, указанный в запросе"],
    note: "Схема не подразумевает единого списка документов, срока, лимита файлов, времени проверки или результата.",
  },
  uk: {
    title: "Нехай пакет визначає автентичний запит",
    authenticate: ["01 · Перевірка", "Відкрийте запит у eBay Messages"],
    match: [
      "02 · Зіставлення",
      "Кожному пункту запиту — один справжній документ",
    ],
    check: ["Перевірка", "Справжній документ відповідає запиту?"],
    stop: [
      "Ні · Стоп",
      "Не змінюйте, не створюйте заднім числом і не вигадуйте докази",
    ],
    go: ["Так · Продовжити", "Використовуйте лише канал, зазначений у запиті"],
    note: "Схема не передбачає єдиного списку документів, строку, ліміту файлів, часу перевірки чи результату.",
  },
} as const;

const grailedCopy = {
  en: {
    title: "Separate four states before choosing a next step",
    states: [
      [
        "01 · Account",
        "What can you access?",
        "Login · Messages · listings · selling controls",
      ],
      [
        "02 · Order",
        "Where is the item?",
        "Unshipped · in transit · delivered · disputed",
      ],
      [
        "03 · Payout",
        "What payment state is shown?",
        "Awaiting release · released · processing · held",
      ],
      [
        "04 · Cash-out",
        "Can available balance be withdrawn?",
        "Check processor and onboarding messages separately",
      ],
    ],
    warning:
      "A sale and a freeze occurring close together does not prove that the sale caused the freeze.",
  },
  ru: {
    title: "Разделите четыре состояния перед следующим шагом",
    states: [
      [
        "01 · Аккаунт",
        "Что доступно?",
        "Вход · Messages · объявления · управление продажами",
      ],
      [
        "02 · Заказ",
        "Где находится товар?",
        "Не отправлен · в пути · доставлен · открыт спор",
      ],
      [
        "03 · Выплата",
        "Какой статус платежа показан?",
        "Ожидает release · released · processing · удержан",
      ],
      [
        "04 · Cash-out",
        "Можно вывести доступный баланс?",
        "Отдельно проверьте сообщения процессора и onboarding",
      ],
    ],
    warning:
      "Близость продажи и заморозки по времени не доказывает, что продажа стала причиной.",
  },
  uk: {
    title: "Розділіть чотири стани перед наступним кроком",
    states: [
      [
        "01 · Акаунт",
        "Що доступно?",
        "Вхід · Messages · оголошення · керування продажами",
      ],
      [
        "02 · Замовлення",
        "Де перебуває товар?",
        "Не відправлено · в дорозі · доставлено · відкрито спір",
      ],
      [
        "03 · Виплата",
        "Який стан платежу показано?",
        "Очікує release · released · processing · утримується",
      ],
      [
        "04 · Cash-out",
        "Чи можна вивести доступний баланс?",
        "Окремо перевірте повідомлення процесора та onboarding",
      ],
    ],
    warning:
      "Близькість продажу й замороження в часі не доводить, що продаж став причиною.",
  },
} as const;

function Card({
  label,
  title,
  text,
  tone,
}: {
  label: string;
  title: string;
  text?: string;
  tone?: "warning" | "accent";
}) {
  return (
    <div className={`article-visual-card${tone ? ` ${tone}` : ""}`}>
      <span>{label}</span>
      <strong>{title}</strong>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function ArticleVisual({
  id,
  locale,
}: {
  id: V4VisualId;
  locale: Locale;
}) {
  const label = shared[locale].label;
  if (id === "paypal-long-hold-state-check") {
    const copy = paypalCopy[locale];
    return (
      <figure className="article-visual" data-visual="paypal-state-check">
        <div className="article-visual-heading">
          <h3>{copy.title}</h3>
          <p>{label}</p>
        </div>
        <div className="article-visual-grid four-step">
          {copy.steps.map(([number, title, text], index) => (
            <Card
              key={number}
              label={number}
              title={title}
              text={text}
              tone={index === 3 ? "accent" : undefined}
            />
          ))}
        </div>
        <div className="article-visual-warning">
          <strong>{copy.warning}</strong>
          <span>{copy.note}</span>
        </div>
      </figure>
    );
  }
  if (id === "grailed-four-state-check") {
    const copy = grailedCopy[locale];
    return (
      <figure className="article-visual" data-visual="grailed-four-state">
        <div className="article-visual-heading">
          <h3>{copy.title}</h3>
          <p>{label}</p>
        </div>
        <div className="article-visual-grid state-grid">
          {copy.states.map(([number, title, text], index) => (
            <Card
              key={number}
              label={number}
              title={title}
              text={text}
              tone={index === 3 ? "accent" : undefined}
            />
          ))}
        </div>
        <p className="article-visual-causation">{copy.warning}</p>
      </figure>
    );
  }
  const copy = ebayCopy[locale];
  return (
    <figure className="article-visual" data-visual="ebay-evidence-flow">
      <div className="article-visual-heading">
        <h3>{copy.title}</h3>
        <p>{label}</p>
      </div>
      <div className="article-visual-grid ebay-steps">
        <Card
          label={copy.authenticate[0]}
          title={copy.authenticate[1]}
          tone="accent"
        />
        <Card label={copy.match[0]} title={copy.match[1]} />
      </div>
      <div className="article-visual-check">
        <span>{copy.check[0]}</span>
        <strong>{copy.check[1]}</strong>
      </div>
      <div className="article-visual-grid ebay-outcomes">
        <Card label={copy.stop[0]} title={copy.stop[1]} tone="warning" />
        <Card label={copy.go[0]} title={copy.go[1]} tone="accent" />
      </div>
      <figcaption>{copy.note}</figcaption>
    </figure>
  );
}
