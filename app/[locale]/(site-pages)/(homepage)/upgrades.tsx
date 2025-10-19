import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";

function Upgrades() {
 const { id, title, content } = useTranslations().raw("Homepage.upgrades");

 return (
  <>
   <section>
    <SectionTitle id={id} title={title} />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default Upgrades;
