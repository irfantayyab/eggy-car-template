"use client";

import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

function ScrollUpButton() {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   setIsVisible(window.scrollY > 100);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
 };

 return (
  <button
   className={cn(
    "fixed right-[30px] bottom-[30px] flex size-10 items-center justify-center bg-[#b3ae35] text-white transition-all hover:bg-[#00000099]",
    isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
   )}
   onClick={scrollToTop}
  >
   <ChevronUp className="size-5" />
  </button>
 );
}

export default ScrollUpButton;
