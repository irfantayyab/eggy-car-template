import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
 locales: [
  "en",
  "vi",
  "es",
  "id",
  "pt",
  "az",
  "zh",
  "fr",
  "ja",
  "de",
  "it",
  "pl",
  "ru",
  "tr",
  "ro",
  "ar",
  "ur",
  "fa",
  "hi",
  "ne",
  "bn",
  "he",
  "uk",
  "af",
  "ps",
 ],
 defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
