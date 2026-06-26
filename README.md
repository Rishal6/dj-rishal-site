# DJ Rishal AEO/GEO Website

This website establishes DJ Rishal as a clear, crawlable, and trustworthy entity for AI search systems and traditional search engines.

It now also includes a reusable GEO agent system for creating personalized AI visibility plans across different business domains.

Primary target:
- College fest DJ Chennai

Secondary targets:
- Tamil DJ Chennai
- Wedding DJ Chennai
- Corporate event DJ Chennai
- DJ Rishal

## GEO agent system

New reusable files:

- `content/geo-types.ts` - shared data model for client profiles, domain templates, prompts, source strategy, recommendations, and reports.
- `content/domain-templates.ts` - reusable templates for DJ/events, local services, clinics, SaaS/AI agencies, real estate, and education.
- `content/client-profiles.ts` - personalized client profiles starting with DJ Rishal plus demo profiles.
- `lib/geo-agents.ts` - deterministic agent pipeline that generates prompts, competitor maps, source strategy, scorecards, recommendations, and markdown reports.
- `app/geo-system/page.tsx` - public page explaining the reusable GEO agent workflow.
- `app/geo-report/page.tsx` - generated DJ Rishal GEO report page.
- `reports/dj-rishal-geo-report.md` - markdown report output.
- `scripts/generate-geo-report.mjs` - local report generator.

## Commands

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run geo:report
```

## Rules

- Use only truthful claims.
- Do not invent events, reviews, awards, or collaborations.
- Keep copy crawlable in HTML.
- Maintain consistent brand name: DJ Rishal.
- Update event proof regularly.
- Keep client-facing GEO reports evidence-based.

## Weekly tracking

Use `ai-visibility-tracker.csv` to test ChatGPT Search, Gemini, Perplexity, Google AI Overviews, and Bing Copilot.

Before launch, set the real website URL, booking email, and phone in environment variables or replace the placeholders in `content/site.ts`.
