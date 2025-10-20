import { useTranslations } from "next-intl";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionContent from "@/components/common/section-content";
import Rating from "@/components/homepage/rating";

function Conclusion() {
 const { id, title, content } = useTranslations().raw("Homepage.conclusion");

 return (
  <>
   <section>
    <SectionTitle id={id} title={title} />
    <SectionContent content={content} />
    <Rating />
   </section>
  </>
 );
}

export default Conclusion;
