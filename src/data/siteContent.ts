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
  subtitle: string;
  price: string;
  image: string;
  imageAlt: string;
  isNew?: boolean;
  liked?: boolean;
};

export type StoryCard = {
  id: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  meta: string;
};

export type TestimonialItem = {
  id: string;
  quote: string;
  author: string;
  avatar: string;
  avatarAlt: string;
  accent: string;
};

export type FloatingAvatar = {
  id: string;
  image: string;
  alt: string;
  accent: string;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  size: "sm" | "md" | "lg";
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

export type HowItWorksStep = {
  id: string;
  step: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  badgeClass: string;
};

export type ExploreTab = {
  id: string;
  label: string;
  icon: "accessories" | "footwear" | "jewelry" | "beauty";
  active?: boolean;
};

export type ExploreCollectionItem = {
  id: string;
  category: "accessories" | "footwear" | "jewelry" | "beauty";
  eyebrow: string;
  title: string;
  productCount: string;
  iconImage: string;
  iconImageAlt: string;
  backgroundSvg: string;
  to: string;
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
    eyebrow: "RELIABLE CLEARANCE HELP",
    title: "We clear, sort, remove, and leave it ready",
    copy:
      "From the first inspection to the final handover, we manage every detail so your property is cleared without unnecessary stress.",
    image: "/_next/hero-right-1-transparent.png",
    imageAlt: "Editorial hero collage for house clearance",
    primaryCta: { label: "Contact Us", to: "/house-clearance" },
    secondaryCta: { label: "Our Process", to: "/shop" },
    tone: "default",
  },
  {
    id: "home-2",
    eyebrow: "SHOP SECOND-HAND",
    title: "Useful pieces, fair prices, easy shopping.",
    copy:
      "Browse available items from clearances and collections, all listed clearly with details and pricing. A simple way to find affordable products for your home.",
    image: "/_next/hero-right-2-transparent.png",
    imageAlt: "Editorial hero collage for shop experience",
    primaryCta: { label: "Contact Us", to: "/shop" },
    secondaryCta: { label: "Browse products", to: "/about" },
    tone: "rose",
  },
];

export const homeEntryOptions: EntryOption[] = [
  {
    id: "entry-clearance",
    eyebrow: "Service",
    title: "House Clearance",
    copy:
      "Clear your property with a simple, organised service from sorting to removal. We handle furniture, household items, and unwanted goods carefully and leave the space ready for handover.",
    image: "/_next/house-clearance-entry-transparent.png",
    imageAlt: "House clearance entry artwork",
    to: "/house-clearance",
  },
  {
    id: "entry-shop",
    eyebrow: "Shopping",
    title: "Shop",
    copy:
      "Browse selected second-hand furniture, home items, and useful pieces available at fair prices. Find quality products ready for a new home while giving reusable items a second life.",
    image: "/_next/shop-entry-transparent.png",
    imageAlt: "Shop entry artwork",
    to: "/shop",
  },
];

export const fastFacts: FactItem[] = [
  {
    id: "fact-1",
    value: "24–48h",
    label: "Fast appointment options available for urgent house clearances and property cleanouts.",
    description: "",
  },
  {
    id: "fact-2",
    value: "100%",
    label: "Clear pricing, careful handling, and responsible removal from the first visit to final handover.",
    description: "",
  },
  {
    id: "fact-3",
    value: "All Areas",
    label: "We clear homes, flats, basements, garages, offices, shops, and storage spaces.",
    description: "",
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

export const homeTestimonials: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote: "Great quality products, affordable prices, fast and friendly delivery. I very recommend.",
    author: "Berta Emili",
    avatar: "/_next/avatar24e4c.jpg",
    avatarAlt: "Berta Emili portrait",
    accent: "#bfe7ff",
  },
  {
    id: "testimonial-2",
    quote: "The layout feels clean and premium, and it was easy to move between collections without getting lost.",
    author: "Lina Carter",
    avatar: "/_next/avatar130a5.jpg",
    avatarAlt: "Lina Carter portrait",
    accent: "#ffc2e4",
  },
  {
    id: "testimonial-3",
    quote: "I liked how the shop and editorial sections felt connected. It reads like one system, not separate pages.",
    author: "Noah Reeves",
    avatar: "/_next/avatar4803d.jpg",
    avatarAlt: "Noah Reeves portrait",
    accent: "#ffd35a",
  },
];

