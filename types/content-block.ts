export type ContentBlock =
 | {
    type: "paragraph" | "new-line";
    text: string;
   }
 | {
    type: "image";
    src: string;
    caption?: string;
   };
