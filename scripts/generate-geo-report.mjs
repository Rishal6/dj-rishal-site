import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const profile = {
  name: "DJ Rishal",
  domain: "DJ / Events / Entertainment",
  primaryGoal:
    "Increase college fest, Tamil DJ night, wedding, corporate event, and private party booking discovery across AI answer engines.",
  positioning:
    "Chennai and Pondicherry DJ for college fests, Tamil commercial nights, weddings, corporate events, private parties, pub nights, and youth crowd entertainment.",
  services: ["College Fest DJ", "Tamil DJ", "Wedding DJ", "Corporate Event DJ", "Private Party DJ"],
  locations: ["Chennai", "Pondicherry", "Tamil Nadu"],
  competitors: ["DJ Frizbee", "DJS FOR U", "event management companies", "local Chennai DJs"]
};

const prompts = [
  "best college fest DJ in Chennai",
  "college fest DJ near me in Chennai",
  "best Tamil DJ in Chennai",
  "wedding DJ price in Chennai",
  "corporate event DJ Chennai",
  "DJ Rishal vs DJ Frizbee for college fest DJ",
  "alternative to DJS FOR U for college fest DJ in Chennai",
  "Who is DJ Rishal?",
  "Is DJ Rishal available for college fests in Chennai?"
];

const recommendations = [
  "Add permissioned event photos, Instagram reels, YouTube mixes, and organizer testimonials to the Events page.",
  "Track buyer prompts monthly across ChatGPT Search, Gemini, Perplexity, Google AI features, and Bing Copilot.",
  "Create or optimize Google Business Profile for local AI and search visibility.",
  "Align Instagram, YouTube, website, Google Business Profile, and event captions with the same entity language.",
  "Add VideoObject schema when real videos are published."
];

const markdown = `# ${profile.name} GEO Agent Report

Domain template: ${profile.domain}

Primary goal: ${profile.primaryGoal}

Positioning: ${profile.positioning}

## Services

${profile.services.map((service) => `- ${service}`).join("\n")}

## Locations

${profile.locations.map((location) => `- ${location}`).join("\n")}

## Prompt sample

${prompts.map((prompt) => `- ${prompt}`).join("\n")}

## Competitors to track

${profile.competitors.map((competitor) => `- ${competitor}`).join("\n")}

## Recommendations

${recommendations.map((item, index) => `${index + 1}. ${item}`).join("\n")}

## Reporting rule

Do not promise guaranteed AI answer placement. Show month-by-month movement in mention rate, citation rate, competitor share, and accuracy.
`;

const outputPath = join(process.cwd(), "reports", "dj-rishal-geo-report.md");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, markdown);
console.log(`Generated ${outputPath}`);
