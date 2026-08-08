import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gooddogtraining.ae",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}