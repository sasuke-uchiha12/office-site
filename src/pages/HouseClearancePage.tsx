import { ContentSection } from "../components/ContentSection";
import { HowItWorks } from "../components/HowItWorks";
import { MiniFaqAccordion } from "../components/MiniFaqAccordion";
import { PageHeroCarousel } from "../components/PageHeroCarousel";
import { SectionHeader } from "../components/SectionHeader";
import { useLocalizedSiteContent } from "../i18n/content";
import { useTranslation } from "../i18n/language";

export function HouseClearancePage() {
  const { houseClearanceFaqs, houseClearanceHeroSlides, houseClearanceSteps } = useLocalizedSiteContent();
  const { copy } = useTranslation();

  return (
    <>
      <PageHeroCarousel slides={houseClearanceHeroSlides} />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow={copy.house.processEyebrow}
            title={copy.house.processTitle}
            mutedSuffix={copy.house.processMutedSuffix}
            body={copy.house.processBody}
          />
          <HowItWorks steps={houseClearanceSteps} />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <ContentSection
            eyebrow={copy.house.supportEyebrow}
            title={copy.house.supportTitle}
            copy={copy.house.supportCopy}
            image="/_next/pexels-photo-6802060b51b.jpg"
            imageAlt={copy.house.supportImageAlt}
            primaryCta={{ label: copy.house.contactCta, to: "/contact" }}
            secondaryCta={{ label: copy.house.storyCta, to: "/about" }}
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow={copy.house.faqEyebrow}
            title={copy.house.faqTitle}
            body={copy.house.faqBody}
          />
          <MiniFaqAccordion items={houseClearanceFaqs} />
        </div>
      </section>
    </>
  );
}
