-- Run once in Supabase SQL Editor to expose only published drafts to the public renderer.
drop policy if exists "Published drafts are public" on public.article_drafts;
create policy "Published drafts are public"
  on public.article_drafts for select
  to anon, authenticated
  using (status = 'published');
