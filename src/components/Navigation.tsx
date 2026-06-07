import { NavLink } from "react-router-dom";
import { useLocalizedSiteContent } from "../i18n/content";
import { useTranslation } from "../i18n/language";

export function Navigation() {
  const { navigation } = useLocalizedSiteContent();
  const { copy } = useTranslation();

  return (
    <nav className="site-nav" aria-label={copy.common.primaryNavigation}>
      {navigation.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
