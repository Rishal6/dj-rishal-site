import type { MetadataRoute } from "next";
import { absoluteUrl, services } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about-dj-rishal", "/events", "/contact"];
  const serviceRoutes = services.map((service) => `/${service.slug}`);
  const launchDate = new Date("2026-06-11");

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: launchDate,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
