# Account Guide

Resolution Hub is a production-oriented, multilingual Next.js knowledge base for users dealing with account restrictions, verification reviews, appeals and payout holds on payment platforms and marketplaces. The site is independent and must never be presented as official platform support.

## Current inventory

- 15 platforms.
- 167 structured issue records.
- 20 fact-checked, published issue topics × 3 locales = 60 indexable issue URLs.
- 147 draft issue topics. Drafts remain in the data registry but have no generated public route and are excluded from sitemap/RSS.
- English (`/en/`), Russian (`/ru/`) and Ukrainian (`/uk/`).
- 15 platform categories, 6 intent/type hubs and 6 service/legal pages per locale.

## Stack

Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 3.4, Zod 4, Node's test runner and Playwright. Pages default to Server Components. Client JavaScript is limited to search and theme/language controls.

## Run locally

Node.js 20.9 or newer is required.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality commands

```bash
npm run validate:data
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
npm run format:check
```

## Content publication flow

1. Add the topic and all three natural localizations in `src/data/issues.ts`.
2. Add official source URLs and a real `updatedAt`/`reviewedAt` date.
3. Keep the record as `draft` with `needsFactCheck: true` while it is incomplete.
4. Run `npm run validate:data`, tests and build.
5. After editorial/fact review, set `reviewStatus: "fact-checked"`, `needsFactCheck: false` and `status: "published"`.
6. Rebuild. Static params, related links, RSS and the issue sitemap are generated from the published registry automatically.

## Editorial governance

Publication research, claim ledgers, owner intake, drafts and QA records are maintained outside this public deployment repository. Only content that has passed the editorial and technical release gates is added to the public runtime registry.

## Consultation contact

Consultation CTAs open the official Telegram destination `@helpgrailed` directly. The site does not collect or deliver case details through a form. Users are asked to send only a short description and minimum relevant redacted screenshots, never passwords or authentication codes.

## Environment variables

| Variable                         | Purpose                                            |
| -------------------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Canonical production origin; no trailing slash     |
| `NEXT_PUBLIC_SITE_NAME`          | Real public brand name                             |
| `NEXT_PUBLIC_CONTACT_EMAIL`      | Public contact and mail link                       |
| `NEXT_PUBLIC_TELEGRAM_URL`       | Full Telegram URL                                  |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER` | `none` by default; future privacy-friendly adapter |
| `NEXT_PUBLIC_ANALYTICS_SITE_ID`  | Future analytics site ID                           |

## Structure

```text
src/
  app/
    (root)/                    language choice root
    [locale]/[[...segments]]/  statically generated localized routes
    sitemap.xml/               sitemap index
    sitemaps/                  split XML sitemaps
  components/                  reusable server/client UI
  data/                        schemas, platforms, issues, dictionaries
  lib/                         SEO, URLs, XML and analytics boundaries
  __tests__/                   unit and data-integrity tests
tests/e2e/                     Playwright smoke tests
scripts/                       content validation entrypoint
```

## Production replacements

The production origin is `https://resolutionhub.net`. Before launch, confirm the site name, contact email and Telegram value in the environment. Also confirm the legal controller identity, privacy retention details and contact owner. Review all published official source links on launch day.
