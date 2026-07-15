import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://YOURDOMAIN.com",
      priority: 1,
    },
  ];
}