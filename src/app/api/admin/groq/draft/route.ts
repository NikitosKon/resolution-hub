import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const model = "llama-3.3-70b-versatile";

const editorialPolicy = `Resolution Hub editorial policy (compiled from the project constitution and all role contracts):
- Mission: help a stressed reader understand one specific marketplace or payment-account problem, assess what is known, prepare safely and choose the next step.
- Evidence hierarchy: current official source first; then a matching permissioned owner record; then multiple dated, contextual observations labelled as patterns; unknowns stay qualified or omitted. Never turn one case, a forum post or a SERP snippet into platform policy.
- Every material claim needs a source boundary, market applicability and freshness awareness. Low-confidence claims are never stated as facts. Never invent rules, statistics, timelines, fees, limits, outcomes, screenshots, cases, quotes, owner experience, legal/tax conclusions or support procedures.
- Write as a calm technical journalist: direct answer first, practical consequences, relevant checks, safe preparation, uncertainty, mistakes to avoid, next steps, useful questions and a contextual Telegram handoff. Use natural language, varied rhythm and no filler, clickbait, fake suspense, corporate boilerplate or keyword stuffing.
- Keep one primary search intent and distinct value. Adapt the structure to the issue; do not mechanically use every section or clone another guide. Cover only questions relevant to this reader.
- Preserve EEAT boundaries: use owner experience only when confirmed and permissioned; otherwise do not invent a case. Never promise restoration, payout release, verification approval, timing or any platform outcome.
- Safety: never suggest forged documents, false identities, bypassing verification, restriction evasion, deceptive replacement accounts or hiding information. Telegram is @helpgrailed and the CTA must be calm, optional and outcome-neutral.
- Multilingual: RU, EN and UK versions preserve the same verified facts, but are written naturally in the target language. Do not mix interface languages or leave accidental CJK text.
- Editorial QA: check factual support, source freshness, reader questions, intent, structure, entities, internal-link opportunities, duplication, template patterns, CTA honesty, metadata and schema readiness. Blocking review markers must remain visible; scores never override them. The generated result is draft-only and requires human review before approval.`;

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

function ensureEditorialBlocks(parsed: Record<string, unknown>) {
  const sections = Array.isArray(parsed.sections) ? parsed.sections as Array<{ heading?: string }> : [];
  const tables = Array.isArray(parsed.tables) ? parsed.tables : [];
  parsed.tables = tables.length ? tables.slice(0, 1) : [{
    heading: "Что проверить перед обращением",
    columns: ["Проверка", "Что подтвердить"],
    rows: sections.slice(0, 4).map((section) => [
      section.heading || "Раздел статьи",
      "Сверьте с уведомлением аккаунта и официальным источником",
    ]),
  }];
  const blocks = Array.isArray(parsed.visualBlocks) ? parsed.visualBlocks as Array<Record<string, unknown>> : [];
  const fallback = [
    {
      type: "checklist",
      heading: "Перед отправкой",
      body: "Соберите только сведения, которые относятся к вашей ситуации, и проверьте их по уведомлению платформы.",
      items: sections.slice(0, 4).map((section) => `Проверьте раздел «${section.heading || "требование платформы"}»`),
      source: "",
    },
    {
      type: "callout",
      heading: "Перед тем как продолжить",
      body: typeof parsed.warnings === "string" && parsed.warnings.trim() ? parsed.warnings : "Не отправляйте неподтверждённые сведения и не рассчитывайте на заранее гарантированный результат.",
      items: [],
      source: "",
    },
  ];
  parsed.visualBlocks = [...blocks, ...fallback].slice(0, 2);
}

