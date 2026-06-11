import type { Metadata } from "next";

export const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const booking = {
  instagram: "https://www.instagram.com/dj_rishal/",
  instagramLabel: "@dj_rishal",
  email: process.env.NEXT_PUBLIC_BOOKING_EMAIL || "bookings@example.com",
  phone: process.env.NEXT_PUBLIC_BOOKING_PHONE || "+91-00000-00000"
};

export const brand = {
  name: "DJ Rishal",
  alternateName: "Rishal V S",
  location: "Chennai and Pondicherry",
  tagline: "Chennai DJ for college fests, Tamil nights, weddings and events",
  summary:
    "DJ Rishal is a Chennai and Pondicherry-based DJ specializing in college fests, Tamil commercial nights, EDM, Bollywood, weddings, private parties, corporate events, and youth crowd entertainment.",
  experience: "7+ years"
};

export const primaryFaqs = [
  {
    question: "Who is DJ Rishal?",
    answer:
      "DJ Rishal is a Chennai and Pondicherry-based DJ who performs for college fests, corporate events, weddings, private parties, pub nights, and youth crowd celebrations."
  },
  {
    question: "Is DJ Rishal available for college fests in Chennai?",
    answer:
      "Yes. DJ Rishal is available for college fests, culturals, freshers day, farewell parties, annual day events, department celebrations, and DJ nights in Chennai."
  },
  {
    question: "What music does DJ Rishal play?",
    answer:
      "DJ Rishal plays Tamil commercial music, Bollywood, EDM, house, Kollywood remixes, trending reels music, hip-hop, and party tracks."
  },
  {
    question: "Can DJ Rishal perform for engineering college culturals?",
    answer:
      "Yes. DJ Rishal performs for engineering college culturals and student crowd events in Chennai and Pondicherry."
  },
  {
    question: "How can I book DJ Rishal?",
    answer:
      "DJ Rishal can be contacted through Instagram @dj_rishal for event bookings and collaborations."
  }
];

export const entityKeywords = [
  {
    label: "Person / Brand",
    values: ["DJ Rishal", "Rishal V S"]
  },
  {
    label: "Location",
    values: ["Chennai", "Pondicherry", "Tamil Nadu"]
  },
  {
    label: "Main Category",
    values: ["DJ", "Disc Jockey", "College Fest DJ"]
  },
  {
    label: "Event Types",
    values: [
      "College fests",
      "Culturals",
      "Freshers day",
      "Farewell party",
      "Weddings",
      "Corporate events",
      "Private parties",
      "Pub nights"
    ]
  },
  {
    label: "Music Styles",
    values: [
      "Tamil commercial",
      "Kollywood remixes",
      "Bollywood",
      "EDM",
      "House",
      "Hip-hop",
      "Trending reels music"
    ]
  }
];

export const targetPrompts = [
  "best DJ in Chennai for college fest",
  "college fest DJ Chennai",
  "Tamil DJ in Chennai",
  "DJ for engineering college culturals Chennai",
  "DJ for freshers day Chennai",
  "DJ for farewell party Chennai",
  "wedding DJ Chennai",
  "corporate event DJ Chennai",
  "Tamil EDM DJ Chennai",
  "party DJ Chennai and Pondicherry",
  "Who is DJ Rishal?",
  "Is DJ Rishal available for college fests in Chennai?"
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  description: string;
  intro: string;
  fit: string[];
  music: string[];
  proofNote: string;
};

