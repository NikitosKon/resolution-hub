-- Run once in the Supabase SQL editor for the production project.
create table if not exists public.article_ideas (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  title text not null,
  platform text not null default '',
  locale text not null default 'ru',
  primary_keyword text not null default '',
  intent text not null default '',
  priority text not null default 'medium' check (priority in ('high', 'medium', 'low')),
  status text not null default 'new' check (status in ('new', 'planned', 'used', 'archived')),
  demand_evidence text not null default '',
  source text not null default '',
  source_checked_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (owner_id, title)
);

alter table public.article_ideas enable row level security;

drop policy if exists "Owners can read their ideas" on public.article_ideas;
drop policy if exists "Owners can create their ideas" on public.article_ideas;
drop policy if exists "Owners can update their ideas" on public.article_ideas;
drop policy if exists "Owners can delete their ideas" on public.article_ideas;
create policy "Owners can read their ideas" on public.article_ideas for select to authenticated using (auth.uid() = owner_id);
create policy "Owners can create their ideas" on public.article_ideas for insert to authenticated with check (auth.uid() = owner_id);
create policy "Owners can update their ideas" on public.article_ideas for update to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "Owners can delete their ideas" on public.article_ideas for delete to authenticated using (auth.uid() = owner_id);
