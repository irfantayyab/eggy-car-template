import { Section } from "@/types/common";

export const intro: Section = {
 id: "disclaimer",
 title: "Disclaimer",
 content: [
  {
   type: "paragraph",
   text:
    "The information provided on <1>Eggy Car<1> and its official website (<2>eggycar.one<2>) is for general informational and entertainment purposes only. While we strive to keep all content accurate and up to date, we make no guarantees of completeness, reliability, or accuracy. Any action you take based on the information found on this website is strictly at your own risk.",
   inlines: {
    "1": {
     type: "span",
     className: "font-bold",
    },
    "2": {
     type: "link",
     href: "/",
    },
   },
  },
  {
   type: "paragraph",
   text:
    "<1>Eggy Car<1> is an independent fan and gaming website. All trademarks, logos, and game content belong to their respective owners. We do not claim ownership or partnership unless stated otherwise.",
   inlines: {
    "1": {
     type: "span",
     className: "font-bold",
    },
   },
  },
  {
   type: "paragraph",
   text:
    "By using our website, you agree that <1>Eggy Car<1> will not be held responsible for any losses or damages resulting from the use of our content or external links.",
   inlines: {
    "1": {
     type: "span",
     className: "font-bold",
    },
   },
  },
 ],
};
