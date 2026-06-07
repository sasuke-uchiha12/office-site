import { BrandLogo } from "./BrandLogo";
import { LanguageToggle } from "./LanguageToggle";
import { Navigation } from "./Navigation";
import { useTranslation } from "../i18n/language";

type HeaderProps = {
  onOpenMenu: () => void;
};

export function Header({ onOpenMenu }: HeaderProps) {
  const { copy } = useTranslation();

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__row">
          <div className="flex items-center gap-4">
            <BrandLogo />
            <div className="hidden h-9 border-l border-neutral-200 md:block" />
            <Navigation />
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button type="button" className="mobile-menu-button" onClick={onOpenMenu} aria-label={copy.common.openMenu}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6H20" strokeLinecap="round" />
                <path d="M4 12H20" strokeLinecap="round" />
                <path d="M4 18H20" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
