import React from "react";
import Intro from "./intro";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
 return routing.locales.map(locale => ({
  locale: locale,
 }));
}

function AboutUs() {
 return (
  <>
   <Intro />
  </>
 );
}

export default AboutUs;
