import { useTranslations } from "next-intl";
import React from "react";
import SectionContent from "@/components/common/section-content";
import { HomePageSectionData } from "@/types/homepage-section-data";
import Heading from "@/components/common/heading";
import GameIFrame from "@/components/homepage/game-iframe";

function Intro() {
 const { title, content } = useTranslations().raw("Homepage.intro") as HomePageSectionData;

 return (
  <>
   <section>
    <Heading>{title}</Heading>
    <GameIFrame />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default Intro;
