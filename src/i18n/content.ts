import * as siteContent from "../data/siteContent";
import type {
  ContactMethod,
  EntryOption,
  ExploreCollectionItem,
  FactItem,
  FaqItem,
  FloatingAvatar,
  HeroSlide,
  HowItWorksStep,
  NavItem,
  ProductSummary,
  StoryCard,
  TestimonialItem,
} from "../data/siteContent";
import { type Language, useTranslation } from "./language";

type SiteContentShape = {
  navigation: NavItem[];
  homeHeroSlides: HeroSlide[];
  homeEntryOptions: EntryOption[];
  fastFacts: FactItem[];
  homeStories: StoryCard[];
  homeTestimonials: TestimonialItem[];
  homeFloatingAvatars: FloatingAvatar[];
  houseClearanceHeroSlides: HeroSlide[];
  houseClearanceSteps: HowItWorksStep[];
  houseClearanceFaqs: FaqItem[];
  shopHeroSlides: HeroSlide[];
  shopProducts: ProductSummary[];
  shopExploreTabs: typeof siteContent.shopExploreTabs;
  shopCollections: ExploreCollectionItem[];
  aboutValues: FactItem[];
  contactMethods: ContactMethod[];
};

function mergeById<T extends { id: string }>(items: T[], overrides: Record<string, Partial<T>>): T[] {
  return items.map((item) => ({ ...item, ...(overrides[item.id] ?? {}) }));
}

const deNavigation: Record<string, Partial<NavItem>> = {
  "/": { label: "Startseite", description: "Zur Hauptübersicht" },
  "/house-clearance": { label: "Haushaltsauflösung", description: "Serviceorientierter Ablauf" },
  "/shop": { label: "Shop", description: "Neuheiten und Kollektionen ansehen" },
  "/about": { label: "Über uns", description: "Marke und Prozess" },
  "/contact": { label: "Kontakt", description: "Kontakt mit dem Team aufnehmen" },
};

const deHeroSlides: Record<string, Partial<HeroSlide>> = {
  "home-1": {
    eyebrow: "ZUVERLÄSSIGE RÄUMUNGSHILFE",
    title: "Wir räumen, sortieren, entfernen und übergeben sauber",
    copy:
      "Von der ersten Besichtigung bis zur finalen Übergabe kümmern wir uns um jedes Detail, damit Ihre Immobilie ohne unnötigen Stress geräumt wird.",
    imageAlt: "Editoriale Hero-Collage zur Haushaltsauflösung",
    primaryCta: { label: "Kontakt aufnehmen", to: "/house-clearance" },
    secondaryCta: { label: "Unser Ablauf", to: "/shop" },
  },
  "home-2": {
    eyebrow: "SECOND-HAND SHOPPEN",
    title: "Nützliche Stücke, faire Preise, einfaches Einkaufen.",
    copy:
      "Stöbern Sie in verfügbaren Artikeln aus Räumungen und Sammlungen, klar gelistet mit Details und Preisen. Eine einfache Möglichkeit, bezahlbare Produkte für Ihr Zuhause zu finden.",
    imageAlt: "Editoriale Hero-Collage für das Shop-Erlebnis",
    primaryCta: { label: "Kontakt aufnehmen", to: "/shop" },
    secondaryCta: { label: "Produkte ansehen", to: "/about" },
  },
  "clearance-1": {
    eyebrow: "UNTERSTÜTZUNG BEI HAUSHALTSAUFLÖSUNGEN",
    title: "Vom ersten Besuch bis zur sauberen Übergabe.",
    copy:
      "Unser Ansatz konzentriert sich auf sorgfältige Sortierung, verantwortungsvolle Entsorgung und darauf, wiederverwendbaren Gegenständen möglichst eine zweite Chance zu geben. Von Möbeln und Geräten bis zu alltäglichen Haushaltswaren behandeln wir jede Räumung mit praktischer Planung und der nötigen Aufmerksamkeit.",
    imageAlt: "Hero-Bild zur Haushaltsauflösung",
    primaryCta: { label: "Kontakt aufnehmen", to: "/contact" },
    secondaryCta: { label: "Unser Ablauf", to: "/shop" },
  },
  "clearance-2": {
    eyebrow: "UNTERSTÜTZUNG BEI HAUSHALTSAUFLÖSUNGEN",
    title: "Wir machen schwierige Räumungen leichter handhabbar.",
    copy:
      "Wir begleiten jede Räumung mit sorgfältiger Planung, respektvollem Umgang und klarer Kommunikation. Vom Sortieren bis zur Entfernung bleibt der Ablauf von Anfang bis Ende einfach.",
    imageAlt: "Unterstützendes Bild zur Haushaltsauflösung",
    primaryCta: { label: "Kontakt aufnehmen", to: "/contact" },
    secondaryCta: { label: "Unser Ablauf", to: "/about" },
  },
  "shop-1": {
    eyebrow: "Neuheiten",
    title: "Hochwertige Second-Hand-Funde bereit für ein neues Zuhause.",
    copy:
      "Stöbern Sie in ausgewählten Möbeln, Haushaltsartikeln, Deko und nützlichen Alltagsstücken aus Räumungen. Jeder Artikel wird klar, fair und bereit zur Abholung oder Anfrage angeboten.",
    imageAlt: "Shop-Hero-Grafik",
    primaryCta: { label: "Kontakt aufnehmen", to: "/shop#new-arrivals" },
    secondaryCta: { label: "Entdecken starten", to: "/shop#explore" },
  },
  "shop-2": {
    eyebrow: "Kuratierte Kollektionen",
    title: "Stöbern Sie in ausgewählten Räumungsfunden, die weiterhin genutzt werden können.",
    copy:
      "Jeder Artikel in unserem Shop wird nach Zustand, Nutzen und Wert ausgewählt. Entdecken Sie Möbel, Wohnaccessoires und praktische Waren, bevor sie in ihr nächstes Zuhause ziehen.",
    imageAlt: "Grafik zu kuratierten Kollektionen",
    primaryCta: { label: "Kontakt aufnehmen", to: "/shop#new-arrivals" },
    secondaryCta: { label: "Entdecken starten", to: "/house-clearance" },
  },
};

