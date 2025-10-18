import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import HowToPlayImage from "@/public/homepage/how-to-play.webp";

function HowToPlay() {
 const t = useTranslations("Homepage");

 return (
  <>
   <section>
    <header className="mb-4 flex h-[60px] items-center justify-between gap-3 bg-slate-300 px-6 py-2">
     {t("howToPlay.title")}
    </header>
    <main className="pb-4">
     <p>{t("howToPlay.p1")}</p>
     <p>{t("howToPlay.span1")}</p>
     <br />
     <p>{t("howToPlay.p2")}</p>
    </main>
    <footer className="pb-4">
     <Image src={HowToPlayImage} alt="how-to-play-image" width={950} height={494} className="w-full" />
    </footer>
   </section>
  </>
 );
}

export default HowToPlay;
