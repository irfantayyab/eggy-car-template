import { Section } from "@/types/common";

export const intro: Section = {
 id: "about-us",
 title: "About Us",
 content: [
  {
   type: "paragraph",
   text:
    "Welcome to the Official <1>Eggy Car<1> Website! This is the official site for Eggy Car. We fully comply with all Google AdSense policies. Additional details and updates will be provided soon in accordance with Google’s guidelines.",
   inlines: {
    "1": {
     type: "link",
     href: "/",
    },
   },
  },
 ],
};
