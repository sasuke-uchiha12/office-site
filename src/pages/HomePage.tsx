import { EntryOptionCard } from "../components/EntryOptionCard";
import { FastFacts } from "../components/FastFacts";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { SectionHeader } from "../components/SectionHeader";
import { StoryCard } from "../components/StoryCard";
import { fastFacts, homeEntryOptions, homeHeroSlides, homeStories } from "../data/siteContent";

export function HomePage() {
  return (
    <>
      <PageHeroCarousel slides={homeHeroSlides} />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Two primary routes"
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

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Fast facts"
            title="Small signals that explain how the site is organised."
            body="These cards keep the migration honest about what exists today: a focused flow, a limited asset set, and a React rebuild that privileges clarity over unnecessary breadth."
          />
          <FastFacts facts={fastFacts} />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Good News From Far Away"
            title="Editorial references that keep the homepage from feeling purely transactional."
            body="The mirrored blog offered useful tone and card structure. Here it becomes a lighter supporting block rather than a separate route family."
          />
          <div className="story-grid">
            {homeStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
