"use client";

import { Link } from "@/i18n/routing";
import React, { useState } from "react";
import LanguageSwitcher from "../../components/custom/language-switcher";
import LogoImage from "@/public/logo.webp";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function Header() {
 const [isOpen, setIsOpen] = useState<boolean>(false);

 return (
  <>
   <header className="bg-primary px-[30px] py-5 md:h-[100px] md:px-10">
    <div className={cn("flex justify-between gap-3 md:items-center", isOpen ? "pb-0" : "")}>
     <p className="text-2xl font-medium">
      <Link href="/" draggable={false}>
       <Image src={LogoImage} alt="Eggy Car Logo" width={140} height={59} />
      </Link>
     </p>
     <div className="hidden md:flex">
      <Link
       href="/"
       className="flex h-[60px] items-center bg-[#00000005] px-5 text-[19px] font-bold hover:bg-white"
      >
       Eggy Car
      </Link>
      <LanguageSwitcher />
     </div>
     <div className="md:hidden">
      <button
       onClick={() => setIsOpen(!isOpen)}
       className="flex size-[60px] items-center justify-center bg-[#00000005]"
       aria-label="Toggle menu"
      >
       {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
     </div>
    </div>

    {isOpen && (
     <div className="mt-[25.5px] flex flex-col md:hidden">
      <Link
       href="/"
       className="flex h-[60px] items-center bg-[#00000005] px-5 text-[19px] font-bold hover:bg-white"
       onClick={() => setIsOpen(false)}
      >
       Eggy Car
      </Link>
      <LanguageSwitcher className="!h-[60px] w-full bg-[#00000005] hover:bg-white" />
     </div>
    )}
   </header>
  </>
 );
}

export default Header;
