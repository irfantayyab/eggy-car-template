import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";
import { HomePageSectionData } from "@/types/homepage-section-data";

function Upgrades() {
 const { title, content } = useTranslations().raw("Homepage.upgrades") as HomePageSectionData;

 return (
  <>
   <section>
    <SectionTitle id="upgrades" title={title} />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default Upgrades;
