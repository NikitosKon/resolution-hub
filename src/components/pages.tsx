import Link from "next/link";
import { ArrowRight, Check, Search } from "lucide-react";
import type { Locale } from "@/lib/locales";
import {
  formatGuideCount,
  formatReadTime,
  getDictionary,
} from "@/data/dictionaries";
import {
  platforms,
  publishedForPlatform,
  publishedIssues,
  relatedIssues,
} from "@/data";
import type { IssuePage, Platform } from "@/data/schema";
import { HomeProblemSearch, IssueSearch } from "./client-controls";
import {
  Breadcrumbs,
  CaseReviewCTA,
  ContentSections,
  Disclaimer,
  DocumentsChecklist,
  FAQ,
  LastReviewed,
  LanguageLinks,
  MistakesList,
  QuickAnswer,
  RelatedArticles,
  SourceList,
  StepsList,
  TableOfContents,
} from "./site";
import { siteConfig } from "@/lib/config";
import { pathFor } from "@/lib/urls";
import { getV4Article } from "@/data/v4";
import type { V4ArticleBlock, V4ArticleContent } from "@/data/v4/types";
import { ArticleVisual } from "./article-visuals";
import type { ArticleDraft } from "@/lib/article-draft";

function estimateReadTime(issue: IssuePage, locale: Locale) {
  const words = JSON.stringify(issue.content[locale])
    .trim()
    .split(/\s+/).length;
  return Math.max(4, Math.round(words / 190));
}

function formatCompactDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function HomePage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const preferred = [
    ["paypal", "permanently-limited"],
    ["ebay", "mc011-documents-requested"],
    ["grailed", "frozen-after-sale"],
  ];
  const top = preferred
    .map(([platformId, slug]) =>
      publishedIssues.find(
        (issue) => issue.platformId === platformId && issue.slug === slug,
      ),
    )
    .filter((issue): issue is IssuePage => Boolean(issue));
  const latest = publishedIssues
    .filter((issue) => !top.some((item) => item.id === issue.id))
    .slice(0, 4);
  const copy =
    locale === "en"
      ? {
          title: ["Understand what", "happened to your account."],
          intro:
            "Clear guides for account restrictions, identity checks and payment holds.",
          search: "Paste the message or describe what happened…",
          most: "Most searched",
          platforms: "Platforms",
          guide: "guide",
          guides: "guides",
          latest: "Latest guides",
          checked: "Sources checked",
          helpTitle: "Still not sure what to do?",
          helpText:
            "Tell us what happened and share the message you received. Never send a password or login code.",
          telegram: "Ask in Telegram",
          examples: [
            "PayPal permanently limited",
            "eBay verification failed",
            "Grailed account frozen",
            "Etsy payment reserve",
            "Payment hold",
          ],
        }
      : locale === "ru"
        ? {
            title: ["Разберитесь, что произошло", "с вашим аккаунтом."],
            intro:
              "Понятные разборы ограничений, проверок личности и задержек выплат.",
            search: "Вставьте сообщение или опишите, что произошло…",
            most: "Чаще всего ищут",
            platforms: "Платформы",
            guide: "разбор",
            guides: "разборов",
            latest: "Новые разборы",
            checked: "Источники проверены",
            helpTitle: "Не уверены, что делать дальше?",
            helpText:
              "Расскажите, что произошло, и покажите полученное сообщение. Никогда не отправляйте пароль или код входа.",
            telegram: "Спросить в Telegram",
            examples: [
              "PayPal ограничен навсегда",
              "Проверка продавца eBay",
              "Аккаунт Grailed заморожен",
              "Резерв выплат Etsy",
              "Задержка выплаты",
            ],
          }
        : {
            title: ["Розберіться, що сталося", "з вашим акаунтом."],
            intro:
              "Зрозумілі розбори обмежень, перевірок особи та затримок виплат.",
            search: "Вставте повідомлення або опишіть, що сталося…",
            most: "Найчастіше шукають",
            platforms: "Платформи",
            guide: "розбір",
            guides: "розборів",
            latest: "Нові розбори",
            checked: "Джерела перевірено",
            helpTitle: "Не впевнені, що робити далі?",
            helpText:
              "Розкажіть, що сталося, і покажіть отримане повідомлення. Ніколи не надсилайте пароль або код входу.",
            telegram: "Запитати в Telegram",
            examples: [
              "PayPal обмежено назавжди",
              "Перевірка продавця eBay",
              "Акаунт Grailed заморожено",
              "Резерв виплат Etsy",
              "Затримка виплати",
            ],
          };
  const featuredPlatforms = platforms.filter((platform) =>
    ["paypal", "ebay", "grailed", "etsy", "vestiaire"].includes(platform.id),
  );
  const exampleIssues = copy.examples.map((label, index) => ({
    label,
    issue:
      publishedIssues.find(
        (issue) =>
          issue.platformId ===
          ["paypal", "ebay", "grailed", "etsy", "paypal"][index],
      ) ?? top[0],
  }));
  return (
    <main id="main" className="home-page">
      <section className="home-hero">
        <div className="home-shell">
          <div className="home-hero-grid">
            <div>
              <h1>
                {copy.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="home-intro">{copy.intro}</p>
            </div>
            <p className="home-trust-note">
              {d.hero.eyebrow.replace(
                /Sources checked\.|Источники проверены\.|Джерела перевірено\./,
                "",
              )}
              <strong>
                {locale === "en"
                  ? "Sources checked."
                  : locale === "ru"
                    ? "Источники проверены."
                    : "Джерела перевірено."}
              </strong>
            </p>
          </div>
          <HomeProblemSearch
            locale={locale}
            issues={publishedIssues}
            platforms={platforms}
            placeholder={copy.search}
            empty={d.category.empty}
          />
          <nav className="popular-row" aria-label={d.common.exampleSearches}>
            {exampleIssues.map(({ label, issue }) =>
              issue ? (
                <Link
                  key={label}
                  href={`/${locale}/${issue.platformId}/${issue.slug}/`}
                >
                  {label}
                </Link>
              ) : null,
            )}
          </nav>
        </div>
      </section>

      <section className="home-block home-most">
        <div className="home-shell">
          <div className="most-list">
            <h2>{copy.most}</h2>
            {top.map((issue) => (
              <Link
                className="most-row"
                key={issue.id}
                href={`/${locale}/${issue.platformId}/${issue.slug}/`}
              >
                <Search size={21} aria-hidden="true" />
                <h3>{issue.content[locale].title}</h3>
                <div className="most-row-meta">
                  <span>{copy.checked}</span>
                  <time dateTime={issue.reviewedAt ?? issue.updatedAt}>
                    {formatCompactDate(
                      issue.reviewedAt ?? issue.updatedAt,
                      locale,
                    )}
                  </time>
                  <span>
                    {formatReadTime(estimateReadTime(issue, locale), locale)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block platforms-strip" id="platforms">
        <div className="home-shell">
          <div className="home-section-heading">
            <h2>{copy.platforms}</h2>
          </div>
          <div className="platform-list">
            {featuredPlatforms.map((platform) => (
              <Link key={platform.id} href={`/${locale}/${platform.slug}/`}>
                <strong>{platform.name}</strong>
                <span>
                  {formatGuideCount(
                    publishedForPlatform(platform.id).length,
                    locale,
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-block">
        <div className="home-shell">
          <div className="home-section-heading">
            <h2>{copy.latest}</h2>
          </div>
          <div className="latest-list">
            {latest.map((issue) => (
              <Link
                key={issue.id}
                href={`/${locale}/${issue.platformId}/${issue.slug}/`}
              >
                <span>
                  {platforms.find((item) => item.id === issue.platformId)?.name}
                </span>
                <h3>{issue.content[locale].title}</h3>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-help">
        <div className="home-shell help-grid">
          <div>
            <h2>{copy.helpTitle}</h2>
            <p>{copy.helpText}</p>
          </div>
          <div className="help-action">
            <span>@helpgrailed</span>
            <a
              className="button primary"
              href={siteConfig.telegram}
              rel="noopener noreferrer"
            >
              {copy.telegram} <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export function PlatformPage({
  locale,
  platform,
}: {
  locale: Locale;
  platform: Platform;
}) {
  const d = getDictionary(locale);
  const list = publishedForPlatform(platform.id);
  return (
    <main id="main">
      <Breadcrumbs locale={locale} items={[{ label: platform.name }]} />
      <section className="article-hero">
        <div className="container">
          <p className="eyebrow">{d.platformKind[platform.kind]}</p>
          <h1>
            {platform.name} {d.category.title}
          </h1>
          <p className="lede">
            {platform.description[locale]} {d.category.intro}
          </p>
          <LanguageLinks locale={locale} segments={[platform.slug]} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <IssueSearch
            locale={locale}
            issues={list}
            platforms={platforms}
            placeholder={`${d.category.search}: ${platform.name}`}
            empty={d.category.empty}
          />
        </div>
      </section>
      <section className="section tint">
        <div className="container hub-list">
          {hubDefinitions.map((hub) => (
            <Link
              className="card"
              key={hub.slug}
              href={`/${locale}/${hub.slug}/`}
            >
              <h3>{hub.title[locale]}</h3>
              <p>{hub.description[locale]}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Disclaimer locale={locale} />
        </div>
      </section>
    </main>
  );
}

export function ArticlePage({
  locale,
  issue,
  platform,
}: {
  locale: Locale;
  issue: IssuePage;
  platform: Platform;
}) {
  const v4 = getV4Article(issue.id, locale);
  if (v4) {
    return (
      <V4ArticlePage
        locale={locale}
        issue={issue}
        platform={platform}
        content={v4}
      />
    );
  }
  const d = getDictionary(locale);
  const c = issue.content[locale];
  const related = relatedIssues(issue, 4);
  const telegramCopy =
    locale === "en"
      ? {
          title: "Still not sure what to do?",
          text: "Tell us what happened and share the message you received.",
        }
      : locale === "ru"
        ? {
            title: "Не уверены, что делать дальше?",
            text: "Расскажите, что произошло, и покажите полученное сообщение.",
          }
        : {
            title: "Не впевнені, що робити далі?",
            text: "Розкажіть, що сталося, і покажіть отримане повідомлення.",
          };
  return (
    <main id="main">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: platform.name, href: `/${locale}/${platform.slug}/` },
          { label: c.title },
        ]}
      />
      <article>
        <header className="article-hero">
          <div className="container">
            <p className="eyebrow">
              {platform.name} · {d.intent[issue.intent]}
            </p>
            <h1>{c.title}</h1>
            <p className="lede">{c.intro}</p>
            <div className="article-meta">
              <LastReviewed locale={locale} date={issue.updatedAt} />
              <span>{d.article.status}</span>
            </div>
            <LanguageLinks
              locale={locale}
              segments={[platform.slug, issue.slug]}
            />
          </div>
        </header>
        <div className="container article-layout">
          <TableOfContents
            locale={locale}
            hasDocuments={Boolean(c.documentsOftenRequested)}
          />
          <div className="prose">
            <QuickAnswer title={d.article.quick}>
              <p>{c.quickAnswer}</p>
            </QuickAnswer>
            <section id="meaning">
              <h2>{d.article.meaning}</h2>
              <p>{c.meaning}</p>
            </section>
            <section id="symptoms">
              <h2>{d.article.symptoms}</h2>
              <ul className="check-list">
                {c.symptoms.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section id="reasons">
              <h2>{d.article.reasons}</h2>
              <ContentSections sections={c.possibleReasons} />
            </section>
            {c.documentsOftenRequested && (
              <section id="documents">
                <h2>{d.article.documents}</h2>
                <DocumentsChecklist sections={c.documentsOftenRequested} />
              </section>
            )}
            <section id="steps">
              <h2>{d.article.steps}</h2>
              <StepsList sections={c.firstSteps} />
            </section>
            <section id="mistakes">
              <h2>{d.article.mistakes}</h2>
              <MistakesList sections={c.mistakesToAvoid} />
            </section>
            <SourceList locale={locale} sources={issue.sources} />
            <section id="faq">
              <h2>{d.article.commonQuestions}</h2>
              <FAQ items={c.faq} />
            </section>
            <Disclaimer locale={locale} />
          </div>
        </div>
      </article>
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <h2>{d.article.related}</h2>
          </div>
          <RelatedArticles issues={related} locale={locale} />
        </div>
      </section>
      <section className="section article-cta-inline">
        <div className="container">
          <CaseReviewCTA
            locale={locale}
            title={telegramCopy.title}
            text={telegramCopy.text}
          />
        </div>
      </section>
    </main>
  );
}

export function PublishedDraftPage({
  locale,
  draft,
  platform,
  updatedAt,
}: {
  locale: Locale;
  draft: ArticleDraft;
  platform: Platform;
  updatedAt: string;
}) {
  const d = getDictionary(locale);
  const translation = draft.translations?.[locale];
  const title = translation?.title || draft.title;
  const summary = translation?.summary || draft.summary;
  const quickAnswer = translation?.quickAnswer || draft.quickAnswer;
  const sources = draft.officialSources.split(/\r?\n/).map((source) => source.trim()).filter(Boolean);
  return (
    <main id="main">
      <Breadcrumbs locale={locale} items={[{ label: platform.name, href: `/${locale}/${platform.slug}/` }, { label: title }]} />
      <article>
        <header className="article-hero">
          <div className="container">
            <p className="eyebrow">{platform.name} · {draft.templateId}</p>
            <h1>{title}</h1>
            <p className="lede">{summary}</p>
            <div className="article-meta"><LastReviewed locale={locale} date={updatedAt.slice(0, 10)} /><span>{d.article.status}</span></div>
            <LanguageLinks locale={locale} segments={[platform.slug, draft.slug]} />
          </div>
        </header>
        <div className="container article-layout">
          <TableOfContents locale={locale} hasDocuments={false} />
          <div className="prose">
            <QuickAnswer title={d.article.quick}><p>{quickAnswer}</p></QuickAnswer>
            {draft.sections.map((section, index) => <section key={`${section.heading}-${index}`}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
            <section><h2>Before you continue</h2><p>{draft.warnings}</p></section>
            {sources.length ? <SourceList locale={locale} sources={sources} /> : null}
            <section id="faq"><h2>{d.article.commonQuestions}</h2><FAQ items={draft.faq.map((item) => ({ question: item.heading, answer: item.body }))} /></section>
            <Disclaimer locale={locale} />
          </div>
        </div>
      </article>
      <section className="section article-cta-inline"><div className="container"><CaseReviewCTA locale={locale} title={locale === "ru" ? "Нужна помощь с вашей ситуацией?" : "Need help with your situation?"} text={draft.cta} /></div></section>
    </main>
  );
}

function V4Block({ block }: { block: V4ArticleBlock }) {
  if (block.type === "paragraph") return <p>{block.text}</p>;
  if (block.type === "subheading") return <h3>{block.text}</h3>;
  if (block.type === "list") {
    const List = block.ordered ? "ol" : "ul";
    return (
      <List>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    );
  }
  if (block.type === "table") {
    return (
      <div className="v4-table-wrap">
        <table className="v4-table">
          <thead>
            <tr>
              {block.headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${rowIndex}-${row.join("-")}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cellIndex}-${cell}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <aside className="v4-note">
      {block.title ? <strong>{block.title}</strong> : null}
      <p>{block.text}</p>
    </aside>
  );
}

function sourceUrls(sources: string[]) {
  return sources
    .map((source) => source.match(/https?:\/\/\S+$/)?.[0] ?? source)
    .filter((source) => {
      try {
        new URL(source);
        return true;
      } catch {
        return false;
      }
    });
}

function V4ArticlePage({
  locale,
  issue,
  platform,
  content,
}: {
  locale: Locale;
  issue: IssuePage;
  platform: Platform;
  content: V4ArticleContent;
}) {
  const d = getDictionary(locale);
  const related = relatedIssues(issue, 4);
  const tocLabel = d.article.toc;
  const sources = sourceUrls(content.sources);
  return (
    <main id="main">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: platform.name, href: `/${locale}/${platform.slug}/` },
          { label: content.title },
        ]}
      />
      <article>
        <header className="article-hero">
          <div className="container">
            <p className="eyebrow">
              {platform.name} · {d.intent[issue.intent]}
            </p>
            <h1>{content.title}</h1>
            <p className="lede">{content.intro}</p>
            <div className="article-meta">
              <LastReviewed locale={locale} date={content.reviewedAt} />
              <span>{d.article.status}</span>
            </div>
            <LanguageLinks
              locale={locale}
              segments={[platform.slug, issue.slug]}
            />
          </div>
        </header>
        <div className="container article-layout">
          <aside className="toc">
            <strong>{tocLabel}</strong>
            <ol>
              <li>
                <a href="#quick-answer">{content.quickAnswerTitle}</a>
              </li>
              {content.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
              {sources.length ? (
                <li>
                  <a href="#official-sources">{d.article.sources}</a>
                </li>
              ) : null}
            </ol>
          </aside>
          <div className="prose">
            <QuickAnswer title={content.quickAnswerTitle}>
              <p>{content.quickAnswer}</p>
            </QuickAnswer>
            {content.sections.map((section) => (
              <div key={section.id}>
                <section id={section.id}>
                  <h2>{section.title}</h2>
                  {section.blocks.map((block, index) => (
                    <V4Block key={`${section.id}-${index}`} block={block} />
                  ))}
                </section>
                {content.visual?.afterSectionId === section.id ? (
                  <ArticleVisual id={content.visual.id} locale={locale} />
                ) : null}
              </div>
            ))}
            <SourceList locale={locale} sources={sources} />
            <Disclaimer locale={locale} />
          </div>
        </div>
      </article>
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <h2>{d.article.related}</h2>
          </div>
          <RelatedArticles issues={related} locale={locale} />
        </div>
      </section>
      <section className="section article-cta-inline">
        <div className="container">
          <CaseReviewCTA
            locale={locale}
            title={content.ctaTitle}
            text={content.ctaText}
          />
        </div>
      </section>
    </main>
  );
}

export const hubDefinitions = [
  {
    slug: "account-suspensions",
    intent: "informational",
    title: {
      en: "Account suspensions",
      ru: "Блокировки аккаунтов",
      uk: "Блокування акаунтів",
    },
    description: {
      en: "Understand suspension and restriction notices across platforms.",
      ru: "Разбор уведомлений о блокировках и ограничениях.",
      uk: "Розбір повідомлень про блокування й обмеження.",
    },
  },
  {
    slug: "verification",
    intent: "verification",
    title: {
      en: "Verification checks",
      ru: "Проверки и верификация",
      uk: "Перевірки та верифікація",
    },
    description: {
      en: "Identity, address, supplier and business information reviews.",
      ru: "Проверки личности, адреса, поставщиков и бизнеса.",
      uk: "Перевірки особи, адреси, постачальників і бізнесу.",
    },
  },
  {
    slug: "payout-holds",
    intent: "payout",
    title: {
      en: "Payout holds",
      ru: "Удержания выплат",
      uk: "Утримання виплат",
    },
    description: {
      en: "Held balances, payout pauses, reserves and pending funds.",
      ru: "Удержанный баланс, остановки выплат, резервы и ожидание.",
      uk: "Утриманий баланс, зупинки виплат, резерви й очікування.",
    },
  },
  {
    slug: "appeals",
    intent: "appeal",
    title: { en: "Appeals", ru: "Апелляции", uk: "Апеляції" },
    description: {
      en: "Prepare factual, evidence-led appeal submissions.",
      ru: "Подготовка фактических апелляций с доказательствами.",
      uk: "Підготовка фактичних апеляцій із доказами.",
    },
  },
  {
    slug: "marketplaces",
    kind: "marketplace",
    title: {
      en: "Marketplace account help",
      ru: "Проблемы на маркетплейсах",
      uk: "Проблеми на маркетплейсах",
    },
    description: {
      en: "Seller, listing, authenticity and marketplace payout guidance.",
      ru: "Продавцы, объявления, подлинность и выплаты маркетплейсов.",
      uk: "Продавці, оголошення, автентичність і виплати маркетплейсів.",
    },
  },
  {
    slug: "payment-platforms",
    kind: "payment",
    title: {
      en: "Payment platform help",
      ru: "Проблемы платёжных платформ",
      uk: "Проблеми платіжних платформ",
    },
    description: {
      en: "Payment account restrictions, verification and fund availability.",
      ru: "Ограничения платёжных аккаунтов, проверки и доступность средств.",
      uk: "Обмеження платіжних акаунтів, перевірки й доступність коштів.",
    },
  },
] as const;

export function HubPage({
  locale,
  hub,
}: {
  locale: Locale;
  hub: (typeof hubDefinitions)[number];
}) {
  const matches = publishedIssues.filter((issue) =>
    "intent" in hub
      ? issue.intent === hub.intent
      : platforms.find((p) => p.id === issue.platformId)?.kind === hub.kind,
  );
  return (
    <main id="main">
      <Breadcrumbs locale={locale} items={[{ label: hub.title[locale] }]} />
      <section className="article-hero">
        <div className="container">
          <p className="eyebrow">{getDictionary(locale).common.knowledgeHub}</p>
          <h1>{hub.title[locale]}</h1>
          <p className="lede">{hub.description[locale]}</p>
          <LanguageLinks locale={locale} segments={[hub.slug]} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <IssueSearch
            locale={locale}
            issues={matches}
            platforms={platforms}
            placeholder={getDictionary(locale).nav.search}
            empty={getDictionary(locale).category.empty}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Disclaimer locale={locale} />
        </div>
      </section>
    </main>
  );
}

const legalCopy = {
  privacy: {
    en: [
      "Privacy Policy",
      "Resolution Hub does not collect case details through a website form. Consultation requests open the official Telegram contact directly.",
      "Telegram processes messages under its own privacy terms. Send only the minimum relevant information, redact screenshots, and never send passwords or authentication codes.",
    ],
    ru: [
      "Политика конфиденциальности",
      "Resolution Hub не собирает данные о ситуации через форму на сайте. Запрос на консультацию открывает официальный контакт в Telegram.",
      "Telegram обрабатывает сообщения по собственной политике конфиденциальности. Отправляйте только необходимые сведения, закрывайте данные на скриншотах и никогда не передавайте пароли или коды входа.",
    ],
    uk: [
      "Політика конфіденційності",
      "Resolution Hub не збирає дані про ситуацію через форму на сайті. Запит на консультацію відкриває офіційний контакт у Telegram.",
      "Telegram обробляє повідомлення за власною політикою конфіденційності. Надсилайте лише потрібні відомості, закривайте дані на скриншотах і ніколи не передавайте паролі чи коди входу.",
    ],
  },
  terms: {
    en: [
      "Terms of Use",
      "The site provides general information and organizational assistance. It is not official platform support and does not provide legal representation.",
      "You remain responsible for the accuracy of submitted information and for following applicable laws and platform rules. No result is guaranteed.",
    ],
    ru: [
      "Условия использования",
      "Сайт предоставляет общую информацию и помощь в структурировании ситуации. Это не официальная поддержка платформ и не юридическое представительство.",
      "Вы отвечаете за точность сведений и соблюдение закона и правил платформы. Результат не гарантируется.",
    ],
    uk: [
      "Умови використання",
      "Сайт надає загальну інформацію та допомогу у структуруванні ситуації. Це не офіційна підтримка платформ і не юридичне представництво.",
      "Ви відповідаєте за точність відомостей і дотримання закону та правил платформи. Результат не гарантується.",
    ],
  },
  cookies: {
    en: [
      "Cookie Policy",
      "The first version uses local browser storage only to remember the selected theme. No advertising cookies are configured.",
      "If privacy-friendly analytics is enabled later, this policy must be updated before launch to name the provider and retention settings.",
    ],
    ru: [
      "Политика cookie",
      "Первая версия использует локальное хранилище браузера только для выбранной темы. Рекламные cookie не настроены.",
      "При подключении privacy-friendly analytics политику нужно обновить до запуска, указав провайдера и сроки хранения.",
    ],
    uk: [
      "Політика cookie",
      "Перша версія використовує локальне сховище браузера лише для обраної теми. Рекламні cookie не налаштовано.",
      "Після підключення privacy-friendly analytics політику слід оновити до запуску, вказавши провайдера й строки зберігання.",
    ],
  },
  disclaimer: {
    en: [
      "Disclaimer",
      "This independent resource is not affiliated with, endorsed by, or operated by PayPal, eBay, Etsy, Grailed, Vestiaire Collective or any other platform mentioned.",
      "Trademarks belong to their owners. Information is general and does not guarantee account restoration, a successful appeal or release of funds.",
    ],
    ru: [
      "Дисклеймер",
      "Этот независимый ресурс не связан, не одобрен и не управляется PayPal, eBay, Etsy, Grailed, Vestiaire Collective или другими упомянутыми платформами.",
      "Товарные знаки принадлежат владельцам. Информация носит общий характер и не гарантирует восстановление, успешную апелляцию или выплату.",
    ],
    uk: [
      "Дисклеймер",
      "Цей незалежний ресурс не пов’язаний, не схвалений і не керується PayPal, eBay, Etsy, Grailed, Vestiaire Collective або іншими згаданими платформами.",
      "Торговельні марки належать власникам. Інформація має загальний характер і не гарантує відновлення, успішну апеляцію чи виплату.",
    ],
  },
  contact: {
    en: [
      "Contact",
      `Email: ${siteConfig.email}`,
      "Before contacting us, redact document numbers and do not include passwords, full card numbers or recovery codes.",
    ],
    ru: [
      "Контакты",
      `Email: ${siteConfig.email}`,
      "Перед обращением закройте номера документов и не указывайте пароли, полные номера карт или коды восстановления.",
    ],
    uk: [
      "Контакти",
      `Email: ${siteConfig.email}`,
      "Перед зверненням закрийте номери документів і не вказуйте паролі, повні номери карток або коди відновлення.",
    ],
  },
} as const;

export type LegalSlug = keyof typeof legalCopy;
export function LegalPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: LegalSlug;
}) {
  const [title, first, second] = legalCopy[slug][locale];
  const d = getDictionary(locale);
  return (
    <main id="main">
      <Breadcrumbs locale={locale} items={[{ label: title }]} />
      <article className="legal-page narrow">
        <p className="eyebrow">{d.common.lastUpdated}</p>
        <h1>{title}</h1>
        <section>
          <h2>
            {locale === "en"
              ? "Scope"
              : locale === "ru"
                ? "Область действия"
                : "Сфера дії"}
          </h2>
          <p>{first}</p>
        </section>
        <section>
          <h2>
            {locale === "en"
              ? "Important information"
              : locale === "ru"
                ? "Важная информация"
                : "Важлива інформація"}
          </h2>
          <p>{second}</p>
        </section>
        <LanguageLinks locale={locale} segments={[slug]} />
      </article>
    </main>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
      }}
    />
  );
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/${locale}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
export function articleJsonLd(
  locale: Locale,
  issue: IssuePage,
  platform: Platform,
) {
  const v4 = getV4Article(issue.id, locale);
  const c = v4 ?? issue.content[locale];
  const base = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.metaDescription,
      dateModified: v4?.reviewedAt ?? issue.updatedAt,
      datePublished: issue.updatedAt,
      mainEntityOfPage: `${siteConfig.url}${pathFor(locale, [platform.slug, issue.slug])}`,
      publisher: { "@type": "Organization", name: siteConfig.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/${locale}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: platform.name,
          item: `${siteConfig.url}/${locale}/${platform.slug}/`,
        },
        { "@type": "ListItem", position: 3, name: c.title },
      ],
    },
  ];
  if (v4) return base;
  return [
    base[0],
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: issue.content[locale].faq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    base[1],
  ];
}
