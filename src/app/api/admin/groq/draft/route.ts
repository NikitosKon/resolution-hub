import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const model = "llama-3.3-70b-versatile";

const officialSourcesByPlatform: Record<string, string[]> = {
  PayPal: [
    "https://www.paypal.com/us/legalhub/paypal/useragreement-full",
    "https://www.paypal.com/us/cshelp/article/why-is-my-paypal-account-limited-help1029",
  ],
  eBay: [
    "https://www.ebay.com/help/selling/selling/seller-registration?id=4792",
    "https://www.ebay.com/help/account/restrictions-suspensions/ebay-account-restrictions-suspensions?id=4190",
  ],
  Grailed: [
    "https://support.grailed.com/hc/en-us/articles/30296274257421-Why-was-my-account-frozen",
    "https://www.grailed.com/about/terms",
  ],
  Etsy: [
    "https://www.etsy.com/legal/etsy-payments/",
    "https://help.etsy.com/hc/en-us/articles/360058722214-What-is-a-Payment-account-reserve",
  ],
  Vestiaire: [
    "https://faq.vestiairecollective.com/hc/en-us",
    "https://www.vestiairecollective.com/about/terms-and-conditions/",
  ],
};

function parseJson(text: string) {
  const cleaned = text.trim().replace(/^```json\s*/i, "").replace(/```$/i, "");
  return JSON.parse(cleaned);
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Groq is not configured" }, { status: 503 });
  }

  const body = (await request.json()) as {
    platform?: string;
    locale?: string;
    primaryKeyword?: string;
    title?: string;
    summary?: string;
    quickAnswer?: string;
    sectionHeadings?: string[];
  };

  const title = body.title?.trim().slice(0, 180);
  if (!title) {
    return NextResponse.json(
      { error: "Title is required" },
      { status: 400 },
    );
  }
  const platform = body.platform?.trim().slice(0, 80) || "Marketplace account";
  const locale = body.locale?.trim().slice(0, 8) || "ru";
  const keyword = body.primaryKeyword?.trim().slice(0, 160) || title;
  const officialSourceCandidates = officialSourcesByPlatform[platform] ?? [];

  const prompt = `Create a fact-conscious editorial draft for Resolution Hub in the same calm, practical editorial style as the guide “PayPal удерживает средства до 180 дней”.
Platform: ${platform}
Language: ${locale}
Primary keyword: ${keyword}
Working title: ${title}
Summary idea: ${body.summary?.slice(0, 500) || "not set"}
Quick answer idea: ${body.quickAnswer?.slice(0, 500) || "not set"}
Required section headings: ${(body.sectionHeadings ?? []).slice(0, 8).join(" | ")}

Official source candidates (use only these URLs; do not invent other URLs): ${officialSourceCandidates.join(" | ") || "No catalog entry; leave officialSources empty."}

Editorial requirements:
- Answer the reader's exact problem before giving background.
- Use a short, concrete quick answer followed by a clear sequence of checks and next steps.
- Prefer headings that describe an action or decision: “Что означает уведомление”, “Сначала проверьте…”, “Что не подтверждает…”, “Что подготовить дальше”.
- Separate confirmed platform rules from account-specific possibilities. Never imply that a check guarantees restoration, payout release or approval.
- Explain what the reader should not assume, what evidence is useful, and when they must use the platform's own support or official help.
- Keep paragraphs short (2–4 sentences), remove filler, repeated conclusions and generic introductions.
- Include 5–8 distinct sections, one practical warning, and 3–5 genuinely useful common questions. Do not create a FAQ just to repeat the article.
- The result should read like an edited Resolution Hub guide, not like a marketing post, chatbot answer or legal opinion.

Write the main article in Russian using natural Cyrillic Russian only. Do not insert Chinese, Japanese, Korean or unexplained English fragments into the Russian title, summary, sections, warnings or FAQ. Also prepare concise, natural EN and UK versions of the title, summary and quick answer. Return JSON only with this shape:
{"title":"","summary":"","quickAnswer":"","sections":[{"heading":"","body":""}],"warnings":"","officialSources":"","faq":[{"heading":"","body":""}],"translations":{"en":{"title":"","summary":"","quickAnswer":""},"ru":{"title":"","summary":"","quickAnswer":""},"uk":{"title":"","summary":"","quickAnswer":""}}}

Do not invent platform rules, timelines, outcomes, owner experience or official procedures. Use cautious wording and mark uncertain details as requiring official verification. Do not suggest bypassing restrictions, forged documents or guaranteed recovery.`;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: "You are a careful editorial drafting assistant. Never fabricate facts.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Groq request failed" }, { status: 502 });
  }

  const result = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = result.choices?.[0]?.message?.content;
  if (!content) {
    return NextResponse.json({ error: "Groq returned no draft" }, { status: 502 });
  }

  try {
    const parsed = parseJson(content) as Record<string, unknown>;
    if (officialSourceCandidates.length) {
      parsed.officialSources = officialSourceCandidates.join("\n");
    }
    return NextResponse.json({ draft: parsed, status: "draft" });
  } catch {
    return NextResponse.json({ error: "Groq returned invalid JSON" }, { status: 502 });
  }
}
