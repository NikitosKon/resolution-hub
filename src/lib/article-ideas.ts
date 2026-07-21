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

const coreArticleIdeas: Omit<ArticleIdea, "id" | "status">[] = [
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

const additionalTopics: Record<string, string[]> = {
  PayPal: [
    "account limited after receiving a payment", "business account verification pending", "proof of address rejected", "name mismatch during verification", "bank account confirmation failed", "card confirmation unavailable", "payment reversed after review", "withdrawal unavailable after limitation", "reserve balance not released", "appeal message after limitation", "support case closed without resolution", "account review after a new device", "identity document upload rejected", "currency conversion payment issue", "seller payment on hold", "chargeback dispute response", "business profile information update",
  ],
  eBay: [
    "seller account restricted after registration", "identity check cannot be completed", "payout verification name mismatch", "bank details rejected for payouts", "seller limits not increased", "listing removed during verification", "payment account under review", "payout unavailable after a delivered order", "buyer dispute and seller funds", "MC999 restriction message", "account appeal rejected", "proof of address for seller verification", "business details do not match", "managed payments enrollment issue", "selling privileges removed", "document upload error", "new seller payout delay",
  ],
  Grailed: [
    "account frozen before shipping an order", "cash out verification failed", "tax information request", "payout method cannot be added", "sale cancelled after account review", "order stuck after account freeze", "support appeal has no reply", "identity check rejected", "phone number verification issue", "email access lost during review", "listing removed for authenticity review", "buyer dispute while account is restricted", "balance unavailable after suspension", "shipping label after a freeze", "multiple accounts policy warning", "account locked after login attempt", "support message for a frozen profile",
  ],
  Etsy: [
    "payment reserve after a first sale", "payment reserve and missing tracking", "seller identity check failed", "bank account verification issue", "shop suspended after a policy warning", "payout delayed in Etsy Payments", "reserve after a sudden sales increase", "listing removed for intellectual property claim", "appeal a suspended shop", "proof of address request", "tax information verification", "shop under review after a buyer case", "funds unavailable after an order refund", "payment account country mismatch", "new shop payout schedule", "case opened while funds are reserved", "support request for a payment hold",
  ],
  Vestiaire: [
    "seller account restricted after authentication", "identity check rejected", "payout unavailable after authentication", "bank transfer verification issue", "sale cancelled during review", "item authentication delay and payout", "seller profile under review", "proof of address request", "account access lost after a security check", "buyer dispute and seller payout", "listing removed for authenticity concerns", "appeal a seller restriction", "payment details cannot be updated", "payout delayed after delivery", "country availability and seller account", "support request after a frozen balance", "document upload not accepted",
  ],
};

const generatedArticleIdeas: Omit<ArticleIdea, "id" | "status">[] = Object.entries(additionalTopics).flatMap(([platform, topics]) => topics.map((topic, index) => ({
  title: `${platform}: ${topic}`,
  platform,
  locale: "ru" as const,
  primaryKeyword: `${platform} ${topic}`,
  intent: topic.includes("payout") || topic.includes("funds") || topic.includes("balance") ? "payout issue" : topic.includes("appeal") || topic.includes("support") ? "appeal preparation" : topic.includes("verification") || topic.includes("identity") || topic.includes("document") || topic.includes("proof") ? "verification" : "restriction or account issue",
  priority: index < 6 ? "medium" as const : "low" as const,
  demandEvidence: checked,
  source: `${platform} official Help/Terms + Search Console/Trends verification required`,
  sourceCheckedAt: "2026-07-21",
})));

export const starterArticleIdeas: Omit<ArticleIdea, "id" | "status">[] = [...coreArticleIdeas, ...generatedArticleIdeas];
