import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-editorial.vercel.app",
      lastModified: new Date(),
    },
  ];
}