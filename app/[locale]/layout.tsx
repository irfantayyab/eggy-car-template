import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "EggyCar",
 description:
  "Beedo Games launched Eggy Car in July 2022, a driving game packed with physics fun. Imagine a car with a wobbly egg as your VIP passenger, fragile as a glass ornament. The mission? Keep that egg safe on roads bumpier than a dirt trail after rain. A fall or crack means game over, bro.",
};

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
  <html lang={locale}>
   <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}>
    <NextIntlClientProvider messages={messages}>
     <Header />
     <main className="flex-stretch">{children}</main>
     <Footer />
    </NextIntlClientProvider>
   </body>
  </html>
 );
}
