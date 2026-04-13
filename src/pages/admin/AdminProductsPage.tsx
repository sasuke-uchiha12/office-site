import { type FormEvent, useEffect, useMemo, useState } from "react";
import {
  deleteAdminProduct,
  listAdminProducts,
  uploadProductImage,
  upsertAdminProduct,
} from "../../lib/catalog/admin";
import { hasSupabaseConfig, supabase } from "../../lib/supabase/client";
import type { CatalogProductForm } from "../../lib/catalog/types";
import { PRODUCT_IMAGES_BUCKET } from "../../lib/catalog/public";
import { slugify } from "../../utils/slugify";

const EMPTY_PRODUCT_FORM: CatalogProductForm = {
  title: "",
  subtitle: "",
  slug: "",
  imageAlt: "",
  imagePath: null,
  isNew: false,
};

type AdminProduct = Awaited<ReturnType<typeof listAdminProducts>>[number];

function publicProductImage(path: string | null | undefined): string {
  if (!path) {
    return "";
  }

  if (path.startsWith("/") || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (!supabase) {
    return "";
  }

  return supabase.storage.from(PRODUCT_IMAGES_BUCKET).getPublicUrl(path).data.publicUrl;
}

export function AdminProductsPage() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<CatalogProductForm>(EMPTY_PRODUCT_FORM);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedId) ?? null,
    [products, selectedId],
  );

  const previewUrl = useMemo(() => {
    if (imageFile) {
      return URL.createObjectURL(imageFile);
    }

    return publicProductImage(form.imagePath);
  }, [form.imagePath, imageFile]);

  useEffect(() => {
    return () => {
      if (imageFile) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [imageFile, previewUrl]);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const rows = await listAdminProducts();
      setProducts(rows);
      if (!selectedId && rows[0]) {
        selectProduct(rows[0]);
      }
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasSupabaseConfig) {
      setLoading(false);
      return;
    }

    void loadProducts();
  }, []);

  const selectProduct = (product: AdminProduct) => {
    setSelectedId(product.id);
    setImageFile(null);
    setForm({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      slug: product.slug,
      imageAlt: product.image_alt ?? "",
      imagePath: product.image_path,
      isNew: product.is_new,
    });
  };

  const resetForm = () => {
    setSelectedId(null);
    setImageFile(null);
    setForm(EMPTY_PRODUCT_FORM);
    setSuccessMessage(null);
    setError(null);
  };

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const savedProduct = await upsertAdminProduct(form);
      let nextImagePath = savedProduct.image_path;

      if (imageFile) {
        nextImagePath = await uploadProductImage(savedProduct.id, imageFile);
        await upsertAdminProduct({
          id: savedProduct.id,
          title: savedProduct.title,
          subtitle: savedProduct.subtitle,
          slug: savedProduct.slug,
          imageAlt: form.imageAlt,
          imagePath: nextImagePath,
          isNew: savedProduct.is_new,
        });
      }

      await loadProducts();
      setSelectedId(savedProduct.id);
      setForm({
        id: savedProduct.id,
        title: savedProduct.title,
        subtitle: savedProduct.subtitle,
        slug: savedProduct.slug,
        imageAlt: form.imageAlt,
        imagePath: nextImagePath,
        isNew: savedProduct.is_new,
      });
      setImageFile(null);
      setSuccessMessage("Product saved.");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to save product.");
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
      await deleteAdminProduct(selectedId);
      await loadProducts();
      resetForm();
      setSuccessMessage("Product deleted.");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to delete product.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-workspace">
      <aside className="admin-list">
        <div className="admin-list__header">
          <h2>Products</h2>
          <button className="admin-button admin-button--ghost" type="button" onClick={resetForm}>
            New product
          </button>
        </div>
        {loading ? <p className="admin-note">Loading products...</p> : null}
        <div className="admin-list__items">
          {products.map((product) => (
            <button
              key={product.id}
              className={`admin-list__item${product.id === selectedId ? " is-active" : ""}`}
              type="button"
              onClick={() => selectProduct(product)}
            >
              <span>{product.title}</span>
              <small>{product.slug}</small>
            </button>
          ))}
          {!loading && products.length === 0 ? <p className="admin-note">No products yet.</p> : null}
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
              <span>Subtitle</span>
              <input type="text" value={form.subtitle} onChange={(event) => setForm((current) => ({ ...current, subtitle: event.target.value }))} required />
            </label>
          </div>

          <div className="admin-form__row">
            <label className="admin-field">
              <span>Slug</span>
              <input type="text" value={form.slug} onChange={(event) => setForm((current) => ({ ...current, slug: slugify(event.target.value) }))} required />
            </label>
            <label className="admin-field">
              <span>Image alt</span>
              <input type="text" value={form.imageAlt} onChange={(event) => setForm((current) => ({ ...current, imageAlt: event.target.value }))} required />
            </label>
          </div>

          <label className="admin-checkbox">
            <input type="checkbox" checked={form.isNew} onChange={(event) => setForm((current) => ({ ...current, isNew: event.target.checked }))} />
            <span>Show as “New in”</span>
          </label>

          <label className="admin-field">
            <span>Primary AVIF image</span>
            <input
              type="file"
              accept="image/avif,.avif"
              onChange={(event) => setImageFile(event.target.files?.[0] ?? null)}
            />
            <small>Only AVIF uploads are accepted.</small>
          </label>

          {previewUrl ? (
            <div className="admin-image-preview">
              <img src={previewUrl} alt={form.imageAlt || "Product preview"} />
            </div>
          ) : null}

          {error ? <p className="admin-error">{error}</p> : null}
          {successMessage ? <p className="admin-success">{successMessage}</p> : null}

          <div className="admin-actions">
            <button className="admin-button" type="submit" disabled={saving}>
              {saving ? "Saving..." : form.id ? "Save changes" : "Create product"}
            </button>
            {selectedProduct ? (
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
