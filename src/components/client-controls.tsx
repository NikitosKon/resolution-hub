"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Moon, Search, Sun, X } from "lucide-react";
import { localeNames, locales, type Locale } from "@/lib/locales";
import { localizedPath } from "@/lib/urls";
import type { IssuePage, Platform } from "@/data/schema";

export function ThemeSwitcher() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const nextDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    const frame = requestAnimationFrame(() => setDark(nextDark));
    return () => cancelAnimationFrame(frame);
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }
  return (
    <button
      className="icon-button"
      type="button"
      onClick={toggle}
      aria-label={dark ? "Use light theme" : "Use dark theme"}
    >
      {dark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return (
    <label className="sr-only">
      <span>Language</span>
      <select
        aria-label="Language"
        value={locale}
        onChange={(event) => {
          window.location.href = localizedPath(
            pathname,
            event.target.value as Locale,
          );
        }}
        className="icon-button"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeNames[item]}
          </option>
        ))}
      </select>
    </label>
  );
}

export function IssueSearch({
  locale,
  issues,
  platforms,
  placeholder,
  empty,
}: {
  locale: Locale;
  issues: IssuePage[];
  platforms: Platform[];
  placeholder: string;
  empty: string;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    if (!normalized) return issues;
    return issues.filter((issue) => {
      const platform = platforms.find((item) => item.id === issue.platformId);
      const haystack = [
        platform?.name,
        issue.content[locale].title,
        issue.keywords.primary,
        ...issue.keywords.secondary,
      ]
        .join(" ")
        .toLocaleLowerCase(locale);
      return haystack.includes(normalized);
    });
  }, [query, issues, platforms, locale]);
  return (
    <div>
      <div className="search-wrap">
        <Search size={20} aria-hidden="true" />
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </div>
      {results.length ? (
        <div className="grid issue-grid">
          {results.map((issue) => {
            const platform = platforms.find(
              (item) => item.id === issue.platformId,
            );
            return (
              <Link
                className="card issue-card"
                key={issue.id}
                href={`/${locale}/${issue.platformId}/${issue.slug}/`}
              >
                <span className="meta">{platform?.name}</span>
                <h3>{issue.content[locale].title}</h3>
                <span className="link-label">
                  {locale === "en"
                    ? "Read guide"
                    : locale === "ru"
                      ? "Читать"
                      : "Читати"}{" "}
                  →
                </span>
              </Link>
            );
          })}
        </div>
      ) : (
        <p>{empty}</p>
      )}
    </div>
  );
}

export function HomeProblemSearch({
  locale,
  issues,
  platforms,
  placeholder,
  empty,
}: {
  locale: Locale;
  issues: IssuePage[];
  platforms: Platform[];
  placeholder: string;
  empty: string;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (
        event.key === "Escape" &&
        document.activeElement === inputRef.current
      ) {
        setQuery("");
        inputRef.current?.blur();
      }
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase(locale);
    if (!normalized) return [];
    return issues
      .filter((issue) => {
        const platform = platforms.find((item) => item.id === issue.platformId);
        return [
          platform?.name,
          issue.content[locale].title,
          issue.keywords.primary,
          ...issue.keywords.secondary,
        ]
          .join(" ")
          .toLocaleLowerCase(locale)
          .includes(normalized);
      })
      .slice(0, 5);
  }, [issues, locale, platforms, query]);

  return (
    <div className="home-search" id="problem-search">
      <div className="home-search-field">
        <Search size={21} aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-controls="home-search-results"
        />
        <kbd aria-hidden="true">⌘ K</kbd>
      </div>
      {query.trim() ? (
        <div
          className="home-search-results"
          id="home-search-results"
          aria-live="polite"
        >
          {results.length ? (
            results.map((issue) => (
              <Link
                key={issue.id}
                href={`/${locale}/${issue.platformId}/${issue.slug}/`}
              >
                <span>
                  {platforms.find((item) => item.id === issue.platformId)?.name}
                </span>
                <strong>{issue.content[locale].title}</strong>
              </Link>
            ))
          ) : (
            <p>{empty}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export type GlobalSearchEntry = {
  id: string;
  href: string;
  platform: string;
  title: string;
  description: string;
  keywords: string[];
};

const searchCopy = {
  en: {
    title: "Search guides",
    placeholder: "Type a platform, restriction or message",
    empty: "No guide matches this yet.",
    close: "Close search",
    open: "Search",
    hint: "Published guides only",
  },
  ru: {
    title: "Поиск по разборам",
    placeholder: "Введите платформу, ограничение или сообщение",
    empty: "Пока нет подходящего разбора.",
    close: "Закрыть поиск",
    open: "Поиск",
    hint: "Только опубликованные разборы",
  },
  uk: {
    title: "Пошук за розборами",
    placeholder: "Введіть платформу, обмеження або повідомлення",
    empty: "Поки немає відповідного розбору.",
    close: "Закрити пошук",
    open: "Пошук",
    hint: "Лише опубліковані розбори",
  },
} as const;

function normalize(value: string, locale: Locale) {
  return value.trim().toLocaleLowerCase(locale);
}

export function GlobalSearchDialog({
  locale,
  entries,
  compact = false,
  triggerClassName,
}: {
  locale: Locale;
  entries: GlobalSearchEntry[];
  compact?: boolean;
  triggerClassName?: string;
}) {
  const copy = searchCopy[locale];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => {
    const normalized = normalize(query, locale);
    const source = normalized
      ? entries.filter((entry) =>
          [entry.platform, entry.title, entry.description, ...entry.keywords]
            .join(" ")
            .toLocaleLowerCase(locale)
            .includes(normalized),
        )
      : entries;
    return source.slice(0, 6);
  }, [entries, locale, query]);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      if (
        target instanceof Node &&
        dialogRef.current &&
        !dialogRef.current.contains(target)
      )
        setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={
          triggerClassName ?? (compact ? "icon-button" : "nav-link nav-button")
        }
        aria-label={copy.open}
        onClick={() => setOpen(true)}
      >
        {compact ? <Search size={19} aria-hidden="true" /> : copy.open}
      </button>
      {open ? (
        <div className="search-dialog-backdrop" role="presentation">
          <div
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="global-search-title"
            ref={dialogRef}
          >
            <div className="search-dialog-head">
              <div>
                <h2 id="global-search-title">{copy.title}</h2>
                <span>{copy.hint}</span>
              </div>
              <button
                className="icon-button"
                type="button"
                aria-label={copy.close}
                onClick={() => setOpen(false)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="search-dialog-field">
              <Search size={20} aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.placeholder}
                aria-label={copy.placeholder}
              />
            </div>
            <div className="search-dialog-results" aria-live="polite">
              {results.length ? (
                results.map((entry) => (
                  <Link
                    key={entry.id}
                    href={entry.href}
                    onClick={() => setOpen(false)}
                  >
                    <span>{entry.platform}</span>
                    <strong>{entry.title}</strong>
                    <small>{entry.description}</small>
                  </Link>
                ))
              ) : (
                <p>{copy.empty}</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
