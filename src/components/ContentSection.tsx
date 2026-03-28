import { Link } from "react-router-dom";

type ContentSectionProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

export function ContentSection({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: ContentSectionProps) {
  return (
    <div className="content-split">
      <div>
        <span className="content-split__eyebrow">{eyebrow}</span>
        <h3 className="content-split__title">{title}</h3>
        <p className="content-split__copy">{copy}</p>
        {primaryCta || secondaryCta ? (
          <div className="content-split__actions">
            {primaryCta ? (
              <Link to={primaryCta.to} className="action-button">
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link to={secondaryCta.to} className="action-button action-button--ghost">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="content-split__media">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}
