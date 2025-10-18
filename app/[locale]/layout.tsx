import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const aleoMono = Aleo({
 variable: "--font-aleo-mono",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Eggy Car Play Unblocked For Free (Offical)",
 description:
  "Eggy Car’s a wild ride! Steer a car with a fragile egg over bumpy hills. One wrong move, and the egg cracks like a dropped glass!",
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
   <body
    className={`${aleoMono.variable} flex min-h-screen flex-col font-mono text-[17px] font-light antialiased`}
   >
    <NextIntlClientProvider messages={messages}>
     <Header />
     <main className="flex-stretch p-10">{children}</main>
     <Footer />
    </NextIntlClientProvider>
   </body>
  </html>
 );
}
