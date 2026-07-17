export type AnalyticsEvent =
  | "language_changed"
  | "platform_selected"
  | "issue_opened"
  | "telegram_clicked"
  | "whatsapp_clicked"
  | "email_clicked"
  | "case_review_started"
  | "case_review_submitted"
  | "related_article_clicked";

export function track(
  event: AnalyticsEvent,
  properties: Record<string, string | number | boolean> = {},
) {
  if (
    typeof window === "undefined" ||
    process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER === "none"
  )
    return;
  window.dispatchEvent(
    new CustomEvent("account-guide:analytics", {
      detail: { event, properties },
    }),
  );
}
