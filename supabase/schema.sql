create table if not exists public.article_drafts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  slug text not null,
  title text not null default '',
  draft jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, slug)
);

alter table public.article_drafts enable row level security;

create policy "Owners can read their drafts"
  on public.article_drafts for select
  to authenticated
  using (auth.uid() = owner_id);

create policy "Owners can create their drafts"
  on public.article_drafts for insert
  to authenticated
  with check (auth.uid() = owner_id);

create policy "Owners can update their drafts"
  on public.article_drafts for update
  to authenticated
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

create policy "Owners can delete their drafts"
  on public.article_drafts for delete
  to authenticated
  using (auth.uid() = owner_id);
