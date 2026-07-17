import type { IssuePage, LocalizedIssueContent } from "./schema";
import type { Locale } from "@/lib/locales";

type Brief = {
  platformId: string;
  slug: string;
  intent: IssuePage["intent"];
  title: Record<Locale, string>;
  situation: Record<Locale, string>;
  trigger: Record<Locale, string>;
  action: Record<Locale, string>;
  document: Record<Locale, string>;
  mistake: Record<Locale, string>;
  omitDocumentsSection?: boolean;
};

const names: Record<string, string> = {
  paypal: "PayPal",
  ebay: "eBay",
  etsy: "Etsy",
  grailed: "Grailed",
  vestiaire: "Vestiaire Collective",
  depop: "Depop",
  vinted: "Vinted",
  stripe: "Stripe",
  "amazon-seller": "Amazon Seller",
  "facebook-marketplace": "Facebook Marketplace",
  stockx: "StockX",
  goat: "GOAT",
  wise: "Wise",
  "revolut-business": "Revolut Business",
  "shopify-payments": "Shopify Payments",
};

const sources: Record<string, string[]> = {
  paypal: ["https://www.paypal.com/us/cshelp/personal"],
  ebay: ["https://www.ebay.com/help/home"],
  etsy: ["https://help.etsy.com/"],
  grailed: ["https://support.grailed.com/"],
  vestiaire: ["https://faq.vestiairecollective.com/"],
};

