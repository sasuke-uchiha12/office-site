type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "start" | "center";
};

export function SectionHeader({ eyebrow, title, body, align = "start" }: SectionHeaderProps) {
  return (
    <div className="section-header" style={align === "center" ? { justifyContent: "center", textAlign: "center" } : undefined}>
      <div>
        {eyebrow ? <span className="section-header__eyebrow">{eyebrow}</span> : null}
        <h2 className="section-header__title">{title}</h2>
        {body ? <p className="section-header__body">{body}</p> : null}
      </div>
    </div>
  );
}
