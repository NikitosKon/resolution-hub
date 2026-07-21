import type { ArticleDraft } from "./article-draft";
import { createSupabaseServerClient } from "./supabase/server";

export type PublishedDraftRecord = {
  slug: string;
  title: string;
  draft: ArticleDraft;
  updatedAt: string;
};

export async function getPublishedDraft(slug: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("article_drafts")
      .select("slug, title, draft, updated_at")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (error || !data) return null;
    return {
      slug: data.slug as string,
      title: data.title as string,
      draft: data.draft as ArticleDraft,
      updatedAt: data.updated_at as string,
    } satisfies PublishedDraftRecord;
  } catch {
    return null;
  }
}

export async function listPublishedDrafts() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("article_drafts")
      .select("slug, draft, updated_at")
      .eq("status", "published")
      .order("updated_at", { ascending: false });
    if (error) return [];
    return (data ?? []).map((item) => ({
      slug: item.slug as string,
      draft: item.draft as ArticleDraft,
      updatedAt: item.updated_at as string,
    }));
  } catch {
    return [];
  }
}
