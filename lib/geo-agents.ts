import { getDomainTemplate } from "@/content/domain-templates";
import type {
  ClientProfile,
  CompetitorMap,
  GeneratedPrompt,
  GeoAgentPlan,
  GeoRecommendation,
  SourceStrategy
} from "@/content/geo-types";

const workflow = [
  "Client Profile Agent",
  "Domain Template Agent",
  "Personalized Prompt Agent",
  "Competitor Discovery Agent",
  "AI Answer Testing Agent",
  "Mention and Citation Extraction Agent",
  "Source Trust Analysis Agent",
  "Content and Schema Recommendation Agent",
  "Report Agent",
  "Human Approval Gate"
];

export function generatePersonalizedPrompts(profile: ClientProfile): GeneratedPrompt[] {
  const [primaryLocation] = profile.locations;
  const [primaryService] = profile.services;
  const competitors = profile.competitors.slice(0, 2);

  const servicePrompts = profile.services.flatMap((service) => [
    {
      category: "Best provider",
      intent: "discovery" as const,
      prompt: `best ${service.toLowerCase()} in ${primaryLocation}`
    },
    {
      category: "Local buyer intent",
      intent: "local" as const,
      prompt: `${service.toLowerCase()} near me in ${primaryLocation}`
    }
  ]);

  const comparisonPrompts = competitors.map((competitor) => ({
    category: "Comparison",
    intent: "comparison" as const,
    prompt: `${profile.name} vs ${competitor} for ${primaryService.toLowerCase()}`
  }));

  const alternativePrompts = competitors.map((competitor) => ({
    category: "Alternative",
    intent: "alternative" as const,
    prompt: `alternative to ${competitor} for ${primaryService.toLowerCase()} in ${primaryLocation}`
  }));

  const customerPrompts = profile.targetCustomers.slice(0, 4).map((customer) => ({
    category: "Customer segment",
    intent: "discovery" as const,
    prompt: `${primaryService.toLowerCase()} for ${customer} in ${primaryLocation}`
  }));

  const brandPrompts = profile.brandQueries.map((prompt) => ({
    category: "Brand entity",
    intent: "brand" as const,
    prompt
  }));

  const pricePrompts = profile.services.slice(0, 3).map((service) => ({
    category: "Price intent",
    intent: "price" as const,
    prompt: `${service.toLowerCase()} price in ${primaryLocation}`
  }));

  return [...servicePrompts, ...comparisonPrompts, ...alternativePrompts, ...customerPrompts, ...brandPrompts, ...pricePrompts];
}

export function buildCompetitorMap(profile: ClientProfile): CompetitorMap {
  const template = getDomainTemplate(profile.domain);

  return {
    directCompetitors: profile.competitors.filter((competitor) => !competitor.toLowerCase().includes("directory")),
    platformCompetitors: template.defaultCompetitorTypes.filter((item) =>
      ["directories", "marketplaces", "review sites", "property portals", "Practo profiles", "Instagram pages", "venue/vendor listings"].some(
        (keyword) => item.toLowerCase().includes(keyword.toLowerCase())
      )
    ),
    contentCompetitors: template.defaultCompetitorTypes.filter((item) =>
      ["blogs", "course platforms", "open-source tools", "comparison"].some((keyword) =>
        item.toLowerCase().includes(keyword.toLowerCase())
      )
    ),
    aiAnswerCompetitors: profile.competitors
  };
}

export function buildSourceStrategy(profile: ClientProfile): SourceStrategy[] {
  const template = getDomainTemplate(profile.domain);

  return template.trustedSources.map((source) => ({
    source: source.name,
    whyItMatters: source.whyItMatters,
    action: source.action
  }));
}

