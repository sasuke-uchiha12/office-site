import { Link } from "react-router-dom";
import { useTranslation } from "../i18n/language";

export function NotFoundPage() {
  const { copy } = useTranslation();

  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__card">
          <span className="not-found__eyebrow">{copy.notFound.eyebrow}</span>
          <h1 className="not-found__title mt-5 text-5xl">{copy.notFound.title}</h1>
          <p className="not-found__copy">{copy.notFound.copy}</p>
          <div className="hero-card__actions justify-center">
            <Link to="/" className="action-button">
              {copy.notFound.home}
            </Link>
            <Link to="/shop" className="action-button action-button--ghost">
              {copy.notFound.shop}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
