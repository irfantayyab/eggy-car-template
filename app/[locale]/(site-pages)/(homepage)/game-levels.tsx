import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";
import { HomePageSectionData } from "@/types/homepage-section-data";

function GameLevels() {
 const { title, content } = useTranslations().raw("Homepage.gameLevels") as HomePageSectionData;

 return (
  <>
   <section>
    <SectionTitle id="game-levels" title={title} />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default GameLevels;
