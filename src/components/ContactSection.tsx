import type { ContactMethod } from "../data/siteContent";

type ContactSectionProps = {
  title: string;
  copy: string;
  methods: ContactMethod[];
};

export function ContactSection({ title, copy, methods }: ContactSectionProps) {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div>
          <span className="content-split__eyebrow">Contact</span>
          <h2 className="contact-section__title">{title}</h2>
          <p className="contact-section__copy">{copy}</p>
          <div className="contact-list">
            {methods.map((method) => (
              <article key={method.id} className="contact-card">
                <div className="contact-card__content">
                  <span className="section-header__eyebrow">{method.label}</span>
                  <p className="m-0 text-lg font-semibold">{method.value}</p>
                  <p className="mt-2 mb-0 text-neutral-600">{method.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <form
          id="contact-form"
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="contact-form__grid">
            <label className="field-shell">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label className="field-shell">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
          </div>

          <div className="contact-form__grid">
            <label className="field-shell">
              <span>Subject</span>
              <input type="text" name="subject" placeholder="House clearance, shop, or general enquiry" />
            </label>
            <label className="field-shell">
              <span>Preferred timing</span>
              <input type="text" name="timing" placeholder="This week, next month, flexible..." />
            </label>
          </div>

          <label className="field-shell">
            <span>Message</span>
            <textarea name="message" placeholder="Tell us what you are trying to arrange." />
          </label>

          <div className="flex items-center justify-between gap-4">
            <p className="m-0 text-sm text-neutral-500">This form is intentionally static in v1 and does not submit to a backend.</p>
            <button type="submit" className="action-button">
              Send enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