const publishedBriefs: Brief[] = [
  {
    platformId: "paypal",
    slug: "permanently-limited",
    intent: "informational",
    title: {
      en: "PayPal account permanently limited",
      ru: "Аккаунт PayPal ограничен навсегда",
      uk: "Акаунт PayPal обмежено назавжди",
    },
    situation: {
      en: "A permanent limitation normally removes some account functions and may stop sending, receiving or withdrawing money. The exact effect is the one shown inside your account.",
      ru: "Постоянное ограничение обычно отключает часть функций и может запретить отправку, получение или вывод денег. Точный объём ограничений указан в вашем аккаунте.",
      uk: "Постійне обмеження зазвичай вимикає частину функцій і може заборонити надсилання, отримання або виведення коштів. Точний обсяг обмежень зазначено в акаунті.",
    },
    trigger: {
      en: "risk signals, unresolved verification, transaction patterns or policy concerns",
      ru: "сигналы риска, незавершённая проверка, характер операций или вопросы соблюдения правил",
      uk: "сигнали ризику, незавершена перевірка, характер операцій або питання дотримання правил",
    },
    action: {
      en: "read the Resolution Center notice, preserve the case reference and separate completed requests from requests still open",
      ru: "прочитать уведомление в Центре разрешения проблем, сохранить номер дела и разделить выполненные запросы от открытых",
      uk: "прочитати повідомлення в Центрі вирішення проблем, зберегти номер справи та відокремити виконані запити від відкритих",
    },
    document: {
      en: "identity, address, business registration, supplier or transaction records when the notice specifically asks for them",
      ru: "документы личности, адреса, регистрации бизнеса, поставщиков или операций — только если они прямо запрошены",
      uk: "документи особи, адреси, реєстрації бізнесу, постачальників або операцій — лише якщо їх прямо запитано",
    },
    mistake: {
      en: "opening another linked account or submitting edited documents before understanding the stated reason",
      ru: "создание связанного аккаунта или отправка изменённых документов до понимания указанной причины",
      uk: "створення пов’язаного акаунта або надсилання змінених документів до розуміння зазначеної причини",
    },
  },
  {
    platformId: "paypal",
    slug: "limitation-appeal",
    intent: "appeal",
    title: {
      en: "How to prepare a PayPal limitation appeal",
      ru: "Как подготовить апелляцию по ограничению PayPal",
      uk: "Як підготувати апеляцію щодо обмеження PayPal",
    },
    situation: {
      en: "An appeal is strongest when it responds to the actual limitation notice, explains relevant account activity and supplies only verifiable records.",
      ru: "Апелляция сильнее, когда отвечает на конкретное уведомление, объясняет связанную активность и содержит только проверяемые материалы.",
      uk: "Апеляція переконливіша, коли відповідає на конкретне повідомлення, пояснює пов’язану активність і містить лише перевірювані матеріали.",
    },
    trigger: {
      en: "a completed document review, a potentially misunderstood transaction or information that has materially changed",
      ru: "завершённая проверка документов, возможно неверно понятая операция или существенно изменившиеся сведения",
      uk: "завершена перевірка документів, можливо неправильно зрозуміла операція або суттєво змінені відомості",
    },
    action: {
      en: "build a short timeline, quote the decision accurately and map each statement to a supporting record",
      ru: "составить краткую хронологию, точно процитировать решение и подкрепить каждое утверждение документом",
      uk: "скласти стислу хронологію, точно процитувати рішення та підтвердити кожне твердження документом",
    },
    document: {
      en: "the limitation email, transaction evidence and the records explicitly named in the account checklist",
      ru: "письмо об ограничении, подтверждения операций и документы, прямо названные в списке аккаунта",
      uk: "лист про обмеження, підтвердження операцій і документи, прямо названі у списку акаунта",
    },
    mistake: {
      en: "sending repeated emotional messages that do not address the decision or introduce contradictory facts",
      ru: "повторные эмоциональные обращения без ответа на решение или с противоречивыми фактами",
      uk: "повторні емоційні звернення без відповіді на рішення або з суперечливими фактами",
    },
  },
  {
    platformId: "paypal",
    slug: "appeal-denied",
    intent: "appeal",
    title: {
      en: "PayPal limitation appeal denied",
      ru: "PayPal отклонил апелляцию по ограничению",
      uk: "PayPal відхилив апеляцію щодо обмеження",
    },
    situation: {
      en: "A denied appeal means the submitted review did not change the limitation decision. It does not explain more than the wording of the decision itself.",
      ru: "Отклонённая апелляция означает, что проверка не изменила решение об ограничении. Дополнительные выводы без текста решения делать нельзя.",
      uk: "Відхилена апеляція означає, що перевірка не змінила рішення про обмеження. Додаткових висновків без тексту рішення робити не слід.",
    },
    trigger: {
      en: "insufficient evidence, a mismatch between the explanation and account records, or a decision that the submitted information did not resolve",
      ru: "недостаточные доказательства, расхождения объяснения с данными аккаунта или неустранённые вопросы",
      uk: "недостатні докази, розбіжності пояснення з даними акаунта або невирішені питання",
    },
    action: {
      en: "compare the denial with the original request, identify genuinely new evidence and check whether another review channel is actually offered",
      ru: "сопоставить отказ с исходным запросом, найти действительно новые доказательства и проверить наличие повторного канала",
      uk: "зіставити відмову з початковим запитом, знайти справді нові докази та перевірити наявність повторного каналу",
    },
    document: {
      en: "the first submission, denial notice and any new record that directly resolves an earlier gap",
      ru: "первая подача, уведомление об отказе и новый документ, закрывающий прежний пробел",
      uk: "перше звернення, повідомлення про відмову та новий документ, що усуває попередню прогалину",
    },
    mistake: {
      en: "resubmitting the identical package or claiming facts that cannot be reconciled with the account history",
      ru: "повторная отправка того же пакета или утверждения, несовместимые с историей аккаунта",
      uk: "повторне надсилання того самого пакета або твердження, несумісні з історією акаунта",
    },
  },
  {
    platformId: "paypal",
    slug: "funds-held-180-days",
    intent: "payout",
    title: {
      en: "PayPal funds held for up to 180 days",
      ru: "Средства PayPal удерживаются до 180 дней",
      uk: "Кошти PayPal утримуються до 180 днів",
    },
    situation: {
      en: "Some limitation notices state that funds may remain unavailable for up to 180 days to cover potential reversals or liabilities. The date and eligibility shown in the account control what applies.",
      ru: "В некоторых уведомлениях сказано, что средства могут быть недоступны до 180 дней для покрытия возвратов или обязательств. Важны дата и условия именно в аккаунте.",
      uk: "У деяких повідомленнях зазначено, що кошти можуть бути недоступні до 180 днів для покриття повернень або зобов’язань. Важливі дата й умови саме в акаунті.",
    },
    trigger: {
      en: "a permanent limitation combined with exposure to disputes, chargebacks, refunds or other account liabilities",
      ru: "постоянное ограничение вместе с риском споров, возвратных платежей, возмещений или других обязательств",
      uk: "постійне обмеження разом із ризиком спорів, зворотних платежів, відшкодувань чи інших зобов’язань",
    },
    action: {
      en: "record the notice date, review unresolved disputes and confirm that withdrawal details remain accurate without making unnecessary changes",
      ru: "зафиксировать дату уведомления, проверить открытые споры и корректность реквизитов без лишних изменений",
      uk: "зафіксувати дату повідомлення, перевірити відкриті спори й правильність реквізитів без зайвих змін",
    },
    document: {
      en: "the hold notice, balance history, open-case records and proof of fulfilled transactions",
      ru: "уведомление об удержании, история баланса, открытые дела и подтверждения выполненных заказов",
      uk: "повідомлення про утримання, історія балансу, відкриті справи та підтвердження виконаних замовлень",
    },
    mistake: {
      en: "treating the maximum period as a guaranteed release date or paying a third party who promises early release",
      ru: "считать максимальный срок гарантированной датой или платить посреднику за обещание досрочного вывода",
      uk: "вважати максимальний строк гарантованою датою або платити посереднику за обіцянку дострокового виведення",
    },
  },
  {
    platformId: "paypal",
    slug: "funds-frozen-after-limitation",
    intent: "payout",
    title: {
      en: "PayPal balance unavailable after an account limitation",
      ru: "Баланс PayPal недоступен после ограничения аккаунта",
      uk: "Баланс PayPal недоступний після обмеження акаунта",
    },
    situation: {
      en: "Use this page when a limitation has appeared and the balance is unavailable, but the notice does not establish a specific long-hold timeline. The first task is to identify which balance state is shown, separately from whether the account can be restored.",
      ru: "Эта страница нужна, когда после ограничения баланс недоступен, но уведомление не устанавливает конкретный длительный срок удержания. Сначала определите показанный статус баланса отдельно от вопроса восстановления аккаунта.",
      uk: "Ця сторінка потрібна, коли після обмеження баланс недоступний, але повідомлення не встановлює конкретного тривалого строку утримання. Спочатку визначте показаний стан балансу окремо від питання відновлення акаунта.",
    },
    trigger: {
      en: "an account limitation shown alongside available, pending, held, reserved, disputed or withdrawal-related balance states",
      ru: "ограничение аккаунта вместе со статусами доступной, ожидающей, удержанной, зарезервированной, спорной суммы или вывода",
      uk: "обмеження акаунта разом зі станами доступної, очікуваної, утриманої, зарезервованої, спірної суми або виведення",
    },
    action: {
      en: "map each unavailable amount to the exact balance label, transaction, dispute, reserve or withdrawal message before choosing a next step",
      ru: "сопоставить каждую недоступную сумму с точным статусом баланса, операцией, спором, резервом или сообщением о выводе до выбора следующего шага",
      uk: "зіставити кожну недоступну суму з точним станом балансу, операцією, спором, резервом або повідомленням про виведення до вибору наступного кроку",
    },
    document: {
      en: "the limitation notice, current balance labels, transaction references, dispute or reserve status, and any withdrawal message",
      ru: "уведомление об ограничении, текущие статусы баланса, номера операций, состояние спора или резерва и сообщения о выводе",
      uk: "повідомлення про обмеження, поточні стани балансу, номери операцій, стан спору чи резерву та повідомлення про виведення",
    },
    mistake: {
      en: "assuming every unavailable amount follows a 180-day timeline; if the notice expressly names a long-hold period, use the separate 180-day notice guide",
      ru: "считать, что каждая недоступная сумма следует сроку 180 дней; если в уведомлении прямо указан длительный период, используйте отдельный материал об уведомлении на 180 дней",
      uk: "вважати, що кожна недоступна сума має строк 180 днів; якщо в повідомленні прямо зазначено тривалий період, використовуйте окремий матеріал про повідомлення на 180 днів",
    },
  },
  {
    platformId: "paypal",
    slug: "supplier-invoices-requested",
    intent: "verification",
    title: {
      en: "PayPal requested supplier invoices",
      ru: "PayPal запросил счета от поставщиков",
      uk: "PayPal запросив рахунки від постачальників",
    },
    situation: {
      en: "Supplier records may be requested to understand what is sold, where stock comes from and whether recent payments match a genuine business flow.",
      ru: "Документы поставщиков могут запрашиваться, чтобы понять товар, происхождение запасов и соответствие платежей реальной деятельности.",
      uk: "Документи постачальників можуть запитувати, щоб зрозуміти товар, походження запасів і відповідність платежів реальній діяльності.",
    },
    trigger: {
      en: "sales volume, product risk, new business activity or gaps between account information and transaction descriptions",
      ru: "объём продаж, категория товара, новая деятельность или расхождения между профилем и описанием операций",
      uk: "обсяг продажів, категорія товару, нова діяльність або розбіжності між профілем і описом операцій",
    },
    action: {
      en: "list the transactions in scope and pair them with genuine dated invoices showing the seller, buyer and purchased goods",
      ru: "определить проверяемые операции и связать их с настоящими датированными счетами с продавцом, покупателем и товарами",
      uk: "визначити операції в межах перевірки та пов’язати їх зі справжніми датованими рахунками з продавцем, покупцем і товарами",
    },
    document: {
      en: "unaltered supplier invoices, payment records, order confirmations and business registration details where relevant",
      ru: "неизменённые счета поставщиков, оплаты, подтверждения заказов и регистрационные данные бизнеса при необходимости",
      uk: "незмінені рахунки постачальників, оплати, підтвердження замовлень і реєстраційні дані бізнесу за потреби",
    },
    mistake: {
      en: "creating invoices after the fact, hiding material fields or submitting retail receipts as wholesale evidence without explanation",
      ru: "создание счетов задним числом, сокрытие значимых полей или выдача розничных чеков за оптовые без пояснения",
      uk: "створення рахунків заднім числом, приховування важливих полів або подання роздрібних чеків як оптових без пояснення",
    },
  },
  {
    platformId: "paypal",
    slug: "proof-of-identity-requested",
    intent: "verification",
    title: {
      en: "PayPal requested proof of identity",
      ru: "PayPal запросил подтверждение личности",
      uk: "PayPal запросив підтвердження особи",
    },
    situation: {
      en: "An identity request is used to compare the account holder with valid records. It can fail when details, image quality, document validity or ownership do not align.",
      ru: "Проверка личности сопоставляет владельца аккаунта с действительными документами. Ошибка возможна из-за данных, качества изображения, срока или владельца.",
      uk: "Перевірка особи зіставляє власника акаунта з чинними документами. Помилка можлива через дані, якість зображення, строк або власника.",
    },
    trigger: {
      en: "a regulatory check, changed personal details, unusual access or a mismatch in the account profile",
      ru: "регуляторная проверка, изменение личных данных, необычный доступ или расхождение профиля",
      uk: "регуляторна перевірка, зміна особистих даних, незвичний доступ або розбіжність профілю",
    },
    action: {
      en: "compare name, date of birth and address with the profile, then follow the exact upload instructions shown",
      ru: "сверить имя, дату рождения и адрес с профилем, затем точно выполнить указания по загрузке",
      uk: "звірити ім’я, дату народження й адресу з профілем, потім точно виконати вказівки щодо завантаження",
    },
    document: {
      en: "a valid government-issued identity document accepted by the current on-screen request",
      ru: "действительный государственный документ, принимаемый в текущем экранном запросе",
      uk: "чинний державний документ, який приймає поточний екранний запит",
    },
    mistake: {
      en: "cropping required edges, using someone else’s document or repeatedly uploading unreadable images",
      ru: "обрезка нужных краёв, чужой документ или повторная загрузка нечитаемых снимков",
      uk: "обрізання потрібних країв, чужий документ або повторне завантаження нечитабельних знімків",
    },
  },
  {
    platformId: "paypal",
    slug: "proof-of-address-requested",
    intent: "verification",
    title: {
      en: "PayPal requested proof of address",
      ru: "PayPal запросил подтверждение адреса",
      uk: "PayPal запросив підтвердження адреси",
    },
    situation: {
      en: "Address verification checks whether the account address is current and supported by an acceptable recent record in the holder’s name.",
      ru: "Проверка адреса подтверждает, что адрес аккаунта актуален и указан в подходящем свежем документе на имя владельца.",
      uk: "Перевірка адреси підтверджує, що адреса акаунта актуальна й зазначена у відповідному свіжому документі на ім’я власника.",
    },
    trigger: {
      en: "an address change, an identity review, country consistency checks or a document that did not match the profile",
      ru: "смена адреса, проверка личности, проверка страны или документ, не совпавший с профилем",
      uk: "зміна адреси, перевірка особи, перевірка країни або документ, що не збігся з профілем",
    },
    action: {
      en: "standardize the address format, check the accepted document list and upload a complete readable record",
      ru: "привести адрес к единому формату, проверить список принимаемых документов и загрузить полный читаемый файл",
      uk: "узгодити формат адреси, перевірити список прийнятних документів і завантажити повний читабельний файл",
    },
    document: {
      en: "a recent bank statement, utility bill or other item explicitly accepted by the request",
      ru: "свежая банковская выписка, коммунальный счёт или иной документ, прямо принимаемый запросом",
      uk: "свіжа банківська виписка, комунальний рахунок або інший документ, прямо прийнятний запитом",
    },
    mistake: {
      en: "uploading an old, partial or edited document whose name or address differs without an explanation",
      ru: "старый, неполный или изменённый документ с необъяснённым расхождением имени или адреса",
      uk: "старий, неповний або змінений документ із непоясненою розбіжністю імені чи адреси",
    },
  },
  {
    platformId: "paypal",
    slug: "limited-after-receiving-money",
    intent: "informational",
    title: {
      en: "PayPal limited after receiving money",
      ru: "PayPal ограничен после получения денег",
      uk: "PayPal обмежено після отримання коштів",
    },
    situation: {
      en: "A limitation shortly after an incoming payment does not by itself prove that the payment caused it. The review may concern the transaction, account history or missing profile information.",
      ru: "Ограничение вскоре после входящего платежа само по себе не доказывает, что причина именно в нём. Проверка может касаться операции, истории или профиля.",
      uk: "Обмеження невдовзі після вхідного платежу саме по собі не доводить, що причина саме в ньому. Перевірка може стосуватися операції, історії або профілю.",
    },
    trigger: {
      en: "a sudden volume change, a new payer, higher-risk goods, an unusual transaction pattern or incomplete verification",
      ru: "резкий рост объёма, новый плательщик, рискованный товар, необычная схема операций или незавершённая проверка",
      uk: "різке зростання обсягу, новий платник, ризиковий товар, незвичний характер операцій або незавершена перевірка",
    },
    action: {
      en: "identify the payment, preserve the order and communication trail, and answer only the requests displayed for the account",
      ru: "определить платёж, сохранить заказ и переписку и отвечать только на запросы, показанные в аккаунте",
      uk: "визначити платіж, зберегти замовлення й листування та відповідати лише на запити, показані в акаунті",
    },
    document: {
      en: "order details, invoice, proof of delivery or service completion, and payer communication",
      ru: "детали заказа, счёт, подтверждение доставки или услуги и переписка с плательщиком",
      uk: "деталі замовлення, рахунок, підтвердження доставки чи послуги та листування з платником",
    },
    mistake: {
      en: "refunding outside the platform, inventing an order purpose or asking the payer to provide a false explanation",
      ru: "возврат вне платформы, выдуманная цель платежа или просьба к плательщику дать ложное объяснение",
      uk: "повернення поза платформою, вигадана мета платежу або прохання до платника дати неправдиве пояснення",
    },
  },
  {
    platformId: "paypal",
    slug: "business-account-under-review",
    intent: "verification",
    title: {
      en: "PayPal business account under review",
      ru: "Бизнес-аккаунт PayPal находится на проверке",
      uk: "Бізнес-акаунт PayPal проходить перевірку",
    },
    situation: {
      en: "A business review can examine ownership, activity, sales model, transaction evidence and compliance information. Available functions may differ while it is open.",
      ru: "Проверка бизнеса может охватывать владельцев, деятельность, модель продаж, операции и сведения о соответствии. Доступные функции могут временно различаться.",
      uk: "Перевірка бізнесу може охоплювати власників, діяльність, модель продажів, операції та відомості про відповідність. Доступні функції можуть тимчасово різнитися.",
    },
    trigger: {
      en: "business growth, profile changes, new products, cross-border activity or information that requires confirmation",
      ru: "рост бизнеса, изменение профиля, новые товары, международная деятельность или сведения, требующие подтверждения",
      uk: "зростання бізнесу, зміна профілю, нові товари, міжнародна діяльність або відомості, що потребують підтвердження",
    },
    action: {
      en: "map legal entity, beneficial owners, website, products and payment flow into one consistent factual description",
      ru: "свести юрлицо, владельцев, сайт, товары и движение платежей в одно последовательное фактическое описание",
      uk: "звести юрособу, власників, сайт, товари й рух платежів в один послідовний фактичний опис",
    },
    document: {
      en: "registration records, ownership details, website information, invoices and fulfilment evidence as requested",
      ru: "регистрационные сведения, владельцы, данные сайта, счета и подтверждения исполнения по запросу",
      uk: "реєстраційні відомості, власники, дані сайту, рахунки та підтвердження виконання за запитом",
    },
    mistake: {
      en: "submitting inconsistent business names, unsupported turnover claims or documents for a different legal entity",
      ru: "разные названия бизнеса, неподтверждённые обороты или документы другого юридического лица",
      uk: "різні назви бізнесу, непідтверджені обороти або документи іншої юридичної особи",
    },
  },
  {
    platformId: "ebay",
    slug: "account-suspended",
    intent: "informational",
    title: {
      en: "eBay account suspended: first checks",
      ru: "Аккаунт eBay заблокирован: первые проверки",
      uk: "Акаунт eBay заблоковано: перші перевірки",
    },
    situation: {
      en: "An eBay suspension may affect buying, selling, listings or payouts. The notice and Messages area should be treated as the primary description of scope.",
      ru: "Блокировка eBay может затронуть покупки, продажи, объявления или выплаты. Основной источник — уведомление и раздел Messages.",
      uk: "Блокування eBay може вплинути на покупки, продажі, оголошення або виплати. Основне джерело — повідомлення та розділ Messages.",
    },
    trigger: {
      en: "account security, seller performance, verification, listing policy or linked-account concerns",
      ru: "безопасность, показатели продавца, проверка, правила объявлений или связанные аккаунты",
      uk: "безпека, показники продавця, перевірка, правила оголошень або пов’язані акаунти",
    },
    action: {
      en: "open the original message, note any reference code, review recent listings and complete only the named requirements",
      ru: "открыть исходное сообщение, записать код, проверить последние объявления и выполнить только названные требования",
      uk: "відкрити початкове повідомлення, записати код, перевірити останні оголошення й виконати лише названі вимоги",
    },
    document: {
      en: "identity, address, inventory, delivery or business records depending on the notice",
      ru: "документы личности, адреса, товара, доставки или бизнеса — в зависимости от уведомления",
      uk: "документи особи, адреси, товару, доставки чи бізнесу — залежно від повідомлення",
    },
    mistake: {
      en: "creating another account, relisting removed items or contacting support with a different story each time",
      ru: "создание другого аккаунта, повтор запрещённых объявлений или разные версии истории поддержке",
      uk: "створення іншого акаунта, повтор заборонених оголошень або різні версії історії підтримці",
    },
  },
  {
    platformId: "ebay",
    slug: "mc011-restriction",
    intent: "verification",
    title: {
      en: "eBay MC011 restriction: what the notice means",
      ru: "Ограничение eBay MC011: что означает уведомление",
      uk: "Обмеження eBay MC011: що означає повідомлення",
    },
    situation: {
      en: "Treat MC011 as the reference shown in the eBay message you received. Its authenticated wording—not the code alone—shows what is restricted and what eBay asks you to do next.",
      ru: "Рассматривайте MC011 как обозначение в полученном сообщении eBay. Что ограничено и какое действие названо следующим, показывает подтверждённый текст уведомления, а не один код.",
      uk: "Сприймайте MC011 як позначення в отриманому повідомленні eBay. Що обмежено та яку дію названо наступною, показує підтверджений текст повідомлення, а не сам код.",
    },
    trigger: {
      en: "the checks described in the authenticated message, not a universal list of causes inferred from the MC011 code",
      ru: "проверки, описанные в подтверждённом сообщении, а не универсальный список причин, выведенный из кода MC011",
      uk: "перевірки, описані в підтвердженому повідомленні, а не універсальний перелік причин, виведений із коду MC011",
    },
    action: {
      en: "confirm the same message appears in signed-in eBay Messages, note the registered market and exact affected functions, then classify the next task from the wording",
      ru: "убедиться, что сообщение есть в eBay Messages после входа, отметить рынок регистрации и точно названные затронутые функции, затем определить следующий тип задачи по тексту",
      uk: "переконатися, що повідомлення є в eBay Messages після входу, зазначити ринок реєстрації й точно названі порушені функції, а потім визначити наступний тип завдання за текстом",
    },
    document: {
      en: "Document matching and submission preparation belong to the separate MC011 documents-requested guide",
      ru: "Сопоставление документов и подготовка к отправке относятся к отдельному материалу о запросе документов MC011",
      uk: "Зіставлення документів і підготовка до надсилання належать до окремого матеріалу про запит документів MC011",
    },
    mistake: {
      en: "assuming that the code alone identifies the cause, affected functions or required next action",
      ru: "считать, что один код определяет причину, затронутые функции или обязательное следующее действие",
      uk: "вважати, що сам код визначає причину, порушені функції або обов’язкову наступну дію",
    },
    omitDocumentsSection: true,
  },
  {
    platformId: "ebay",
    slug: "mc011-documents-requested",
    intent: "verification",
    title: {
      en: "Documents requested for eBay MC011",
      ru: "Какие документы запрашивают при eBay MC011",
      uk: "Які документи запитують під час eBay MC011",
    },
    situation: {
      en: "An MC011 document request should be answered as a checklist, not with a generic appeal. Required evidence varies, so the exact message must guide the package.",
      ru: "Запрос документов MC011 нужно обрабатывать как чек-лист, а не общую апелляцию. Состав доказательств определяет конкретное сообщение.",
      uk: "Запит документів MC011 слід опрацьовувати як чекліст, а не загальну апеляцію. Склад доказів визначає конкретне повідомлення.",
    },
    trigger: {
      en: "a need to verify identity, ownership of inventory, fulfilment history or the consistency of seller information",
      ru: "необходимость подтвердить личность, происхождение товара, исполнение заказов или согласованность данных продавца",
      uk: "необхідність підтвердити особу, походження товару, виконання замовлень або узгодженість даних продавця",
    },
    action: {
      en: "create a document matrix: request, matching file, date, account detail and any concise explanation of a discrepancy",
      ru: "составить таблицу: запрос, соответствующий файл, дата, данные аккаунта и краткое объяснение расхождения",
      uk: "скласти таблицю: запит, відповідний файл, дата, дані акаунта та стисле пояснення розбіжності",
    },
    document: {
      en: "only genuine records named in the notice, with readable dates, parties, items and transaction references",
      ru: "только настоящие документы из уведомления с читаемыми датами, сторонами, товарами и ссылками на операции",
      uk: "лише справжні документи з повідомлення з читабельними датами, сторонами, товарами та посиланнями на операції",
    },
    mistake: {
      en: "editing supplier documents, obscuring key fields or sending screenshots when a complete record is required",
      ru: "редактирование документов поставщика, скрытие важных полей или скриншоты вместо полного документа",
      uk: "редагування документів постачальника, приховування важливих полів або скриншоти замість повного документа",
    },
  },
  {
    platformId: "ebay",
    slug: "suspended-after-first-listing",
    intent: "informational",
    title: {
      en: "eBay suspended after the first listing",
      ru: "eBay заблокирован после первого объявления",
      uk: "eBay заблоковано після першого оголошення",
    },
    situation: {
      en: "A new account can be reviewed soon after its first listing because little history exists and the platform must assess the listing, seller details and access pattern together.",
      ru: "Новый аккаунт могут проверить сразу после первого объявления: истории мало, поэтому одновременно оцениваются товар, продавец и характер доступа.",
      uk: "Новий акаунт можуть перевірити одразу після першого оголошення: історії мало, тому разом оцінюються товар, продавець і характер доступу.",
    },
    trigger: {
      en: "a high-value or high-risk item, incomplete seller verification, unusual location signals or listing details that need confirmation",
      ru: "дорогой или рискованный товар, неполная проверка, необычная геолокация или детали объявления, требующие подтверждения",
      uk: "дорогий або ризиковий товар, неповна перевірка, незвична геолокація або деталі оголошення, що потребують підтвердження",
    },
    action: {
      en: "preserve the first listing, purchase evidence and account message; verify profile details before making further changes",
      ru: "сохранить первое объявление, подтверждение покупки товара и сообщение; сверить профиль до дальнейших изменений",
      uk: "зберегти перше оголошення, підтвердження купівлі товару та повідомлення; звірити профіль до подальших змін",
    },
    document: {
      en: "identity and address records plus ownership or purchase evidence for the listed item if requested",
      ru: "документы личности и адреса, а также происхождение или покупка выставленного товара по запросу",
      uk: "документи особи й адреси, а також походження або купівля виставленого товару за запитом",
    },
    mistake: {
      en: "immediately opening a replacement account, duplicating the listing or changing many profile fields at once",
      ru: "сразу создавать замену, дублировать объявление или одновременно менять много полей профиля",
      uk: "одразу створювати заміну, дублювати оголошення або одночасно змінювати багато полів профілю",
    },
  },
  {
    platformId: "ebay",
    slug: "payout-on-hold",
    intent: "payout",
    title: {
      en: "eBay payout on hold",
      ru: "Выплата eBay удерживается",
      uk: "Виплату eBay утримано",
    },
    situation: {
      en: "A payout hold can relate to a specific order, a seller review or managed payments verification. It is important to distinguish pending transaction funds from an account-level restriction.",
      ru: "Удержание выплаты может относиться к заказу, проверке продавца или managed payments. Важно отличать средства по операции от ограничения всего аккаунта.",
      uk: "Утримання виплати може стосуватися замовлення, перевірки продавця або managed payments. Важливо відрізняти кошти за операцією від обмеження всього акаунта.",
    },
    trigger: {
      en: "delivery status, a dispute, new-seller history, payment verification or changed payout details",
      ru: "статус доставки, спор, история нового продавца, проверка платежей или изменение реквизитов",
      uk: "статус доставки, спір, історія нового продавця, перевірка платежів або зміна реквізитів",
    },
    action: {
      en: "open the Payments view, identify the held transaction and compare tracking, case status and payout method",
      ru: "открыть Payments, найти удержанную операцию и сопоставить трекинг, статус дела и способ выплаты",
      uk: "відкрити Payments, знайти утриману операцію та зіставити трекінг, статус справи й спосіб виплати",
    },
    document: {
      en: "tracking acceptance and delivery, order correspondence, payout verification and dispute evidence",
      ru: "приём и доставка по трекингу, переписка по заказу, проверка выплаты и материалы спора",
      uk: "приймання й доставка за трекінгом, листування щодо замовлення, перевірка виплати та матеріали спору",
    },
    mistake: {
      en: "uploading false tracking, asking the buyer to close a legitimate case or assuming every hold has a fixed release time",
      ru: "ложный трекинг, давление на покупателя закрыть обоснованное дело или ожидание фиксированного срока",
      uk: "неправдивий трекінг, тиск на покупця закрити обґрунтовану справу або очікування фіксованого строку",
    },
  },
  {
    platformId: "etsy",
    slug: "permanently-suspended",
    intent: "informational",
    title: {
      en: "Etsy account permanently suspended",
      ru: "Аккаунт Etsy заблокирован навсегда",
      uk: "Акаунт Etsy заблоковано назавжди",
    },
    situation: {
      en: "A permanent Etsy suspension can remove shop access and selling privileges. The decision email and Appeals area, if available, define the relevant next step.",
      ru: "Постоянная блокировка Etsy может закрыть магазин и продажи. Дальнейший шаг определяется письмом о решении и доступностью Appeals.",
      uk: "Постійне блокування Etsy може закрити магазин і продажі. Подальший крок визначається листом про рішення та доступністю Appeals.",
    },
    trigger: {
      en: "identity or payment verification, listing policy, intellectual property, account security or linked-account concerns",
      ru: "проверка личности или платежей, правила объявлений, интеллектуальная собственность, безопасность или связанные аккаунты",
      uk: "перевірка особи чи платежів, правила оголошень, інтелектуальна власність, безпека або пов’язані акаунти",
    },
    action: {
      en: "locate the decision, review removed listings and prior warnings, and build a factual timeline before appealing",
      ru: "найти решение, проверить удалённые объявления и предупреждения и составить фактическую хронологию до апелляции",
      uk: "знайти рішення, перевірити видалені оголошення й попередження та скласти фактичну хронологію до апеляції",
    },
    document: {
      en: "identity, payment, product creation, licensing or order records only where relevant to the stated issue",
      ru: "документы личности, платежей, создания товара, лицензий или заказов — только по сути вопроса",
      uk: "документи особи, платежів, створення товару, ліцензій або замовлень — лише по суті питання",
    },
    mistake: {
      en: "opening a new shop to bypass the decision or submitting a broad appeal that ignores the stated concern",
      ru: "новый магазин в обход решения или общая апелляция, игнорирующая указанную проблему",
      uk: "новий магазин в обхід рішення або загальна апеляція, що ігнорує зазначену проблему",
    },
  },
  {
    platformId: "etsy",
    slug: "suspension-appeal",
    intent: "appeal",
    title: {
      en: "How to prepare an Etsy suspension appeal",
      ru: "Как подготовить апелляцию Etsy",
      uk: "Як підготувати апеляцію Etsy",
    },
    situation: {
      en: "An Etsy appeal should explain what happened, what has been corrected and how future shop activity will comply, without guessing at facts or promising impossible outcomes.",
      ru: "Апелляция Etsy должна объяснять событие, исправления и дальнейшее соблюдение правил без догадок и невозможных обещаний.",
      uk: "Апеляція Etsy має пояснювати подію, виправлення й подальше дотримання правил без здогадок і неможливих обіцянок.",
    },
    trigger: {
      en: "a decision for which Etsy currently offers an appeal path and where the seller can provide a specific, verifiable response",
      ru: "решение, для которого Etsy сейчас предлагает апелляцию и на которое продавец может дать конкретный проверяемый ответ",
      uk: "рішення, для якого Etsy наразі пропонує апеляцію й на яке продавець може дати конкретну перевірювану відповідь",
    },
    action: {
      en: "quote the notice, identify the affected shop activity, describe corrective action and keep the submission concise",
      ru: "процитировать уведомление, определить затронутую активность, описать исправления и сделать обращение кратким",
      uk: "процитувати повідомлення, визначити порушену активність, описати виправлення й зробити звернення стислим",
    },
    document: {
      en: "the decision, relevant listing or order records and evidence supporting each material statement",
      ru: "решение, связанные объявления или заказы и доказательства каждого существенного утверждения",
      uk: "рішення, пов’язані оголошення чи замовлення та докази кожного істотного твердження",
    },
    mistake: {
      en: "copying a generic appeal, blaming users without evidence or contradicting information already submitted",
      ru: "копировать общий шаблон, обвинять пользователей без доказательств или противоречить ранее поданным сведениям",
      uk: "копіювати загальний шаблон, звинувачувати користувачів без доказів або суперечити раніше поданим відомостям",
    },
  },
  {
    platformId: "etsy",
    slug: "shop-suspended-after-opening",
    intent: "verification",
    title: {
      en: "Etsy shop suspended soon after opening",
      ru: "Магазин Etsy заблокирован после открытия",
      uk: "Магазин Etsy заблоковано після відкриття",
    },
    situation: {
      en: "A newly opened shop may be paused while seller, payment or listing information is checked. The timing alone does not identify the cause.",
      ru: "Новый магазин могут приостановить для проверки продавца, платежей или объявлений. Сам момент блокировки не указывает причину.",
      uk: "Новий магазин можуть призупинити для перевірки продавця, платежів або оголошень. Сам момент блокування не вказує причину.",
    },
    trigger: {
      en: "unfinished onboarding, payment verification, identity mismatch, unusual access or a listing requiring review",
      ru: "незавершённая регистрация, проверка платежей, расхождение личности, необычный доступ или проверка объявления",
      uk: "незавершена реєстрація, перевірка платежів, розбіжність особи, незвичний доступ або перевірка оголошення",
    },
    action: {
      en: "review onboarding steps, payment settings, identity details and the exact status of the first listings",
      ru: "проверить этапы регистрации, платежные настройки, данные личности и точный статус первых объявлений",
      uk: "перевірити етапи реєстрації, платіжні налаштування, дані особи й точний статус перших оголошень",
    },
    document: {
      en: "seller identity, bank or card verification, tax or business details and product records where requested",
      ru: "личность продавца, банковская проверка, налоговые или бизнес-данные и сведения о товаре по запросу",
      uk: "особа продавця, банківська перевірка, податкові чи бізнес-дані та відомості про товар за запитом",
    },
    mistake: {
      en: "repeating registration with different details or making rapid profile changes before the review is understood",
      ru: "повторная регистрация с другими данными или быстрые изменения профиля до понимания проверки",
      uk: "повторна реєстрація з іншими даними або швидкі зміни профілю до розуміння перевірки",
    },
  },
  {
    platformId: "grailed",
    slug: "frozen-after-sale",
    intent: "payout",
    title: {
      en: "Grailed account frozen after a sale",
      ru: "Аккаунт Grailed заморожен после продажи",
      uk: "Акаунт Grailed заморожено після продажу",
    },
    situation: {
      en: "A freeze after a sale may involve account security, transaction review, item authenticity, delivery or payment risk. The order and account issues should be separated.",
      ru: "Заморозка после продажи может касаться безопасности, сделки, подлинности, доставки или платежного риска. Заказ и аккаунт нужно анализировать отдельно.",
      uk: "Замороження після продажу може стосуватися безпеки, угоди, автентичності, доставки або платіжного ризику. Замовлення й акаунт слід аналізувати окремо.",
    },
    trigger: {
      en: "a first or unusual sale, item concerns, buyer dispute, tracking inconsistency or account verification",
      ru: "первая или необычная продажа, вопросы к товару, спор покупателя, трекинг или проверка аккаунта",
      uk: "перша або незвична продаж, питання до товару, спір покупця, трекінг або перевірка акаунта",
    },
    action: {
      en: "preserve the listing, chat, payment and tracking trail, then read the freeze message before contacting support",
      ru: "сохранить объявление, чат, платёж и трекинг, затем прочитать сообщение о заморозке до обращения",
      uk: "зберегти оголошення, чат, платіж і трекінг, потім прочитати повідомлення про замороження до звернення",
    },
    document: {
      en: "item purchase and authenticity records, shipment acceptance, delivery and buyer communication",
      ru: "покупка и подлинность товара, приём отправления, доставка и переписка с покупателем",
      uk: "купівля й автентичність товару, приймання відправлення, доставка та листування з покупцем",
    },
    mistake: {
      en: "moving the transaction off-platform, altering tracking or deleting listing evidence",
      ru: "перевод сделки вне платформы, изменение трекинга или удаление доказательств объявления",
      uk: "переведення угоди поза платформу, зміна трекінгу або видалення доказів оголошення",
    },
  },
  {
    platformId: "vestiaire",
    slug: "payout-or-account-blocked",
    intent: "payout",
    title: {
      en: "Vestiaire Collective payout or account blocked",
      ru: "Выплата или аккаунт Vestiaire Collective заблокированы",
      uk: "Виплату або акаунт Vestiaire Collective заблоковано",
    },
    situation: {
      en: "A blocked payout and a blocked account are different conditions, even when they appear together. Authentication, order completion, compliance or payment details may be involved.",
      ru: "Блокировка выплаты и аккаунта — разные состояния, даже если возникли вместе. Возможны вопросы аутентификации, заказа, проверки или реквизитов.",
      uk: "Блокування виплати й акаунта — різні стани, навіть якщо виникли разом. Можливі питання автентифікації, замовлення, перевірки або реквізитів.",
    },
    trigger: {
      en: "an authentication outcome, order return, identity check, payout-detail mismatch or account security review",
      ru: "результат аутентификации, возврат заказа, проверка личности, расхождение реквизитов или безопасность",
      uk: "результат автентифікації, повернення замовлення, перевірка особи, розбіжність реквізитів або безпека",
    },
    action: {
      en: "identify whether the restriction is order-level or account-level and collect the corresponding timeline and references",
      ru: "определить уровень ограничения — заказ или аккаунт — и собрать соответствующую хронологию и номера",
      uk: "визначити рівень обмеження — замовлення чи акаунт — і зібрати відповідну хронологію та номери",
    },
    document: {
      en: "order reference, authentication result, shipment and return tracking, identity and payout ownership records",
      ru: "номер заказа, результат аутентификации, трекинг отправки и возврата, личность и владение реквизитами",
      uk: "номер замовлення, результат автентифікації, трекінг відправлення й повернення, особа та володіння реквізитами",
    },
    mistake: {
      en: "treating authentication and payout as one issue or sending unredacted sensitive documents through an unofficial channel",
      ru: "смешивать аутентификацию и выплату или отправлять незакрытые чувствительные документы в неофициальный канал",
      uk: "змішувати автентифікацію й виплату або надсилати незакриті чутливі документи неофіційним каналом",
    },
  },
];

