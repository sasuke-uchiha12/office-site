import { CollectionGrid } from "../components/CollectionGrid";
import { ContentSection } from "../components/ContentSection";
import { MiniFaqAccordion } from "../components/MiniFaqAccordion";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { SectionHeader } from "../components/SectionHeader";
import { houseClearanceFaqs, houseClearanceFilters, houseClearanceHeroSlides } from "../data/siteContent";

export function HouseClearancePage() {
  return (
    <>
      <PageHeroCarousel slides={houseClearanceHeroSlides} />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Filter and discover"
            title="Four parts, one consistent route."
            body="This section makes the service flow concrete without pretending there is live filtering behind it. The emphasis is on structure, reassurance, and a strong visual rhythm."
          />
          <CollectionGrid items={houseClearanceFilters} className="filter-grid" />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <ContentSection
            eyebrow="Supporting content"
            title="A stronger supporting layout for the practical questions that follow the first enquiry."
            copy="Borrowing from the mirrored promotional and collection references lets this page add depth without becoming visually disconnected. The split layout below is where reassurance, timing, and next-step explanation sit best."
            image="/_next/pexels-photo-6802060b51b.jpg"
            imageAlt="Supporting house clearance image"
            primaryCta={{ label: "Contact the team", to: "/contact" }}
            secondaryCta={{ label: "Read our story", to: "/about" }}
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Mini FAQs"
            title="Short answers for the questions that usually arrive first."
            body="The accordion interaction is rebuilt directly in React and stays intentionally lightweight."
          />
          <MiniFaqAccordion items={houseClearanceFaqs} />
        </div>
      </section>
    </>
  );
}
