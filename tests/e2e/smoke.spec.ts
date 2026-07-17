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

test("published article renders and an unknown route is 404", async ({
  page,
}) => {
  await page.goto("/en/paypal/permanently-limited/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("PayPal");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/en\/paypal\/permanently-limited\/$/,
  );
  const response = await page.goto("/en/paypal/not-a-real-guide/");
  expect(response?.status()).toBe(404);
});

test("consultation CTA goes directly to Telegram", async ({ page }) => {
  await page.goto("/en/paypal/funds-held-180-days/");
  const telegram = page.getByRole("link", { name: "Ask in Telegram" });
  await expect(telegram.first()).toHaveAttribute(
    "href",
    "https://t.me/helpgrailed",
  );
  const removedForm = await page.goto("/en/case-review/");
  expect(removedForm?.status()).toBe(404);
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
