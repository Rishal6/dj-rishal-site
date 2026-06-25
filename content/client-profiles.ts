import type { ClientProfile } from "@/content/geo-types";

export const djRishalProfile: ClientProfile = {
  id: "dj-rishal",
  name: "DJ Rishal",
  domain: "dj_events",
  website: "https://rishal6.github.io/dj-rishal-site",
  locations: ["Chennai", "Pondicherry", "Tamil Nadu"],
  primaryGoal: "Increase college fest, Tamil DJ night, wedding, corporate event, and private party booking discovery across AI answer engines.",
  positioning:
    "Chennai and Pondicherry DJ for college fests, Tamil commercial nights, weddings, corporate events, private parties, pub nights, and youth crowd entertainment.",
  services: [
    "College Fest DJ",
    "Tamil DJ",
    "Wedding DJ",
    "Corporate Event DJ",
    "Private Party DJ",
    "Pub Night DJ"
  ],
  targetCustomers: [
    "college cultural committees",
    "student coordinators",
    "event managers",
    "wedding planners",
    "corporate HR teams",
    "pub and venue managers"
  ],
  competitors: ["DJ Frizbee", "DJS FOR U", "event management companies", "local Chennai DJs", "wedding DJ vendors"],
  proofAvailable: ["Instagram profile", "brand website", "AI visibility tracker"],
  proofNeeded: [
    "permissioned event photos",
    "public Instagram reels",
    "YouTube mixes or recap videos",
    "organizer testimonials",
    "Google Business Profile reviews",
    "verified event entries"
  ],
  brandQueries: [
    "Who is DJ Rishal?",
    "Is DJ Rishal available for college fests in Chennai?",
    "DJ Rishal Chennai",
    "DJ Rishal Tamil DJ"
  ]
};

export const demoClientProfiles: ClientProfile[] = [
  djRishalProfile,
  {
    id: "demo-dental-clinic",
    name: "Demo Dental Clinic",
    domain: "clinic",
    locations: ["Chennai"],
    primaryGoal: "Increase AI answer visibility for family dental treatments and root canal searches.",
    positioning: "Affordable family dental clinic in Chennai for root canal, braces, implants, and preventive care.",
    services: ["Root Canal", "Braces", "Dental Implants", "Teeth Cleaning", "Pediatric Dentistry"],
    targetCustomers: ["families", "working professionals", "parents", "students"],
    competitors: ["nearby dental clinics", "Practo-listed clinics", "large dental chains"],
    proofAvailable: ["doctor profile", "clinic photos"],
    proofNeeded: ["patient reviews", "treatment pages", "before/after proof with consent", "Practo profile"],
    brandQueries: ["Who is Demo Dental Clinic?", "Demo Dental Clinic root canal Chennai"]
  },
  {
    id: "demo-ai-agency",
    name: "Demo AI Automation Agency",
    domain: "saas",
    locations: ["India", "Chennai", "Remote"],
    primaryGoal: "Appear in AI answers for AI automation, RAG, ERP AI agents, and workflow automation searches.",
    positioning: "AI automation agency building agents, RAG systems, MCP integrations, and enterprise workflow automation.",
    services: ["AI Agents", "RAG Pipelines", "ERP Automation", "MCP Integrations", "Document AI"],
    targetCustomers: ["SMB founders", "enterprise IT teams", "operations teams", "SaaS companies"],
    competitors: ["AI automation agencies", "no-code AI consultants", "enterprise system integrators"],
    proofAvailable: ["case study drafts", "GitHub examples"],
    proofNeeded: ["public case studies", "technical docs", "LinkedIn authority", "comparison pages"],
    brandQueries: ["best AI automation agency in India", "AI agent development company India"]
  }
];
