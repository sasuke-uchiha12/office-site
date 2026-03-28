import { NavLink } from "react-router-dom";
import { navigation } from "../data/siteContent";

export function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
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