const deEntryOptions: Record<string, Partial<EntryOption>> = {
  "entry-clearance": {
    eyebrow: "Service",
    title: "Haushaltsauflösung",
    copy:
      "Räumen Sie Ihre Immobilie mit einem einfachen, organisierten Service von der Sortierung bis zur Entfernung. Wir behandeln Möbel, Haushaltswaren und unerwünschte Gegenstände sorgfältig und hinterlassen den Raum bereit zur Übergabe.",
    imageAlt: "Illustration zur Haushaltsauflösung",
  },
  "entry-shop": {
    eyebrow: "Shopping",
    title: "Shop",
    copy:
      "Stöbern Sie in ausgewählten Second-Hand-Möbeln, Haushaltsartikeln und nützlichen Stücken zu fairen Preisen. Finden Sie hochwertige Produkte für ein neues Zuhause und geben Sie wiederverwendbaren Gegenständen ein zweites Leben.",
    imageAlt: "Shop-Illustration",
  },
};

const deFastFacts: Record<string, Partial<FactItem>> = {
  "fact-1": {
    label: "Schnelle Terminoptionen für dringende Haushaltsauflösungen und Immobilienräumungen verfügbar.",
  },
  "fact-2": {
    label: "Klare Preise, sorgfältige Handhabung und verantwortungsvolle Entfernung vom ersten Besuch bis zur finalen Übergabe.",
  },
  "fact-3": {
    label: "Wir räumen Häuser, Wohnungen, Keller, Garagen, Büros, Geschäfte und Lagerräume.",
  },
};

