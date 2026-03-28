export type NavItem = {
  label: string;
  to: string;
  description: string;
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  tone?: "default" | "rose" | "sky";
};

export type EntryOption = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  to: string;
};

export type FactItem = {
  id: string;
  value: string;
  label: string;
  description: string;
};

export type ProductSummary = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
};

export type StoryCard = {
  id: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  meta: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  detail: string;
};

export type CollectionCardItem = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export const navigation: NavItem[] = [
  { label: "Home", to: "/", description: "Start at the main overview" },
  { label: "House Clearance", to: "/house-clearance", description: "Service-led discovery journey" },
  { label: "Shop", to: "/shop", description: "Browse arrivals and collections" },
  { label: "About", to: "/about", description: "Brand and process story" },
  { label: "Contact", to: "/contact", description: "Get in touch with the team" },
];

export const homeHeroSlides: HeroSlide[] = [
  {
    id: "home-1",
    eyebrow: "House clearance with care",
    title: "Clear a home without losing the story behind it.",
    copy:
      "A calm, guided route for arranging clearances, sorting valuables, and choosing what can be donated, sold, or kept in circulation.",
    image: "/_next/hero-right-1eb17.png",
    imageAlt: "Editorial hero collage for house clearance",
    primaryCta: { label: "Explore house clearance", to: "/house-clearance" },
    secondaryCta: { label: "View the shop", to: "/shop" },
    tone: "default",
  },
  {
    id: "home-2",
    eyebrow: "Shop restored finds",
    title: "Bring good pieces farther with a shop that feels curated, not crowded.",
    copy:
      "A lighter storefront flow built from the mirrored collection references, with restrained stock, clear categories, and a more editorial rhythm.",
    image: "/_next/hero-right-2c7e8.png",
    imageAlt: "Editorial hero collage for shop experience",
    primaryCta: { label: "Start shopping", to: "/shop" },
    secondaryCta: { label: "Read our approach", to: "/about" },
    tone: "rose",
  },
];

export const homeEntryOptions: EntryOption[] = [
  {
    id: "entry-clearance",
    eyebrow: "Service route",
    title: "House Clearance",
    copy:
      "Plan a practical clearance with room-by-room guidance, collection windows, and a clear next step for what stays, goes, and gets rehomed.",
    image: "/_next/booth186c3.png",
    imageAlt: "House clearance entry artwork",
    to: "/house-clearance",
  },
  {
    id: "entry-shop",
    eyebrow: "Shopping route",
    title: "Shop",
    copy:
      "Browse a compact set of new arrivals, featured collections, and familiar product-card patterns adapted from the mirrored source.",
    image: "/_next/promo1c027.png",
    imageAlt: "Shop entry artwork",
    to: "/shop",
  },
];

export const fastFacts: FactItem[] = [
  {
    id: "fact-1",
    value: "48 hrs",
    label: "Typical response window",
    description: "Initial replies stay quick so clearances do not stall while households wait on next steps.",
  },
  {
    id: "fact-2",
    value: "4 ways",
    label: "Sort and discover flow",
    description: "Assess, filter, collect, and rehome are presented as a simple four-part service rhythm.",
  },
  {
    id: "fact-3",
    value: "2 routes",
    label: "Home and shop pathways",
    description: "The site keeps the two primary user journeys visible from the first fold onward.",
  },
  {
    id: "fact-4",
    value: "100%",
    label: "Provided asset set",
    description: "All imagery used here comes only from the mirrored files already present in the workspace.",
  },
];

