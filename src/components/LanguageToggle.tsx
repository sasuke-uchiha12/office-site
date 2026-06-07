import { languages, useTranslation } from "../i18n/language";

export function LanguageToggle() {
  const { copy, language, setLanguage } = useTranslation();

  return (
    <div className="language-toggle" role="group" aria-label={copy.common.languageToggle}>
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={`language-toggle__button${item.code === language ? " is-active" : ""}`}
          aria-pressed={item.code === language}
          onClick={() => setLanguage(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
