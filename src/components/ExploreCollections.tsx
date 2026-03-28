import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { ExploreCollectionItem, ExploreTab } from "../data/siteContent";
import { slugify } from "../utils/slugify";

type ExploreCollectionsProps = {
  title: string;
  tabs: ExploreTab[];
  items: ExploreCollectionItem[];
};

function ExploreTabIcon({ icon }: { icon: ExploreTab["icon"] }) {
  switch (icon) {
    case "accessories":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21.08 8.58V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48 18.15C3.51 17.59 2.91 16.55 2.91 15.42V8.58C2.91 7.46 3.51 6.42 4.48 5.85L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.85C20.48 6.42 21.08 7.45 21.08 8.58Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11C13.287 11 14.33 9.957 14.33 8.67C14.33 7.383 13.287 6.34 12 6.34C10.713 6.34 9.67 7.383 9.67 8.67C9.67 9.957 10.713 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 16.66C16 14.86 14.21 13.4 12 13.4C9.79 13.4 8 14.86 8 16.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "footwear":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.82 18C4.42 18 3.82 16.65 3.82 15V9C3.82 7.35 4.42 6 6.82 6C9.22 6 9.82 7.35 9.82 9V15C9.82 16.65 9.22 18 6.82 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.82 12H14.18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "jewelry":
    case "beauty":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16.7 18.98H7.3C6.88 18.98 6.41 18.65 6.27 18.25L2.13 6.67C1.54 5.01 2.23 4.5 3.65 5.52L7.55 8.31C8.2 8.76 8.94 8.53 9.22 7.8L10.98 3.11C11.54 1.61 12.47 1.61 13.03 3.11L14.79 7.8C15.07 8.53 15.81 8.76 16.45 8.31L20.11 5.7C21.67 4.58 22.42 5.15 21.78 6.96L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 22H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 14H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function ExploreCollections({ title, tabs, items }: ExploreCollectionsProps) {
  const defaultTabId = tabs.find((tab) => tab.active)?.id ?? tabs[0]?.id ?? "";
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  const visibleItems = useMemo(() => items.filter((item) => item.category === activeTabId), [activeTabId, items]);

  return (
    <section className="shop-explore">
      <div className="shop-explore__panel" />
      <div className="shop-explore__inner">
        <h2 className="shop-explore__title">{title}</h2>
        <div className="shop-explore__tabs-wrap">
          <ul className="shop-explore__tabs">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`shop-explore__tab${tab.id === activeTabId ? " is-active" : ""}`}
                  type="button"
                  aria-pressed={tab.id === activeTabId}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <ExploreTabIcon icon={tab.icon} />
                  <span>{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="shop-explore__grid">
          {visibleItems.map((item) => (
            <article className="shop-explore-card" key={item.id}>
              <div className="shop-explore-card__bg">
                <img src={item.backgroundSvg} alt="" aria-hidden="true" />
              </div>
              <div className="shop-explore-card__content">
                <div className="shop-explore-card__top">
                  <div className="shop-explore-card__icon">
                    <img src={item.iconImage} alt={item.iconImageAlt} />
                  </div>
                  <svg className="shop-explore-card__arrow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="shop-explore-card__middle">
                  <p className="shop-explore-card__eyebrow">{item.eyebrow}</p>
                  <h3 className="shop-explore-card__title">{item.title}</h3>
                </div>
                <p className="shop-explore-card__count">{item.productCount}</p>
                <Link className="shop-explore-card__link" to={`/shop/collections/${slugify(item.title)}`} aria-label={`Explore ${item.title}`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