export const homeStories: StoryCard[] = [
  {
    id: "story-1",
    title: "Boost your conversion rate",
    copy:
      "A practical reminder that clarity wins: useful structure, fewer dead ends, and cleaner calls to action matter more than extra surface noise.",
    image: "/_next/photo-1623876355139-cb77f029bd294c10.jpg",
    imageAlt: "Editorial story image",
    meta: "Good News From Far Away",
  },
  {
    id: "story-2",
    title: "Graduation dresses style guide",
    copy:
      "The mirrored editorial tone leans polished and directional, which translates well into spotlight cards and softer discovery sections.",
    image: "/_next/photo-1668585418249-f87c0f926583c93c.jpg",
    imageAlt: "Editorial story image",
    meta: "Reference editorial",
  },
  {
    id: "story-3",
    title: "How to wear your Eid pieces all year long",
    copy:
      "We reuse that pacing here as a calm editorial block that gives the homepage more texture without turning it into a full blog index.",
    image: "/_next/photo-1665047189192-3a49516d496a7cb3.jpg",
    imageAlt: "Editorial story image",
    meta: "Reference editorial",
  },
];

export const houseClearanceHeroSlides: HeroSlide[] = [
  {
    id: "clearance-1",
    eyebrow: "Filter and discover",
    title: "A stronger house-clearance layout for decisions that need structure.",
    copy:
      "This page turns the service into a sequence: assess the property, identify what matters, choose a collection plan, and decide where each piece goes next.",
    image: "/_next/hero-right-35b29.png",
    imageAlt: "House clearance hero image",
    primaryCta: { label: "Book an enquiry", to: "/contact" },
    secondaryCta: { label: "Browse the shop", to: "/shop" },
    tone: "sky",
  },
  {
    id: "clearance-2",
    eyebrow: "Supportive next steps",
    title: "Keep the process clear, even when the contents are not.",
    copy:
      "The supporting blocks borrow from collection, editorial, and callout patterns so the page feels related to the rest of the site while staying service-first.",
    image: "/_next/promo2f621.png",
    imageAlt: "House clearance supporting image",
    primaryCta: { label: "Talk to the team", to: "/contact" },
    secondaryCta: { label: "Read about our process", to: "/about" },
    tone: "default",
  },
];

export const houseClearanceFilters: CollectionCardItem[] = [
  {
    id: "filter-1",
    eyebrow: "1. Assess",
    title: "Property type and scale",
    copy: "Start with the kind of home, access conditions, and whether you need a partial or full clearance.",
    image: "/_next/HIW1imgbfc2.png",
    imageAlt: "Assessment illustration",
  },
  {
    id: "filter-2",
    eyebrow: "2. Discover",
    title: "Rooms, categories, and priority pieces",
    copy: "Highlight the rooms that matter first and the items that may need valuation, donation, or careful handling.",
    image: "/_next/HIW2imga33c.png",
    imageAlt: "Discovery illustration",
  },
  {
    id: "filter-3",
    eyebrow: "3. Collect",
    title: "Collection window and logistics",
    copy: "Choose a timing approach that works around access, family coordination, and staged collections where needed.",
    image: "/_next/HIW3img0152.png",
    imageAlt: "Collection illustration",
  },
  {
    id: "filter-4",
    eyebrow: "4. Rehome",
    title: "Donate, sell, shop, or retain",
    copy: "Channel reusable items into the right next route so the service does more than simply remove them.",
    image: "/_next/HIW4imgaa57.png",
    imageAlt: "Rehome illustration",
  },
];

export const houseClearanceFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Can you work room by room instead of clearing everything at once?",
    answer:
      "Yes. The page is structured to support partial clearances, which is often the right fit when paperwork, family review, or sentimental sorting still needs time.",
  },
  {
    id: "faq-2",
    question: "Do items suitable for resale or donation stay in the same flow?",
    answer:
      "They do. The service route and the shop route are connected so suitable items can move into the right next channel rather than disappearing into a generic removal process.",
  },
  {
    id: "faq-3",
    question: "Is this a live booking system?",
    answer:
      "Not in this first version. The contact path is intentionally lightweight and static while the React migration focuses on structure, content flow, and visual consistency.",
  },
];