export const homeFloatingAvatars: FloatingAvatar[] = [
  {
    id: "float-1",
    image: "/_next/avatar30ebd.jpg",
    alt: "Floating portrait",
    accent: "#ffb6c9",
    position: { top: "6rem", left: "8rem" },
    size: "sm",
  },
  {
    id: "float-3",
    image: "/_next/avatar130a5.jpg",
    alt: "Floating portrait",
    accent: "#ffc2e4",
    position: { top: "6rem", right: "9rem" },
    size: "sm",
  },
  {
    id: "float-4",
    image: "/_next/avatar4803d.jpg",
    alt: "Floating portrait",
    accent: "#72e5ff",
    position: { top: "19rem", left: "1rem" },
    size: "sm",
  },
  {
    id: "float-5",
    image: "/_next/avatar30ebd.jpg",
    alt: "Floating portrait",
    accent: "#ffcb37",
    position: { top: "22rem", right: "2rem" },
    size: "sm",
  },
  {
    id: "float-6",
    image: "/_next/avatar4803d.jpg",
    alt: "Floating portrait",
    accent: "#6ff0c2",
    position: { bottom: "3rem", left: "26%" },
    size: "sm",
  },
  {
    id: "float-7",
    image: "/_next/avatar130a5.jpg",
    alt: "Floating portrait",
    accent: "#c8b4ff",
    position: { bottom: "3rem", right: "26%" },
    size: "sm",
  },
];

export const houseClearanceHeroSlides: HeroSlide[] = [
  {
    id: "clearance-1",
    eyebrow: "HOUSE CLEARANCE SUPPORT",
    title: "From first visit to clean handover.",
    copy:
      "Our approach focuses on careful sorting, responsible disposal, and giving reusable items a second chance wherever possible. From furniture and appliances to everyday household goods, we handle each clearance with practical planning and proper attention.",
    image: "/_next/hero-right-35b29.png",
    imageAlt: "House clearance hero image",
    primaryCta: { label: "Contact Us", to: "/contact" },
    secondaryCta: { label: "Our process", to: "/shop" },
    tone: "sky",
  },
  {
    id: "clearance-2",
    eyebrow: "HOUSE CLEARANCE SUPPORT",
    title: "We make difficult clearances easier to manage.",
    copy:
      "We guide every clearance with careful planning, respectful handling, and clear communication. From sorting to removal, the process stays simple from start to finish. ",
    image: "/_next/promo2f621.png",
    imageAlt: "House clearance supporting image",
    primaryCta: { label: "Contact Us", to: "/contact" },
    secondaryCta: { label: "Our Process", to: "/about" },
    tone: "default",
  },
];

export const houseClearanceSteps: HowItWorksStep[] = [
  {
    id: "step-1",
    step: "Step 1",
    title: "Property review",
    copy: "Start with the size of the property, access points, and whether the clearance needs to happen all at once or in stages.",
    image: "/_next/HIW1imgbfc2.png",
    imageAlt: "Assessment illustration",
    badgeClass: "how-it-works__badge how-it-works__badge--red",
  },
  {
    id: "step-2",
    step: "Step 2",
    title: "Sort and identify",
    copy: "Highlight the rooms that need priority attention and call out items that should be kept, valued, donated, or sold.",
    image: "/_next/HIW2imga33c.png",
    imageAlt: "Discovery illustration",
    badgeClass: "how-it-works__badge how-it-works__badge--indigo",
  },
  {
    id: "step-3",
    step: "Step 3",
    title: "Collection planning",
    copy: "Choose a collection window that works around key access, family coordination, and any practical handover constraints.",
    image: "/_next/HIW3img0152.png",
    imageAlt: "Collection illustration",
    badgeClass: "how-it-works__badge how-it-works__badge--yellow",
  },
  {
    id: "step-4",
    step: "Step 4",
    title: "Clear and rehome",
    copy: "Complete the clearance and move suitable pieces into donation or resale instead of treating everything the same.",
    image: "/_next/HIW4imgaa57.png",
    imageAlt: "Rehome illustration",
    badgeClass: "how-it-works__badge how-it-works__badge--purple",
  },
];

