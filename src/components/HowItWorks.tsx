import type { HowItWorksStep } from "../data/siteContent";

type HowItWorksProps = {
  steps: HowItWorksStep[];
};

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <div className="how-it-works">
      <div className="how-it-works__grid">
        <img
          className="how-it-works__vector"
          src="/_next/static/media/VectorHIW.9ea5867b.svg"
          alt=""
          aria-hidden="true"
        />
        {steps.map((step) => (
          <article className="how-it-works__item" key={step.id}>
            <div className="how-it-works__image-wrap">
              <img className="how-it-works__image" src={step.image} alt={step.imageAlt} />
            </div>
            <div className="how-it-works__content">
              <span className={step.badgeClass}>{step.step}</span>
              <h3 className="how-it-works__title">{step.title}</h3>
              <p className="how-it-works__copy">{step.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
