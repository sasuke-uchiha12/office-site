import { NavLink } from "react-router-dom";
import { navigation } from "../data/siteContent";
import { BrandLogo } from "./BrandLogo";

const footerColumns = [
  {
    title: "Getting started",
    links: [
      { label: "Home", to: "/" },
      { label: "House Clearance", to: "/house-clearance" },
      { label: "Shop", to: "/shop" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Fast Facts", to: "/#fast-facts" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Page flow", to: "/about" },
      { label: "Visual system", to: "/shop" },
      { label: "Service journey", to: "/house-clearance" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: "/_next/static/media/facebook.06da626e.svg" },
  { label: "Youtube", href: "#", icon: "/_next/static/media/youtube.9ed9bf57.svg" },
  { label: "Telegram", href: "#", icon: "/_next/static/media/telegram.e9cee8d8.svg" },
  { label: "Twitter", href: "#", icon: "/_next/static/media/twitter.6850a451.svg" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__card">
          <div className="site-footer__layout">
            <div className="site-footer__brand">
              <BrandLogo />
              <p className="site-footer__copy">
                Thoughtful house clearance, curated finds, and a calmer browsing experience brought together in
                one clear, easy-to-use journey.
              </p>

              <div className="site-footer__socials">
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} className="site-footer__social" aria-label={item.label}>
                    <span className="site-footer__social-icon" aria-hidden="true">
                      <img src={item.icon} alt="" />
                    </span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="site-footer__columns">
              {footerColumns.map((column) => (
                <div key={column.title} className="site-footer__column">
                  <h3 className="site-footer__heading">{column.title}</h3>
                  <nav className="site-footer__nav" aria-label={column.title}>
                    {column.links.map((link) => (
                      <NavLink key={link.label} to={link.to} end={link.to === "/"}>
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>

          <div className="site-footer__bottom">
            <nav className="site-footer__bottom-links" aria-label="Footer navigation">
              {navigation.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <p className="m-0 text-sm text-neutral-500">Helping good pieces travel farther, with clarity at every step.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
