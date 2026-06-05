alter table public.products
  add column if not exists title_de text,
  add column if not exists subtitle_de text,
  add column if not exists image_alt_de text;

alter table public.collections
  add column if not exists title_de text,
  add column if not exists eyebrow_de text,
  add column if not exists icon_image_alt_de text;
