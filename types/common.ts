// Type definitions for content structure
export type Inlines = {
 [key: string]:
  | {
     type: "link";
     href: string;
     className?: string;
    }
  | {
     type: "span";
     className?: string;
    };
};

export type ParagraphContent = {
 type: "paragraph";
 text: string;
 inlines?: Inlines;
};

export type NewLineContent = {
 type: "new-line";
 text: string;
 inlines?: Inlines;
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
 inlines?: Inlines;
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

export type LinkContent = {
 type: "link";
 href: string;
 text: string;
};

export type ContentItem =
 | ParagraphContent
 | NewLineContent
 | ImageContent
 | ListContent
 | AccordionContent
 | FAQContent
 | SubsectionContent
 | LinkContent;

export type Section = {
 id?: string;
 title: string;
 content: ContentItem[];
};

export type LocaleContent = {
 [key: string]: Section;
};
