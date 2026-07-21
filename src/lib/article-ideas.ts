import type { Locale } from "./locales";

export type ArticleIdea = {
  id: string;
  title: string;
  platform: string;
  locale: Locale;
  primaryKeyword: string;
  intent: string;
  priority: "high" | "medium" | "low";
  status: "new" | "planned" | "used" | "archived";
  demandEvidence: string;
  source: string;
  sourceCheckedAt: string;
};

export const articleIdeaCriteria = [
  "Высокий приоритет: конкретная проблема с коммерческим намерением и понятным следующим шагом.",
  "Средний приоритет: устойчивый вопрос пользователя, где можно дать самостоятельную практическую пользу.",
  "Низкий приоритет: широкая тема, сезонный запрос или тема, требующая дополнительных данных владельца.",
  "Не создавать страницу без отдельного интента и проверки каннибализации.",
  "Спрос подтверждать Search Console, Trends или экспортом Keyword Planner перед публикацией.",
  "Официальные правила платформы проверять отдельно; популярность запроса не является доказательством правила.",
];

const checked = "Initial editorial hypothesis; verify in Search Console/Trends before publication";

export const starterArticleIdeas: Omit<ArticleIdea, "id" | "status">[] = [
  { title: "PayPal permanently limited: what to check before contacting support", platform: "PayPal", locale: "ru", primaryKeyword: "PayPal permanently limited", intent: "restriction recovery", priority: "high", demandEvidence: checked, source: "PayPal User Agreement + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "PayPal funds held for 180 days: what the notice actually means", platform: "PayPal", locale: "ru", primaryKeyword: "PayPal funds held 180 days", intent: "held funds", priority: "high", demandEvidence: checked, source: "PayPal User Agreement + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "PayPal identity verification failed: safe next steps", platform: "PayPal", locale: "ru", primaryKeyword: "PayPal identity verification failed", intent: "verification", priority: "high", demandEvidence: checked, source: "PayPal Help + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "eBay MC011 restriction: first checks before submitting documents", platform: "eBay", locale: "ru", primaryKeyword: "eBay MC011 restriction", intent: "seller restriction", priority: "high", demandEvidence: checked, source: "eBay Help + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "eBay asked for documents after MC011: how to organize legitimate evidence", platform: "eBay", locale: "ru", primaryKeyword: "eBay MC011 documents requested", intent: "document request", priority: "high", demandEvidence: checked, source: "eBay seller registration/help + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "eBay seller verification keeps failing: what to compare", platform: "eBay", locale: "ru", primaryKeyword: "eBay seller verification failed", intent: "seller verification", priority: "high", demandEvidence: checked, source: "eBay seller registration + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "Grailed account frozen after a sale: what to document", platform: "Grailed", locale: "ru", primaryKeyword: "Grailed account frozen after sale", intent: "account freeze and payout", priority: "high", demandEvidence: checked, source: "Grailed Help/Terms + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "Grailed payout not received after delivery: account-specific checks", platform: "Grailed", locale: "ru", primaryKeyword: "Grailed payout not received", intent: "payout issue", priority: "high", demandEvidence: checked, source: "Grailed Help/Terms + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "Etsy payment account reserve: what sellers can verify", platform: "Etsy", locale: "ru", primaryKeyword: "Etsy payment account reserve", intent: "payment reserve", priority: "high", demandEvidence: checked, source: "Etsy Payments Policy + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "Etsy seller verification request: preparing accurate information", platform: "Etsy", locale: "ru", primaryKeyword: "Etsy seller verification", intent: "verification", priority: "high", demandEvidence: checked, source: "Etsy Help/Payments Policy + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "Vestiaire account verification issue: what to review before resubmitting", platform: "Vestiaire", locale: "ru", primaryKeyword: "Vestiaire account verification", intent: "verification", priority: "medium", demandEvidence: checked, source: "Vestiaire Help/Terms + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "Vestiaire payout delayed after a sale: questions to answer first", platform: "Vestiaire", locale: "ru", primaryKeyword: "Vestiaire payout delayed", intent: "payout issue", priority: "medium", demandEvidence: checked, source: "Vestiaire Help/Terms + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "PayPal account under review: what information may be relevant", platform: "PayPal", locale: "ru", primaryKeyword: "PayPal account under review", intent: "account review", priority: "medium", demandEvidence: checked, source: "PayPal Help + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "eBay payout on hold: distinguish verification from delivery issues", platform: "eBay", locale: "ru", primaryKeyword: "eBay payout on hold", intent: "payout hold", priority: "medium", demandEvidence: checked, source: "eBay Payments Help + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
  { title: "Grailed appeal after a freeze: what a support message should contain", platform: "Grailed", locale: "ru", primaryKeyword: "Grailed appeal account frozen", intent: "appeal preparation", priority: "medium", demandEvidence: checked, source: "Grailed Help/Terms + Search Console/Trends verification required", sourceCheckedAt: "2026-07-21" },
];
