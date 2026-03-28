import { ContentSection } from "../components/ContentSection";
import { SectionHeader } from "../components/SectionHeader";
import { aboutValues } from "../data/siteContent";

export function AboutPage() {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="About"
            title="A calmer retail-and-service system rebuilt from a mirrored reference."
            body="The available source material was largely fashion-commerce oriented, so this page adapts that editorial tone into a story about reuse, clarity, and a more focused page flow."
          />
          <ContentSection
            eyebrow="Approach"
            title="Keep what already works, then make the route clearer."
            copy="That principle shapes the whole migration. The original CSS stays in place. Familiar product, collection, and promotional rhythms stay visible. What changes is the information architecture: the homepage foregrounds House Clearance and Shop, while About and Contact become more direct and easier to scan."
            image="/_next/photo-1535745122259-f1e187953c4c5e26.jpg"
            imageAlt="About page supporting image"
            primaryCta={{ label: "Visit the shop", to: "/shop" }}
            secondaryCta={{ label: "Contact us", to: "/contact" }}
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Values"
            title="Three defaults guide the rebuild."
            body="The source files did not include a dedicated About page, so these principles are derived from the migration brief and the strongest patterns already present in the mirrored references."
          />
          <div className="about-values">
            {aboutValues.map((value) => (
              <article key={value.id} className="value-card">
                <div className="value-card__content">
                  <span className="section-header__eyebrow">{value.label}</span>
                  <p className="fact-card__value">{value.value}</p>
                  <p className="fact-card__description">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
