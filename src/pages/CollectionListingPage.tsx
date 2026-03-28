import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { shopCollections, shopProducts } from "../data/siteContent";
import { slugify } from "../utils/slugify";
import { NotFoundPage } from "./NotFoundPage";

const PRODUCTS_PER_PAGE = 3;
const TOTAL_PRODUCTS = 12;

export function CollectionListingPage() {
  const { slug = "" } = useParams();
  const [page, setPage] = useState(1);

  const collection = useMemo(
    () => shopCollections.find((item) => slugify(item.title) === slug),
    [slug],
  );

  const listingProducts = useMemo(
    () =>
      Array.from({ length: TOTAL_PRODUCTS }, (_, index) => {
        const product = shopProducts[index % Math.min(shopProducts.length, 3)];

        return {
          ...product,
          id: `${slug}-${product.id}-${index}`,
        };
      }),
    [slug],
  );

  useEffect(() => {
    setPage(1);
  }, [slug]);

  if (!collection) {
    return <NotFoundPage />;
  }

  const pageCount = Math.ceil(listingProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = listingProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <section className="page-section">
      <div className="container">
        <div className="collection-listing__intro">
          <h1 className="collection-listing__title">{collection.title}</h1>
          <p className="collection-listing__body">
            A focused {collection.title.toLowerCase()} edit using the same mirrored product language, simplified so the page stays calm and easy to scan.
          </p>
        </div>

        <div className="collection-listing__divider" />

        <div className="product-grid collection-listing__grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

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
      </div>
    </section>
  );
}
