import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/hotel", "/residences", "/amenities", "/development", "/legal", "/privacy"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r === "/legal" || r === "/privacy" ? 0.3 : 0.8,
  }));
}
