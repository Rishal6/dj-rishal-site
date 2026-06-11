import Link from "next/link";
import { Camera, Mail, Phone } from "lucide-react";
import { booking, brand, services } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-black text-white">{brand.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">{brand.summary}</p>
          <p className="mt-5 text-xs text-zinc-500">
            Use only truthful event proof, real reviews, and permissioned media.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase text-zinc-200">Services</p>
          <div className="mt-4 grid gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="text-sm text-zinc-400 transition hover:text-lime-200"
              >
                {service.h1}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase text-zinc-200">Bookings</p>
          <div className="mt-4 grid gap-3 text-sm text-zinc-400">
            <a className="inline-flex items-center gap-2 transition hover:text-lime-200" href={booking.instagram}>
              <Camera size={16} aria-hidden="true" />
              {booking.instagramLabel}
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-lime-200" href={`mailto:${booking.email}`}>
              <Mail size={16} aria-hidden="true" />
              {booking.email}
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-lime-200" href={`tel:${booking.phoneHref}`}>
              <Phone size={16} aria-hidden="true" />
              {booking.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