function draftWordCount(parsed: Record<string, unknown>) {
  const sections = Array.isArray(parsed.sections) ? parsed.sections as Array<Record<string, unknown>> : [];
  const tables = Array.isArray(parsed.tables) ? parsed.tables as Array<Record<string, unknown>> : [];
  const blocks = Array.isArray(parsed.visualBlocks) ? parsed.visualBlocks as Array<Record<string, unknown>> : [];
  const faq = Array.isArray(parsed.faq) ? parsed.faq as Array<Record<string, unknown>> : [];
  const values = [
    parsed.title, parsed.summary, parsed.quickAnswer, parsed.warnings,
    ...sections.flatMap((item) => [item.heading, item.body]),
    ...tables.flatMap((table) => [table.heading, ...(Array.isArray(table.columns) ? table.columns : []), ...(Array.isArray(table.rows) ? table.rows.flat() : [])]),
    ...blocks.flatMap((block) => [block.heading, block.body, ...(Array.isArray(block.items) ? block.items : [])]),
    ...faq.flatMap((item) => [item.heading, item.body]),
  ];
  return values.filter((value): value is string => typeof value === "string").join(" ").split(/\s+/).filter(Boolean).length;
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

${editorialPolicy}

Editorial requirements:
- Answer the reader's exact problem before giving background.
- Use a short, concrete quick answer followed by a clear sequence of checks and next steps.
- Prefer headings that describe an action or decision: “Что означает уведомление”, “Сначала проверьте…”, “Что не подтверждает…”, “Что подготовить дальше”.
- Separate confirmed platform rules from account-specific possibilities. Never imply that a check guarantees restoration, payout release or approval.
- Explain what the reader should not assume, what evidence is useful, and when they must use the platform's own support or official help.
- Keep paragraphs short (2–4 sentences), remove filler, repeated conclusions and generic introductions.
- Include 7–10 distinct sections when the topic warrants that depth, one practical warning, and 3–5 genuinely useful common questions. Do not create a FAQ just to repeat the article.
- Return exactly one useful table with short cells. Use it for checks, evidence or a comparison; never invent statistics or platform rules.
- Return at least two visual blocks from these types: checklist, timeline, decision-tree, callout, source-card. A timeline requires confirmed dates or stages; a source-card requires a real official URL; a decision-tree must use only facts already supported in the draft. A checklist and a caution callout are safe defaults when no other block is justified.
- Make the guide complete enough to solve the reader's immediate question. Add context, account-specific limits, safe next steps and what not to assume. Aim for substantial depth when evidence supports it, but never repeat the same point or pad the article.
- The Russian article body must contain at least 2,000 useful words before translations. Reach the length with relevant explanations, distinctions, preparation details, uncertainty and questions—not repetition or invented facts.
- The result should read like an edited Resolution Hub guide, not like a marketing post, chatbot answer or legal opinion.

Write the main article in Russian using natural Cyrillic Russian only. Do not insert Chinese, Japanese, Korean or unexplained English fragments into the Russian title, summary, sections, warnings or FAQ. Also prepare concise, natural EN and UK versions of the title, summary and quick answer. Return JSON only with this shape:
{"title":"","summary":"","quickAnswer":"","sections":[{"heading":"","body":""}],"tables":[{"heading":"","columns":["",""],"rows":[["",""]]}],"visualBlocks":[{"type":"checklist","heading":"","body":"","items":[""],"source":""},{"type":"callout","heading":"","body":"","items":[],"source":""}],"warnings":"","officialSources":"","faq":[{"heading":"","body":""}],"translations":{"en":{"title":"","summary":"","quickAnswer":""},"ru":{"title":"","summary":"","quickAnswer":""},"uk":{"title":"","summary":"","quickAnswer":""}}}

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
      max_tokens: 7000,
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
    let parsed = parseJson(content) as Record<string, unknown>;
    if (officialSourceCandidates.length) {
      parsed.officialSources = officialSourceCandidates.join("\n");
    }
    ensureEditorialBlocks(parsed);
    let expansionAttempt = 0;
    while (draftWordCount(parsed) < 2000 && expansionAttempt < 3) {
      expansionAttempt += 1;
      const currentWordCount = draftWordCount(parsed);
      const missingWords = 2000 - currentWordCount;
      const expansionResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature: 0.15,
          max_tokens: 7000,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: "You are a careful Resolution Hub senior editor. Expand only with useful, source-conscious detail. Never invent facts." },
            { role: "user", content: `This draft currently contains ${currentWordCount} words. Expand it by at least ${missingWords + 150} useful words and reach at least 2,000 words total. Preserve all existing facts, uncertainty, sources, warnings and intent. Add relevant explanations, distinctions, safe preparation steps, mistake prevention and genuinely useful FAQ answers. Do not repeat paragraphs, add statistics, invent platform rules, create cases or promise outcomes. Keep exactly one table and at least two visual blocks. Return the same JSON shape only.\n\n${JSON.stringify(parsed)}` },
          ],
        }),
      });
      if (expansionResponse.ok) {
        const expansionResult = (await expansionResponse.json()) as { choices?: Array<{ message?: { content?: string } }> };
        const expandedContent = expansionResult.choices?.[0]?.message?.content;
        if (expandedContent) {
          const expanded = parseJson(expandedContent) as Record<string, unknown>;
          parsed = { ...parsed, ...expanded };
          if (officialSourceCandidates.length) parsed.officialSources = officialSourceCandidates.join("\n");
          ensureEditorialBlocks(parsed);
        }
      }
    }
    return NextResponse.json({ draft: parsed, status: "draft", wordCount: draftWordCount(parsed) });
  } catch {
    return NextResponse.json({ error: "Groq returned invalid JSON" }, { status: 502 });
  }
}
