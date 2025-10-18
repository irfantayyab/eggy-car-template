import { Link } from "@/i18n/routing";
import React from "react";
import LanguageSwitcher from "../language-switcher";

function Header() {
 return (
  <>
   <header className="flex h-[60px] items-center justify-between gap-3 bg-slate-300 px-6 py-2">
    <p className="text-2xl font-medium">
     <Link href="/" draggable={false}>
      EggyCar
     </Link>
    </p>
    <LanguageSwitcher />
   </header>
  </>
 );
}

export default Header;