const common = {
  en: {
    symptoms: [
      "A warning or restriction appears in the account",
      "One or more normal account actions are unavailable",
      "The platform asks for information or says a review is open",
    ],
    reasons: [
      "Automated risk signals can start a review, but the notification is more useful than guessing.",
      "Account details and transaction records may not align or may require confirmation.",
      "A policy, security, payment or compliance question may need a human review.",
    ],
    steps: [
      "Save the exact notification, date, reference and screenshots before changing the account.",
      "Check profile, transaction and order facts for genuine inconsistencies.",
      "Respond through the channel shown in the account with a concise, factual package.",
    ],
    mistakes: [
      "Do not create linked accounts or try to bypass identity and security checks.",
      "Do not alter documents, hide the source of funds or invent an explanation.",
      "Do not send passwords, full card numbers or unredacted sensitive documents.",
    ],
  },
  ru: {
    symptoms: [
      "В аккаунте появилось предупреждение или ограничение",
      "Одна или несколько обычных функций недоступны",
      "Платформа запрашивает сведения или сообщает о проверке",
    ],
    reasons: [
      "Автоматический сигнал может начать проверку, но уведомление полезнее догадок.",
      "Данные аккаунта и операций могут расходиться или требовать подтверждения.",
      "Вопрос правил, безопасности, платежей или соответствия может требовать ручной проверки.",
    ],
    steps: [
      "Сохраните точный текст, дату, номер дела и снимки до изменений аккаунта.",
      "Сверьте профиль, операции и заказы на реальные расхождения.",
      "Ответьте через указанный в аккаунте канал кратким фактическим пакетом.",
    ],
    mistakes: [
      "Не создавайте связанные аккаунты и не обходите проверки личности или безопасности.",
      "Не изменяйте документы, не скрывайте происхождение средств и не выдумывайте объяснение.",
      "Не отправляйте пароли, полный номер карты или незакрытые чувствительные документы.",
    ],
  },
  uk: {
    symptoms: [
      "В акаунті з’явилося попередження або обмеження",
      "Одна чи кілька звичайних функцій недоступні",
      "Платформа запитує відомості або повідомляє про перевірку",
    ],
    reasons: [
      "Автоматичний сигнал може почати перевірку, але повідомлення корисніше за здогадки.",
      "Дані акаунта й операцій можуть не збігатися або потребувати підтвердження.",
      "Питання правил, безпеки, платежів або відповідності може потребувати ручної перевірки.",
    ],
    steps: [
      "Збережіть точний текст, дату, номер справи та знімки до змін акаунта.",
      "Звірте профіль, операції й замовлення на реальні розбіжності.",
      "Відповідайте через указаний в акаунті канал стислим фактичним пакетом.",
    ],
    mistakes: [
      "Не створюйте пов’язані акаунти й не обходьте перевірки особи чи безпеки.",
      "Не змінюйте документи, не приховуйте походження коштів і не вигадуйте пояснення.",
      "Не надсилайте паролі, повний номер картки або незакриті чутливі документи.",
    ],
  },
} as const;

