import type { CollectionCardItem } from "../data/siteContent";

type CollectionGridProps = {
  items: CollectionCardItem[];
  className?: string;
};

export function CollectionGrid({ items, className }: CollectionGridProps) {
  return (
    <div className={className ?? "collection-grid"}>
      {items.map((item) => (
        <article key={item.id} className="collection-card-app">
          <div className="collection-card-app__content">
            <div className="collection-card-app__media">
              <img src={item.image} alt={item.imageAlt} />
            </div>
            <span className="section-header__eyebrow mt-4">{item.eyebrow}</span>
            <h3 className="collection-card-app__title mt-2 text-2xl">{item.title}</h3>
            <p className="collection-card-app__copy">{item.copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
