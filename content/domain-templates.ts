import type { DomainTemplate } from "@/content/geo-types";

export const domainTemplates: DomainTemplate[] = [
  {
    key: "dj_events",
    label: "DJ / Events / Entertainment",
    buyerIntents: [
      "best DJ for event",
      "DJ near me",
      "college fest DJ",
      "wedding DJ",
      "corporate event DJ",
      "Tamil / regional music specialist",
      "DJ booking price"
    ],
    trustedSources: [
      {
        name: "Official website",
        whyItMatters: "Creates a stable source of truth for brand name, service areas, music style, and booking routes.",
        action: "Publish clear service pages, event proof pages, FAQs, schema, and contact details."
      },
      {
        name: "Instagram",
        whyItMatters: "Event buyers and AI answers often look for public performance proof and recent activity.",
        action: "Use consistent captions, public reels, descriptive profile bio, and links back to service pages."
      },
      {
        name: "YouTube",
        whyItMatters: "Longer mixes and recap videos provide durable proof that can be cited or summarized.",
        action: "Publish mixes, recap videos, and descriptions using event type, city, and DJ Rishal language."
      },
      {
        name: "Google Business Profile",
        whyItMatters: "Local discovery and AI local answers need a verified business/entity footprint.",
        action: "Create or optimize profile, add real photos, services, posts, and truthful reviews."
      },
      {
        name: "Event pages and college/corporate mentions",
        whyItMatters: "Third-party proof helps answer engines trust the performer beyond self-description.",
        action: "Collect permissioned public links from organizers, partners, venues, and event pages."
      }
    ],
    proofAssets: [
      "performance reels",
      "event photos",
      "crowd reaction clips",
      "organizer testimonials",
      "YouTube mixes",
      "public event links",
      "Google reviews"
    ],
    recommendedSchema: ["LocalBusiness", "Person", "FAQPage", "Service", "CollectionPage", "VideoObject"],
    defaultCompetitorTypes: ["other DJs", "event companies", "local directories", "Instagram pages", "venue/vendor listings"]
  },
  {
    key: "local_service",
    label: "Local Service Business",
    buyerIntents: [
      "best service near me",
      "emergency service",
      "service price",
      "repair cost",
      "alternative to big platform",
      "trusted provider in city"
    ],
    trustedSources: [
      {
        name: "Official website",
        whyItMatters: "AI engines need exact service, location, pricing, and contact information.",
        action: "Create city/service pages, FAQ pages, pricing guides, and service-area schema."
      },
      {
        name: "Google Business Profile",
        whyItMatters: "Local service discovery depends heavily on location, reviews, photos, and NAP consistency.",
        action: "Keep name, address, phone, category, photos, services, and reviews updated."
      },
      {
        name: "Justdial / Sulekha / IndiaMART",
        whyItMatters: "Indian local queries are often represented by directories in AI and search answers.",
        action: "Claim profiles, align descriptions, add proof, and keep contact details consistent."
      }
    ],
    proofAssets: ["customer reviews", "before/after photos", "service guarantees", "pricing examples", "area pages"],
    recommendedSchema: ["LocalBusiness", "Service", "FAQPage", "Review", "Product"],
    defaultCompetitorTypes: ["local providers", "marketplaces", "directories", "review sites"]
  },
  {
    key: "clinic",
    label: "Clinic / Healthcare Practice",
    buyerIntents: [
      "best clinic near me",
      "doctor for condition",
      "treatment cost",
      "clinic reviews",
      "specialist in city",
      "safe treatment options"
    ],
    trustedSources: [
      {
        name: "Official clinic website",
        whyItMatters: "Medical queries require clear doctor, treatment, location, and safety information.",
        action: "Publish doctor bios, treatment pages, FAQs, pricing ranges, and patient guidance."
      },
      {
        name: "Google Business Profile",
        whyItMatters: "Local healthcare search depends on reviews, location, opening hours, and photos.",
        action: "Maintain accurate hours, services, photos, and patient review flow."
      },
      {
        name: "Practo / medical directories",
        whyItMatters: "Third-party medical profiles strengthen trust and discoverability.",
        action: "Complete profiles with specialties, real credentials, and consistent contact details."
      }
    ],
    proofAssets: ["doctor credentials", "treatment pages", "patient education", "reviews", "clinic photos"],
    recommendedSchema: ["MedicalClinic", "Physician", "FAQPage", "MedicalProcedure", "LocalBusiness"],
    defaultCompetitorTypes: ["nearby clinics", "Practo profiles", "hospital pages", "health blogs"]
  },
  {
    key: "saas",
    label: "SaaS / AI / B2B Product",
    buyerIntents: [
      "best tool for use case",
      "alternative to competitor",
      "software comparison",
      "pricing",
      "API integration",
      "case studies"
    ],
    trustedSources: [
      {
        name: "Official product website",
        whyItMatters: "AI answers need clear category, use cases, features, pricing, docs, and proof.",
        action: "Create use-case pages, comparison pages, docs, pricing, and case studies."
      },
      {
        name: "G2 / Capterra / Product Hunt",
        whyItMatters: "B2B software answers often cite or summarize third-party review ecosystems.",
        action: "Build complete listings, collect real reviews, and align positioning."
      },
      {
        name: "GitHub / technical docs",
        whyItMatters: "Developer-facing products need public technical credibility and integration evidence.",
        action: "Publish SDK examples, API docs, sample repos, and integration guides."
      }
    ],
    proofAssets: ["case studies", "docs", "pricing", "comparison pages", "reviews", "integrations", "benchmarks"],
    recommendedSchema: ["SoftwareApplication", "Product", "FAQPage", "Organization", "TechArticle"],
    defaultCompetitorTypes: ["SaaS competitors", "review sites", "open-source tools", "comparison blogs"]
  },
  {
    key: "real_estate",
    label: "Real Estate / Builder",
    buyerIntents: [
      "best apartments in location",
      "trusted builder",
      "price per sqft",
      "RERA approved project",
      "floor plan",
      "nearby schools and commute"
    ],
    trustedSources: [
      {
        name: "Official project website",
        whyItMatters: "Real estate buyers need location, price, RERA, floor plans, amenities, and status.",
        action: "Create project pages, location guides, FAQ, floor-plan pages, and trust proof."
      },
      {
        name: "99acres / MagicBricks / Housing",
        whyItMatters: "Property platforms often dominate AI-visible real estate answers.",
        action: "Keep listings consistent and link back to official source where possible."
      }
    ],
    proofAssets: ["RERA details", "floor plans", "site photos", "amenity details", "location guide", "buyer FAQs"],
    recommendedSchema: ["RealEstateAgent", "Residence", "FAQPage", "Place", "Offer"],
    defaultCompetitorTypes: ["builders", "property portals", "local brokers", "location blogs"]
  },
  {
    key: "education",
    label: "Education / Training Institute",
    buyerIntents: [
      "best course in city",
      "certification course",
      "fees",
      "placement support",
      "syllabus",
      "trainer profile"
    ],
    trustedSources: [
      {
        name: "Official institute website",
        whyItMatters: "Students and parents need clear course details, fees, duration, faculty, and outcomes.",
        action: "Publish course pages, syllabus, outcomes, FAQs, trainer bios, and proof."
      },
      {
        name: "YouTube / LinkedIn",
        whyItMatters: "Teaching proof, student outcomes, and demos help AI answers trust the institute.",
        action: "Publish lesson clips, student work, faculty posts, and placement proof."
      }
    ],
    proofAssets: ["student testimonials", "course pages", "syllabus", "trainer bios", "demo videos", "outcomes"],
    recommendedSchema: ["Course", "EducationalOrganization", "FAQPage", "Person", "VideoObject"],
    defaultCompetitorTypes: ["institutes", "universities", "course platforms", "YouTube educators"]
  }
];

export function getDomainTemplate(key: DomainTemplate["key"]) {
  const template = domainTemplates.find((item) => item.key === key);

  if (!template) {
    throw new Error(`Missing GEO domain template for ${key}`);
  }

  return template;
}
