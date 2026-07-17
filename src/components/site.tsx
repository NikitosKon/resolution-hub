import Link from "next/link";
import {
  ArrowRight,
  BadgeAlert,
  BookOpen,
  Check,
  CircleDollarSign,
  ExternalLink,
  FileCheck2,
  Globe2,
  LockKeyhole,
  Menu,
  MessageSquareText,
  Search,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import type { Locale } from "@/lib/locales";
import { localeNames, locales } from "@/lib/locales";
import { getDictionary } from "@/data/dictionaries";
import type {
  ContentSection,
  IssuePage,
  LocalizedIssueContent,
  Platform,
} from "@/data/schema";
import { siteConfig } from "@/lib/config";

export function Header({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="brand" href={`/${locale}/`}>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className="nav-link" href={`/${locale}/#platforms`}>
            {d.nav.platforms}
          </Link>
          <Link className="nav-link" href={`/${locale}/account-suspensions/`}>
            {d.nav.guides}
          </Link>
          <Link className="nav-link" href={`/${locale}/#problem-search`}>
            {d.nav.search}
          </Link>
          <a
            className="nav-link telegram-nav"
            href={siteConfig.telegram}
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </nav>
        <div className="mobile-nav">
          <Link
            className="icon-button"
            href={`/${locale}/#problem-search`}
            aria-label={d.nav.search}
          >
            <Search size={19} aria-hidden="true" />
          </Link>
          <details className="mobile-menu">
            <summary className="icon-button" aria-label="Open menu">
              <Menu size={20} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              <Link href={`/${locale}/#platforms`}>{d.nav.platforms}</Link>
              <Link href={`/${locale}/account-suspensions/`}>
                {d.nav.guides}
              </Link>
              <a href={siteConfig.telegram} rel="noopener noreferrer">
                Telegram
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const links =
    locale === "en"
      ? {
          privacy: "Privacy policy",
          terms: "Terms of use",
          cookies: "Cookie policy",
          disclaimer: "Disclaimer",
          contact: "Contact",
        }
      : locale === "ru"
        ? {
            privacy: "Политика конфиденциальности",
            terms: "Условия использования",
            cookies: "Политика cookie",
            disclaimer: "Дисклеймер",
            contact: "Контакты",
          }
        : {
            privacy: "Політика конфіденційності",
            terms: "Умови використання",
            cookies: "Політика cookie",
            disclaimer: "Дисклеймер",
            contact: "Контакти",
          };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href={`/${locale}/`}>
              <span>{siteConfig.name}</span>
            </Link>
            <p style={{ color: "var(--muted)", maxWidth: 430 }}>
              {d.common.disclaimer}
            </p>
          </div>
          <div>
            <h3>{d.nav.guides}</h3>
            <div className="footer-links">
              <Link href={`/${locale}/account-suspensions/`}>
                Account suspensions
              </Link>
              <Link href={`/${locale}/verification/`}>Verification</Link>
              <Link href={`/${locale}/payout-holds/`}>Payout holds</Link>
              <Link href={`/${locale}/appeals/`}>Appeals</Link>
              <Link href={`/${locale}/updates.xml`}>RSS / Updates</Link>
            </div>
          </div>
          <div>
            <h3>{links.contact}</h3>
            <div className="footer-links">
              <Link href={`/${locale}/privacy/`}>{links.privacy}</Link>
              <Link href={`/${locale}/terms/`}>{links.terms}</Link>
              <Link href={`/${locale}/cookies/`}>{links.cookies}</Link>
              <Link href={`/${locale}/disclaimer/`}>{links.disclaimer}</Link>
              <Link href={`/${locale}/contact/`}>{links.contact}</Link>
            </div>
          </div>
        </div>
        <p className="legal-note">
          © 2026 {siteConfig.name}. {d.common.official}.
        </p>
      </div>
    </footer>
  );
}

export function PlatformCard({
  platform,
  locale,
  count,
}: {
  platform: Platform;
  locale: Locale;
  count: number;
}) {
  return (
    <Link href={`/${locale}/${platform.slug}/`} className="card platform-card">
      <span className="platform-icon">
        {platform.kind === "payment" ? (
          <CircleDollarSign size={22} />
        ) : (
          <Globe2 size={22} />
        )}
      </span>
      <h3>{platform.name}</h3>
      <p>{platform.description[locale]}</p>
      <span className="count">
        {count}{" "}
        {locale === "en"
          ? "reviewed guides"
          : locale === "ru"
            ? "проверенных материалов"
            : "перевірених матеріалів"}{" "}
        →
      </span>
    </Link>
  );
}

export function IssueCard({
  issue,
  locale,
}: {
  issue: IssuePage;
  locale: Locale;
}) {
  const d = getDictionary(locale);
  return (
    <Link
      className="card issue-card"
      href={`/${locale}/${issue.platformId}/${issue.slug}/`}
    >
      <span className="meta">
        <BookOpen size={14} /> {issue.intent}
      </span>
      <h3>{issue.content[locale].title}</h3>
      <span className="link-label">
        {d.common.view} <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href={`/${locale}/`}>
            {locale === "en" ? "Home" : locale === "ru" ? "Главная" : "Головна"}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            /{" "}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function QuickAnswer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="quick-answer" id="quick-answer">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function AlertBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="alert" role="note">
      <TriangleAlert size={22} aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="content-list">
      {sections.map((item, index) => (
        <div className="content-item" key={`${item.title}-${index}`}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
export const StepsList = ContentSections;
export const DocumentsChecklist = ContentSections;
export const MistakesList = ContentSections;

export function FAQ({ items }: { items: LocalizedIssueContent["faq"] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedArticles({
  issues,
  locale,
}: {
  issues: IssuePage[];
  locale: Locale;
}) {
  return (
    <div className="grid issue-grid">
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} locale={locale} />
      ))}
    </div>
  );
}

export function CaseReviewCTA({
  locale,
  title,
  text,
}: {
  locale: Locale;
  title: string;
  text: string;
}) {
  const action =
    locale === "en"
      ? "Ask in Telegram"
      : locale === "ru"
        ? "Спросить в Telegram"
        : "Запитати в Telegram";
  const privacy =
    locale === "en"
      ? "Never send a password or login code."
      : locale === "ru"
        ? "Никогда не отправляйте пароль или код входа."
        : "Ніколи не надсилайте пароль або код входу.";
  return (
    <aside className="cta">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="cta-action">
        <span>@helpgrailed</span>
        <a
          className="button primary"
          href={siteConfig.telegram}
          rel="noopener noreferrer"
        >
          {action}
          <ArrowRight size={17} />
        </a>
      </div>
      <small>{privacy}</small>
    </aside>
  );
}

export function Disclaimer({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <AlertBox>
      <strong>{d.common.official}.</strong> {d.common.disclaimer}
    </AlertBox>
  );
}

export function TableOfContents({
  locale,
  hasDocuments,
}: {
  locale: Locale;
  hasDocuments: boolean;
}) {
  const a = getDictionary(locale).article;
  const links = [
    ["quick-answer", a.quick],
    ["meaning", a.meaning],
    ["symptoms", a.symptoms],
    ["reasons", a.reasons],
    ...(hasDocuments ? [["documents", a.documents]] : []),
    ["steps", a.steps],
    ["mistakes", a.mistakes],
    ["official-sources", a.sources],
    [
      "faq",
      locale === "en"
        ? "Common questions"
        : locale === "ru"
          ? "Частые вопросы"
          : "Поширені питання",
    ],
  ] as string[][];
  return (
    <aside className="toc">
      <strong>{a.toc}</strong>
      <ol>
        {links.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function LastReviewed({
  locale,
  date,
}: {
  locale: Locale;
  date: string;
}) {
  return (
    <span>
      <FileCheck2 size={16} style={{ verticalAlign: -3, marginRight: 6 }} />
      {getDictionary(locale).article.reviewed}:{" "}
      <time dateTime={date}>
        {new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
          new Date(`${date}T12:00:00Z`),
        )}
      </time>
    </span>
  );
}

export function SourceList({
  locale,
  sources,
}: {
  locale: Locale;
  sources: string[];
}) {
  if (!sources.length) return null;
  return (
    <section id="official-sources">
      <h2>{getDictionary(locale).article.sources}</h2>
      <ul>
        {sources.map((source) => (
          <li key={source}>
            <a href={source} rel="noopener noreferrer">
              {new URL(source).hostname}
              <ExternalLink
                size={14}
                style={{ verticalAlign: -2, marginLeft: 5 }}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SafetyPanel({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const safe =
    locale === "en"
      ? [
          "A redacted notification",
          "Country and account type",
          "A short factual timeline",
          "Relevant transaction or order references",
        ]
      : locale === "ru"
        ? [
            "Уведомление с закрытыми данными",
            "Страну и тип аккаунта",
            "Краткую фактическую хронологию",
            "Связанные номера операций или заказов",
          ]
        : [
            "Повідомлення із закритими даними",
            "Країну й тип акаунта",
            "Стислу фактичну хронологію",
            "Пов’язані номери операцій чи замовлень",
          ];
  const never =
    locale === "en"
      ? [
          "Passwords or recovery codes",
          "Full card or bank numbers",
          "Unredacted identity documents",
          "False or altered evidence",
        ]
      : locale === "ru"
        ? [
            "Пароли и коды восстановления",
            "Полные номера карт и счетов",
            "Незакрытые документы личности",
            "Ложные или изменённые доказательства",
          ]
        : [
            "Паролі й коди відновлення",
            "Повні номери карток і рахунків",
            "Незакриті документи особи",
            "Неправдиві або змінені докази",
          ];
  return (
    <div className="grid safety-grid">
      <div className="safety-box">
        <ShieldCheck />
        <h3>{d.home.safe}</h3>
        <ul className="check-list">
          {safe.map((item) => (
            <li key={item}>
              <Check size={18} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="safety-box warning">
        <LockKeyhole />
        <h3>{d.home.never}</h3>
        <ul className="check-list">
          {never.map((item) => (
            <li key={item}>
              <BadgeAlert size={18} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TrustPanel({ locale }: { locale: Locale }) {
  const items =
    locale === "en"
      ? [
          ["Independent", "We do not represent the platforms."],
          ["Evidence-first", "Advice starts with your exact notice."],
          ["No guarantees", "No one can promise restoration or release."],
        ]
      : locale === "ru"
        ? [
            ["Независимо", "Мы не представляем платформы."],
            ["На основе фактов", "Разбор начинается с уведомления."],
            ["Без гарантий", "Нельзя обещать восстановление или выплату."],
          ]
        : [
            ["Незалежно", "Ми не представляємо платформи."],
            ["На основі фактів", "Розбір починається з повідомлення."],
            ["Без гарантій", "Не можна обіцяти відновлення чи виплату."],
          ];
  return (
    <div className="trust-panel">
      {items.map(([title, text]) => (
        <div className="trust-item" key={title}>
          <MessageSquareText size={22} />
          <div>
            <strong>{title}</strong>
            <div style={{ color: "var(--muted)" }}>{text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LanguageLinks({ segments }: { segments: string[] }) {
  return (
    <nav aria-label="Translations" className="contact-strip">
      {locales.map((locale) => (
        <Link
          className="button secondary"
          key={locale}
          href={`/${locale}/${segments.join("/")}${segments.length ? "/" : ""}`}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </nav>
  );
}
