import type { Metadata } from "next";
import {
  BadgeCheck,
  CalendarDays,
  Camera,
  Check,
  ClipboardList,
  FileText,
  MapPin,
  MessageSquareQuote,
  Music2,
  PlaySquare,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { BookingCta } from "@/components/BookingCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { absoluteUrl, booking, brand, pageMetadata } from "@/content/site";

export const metadata: Metadata = pageMetadata("/events");

const eventsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "DJ Rishal Events",
  description:
    "Verified event proof hub for DJ Rishal performances, including real event photos, videos, testimonials, and booking highlights.",
  url: absoluteUrl("/events"),
  about: {
    "@type": "LocalBusiness",
    name: brand.name,
    alternateName: brand.alternateName,
    sameAs: [booking.instagram]
  }
};

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

const eventTypes = [
  {
    icon: Users,
    title: "College fests and culturals",
    text: "Use this section for verified Chennai and Pondicherry college events, freshers day, farewell parties, and student DJ nights.",
    tags: ["College fest", "Culturals", "Freshers day", "Farewell"]
  },
  {
    icon: Music2,
    title: "Tamil commercial nights",
    text: "Add clips that show Tamil commercial, Kollywood remixes, Bollywood, EDM drops, and crowd response.",
    tags: ["Tamil DJ", "Kollywood", "EDM", "Bollywood"]
  },
  {
    icon: BadgeCheck,
    title: "Corporate and brand events",
    text: "Publish only approved company names, permissioned media, and brand-safe performance highlights.",
    tags: ["Corporate", "Brand event", "Office party", "Clean edits"]
  },
  {
    icon: CalendarDays,
    title: "Weddings and private parties",
    text: "Add reception, after-party, and private celebration proof only when client permission is available.",
    tags: ["Wedding", "Private party", "Reception", "After party"]
  }
];

const mediaSlots = [
  {
    label: "Hero performance reel",
    description: "30-60 second vertical video showing DJ console, crowd energy, stage lights, and one clear peak moment."
  },
  {
    label: "College crowd clip",
    description: "Short student-crowd moment with truthful caption, city, event type, and music style."
  },
  {
    label: "Tamil commercial drop",
    description: "A clip focused on Tamil commercial or Kollywood remix response, without naming unverified venues."
  },
  {
    label: "Setup and console photo",
    description: "Clean stage or DJ deck photo with alt text describing DJ Rishal, Chennai, and the event format."
  },
  {
    label: "Client testimonial",
    description: "One direct quote from an organizer or client, with name/title only if they approve public use."
  },
  {
    label: "YouTube mix embed",
    description: "Link to a real public mix, playlist, or recap video that supports DJ Rishal's music identity."
  }
];

const eventEntryFields = [
  "Event title approved for public use",
  "Event type: college fest, Tamil night, wedding, corporate event, private party, or pub night",
  "City and area: Chennai, Pondicherry, or nearby",
  "Date or month of performance",
  "Music direction: Tamil commercial, Bollywood, EDM, house, Kollywood remixes, hip-hop",
  "Approved photos and videos",
  "Organizer or client testimonial",
  "Source links: Instagram reel, YouTube video, Google review, or public event page"
];

const captionTemplates = [
  {
    title: "College fest caption",
    text: "DJ Rishal performing for a high-energy college crowd in Chennai with Tamil commercial, Bollywood, EDM, and Kollywood remix moments. For college fest bookings, DM @dj_rishal."
  },
  {
    title: "Tamil DJ night caption",
    text: "Tamil commercial DJ night by DJ Rishal with Kollywood remixes, South Indian chartbusters, Bollywood hooks, and EDM drops for a Chennai party crowd."
  },
  {
    title: "Corporate event caption",
    text: "DJ Rishal performing a brand-safe corporate event set in Chennai with clean commercial edits, Tamil and Bollywood favorites, and crowd-friendly party music."
  },
  {
    title: "Wedding/private party caption",
    text: "DJ Rishal performing for a private celebration with Tamil, Bollywood, EDM, and guest-focused dance-floor programming."
  }
];

