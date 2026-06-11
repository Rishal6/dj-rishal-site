import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardCheck, Search, Sparkles } from "lucide-react";
import { BookingCta } from "@/components/BookingCta";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  brand,
  entityKeywords,
  faqSchema,
  localBusinessSchema,
  pageMetadata,
  services,
  targetPrompts
} from "@/content/site";

export const metadata: Metadata = pageMetadata("/");

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema()} />
      <PageHero eyebrow="Chennai & Pondicherry DJ" title={brand.name} description={brand.summary} />

      <main>
        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-fuchsia-700">Entity clarity</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Crawlable evidence for AI answers and search discovery.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-700">
                DJ Rishal performs across Chennai and Pondicherry for club nights, private celebrations,
                college-style events, corporate gatherings, and DJ nights. His sets combine Tamil hits,
                commercial dance music, Bollywood, house, EDM, and custom mashups based on the audience.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {entityKeywords.map((group) => (
                <div key={group.label} className="rounded-sm border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-xs font-black uppercase text-zinc-500">{group.label}</p>
                  <p className="mt-3 text-sm font-bold leading-6">{group.values.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase text-lime-300">Booking routes</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Service pages built for intent.</h2>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-black text-lime-200">
                Check availability
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group rounded-sm border border-white/10 bg-white/[0.04] p-5 transition hover:border-lime-300 hover:bg-white/[0.07]"
                >
                  <p className="text-xs font-black uppercase text-fuchsia-300">{service.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-black text-white">{service.h1}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-lime-200">
                    Open page
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              {
                icon: Search,
                title: "Answer engine ready",
                text: "FAQ copy, structured answers, and consistent entity language help AI systems answer direct questions."
              },
              {
                icon: BadgeCheck,
                title: "Truth-first proof",
                text: "The site reserves proof areas for real photos, real videos, and real testimonials rather than invented claims."
              },
              {
                icon: ClipboardCheck,
                title: "Tracking built in",
                text: "A weekly visibility tracker keeps ChatGPT Search, Gemini, Perplexity, Google AI features, and Bing Copilot checks organized."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="inline-flex size-12 items-center justify-center rounded-sm bg-zinc-950 text-lime-300">
                  <item.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-sm bg-fuchsia-600 text-white">
                <Sparkles size={24} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight">Target AI search prompts</h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                These prompts should be checked weekly after launch and improved with real-world proof.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {targetPrompts.map((prompt) => (
                <span key={prompt} className="rounded-sm border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-bold">
                  {prompt}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Faq />
      <BookingCta />
    </>
  );
}
