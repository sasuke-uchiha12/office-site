import { type FormEvent, useEffect, useMemo, useState } from "react";
import {
  deleteAdminCollection,
  listAdminCollectionAssignments,
  listAdminCollections,
  listAdminProducts,
  replaceCollectionAssignments,
  uploadCollectionIcon,
  upsertAdminCollection,
} from "../../lib/catalog/admin";
import type { CatalogCategory, CatalogCollectionForm } from "../../lib/catalog/types";
import { COLLECTION_IMAGES_BUCKET } from "../../lib/catalog/public";
import { hasSupabaseConfig, supabase } from "../../lib/supabase/client";
import { slugify } from "../../utils/slugify";

const CATEGORY_OPTIONS: CatalogCategory[] = ["accessories", "footwear", "jewelry", "beauty"];

const EMPTY_COLLECTION_FORM: CatalogCollectionForm = {
  title: "",
  slug: "",
  category: "accessories",
  eyebrow: "",
  productCountOverride: "",
  iconImageAlt: "",
  iconImagePath: null,
  backgroundSvg: "/_next/static/media/explore1.bf5d4097.svg",
};

type AdminCollection = Awaited<ReturnType<typeof listAdminCollections>>[number];
type AdminProduct = Awaited<ReturnType<typeof listAdminProducts>>[number];

