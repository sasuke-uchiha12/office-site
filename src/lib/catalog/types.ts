export type CatalogCategory = "accessories" | "footwear" | "jewelry" | "beauty";

export type ProductRow = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  image_path: string | null;
  image_alt: string | null;
  is_new: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type CollectionRow = {
  id: string;
  title: string;
  slug: string;
  category: CatalogCategory;
  eyebrow: string;
  product_count_override: number | null;
  icon_image_path: string | null;
  icon_image_alt: string | null;
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
  subtitle: string;
  slug: string;
  imageAlt: string;
  imagePath?: string | null;
  isNew: boolean;
};

export type CatalogCollectionForm = {
  id?: string;
  title: string;
  slug: string;
  category: CatalogCategory;
  eyebrow: string;
  productCountOverride: string;
  iconImageAlt: string;
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
