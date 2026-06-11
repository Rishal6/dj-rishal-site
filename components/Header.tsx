import Link from "next/link";
import { CalendarCheck, Camera } from "lucide-react";
import { booking, brand } from "@/content/site";

const nav = [
  { href: "/college-fest-dj-chennai", label: "College Fest" },
  { href: "/tamil-dj-chennai", label: "Tamil DJ" },
  { href: "/wedding-dj-chennai", label: "Weddings" },
  { href: "/corporate-event-dj-chennai", label: "Corporate" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-sm bg-lime-300 text-sm font-black text-zinc-950">
            DR
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-black uppercase tracking-normal text-white">
              {brand.name}
            </span>
            <span className="block text-xs text-zinc-400">Chennai & Pondicherry</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={booking.instagram}
            className="grid size-10 place-items-center rounded-sm border border-white/15 text-zinc-200 transition hover:border-lime-300 hover:text-lime-200"
            aria-label="Open DJ Rishal Instagram"
          >
            <Camera size={18} aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-sm bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-lime-300 sm:inline-flex"
          >
            <CalendarCheck size={17} aria-hidden="true" />
            Book
          </Link>
        </div>
      </div>
    </header>
  );
}
