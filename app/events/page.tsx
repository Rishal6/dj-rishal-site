import type { Metadata } from "next";
import { Camera, MessageSquareQuote, PlaySquare, ShieldCheck } from "lucide-react";
import { BookingCta } from "@/components/BookingCta";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/content/site";

export const metadata: Metadata = pageMetadata("/events");

const proofAreas = [
  {
    icon: Camera,
    title: "Real event photos",
    text: "Add permissioned photos with descriptive filenames and truthful alt text such as DJ Rishal college fest Chennai."
  },
  {
    icon: PlaySquare,
    title: "Performance videos",
    text: "Embed YouTube, Instagram, or short clips that show real crowd energy, stage setup, and music direction."
  },
  {
    icon: MessageSquareQuote,
    title: "Testimonials",
    text: "Collect direct organizer or client feedback. Do not publish fake reviews, fake college names, or invented celebrity claims."
  },
  {
    icon: ShieldCheck,
    title: "Verification notes",
    text: "Keep each event entry tied to date, city, event type, permitted media, and source profile links when available."
  }
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof hub"
        title="DJ Rishal Events"
        description="A public proof page for real event photos, videos, testimonials, and performance highlights from Chennai, Pondicherry, and nearby bookings."
        compact
      />

      <main>
        <section className="bg-white text-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {proofAreas.map((item) => (
                <div key={item.title} className="rounded-sm border border-zinc-200 bg-zinc-50 p-6">
                  <div className="inline-flex size-12 items-center justify-center rounded-sm bg-zinc-950 text-lime-300">
                    <item.icon size={24} aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-black">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 text-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="rounded-sm border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase text-fuchsia-700">First entries to add</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "DJ Rishal performing for Chennai college crowd",
                  "Tamil commercial DJ night by DJ Rishal",
                  "College fest DJ set - Chennai",
                  "Corporate event DJ performance - Chennai",
                  "Wedding reception DJ night Tamil + Bollywood",
                  "Private party DJ in Chennai"
                ].map((topic) => (
                  <div key={topic} className="rounded-sm border border-zinc-200 bg-zinc-50 p-4 text-sm font-bold">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <BookingCta label="Proof builds visibility" />
    </>
  );
}
