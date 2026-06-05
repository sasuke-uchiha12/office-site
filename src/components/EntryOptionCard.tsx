import { Link } from "react-router-dom";
import type { EntryOption } from "../data/siteContent";
import { useTranslation } from "../i18n/language";

type EntryOptionCardProps = {
  option: EntryOption;
};

export function EntryOptionCard({ option }: EntryOptionCardProps) {
  const { copy } = useTranslation();

  return (
    <article className="entry-card">
      <div className="entry-card__content">
        <span className="entry-card__eyebrow">{option.eyebrow}</span>
        <h3 className="entry-card__title">{option.title}</h3>
        <p className="entry-card__copy">{option.copy}</p>
        <div className="hero-card__actions">
          <Link to={option.to} className="action-button action-button--ghost">
            {copy.common.explore}
          </Link>
        </div>
        <div className="entry-card__media">
          <img src={option.image} alt={option.imageAlt} />
        </div>
      </div>
    </article>
  );
}