export const shopHeroSlides: HeroSlide[] = [
  {
    id: "shop-1",
    eyebrow: "New arrivals",
    title: "A smaller, sharper shop front built from the mirrored collection language.",
    copy:
      "The shop page keeps the two-slide hero, featured product cards, and collection-led discovery while staying within the provided asset set.",
    image: "/_next/promo1-dark57e7.png",
    imageAlt: "Shop hero artwork",
    primaryCta: { label: "See new arrivals", to: "/shop#new-arrivals" },
    secondaryCta: { label: "Start exploring", to: "/shop#explore" },
    tone: "rose",
  },
  {
    id: "shop-2",
    eyebrow: "Curated collections",
    title: "Shop the latest from familiar product references without inventing a wider catalogue.",
    copy:
      "The grid below stays intentionally finite: a restrained range of products, cleaner spacing, and consistent cards that match the source styling rhythm.",
    image: "/_next/qlecbb.png",
    imageAlt: "Curated collection artwork",
    primaryCta: { label: "Browse products", to: "/shop#new-arrivals" },
    secondaryCta: { label: "View house clearance", to: "/house-clearance" },
    tone: "default",
  },
];

export const shopProducts: ProductSummary[] = [
  {
    id: "product-1",
    title: "Cashmere Sweater",
    description: "Soft knitwear styling taken from the mirrored product family and used here as a featured arrival.",
    price: "$128",
    image: "/_next/p4-10151.jpg",
    imageAlt: "Cashmere sweater product image",
  },
  {
    id: "product-2",
    title: "Leather Tote Bag",
    description: "A reliable accessory card for the shop grid, using the existing product imagery only.",
    price: "$164",
    image: "/_next/p2-1114e.jpg",
    imageAlt: "Leather tote bag product image",
  },
  {
    id: "product-3",
    title: "Linen Blazer",
    description: "Clean tailoring with the same rounded-card and surface treatment used across the rest of the page.",
    price: "$186",
    image: "/_next/p6-14870.jpg",
    imageAlt: "Linen blazer product image",
  },
  {
    id: "product-4",
    title: "Velvet Skirt",
    description: "A softer editorial product card pulled from the available product image set.",
    price: "$112",
    image: "/_next/p8-1a7cb.jpg",
    imageAlt: "Velvet skirt product image",
  },
];

export const shopCollections: CollectionCardItem[] = [
  {
    id: "collection-1",
    eyebrow: "Explore",
    title: "New arrivals",
    copy: "Lead with recent additions and familiar collection-card proportions from the source storefront.",
    image: "/_next/booth218fa.png",
    imageAlt: "New arrivals collection image",
  },
  {
    id: "collection-2",
    eyebrow: "Refine",
    title: "Shop by occasion",
    copy: "Turn the broad source collections into a tighter set of pathways that still feel visually rich.",
    image: "/_next/booth31807.png",
    imageAlt: "Shop by occasion image",
  },
  {
    id: "collection-3",
    eyebrow: "Revisit",
    title: "House favourites",
    copy: "Keep the editorial and shopping routes connected by spotlighting pieces with a story attached.",
    image: "/_next/booth4e8d6.png",
    imageAlt: "House favourites image",
  },
];

export const aboutValues: FactItem[] = [
  {
    id: "value-1",
    value: "Calm",
    label: "Decision-making",
    description: "The site is designed to lower friction when users are sorting a property or navigating a compact shop.",
  },
  {
    id: "value-2",
    label: "Useful",
    value: "Reuse",
    description: "Existing CSS, imagery, and interaction ideas are retained wherever they stay practical and coherent.",
  },
  {
    id: "value-3",
    value: "Honest",
    label: "Scope",
    description: "The React rebuild does not imply inventory, services, or backend capability that does not exist in the current files.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    id: "contact-1",
    label: "General enquiries",
    value: "hello@hema-office.example",
    detail: "Use this path for questions about the React rebuild, content flow, and general service requests.",
  },
  {
    id: "contact-2",
    label: "House clearance support",
    value: "+44 (0)20 5555 0148",
    detail: "Best for discussing timing, scale, and what should happen to different categories of items.",
  },
  {
    id: "contact-3",
    label: "Studio hours",
    value: "Mon to Fri, 9:00 to 17:30",
    detail: "The first version keeps contact static and informational rather than introducing unverified live scheduling.",
  },
];
