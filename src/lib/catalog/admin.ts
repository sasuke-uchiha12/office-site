import type { Session } from "@supabase/supabase-js";
import { requireSupabaseClient } from "../supabase/client";
import type {
  AdminUserRow,
  CatalogCollectionForm,
  CatalogProductForm,
  CollectionProductRow,
  CollectionRow,
  ProductRow,
} from "./types";
import { COLLECTION_IMAGES_BUCKET, PRODUCT_IMAGES_BUCKET } from "./public";

function isAvifFile(file: File): boolean {
  return file.type === "image/avif" || file.name.toLowerCase().endsWith(".avif");
}

async function ensureAvifFile(file: File) {
  if (!isAvifFile(file)) {
    throw new Error("Only AVIF images are allowed.");
  }
}

function nullableTrim(value: string): string | null {
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

const PRODUCT_SELECT =
  "id,title,title_de,subtitle,subtitle_de,slug,image_path,image_alt,image_alt_de,is_new,published,created_at,updated_at";

const COLLECTION_SELECT =
  "id,title,title_de,slug,category,eyebrow,eyebrow_de,product_count_override,icon_image_path,icon_image_alt,icon_image_alt_de,background_svg,published,created_at,updated_at";

export async function getAdminSession(): Promise<Session | null> {
  const client = requireSupabaseClient();
  const { data, error } = await client.auth.getSession();

  if (error) {
    throw error;
  }

  return data.session ?? null;
}

export async function signInAdmin(email: string, password: string) {
  const client = requireSupabaseClient();
  const { error } = await client.auth.signInWithPassword({ email, password });

  if (error) {
    throw error;
  }
}

export async function signOutAdmin() {
  const client = requireSupabaseClient();
  const { error } = await client.auth.signOut();

  if (error) {
    throw error;
  }
}

export async function checkIsAdmin(userId: string): Promise<boolean> {
  const client = requireSupabaseClient();
  const { data, error } = await client.from("admin_users").select("user_id").eq("user_id", userId).maybeSingle();

  if (error) {
    throw error;
  }

  return Boolean((data as AdminUserRow | null)?.user_id);
}

export async function listAdminProducts(): Promise<ProductRow[]> {
  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("products")
    .select(PRODUCT_SELECT)
    .order("updated_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []) as ProductRow[];
}

export async function upsertAdminProduct(product: CatalogProductForm): Promise<ProductRow> {
  const client = requireSupabaseClient();
  const payload = {
    title: product.title.trim(),
    title_de: nullableTrim(product.titleDe),
    subtitle: product.subtitle.trim(),
    subtitle_de: nullableTrim(product.subtitleDe),
    slug: product.slug.trim(),
    image_path: product.imagePath ?? null,
    image_alt: product.imageAlt.trim(),
    image_alt_de: nullableTrim(product.imageAltDe),
    is_new: product.isNew,
    published: true,
  };

  const query = product.id
    ? client
        .from("products")
        .update(payload)
        .eq("id", product.id)
        .select(PRODUCT_SELECT)
        .single()
    : client
        .from("products")
        .insert(payload)
        .select(PRODUCT_SELECT)
        .single();

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data as ProductRow;
}

export async function deleteAdminProduct(productId: string) {
  const client = requireSupabaseClient();
  const { error } = await client.from("products").delete().eq("id", productId);

  if (error) {
    throw error;
  }
}

export async function uploadProductImage(productId: string, file: File): Promise<string> {
  await ensureAvifFile(file);

  const client = requireSupabaseClient();
  const filePath = `${productId}/main-${Date.now()}.avif`;
  const { error } = await client.storage.from(PRODUCT_IMAGES_BUCKET).upload(filePath, file, {
    cacheControl: "3600",
    contentType: "image/avif",
  });

  if (error) {
    throw error;
  }

  return filePath;
}

export async function listAdminCollections(): Promise<CollectionRow[]> {
  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("collections")
    .select(COLLECTION_SELECT)
    .order("updated_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []) as CollectionRow[];
}

export async function listAdminCollectionAssignments(): Promise<CollectionProductRow[]> {
  const client = requireSupabaseClient();
  const { data, error } = await client
    .from("collection_products")
    .select("collection_id,product_id,position")
    .order("position", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []) as CollectionProductRow[];
}

export async function upsertAdminCollection(collection: CatalogCollectionForm): Promise<CollectionRow> {
  const client = requireSupabaseClient();
  const parsedCount = Number.parseInt(collection.productCountOverride, 10);
  const payload = {
    title: collection.title.trim(),
    title_de: nullableTrim(collection.titleDe),
    slug: collection.slug.trim(),
    category: collection.category,
    eyebrow: collection.eyebrow.trim(),
    eyebrow_de: nullableTrim(collection.eyebrowDe),
    product_count_override: Number.isNaN(parsedCount) ? null : parsedCount,
    icon_image_path: collection.iconImagePath ?? null,
    icon_image_alt: collection.iconImageAlt.trim(),
    icon_image_alt_de: nullableTrim(collection.iconImageAltDe),
    background_svg: collection.backgroundSvg.trim(),
    published: true,
  };

  const query = collection.id
    ? client
        .from("collections")
        .update(payload)
        .eq("id", collection.id)
        .select(COLLECTION_SELECT)
        .single()
    : client
        .from("collections")
        .insert(payload)
        .select(COLLECTION_SELECT)
        .single();

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data as CollectionRow;
}

export async function replaceCollectionAssignments(collectionId: string, productIds: string[]) {
  const client = requireSupabaseClient();
  const { error: deleteError } = await client.from("collection_products").delete().eq("collection_id", collectionId);

  if (deleteError) {
    throw deleteError;
  }

  if (productIds.length === 0) {
    return;
  }

  const payload = productIds.map((productId, index) => ({
    collection_id: collectionId,
    product_id: productId,
    position: index,
  }));

  const { error: insertError } = await client.from("collection_products").insert(payload);

  if (insertError) {
    throw insertError;
  }
}

export async function deleteAdminCollection(collectionId: string) {
  const client = requireSupabaseClient();
  const { error } = await client.from("collections").delete().eq("id", collectionId);

  if (error) {
    throw error;
  }
}

export async function uploadCollectionIcon(collectionId: string, file: File): Promise<string> {
  await ensureAvifFile(file);

  const client = requireSupabaseClient();
  const filePath = `${collectionId}/icon-${Date.now()}.avif`;
  const { error } = await client.storage.from(COLLECTION_IMAGES_BUCKET).upload(filePath, file, {
    cacheControl: "3600",
    contentType: "image/avif",
  });

  if (error) {
    throw error;
  }

  return filePath;
}
