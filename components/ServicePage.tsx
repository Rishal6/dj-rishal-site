import Link from "next/link";
import { Check, Music2, ShieldCheck } from "lucide-react";
import { BookingCta } from "@/components/BookingCta";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqSchema, type Service, serviceSchema } from "@/content/site";

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema()} />
      <PageHero eyebrow={service.eyebrow} title={`${service.h1} - DJ Rishal`} description={service.intro} compact />

      <main>
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-lime-300">Performance fit</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Built for crowd response, not playlist playback.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                DJ Rishal focuses on event-specific music programming, fast transitions, familiar hooks,
                Tamil and Bollywood taste, EDM energy, and pacing that adapts to the room.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.fit.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-sm border border-white/10 bg-white/[0.04] p-4">
                  <Check className="mt-0.5 shrink-0 text-lime-300" size={18} aria-hidden="true" />
                  <p className="text-sm font-semibold text-zinc-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white text-zinc-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-sm bg-fuchsia-600 text-white">
                <Music2 size={24} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight">Music direction</h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                The set can be shaped around audience age, event format, college rules, brand tone,
                clean edits, peak moments, and Tamil/Bollywood/EDM balance.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.music.map((item) => (
                <div key={item} className="rounded-sm border border-zinc-200 bg-zinc-50 p-4 text-sm font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-100 text-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-6 rounded-sm border border-zinc-200 bg-white p-6 shadow-sm lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="inline-flex size-12 items-center justify-center rounded-sm bg-lime-300 text-zinc-950">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Truthful proof placeholder</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{service.proofNote}</p>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-950 px-4 py-3 text-sm font-black transition hover:bg-zinc-950 hover:text-white"
              >
                View events page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Faq title={`${service.h1} questions`} />
      <BookingCta />
    </>
  );
}
