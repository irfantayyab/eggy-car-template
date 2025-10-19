import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";

function HowToPlay() {
 const { id, title, content } = useTranslations().raw("Homepage.howToPlay");

 return (
  <>
   <section>
    <SectionTitle id={id} title={title} />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default HowToPlay;
