import { getRequestConfig } from "next-intl/server";
import { routing } from "./i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
 // This typically corresponds to the `[locale]` segment
 let locale = await requestLocale;

 // Ensure that a valid locale is used
 if (!locale || !routing.locales.includes(locale as any)) {
  locale = routing.defaultLocale;
 }

 const [
  footer,
  notFound,
  rating,
  homepage,
  contactUs,
  aboutUs,
  privacyPolicy,
  disclaimer,
  termsAndConditions,
 ] = await Promise.all([
  import(`./locales/${locale}/footer.ts`),
  import(`./locales/${locale}/not-found.ts`),
  import(`./locales/${locale}/rating.ts`),
  import(`./locales/${locale}/homepage/index.ts`),
  import(`./locales/${locale}/contact-us/index.ts`),
  import(`./locales/${locale}/about-us/index.ts`),
  import(`./locales/${locale}/privacy-policy/index.ts`),
  import(`./locales/${locale}/disclaimer/index.ts`),
  import(`./locales/${locale}/terms-and-conditions/index.ts`),
 ]);

 return {
  locale,
  messages: {
   Footer: footer.default,
   NotFound: notFound.default,
   Rating: rating.default,
   Homepage: homepage.default,
   ContactUs: contactUs.default,
   AboutUs: aboutUs.default,
   PrivacyPolicy: privacyPolicy.default,
   Disclaimer: disclaimer.default,
   TermsAndConditions: termsAndConditions.default,
  },
 };
});
