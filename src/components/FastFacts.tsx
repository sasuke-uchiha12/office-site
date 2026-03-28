import type { FactItem } from "../data/siteContent";

type FastFactsProps = {
  facts: FactItem[];
  title?: string;
  subtitle?: string;
};

export function FastFacts({
  facts,
  title = "Fast Facts",
  subtitle = "We’re impartial and independent, and every day we create distinctive, world-class programmes and content",
}: FastFactsProps) {
  return (
    <div className="fast-facts-block">
      <div className="fast-facts-block__intro">
        <h2 className="fast-facts-block__title">{title}</h2>
        <p className="fast-facts-block__subtitle">{subtitle}</p>
      </div>

      <div className="facts-grid facts-grid--feature">
        {facts.map((fact) => (
          <article key={fact.id} className="fact-card fact-card--feature">
            <div className="fact-card__content">
              <p className="fact-card__value">{fact.value}</p>
              <p className="fact-card__description">{fact.label}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
