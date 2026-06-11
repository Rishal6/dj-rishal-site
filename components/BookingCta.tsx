import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { booking } from "@/content/site";

type BookingCtaProps = {
  label?: string;
  text?: string;
};

export function BookingCta({
  label = "Bookings open",
  text = "Share the event date, city, venue type, expected audience size, and music direction to check availability."
}: BookingCtaProps) {
  return (
    <section className="bg-lime-300 text-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-normal">{label}</p>
          <p className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
            Book DJ Rishal for college fests, Tamil DJ nights, weddings, corporate events, and private parties.
          </p>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-zinc-800">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={booking.instagram}
            className="inline-flex items-center gap-2 rounded-sm bg-zinc-950 px-5 py-3 text-sm font-black text-white transition hover:bg-zinc-800"
          >
            <Camera size={18} aria-hidden="true" />
            DM {booking.instagramLabel}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-zinc-950 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-white/60"
          >
            Contact Details
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
