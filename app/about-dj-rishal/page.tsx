import type { Metadata } from "next";
import { Cpu, Music, Users } from "lucide-react";
import { BookingCta } from "@/components/BookingCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { brand, localBusinessSchema, pageMetadata } from "@/content/site";

export const metadata: Metadata = pageMetadata("/about-dj-rishal");

export default function AboutDjRishalPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <PageHero
        eyebrow="Who is DJ Rishal?"
        title="About DJ Rishal"
        description="DJ Rishal, also known as Rishal V S, is a Chennai and Pondicherry-based DJ focused on live performance, Tamil commercial music, Bollywood, EDM, house, private parties, pub nights, college events, and corporate events."
        compact
      />

      <main>
        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-fuchsia-700">Biography</p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{brand.alternateName}</h1>
            </div>
            <div className="space-y-5 text-base leading-8 text-zinc-700">
              <p>
                DJ Rishal is a Chennai and Pondicherry-based DJ with 7+ years of experience in live DJ
                performance, Tamil commercial music, Bollywood, EDM, house, private parties, pub nights,
                college events, and corporate events.
              </p>
              <p>
                His DJ style is focused on crowd reading, quick transitions, energetic drops, Tamil and
                Bollywood familiarity, and event-specific music programming. DJ Rishal is suitable for
                student crowds, college culturals, freshers day, farewell events, corporate celebrations,
                wedding receptions, and private parties.
              </p>
              <p>
                DJ Rishal is also an AI engineer, bringing a technology-driven approach to music branding,
                event visuals, content creation, and digital presence.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              {
                icon: Music,
                title: "Music identity",
                text: "Tamil commercial, Kollywood remixes, Bollywood, EDM, house, hip-hop, and party programming."
              },
              {
                icon: Users,
                title: "Audience fit",
                text: "Student crowds, youth events, corporate celebrations, wedding guests, and private parties."
              },
              {
                icon: Cpu,
                title: "Digital edge",
                text: "AI-aware branding, structured content, visual systems, and search-ready entity building."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
                <item.icon className="text-lime-300" size={28} aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BookingCta label="Entity page complete" />
    </>
  );
}