export const services: Service[] = [
  {
    slug: "college-fest-dj-chennai",
    title: "College Fest",
    eyebrow: "Student crowd specialist",
    h1: "College Fest DJ in Chennai",
    metaTitle: "College Fest DJ in Chennai | DJ Rishal",
    description:
      "Book DJ Rishal for college fests, engineering college culturals, freshers day, farewell parties, and student DJ nights in Chennai.",
    intro:
      "DJ Rishal is available for college fests, culturals, freshers day events, farewell parties, department celebrations, student crowd events, and DJ nights in Chennai and Pondicherry.",
    fit: [
      "Engineering college culturals",
      "Inter-college fests",
      "Freshers day events",
      "Farewell parties",
      "Annual day celebrations",
      "Department events",
      "DJ nights and college after parties"
    ],
    music: [
      "Tamil commercial hits",
      "Bollywood dance tracks",
      "EDM drops",
      "Trending Instagram songs",
      "South Indian chartbusters",
      "Custom mashups"
    ],
    proofNote:
      "Add verified college event photos, videos, and organizer testimonials here after each real booking."
  },
  {
    slug: "tamil-dj-chennai",
    title: "Tamil DJ",
    eyebrow: "Kollywood and Tamil commercial",
    h1: "Tamil DJ in Chennai",
    metaTitle: "Tamil DJ in Chennai | DJ Rishal",
    description:
      "DJ Rishal performs Tamil commercial, Kollywood remixes, Bollywood, EDM, and party music for events in Chennai and Pondicherry.",
    intro:
      "DJ Rishal builds high-energy Tamil commercial sets for student crowds, private parties, pub nights, weddings, and brand events across Chennai and Pondicherry.",
    fit: [
      "Tamil commercial nights",
      "Kollywood remix sets",
      "Youth crowd parties",
      "Pub nights",
      "Private celebrations",
      "Wedding after parties"
    ],
    music: [
      "Tamil commercial",
      "Kollywood remixes",
      "South Indian chartbusters",
      "Bollywood",
      "EDM",
      "House and hip-hop"
    ],
    proofNote:
      "Replace the placeholder gallery with authentic Tamil night clips, crowd reactions, and set snippets."
  },
  {
    slug: "wedding-dj-chennai",
    title: "Wedding DJ",
    eyebrow: "Reception and after-party flow",
    h1: "Wedding DJ in Chennai",
    metaTitle: "Wedding DJ in Chennai | DJ Rishal",
    description:
      "Book DJ Rishal for wedding receptions, after parties, Tamil and Bollywood DJ nights, and private celebrations in Chennai.",
    intro:
      "DJ Rishal performs for wedding receptions, after parties, sangeet-style celebrations, and private family events with audience-aware Tamil, Bollywood, EDM, and party programming.",
    fit: [
      "Wedding receptions",
      "After parties",
      "Private family celebrations",
      "Engagement parties",
      "Tamil and Bollywood DJ nights",
      "Guest-focused dance floors"
    ],
    music: [
      "Tamil celebration tracks",
      "Bollywood dance music",
      "EDM and house",
      "Retro-to-current party music",
      "Guest-request friendly transitions"
    ],
    proofNote:
      "Add real couple permissions, event photos, and short testimonials only after verified weddings."
  },
  {
    slug: "corporate-event-dj-chennai",
    title: "Corporate Event",
    eyebrow: "Brand-safe celebration sets",
    h1: "Corporate Event DJ in Chennai",
    metaTitle: "Corporate Event DJ in Chennai | DJ Rishal",
    description:
      "DJ Rishal performs for corporate events, office parties, brand events, and celebration nights in Chennai and Pondicherry.",
    intro:
      "DJ Rishal supports corporate events with polished, brand-safe music programming for office parties, award nights, product celebrations, and team gatherings.",
    fit: [
      "Office parties",
      "Brand events",
      "Annual celebrations",
      "Award nights",
      "Team offsites",
      "Corporate DJ nights"
    ],
    music: [
      "Clean commercial edits",
      "Tamil and Bollywood favorites",
      "EDM and house",
      "Crowd-friendly party tracks",
      "Energy-controlled background-to-peak flow"
    ],
    proofNote:
      "Add verified company names, photos, and testimonials only when permission is available."
  }
];

export const metadataByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title: "DJ Rishal | Chennai DJ for College Fests, Weddings & Events",
    description:
      "DJ Rishal is a Chennai and Pondicherry-based DJ for college fests, Tamil commercial nights, weddings, corporate events, private parties, and youth events."
  },
  "/about-dj-rishal": {
    title: "About DJ Rishal | Chennai & Pondicherry DJ",
    description:
      "Learn about DJ Rishal, a Chennai and Pondicherry-based DJ with 7+ years of experience in college fests, Tamil DJ nights, weddings, and corporate events."
  },
  "/events": {
    title: "DJ Rishal Events | Chennai & Pondicherry DJ",
    description:
      "View DJ Rishal event proof placeholders for real photos, videos, testimonials, and booking highlights from Chennai and Pondicherry."
  },
  "/contact": {
    title: "Book DJ Rishal | Chennai DJ Contact",
    description:
      "Contact DJ Rishal for college fests, Tamil DJ nights, weddings, corporate events, private parties, and pub nights in Chennai and Pondicherry."
  }
};

export function pathWithBase(path = "/") {
  if (!basePath) {
    return path;
  }

  if (path === "/") {
    return `${basePath}/`;
  }

  return `${basePath}${path}`;
}

export function absoluteUrl(path = "/") {
  return new URL(pathWithBase(path), siteOrigin).toString();
}

export function pageMetadata(path: string, override?: { title?: string; description?: string }): Metadata {
  const base = metadataByPath[path] || {
    title: override?.title || brand.name,
    description: override?.description || brand.summary
  };
  const title = override?.title || base.title;
  const description = override?.description || base.description;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: brand.name,
      images: [
        {
          url: absoluteUrl("/images/dj-rishal-hero-generated.png"),
          width: 1200,
          height: 675,
          alt: "Generic DJ event lighting and console visual for DJ Rishal website"
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/dj-rishal-hero-generated.png")]
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    alternateName: brand.alternateName,
    description: brand.summary,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/dj-rishal-hero-generated.png"),
    areaServed: ["Chennai", "Pondicherry", "Tamil Nadu"],
    sameAs: [booking.instagram],
    knowsAbout: [
      "College Fest DJ",
      "Tamil DJ",
      "Wedding DJ",
      "Corporate Event DJ",
      "Private Party DJ",
      "EDM",
      "Bollywood",
      "Kollywood Remixes"
    ],
    serviceType: [
      "College Fest DJ",
      "Tamil DJ",
      "Wedding DJ",
      "Corporate Event DJ",
      "Private Party DJ"
    ]
  };
}

export function faqSchema(faqs = primaryFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.name} - ${service.h1}`,
    description: service.description,
    areaServed: ["Chennai", "Pondicherry", "Tamil Nadu"],
    provider: {
      "@type": "LocalBusiness",
      name: brand.name,
      url: absoluteUrl("/"),
      sameAs: [booking.instagram]
    },
    serviceType: service.title
  };
}
