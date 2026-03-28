import { NavLink } from "react-router-dom";
import { navigation } from "../data/siteContent";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__card">
          <div className="site-footer__row">
            <BrandLogo />
            <p className="m-0 max-w-xl text-sm text-neutral-600">
              A React migration of the mirrored Ciseco reference, restructured around House Clearance, Shop,
              About, and Contact flows while preserving the existing visual language.
            </p>
          </div>

          <div className="site-footer__row">
            <nav className="site-footer__nav" aria-label="Footer navigation">
              {navigation.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <p className="m-0 text-sm text-neutral-500">Built only with the assets already present in this workspace.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
