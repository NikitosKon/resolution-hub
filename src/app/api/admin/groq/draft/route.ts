import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const model = "llama-3.3-70b-versatile";

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

  const prompt = `Create a fact-conscious editorial draft for Resolution Hub.
Platform: ${platform}
Language: ${locale}
Primary keyword: ${keyword}
Working title: ${title}
Summary idea: ${body.summary?.slice(0, 500) || "not set"}
Quick answer idea: ${body.quickAnswer?.slice(0, 500) || "not set"}
Required section headings: ${(body.sectionHeadings ?? []).slice(0, 8).join(" | ")}

Write the main article in Russian. Also prepare concise, natural EN and UK versions of the title, summary and quick answer. Return JSON only with this shape:
{"title":"","summary":"","quickAnswer":"","sections":[{"heading":"","body":""}],"warnings":"","faq":[{"heading":"","body":""}],"translations":{"en":{"title":"","summary":"","quickAnswer":""},"ru":{"title":"","summary":"","quickAnswer":""},"uk":{"title":"","summary":"","quickAnswer":""}}}

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
    return NextResponse.json({ draft: parseJson(content), status: "draft" });
  } catch {
    return NextResponse.json({ error: "Groq returned invalid JSON" }, { status: 502 });
  }
}
