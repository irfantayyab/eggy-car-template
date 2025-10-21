import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/app/[locale]/header";
import Footer from "@/app/[locale]/footer";
import ScrollUpButton from "@/components/custom/scroll-up-button";
import ThemeContextProvider from "@/contexts/theme-context";
import { generateSEOMetadata } from "@/lib/generate-metadata";

const aleoMono = Aleo({
 variable: "--font-aleo-mono",
 subsets: ["latin"],
});

export async function generateMetadata({
 params,
}: {
 params: Promise<{ locale: string }>;
}): Promise<Metadata> {
 const { locale } = await params;

 return generateSEOMetadata({
  locale,
  title: "Eggy Car Play Unblocked For Free (Official)",
  description: "Eggy Car's a wild ride! Steer a car with a fragile egg over bumpy hills.",
  keywords: ["eggy car", "unblocked games", "car games"],
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`,
 });
}

export async function generateStaticParams() {
 return routing.locales.map(locale => ({
  locale: locale,
 }));
}

export default async function RootLayout({
 children,
 params,
}: {
 children: React.ReactNode;
 params: Promise<{ locale: string }>;
}) {
 const { locale } = await params;

 if (!routing.locales.includes(locale as any)) {
  notFound();
 }

 const messages = await getMessages();

 return (
  <html lang={locale} suppressHydrationWarning>
   <body
    className={`${aleoMono.variable} bg-html-background text-body flex min-h-screen flex-col font-mono text-[17px] font-light antialiased`}
   >
    <ThemeContextProvider>
     <NextIntlClientProvider messages={messages}>
      <div id="app" className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col">
       <Header />
       <main className="flex-stretch bg-background p-[30px] md:p-10">{children}</main>
       <Footer />
       <ScrollUpButton />
      </div>
     </NextIntlClientProvider>
    </ThemeContextProvider>
   </body>
   <Analytics />
  </html>
 );
}
