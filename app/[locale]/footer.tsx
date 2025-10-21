import { Link } from "@/i18n/routing";
import React from "react";
import { FOOTER_NAV_LINKS } from "@/constants/footer";
import { useTranslations } from "next-intl";

function Footer() {
 const t = useTranslations("Footer");

 return (
  <>
   <footer className="bg-primary text-primary-foreground flex flex-col items-center justify-between px-10 py-5 text-[15px] font-light">
    <p>
     ©{" "}
     <Link href="/" draggable={false} className="font-bold underline">
      Eggy Car
     </Link>{" "}
     | Official Unblocked Play Online
    </p>
    <nav className="flex flex-col gap-1 text-center sm:flex-row sm:text-left">
     {FOOTER_NAV_LINKS.map((link, i) => {
      return (
       <Link key={link.id} href={link.href} className="underline">
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
