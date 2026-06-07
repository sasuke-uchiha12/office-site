export type CatalogCategory = "accessories" | "footwear" | "jewelry" | "beauty";

export type ProductRow = {
  id: string;
  title: string;
  title_de: string | null;
  subtitle: string;
  subtitle_de: string | null;
  slug: string;
  image_path: string | null;
  image_alt: string | null;
  image_alt_de: string | null;
  is_new: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type CollectionRow = {
  id: string;
  title: string;
  title_de: string | null;
  slug: string;
  category: CatalogCategory;
  eyebrow: string;
  eyebrow_de: string | null;
  product_count_override: number | null;
  icon_image_path: string | null;
  icon_image_alt: string | null;
  icon_image_alt_de: string | null;
  background_svg: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type CollectionProductRow = {
  collection_id: string;
  product_id: string;
  position: number;
};

export type AdminUserRow = {
  user_id: string;
};

export type CatalogProductForm = {
  id?: string;
  title: string;
  titleDe: string;
  subtitle: string;
  subtitleDe: string;
  slug: string;
  imageAlt: string;
  imageAltDe: string;
  imagePath?: string | null;
  isNew: boolean;
};

export type CatalogCollectionForm = {
  id?: string;
  title: string;
  titleDe: string;
  slug: string;
  category: CatalogCategory;
  eyebrow: string;
  eyebrowDe: string;
  productCountOverride: string;
  iconImageAlt: string;
  iconImageAltDe: string;
  iconImagePath?: string | null;
  backgroundSvg: string;
};

export type CollectionCardView = {
  id: string;
  slug: string;
  category: CatalogCategory;
  eyebrow: string;
  title: string;
  productCount: string;
  iconImage: string;
  iconImageAlt: string;
  backgroundSvg: string;
};

export type ProductCardView = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  imageAlt: string;
  isNew?: boolean;
  liked?: boolean;
  price: string;
};