const deStories: Record<string, Partial<StoryCard>> = {
  "story-1": {
    title: "Conversion klarer machen",
    copy:
      "Ein praktischer Hinweis: Klarheit gewinnt. Nützliche Struktur, weniger Sackgassen und klare Handlungen sind wichtiger als zusätzliche Oberfläche.",
    imageAlt: "Editoriales Story-Bild",
    meta: "Gute Nachrichten von weitem",
  },
  "story-2": {
    title: "Styleguide für Abschlusskleider",
    copy:
      "Der gespiegelte Editorial-Ton wirkt poliert und richtungsweisend, was sich gut in Spotlight-Karten und weichere Discovery-Bereiche übersetzen lässt.",
    imageAlt: "Editoriales Story-Bild",
    meta: "Editorial-Referenz",
  },
  "story-3": {
    title: "So tragen Sie Ihre Eid-Stücke das ganze Jahr",
    copy:
      "Wir nutzen diesen Rhythmus hier als ruhigen Editorial-Block, der der Startseite mehr Tiefe gibt, ohne daraus einen Blogindex zu machen.",
    imageAlt: "Editoriales Story-Bild",
    meta: "Editorial-Referenz",
  },
};

const deTestimonials: Record<string, Partial<TestimonialItem>> = {
  "testimonial-1": {
    quote: "Sehr gute Qualität, faire Preise und schnelle, freundliche Lieferung. Ich empfehle es sehr.",
    avatarAlt: "Porträt von Berta Emili",
  },
  "testimonial-2": {
    quote: "Das Layout wirkt klar und hochwertig. Zwischen den Kollektionen zu wechseln war sehr einfach.",
    avatarAlt: "Porträt von Lina Carter",
  },
  "testimonial-3": {
    quote: "Mir gefiel, dass Shop und Editorial-Bereiche zusammenhängend wirken. Es liest sich wie ein System.",
    avatarAlt: "Porträt von Noah Reeves",
  },
};

const deHouseSteps: Record<string, Partial<HowItWorksStep>> = {
  "step-1": {
    step: "Schritt 1",
    title: "Immobilie prüfen",
    copy:
      "Starten Sie mit Größe, Zugangspunkten und der Frage, ob die Räumung komplett oder in Etappen stattfinden soll.",
    imageAlt: "Illustration zur Einschätzung",
  },
  "step-2": {
    step: "Schritt 2",
    title: "Sortieren und erkennen",
    copy:
      "Markieren Sie Räume mit Priorität und Stücke, die behalten, bewertet, gespendet oder verkauft werden sollen.",
    imageAlt: "Illustration zur Sichtung",
  },
  "step-3": {
    step: "Schritt 3",
    title: "Abholung planen",
    copy:
      "Wählen Sie ein Zeitfenster, das zu Zugang, Familienabstimmung und praktischen Übergaben passt.",
    imageAlt: "Illustration zur Abholung",
  },
  "step-4": {
    step: "Schritt 4",
    title: "Räumen und weitergeben",
    copy:
      "Schließen Sie die Räumung ab und bringen Sie geeignete Stücke in Spende oder Weiterverkauf, statt alles gleich zu behandeln.",
    imageAlt: "Illustration zum Weitergeben",
  },
};

const deFaqs: Record<string, Partial<FaqItem>> = {
  "faq-1": {
    question: "Räumen Sie ganze Häuser und einzelne Zimmer?",
    answer:
      "Ja. Wir übernehmen komplette Haushaltsauflösungen ebenso wie einzelne Zimmer, Keller, Dachböden, Garagen, Wohnungen und Lagerräume.",
  },
  "faq-2": {
    question: "Muss ich alles vorbereiten, bevor Sie kommen?",
    answer:
      "Nein. Sie müssen nur zeigen, welche Gegenstände Sie behalten möchten. Unser Team kann die übrigen Artikel sortieren, tragen, entfernen und trennen.",
  },
  "faq-3": {
    question: "Können nützliche Gegenstände wiederverwendet oder verkauft werden?",
    answer:
      "Ja. Möbel, Geräte und Haushaltsartikel, die noch nutzbar sind, können nach Möglichkeit für Weiterverkauf, Spende oder Wiederverwendung beiseitegestellt werden.",
  },
  "faq-4": {
    question: "Bieten Sie vor Beginn der Arbeiten einen Festpreis an?",
    answer:
      "Ja. Nach Prüfung der Immobilie und des Arbeitsumfangs erstellen wir ein klares Angebot, damit Sie die Kosten im Voraus kennen.",
  },
  "faq-5": {
    question: "Räumen Sie Keller, Garagen und Dachböden?",
    answer:
      "Ja. Wir räumen überfüllte Lagerräume, alte Möbel, Kartons, Sperrmüll, Werkzeuge und andere unerwünschte Gegenstände aus diesen Bereichen.",
  },
};

