import { useTranslations } from "next-intl";
import React from "react";

function WhatIsEggyCar() {
 const t = useTranslations("Homepage");

 return (
  <>
   <section>
    <header className="mb-4 flex h-[60px] items-center justify-between gap-3 bg-slate-300 px-6 py-2">
     {t("whatIsEggyCar.title")}
    </header>
    <main className="pb-4">
     <p>{t("whatIsEggyCar.p1")}</p>
     <br />
     <p>{t("whatIsEggyCar.p2")}</p>
    </main>
   </section>
  </>
 );
}

export default WhatIsEggyCar;
