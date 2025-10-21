import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your actual domain

 // Your pages/routes
 const routes = ["", "/about-us", "/contact-us", "/disclaimer", "/privacy-policy", "/terms-and-conditions"]; // Add all your routes

 // Generate entries for all locale + route combinations
 const sitemap: MetadataRoute.Sitemap = routing.locales.flatMap(locale =>
  routes.map(route => ({
   url: `${baseUrl}/${locale}${route}`,
   lastModified: new Date(),
   changeFrequency: "weekly" as const,
   priority: route === "" ? 1 : 0.8,
   alternates: {
    languages: Object.fromEntries(routing.locales.map(l => [l, `${baseUrl}/${l}${route}`])),
   },
  })),
 );

 return sitemap;
}