const deProducts: Record<string, Partial<ProductSummary>> = {
  "product-1": { title: "Leder-Tragetasche", subtitle: "Rosa Schafgarbe", imageAlt: "Produktbild einer Leder-Tragetasche" },
  "product-2": { title: "Seiden-Midikleid", subtitle: "Smaragdgrün", imageAlt: "Produktbild eines Seiden-Midikleids" },
  "product-3": { title: "Denim-Jacke", subtitle: "Hellblau", imageAlt: "Produktbild einer Denim-Jacke" },
  "product-4": { title: "Kaschmirpullover", subtitle: "Creme", imageAlt: "Produktbild eines Kaschmirpullovers" },
  "product-5": { title: "Leinenblazer", subtitle: "Weiches Beige", imageAlt: "Produktbild eines Leinenblazers" },
  "product-6": { title: "Wochenendhemd", subtitle: "Puderblau", imageAlt: "Produktbild eines Wochenendhemds" },
  "product-7": { title: "Taillierte Jacke", subtitle: "Steingrau", imageAlt: "Produktbild einer taillierten Jacke" },
  "product-8": { title: "Weiches Strickpolo", subtitle: "Warmer Sand", imageAlt: "Produktbild eines weichen Strickpolos" },
};

const deTabLabels: Record<string, string> = {
  accessories: "Accessoires",
  footwear: "Schuhe",
  jewelry: "Schmuck",
  beauty: "Beauty",
};

const deCollectionTitles: Record<string, string> = {
  Bags: "Taschen",
  Belts: "Gürtel",
  Shoes: "Schuhe",
  Boots: "Stiefel",
  Rings: "Ringe",
  Necklaces: "Halsketten",
  Wallets: "Geldbörsen",
  "Carry-ons": "Handgepäck",
  Scarves: "Schals",
  Hats: "Hüte",
  Loafers: "Loafer",
  Sneakers: "Sneaker",
  Sandals: "Sandalen",
  Heels: "Absätze",
  Bracelets: "Armbänder",
  Earrings: "Ohrringe",
  Pendants: "Anhänger",
  Chains: "Ketten",
  Skincare: "Hautpflege",
  Fragrance: "Duft",
  "Body care": "Körperpflege",
  Makeup: "Make-up",
  Serums: "Seren",
  Candles: "Kerzen",
};

const deEyebrows: Record<string, string> = {
  "Newest arrivals": "Neu eingetroffen",
  "Best sellers": "Bestseller",
  "Top transparent": "Top transparent",
  "Best seasonal": "Saisonfavoriten",
  "Top rated": "Bestbewertet",
  "Daily edit": "Tägliche Auswahl",
  "Travel ready": "Reisebereit",
  "Desk to dinner": "Vom Büro zum Abend",
  "Top picks": "Top-Auswahl",
  "Weekend edit": "Wochenend-Auswahl",
  "Statement pieces": "Statement-Stücke",
  "Gift ready": "Geschenkbereit",
  "Everyday shine": "Glanz für jeden Tag",
  "Routine staples": "Routine-Basics",
  "Seasonal picks": "Saisonale Auswahl",
  "Night routine": "Nachtroutine",
  "Top shelf": "Aus dem oberen Regal",
};

const deAboutValues: Record<string, Partial<FactItem>> = {
  "value-1": {
    value: "Ruhig",
    label: "Entscheidungen",
    description:
      "Die Seite reduziert Reibung, wenn Nutzer eine Immobilie sortieren oder einen kompakten Shop nutzen.",
  },
  "value-2": {
    value: "Wiederverwendung",
    label: "Nützlich",
    description:
      "Vorhandene CSS-, Bild- und Interaktionsideen bleiben erhalten, wo sie praktisch und stimmig sind.",
  },
  "value-3": {
    value: "Ehrlich",
    label: "Umfang",
    description:
      "Der React-Umbau erfindet keine Bestände, Services oder Backend-Fähigkeiten, die nicht vorhanden sind.",
  },
};

