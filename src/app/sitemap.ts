import type { MetadataRoute } from "next";
import { industrySlugs } from "@/data/industries";
import { locationSlugs } from "@/data/locations";

// Update this if/when you point a real domain at the site
const BASE_URL = "https://oakcitymedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/grade`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${BASE_URL}/for/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/in/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...industryRoutes, ...locationRoutes];
}
