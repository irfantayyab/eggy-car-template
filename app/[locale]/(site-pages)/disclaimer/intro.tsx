import { useTranslations } from "next-intl";
import React from "react";
import SectionContent from "@/components/common/section-content";
import Heading from "@/components/common/heading";

function Intro() {
 const { title, content } = useTranslations().raw("Disclaimer.intro");

 return (
  <>
   <section>
    <Heading>{title}</Heading>
    <SectionContent content={content} />
   </section>
  </>
 );
}

export default Intro;
