import { useState } from "react";
import type { ProductSummary } from "../data/siteContent";

type ProductCardProps = {
  product: ProductSummary;
};

export function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(Boolean(product.liked));

  return (
    <article className="product-card-app">
      <div className="product-card-app__media-wrap">
        <div className="product-card-app__media">
          {product.isNew ? <span className="product-card-app__badge">New in</span> : null}
          <button
            className={`product-card-app__wish${liked ? " is-active" : ""}`}
            type="button"
            aria-label={liked ? "Remove saved item" : "Save item"}
            aria-pressed={liked}
            onClick={() => setLiked((value) => !value)}
          >
            <svg className="product-card-app__wish-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
                stroke="currentColor"
                fill={liked ? "currentColor" : "none"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img src={product.image} alt={product.imageAlt} />
        </div>
      </div>
      <div className="product-card-app__content">
        <h3 className="product-card-app__title">{product.title}</h3>
        <p className="product-card-app__subtitle">{product.subtitle}</p>
      </div>
    </article>
  );
}
