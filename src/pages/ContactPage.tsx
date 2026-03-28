import { contactMethods } from "../data/siteContent";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.2-1.5 1.5-1.5H16V5.1c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H8.8v3h2.3v7h2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M18.9 4H21l-4.6 5.3L21.8 20h-4.2l-3.3-6.3L8.8 20H6.7l4.9-5.6L2.2 4h4.3l3 5.9L14.6 4h4.3Zm-1.5 14.5h1.2L8 5.4H6.7l10.7 13.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21.6 8.2a2.9 2.9 0 0 0-2-2C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .4 3.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.4-3.8ZM10 15.4V8.6l6 3.4-6 3.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.7 4.3a1 1 0 0 0-1-.1L3.5 10.5a1 1 0 0 0 .1 1.9l4.2 1.3 1.6 5a1 1 0 0 0 1.7.4l2.4-2.5 4.7 3.5a1 1 0 0 0 1.6-.6l2.1-14.2a1 1 0 0 0-.4-1Zm-9.8 12.1-.8-2.8 6.9-5.9-6 6.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  { id: "social-facebook", label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { id: "social-x", label: "X", href: "#", icon: <XIcon /> },
  { id: "social-youtube", label: "YouTube", href: "#", icon: <YouTubeIcon /> },
  { id: "social-telegram", label: "Telegram", href: "#", icon: <TelegramIcon /> },
];

const contactBlocks = [
  {
    id: "address",
    heading: "🗺 ADDRESS",
    value: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  },
  {
    id: "email",
    heading: "💌 EMAIL",
    value: contactMethods[0]?.value ?? "hello@hema-office.example",
  },
  {
    id: "phone",
    heading: "☎ PHONE",
    value: contactMethods[1]?.value ?? "+44 (0)20 5555 0148",
  },
];

export function ContactPage() {
  return (
    <section className="page-section contact-page">
      <div className="container contact-page__container">
        <div className="contact-page__layout">
          <div className="contact-page__primary">
            <h1 className="contact-page__title">Contact</h1>

            <div className="contact-page__stack">
              {contactBlocks.map((block) => (
                <article key={block.id} className="contact-page__block">
                  <p className="contact-page__label">{block.heading}</p>
                  <p className="contact-page__value">{block.value}</p>
                </article>
              ))}

              <div className="contact-page__block">
                <p className="contact-page__label">🌏 SOCIALS</p>
                <nav className="contact-page__socials" aria-label="Social links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      className="contact-page__social-link"
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <hr className="contact-page__divider" />
      </div>
    </section>
  );
}