function section(title: string, text: string) {
  return { title, text };
}

function publishedContent(brief: Brief, locale: Locale): LocalizedIssueContent {
  const n = names[brief.platformId];
  const c = common[locale];
  const isEn = locale === "en";
  const isRu = locale === "ru";
  const isMc011Restriction =
    brief.platformId === "ebay" && brief.slug === "mc011-restriction";
  const isPayPalBalanceAfterLimitation =
    brief.platformId === "paypal" &&
    brief.slug === "funds-frozen-after-limitation";
  const reasonTitle = isMc011Restriction
    ? isEn
      ? "What the notice can tell you"
      : isRu
        ? "Что можно понять из уведомления"
        : "Що можна зрозуміти з повідомлення"
    : isEn
      ? "Why this may happen"
      : isRu
        ? "Почему это могло произойти"
        : "Чому це могло статися";
  const factTitle = isEn
    ? "Check the facts"
    : isRu
      ? "Сверьте факты"
      : "Звірте факти";
  const requestTitle = isEn
    ? "Follow the request"
    : isRu
      ? "Следуйте запросу"
      : "Дотримуйтеся запиту";
  const safeTitle = isEn
    ? "Keep the response safe"
    : isRu
      ? "Сохраняйте безопасность"
      : "Дбайте про безпеку";
  const docTitle = isEn
    ? "Relevant records"
    : isRu
      ? "Связанные документы"
      : "Пов’язані документи";
  const exactTitle = isEn
    ? "Use the exact checklist"
    : isRu
      ? "Используйте точный список"
      : "Використовуйте точний список";
  const introLead = isEn
    ? `This guide explains ${brief.title.en.toLowerCase()} without promising an account restoration or fund release.`
    : isRu
      ? `Этот материал разбирает ситуацию «${brief.title.ru}» без обещания восстановления аккаунта или выплаты.`
      : `Цей матеріал розбирає ситуацію «${brief.title.uk}» без обіцянки відновлення акаунта чи виплати.`;
  const quickLead = isEn
    ? "Start with the exact account notification rather than forum assumptions."
    : isRu
      ? "Начните с точного уведомления в аккаунте, а не с предположений на форумах."
      : "Почніть із точного повідомлення в акаунті, а не з припущень на форумах.";
  return {
    title: brief.title[locale],
    metaTitle: `${brief.title[locale]} | ${n} guide`.slice(0, 75),
    metaDescription: isMc011Restriction
      ? isEn
        ? "Understand an eBay MC011 notice: verify it in signed-in Messages, identify the affected account functions, and classify the next step without guessing."
        : isRu
          ? "Разберитесь в уведомлении eBay MC011: проверьте его в Messages, определите затронутые функции аккаунта и следующий тип задачи без догадок."
          : "Розберіться в повідомленні eBay MC011: перевірте його в Messages, визначте порушені функції акаунта й наступний тип завдання без здогадок."
      : isPayPalBalanceAfterLimitation
        ? isEn
          ? "PayPal balance unavailable after a limitation? Separate available, pending, held, reserved, disputed and withdrawal states before choosing what to do."
          : isRu
            ? "Баланс PayPal недоступен после ограничения? Разделите доступную, ожидающую, удержанную, спорную сумму, резерв и вывод до следующего шага."
            : "Баланс PayPal недоступний після обмеження? Розділіть доступну, очікувану, утриману, спірну суму, резерв і виведення до наступного кроку."
        : isEn
        ? `${brief.title.en}: understand the notice, likely review areas, safe first checks, useful records and mistakes to avoid.`
        : isRu
          ? `${brief.title.ru}: смысл уведомления, безопасные первые действия, документы и ошибки, которых стоит избегать.`
          : `${brief.title.uk}: зміст повідомлення, безпечні перші дії, документи та помилки, яких варто уникати.`,
    intro: isPayPalBalanceAfterLimitation
      ? `${brief.situation[locale]} ${
          isEn
            ? "If the authenticated notice specifically states an up-to-180-day hold, use the separate notice-and-date guide instead."
            : isRu
              ? "Если в подтверждённом уведомлении прямо указано удержание до 180 дней, используйте отдельный материал о сроке и дате."
              : "Якщо в підтвердженому повідомленні прямо зазначено утримання до 180 днів, використовуйте окремий матеріал про строк і дату."
        }`
      : `${introLead} ${brief.situation[locale]}`,
    quickAnswer: isPayPalBalanceAfterLimitation
      ? `${
          isEn
            ? "Do not start with a countdown."
            : isRu
              ? "Не начинайте с обратного отсчёта."
              : "Не починайте зі зворотного відліку."
        } ${brief.action[locale]}.`
      : `${quickLead} ${brief.action[locale]}.`,
    meaning: brief.situation[locale],
    symptoms: isMc011Restriction
      ? isEn
        ? [
            "An MC011 reference appears in an eBay account message",
            "The notice may name one or more affected account functions",
            "The wording points to a next task that still needs classification",
          ]
        : isRu
          ? [
              "В сообщении аккаунта eBay указано обозначение MC011",
              "В уведомлении могут быть названы затронутые функции аккаунта",
              "По тексту ещё нужно определить тип следующей задачи",
            ]
          : [
              "У повідомленні акаунта eBay зазначено позначення MC011",
              "У повідомленні можуть бути названі порушені функції акаунта",
              "За текстом іще потрібно визначити тип наступного завдання",
            ]
      : [...c.symptoms],
    possibleReasons: isMc011Restriction
      ? [
          section(
            reasonTitle,
            isEn
              ? "The MC011 code does not provide a universal cause by itself. Use the authenticated message to understand the current restriction."
              : isRu
                ? "Сам код MC011 не определяет универсальную причину. Текущее ограничение нужно понимать по подтверждённому сообщению."
                : "Сам код MC011 не визначає універсальної причини. Поточне обмеження слід розуміти за підтвердженим повідомленням.",
          ),
          section(
            factTitle,
            isEn
              ? "Record the registered market, exact notice wording and functions explicitly named as affected. Do not extend the notice beyond what it says."
              : isRu
                ? "Отметьте рынок регистрации, точный текст и функции, прямо названные затронутыми. Не расширяйте смысл уведомления."
                : "Зазначте ринок реєстрації, точний текст і функції, прямо названі порушеними. Не розширюйте зміст повідомлення.",
          ),
          section(
            requestTitle,
            isEn
              ? "Classify the named next task as an evidence request, payout issue, broad suspension or another action. Each belongs to a different guide."
              : isRu
                ? "Определите, что названо дальше: запрос доказательств, проблема выплаты, широкая блокировка или другое действие. Для них нужны разные материалы."
                : "Визначте, що названо далі: запит доказів, проблема виплати, широке блокування чи інша дія. Для них потрібні різні матеріали.",
          ),
        ]
      : [
          section(
            reasonTitle,
            `${isEn ? "The review may involve" : isRu ? "Проверка может касаться" : "Перевірка може стосуватися"} ${brief.trigger[locale]}.`,
          ),
          section(factTitle, c.reasons[1]),
          section(requestTitle, c.reasons[2]),
        ],
    firstSteps: isMc011Restriction
      ? [
          section(
            isEn
              ? "Verify the message"
              : isRu
                ? "Проверьте сообщение"
                : "Перевірте повідомлення",
            isEn
              ? "Confirm that the same notice appears in eBay Messages after you sign in. Do not rely only on an email, text message, call or external link."
              : isRu
                ? "Убедитесь, что такое же уведомление есть в eBay Messages после входа. Не полагайтесь только на письмо, SMS, звонок или внешнюю ссылку."
                : "Переконайтеся, що таке саме повідомлення є в eBay Messages після входу. Не покладайтеся лише на лист, SMS, дзвінок або зовнішнє посилання.",
          ),
          section(
            factTitle,
            isEn
              ? "Save the exact wording and note only the account functions that the authenticated notice names. Similar codes do not prove identical scope."
              : isRu
                ? "Сохраните точный текст и отметьте только функции, названные в подтверждённом уведомлении. Одинаковый код не доказывает одинаковый объём ограничения."
                : "Збережіть точний текст і зазначте лише функції, названі в підтвердженому повідомленні. Однаковий код не доводить однакового обсягу обмеження.",
          ),
          section(
            requestTitle,
            isEn
              ? "Use the wording to choose the correct next guide. If it requests evidence, move to the MC011 documents-requested guide; this page stops before preparation."
              : isRu
                ? "По тексту выберите подходящий следующий материал. Если запрошены доказательства, перейдите к материалу о документах MC011; эта страница заканчивается до подготовки."
                : "За текстом оберіть відповідний наступний матеріал. Якщо запитано докази, перейдіть до матеріалу про документи MC011; ця сторінка завершується до підготовки.",
          ),
        ]
      : [
          section(
            isEn
              ? "Preserve the notice"
              : isRu
                ? "Сохраните уведомление"
                : "Збережіть повідомлення",
            c.steps[0],
          ),
          section(factTitle, `${c.steps[1]} ${brief.action[locale]}.`),
          section(requestTitle, c.steps[2]),
        ],
    mistakesToAvoid: isMc011Restriction
      ? [
          section(
            isEn
              ? "Do not infer the cause"
              : isRu
                ? "Не додумывайте причину"
                : "Не домислюйте причину",
            `${brief.mistake[locale]}.`,
          ),
          section(
            isEn
              ? "Do not copy another case"
              : isRu
                ? "Не переносите чужой случай"
                : "Не переносіть чужий випадок",
            isEn
              ? "Another seller's MC011 message does not establish the scope or next action shown in your account."
              : isRu
                ? "Сообщение MC011 другого продавца не определяет объём ограничения или следующее действие в вашем аккаунте."
                : "Повідомлення MC011 іншого продавця не визначає обсяг обмеження чи наступну дію у вашому акаунті.",
          ),
          section(
            safeTitle,
            isEn
              ? "Do not share account information through an unverified contact. Use the signed-in message as the reference for the next step."
              : isRu
                ? "Не передавайте сведения об аккаунте неподтверждённому контакту. Ориентируйтесь на сообщение после входа."
                : "Не передавайте дані акаунта непідтвердженому контакту. Орієнтуйтеся на повідомлення після входу.",
          ),
        ]
      : [
          section(
            isEn
              ? "Do not bypass checks"
              : isRu
                ? "Не обходите проверку"
                : "Не обходьте перевірку",
            c.mistakes[0],
          ),
          section(
            isEn
              ? "Keep evidence genuine"
              : isRu
                ? "Только подлинные доказательства"
                : "Лише справжні докази",
            `${c.mistakes[1]} ${brief.mistake[locale]}.`,
          ),
          section(safeTitle, c.mistakes[2]),
        ],
    documentsOftenRequested: brief.omitDocumentsSection
      ? undefined
      : [
          section(docTitle, `${brief.document[locale]}.`),
          section(
            exactTitle,
            isEn
              ? "The accepted format and document list can change. Use the current checklist displayed by the platform and redact unrelated sensitive numbers when permitted."
              : isRu
                ? "Формат и список могут меняться. Следуйте актуальному списку платформы и закрывайте посторонние чувствительные номера, если это допускается."
                : "Формат і список можуть змінюватися. Дотримуйтеся актуального списку платформи й закривайте сторонні чутливі номери, якщо це дозволено.",
          ),
        ],
    whenToContactSupport: isMc011Restriction
      ? isEn
        ? "Use official eBay support when the authenticated notice is unclear or its named action is unavailable. Support can clarify the current message, but this guide cannot predict a decision or outcome."
        : isRu
          ? "Обратитесь в официальную поддержку eBay, если подтверждённое уведомление неясно или названное действие недоступно. Поддержка может уточнить сообщение, но этот материал не предсказывает решение или результат."
          : "Зверніться до офіційної підтримки eBay, якщо підтверджене повідомлення незрозуміле або названа дія недоступна. Підтримка може уточнити повідомлення, але цей матеріал не прогнозує рішення чи результат."
      : isEn
        ? "Contact official platform support when the account instructions cannot be completed, the upload channel fails, or the decision does not match the evidence shown. An independent review can help organize the facts, but cannot replace the platform’s decision."
        : isRu
          ? "Обратитесь в официальную поддержку, если инструкции невозможно выполнить, канал загрузки не работает или решение не соответствует показанным данным. Независимый разбор поможет упорядочить факты, но не заменит решение платформы."
          : "Зверніться до офіційної підтримки, якщо інструкції неможливо виконати, канал завантаження не працює або рішення не відповідає показаним даним. Незалежний розбір допоможе впорядкувати факти, але не замінить рішення платформи.",
    faq: isMc011Restriction
      ? [
          {
            question: isEn
              ? "Does the MC011 code show the cause by itself?"
              : isRu
                ? "Код MC011 сам по себе показывает причину?"
                : "Код MC011 сам по собі показує причину?",
            answer: isEn
              ? "No. Use the authenticated notice to understand the restriction shown for the account. Do not infer a universal trigger from the code."
              : isRu
                ? "Нет. Ограничение для аккаунта нужно понимать по подтверждённому уведомлению. Не выводите универсальную причину из одного кода."
                : "Ні. Обмеження для акаунта слід розуміти за підтвердженим повідомленням. Не виводьте універсальну причину з самого коду.",
          },
          {
            question: isEn
              ? "What should I check first?"
              : isRu
                ? "Что проверить в первую очередь?"
                : "Що перевірити насамперед?",
            answer: isEn
              ? "Verify the notice in signed-in eBay Messages, record the registered market and exact wording, and note only the functions it names as affected."
              : isRu
                ? "Проверьте уведомление в eBay Messages после входа, запишите рынок регистрации и точный текст, затем отметьте только прямо названные функции."
                : "Перевірте повідомлення в eBay Messages після входу, запишіть ринок реєстрації й точний текст, а потім зазначте лише прямо названі функції.",
          },
          {
            question: isEn
              ? "What if the notice requests evidence?"
              : isRu
                ? "Что делать, если в уведомлении запрошены доказательства?"
                : "Що робити, якщо в повідомленні запитано докази?",
            answer: isEn
              ? "Use the separate MC011 documents-requested guide for that preparation stage. The authenticated notice remains controlling; this page does not define a document package or submission process."
              : isRu
                ? "Для этапа подготовки используйте отдельный материал о запросе документов MC011. Определяющим остаётся подтверждённое уведомление; эта страница не задаёт пакет или процесс отправки."
                : "Для етапу підготовки використовуйте окремий матеріал про запит документів MC011. Визначальним лишається підтверджене повідомлення; ця сторінка не задає пакет чи процес надсилання.",
          },
        ]
      : [
          {
            question: isEn
              ? "Does this notice guarantee a permanent outcome?"
              : isRu
                ? "Это уведомление гарантирует окончательный результат?"
                : "Це повідомлення гарантує остаточний результат?",
            answer: isEn
              ? "No. Read the status and options currently displayed in the account. Different notices can use similar wording while offering different next steps."
              : isRu
                ? "Нет. Смотрите текущий статус и доступные действия в аккаунте: похожие формулировки могут вести к разным следующим шагам."
                : "Ні. Дивіться поточний статус і доступні дії в акаунті: схожі формулювання можуть вести до різних наступних кроків.",
          },
          {
            question: isEn
              ? "Should I send every document I have?"
              : isRu
                ? "Нужно отправлять все документы сразу?"
                : "Чи треба надсилати всі документи одразу?",
            answer: isEn
              ? "Usually no. Send the genuine records that answer the current request, in the accepted format, and avoid exposing unrelated sensitive information."
              : isRu
                ? "Обычно нет. Отправляйте подлинные документы по текущему запросу в допустимом формате и не раскрывайте лишние чувствительные сведения."
                : "Зазвичай ні. Надсилайте справжні документи за поточним запитом у прийнятному форматі й не розкривайте зайві чутливі відомості.",
          },
          {
            question: isEn
              ? "Can anyone guarantee restoration or payment?"
              : isRu
                ? "Кто-то может гарантировать восстановление или выплату?"
                : "Хтось може гарантувати відновлення або виплату?",
            answer: isEn
              ? "No independent service controls the platform’s review. Be cautious with anyone promising a guaranteed result, internal access or a way to bypass checks."
              : isRu
                ? "Независимый сервис не управляет проверкой платформы. Остерегайтесь обещаний гарантированного результата, внутреннего доступа или обхода проверок."
                : "Незалежний сервіс не керує перевіркою платформи. Остерігайтеся обіцянок гарантованого результату, внутрішнього доступу або обходу перевірок.",
          },
        ],
    relatedIssueIds: [],
    ctaTitle: isEn
      ? `Review your ${n} case before responding`
      : isRu
        ? `Разберите ситуацию ${n} до ответа`
        : `Розберіть ситуацію ${n} до відповіді`,
    ctaText: isEn
      ? "Share the redacted notification, country, account type and a short timeline. We can help structure the case without asking for passwords or promising an outcome."
      : isRu
        ? "Пришлите закрытое уведомление, страну, тип аккаунта и краткую хронологию. Мы поможем структурировать ситуацию без паролей и обещаний результата."
        : "Надішліть закрите повідомлення, країну, тип акаунта й стислу хронологію. Ми допоможемо структурувати ситуацію без паролів та обіцянок результату.",
  };
}

