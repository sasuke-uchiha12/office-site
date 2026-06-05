import type { FactItem } from "../data/siteContent";
import { useTranslation } from "../i18n/language";

type FastFactsProps = {
  facts: FactItem[];
  title?: string;
  subtitle?: string;
};

export function FastFacts({ facts, title, subtitle }: FastFactsProps) {
  const { copy } = useTranslation();
  const resolvedTitle = title ?? copy.home.factsTitle;
  const resolvedSubtitle = subtitle ?? copy.home.factsSubtitle;

  return (
    <div className="fast-facts-block">
      <div className="fast-facts-block__intro">
        <h2 className="fast-facts-block__title">{resolvedTitle}</h2>
        <p className="fast-facts-block__subtitle">{resolvedSubtitle}</p>
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
