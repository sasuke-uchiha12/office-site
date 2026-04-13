import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { fetchPublicCollectionBySlug, fetchPublicProductsForCollection } from "../lib/catalog/public";
import type { CollectionCardView, ProductCardView } from "../lib/catalog/types";
import { NotFoundPage } from "./NotFoundPage";

const PRODUCTS_PER_PAGE = 4;

export function CollectionListingPage() {
  const { slug = "" } = useParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [collection, setCollection] = useState<CollectionCardView | null>(null);
  const [listingProducts, setListingProducts] = useState<ProductCardView[]>([]);

  useEffect(() => {
    setPage(1);
    setLoading(true);
    setError(null);

    let isActive = true;

    void Promise.all([fetchPublicCollectionBySlug(slug), fetchPublicProductsForCollection(slug)])
      .then(([nextCollection, nextProducts]) => {
        if (!isActive) {
          return;
        }

        setCollection(nextCollection);
        setListingProducts(nextProducts);
      })
      .catch((caughtError) => {
        if (!isActive) {
          return;
        }

        setError(caughtError instanceof Error ? caughtError.message : "Unable to load collection.");
      })
      .finally(() => {
        if (isActive) {
          setLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [slug]);

  if (!loading && !error && !collection) {
    return <NotFoundPage />;
  }

  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <p className="shop-state">Loading collection...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page-section">
        <div className="container">
          <p className="shop-state shop-state--error">{error}</p>
        </div>
      </section>
    );
  }

  const resolvedCollection = collection!;

  const pageCount = Math.ceil(listingProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = listingProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <section className="page-section">
      <div className="container">
        <div className="collection-listing__intro">
          <h1 className="collection-listing__title">{resolvedCollection.title}</h1>
          <p className="collection-listing__body">
            A focused {resolvedCollection.title.toLowerCase()} edit using the same mirrored product language, simplified so the page stays calm and easy to scan.
          </p>
        </div>

        <div className="collection-listing__divider" />

        <div className="product-grid collection-listing__grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {listingProducts.length === 0 ? <p className="shop-state">No products are assigned to this collection yet.</p> : null}

        {pageCount > 1 ? (
          <nav className="pagination" aria-label="Collection pages">
            <button
              className="pagination__button"
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <div className="pagination__pages">
              {Array.from({ length: pageCount }, (_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    key={pageNumber}
                    className={`pagination__page${pageNumber === page ? " is-active" : ""}`}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            <button
              className="pagination__button"
              type="button"
              onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
              disabled={page === pageCount}
            >
              Next
            </button>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
