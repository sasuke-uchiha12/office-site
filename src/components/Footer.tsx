import { NavLink } from "react-router-dom";
import { useLocalizedSiteContent } from "../i18n/content";
import { useTranslation } from "../i18n/language";
import { BrandLogo } from "./BrandLogo";

const socialLinks = [
  { label: "Facebook", href: "#", icon: "/_next/static/media/facebook.06da626e.svg" },
  { label: "Youtube", href: "#", icon: "/_next/static/media/youtube.9ed9bf57.svg" },
  { label: "Telegram", href: "#", icon: "/_next/static/media/telegram.e9cee8d8.svg" },
  { label: "Twitter", href: "#", icon: "/_next/static/media/twitter.6850a451.svg" },
];

export function Footer() {
  const { navigation } = useLocalizedSiteContent();
  const { copy } = useTranslation();
  const navLabel = (to: string) => navigation.find((item) => item.to === to)?.label ?? to;
  const footerColumns = [
    {
      title: copy.footer.gettingStarted,
      links: [
        { label: navLabel("/"), to: "/" },
        { label: navLabel("/house-clearance"), to: "/house-clearance" },
        { label: navLabel("/shop"), to: "/shop" },
      ],
    },
    {
      title: copy.footer.explore,
      links: [
        { label: navLabel("/about"), to: "/about" },
        { label: navLabel("/contact"), to: "/contact" },
        { label: copy.footer.fastFacts, to: "/#fast-facts" },
      ],
    },
    {
      title: copy.footer.resources,
      links: [
        { label: copy.footer.pageFlow, to: "/about" },
        { label: copy.footer.visualSystem, to: "/shop" },
        { label: copy.footer.serviceJourney, to: "/house-clearance" },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__card">
          <div className="site-footer__layout">
            <div className="site-footer__brand">
              <BrandLogo />
              <p className="site-footer__copy">{copy.footer.copy}</p>

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
            <nav className="site-footer__bottom-links" aria-label={copy.common.footerNavigation}>
              {navigation.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <p className="m-0 text-sm text-neutral-500">{copy.footer.bottomCopy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
