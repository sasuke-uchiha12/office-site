import { NavLink } from "react-router-dom";
import { navigation } from "../data/siteContent";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="mobile-menu" onClick={onClose}>
      <div className="mobile-menu__panel" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Menu</span>
          <button type="button" className="mobile-menu-button" onClick={onClose} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6L18 18" strokeLinecap="round" />
              <path d="M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mobile-menu__links">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `mobile-menu__link${isActive ? " is-active" : ""}`}
              onClick={onClose}
            >
              <div className="font-medium">{item.label}</div>
              <div className="mt-1 text-sm opacity-80">{item.description}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
