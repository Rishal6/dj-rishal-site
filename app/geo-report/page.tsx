import type { Metadata } from "next";
import { BarChart3, Check, ExternalLink, FileText, Lightbulb, Search } from "lucide-react";
import Link from "next/link";
import { BookingCta } from "@/components/BookingCta";
import { PageHero } from "@/components/PageHero";
import { djRishalProfile } from "@/content/client-profiles";
import { buildGeoAgentPlan } from "@/lib/geo-agents";

export const metadata: Metadata = {
  title: "DJ Rishal GEO Agent Report | AI Visibility Plan",
  description:
    "Personalized GEO agent report for DJ Rishal with AI visibility prompts, source strategy, competitor map, and priority recommendations."
};

const plan = buildGeoAgentPlan(djRishalProfile);

export default function GeoReportPage() {
  return (
    <>
      <PageHero
        eyebrow="Personalized report"
        title="DJ Rishal GEO Agent Report"
        description="A generated action plan for improving how DJ Rishal is discovered, cited, and correctly represented across AI answer engines."
        compact
      />

      <main>
        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <BarChart3 className="text-fuchsia-700" size={34} aria-hidden="true" />
              <p className="mt-5 text-sm font-black uppercase text-fuchsia-700">Scorecard</p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{plan.scorecard.readinessLabel}</h1>
              <p className="mt-4 text-base leading-8 text-zinc-700">{plan.client.primaryGoal}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Visibility readiness", plan.scorecard.visibilityScore],
                ["Prompt coverage", plan.scorecard.promptCoverage],
                ["Proof strength", plan.scorecard.proofStrength],
                ["Source strength", plan.scorecard.sourceStrength]
              ].map(([label, value]) => (
                <article key={label} className="rounded-sm border border-zinc-200 bg-zinc-50 p-6">
                  <p className="text-xs font-black uppercase text-zinc-500">{label}</p>
                  <p className="mt-3 text-4xl font-black">{value}/100</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase text-lime-300">Prompt agent output</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Buyer prompts to test every month.</h2>
              </div>
              <Search className="text-lime-300" size={34} aria-hidden="true" />
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {plan.prompts.slice(0, 18).map((item) => (
                <article key={item.prompt} className="rounded-sm border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-black uppercase text-fuchsia-300">{item.category}</p>
                  <h3 className="mt-3 text-base font-black text-white">{item.prompt}</h3>
                  <p className="mt-3 text-xs font-bold uppercase text-zinc-500">Intent: {item.intent}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <ExternalLink className="text-fuchsia-700" size={32} aria-hidden="true" />
              <p className="mt-5 text-sm font-black uppercase text-fuchsia-700">Source strategy</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Where the brand must become visible.</h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                AI answers often depend on a mix of the official website and trusted third-party sources.
              </p>
            </div>
            <div className="grid gap-3">
              {plan.sourceStrategy.map((source) => (
                <article key={source.source} className="rounded-sm border border-zinc-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black">{source.source}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{source.whyItMatters}</p>
                  <p className="mt-3 text-sm font-bold text-zinc-950">Action: {source.action}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <Lightbulb className="text-fuchsia-700" size={32} aria-hidden="true" />
              <p className="mt-5 text-sm font-black uppercase text-fuchsia-700">Recommendations</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Agent-generated next actions.</h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                These tasks convert the GEO idea into deliverables that can be sold, tracked, and reported.
              </p>
            </div>
            <div className="grid gap-3">
              {plan.recommendations.map((item) => (
                <article key={item.task} className="rounded-sm border border-zinc-200 bg-zinc-50 p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-sm bg-zinc-950 px-2.5 py-1 text-xs font-black uppercase text-lime-300">
                      {item.priority}
                    </span>
                    <span className="text-sm font-black text-fuchsia-700">{item.agent}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-black">{item.task}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{item.reason}</p>
                  <p className="mt-3 text-sm font-bold text-zinc-950">Output: {item.output}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
              <FileText className="text-lime-300" size={30} aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-black">Competitor map</h2>
              <div className="mt-5 grid gap-3 text-sm leading-6 text-zinc-300">
                <p><strong className="text-white">Direct:</strong> {plan.competitorMap.directCompetitors.join(", ")}</p>
                <p><strong className="text-white">Platforms:</strong> {plan.competitorMap.platformCompetitors.join(", ") || "None mapped yet"}</p>
                <p><strong className="text-white">Content:</strong> {plan.competitorMap.contentCompetitors.join(", ") || "None mapped yet"}</p>
              </div>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
              <Check className="text-lime-300" size={30} aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-black">Next implementation route</h2>
              <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-6 text-zinc-300">
                <li>Fill the Events page with permissioned real media and source links.</li>
                <li>Create or update Google Business Profile and link it back to the website.</li>
                <li>Run the prompt list monthly and update the tracker CSV.</li>
                <li>Publish YouTube or Instagram proof using consistent event and location captions.</li>
                <li>Generate a monthly report from the agent scorecard and recommendations.</li>
              </ol>
              <Link href="/geo-system" className="mt-6 inline-flex rounded-sm bg-white px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-lime-300">
                View GEO system
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BookingCta label="Report generated" />
    </>
  );
}