const publishChecklist = [
  "Do not publish fake reviews, fake awards, fake college names, or fake celebrity claims.",
  "Use descriptive image filenames such as dj-rishal-college-fest-chennai.jpg only when the event type and city are true.",
  "Write alt text that describes the real media without exaggeration.",
  "Add internal links from each event entry to the matching service page.",
  "Keep Instagram, YouTube, Google Business Profile, and website captions consistent.",
  "Update this page after every real public performance with permissioned proof."
];

export default function EventsPage() {
  return (
    <>
      <JsonLd data={eventsSchema} />
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

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase text-lime-300">Event categories</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Organize proof by the booking intent people search for.
                </h2>
                <p className="mt-5 text-base leading-8 text-zinc-300">
                  Each category should become a real media section as permissioned photos, videos,
                  testimonials, and public links are collected.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {eventTypes.map((eventType) => (
                  <article key={eventType.title} className="rounded-sm border border-white/10 bg-white/[0.04] p-5">
                    <eventType.icon className="text-lime-300" size={26} aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-black">{eventType.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{eventType.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {eventType.tags.map((tag) => (
                        <span key={tag} className="rounded-sm bg-white/10 px-2.5 py-1 text-xs font-bold text-zinc-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
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

        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-sm bg-fuchsia-600 text-white">
                <Sparkles size={24} aria-hidden="true" />
              </div>
              <p className="mt-5 text-sm font-black uppercase text-fuchsia-700">Media system</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">Fill these slots with real proof.</h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                These are content slots, not claims. Replace each placeholder with real links and
                permissioned media as bookings happen.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {mediaSlots.map((slot, index) => (
                <article key={slot.label} className="rounded-sm border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-xs font-black uppercase text-zinc-500">Slot {index + 1}</p>
                  <h3 className="mt-2 text-lg font-black">{slot.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{slot.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-lime-300" size={26} aria-hidden="true" />
                <h2 className="text-2xl font-black">Event entry checklist</h2>
              </div>
              <div className="mt-6 grid gap-3">
                {eventEntryFields.map((field) => (
                  <div key={field} className="flex items-start gap-3">
                    <Check className="mt-0.5 shrink-0 text-lime-300" size={18} aria-hidden="true" />
                    <p className="text-sm leading-6 text-zinc-300">{field}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3">
                <MessageSquareQuote className="text-lime-300" size={26} aria-hidden="true" />
                <h2 className="text-2xl font-black">Testimonial format</h2>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-300">
                <p>
                  <strong className="text-white">Quote:</strong> Add the client or organizer's exact
                  approved words here.
                </p>
                <p>
                  <strong className="text-white">Attribution:</strong> Name, role, event type, and
                  organization only if public use is approved.
                </p>
                <p>
                  <strong className="text-white">Proof:</strong> Pair every testimonial with one source:
                  Instagram post, WhatsApp screenshot stored privately, Google review, email approval, or
                  public event page.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 text-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase text-fuchsia-700">Caption templates</p>
                <h2 className="mt-3 text-3xl font-black leading-tight">Reusable captions for real media.</h2>
                <p className="mt-4 text-base leading-7 text-zinc-700">
                  Use these as starting points for Instagram, YouTube descriptions, and website event
                  entries. Replace generic wording with real details only when verified.
                </p>
              </div>
              <div className="grid gap-3">
                {captionTemplates.map((caption) => (
                  <article key={caption.title} className="rounded-sm border border-zinc-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-black text-zinc-950">{caption.title}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-700">{caption.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-sm bg-zinc-950 text-lime-300">
                <FileText size={24} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight">Publishing rules</h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                This page should become stronger over time as real public evidence accumulates.
              </p>
            </div>
            <div className="grid gap-3">
              {publishChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-sm border border-zinc-200 bg-zinc-50 p-4">
                  <ShieldCheck className="mt-0.5 shrink-0 text-fuchsia-700" size={18} aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-zinc-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-lime-300 text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              { icon: MapPin, label: "Primary cities", value: "Chennai and Pondicherry" },
              { icon: Music2, label: "Core sound", value: "Tamil commercial, Bollywood, EDM, Kollywood" },
              { icon: Camera, label: "Next proof step", value: "Upload real reels, photos, and testimonials" }
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="mt-1 shrink-0" size={22} aria-hidden="true" />
                <div>
                  <p className="text-xs font-black uppercase text-zinc-700">{item.label}</p>
                  <p className="mt-1 text-base font-black">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BookingCta label="Proof builds visibility" />
    </>
  );
}
