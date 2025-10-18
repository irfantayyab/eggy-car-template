import { useTranslations } from "next-intl";
import React from "react";

function EarnRewards() {
 const t = useTranslations("Homepage");

 return (
  <>
   <section>
    <header className="mb-4 flex h-[60px] items-center justify-between gap-3 bg-slate-300 px-6 py-2">
     {t("earnRewards.title")}
    </header>
    <main className="pb-4">
     <p>{t("earnRewards.p1")}</p>
     <br />
     <p>{t("earnRewards.p2")}</p>
    </main>
   </section>
  </>
 );
}

export default EarnRewards;