const deContactMethods: Record<string, Partial<ContactMethod>> = {
  "contact-1": {
    label: "Allgemeine Anfragen",
    detail: "Nutzen Sie diesen Kontaktweg für Fragen zum Service, zum Ablauf und zu allgemeinen Anliegen.",
  },
  "contact-2": {
    label: "Support für Haushaltsauflösung",
    detail: "Am besten geeignet, um Zeitplan, Umfang und den Umgang mit verschiedenen Kategorien von Gegenständen zu besprechen.",
  },
  "contact-3": {
    label: "Studiozeiten",
    value: "Mo bis Fr, 9:00 bis 17:30",
    detail:
      "Die erste Version hält Kontaktinformationen statisch und informativ, statt eine unverifizierte Live-Terminplanung einzubauen.",
  },
};

function localizeCollection(collection: ExploreCollectionItem): ExploreCollectionItem {
  const title = deCollectionTitles[collection.title] ?? collection.title;

  return {
    ...collection,
    eyebrow: deEyebrows[collection.eyebrow] ?? collection.eyebrow,
    title,
    productCount: collection.productCount.replace("products", "Produkte"),
    iconImageAlt: `${title} Kategorie-Icon`,
  };
}

const englishContent: SiteContentShape = {
  navigation: siteContent.navigation,
  homeHeroSlides: siteContent.homeHeroSlides,
  homeEntryOptions: siteContent.homeEntryOptions,
  fastFacts: siteContent.fastFacts,
  homeStories: siteContent.homeStories,
  homeTestimonials: siteContent.homeTestimonials,
  homeFloatingAvatars: siteContent.homeFloatingAvatars,
  houseClearanceHeroSlides: siteContent.houseClearanceHeroSlides,
  houseClearanceSteps: siteContent.houseClearanceSteps,
  houseClearanceFaqs: siteContent.houseClearanceFaqs,
  shopHeroSlides: siteContent.shopHeroSlides,
  shopProducts: siteContent.shopProducts,
  shopExploreTabs: siteContent.shopExploreTabs,
  shopCollections: siteContent.shopCollections,
  aboutValues: siteContent.aboutValues,
  contactMethods: siteContent.contactMethods,
};

const germanContent: SiteContentShape = {
  navigation: siteContent.navigation.map((item) => ({ ...item, ...(deNavigation[item.to] ?? {}) })),
  homeHeroSlides: mergeById(siteContent.homeHeroSlides, deHeroSlides),
  homeEntryOptions: mergeById(siteContent.homeEntryOptions, deEntryOptions),
  fastFacts: mergeById(siteContent.fastFacts, deFastFacts),
  homeStories: mergeById(siteContent.homeStories, deStories),
  homeTestimonials: mergeById(siteContent.homeTestimonials, deTestimonials),
  homeFloatingAvatars: siteContent.homeFloatingAvatars.map((avatar) => ({ ...avatar, alt: "Schwebendes Porträt" })),
  houseClearanceHeroSlides: mergeById(siteContent.houseClearanceHeroSlides, deHeroSlides),
  houseClearanceSteps: mergeById(siteContent.houseClearanceSteps, deHouseSteps),
  houseClearanceFaqs: mergeById(siteContent.houseClearanceFaqs, deFaqs),
  shopHeroSlides: mergeById(siteContent.shopHeroSlides, deHeroSlides),
  shopProducts: mergeById(siteContent.shopProducts, deProducts),
  shopExploreTabs: siteContent.shopExploreTabs.map((tab) => ({ ...tab, label: deTabLabels[tab.id] ?? tab.label })),
  shopCollections: siteContent.shopCollections.map(localizeCollection),
  aboutValues: mergeById(siteContent.aboutValues, deAboutValues),
  contactMethods: mergeById(siteContent.contactMethods, deContactMethods),
};

export function getLocalizedSiteContent(language: Language): SiteContentShape {
  return language === "de" ? germanContent : englishContent;
}

export function useLocalizedSiteContent(): SiteContentShape {
  const { language } = useTranslation();
  return getLocalizedSiteContent(language);
}
