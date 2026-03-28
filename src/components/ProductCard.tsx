import type { ProductSummary } from "../data/siteContent";

type ProductCardProps = {
  product: ProductSummary;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card-app">
      <div className="product-card-app__content">
        <div className="product-card-app__media">
          <img src={product.image} alt={product.imageAlt} />
        </div>
        <h3 className="product-card-app__title mt-4 text-2xl">{product.title}</h3>
        <p className="story-card__copy">{product.description}</p>
        <span className="product-card-app__price">{product.price}</span>
      </div>
    </article>
  );
}
