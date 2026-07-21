create table if not exists public.article_drafts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  slug text not null,
  title text not null default '',
  draft jsonb not null,
  status text not null default 'draft',
  translations jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, slug)
);

alter table public.article_drafts
  add column if not exists status text not null default 'draft',
  add column if not exists translations jsonb not null default '{}'::jsonb;

alter table public.article_drafts
  drop constraint if exists article_drafts_status_check;

alter table public.article_drafts
  add constraint article_drafts_status_check
  check (status in ('draft', 'review', 'approved', 'published'));

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

create policy "Published drafts are public"
  on public.article_drafts for select
  to anon, authenticated
  using (status = 'published');

create table if not exists public.article_ideas (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  title text not null,
  platform text not null default '',
  locale text not null default 'ru',
  primary_keyword text not null default '',
  intent text not null default '',
  priority text not null default 'medium',
  status text not null default 'new',
  demand_evidence text not null default '',
  source text not null default '',
  source_checked_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, title)
);

alter table public.article_ideas enable row level security;

create policy "Owners can read their ideas"
  on public.article_ideas for select
  to authenticated
  using (auth.uid() = owner_id);

create policy "Owners can create their ideas"
  on public.article_ideas for insert
  to authenticated
  with check (auth.uid() = owner_id);

create policy "Owners can update their ideas"
  on public.article_ideas for update
  to authenticated
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

create policy "Owners can delete their ideas"
  on public.article_ideas for delete
  to authenticated
  using (auth.uid() = owner_id);
