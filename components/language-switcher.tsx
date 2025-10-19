"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LANGUAGES } from "@/constants/languages";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
 const locale = useLocale();
 const router = useRouter();
 const pathname = usePathname();

 const handleChange = (newLocale: string) => {
  router.replace(pathname, { locale: newLocale });
 };

 const selectedLanguage = LANGUAGES.find(l => l.short === locale);

 return (
  <Select value={selectedLanguage?.short} onValueChange={handleChange}>
   <SelectTrigger
    className={cn("!h-auto w-fit min-w-0 rounded-none border-0 p-0 px-5 text-[19px] font-bold", className)}
   >
    <SelectValue placeholder="Select language" />
   </SelectTrigger>
   <SelectContent className="bg-primary rounded-none border-0 font-bold">
    {LANGUAGES.map(loc => (
     <SelectItem
      key={loc.name}
      value={loc.short}
      className="block rounded-none px-5 py-2.5 text-sm hover:bg-white"
     >
      {loc.flag}
      <span className="ml-0.5 inline-block">{loc.name}</span>
     </SelectItem>
    ))}
   </SelectContent>
  </Select>
 );
}