const publishedIssues: IssuePage[] = publishedBriefs.map((brief, index) => ({
  id: `${brief.platformId}-${brief.slug}`,
  platformId: brief.platformId,
  slug: brief.slug,
  intent: brief.intent,
  tags: [brief.intent, brief.slug.split("-")[0] || "account"],
  priority: index < 10 ? 1 : 2,
  status: "published",
  updatedAt: "2026-07-15",
  reviewedAt: "2026-07-15",
  reviewStatus: "fact-checked",
  sources: sources[brief.platformId] || [],
  needsLegalReview: false,
  needsFactCheck: false,
  keywords: {
    primary: brief.title.en.toLowerCase(),
    secondary: [brief.slug.replaceAll("-", " "), names[brief.platformId]!],
  },
  content: {
    en: publishedContent(brief, "en"),
    ru: publishedContent(brief, "ru"),
    uk: publishedContent(brief, "uk"),
  },
}));

const topicSlugs: Record<string, string[]> = {
  paypal: [
    "account-restricted",
    "account-frozen",
    "account-locked",
    "verification-failed",
    "identity-verification",
    "source-of-funds-requested",
    "account-review",
    "payment-pending",
    "reserve-applied",
    "withdrawal-unavailable",
    "requested-documents",
    "proof-of-delivery-requested",
    "tracking-requested",
    "business-information-requested",
    "limited-after-changing-details",
    "limited-without-obvious-reason",
    "limited-after-first-sale",
    "limited-after-chargeback",
    "limited-after-large-payment",
    "bank-account-linking-problem",
    "card-confirmation-problem",
    "name-mismatch-review",
    "refund-under-review",
    "receiving-money-unavailable",
    "merchant-review",
  ],
  ebay: [
    "permanently-suspended",
    "account-restricted",
    "account-locked",
    "verification-failed",
    "identity-verification",
    "proof-of-address-requested",
    "supplier-invoices-requested",
    "source-of-inventory-requested",
    "account-review",
    "appeal-denied",
    "how-to-appeal",
    "payout-frozen",
    "payment-pending",
    "reserve-applied",
    "withdrawal-unavailable",
    "listing-removed",
    "counterfeit-claim",
    "intellectual-property-complaint",
    "suspended-after-sale",
    "suspended-after-changing-details",
    "suspended-without-obvious-reason",
    "proof-of-delivery-requested",
    "tracking-requested",
    "business-information-requested",
    "mc999-restriction",
  ],
  etsy: [
    "account-restricted",
    "account-frozen",
    "verification-failed",
    "identity-verification",
    "proof-of-address-requested",
    "taxpayer-verification",
    "account-review",
    "appeal-denied",
    "payout-on-hold",
    "funds-frozen",
    "payment-reserve",
    "deposit-delayed",
    "listing-removed",
    "intellectual-property-complaint",
    "counterfeit-claim",
    "suspended-after-first-sale",
    "suspended-after-payment",
    "suspended-after-changing-details",
    "suspended-without-obvious-reason",
    "requested-documents",
    "proof-of-delivery-requested",
    "tracking-requested",
  ],
  grailed: [
    "account-suspended",
    "account-restricted",
    "identity-verification",
    "account-review",
    "appeal-denied",
    "how-to-appeal",
    "payout-on-hold",
    "payment-pending",
    "listing-removed",
    "authenticity-issue",
    "counterfeit-claim",
    "suspended-after-first-sale",
    "tracking-requested",
    "proof-of-delivery-requested",
  ],
  vestiaire: [
    "account-suspended",
    "account-restricted",
    "identity-verification",
    "proof-of-address-requested",
    "account-review",
    "appeal-denied",
    "how-to-appeal",
    "payout-on-hold",
    "payment-pending",
    "listing-removed",
    "authenticity-issue",
    "counterfeit-claim",
    "suspended-after-first-sale",
    "requested-documents",
  ],
  depop: [
    "account-suspended",
    "account-restricted",
    "identity-verification",
    "appeal-denied",
    "how-to-appeal",
    "payout-on-hold",
    "listing-removed",
    "counterfeit-claim",
    "suspended-after-first-sale",
    "tracking-requested",
  ],
  vinted: [
    "account-suspended",
    "account-restricted",
    "identity-verification",
    "appeal-denied",
    "wallet-frozen",
    "payout-on-hold",
    "listing-removed",
    "counterfeit-claim",
    "suspended-after-first-sale",
    "tracking-requested",
  ],
  stripe: [
    "account-restricted",
    "identity-verification",
    "business-verification",
    "source-of-funds-requested",
    "account-review",
    "payout-on-hold",
    "reserve-applied",
    "payouts-disabled",
  ],
  "amazon-seller": [
    "account-suspended",
    "identity-verification",
    "appeal-denied",
    "how-to-appeal",
    "payout-on-hold",
    "listing-removed",
    "supplier-invoices-requested",
  ],
  "facebook-marketplace": ["commerce-account-restricted", "listing-removed"],
  stockx: ["account-restricted", "payout-on-hold"],
  goat: ["seller-account-suspended", "payout-on-hold"],
  wise: ["account-under-review", "source-of-funds-requested"],
  "revolut-business": [
    "business-account-restricted",
    "source-of-funds-requested",
  ],
  "shopify-payments": ["payouts-on-hold", "reserve-applied"],
};

