import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const model = "llama-3.3-70b-versatile";

const editorialPolicy = `Resolution Hub editorial policy (compiled from the project constitution and all role contracts):
- Mission: help a stressed reader understand one specific marketplace or payment-account problem, assess what is known, prepare safely and choose the next step.
- Evidence hierarchy: current official source first; then a matching permissioned owner record; then multiple dated, contextual observations labelled as patterns; unknowns stay qualified or omitted. Never turn one case, a forum post or a SERP snippet into platform policy.
- Every material claim needs a source boundary, market applicability and freshness awareness. Low-confidence claims are never stated as facts. Never invent rules, statistics, timelines, fees, limits, outcomes, screenshots, cases, quotes, owner experience, legal/tax conclusions or support procedures.
- Write as a calm technical journalist: direct answer first, practical consequences, relevant checks, safe preparation, uncertainty, mistakes to avoid, next steps, useful questions and a contextual Telegram handoff. Use natural language, varied rhythm and no filler, clickbait, fake suspense, corporate boilerplate or keyword stuffing.
- Telegram handoff: when the reader's situation remains account-specific or unclear after the guide, include at most one natural mention of @helpgrailed in the relevant next-step text or CTA. Say that the owner can review the described situation and explain options; never promise an outcome. Do not repeat the handle in every section and do not add a handoff when the guide is already complete without personal context.
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

function removeUnsupportedNationalityClaims(parsed: Record<string, unknown>) {
  const unsupported = /(граждан(?:ин|ина|е|ом)?\s+рф|российск(?:ий|ого|ому|им|ая|ой|ую)|паспорт\s+рф|водительск(?:ие|их)\s+права\s+рф)/iu;
  const clean = (value: unknown) => typeof value === "string"
    ? value.replace(unsupported, "документ, прямо указанный в уведомлении платформы")
    : value;
  for (const key of ["title", "summary", "quickAnswer", "warnings", "cta", "officialSources"]) {
    if (key in parsed) parsed[key] = clean(parsed[key]);
  }
  for (const key of ["sections", "faq"]) {
    if (Array.isArray(parsed[key])) {
      parsed[key] = parsed[key].map((item) => {
        if (!item || typeof item !== "object") return item;
        const record = item as Record<string, unknown>;
        return { ...record, heading: clean(record.heading), body: clean(record.body) };
      });
    }
  }
  if (Array.isArray(parsed.tables)) {
    parsed.tables = parsed.tables.map((table) => {
      if (!table || typeof table !== "object") return table;
      const record = table as Record<string, unknown>;
      const rows = Array.isArray(record.rows) ? record.rows.filter((row) => !Array.isArray(row) || !row.some((cell) => typeof cell === "string" && unsupported.test(cell))) : [];
      return { ...record, heading: clean(record.heading), columns: Array.isArray(record.columns) ? record.columns.map(clean) : record.columns, rows: rows.map((row) => Array.isArray(row) ? row.map(clean) : row) };
    });
  }
  if (Array.isArray(parsed.visualBlocks)) {
    parsed.visualBlocks = parsed.visualBlocks.map((block) => {
      if (!block || typeof block !== "object") return block;
      const record = block as Record<string, unknown>;
      return { ...record, heading: clean(record.heading), body: clean(record.body), items: Array.isArray(record.items) ? record.items.map(clean) : record.items, source: clean(record.source) };
    });
  }
}

function ensureEditorialBlocks(parsed: Record<string, unknown>) {
  removeUnsupportedNationalityClaims(parsed);
  const sections = Array.isArray(parsed.sections) ? parsed.sections as Array<{ heading?: string }> : [];
  const tables = Array.isArray(parsed.tables) ? parsed.tables : [];
  parsed.tables = tables.length ? tables.slice(0, 5) : [{
    heading: "Что проверить перед обращением",
    columns: ["Проверка", "Что подтвердить"],
    rows: sections.slice(0, 4).map((section) => [
      section.heading || "Раздел статьи",
      "Сверьте с уведомлением аккаунта и официальным источником",
    ]),
    afterSection: Math.min(1, Math.max(0, sections.length - 1)),
  }];
  const blocks = Array.isArray(parsed.visualBlocks) ? parsed.visualBlocks as Array<Record<string, unknown>> : [];
  const fallback = [
    {
      type: "checklist",
      heading: "Перед отправкой",
      body: "Соберите только сведения, которые относятся к вашей ситуации, и проверьте их по уведомлению платформы.",
      items: sections.slice(0, 4).map((section) => `Проверьте раздел «${section.heading || "требование платформы"}»`),
      source: "",
      afterSection: Math.min(0, Math.max(0, sections.length - 1)),
    },
    {
      type: "callout",
      heading: "Перед тем как продолжить",
      body: typeof parsed.warnings === "string" && parsed.warnings.trim() ? parsed.warnings : "Не отправляйте неподтверждённые сведения и не рассчитывайте на заранее гарантированный результат.",
      items: [],
      source: "",
      afterSection: Math.min(1, Math.max(0, sections.length - 1)),
    },
  ];
  parsed.visualBlocks = [...blocks, ...fallback].slice(0, 10);
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

async function runQualityPass(apiKey: string, parsed: Record<string, unknown>) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      temperature: 0.1,
      max_tokens: 7000,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "You are the final senior editor for Resolution Hub. Never invent facts or sources." },
        { role: "user", content: `Review this draft against a practical 10-point editorial rubric: factual caution (2), usefulness and completeness (2), clear single intent (1), natural Russian (1), non-repetitive structure (1), safe next steps (1), source boundaries (1), honest Telegram CTA (1). Target 8–10/10. Rewrite only where needed to reach that standard. Remove unsupported certainty, mixed-language fragments, repeated claims and generic filler. The revised draft must not be shorter than the input; preserve all useful detail and expand thin sections instead. If it is below 2,000 words, add genuinely useful, source-conscious detail rather than declaring it finished. Keep 1–5 contextual tables, 2–10 contextual visual blocks and 8–10 purposeful sections; preserve each block's afterSection placement. Never introduce nationality-specific documents without explicit source support. Return JSON only: {"score":8,"improvements":["..."],"draft":{...}}. The score must reflect the revised draft, not optimism.\n\n${JSON.stringify(parsed)}` },
      ],
    }),
  });
  if (!response.ok) return null;
  const result = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const content = result.choices?.[0]?.message?.content;
  if (!content) return null;
  const output = parseJson(content) as { score?: number; improvements?: string[]; draft?: Record<string, unknown> };
  if (!output.draft || typeof output.score !== "number") return null;
  return {
    score: Math.max(1, Math.min(10, Math.round(output.score))),
    improvements: Array.isArray(output.improvements) ? output.improvements.filter((item): item is string => typeof item === "string").slice(0, 5) : [],
    draft: output.draft,
  };
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
- Produce 8–10 distinct, non-overlapping sections for a full guide. Each section must answer a different reader question or move the reader to a different safe decision. Do not create headings merely to split one idea, and do not create a FAQ just to repeat the article. If the evidence cannot support a section, state the limitation instead of inventing detail.
- Use 1–5 useful tables with short cells, only where a comparison, evidence map or check sequence is clearer than prose. Never invent statistics, national document requirements or platform rules.
- Use 2–10 visual blocks from these types: checklist, timeline, decision-tree, callout, source-card. Choose the number and type from the article context; do not fill a quota. Place each table and visual block next to the section it explains using afterSection (zero-based section index). A timeline requires confirmed dates or stages; a source-card requires a real official URL; a decision-tree must use only facts already supported in the draft. A checklist and a caution callout are safe defaults when no other block is justified.
- Never infer a reader's nationality, country, citizenship or document type. Do not mention Russian documents, “гражданин РФ” or any country-specific identity document unless the supplied official source explicitly requires it for the relevant market. Otherwise say that the exact requirement is shown in the account notice and must be verified with the platform.
- Make the guide complete enough to solve the reader's immediate question. Add context, account-specific limits, safe next steps and what not to assume. Aim for substantial depth when evidence supports it, but never repeat the same point or pad the article.
- The Russian article body should contain at least 2,000 useful words before translations when the evidence supports that depth. Reach length with relevant explanations, distinctions, preparation details, uncertainty and questions—not repetition or invented facts.
- Before returning JSON, silently run an editorial pass: remove repeated claims, unsupported certainty, mixed-language fragments, generic filler and duplicate FAQ answers. Check that every section has a concrete purpose, every platform-specific statement is either supported by one of the listed official URLs or clearly qualified, and the guide remains useful even when the platform decision is unknown.
- The result should read like an edited Resolution Hub guide, not like a marketing post, chatbot answer or legal opinion.

