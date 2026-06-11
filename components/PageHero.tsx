import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { brand, pathWithBase } from "@/content/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, description, compact = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <img
          src={pathWithBase("/images/dj-rishal-hero-generated.png")}
          alt="Generic DJ controller and stage lighting visual"
          className="h-full w-full object-cover opacity-[0.42]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.95),rgba(9,9,11,0.62),rgba(9,9,11,0.35))]" />
      </div>

      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${compact ? "py-16" : "py-20 sm:py-24"}`}>
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-sm bg-lime-300 px-3 py-1 text-xs font-black uppercase text-zinc-950">
            <MapPin size={14} aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 sm:text-lg">{description}</p>
          {!compact && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/college-fest-dj-chennai"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-lime-300"
              >
                College fest bookings
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/about-dj-rishal"
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-sm font-black text-white transition hover:border-lime-300 hover:text-lime-200"
              >
                Who is {brand.name}?
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
