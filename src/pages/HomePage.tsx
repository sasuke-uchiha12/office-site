import { EntryOptionCard } from "../components/EntryOptionCard";
import { FastFacts } from "../components/FastFacts";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { SectionHeader } from "../components/SectionHeader";
import { TestimonialSpotlight } from "../components/TestimonialSpotlight";
import { useLocalizedSiteContent } from "../i18n/content";
import { useTranslation } from "../i18n/language";

export function HomePage() {
  const { fastFacts, homeEntryOptions, homeFloatingAvatars, homeHeroSlides, homeTestimonials } =
    useLocalizedSiteContent();
  const { copy } = useTranslation();

  return (
    <>
      <PageHeroCarousel slides={homeHeroSlides} />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow={copy.home.focusEyebrow}
            title={copy.home.focusTitle}
            body={copy.home.focusBody}
          />
          <div className="entry-grid">
            {homeEntryOptions.map((option) => (
              <EntryOptionCard key={option.id} option={option} />
            ))}
          </div>
        </div>
      </section>

      <section id="fast-facts" className="page-section">
        <div className="container">
          <FastFacts
            facts={fastFacts}
            title={copy.home.factsTitle}
            subtitle={copy.home.factsSubtitle}
          />
          <div className="section-divider" aria-hidden="true" />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <TestimonialSpotlight
            title={copy.home.testimonialTitle}
            subtitle={copy.home.testimonialSubtitle}
            testimonials={homeTestimonials}
            floatingAvatars={homeFloatingAvatars}
          />
        </div>
      </section>
    </>
  );
}
