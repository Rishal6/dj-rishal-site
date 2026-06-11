import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { pageMetadata, services } from "@/content/site";

const service = services.find((item) => item.slug === "college-fest-dj-chennai")!;

export const metadata: Metadata = pageMetadata(`/${service.slug}`, {
  title: service.metaTitle,
  description: service.description
});

export default function CollegeFestDjChennaiPage() {
  return <ServicePage service={service} />;
}
