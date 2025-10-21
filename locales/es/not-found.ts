import { LocaleContent, Section } from "@/types/common";

export const intro: Section = {
 id: "not-found",
 title: "Oops! That page can’t be found.",
 content: [
  {
   type: "paragraph",
   text: "It looks like nothing was found at this location. Maybe try searching?",
  },
 ],
};

const es = {
 intro,
} as const satisfies LocaleContent;

export default es;
