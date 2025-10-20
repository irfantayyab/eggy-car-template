import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Header from "@/components/common/header";
import Heading from "@/components/common/heading";
import SectionContent from "@/components/common/section-content";
import Footer from "@/components/common/footer";
import "./globals.css";
import { Aleo } from "next/font/google";
import { Locale, routing } from "@/i18n/routing";

const aleoMono = Aleo({
 variable: "--font-aleo-mono",
 subsets: ["latin"],
});

export default async function NotFound() {
 const headersList = await headers();
 const referer = headersList.get("referer") || "";
 const match = referer.match(/^https?:\/\/[^/]+\/([^/]+)/);
 const locale = routing.locales.includes((match?.[1] ?? "") as Locale) ? match![1] : routing.defaultLocale;

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
     <div id="app" className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col">
      <Header />
      <main className="flex-stretch bg-white p-[30px] md:p-10">
       <section>
        <Heading>{title}</Heading>
        <SectionContent content={content} />
       </section>
      </main>
      <Footer />
     </div>
    </NextIntlClientProvider>
   </body>
  </html>
 );
}
