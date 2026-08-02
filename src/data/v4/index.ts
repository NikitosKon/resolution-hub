import type { Locale } from "@/lib/locales";
import { frozenAfterSaleV4 } from "./frozen-after-sale";
import { fundsHeld180DaysV4 } from "./funds-held-180-days";
import { mc011DocumentsRequestedV4 } from "./mc011-documents-requested";
import { grailedPayoutPendingAfterDeliveryV4 } from "./grailed-payout-pending-after-delivery";
import type { V4ArticleContent, V4LocalizedArticle } from "./types";

const v4Articles = {
  "paypal-funds-held-180-days": fundsHeld180DaysV4,
  "ebay-mc011-documents-requested": mc011DocumentsRequestedV4,
  "grailed-frozen-after-sale": frozenAfterSaleV4,
  // Rendered only when currentRelease/isPublicationEligibleIssue permits the
  // controlled release; this keeps the V4 payload behind the publication gate.
  "grailed-payout-pending-after-delivery": grailedPayoutPendingAfterDeliveryV4,
} satisfies Record<string, V4LocalizedArticle>;

export function getV4Article(
  issueId: string,
  locale: Locale,
): V4ArticleContent | undefined {
  return v4Articles[issueId as keyof typeof v4Articles]?.[locale];
}
