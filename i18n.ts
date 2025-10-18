import { getRequestConfig } from "next-intl/server";
import { routing } from "./i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
 // This typically corresponds to the `[locale]` segment
 let locale = await requestLocale;

 // Ensure that a valid locale is used
 if (!locale || !routing.locales.includes(locale as any)) {
  locale = routing.defaultLocale;
 }

 const [header, footer, homepage] = await Promise.all([
  import(`./locales/${locale}/header.json`),
  import(`./locales/${locale}/footer.json`),
  import(`./locales/${locale}/homepage.json`),
 ]);

 return {
  locale,
  messages: {
   Header: header.default,
   Footer: footer.default,
   Homepage: homepage.default,
  },
 };
});
