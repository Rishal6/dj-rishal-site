export type DomainKey =
  | "dj_events"
  | "local_service"
  | "clinic"
  | "saas"
  | "real_estate"
  | "education";

export type TrustSource = {
  name: string;
  whyItMatters: string;
  action: string;
};

export type DomainTemplate = {
  key: DomainKey;
  label: string;
  buyerIntents: string[];
  trustedSources: TrustSource[];
  proofAssets: string[];
  recommendedSchema: string[];
  defaultCompetitorTypes: string[];
};

export type ClientProfile = {
  id: string;
  name: string;
  domain: DomainKey;
  website?: string;
  locations: string[];
  primaryGoal: string;
  positioning: string;
  services: string[];
  targetCustomers: string[];
  competitors: string[];
  proofAvailable: string[];
  proofNeeded: string[];
  brandQueries: string[];
};

export type GeneratedPrompt = {
  category: string;
  prompt: string;
  intent: "discovery" | "comparison" | "brand" | "local" | "price" | "alternative";
};

export type CompetitorMap = {
  directCompetitors: string[];
  platformCompetitors: string[];
  contentCompetitors: string[];
  aiAnswerCompetitors: string[];
};

export type GeoRecommendation = {
  priority: "High" | "Medium" | "Low";
  agent: string;
  task: string;
  reason: string;
  output: string;
};

export type SourceStrategy = {
  source: string;
  whyItMatters: string;
  action: string;
};

export type GeoAgentPlan = {
  client: ClientProfile;
  template: DomainTemplate;
  prompts: GeneratedPrompt[];
  competitorMap: CompetitorMap;
  sourceStrategy: SourceStrategy[];
  recommendations: GeoRecommendation[];
  workflow: string[];
  scorecard: {
    visibilityScore: number;
    promptCoverage: number;
    proofStrength: number;
    sourceStrength: number;
    readinessLabel: string;
  };
};
