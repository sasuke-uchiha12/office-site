type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  mutedSuffix?: string;
  body?: string;
  align?: "start" | "center";
};

export function SectionHeader({ eyebrow, title, mutedSuffix, body, align = "start" }: SectionHeaderProps) {
  return (
    <div className="section-header" style={align === "center" ? { justifyContent: "center", textAlign: "center" } : undefined}>
      <div>
        {eyebrow ? <span className="section-header__eyebrow">{eyebrow}</span> : null}
        <h2 className="section-header__title">
          {title}
          {mutedSuffix ? <span className="section-header__title-muted"> {mutedSuffix}</span> : null}
        </h2>
        {body ? <p className="section-header__body">{body}</p> : null}
      </div>
    </div>
  );
}