Write the main article in Russian using natural Cyrillic Russian only. Do not insert Chinese, Japanese, Korean or unexplained English fragments into the Russian title, summary, sections, warnings or FAQ. Also prepare concise, natural EN and UK versions of the title, summary and quick answer. Return JSON only with this shape:
{"title":"","summary":"","quickAnswer":"","cta":"","sections":[{"heading":"","body":""}],"tables":[{"heading":"","columns":["",""],"rows":[["",""]],"afterSection":0}],"visualBlocks":[{"type":"checklist","heading":"","body":"","items":[""],"source":"","afterSection":0},{"type":"callout","heading":"","body":"","items":[],"source":"","afterSection":1}],"warnings":"","officialSources":"","faq":[{"heading":"","body":""}],"translations":{"en":{"title":"","summary":"","quickAnswer":""},"ru":{"title":"","summary":"","quickAnswer":""},"uk":{"title":"","summary":"","quickAnswer":""}}}

Do not invent platform rules, timelines, outcomes, owner experience or official procedures. Use cautious wording and mark uncertain details as requiring official verification. Do not suggest bypassing restrictions, forged documents or guaranteed recovery.`;

  const requestBody = {
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
  };
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const upstream = await response.text().catch(() => "");
    return NextResponse.json({ error: "Groq request failed", detail: upstream.slice(0, 240) }, { status: 502 });
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
            { role: "user", content: `This draft currently contains ${currentWordCount} words. Expand it by at least ${missingWords + 150} useful words and reach at least 2,000 words total where the evidence supports that depth. Preserve all existing facts, uncertainty, sources, warnings and intent. Add relevant explanations, distinctions, safe preparation steps, mistake prevention and genuinely useful FAQ answers. Keep 8–10 distinct sections with no repeated purpose. Do not repeat paragraphs, add statistics, invent platform rules, list documents unless the official source supports them, create cases or promise outcomes. Use 1–5 contextual tables and 2–10 contextual visual blocks only when they add information, each with an afterSection placement. Return the same JSON shape only.\n\n${JSON.stringify(parsed)}` },
          ],
        }),
      });
      if (expansionResponse.ok) {
        const expansionResult = (await expansionResponse.json()) as { choices?: Array<{ message?: { content?: string } }> };
        const expandedContent = expansionResult.choices?.[0]?.message?.content;
        if (expandedContent) {
          const expanded = parseJson(expandedContent) as Record<string, unknown>;
          const expandedCandidate = { ...parsed, ...expanded };
          // Never let a truncated Groq response replace a longer draft.
          if (draftWordCount(expandedCandidate) > currentWordCount) parsed = expandedCandidate;
          if (officialSourceCandidates.length) parsed.officialSources = officialSourceCandidates.join("\n");
          ensureEditorialBlocks(parsed);
        }
      }
    }
    let qualityScore: number | undefined;
    let qualityNotes: string[] = [];
    for (let pass = 0; pass < 1; pass += 1) {
      const quality = await runQualityPass(apiKey, parsed);
      if (!quality) break;
      const currentWordCount = draftWordCount(parsed);
      const qualityCandidate = { ...parsed, ...quality.draft };
      // Quality editing may refine wording, but it must not silently shorten
      // the article back to a tiny 300–500 word response.
      if (draftWordCount(qualityCandidate) >= currentWordCount) parsed = qualityCandidate;
      if (officialSourceCandidates.length) parsed.officialSources = officialSourceCandidates.join("\n");
      ensureEditorialBlocks(parsed);
      qualityScore = quality.score;
      qualityNotes = quality.improvements;
      if (quality.score >= 8) break;
    }
    return NextResponse.json({ draft: parsed, status: "draft", wordCount: draftWordCount(parsed), qualityScore, qualityNotes });
  } catch {
    return NextResponse.json({ error: "Groq returned invalid JSON" }, { status: 502 });
  }
}