const existing = new Set(publishedIssues.map((issue) => issue.id));
const pretty = (slug: string) =>
  slug
    .split("-")
    .map((word) =>
      word === "mc011" || word === "mc999" ? word.toUpperCase() : word,
    )
    .join(" ");

function draftContent(
  platform: string,
  slug: string,
  locale: Locale,
): LocalizedIssueContent {
  const topic = pretty(slug);
  const n = names[platform];
  const c = common[locale];
  const localizedTopic =
    locale === "en"
      ? topic
      : locale === "ru"
        ? `проблема «${topic}»`
        : `проблема «${topic}»`;
  const title =
    locale === "en"
      ? `${n}: ${topic}`
      : locale === "ru"
        ? `${n}: ${localizedTopic}`
        : `${n}: ${localizedTopic}`;
  return {
    title,
    metaTitle: `${title} | Editorial draft`.slice(0, 75),
    metaDescription:
      locale === "en"
        ? `Editorial draft about ${topic} on ${n}: notification context, safe checks, evidence categories and review questions before publication.`
        : locale === "ru"
          ? `Редакционный черновик о ${localizedTopic} в ${n}: контекст, безопасные проверки, категории доказательств и вопросы до публикации.`
          : `Редакційна чернетка про ${localizedTopic} у ${n}: контекст, безпечні перевірки, категорії доказів і питання до публікації.`,
    intro:
      locale === "en"
        ? `This unpublished editorial record maps the search intent around ${topic} on ${n}. Platform-specific claims must be fact-checked against the current notice and official policy before release.`
        : locale === "ru"
          ? `Этот неопубликованный редакционный материал описывает поисковый запрос про ${localizedTopic} в ${n}. Специфические утверждения нужно сверить с текущим уведомлением и правилами до публикации.`
          : `Цей неопублікований редакційний матеріал описує пошуковий запит про ${localizedTopic} у ${n}. Специфічні твердження слід звірити з поточним повідомленням і правилами до публікації.`,
    quickAnswer:
      locale === "en"
        ? `Preserve the exact ${n} notice and avoid irreversible account changes. This page remains a draft until its topic-specific procedure and sources are reviewed.`
        : locale === "ru"
          ? `Сохраните точное уведомление ${n} и избегайте необратимых изменений аккаунта. Страница остаётся черновиком до проверки процедуры и источников.`
          : `Збережіть точне повідомлення ${n} й уникайте незворотних змін акаунта. Сторінка лишається чернеткою до перевірки процедури та джерел.`,
    meaning:
      locale === "en"
        ? `The phrase ${topic} may describe different account states. The visible notice, affected function and current support path must be confirmed before interpreting it.`
        : locale === "ru"
          ? `Фраза «${topic}» может описывать разные состояния аккаунта. До толкования нужно подтвердить уведомление, затронутую функцию и текущий канал поддержки.`
          : `Фраза «${topic}» може описувати різні стани акаунта. До тлумачення слід підтвердити повідомлення, порушену функцію й поточний канал підтримки.`,
    symptoms: [...c.symptoms],
    possibleReasons: c.reasons.map((text, index) =>
      section(
        `${locale === "en" ? "Review area" : locale === "ru" ? "Область проверки" : "Сфера перевірки"} ${index + 1}`,
        text,
      ),
    ),
    firstSteps: c.steps.map((text, index) =>
      section(
        `${locale === "en" ? "Safe check" : locale === "ru" ? "Безопасная проверка" : "Безпечна перевірка"} ${index + 1}`,
        text,
      ),
    ),
    mistakesToAvoid: c.mistakes.map((text, index) =>
      section(
        `${locale === "en" ? "Avoid" : locale === "ru" ? "Избегайте" : "Уникайте"} ${index + 1}`,
        text,
      ),
    ),
    documentsOftenRequested: [
      section(
        locale === "en"
          ? "Only relevant records"
          : locale === "ru"
            ? "Только относящиеся документы"
            : "Лише дотичні документи",
        locale === "en"
          ? `The evidence for ${topic} must be derived from the current ${n} request; no universal list should be assumed.`
          : locale === "ru"
            ? `Доказательства для «${topic}» определяются текущим запросом ${n}; универсальный список предполагать нельзя.`
            : `Докази для «${topic}» визначаються поточним запитом ${n}; універсального списку припускати не слід.`,
      ),
      section(
        locale === "en"
          ? "Protect sensitive data"
          : locale === "ru"
            ? "Защитите чувствительные данные"
            : "Захистіть чутливі дані",
        c.mistakes[2],
      ),
    ],
    whenToContactSupport:
      locale === "en"
        ? `Use official ${n} support when the account notice is unclear or its requested action cannot be completed. This draft does not yet define a platform-specific escalation path.`
        : locale === "ru"
          ? `Используйте официальную поддержку ${n}, если уведомление неясно или действие невозможно выполнить. Черновик пока не определяет специфический путь эскалации.`
          : `Використовуйте офіційну підтримку ${n}, якщо повідомлення неясне або дію неможливо виконати. Чернетка поки не визначає специфічний шлях ескалації.`,
    faq: [1, 2, 3].map((i) => ({
      question:
        locale === "en"
          ? `Editorial review question ${i} for ${topic}?`
          : locale === "ru"
            ? `Редакционный вопрос ${i} по теме «${topic}»?`
            : `Редакційне питання ${i} щодо теми «${topic}»?`,
      answer:
        locale === "en"
          ? `This answer requires topic-specific fact checking against the current ${n} notice and official source before the record can be published.`
          : locale === "ru"
            ? `Ответ требует тематической проверки по текущему уведомлению ${n} и официальному источнику до публикации записи.`
            : `Відповідь потребує тематичної перевірки за поточним повідомленням ${n} та офіційним джерелом до публікації запису.`,
    })),
    relatedIssueIds: [],
    ctaTitle:
      locale === "en"
        ? `Organize your ${n} case`
        : locale === "ru"
          ? `Структурируйте ситуацию ${n}`
          : `Структуруйте ситуацію ${n}`,
    ctaText:
      locale === "en"
        ? "Share a redacted notice and timeline for an individual assessment. Never send a password, full card number or unredacted identity document."
        : locale === "ru"
          ? "Пришлите закрытое уведомление и хронологию для индивидуального разбора. Никогда не отправляйте пароль, полный номер карты или незакрытый документ."
          : "Надішліть закрите повідомлення й хронологію для індивідуального розбору. Ніколи не надсилайте пароль, повний номер картки або незакритий документ.",
  };
}

