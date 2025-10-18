import { Link } from "@/i18n/routing";
import React from "react";
import { FOOTER_NAV_LINKS } from "@/constants/footer";
import { useTranslations } from "next-intl";

function Footer() {
 const t = useTranslations("Footer");

 return (
  <>
   <footer className="flex flex-col items-center justify-between gap-3 bg-slate-300 px-6 py-2">
    <p className="text-2xl font-medium">
     <Link href="/" draggable={false}>
      EggyCar
     </Link>
    </p>
    <nav className="flex gap-4">
     {FOOTER_NAV_LINKS.map((link, i) => {
      return (
       <Link key={link.id} href={link.href}>
        {t(`navigation.link${i + 1}`)}
       </Link>
      );
     })}
    </nav>
   </footer>
  </>
 );
}

export default Footer;
