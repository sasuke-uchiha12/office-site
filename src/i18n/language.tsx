import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "de";

const LANGUAGE_STORAGE_KEY = "site-language";

export const languages: Array<{ code: Language; label: string }> = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export const uiCopy = {
  en: {
    common: {
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primaryNavigation: "Primary navigation",
      footerNavigation: "Footer navigation",
      languageToggle: "Language",
      explore: "Explore",
      exploreCollection: "Explore collection",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      ratingLabel: "5 star rating",
      testimonialCarousel: "Testimonial carousel",
      showTestimonial: "Show testimonial",
    },
    product: {
      newIn: "New in",
      save: "Save item",
      remove: "Remove saved item",
    },
    home: {
      focusEyebrow: "Choose your focus",
      focusTitle: "Start with the service that fits your need.",
      focusBody:
        "Whether you need a complete house clearance or want to browse reusable items, choose the path that works best for you. We keep both services simple, clear, and easy to access.",
      factsTitle: "What You Can Expect",
      factsSubtitle:
        "From inspection to removal, we focus on reliable service, fair pricing, and careful handling. Each clearance is completed with proper sorting, responsible disposal, and a tidy finish.",
      testimonialTitle: "Trusted by homes near and far 🏅",
      testimonialSubtitle: "See what our customers say about our house clearance and shop service.",
    },
    house: {
      processEyebrow: "Filter and discover",
      processTitle: "Four parts.",
      processMutedSuffix: "One consistent route.",
      processBody:
        "A clearer house-clearance process starts with one visible sequence: review the property, sort what matters, plan collection, and move suitable pieces into the right next home.",
      supportEyebrow: "We Clear What You No Longer Need",
      supportTitle: "Every clearance is different. We take a flexible approach and adapt the work to the situation.",
      supportCopy: `Our house clearance service can include:

• apartment clearances
• full house clearances
• cellar and attic clearances
• garage and storage room clearances
• furniture removal
• sorting of reusable items
• preparation for pickup or sale
• disposal support for unwanted items

We handle the work step by step, so the clearance becomes less stressful and more manageable.`,
      supportImageAlt: "Supporting house clearance image",
      contactCta: "Contact the team",
      storyCta: "Read our story",
      faqEyebrow: "Mini FAQs",
      faqTitle: "Short answers for the questions that usually arrive first.",
      faqBody: "Here are the most common questions customers ask before starting a house clearance.",
    },
    shop: {
      arrivalsTitle: "New Arrivals.",
      arrivalsSuffix: "Household items, furniture, and more",
      previousArrivals: "Show previous arrivals",
      nextArrivals: "Show next arrivals",
      loadingArrivals: "Loading new arrivals...",
      arrivalsError: "Unable to load new arrivals.",
      emptyArrivals: "No products available yet.",
      loadingCollections: "Loading collections...",
      collectionsError: "Unable to load collections.",
      exploreTitle: "Start exploring.",
    },
    collection: {
      loading: "Loading collection...",
      error: "Unable to load collection.",
      empty: "No products are assigned to this collection yet.",
      paginationLabel: "Collection pages",
      previous: "Previous",
      next: "Next",
      bodyPrefix: "A focused",
      bodySuffix:
        "edit using the same mirrored product language, simplified so the page stays calm and easy to scan.",
    },
    about: {
      title: "👋 About Us.",
      body:
        "At Piratenschatzkammer, we believe that every home, cellar, attic, garage, and storage room can hold forgotten treasures. What may no longer be needed by one person can still be useful, beautiful, or valuable to someone else. We are based in Dudweiler, Saarbrücken, and offer practical support for house clearances, apartment clearances, storage room clearances, and the sale of selected second-hand items. Our goal is simple: to make clearances easier, more organized, and more useful while giving well-preserved items a second chance.",
    },
    contact: {
      title: "Contact",
      addressHeading: "🗺 ADDRESS",
      addressValue: "Piratenschatzkammer Trier Straße 6 66125 Dudweiler, Saarbrücken Germany",
      emailHeading: "💌 EMAIL",
      phoneHeading: "☎ PHONE",
      socialsHeading: "🌏 SOCIALS",
      socialsLabel: "Social links",
    },
    footer: {
      copy:
        "Reliable house clearance, careful sorting, and selected second-hand finds brought together in one simple, easy-to-use service.",
      gettingStarted: "Getting started",
      explore: "Explore",
      resources: "Resources",
      fastFacts: "What can you expect",
      pageFlow: "Imprint",
      visualSystem: "Data Protection",
      // serviceJourney: "Service journey",
      bottomCopy: "Buying and selling of used goods.",
    },
    notFound: {
      eyebrow: "404 reference adapted",
      title: "That page does not live in the new route map.",
      copy:
        "The React migration keeps a smaller, clearer set of pages than the original mirror. Use the main routes below to get back on track.",
      home: "Back home",
      shop: "Visit the shop",
    },
  },
  de: {
    common: {
      menu: "Menü",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      primaryNavigation: "Hauptnavigation",
      footerNavigation: "Footer-Navigation",
      languageToggle: "Sprache",
      explore: "Entdecken",
      exploreCollection: "Kollektion entdecken",
      previousSlide: "Vorherige Folie",
      nextSlide: "Nächste Folie",
      ratingLabel: "5-Sterne-Bewertung",
      testimonialCarousel: "Testimonial-Karussell",
      showTestimonial: "Testimonial anzeigen",
    },
    product: {
      newIn: "Neu",
      save: "Artikel speichern",
      remove: "Gespeicherten Artikel entfernen",
    },
    home: {
      focusEyebrow: "Wählen Sie Ihren Fokus",
      focusTitle: "Starten Sie mit dem Weg, der zur Aufgabe passt.",
      focusBody:
        "Die Startseite bleibt bewusst einfach: ein Weg zur Haushaltsauflösung, ein Weg zum Shop, beide mit derselben ruhigen Gestaltung und klaren Führung.",
      factsTitle: "🚀 Kurz & Klar",
      factsSubtitle:
        "Wir arbeiten unabhängig und erstellen jeden Tag prägnante Inhalte, die Menschen informieren, unterstützen und unterhalten.",
      testimonialTitle: "Gute Nachrichten von weitem 🏅",
      testimonialSubtitle: "Was Menschen über Ciseco sagen",
    },
    house: {
      processEyebrow: "Filtern und entdecken",
      processTitle: "Vier Schritte.",
      processMutedSuffix: "Ein klarer Ablauf.",
      processBody:
        "Eine gute Haushaltsauflösung beginnt mit einer sichtbaren Reihenfolge: Immobilie prüfen, Wichtiges sortieren, Abholung planen und passende Stücke weitergeben.",
      supportEyebrow: "Unterstützende Inhalte",
      supportTitle: "Ein stärkerer Begleitbereich für praktische Fragen nach der ersten Anfrage.",
      supportCopy:
        "Die Gestaltung übernimmt ruhige Muster aus Aktion, Kollektion und Hinweisbereich, damit diese Seite Tiefe bekommt und dennoch klar mit dem restlichen Auftritt verbunden bleibt.",
      supportImageAlt: "Begleitbild zur Haushaltsauflösung",
      contactCta: "Team kontaktieren",
      storyCta: "Unsere Geschichte lesen",
      faqEyebrow: "Kurze FAQs",
      faqTitle: "Kurze Antworten auf die Fragen, die meist zuerst kommen.",
      faqBody: "Das Akkordeon ist direkt in React umgesetzt und bleibt bewusst leichtgewichtig.",
    },
    shop: {
      arrivalsTitle: "Neu eingetroffen.",
      arrivalsSuffix: "REY Rucksäcke & Taschen",
      previousArrivals: "Vorherige Neuheiten anzeigen",
      nextArrivals: "Nächste Neuheiten anzeigen",
      loadingArrivals: "Neuheiten werden geladen...",
      arrivalsError: "Neuheiten konnten nicht geladen werden.",
      emptyArrivals: "Noch keine Produkte verfügbar.",
      loadingCollections: "Kollektionen werden geladen...",
      collectionsError: "Kollektionen konnten nicht geladen werden.",
      exploreTitle: "Entdecken Sie weiter.",
    },
    collection: {
      loading: "Kollektion wird geladen...",
      error: "Kollektion konnte nicht geladen werden.",
      empty: "Dieser Kollektion sind noch keine Produkte zugeordnet.",
      paginationLabel: "Kollektionsseiten",
      previous: "Zurück",
      next: "Weiter",
      bodyPrefix: "Eine fokussierte Auswahl für",
      bodySuffix:
        "mit derselben ruhigen Produktsprache, vereinfacht für eine klare und angenehme Übersicht.",
    },
    about: {
      title: "👋 Über uns.",
      body:
        "Wir arbeiten unabhängig und erstellen jeden Tag eigenständige, hochwertige Inhalte, die Menschen auf der ganzen Welt informieren, bilden und unterhalten.",
    },
    contact: {
      title: "Kontakt",
      addressHeading: "🗺 ADRESSE",
      addressValue: "Photo booth tattooed prism, Portland Taiyaki Hoodie Neutra Typewriter",
      emailHeading: "💌 E-MAIL",
      phoneHeading: "☎ TELEFON",
      socialsHeading: "🌏 SOZIALE MEDIEN",
      socialsLabel: "Social-Media-Links",
    },
    footer: {
      copy:
        "Sorgfältige Haushaltsauflösung, kuratierte Fundstücke und ein ruhigeres Browsing-Erlebnis in einem klaren Ablauf.",
      gettingStarted: "Loslegen",
      explore: "Entdecken",
      resources: "Ressourcen",
      fastFacts: "Kurz & Klar",
      pageFlow: "Seitenfluss",
      visualSystem: "Visuelles System",
      serviceJourney: "Serviceablauf",
      bottomCopy: "Damit gute Stücke weiterreisen können, mit Klarheit in jedem Schritt.",
    },
    notFound: {
      eyebrow: "404 Referenz angepasst",
      title: "Diese Seite gehört nicht zur neuen Routenstruktur.",
      copy:
        "Der React-Umbau nutzt weniger, klarere Seiten als die ursprüngliche Vorlage. Nutzen Sie die Hauptrouten, um zurückzufinden.",
      home: "Zur Startseite",
      shop: "Zum Shop",
    },
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: (typeof uiCopy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === "de" ? "de" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: uiCopy[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useTranslation must be used inside LanguageProvider.");
  }

  return context;
}
