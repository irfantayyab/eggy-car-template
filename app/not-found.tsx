import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Header from "@/components/common/header";
import Heading from "@/components/common/heading";
import SectionContent from "@/components/common/section-content";
import Footer from "@/components/common/footer";
import "./globals.css";
import { Aleo } from "next/font/google";
import { routing } from "@/i18n/routing";

const aleoMono = Aleo({
 variable: "--font-aleo-mono",
 subsets: ["latin"],
});

export default async function NotFound() {
 const headersList = await headers();
 const pathname = headersList.get("x-invoke-path") || "";

 const segments = pathname.split("/").filter(Boolean);
 const locale = (
  routing.locales.includes(segments[0] as any) ? segments[0] : routing.defaultLocale
 ) as string;

 const messages = await getMessages({ locale });
 const t = await getTranslations({ locale, namespace: "NotFound" });
 const raw = t.raw("intro");
 const { title, content } = raw;

 return (
  <html lang={locale} suppressHydrationWarning>
   <body
    className={`${aleoMono.variable} flex min-h-screen flex-col font-mono text-[17px] font-light antialiased`}
   >
    <NextIntlClientProvider messages={messages} locale={locale}>
     <Header />
     <main className="flex-stretch bg-white p-[30px] md:p-10">
      <section>
       <Heading>{title}</Heading>
       <SectionContent content={content} />
      </section>
     </main>
     <Footer />
    </NextIntlClientProvider>
   </body>
  </html>
 );
}
