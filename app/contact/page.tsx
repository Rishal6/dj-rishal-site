import type { Metadata } from "next";
import { Camera, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { booking, pageMetadata } from "@/content/site";

export const metadata: Metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Bookings and collaborations"
        title="Book DJ Rishal"
        description="Contact DJ Rishal for college fests, Tamil commercial nights, wedding receptions, corporate events, private parties, pub nights, and youth crowd celebrations."
        compact
      />

      <main className="bg-white text-zinc-950">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-fuchsia-700">Inquiry details</p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Share the essentials for a faster booking response.
            </h1>
            <p className="mt-5 text-base leading-8 text-zinc-700">
              Include the event date, city, venue, audience size, event type, preferred music direction,
              stage/sound details if available, and whether the set needs clean edits or special cues.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                icon: Camera,
                label: "Instagram",
                value: booking.instagramLabel,
                href: booking.instagram
              },
              {
                icon: Mail,
                label: "Email",
                value: booking.email,
                href: `mailto:${booking.email}`
              },
              {
                icon: Phone,
                label: "Phone",
                value: booking.phone,
                href: `tel:${booking.phoneHref}`
              }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-sm border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-950 hover:bg-white"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-sm bg-zinc-950 text-lime-300">
                  <item.icon size={24} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase text-zinc-500">{item.label}</span>
                  <span className="mt-1 block break-all text-base font-black">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
