import { Link } from "@/i18n/routing";
import React from "react";
import LanguageSwitcher from "../language-switcher";
import LogoImage from "@/public/logo.webp";
import Image from "next/image";

function Header() {
 return (
  <>
   <header className="bg-primary flex h-[100px] items-center justify-between gap-3 px-10 py-5">
    <p className="text-2xl font-medium">
     <Link href="/" draggable={false}>
      <Image src={LogoImage} alt="Eggy Car Logo" width={140} height={59} />
     </Link>
    </p>
    <LanguageSwitcher />
   </header>
  </>
 );
}

export default Header;