export function generateRecommendations(profile: ClientProfile): GeoRecommendation[] {
  const template = getDomainTemplate(profile.domain);
  const [primaryLocation] = profile.locations;
  const [primaryService] = profile.services;

  return [
    {
      priority: "High",
      agent: "Content Agent",
      task: `Create or improve the ${primaryService} page for ${primaryLocation}`,
      reason: "AI answer engines need a crawlable source that directly answers the highest-intent buyer query.",
      output: "Service landing page with buyer FAQs, proof section, internal links, and strong title/description."
    },
    {
      priority: "High",
      agent: "Proof Agent",
      task: `Collect and publish ${profile.proofNeeded.slice(0, 3).join(", ")}`,
      reason: "The current visibility gap is usually caused by weak third-party proof, weak media proof, or unclear evidence.",
      output: "Proof hub entries with date, location, service type, public source link, and approval status."
    },
    {
      priority: "High",
      agent: "Prompt Testing Agent",
      task: `Track at least ${Math.min(100, generatePersonalizedPrompts(profile).length * 4)} AI answer prompts every month`,
      reason: "Client value is proven through before/after mention rate, citation rate, and competitor share.",
      output: "Monthly CSV and report with mention status, cited sources, competitors, and next actions."
    },
    {
      priority: "Medium",
      agent: "Schema Agent",
      task: `Validate and expand schema: ${template.recommendedSchema.join(", ")}`,
      reason: "Structured data helps search systems understand the entity, services, location, and proof pages.",
      output: "JSON-LD blocks for the website, service pages, FAQ, proof hub, and media assets."
    },
    {
      priority: "Medium",
      agent: "Source Agent",
      task: `Align brand descriptions across ${template.trustedSources.map((source) => source.name).join(", ")}`,
      reason: "AI systems build confidence when multiple trusted sources describe the business consistently.",
      output: "Source checklist with profile URLs, description consistency, NAP checks, and update status."
    },
    {
      priority: "Low",
      agent: "Comparison Agent",
      task: `Create ethical comparison/alternative pages against ${profile.competitors.slice(0, 2).join(" and ")}`,
      reason: "Comparison and alternative queries are high-conversion prompts where competitors often dominate.",
      output: "Truthful comparison pages that focus on service fit, proof, and booking context."
    }
  ];
}

export function calculateScorecard(profile: ClientProfile) {
  const promptCoverage = Math.min(100, generatePersonalizedPrompts(profile).length * 3);
  const proofStrength = Math.max(0, Math.min(100, 30 + profile.proofAvailable.length * 15 - profile.proofNeeded.length * 6));
  const sourceStrength = Math.min(100, getDomainTemplate(profile.domain).trustedSources.length * 16);
  const visibilityScore = Math.round(promptCoverage * 0.35 + proofStrength * 0.35 + sourceStrength * 0.3);

  return {
    visibilityScore,
    promptCoverage,
    proofStrength,
    sourceStrength,
    readinessLabel:
      visibilityScore >= 75
        ? "Ready for aggressive monthly tracking"
        : visibilityScore >= 50
          ? "Good foundation, proof still needed"
          : "Needs source and proof buildout"
  };
}

export function buildGeoAgentPlan(profile: ClientProfile): GeoAgentPlan {
  const template = getDomainTemplate(profile.domain);

  return {
    client: profile,
    template,
    prompts: generatePersonalizedPrompts(profile),
    competitorMap: buildCompetitorMap(profile),
    sourceStrategy: buildSourceStrategy(profile),
    recommendations: generateRecommendations(profile),
    workflow,
    scorecard: calculateScorecard(profile)
  };
}

export function buildReportMarkdown(plan: GeoAgentPlan) {
  const lines = [
    `# ${plan.client.name} GEO Agent Report`,
    "",
    `Domain template: ${plan.template.label}`,
    `Primary goal: ${plan.client.primaryGoal}`,
    `Positioning: ${plan.client.positioning}`,
    "",
    "## Scorecard",
    `- Visibility readiness: ${plan.scorecard.visibilityScore}/100`,
    `- Prompt coverage: ${plan.scorecard.promptCoverage}/100`,
    `- Proof strength: ${plan.scorecard.proofStrength}/100`,
    `- Source strength: ${plan.scorecard.sourceStrength}/100`,
    `- Status: ${plan.scorecard.readinessLabel}`,
    "",
    "## Priority recommendations",
    ...plan.recommendations.map((item, index) => `${index + 1}. [${item.priority}] ${item.task} — ${item.reason}`),
    "",
    "## Prompt sample",
    ...plan.prompts.slice(0, 12).map((item) => `- ${item.prompt}`),
    "",
    "## Source strategy",
    ...plan.sourceStrategy.map((item) => `- ${item.source}: ${item.action}`)
  ];

  return `${lines.join("\n")}\n`;
}
