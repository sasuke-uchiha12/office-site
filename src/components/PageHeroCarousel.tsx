import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { HeroSlide } from "../data/siteContent";

type PageHeroCarouselProps = {
  slides: HeroSlide[];
};

export function PageHeroCarousel({ slides }: PageHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];
  const toneClass =
    activeSlide.tone === "rose" ? "hero-card--rose" : activeSlide.tone === "sky" ? "hero-card--sky" : "";

  return (
    <section className="page-section page-section--tight">
      <div className="container">
        <div className="carousel-bar">
          <div className="carousel-status">
            <span>Slide {activeIndex + 1}</span>
            <span>/</span>
            <span>{slides.length}</span>
          </div>

          <div className="carousel-controls" aria-label="Carousel controls">
            <button
              type="button"
              className="carousel-control"
              onClick={() => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="carousel-control"
              onClick={() => setActiveIndex((current) => (current + 1) % slides.length)}
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`hero-card ${toneClass}`}>
          <div className="hero-card__accent" />
          <div className="hero-card__inner">
            <div className="hero-card__content">
              <span className="section-header__eyebrow">{activeSlide.eyebrow}</span>
              <h1 className="hero-card__title">{activeSlide.title}</h1>
              <p className="hero-card__copy">{activeSlide.copy}</p>
              <div className="hero-card__actions">
                <Link to={activeSlide.primaryCta.to} className="action-button">
                  {activeSlide.primaryCta.label}
                </Link>
                {activeSlide.secondaryCta ? (
                  <Link to={activeSlide.secondaryCta.to} className="action-button action-button--ghost">
                    {activeSlide.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="hero-card__media">
              <img src={activeSlide.image} alt={activeSlide.imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
