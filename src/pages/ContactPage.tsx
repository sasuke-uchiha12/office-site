import { ContactSection } from "../components/ContactSection";
import { SectionHeader } from "../components/SectionHeader";
import { contactMethods } from "../data/siteContent";

export function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Reach the team without a maze of extra steps."
          body="This page keeps the interaction simple: clear contact methods, a styled enquiry form, and copy that fits the current static scope of the React migration."
        />
        <ContactSection
          title="Tell us whether you are planning a clearance, browsing the shop, or trying to shape the site itself."
          copy="The contact form is intentionally non-submitting in this first implementation. It is here to complete the route structure, validate the styling system, and leave a clean place for future backend wiring."
          methods={contactMethods}
        />
      </div>
    </section>
  );
}