function publicCollectionImage(path: string | null | undefined): string {
  if (!path) {
    return "";
  }

  if (path.startsWith("/") || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (!supabase) {
    return "";
  }

  return supabase.storage.from(COLLECTION_IMAGES_BUCKET).getPublicUrl(path).data.publicUrl;
}

export function AdminCollectionsPage() {
  const [collections, setCollections] = useState<AdminCollection[]>([]);
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [assignments, setAssignments] = useState<Record<string, string[]>>({});
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<CatalogCollectionForm>(EMPTY_COLLECTION_FORM);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const previewUrl = useMemo(() => {
    if (iconFile) {
      return URL.createObjectURL(iconFile);
    }

    return publicCollectionImage(form.iconImagePath);
  }, [form.iconImagePath, iconFile]);

  useEffect(() => {
    return () => {
      if (iconFile) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [iconFile, previewUrl]);

  const loadCollections = async () => {
    setLoading(true);
    setError(null);

    try {
      const [collectionRows, productRows, assignmentRows] = await Promise.all([
        listAdminCollections(),
        listAdminProducts(),
        listAdminCollectionAssignments(),
      ]);

      const assignmentMap = assignmentRows.reduce<Record<string, string[]>>((accumulator, row) => {
        const existing = accumulator[row.collection_id] ?? [];
        accumulator[row.collection_id] = [...existing, row.product_id];
        return accumulator;
      }, {});

      setCollections(collectionRows);
      setProducts(productRows);
      setAssignments(assignmentMap);

      if (!selectedId && collectionRows[0]) {
        selectCollection(collectionRows[0], assignmentMap);
      }
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to load collections.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasSupabaseConfig) {
      setLoading(false);
      return;
    }

    void loadCollections();
  }, []);

  const selectCollection = (collection: AdminCollection, assignmentMap = assignments) => {
    setSelectedId(collection.id);
    setIconFile(null);
    setSelectedProductIds(assignmentMap[collection.id] ?? []);
    setForm({
      id: collection.id,
      title: collection.title,
      slug: collection.slug,
      category: collection.category,
      eyebrow: collection.eyebrow,
      productCountOverride: collection.product_count_override?.toString() ?? "",
      iconImageAlt: collection.icon_image_alt ?? "",
      iconImagePath: collection.icon_image_path,
      backgroundSvg: collection.background_svg,
    });
  };

  const resetForm = () => {
    setSelectedId(null);
    setIconFile(null);
    setSelectedProductIds([]);
    setForm(EMPTY_COLLECTION_FORM);
    setSuccessMessage(null);
    setError(null);
  };

  const toggleAssignedProduct = (productId: string) => {
    setSelectedProductIds((current) =>
      current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId],
    );
  };

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const savedCollection = await upsertAdminCollection(form);
      let nextIconPath = savedCollection.icon_image_path;

      if (iconFile) {
        nextIconPath = await uploadCollectionIcon(savedCollection.id, iconFile);
        await upsertAdminCollection({
          id: savedCollection.id,
          title: savedCollection.title,
          slug: savedCollection.slug,
          category: savedCollection.category,
          eyebrow: savedCollection.eyebrow,
          productCountOverride: savedCollection.product_count_override?.toString() ?? "",
          iconImageAlt: form.iconImageAlt,
          iconImagePath: nextIconPath,
          backgroundSvg: savedCollection.background_svg,
        });
      }

      await replaceCollectionAssignments(savedCollection.id, selectedProductIds);
      await loadCollections();
      setSelectedId(savedCollection.id);
      setForm({
        id: savedCollection.id,
        title: savedCollection.title,
        slug: savedCollection.slug,
        category: savedCollection.category,
        eyebrow: savedCollection.eyebrow,
        productCountOverride: savedCollection.product_count_override?.toString() ?? "",
        iconImageAlt: form.iconImageAlt,
        iconImagePath: nextIconPath,
        backgroundSvg: savedCollection.background_svg,
      });
      setIconFile(null);
      setSuccessMessage("Collection saved.");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to save collection.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedId) {
      return;
    }

    setSaving(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await deleteAdminCollection(selectedId);
      await loadCollections();
      resetForm();
      setSuccessMessage("Collection deleted.");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to delete collection.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-workspace">
      <aside className="admin-list">
        <div className="admin-list__header">
          <h2>Collections</h2>
          <button className="admin-button admin-button--ghost" type="button" onClick={resetForm}>
            New collection
          </button>
        </div>
        {loading ? <p className="admin-note">Loading collections...</p> : null}
        <div className="admin-list__items">
          {collections.map((collection) => (
            <button
              key={collection.id}
              className={`admin-list__item${collection.id === selectedId ? " is-active" : ""}`}
              type="button"
              onClick={() => selectCollection(collection)}
            >
              <span>{collection.title}</span>
              <small>{collection.category}</small>
            </button>
          ))}
          {!loading && collections.length === 0 ? <p className="admin-note">No collections yet.</p> : null}
        </div>
      </aside>

      <div className="admin-panel">
        <form className="admin-form admin-form--stacked" onSubmit={handleSave}>
          <div className="admin-form__row">
            <label className="admin-field">
              <span>Title</span>
              <input
                type="text"
                value={form.title}
                onChange={(event) => {
                  const nextTitle = event.target.value;
                  setForm((current) => ({
                    ...current,
                    title: nextTitle,
                    slug: current.id ? current.slug : slugify(nextTitle),
                  }));
                }}
                required
              />
            </label>
            <label className="admin-field">
              <span>Slug</span>
              <input type="text" value={form.slug} onChange={(event) => setForm((current) => ({ ...current, slug: slugify(event.target.value) }))} required />
            </label>
          </div>

          <div className="admin-form__row">
            <label className="admin-field">
              <span>Category</span>
              <select value={form.category} onChange={(event) => setForm((current) => ({ ...current, category: event.target.value as CatalogCategory }))}>
                {CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="admin-field">
              <span>Eyebrow</span>
              <input type="text" value={form.eyebrow} onChange={(event) => setForm((current) => ({ ...current, eyebrow: event.target.value }))} required />
            </label>
          </div>

          <div className="admin-form__row">
            <label className="admin-field">
              <span>Product count override</span>
              <input type="number" value={form.productCountOverride} onChange={(event) => setForm((current) => ({ ...current, productCountOverride: event.target.value }))} />
            </label>
            <label className="admin-field">
              <span>Background SVG path</span>
              <input type="text" value={form.backgroundSvg} onChange={(event) => setForm((current) => ({ ...current, backgroundSvg: event.target.value }))} required />
            </label>
          </div>

          <div className="admin-form__row">
            <label className="admin-field">
              <span>Icon image alt</span>
              <input type="text" value={form.iconImageAlt} onChange={(event) => setForm((current) => ({ ...current, iconImageAlt: event.target.value }))} required />
            </label>
            <label className="admin-field">
              <span>Collection icon AVIF</span>
              <input type="file" accept="image/avif,.avif" onChange={(event) => setIconFile(event.target.files?.[0] ?? null)} />
              <small>Only AVIF uploads are accepted.</small>
            </label>
          </div>

          {previewUrl ? (
            <div className="admin-image-preview admin-image-preview--icon">
              <img src={previewUrl} alt={form.iconImageAlt || "Collection icon preview"} />
            </div>
          ) : null}

          <div className="admin-assignment">
            <h3>Assigned products</h3>
            <div className="admin-assignment__grid">
              {products.length === 0 ? (
                <p className="admin-note">Create at least one product first. It will appear here for collection assignment.</p>
              ) : (
                products.map((product) => (
                  <label className="admin-checkbox" key={product.id}>
                    <input
                      type="checkbox"
                      checked={selectedProductIds.includes(product.id)}
                      onChange={() => toggleAssignedProduct(product.id)}
                    />
                    <span>{product.title}</span>
                  </label>
                ))
              )}
            </div>
          </div>

          {error ? <p className="admin-error">{error}</p> : null}
          {successMessage ? <p className="admin-success">{successMessage}</p> : null}

          <div className="admin-actions">
            <button className="admin-button" type="submit" disabled={saving}>
              {saving ? "Saving..." : form.id ? "Save changes" : "Create collection"}
            </button>
            {selectedId ? (
              <button className="admin-button admin-button--danger" type="button" disabled={saving} onClick={handleDelete}>
                Delete
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
