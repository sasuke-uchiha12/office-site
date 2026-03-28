import type { FactItem } from "../data/siteContent";

type FastFactsProps = {
  facts: FactItem[];
};

export function FastFacts({ facts }: FastFactsProps) {
  return (
    <div className="facts-grid">
      {facts.map((fact) => (
        <article key={fact.id} className="fact-card">
          <div className="fact-card__content">
            <span className="section-header__eyebrow">{fact.label}</span>
            <p className="fact-card__value">{fact.value}</p>
            <p className="fact-card__description">{fact.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
