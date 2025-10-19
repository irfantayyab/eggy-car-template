import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";
import { HomePageSectionData } from "@/types/homepage-section-data";

function Instructions() {
 const { title, content } = useTranslations().raw("Homepage.instructions") as HomePageSectionData;

 return (
  <>
   <section>
    <SectionTitle id="instructions" title={title} />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default Instructions;
