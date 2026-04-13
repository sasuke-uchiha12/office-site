create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now())
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text not null,
  slug text not null unique,
  image_path text,
  image_alt text,
  is_new boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null check (category in ('accessories', 'footwear', 'jewelry', 'beauty')),
  eyebrow text not null,
  product_count_override integer,
  icon_image_path text,
  icon_image_alt text,
  background_svg text not null default '/_next/static/media/explore1.bf5d4097.svg',
  published boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.collection_products (
  collection_id uuid not null references public.collections(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  position integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  primary key (collection_id, product_id)
);

create index if not exists collection_products_collection_id_idx on public.collection_products(collection_id, position);
create index if not exists collection_products_product_id_idx on public.collection_products(product_id);

drop trigger if exists set_products_updated_at on public.products;
create trigger set_products_updated_at
before update on public.products
for each row
execute function public.set_updated_at();

drop trigger if exists set_collections_updated_at on public.collections;
create trigger set_collections_updated_at
before update on public.collections
for each row
execute function public.set_updated_at();

alter table public.admin_users enable row level security;
alter table public.products enable row level security;
alter table public.collections enable row level security;
alter table public.collection_products enable row level security;

drop policy if exists "admin users can read own row" on public.admin_users;
create policy "admin users can read own row"
on public.admin_users
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "public read published products" on public.products;
create policy "public read published products"
on public.products
for select
to anon, authenticated
using (published = true or public.is_admin());

drop policy if exists "admins manage products" on public.products;
create policy "admins manage products"
on public.products
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "public read published collections" on public.collections;
create policy "public read published collections"
on public.collections
for select
to anon, authenticated
using (published = true or public.is_admin());

drop policy if exists "admins manage collections" on public.collections;
create policy "admins manage collections"
on public.collections
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "public read collection assignments" on public.collection_products;
create policy "public read collection assignments"
on public.collection_products
for select
to anon, authenticated
using (true);

drop policy if exists "admins manage collection assignments" on public.collection_products;
create policy "admins manage collection assignments"
on public.collection_products
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('collection-images', 'collection-images', true)
on conflict (id) do nothing;

drop policy if exists "public read product images" on storage.objects;
create policy "public read product images"
on storage.objects
for select
to public
using (bucket_id = 'product-images');

drop policy if exists "public read collection images" on storage.objects;
create policy "public read collection images"
on storage.objects
for select
to public
using (bucket_id = 'collection-images');

drop policy if exists "admins upload product images" on storage.objects;
create policy "admins upload product images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "admins update product images" on storage.objects;
create policy "admins update product images"
on storage.objects
for update
to authenticated
using (bucket_id = 'product-images' and public.is_admin())
with check (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "admins delete product images" on storage.objects;
create policy "admins delete product images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "admins upload collection images" on storage.objects;
create policy "admins upload collection images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'collection-images' and public.is_admin());

drop policy if exists "admins update collection images" on storage.objects;
create policy "admins update collection images"
on storage.objects
for update
to authenticated
using (bucket_id = 'collection-images' and public.is_admin())
with check (bucket_id = 'collection-images' and public.is_admin());

drop policy if exists "admins delete collection images" on storage.objects;
create policy "admins delete collection images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'collection-images' and public.is_admin());
