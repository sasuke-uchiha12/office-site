import { Link } from "react-router-dom";
import type { EntryOption } from "../data/siteContent";

type EntryOptionCardProps = {
  option: EntryOption;
};

export function EntryOptionCard({ option }: EntryOptionCardProps) {
  return (
    <article className="entry-card">
      <div className="entry-card__content">
        <span className="entry-card__eyebrow">{option.eyebrow}</span>
        <h3 className="entry-card__title">{option.title}</h3>
        <p className="entry-card__copy">{option.copy}</p>
        <div className="hero-card__actions">
          <span className="action-button action-button--ghost">Explore route</span>
        </div>
        <div className="entry-card__media">
          <img src={option.image} alt={option.imageAlt} />
        </div>
      </div>
      <Link to={option.to} className="entry-card__link" aria-label={option.title} />
    </article>
  );
}
