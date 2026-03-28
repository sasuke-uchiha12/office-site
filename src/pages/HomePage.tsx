import { EntryOptionCard } from "../components/EntryOptionCard";
import { FastFacts } from "../components/FastFacts";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { SectionHeader } from "../components/SectionHeader";
import { TestimonialSpotlight } from "../components/TestimonialSpotlight";
import { fastFacts, homeEntryOptions, homeFloatingAvatars, homeHeroSlides, homeTestimonials } from "../data/siteContent";

export function HomePage() {
  return (
    <>
      <PageHeroCarousel slides={homeHeroSlides} />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Choose your focus"
            title="Start with the path that matches the job at hand."
            body="The homepage stays simple on purpose: one route into House Clearance, one route into Shop, both presented with the same rounded surfaces and editorial pacing."
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
            title="🚀 Fast Facts"
            subtitle="We’re impartial and independent, and every day we create distinctive, world-class programmes and content"
          />
          <div className="section-divider" aria-hidden="true" />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <TestimonialSpotlight
            title="Good news from far away 🏅"
            subtitle="Let's see what people think of Ciseco"
            testimonials={homeTestimonials}
            floatingAvatars={homeFloatingAvatars}
          />
        </div>
      </section>
    </>
  );
}