const draftIssues: IssuePage[] = Object.entries(topicSlugs).flatMap(
  ([platformId, slugs]) =>
    slugs
      .filter((slug) => !existing.has(`${platformId}-${slug}`))
      .map((slug) => ({
        id: `${platformId}-${slug}`,
        platformId,
        slug,
        intent: slug.includes("appeal")
          ? "appeal"
          : slug.includes("verification") ||
              slug.includes("requested") ||
              slug.includes("review")
            ? "verification"
            : slug.includes("payout") ||
                slug.includes("fund") ||
                slug.includes("payment") ||
                slug.includes("reserve") ||
                slug.includes("withdraw")
              ? "payout"
              : "informational",
        tags: [slug.split("-")[0] || "account"],
        priority: 3,
        status: "draft",
        updatedAt: "2026-07-15",
        reviewedAt: null,
        reviewStatus: "unreviewed",
        sources: [],
        needsLegalReview: false,
        needsFactCheck: true,
        keywords: {
          primary: `${names[platformId]} ${pretty(slug)}`.toLowerCase(),
          secondary: [pretty(slug)],
        },
        content: {
          en: draftContent(platformId, slug, "en"),
          ru: draftContent(platformId, slug, "ru"),
          uk: draftContent(platformId, slug, "uk"),
        },
      })),
) as IssuePage[];

export const issues: IssuePage[] = [...publishedIssues, ...draftIssues];
