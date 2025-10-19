import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";
import { HomePageSectionData } from "@/types/homepage-section-data";

function TipsAndTricks() {
 const { title, content } = useTranslations().raw("Homepage.tipsAndTricks") as HomePageSectionData;

 return (
  <>
   <section>
    <SectionTitle id="tips-and-tricks" title={title} />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default TipsAndTricks;
