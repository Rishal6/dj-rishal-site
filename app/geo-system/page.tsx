import type { Metadata } from "next";
import { Bot, CheckCircle2, FileText, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { BookingCta } from "@/components/BookingCta";
import { PageHero } from "@/components/PageHero";
import { demoClientProfiles, djRishalProfile } from "@/content/client-profiles";
import { domainTemplates } from "@/content/domain-templates";
import { buildGeoAgentPlan } from "@/lib/geo-agents";

export const metadata: Metadata = {
  title: "GEO Agent System | Personalized AI Search Visibility",
  description:
    "Agent-based GEO system for generating personalized AI visibility prompts, source strategy, competitor maps, content recommendations, and reports by business domain."
};

const plan = buildGeoAgentPlan(djRishalProfile);

export default function GeoSystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Reusable GEO engine"
        title="Personalized AI visibility agents for every business domain"
        description="This system turns one client profile into domain-specific prompts, competitor maps, trusted source strategy, content fixes, schema recommendations, and a monthly AI visibility report."
        compact
      />

      <main>
        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-fuchsia-700">What was added</p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Not a fixed SEO checklist. A profile-driven agent workflow.
              </h1>
              <p className="mt-5 text-base leading-8 text-zinc-700">
                Each client gets a different plan based on domain, location, services, target customers,
                competitors, available proof, and missing proof. The same engine can support DJ/events,
                clinics, local services, SaaS/AI agencies, real estate, and education businesses.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Client Profile Agent", "Reads business domain, services, locations, proof, and competitors."],
                ["Prompt Agent", "Generates buyer-intent, brand, comparison, alternative, and price prompts."],
                ["Source Agent", "Maps the trusted sources AI engines may rely on for that domain."],
                ["Report Agent", "Turns evidence and tasks into a client-ready monthly report."]
              ].map(([title, text]) => (
                <article key={title} className="rounded-sm border border-zinc-200 bg-zinc-50 p-5">
                  <Bot className="text-fuchsia-700" size={24} aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-black">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase text-lime-300">Agent workflow</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">From profile to proof-backed report.</h2>
              </div>
              <Sparkles className="text-lime-300" size={34} aria-hidden="true" />
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {plan.workflow.map((step, index) => (
                <article key={step} className="rounded-sm border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-black uppercase text-fuchsia-300">Step {index + 1}</p>
                  <h3 className="mt-3 text-base font-black text-white">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 text-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <Layers3 className="text-fuchsia-700" size={32} aria-hidden="true" />
                <p className="mt-5 text-sm font-black uppercase text-fuchsia-700">Domain templates</p>
                <h2 className="mt-3 text-3xl font-black leading-tight">Personalized by business type.</h2>
                <p className="mt-4 text-base leading-7 text-zinc-700">
                  The template decides which prompts, proof assets, sources, and schema types matter for each niche.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {domainTemplates.map((template) => (
                  <article key={template.key} className="rounded-sm border border-zinc-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-black">{template.label}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-700">
                      Sources: {template.trustedSources.map((source) => source.name).join(", ")}
                    </p>
                    <p className="mt-3 text-xs font-black uppercase text-zinc-500">
                      Schema: {template.recommendedSchema.join(", ")}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
            {demoClientProfiles.map((profile) => {
              const profilePlan = buildGeoAgentPlan(profile);

              return (
                <article key={profile.id} className="rounded-sm border border-zinc-200 bg-zinc-50 p-6">
                  <FileText className="text-fuchsia-700" size={28} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black">{profile.name}</h3>
                  <p className="mt-2 text-sm font-bold text-zinc-500">{profilePlan.template.label}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-700">{profile.positioning}</p>
                  <div className="mt-5 grid gap-2 text-sm font-bold">
                    <span>Prompts: {profilePlan.prompts.length}</span>
                    <span>Sources: {profilePlan.sourceStrategy.length}</span>
                    <span>Readiness: {profilePlan.scorecard.visibilityScore}/100</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <ShieldCheck className="text-lime-300" size={32} aria-hidden="true" />
              <p className="mt-5 text-sm font-black uppercase text-lime-300">Guardrails</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Agents recommend. Humans approve.</h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                The system creates tasks, drafts, source checklists, and reports. Business owners should approve factual claims,
                proof assets, source updates, and client-facing reports before anything is published.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Use truthful business claims",
                "Use permissioned event or client proof",
                "Keep brand details consistent",
                "Track source evidence",
                "Approve before publishing",
                "Maintain monthly reports"
              ].map((rule) => (
                <div key={rule} className="flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-lime-300" size={18} aria-hidden="true" />
                  <p className="text-sm font-semibold text-zinc-100">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BookingCta label="GEO system ready" />
    </>
  );
}
