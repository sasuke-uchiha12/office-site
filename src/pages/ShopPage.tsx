import { useEffect, useRef, useState } from "react";
import { ExploreCollections } from "../components/ExploreCollections";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { ProductCard } from "../components/ProductCard";
import { useLocalizedSiteContent } from "../i18n/content";
import { useTranslation } from "../i18n/language";
import { fetchPublicCollections, fetchPublicShopProducts } from "../lib/catalog/public";
import type { CollectionCardView, ProductCardView } from "../lib/catalog/types";

export function ShopPage() {
  const arrivalsViewportRef = useRef<HTMLDivElement | null>(null);
  const { shopExploreTabs, shopHeroSlides } = useLocalizedSiteContent();
  const { copy, language } = useTranslation();
  const [products, setProducts] = useState<ProductCardView[]>([]);
  const [collections, setCollections] = useState<CollectionCardView[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCollections, setLoadingCollections] = useState(true);
  const [productsError, setProductsError] = useState<string | null>(null);
  const [collectionsError, setCollectionsError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    setLoadingProducts(true);
    setLoadingCollections(true);
    setProductsError(null);
    setCollectionsError(null);

    void fetchPublicShopProducts(12, language)
      .then((rows) => {
        if (!isActive) {
          return;
        }

        setProducts(rows);
      })
      .catch(() => {
        if (!isActive) {
          return;
        }

        setProductsError(copy.shop.arrivalsError);
      })
      .finally(() => {
        if (isActive) {
          setLoadingProducts(false);
        }
      });

    void fetchPublicCollections(language)
      .then((rows) => {
        if (!isActive) {
          return;
        }

        setCollections(rows);
      })
      .catch(() => {
        if (!isActive) {
          return;
        }

        setCollectionsError(copy.shop.collectionsError);
      })
      .finally(() => {
        if (isActive) {
          setLoadingCollections(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [copy.shop.arrivalsError, copy.shop.collectionsError, language]);

  const scrollArrivals = (direction: "prev" | "next") => {
    const viewport = arrivalsViewportRef.current;

    if (!viewport) {
      return;
    }

    const firstSlide = viewport.querySelector<HTMLElement>(".shop-arrivals__slide");
    const gap = 24;
    const distance = (firstSlide?.offsetWidth ?? viewport.clientWidth * 0.82) + gap;

    viewport.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <>
      <PageHeroCarousel slides={shopHeroSlides} />

      <section id="new-arrivals" className="page-section">
        <div className="container">
          <div className="shop-arrivals__header">
            <h2 className="shop-arrivals__title">
              {copy.shop.arrivalsTitle} <span>{copy.shop.arrivalsSuffix}</span>
            </h2>
            <div className="shop-arrivals__controls">
              <button className="shop-arrivals__control" type="button" aria-label={copy.shop.previousArrivals} onClick={() => scrollArrivals("prev")}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="shop-arrivals__control" type="button" aria-label={copy.shop.nextArrivals} onClick={() => scrollArrivals("next")}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="shop-arrivals__viewport" ref={arrivalsViewportRef}>
            <div className="shop-arrivals__track">
              {loadingProducts ? <p className="shop-state">{copy.shop.loadingArrivals}</p> : null}
              {productsError ? <p className="shop-state shop-state--error">{productsError}</p> : null}
              {!loadingProducts && !productsError && products.length === 0 ? <p className="shop-state">{copy.shop.emptyArrivals}</p> : null}
              {products.map((product) => (
                <div className="shop-arrivals__slide" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="section-divider shop-arrivals__divider" />
        </div>
      </section>

      <section id="explore" className="page-section">
        <div className="container">
          {loadingCollections ? <p className="shop-state">{copy.shop.loadingCollections}</p> : null}
          {collectionsError ? <p className="shop-state shop-state--error">{collectionsError}</p> : null}
          {!loadingCollections && !collectionsError ? (
            <ExploreCollections title={copy.shop.exploreTitle} tabs={shopExploreTabs} items={collections} />
          ) : null}
        </div>
      </section>
    </>
  );
}
