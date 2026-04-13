import { shopCollections, shopProducts } from "../../data/siteContent";
import { slugify } from "../../utils/slugify";
import { hasSupabaseConfig, requireSupabaseClient, supabase } from "../supabase/client";
import type {
  CatalogCategory,
  CollectionCardView,
  CollectionProductRow,
  CollectionRow,
  ProductCardView,
  ProductRow,
} from "./types";

export const PRODUCT_IMAGES_BUCKET = "product-images";
export const COLLECTION_IMAGES_BUCKET = "collection-images";

const FALLBACK_COLLECTION_PRODUCTS: Record<CatalogCategory, string[]> = {
  accessories: ["product-1", "product-5", "product-7", "product-8"],
  footwear: ["product-2", "product-3", "product-4", "product-6"],
  jewelry: ["product-1", "product-4", "product-6", "product-8"],
  beauty: ["product-2", "product-5", "product-7", "product-3"],
};

function parseProductCount(value: string): number | null {
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function publicUrlFromPath(bucket: string, path: string | null | undefined, fallback = ""): string {
  if (!path) {
    return fallback;
  }

  if (path.startsWith("/") || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (!supabase) {
    return fallback;
  }

  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

function toProductCardView(product: ProductRow): ProductCardView {
  return {
    id: product.id,
    title: product.title,
    subtitle: product.subtitle,
    slug: product.slug,
    image: publicUrlFromPath(PRODUCT_IMAGES_BUCKET, product.image_path, "/_next/p1-176ca.jpg"),
    imageAlt: product.image_alt || `${product.title} product image`,
    isNew: product.is_new,
    price: "",
    liked: false,
  };
}

function toCollectionCardView(collection: CollectionRow, productCount: number): CollectionCardView {
  const derivedCount = collection.product_count_override ?? productCount;

  return {
    id: collection.id,
    slug: collection.slug,
    category: collection.category,
    eyebrow: collection.eyebrow,
    title: collection.title,
    productCount: `${derivedCount} products`,
    iconImage: publicUrlFromPath(COLLECTION_IMAGES_BUCKET, collection.icon_image_path, "/_next/p1-176ca.jpg"),
    iconImageAlt: collection.icon_image_alt || `${collection.title} category icon`,
    backgroundSvg: collection.background_svg,
  };
}

function fallbackProducts(): ProductCardView[] {
  return shopProducts.map((product) => ({
    id: product.id,
    title: product.title,
    subtitle: product.subtitle,
    slug: slugify(product.title),
    image: product.image,
    imageAlt: product.imageAlt,
    isNew: product.isNew,
    liked: product.liked,
    price: product.price,
  }));
}

function fallbackCollections(): CollectionCardView[] {
  return shopCollections.map((collection) => ({
    id: collection.id,
    slug: slugify(collection.title),
    category: collection.category,
    eyebrow: collection.eyebrow,
    title: collection.title,
    productCount: collection.productCount,
    iconImage: collection.iconImage,
    iconImageAlt: collection.iconImageAlt,
    backgroundSvg: collection.backgroundSvg,
  }));
}

function fallbackProductsForCollection(slug: string): ProductCardView[] {
  const collections = fallbackCollections();
  const collection = collections.find((item) => item.slug === slug);
  const products = fallbackProducts();

  if (!collection) {
    return [];
  }

  const preferredIds = FALLBACK_COLLECTION_PRODUCTS[collection.category];
  const orderedProducts = preferredIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is ProductCardView => Boolean(product));

  return orderedProducts.length > 0 ? orderedProducts : products.slice(0, 4);
}

export async function fetchPublicShopProducts(limit = 12): Promise<ProductCardView[]> {
  if (!hasSupabaseConfig) {
    return fallbackProducts().slice(0, limit);
  }

  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("products")
    .select("id,title,subtitle,slug,image_path,image_alt,is_new,published,created_at,updated_at")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw error;
  }

  return (data ?? []).map((row) => toProductCardView(row as ProductRow));
}

export async function fetchPublicCollections(): Promise<CollectionCardView[]> {
  if (!hasSupabaseConfig) {
    return fallbackCollections();
  }

  const client = requireSupabaseClient();
  const [{ data: collectionsData, error: collectionsError }, { data: joinRows, error: joinError }, { data: publishedProducts, error: productsError }] =
    await Promise.all([
      client
        .from("collections")
        .select("id,title,slug,category,eyebrow,product_count_override,icon_image_path,icon_image_alt,background_svg,published,created_at,updated_at")
        .eq("published", true)
        .order("title", { ascending: true }),
      client.from("collection_products").select("collection_id,product_id,position"),
      client.from("products").select("id").eq("published", true),
    ]);

  if (collectionsError) {
    throw collectionsError;
  }

  if (joinError) {
    throw joinError;
  }

  if (productsError) {
    throw productsError;
  }

  const publishedIds = new Set((publishedProducts ?? []).map((row) => String((row as { id: string }).id)));
  const counts = new Map<string, number>();

  for (const joinRow of (joinRows ?? []) as CollectionProductRow[]) {
    if (!publishedIds.has(joinRow.product_id)) {
      continue;
    }

    counts.set(joinRow.collection_id, (counts.get(joinRow.collection_id) ?? 0) + 1);
  }

  return ((collectionsData ?? []) as CollectionRow[]).map((collection) =>
    toCollectionCardView(collection, counts.get(collection.id) ?? 0),
  );
}

export async function fetchPublicCollectionBySlug(slug: string): Promise<CollectionCardView | null> {
  if (!hasSupabaseConfig) {
    return fallbackCollections().find((collection) => collection.slug === slug) ?? null;
  }

  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("collections")
    .select("id,title,slug,category,eyebrow,product_count_override,icon_image_path,icon_image_alt,background_svg,published,created_at,updated_at")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  const { data: joinRows, error: joinError } = await client
    .from("collection_products")
    .select("collection_id,product_id,position")
    .eq("collection_id", data.id);

  if (joinError) {
    throw joinError;
  }

  const { data: publishedProducts, error: productsError } = await client
    .from("products")
    .select("id")
    .eq("published", true);

  if (productsError) {
    throw productsError;
  }

  const publishedIds = new Set((publishedProducts ?? []).map((row) => String((row as { id: string }).id)));
  const count = ((joinRows ?? []) as CollectionProductRow[]).filter((row) => publishedIds.has(row.product_id)).length;

  return toCollectionCardView(data as CollectionRow, count);
}

export async function fetchPublicProductsForCollection(slug: string): Promise<ProductCardView[]> {
  if (!hasSupabaseConfig) {
    return fallbackProductsForCollection(slug);
  }

  const client = requireSupabaseClient();
  const { data: collection, error: collectionError } = await client
    .from("collections")
    .select("id")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (collectionError) {
    throw collectionError;
  }

  if (!collection) {
    return [];
  }

  const { data: joinRows, error: joinError } = await client
    .from("collection_products")
    .select("collection_id,product_id,position")
    .eq("collection_id", collection.id)
    .order("position", { ascending: true });

  if (joinError) {
    throw joinError;
  }

  const productIds = ((joinRows ?? []) as CollectionProductRow[]).map((row) => row.product_id);

  if (productIds.length === 0) {
    return [];
  }

  const { data: products, error: productsError } = await client
    .from("products")
    .select("id,title,subtitle,slug,image_path,image_alt,is_new,published,created_at,updated_at")
    .in("id", productIds)
    .eq("published", true);

  if (productsError) {
    throw productsError;
  }

  const productsById = new Map(((products ?? []) as ProductRow[]).map((product) => [product.id, toProductCardView(product)]));

  return productIds
    .map((id) => productsById.get(id))
    .filter((product): product is ProductCardView => Boolean(product));
}

export function getFallbackCollectionFormDefaults() {
  return fallbackCollections().map((collection) => ({
    ...collection,
    productCountOverride: parseProductCount(collection.productCount),
  }));
}
