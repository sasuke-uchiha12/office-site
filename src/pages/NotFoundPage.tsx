import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__card">
          <span className="not-found__eyebrow">404 reference adapted</span>
          <h1 className="not-found__title mt-5 text-5xl">That page does not live in the new route map.</h1>
          <p className="not-found__copy">
            The React migration keeps a smaller, clearer set of pages than the original mirror. Use the main routes below to get back on track.
          </p>
          <div className="hero-card__actions justify-center">
            <Link to="/" className="action-button">
              Back home
            </Link>
            <Link to="/shop" className="action-button action-button--ghost">
              Visit the shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
