import { Metadata } from "next";
import { routing } from "@/i18n/routing";

interface GenerateSEOMetadataParams {
 locale: string;
 title: string;
 description: string;
 path?: string; // e.g., "/about", "/games"
 image?: string;
 keywords?: string[];
}

export function generateSEOMetadata({
 locale,
 title,
 description,
 path = "",
 image,
 keywords,
}: GenerateSEOMetadataParams): Metadata {
 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
 const fullUrl = `${baseUrl}/${locale}${path}`;

 return {
  title,
  description,
  keywords,
  authors: [{ name: "Your Name" }],
  openGraph: {
   title,
   description,
   url: fullUrl,
   siteName: "Eggy Car",
   images: image ? [{ url: image }] : undefined,
   locale: locale,
   type: "website",
  },
  twitter: {
   card: "summary_large_image",
   title,
   description,
   images: image ? [image] : undefined,
  },
  alternates: {
   canonical: fullUrl,
   languages: Object.fromEntries(routing.locales.map(l => [l, `${baseUrl}/${l}${path}`])),
  },
  robots: {
   index: true,
   follow: true,
   googleBot: {
    index: true,
    follow: true,
   },
  },
 };
}
