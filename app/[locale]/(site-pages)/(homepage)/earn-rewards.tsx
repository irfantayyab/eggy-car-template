import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";
import { HomePageSectionData } from "@/types/homepage-section-data";

function EarnRewards() {
 const { id, title, content } = useTranslations().raw("Homepage.earnRewards") as HomePageSectionData;

 return (
  <>
   <section>
    <SectionTitle id={id} title={title} />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default EarnRewards;