export const houseClearanceFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you clear full houses and single rooms?",
    answer:
      "Yes. We handle complete house clearances as well as single rooms, basements, attics, garages, apartments, and storage spaces.",
  },
  {
    id: "faq-2",
    question: "Do I need to prepare everything before you arrive?",
    answer:
      "No. You only need to point out the items you want to keep. Our team can sort, carry, remove, and separate the remaining items.",
  },
  {
    id: "faq-3",
    question: "Can useful items be reused or sold?",
    answer:
      "Yes. Furniture, appliances, and household items that are still usable can be kept aside for resale, donation, or reuse whenever possible.",
  },
  {
    id: "faq-4",
    question: "Do you offer a fixed price before the work starts?",
    answer:
      "Yes. After checking the property and the amount of work involved, we provide a clear quote so you know the cost in advance.",
  },
  {
    id: "faq-5",
    question: "Can you clear basements, garages, and attics?",
    answer:
      "Yes. We clear cluttered storage areas, old furniture, boxes, bulky waste, tools, and other unwanted items from these spaces.",
  },
];

export const shopHeroSlides: HeroSlide[] = [
  {
    id: "shop-1",
    eyebrow: "New arrivals",
    title: "Quality second-hand finds ready for a new home.",
    copy:
      "Browse selected furniture, household items, décor, and useful everyday pieces collected from clearances. Each item is offered clearly, fairly, and ready for pickup or enquiry.",
    image: "/_next/promo1-dark57e7.png",
    imageAlt: "Shop hero artwork",
    primaryCta: { label: "Contact Us", to: "/shop#new-arrivals" },
    secondaryCta: { label: "Start exploring", to: "/shop#explore" },
    tone: "rose",
  },
  {
    id: "shop-2",
    eyebrow: "Curated collections",
    title: "Browse selected clearance finds that are still made to be used.",
    copy:
      "Every item in our shop is chosen for its condition, usefulness, and value. Browse furniture, home accessories, and practical goods before they move to their next home.",
    image: "/_next/shop-carousel-2-transparent.png",
    imageAlt: "Curated collection artwork",
    primaryCta: { label: "Contact Us", to: "/shop#new-arrivals" },
    secondaryCta: { label: "Start exploring", to: "/house-clearance" },
    tone: "default",
  },
];

export const shopProducts: ProductSummary[] = [
  {
    id: "product-1",
    title: "Leather Tote Bag",
    subtitle: "Pink Yarrow",
    price: "",
    image: "/_next/p1-176ca.jpg",
    imageAlt: "Leather tote bag product image",
    isNew: true,
    liked: false,
  },
  {
    id: "product-2",
    title: "Silk Midi Dress",
    subtitle: "Emerald Green",
    price: "",
    image: "/_next/p2-1114e.jpg",
    imageAlt: "Silk midi dress product image",
    liked: true,
  },
  {
    id: "product-3",
    title: "Denim Jacket",
    subtitle: "Light Blue",
    price: "",
    image: "/_next/p3-1beb5.jpg",
    imageAlt: "Denim jacket product image",
    isNew: true,
    liked: false,
  },
  {
    id: "product-4",
    title: "Cashmere Sweater",
    subtitle: "Cream",
    price: "",
    image: "/_next/p4-10151.jpg",
    imageAlt: "Cashmere sweater product image",
    liked: true,
  },
  {
    id: "product-5",
    title: "Linen Blazer",
    subtitle: "Soft Beige",
    price: "",
    image: "/_next/p5-30fff.jpg",
    imageAlt: "Linen blazer product image",
    isNew: true,
    liked: false,
  },
  {
    id: "product-6",
    title: "Weekend Shirt",
    subtitle: "Powder Blue",
    price: "",
    image: "/_next/p2-30dd5.jpg",
    imageAlt: "Weekend shirt product image",
    liked: false,
  },
  {
    id: "product-7",
    title: "Tailored Jacket",
    subtitle: "Stone Grey",
    price: "",
    image: "/_next/p3-226b0.jpg",
    imageAlt: "Tailored jacket product image",
    isNew: true,
    liked: false,
  },
  {
    id: "product-8",
    title: "Soft Knit Polo",
    subtitle: "Warm Sand",
    price: "",
    image: "/_next/p4-28996.jpg",
    imageAlt: "Soft knit polo product image",
    liked: true,
  },
];

