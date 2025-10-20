import { useTranslations } from "next-intl";
import React from "react";
import SectionContent from "@/components/common/section-content";
import Heading from "@/components/common/heading";
import GameIFrame from "@/components/homepage/game-iframe";
import RatingView from "@/components/homepage/rating-view";

function Intro() {
 const { title, content } = useTranslations().raw("Homepage.intro");

 return (
  <>
   <section>
    <Heading>{title}</Heading>
    <RatingView />
    <GameIFrame />
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default Intro;
