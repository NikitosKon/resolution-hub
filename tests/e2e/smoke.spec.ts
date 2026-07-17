import { expect, test } from "@playwright/test";

test("language picker and localized home render", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Choose your language" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "English" }).click();
  await expect(
    page.getByRole("heading", {
      name: "Understand what happened to your account.",
    }),
  ).toBeVisible();
});

test("published pilot renders and unreleased routes are 404", async ({
  page,
}) => {
  await page.goto("/en/paypal/funds-held-180-days/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("PayPal");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/en\/paypal\/funds-held-180-days\/$/,
  );
  await expect(page.locator('link[hreflang="ru"]')).toHaveAttribute(
    "href",
    /\/ru\/paypal\/funds-held-180-days\/$/,
  );
  const unreleased = await page.goto("/en/paypal/permanently-limited/");
  expect(unreleased?.status()).toBe(404);
  const response = await page.goto("/en/paypal/not-a-real-guide/");
  expect(response?.status()).toBe(404);
});

test("all nine pilot routes render one direct Telegram CTA", async ({
  page,
}) => {
  const routes = [
    "paypal/funds-held-180-days",
    "ebay/mc011-documents-requested",
    "grailed/frozen-after-sale",
  ];
  for (const locale of ["en", "ru", "uk"])
    for (const route of routes) {
      const response = await page.goto(`/${locale}/${route}/`);
      expect(response?.status()).toBe(200);
      const cta = page.locator('.cta a[href="https://t.me/helpgrailed"]');
      await expect(cta).toHaveCount(1);
      await expect(cta).toHaveAttribute("rel", "noopener noreferrer");
    }
  const removedForm = await page.goto("/en/case-review/");
  expect(removedForm?.status()).toBe(404);
});

test("Russian and Ukrainian public UI has no known English label leakage", async ({
  page,
}) => {
  const expected = {
    ru: {
      nav: "Основная навигация",
      translations: "Другие языки",
      readTime: /\d+ (минута|минуты|минут) чтения/,
    },
    uk: {
      nav: "Основна навігація",
      translations: "Інші мови",
      readTime: /\d+ (хвилина|хвилини|хвилин) читання/,
    },
  } as const;
  const banned = [
    "Account suspensions",
    "Verification",
    "Payout holds",
    "Appeals",
    "RSS / Updates",
    "Knowledge hub",
    "min read",
  ];

  for (const locale of ["ru", "uk"] as const) {
    await page.goto(`/${locale}/`);
    const homeText = await page.locator("body").innerText();
    for (const label of banned) expect(homeText).not.toContain(label);
    expect(homeText).toMatch(expected[locale].readTime);
    await expect(page.locator("header nav.desktop-nav")).toHaveAttribute(
      "aria-label",
      expected[locale].nav,
    );

    await page.goto(`/${locale}/paypal/funds-held-180-days/`);
    const articleText = await page.locator("body").innerText();
    for (const label of banned) expect(articleText).not.toContain(label);
    await expect(page.locator("nav.contact-strip")).toHaveAttribute(
      "aria-label",
      expected[locale].translations,
    );

    const unreleased = await page.goto(
      `/${locale}/paypal/permanently-limited/`,
    );
    expect(unreleased?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      locale === "ru" ? "Страница не найдена" : "Сторінку не знайдено",
    );
  }
});

test("mobile layout has no horizontal overflow", async ({ page }) => {
  await page.goto("/uk/");
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});

test("global search opens on article pages and links to published guides", async ({
  page,
}) => {
  await page.goto("/ru/paypal/funds-held-180-days/");
  await page.getByRole("button", { name: "Поиск" }).click();
  await expect(
    page.getByRole("dialog", { name: "Поиск по разборам" }),
  ).toBeVisible();
  await page
    .getByPlaceholder("Введите платформу, ограничение или сообщение")
    .fill("mc011");
  const result = page.locator(
    '.search-dialog-results a[href="/ru/ebay/mc011-documents-requested/"]',
  );
  await expect(result).toBeVisible();
});

test("local draft builder is available in development", async ({ page }) => {
  const response = await page.goto("/admin/");
  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { name: "Article draft builder" }),
  ).toBeVisible();
  await page.getByLabel("Title").fill("PayPal account under review");
  await expect(page.locator(".admin-preview h1")).toHaveText(
    "PayPal account under review",
  );
});
