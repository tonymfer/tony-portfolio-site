import type { MetadataRoute } from "next";
import { cases } from "./data";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://tony-portfolio-site-zeta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cases.map((item) => ({
      url: `${base}/objects/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: item.slug === "beeper" ? 0.9 : 0.7,
    })),
  ];
}
