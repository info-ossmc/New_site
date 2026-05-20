// Central content + asset references for Montclair Chef.
// Images are hotlinked from the existing Webflow CDN so they render in production.
// Copy here is a polished, on-brand starting point — replace with final wording.

const CDN = "https://cdn.prod.website-files.com/6810a1a5d2a21214dff2e16b";

export const assets = {
  logo: `${CDN}/686fa06f7775cad08f30b39e_87d56bb49e3b74f7aba30a247c20ae54_Montclair%20Chef%20logo.svg`,
  favicon: `${CDN}/68a1dc7cda54a513636d5c50_favicon-32x32.png`,
  appleTouch: `${CDN}/68ea7b51e7187cdd71977880_256%20png%20Logo.png`,
  ogImage: `${CDN}/689227750fcb5dfdeafef898_montclair-og-image-optimized-fall-back.jpg`,
  heroBg: `${CDN}/688b480b8b257d9eed4211fa_156e20dfc077ea1b80034e4486d17e7e_elite-private-chef-homepage-hero.webp`,
  founder: `${CDN}/686e6a449dee25d0c67de95e_1dfc7c1933edbcf13b707866833264a4_chris-demaillet-founder-michelin-star-chef-private-chef-agency.webp`,
  townhouse: `${CDN}/689357b782db0eeabceea9d5_78397167a301a3095e704e7919aac446_luxury-london-townhouse-exterior-montclair-chef.webp.webp`,
  belgravia: `${CDN}/68a5a5471681d193933efa0e_8ffa2da8afd1d13fc29d7f628ac2e639_London%20Belgravia%20street.webp`,
  star: `${CDN}/687de21cf55457c4973d520a_star.png`,
};

export const serviceImages = {
  plating: `${CDN}/694d7ff1de1f48f2d0d57b7e_Private%20Chef%20plating.webp`,
  residence: `${CDN}/689dd6a4638fa7c796abed47_Private%20Chef%20cooking%20in%20ultra%20luxury%20residence%20.webp`,
  airport: `${CDN}/694d997e9212addaeed70000_Chef%20at%20airport.webp`,
  nutrition: `${CDN}/694e452d0027020702f73827_Nutrition%20and%20health%20chef.webp`,
  pasta: `${CDN}/68a350f9273c4f71b7094fc2_Pasta%20Chef%20.webp`,
};

export const partners = [
  { name: "Alain Ducasse Culinary Institute", src: `${CDN}/6864f0a0b49995b4a1bd2202_f2efdff9d1a8e42192eec7feff03b2a1_imgi_6_width_496.webp` },
  { name: "Michelin Guide", src: `${CDN}/68949461b96e4896d9485354_eeb3b8cac540d2284f160499f9b37131_michelin%20guide%20reduced.webp` },
  { name: "Le Cordon Bleu", src: `${CDN}/6894b6111374aedf69ea3566_cordon%20bleu%20transp.webp` },
  { name: "Partner", src: `${CDN}/687dcd6dba084e0b2f5f937e_imgi_1_pngegg.png` },
  { name: "Partner", src: `${CDN}/687dcdc480c4d20df17685ac_beb559b2f75c999deac835d52ac7b84d_imgi_1_81501.webp` },
  { name: "Partner", src: `${CDN}/687dce5d772e37f6d940ddbc_2ffc65a45982ba5b76868cb88597ff7a_Daco_748031.webp` },
];

export const services = [
  {
    title: "Private Estate Chefs",
    image: serviceImages.residence,
    body: "Permanent and live-in chefs placed within principal residences, delivering Michelin-calibre menus tailored to the family's tastes, dietary needs and daily rhythm.",
  },
  {
    title: "Travel & Yacht Chefs",
    image: serviceImages.airport,
    body: "Discreet culinary talent ready to move with you — between homes, on private aircraft and aboard yachts — maintaining an uncompromising standard wherever you are in the world.",
  },
  {
    title: "Health & Nutrition Chefs",
    image: serviceImages.nutrition,
    body: "Specialists trained in performance nutrition and wellness cuisine, designing balanced menus that pair clinical precision with the pleasure of fine dining.",
  },
  {
    title: "Event & Fine-Dining Chefs",
    image: serviceImages.plating,
    body: "Exceptional chefs for private dinners and high-profile occasions, composing tasting menus and bespoke experiences worthy of the world's finest tables.",
  },
];

export const stats = [
  { value: "Michelin", label: "Trained chefs" },
  { value: "UHNW", label: "Families served" },
  { value: "Global", label: "Placement reach" },
  { value: "100%", label: "Discretion assured" },
];

export const process = [
  { step: "01", title: "Confidential Consultation", body: "We begin with a private conversation to understand your household, your palate and the standard you expect — under strict confidentiality." },
  { step: "02", title: "Curated Selection", body: "From our vetted network of Michelin-trained talent, we shortlist only chefs whose craft, character and discretion match your requirements." },
  { step: "03", title: "Trial & Placement", body: "You meet and trial your chosen candidates. We manage references, contracts and onboarding so the transition is seamless." },
  { step: "04", title: "Ongoing Partnership", body: "Our relationship continues beyond placement, with dedicated support to ensure the standard is sustained for years to come." },
];

export const testimonials = [
  {
    quote: "Montclair Chef understood exactly what our family needed. The chef they placed has become an irreplaceable part of our household — the discretion and quality were beyond anything we expected.",
    author: "Principal, Private Family Office",
    location: "Mayfair, London",
  },
  {
    quote: "Faultless from the first consultation to placement. Every candidate was Michelin-calibre and genuinely vetted. This is the standard private service should always meet.",
    author: "Estate Manager",
    location: "Geneva",
  },
];

export const faqs = [
  {
    q: "How are your chefs vetted?",
    a: "Every chef in our network is personally assessed by our founder. We verify Michelin and fine-dining experience, conduct full reference and background checks, and trial each candidate's craft before they are ever presented to a client.",
  },
  {
    q: "Do you place chefs internationally?",
    a: "Yes. We place permanent, rotational and travelling chefs worldwide, including on private aircraft and yachts. Our network and logistical support extend across Europe, the Middle East, the United States and beyond.",
  },
  {
    q: "How is confidentiality protected?",
    a: "Discretion is the foundation of our service. All engagements are governed by strict non-disclosure agreements, and your identity and household details are never shared without your explicit consent.",
  },
  {
    q: "What is the typical timeline for a placement?",
    a: "Following your initial consultation we typically present a curated shortlist within days. The full process — including trials, references and onboarding — is tailored to your timeline, whether immediate or planned months ahead.",
  },
  {
    q: "Can you accommodate specific dietary or wellness requirements?",
    a: "Absolutely. We place chefs with dedicated expertise in performance nutrition, medical and allergen-conscious cooking, and wellness cuisine, ensuring every menu is built around your family's precise needs.",
  },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Our Founder", href: "#founder" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
];

export const company = {
  name: "Montclair Chef",
  tagline: "Private Chef Placement Agency",
  email: "concierge@montclairchef.com",
  cta: "Schedule a Confidential Consultation",
};
