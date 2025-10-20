import { LocaleContent, Section } from "@/types/common";

export const intro: Section = {
 id: "not-found",
 title: "¡Vaya! No se puede encontrar esa página.",
 content: [
  {
   type: "paragraph",
   text: "Parece que no se encontró nada en esta ubicación. ¿Quizás probar con una búsqueda?",
  },
 ],
};

const es = {
 intro,
} as const satisfies LocaleContent;

export default es;