export const shopExploreTabs: ExploreTab[] = [
  { id: "accessories", label: "Accessories", icon: "accessories", active: true },
  { id: "footwear", label: "Footwear", icon: "footwear" },
  { id: "jewelry", label: "Jewelry", icon: "jewelry" },
  { id: "beauty", label: "Beauty", icon: "beauty" },
];

export const shopCollections: ExploreCollectionItem[] = [
  {
    id: "collection-1",
    category: "accessories",
    eyebrow: "Newest arrivals",
    title: "Bags",
    productCount: "77 products",
    iconImage: "/_next/p5-30fff.jpg",
    iconImageAlt: "Bags category icon",
    backgroundSvg: "/_next/static/media/explore1.bf5d4097.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-2",
    category: "accessories",
    eyebrow: "Best sellers",
    title: "Belts",
    productCount: "155 products",
    iconImage: "/_next/p1-176ca.jpg",
    iconImageAlt: "Belts category icon",
    backgroundSvg: "/_next/static/media/explore2.cc3caa5d.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-3",
    category: "footwear",
    eyebrow: "Best sellers",
    title: "Shoes",
    productCount: "35 products",
    iconImage: "/_next/p3-1beb5.jpg",
    iconImageAlt: "Shoes category icon",
    backgroundSvg: "/_next/static/media/explore3.4ed3d7e1.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-4",
    category: "footwear",
    eyebrow: "Top transparent",
    title: "Boots",
    productCount: "55 products",
    iconImage: "/_next/p2-1114e.jpg",
    iconImageAlt: "Boots category icon",
    backgroundSvg: "/_next/static/media/explore4.4e804f1b.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-5",
    category: "jewelry",
    eyebrow: "Best seasonal",
    title: "Rings",
    productCount: "87 products",
    iconImage: "/_next/p4-10151.jpg",
    iconImageAlt: "Rings category icon",
    backgroundSvg: "/_next/static/media/explore5.4c9535e0.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-6",
    category: "jewelry",
    eyebrow: "Top rated",
    title: "Necklaces",
    productCount: "114 products",
    iconImage: "/_next/p4-28996.jpg",
    iconImageAlt: "Necklaces category icon",
    backgroundSvg: "/_next/static/media/explore6.77f242e1.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-9",
    category: "accessories",
    eyebrow: "Daily edit",
    title: "Wallets",
    productCount: "48 products",
    iconImage: "/_next/p2-30dd5.jpg",
    iconImageAlt: "Wallets category icon",
    backgroundSvg: "/_next/static/media/explore1.bf5d4097.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-10",
    category: "accessories",
    eyebrow: "Travel ready",
    title: "Carry-ons",
    productCount: "29 products",
    iconImage: "/_next/p3-226b0.jpg",
    iconImageAlt: "Carry-ons category icon",
    backgroundSvg: "/_next/static/media/explore2.cc3caa5d.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-23",
    category: "accessories",
    eyebrow: "Desk to dinner",
    title: "Scarves",
    productCount: "36 products",
    iconImage: "/_next/p4-10151.jpg",
    iconImageAlt: "Scarves category icon",
    backgroundSvg: "/_next/static/media/explore3.4ed3d7e1.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-24",
    category: "accessories",
    eyebrow: "Top picks",
    title: "Hats",
    productCount: "22 products",
    iconImage: "/_next/p2-1114e.jpg",
    iconImageAlt: "Hats category icon",
    backgroundSvg: "/_next/static/media/explore4.4e804f1b.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-11",
    category: "footwear",
    eyebrow: "Weekend edit",
    title: "Loafers",
    productCount: "52 products",
    iconImage: "/_next/p5-30fff.jpg",
    iconImageAlt: "Loafers category icon",
    backgroundSvg: "/_next/static/media/explore5.4c9535e0.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-12",
    category: "footwear",
    eyebrow: "Best sellers",
    title: "Sneakers",
    productCount: "81 products",
    iconImage: "/_next/p1-176ca.jpg",
    iconImageAlt: "Sneakers category icon",
    backgroundSvg: "/_next/static/media/explore6.77f242e1.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-17",
    category: "footwear",
    eyebrow: "Top rated",
    title: "Sandals",
    productCount: "46 products",
    iconImage: "/_next/p2-30dd5.jpg",
    iconImageAlt: "Sandals category icon",
    backgroundSvg: "/_next/static/media/explore1.bf5d4097.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-18",
    category: "footwear",
    eyebrow: "City edit",
    title: "Heels",
    productCount: "38 products",
    iconImage: "/_next/p4-28996.jpg",
    iconImageAlt: "Heels category icon",
    backgroundSvg: "/_next/static/media/explore2.cc3caa5d.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-13",
    category: "jewelry",
    eyebrow: "Newest arrivals",
    title: "Bracelets",
    productCount: "33 products",
    iconImage: "/_next/p2-1114e.jpg",
    iconImageAlt: "Bracelets category icon",
    backgroundSvg: "/_next/static/media/explore1.bf5d4097.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-14",
    category: "jewelry",
    eyebrow: "Statement pieces",
    title: "Earrings",
    productCount: "58 products",
    iconImage: "/_next/p3-1beb5.jpg",
    iconImageAlt: "Earrings category icon",
    backgroundSvg: "/_next/static/media/explore2.cc3caa5d.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-19",
    category: "jewelry",
    eyebrow: "Gift ready",
    title: "Pendants",
    productCount: "41 products",
    iconImage: "/_next/p5-30fff.jpg",
    iconImageAlt: "Pendants category icon",
    backgroundSvg: "/_next/static/media/explore3.4ed3d7e1.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-20",
    category: "jewelry",
    eyebrow: "Everyday shine",
    title: "Chains",
    productCount: "66 products",
    iconImage: "/_next/p1-176ca.jpg",
    iconImageAlt: "Chains category icon",
    backgroundSvg: "/_next/static/media/explore4.4e804f1b.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-7",
    category: "beauty",
    eyebrow: "Top rated",
    title: "Skincare",
    productCount: "64 products",
    iconImage: "/_next/p2-30dd5.jpg",
    iconImageAlt: "Skincare category icon",
    backgroundSvg: "/_next/static/media/explore2.cc3caa5d.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-8",
    category: "beauty",
    eyebrow: "Best sellers",
    title: "Fragrance",
    productCount: "42 products",
    iconImage: "/_next/p4-10151.jpg",
    iconImageAlt: "Fragrance category icon",
    backgroundSvg: "/_next/static/media/explore3.4ed3d7e1.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-15",
    category: "beauty",
    eyebrow: "Routine staples",
    title: "Body care",
    productCount: "39 products",
    iconImage: "/_next/p4-28996.jpg",
    iconImageAlt: "Body care category icon",
    backgroundSvg: "/_next/static/media/explore4.4e804f1b.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-16",
    category: "beauty",
    eyebrow: "Seasonal picks",
    title: "Makeup",
    productCount: "73 products",
    iconImage: "/_next/p5-30fff.jpg",
    iconImageAlt: "Makeup category icon",
    backgroundSvg: "/_next/static/media/explore5.4c9535e0.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-21",
    category: "beauty",
    eyebrow: "Night routine",
    title: "Serums",
    productCount: "51 products",
    iconImage: "/_next/p3-226b0.jpg",
    iconImageAlt: "Serums category icon",
    backgroundSvg: "/_next/static/media/explore6.77f242e1.svg",
    to: "/shop#new-arrivals",
  },
  {
    id: "collection-22",
    category: "beauty",
    eyebrow: "Top shelf",
    title: "Candles",
    productCount: "27 products",
    iconImage: "/_next/p2-1114e.jpg",
    iconImageAlt: "Candles category icon",
    backgroundSvg: "/_next/static/media/explore1.bf5d4097.svg",
    to: "/shop#new-arrivals",
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
    value: "piratenschatzkammer1@gmail.com",
    detail: "Use this path for questions about the React rebuild, content flow, and general service requests.",
  },
  {
    id: "contact-2",
    label: "House clearance support",
    value: "+49 176 79090615",
    detail: "Best for discussing timing, scale, and what should happen to different categories of items.",
  },
  {
    id: "contact-3",
    label: "Studio hours",
    value: "Mon to Fri, 9:00 to 17:30",
    detail: "The first version keeps contact static and informational rather than introducing unverified live scheduling.",
  },
];
