"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function ThemeSwitcher() {
 const { setTheme, resolvedTheme } = useTheme();

 return (
  <button
   className="mr-5 flex h-[60px] items-center bg-[#00000005] px-5 text-[19px] font-bold hover:bg-white"
   onClick={() => {
    resolvedTheme === "light" ? setTheme("dark") : setTheme("light");
   }}
  >
   {resolvedTheme === "light" ? <Moon /> : <Sun />}
  </button>
 );
}
