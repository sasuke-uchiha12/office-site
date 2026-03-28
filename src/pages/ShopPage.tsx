import { useRef } from "react";
import { ExploreCollections } from "../components/ExploreCollections";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { ProductCard } from "../components/ProductCard";
import { shopCollections, shopExploreTabs, shopHeroSlides, shopProducts } from "../data/siteContent";

export function ShopPage() {
  const arrivalsViewportRef = useRef<HTMLDivElement | null>(null);

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
              New Arrivals. <span>REY backpacks &amp; bags</span>
            </h2>
            <div className="shop-arrivals__controls">
              <button className="shop-arrivals__control" type="button" aria-label="Show previous arrivals" onClick={() => scrollArrivals("prev")}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="shop-arrivals__control" type="button" aria-label="Show next arrivals" onClick={() => scrollArrivals("next")}>
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
              {shopProducts.map((product) => (
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
          <ExploreCollections title="Start exploring." tabs={shopExploreTabs} items={shopCollections} />
        </div>
      </section>
    </>
  );
}
