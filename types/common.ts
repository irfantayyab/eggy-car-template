// Type definitions for content structure
export type ParagraphContent = {
 type: "paragraph";
 text: string;
};

export type NewLineContent = {
 type: "new-line";
 text: string;
};

export type ImageContent = {
 type: "image";
 src: string;
 caption?: string;
};

export type ListItem = {
 text: string;
 href?: string;
 sublist?: ListItem[];
};

export type ListContent = {
 type: "list";
 listItems: ListItem[];
};

export type AccordionItem = {
 title: string;
 content: string | ContentItem[];
};

export type AccordionContent = {
 type: "accordion-1" | "accordion-2";
 items: AccordionItem[];
};

export type FAQItem = {
 title: string;
 content: string;
};

export type FAQContent = {
 type: "faq";
 items: FAQItem[];
};

export type SubsectionContent = {
 type: "subsection";
 id: string;
 title: string;
 content: ContentItem[];
};

export type ContentItem =
 | ParagraphContent
 | NewLineContent
 | ImageContent
 | ListContent
 | AccordionContent
 | FAQContent
 | SubsectionContent;

export type Section = {
 id?: string;
 title: string;
 content: ContentItem[];
};

export type LocaleContent = {
 [key: string]: Section;
};
