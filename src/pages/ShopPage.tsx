import { CollectionGrid } from "../components/CollectionGrid";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { shopCollections, shopHeroSlides, shopProducts } from "../data/siteContent";

export function ShopPage() {
  return (
    <>
      <PageHeroCarousel slides={shopHeroSlides} />

      <section id="new-arrivals" className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="New arrivals"
            title="A featured product set that stays deliberately compact."
            body="The source mirror had a broad catalogue surface. This migration keeps the card language but narrows the product set to a believable, fully supported range."
          />
          <div className="product-grid">
            {shopProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="explore" className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Start exploring"
            title="Collections that feel editorial first and cluttered second."
            body="These cards reuse the same radius, surface, and spacing logic from the rest of the migration while echoing the storefront references."
          />
          <CollectionGrid items={shopCollections} />
        </div>
      </section>
    </>
  );
}
