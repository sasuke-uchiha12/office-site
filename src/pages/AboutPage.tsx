import { useTranslation } from "../i18n/language";

export function AboutPage() {
  const { copy } = useTranslation();
  const aboutGalleryImages = [
    "/_next/p1-176ca.jpg",
    "/_next/p2-1114e.jpg",
    "/_next/p3-226b0.jpg",
    "/_next/p4-10151.jpg",
    "/_next/p5-12278.jpg",
  ];

  return (
    <section className="page-section about-page">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero__glow" aria-hidden="true">
            <span className="about-hero__glow-ball about-hero__glow-ball--rose" />
            <span className="about-hero__glow-ball about-hero__glow-ball--teal" />
          </div>
          <div className="about-hero__copy">
            <h1 className="about-hero__title">{copy.about.title}</h1>
            <p className="about-hero__body">{copy.about.body}</p>
          </div>
          <div className="about-hero__media">
            <div className="about-hero__gallery" aria-hidden="true">
              {aboutGalleryImages.map((imageSrc, index) => (
                <div
                  key={imageSrc}
                  className={`about-hero__gallery-card about-hero__gallery-card--${index + 1}`}
                >
                  <img className="about-hero__gallery-image" src={imageSrc} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
