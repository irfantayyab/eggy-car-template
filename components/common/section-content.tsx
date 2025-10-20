import { cn } from "@/lib/utils";
import { ContentItem } from "@/types/common";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Minus, Plus } from "lucide-react";
import { parseRichText } from "@/lib/parse-rich-text";

function SectionContent({ content }: { content: ContentItem[] }) {
 return (
  <>
   <main>
    {content.map((block, i, arr) => {
     const isNextNewLine = arr[i + 1]?.type === "new-line";

     if (block.type === "paragraph") {
      return (
       <p key={i} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
        {parseRichText(block.text, block.inlines)}
       </p>
      );
     } else if (block.type === "new-line") {
      return (
       <p key={i} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
        {parseRichText(block.text, block.inlines)}
       </p>
      );
     } else if (block.type === "image") {
      const caption = block.caption;

      return (
       <figure key={i}>
        <img src={block.src} className={cn("mx-auto block w-[950px]", !caption ? "mb-[25.5px]" : "")} />
        {caption && (
         <figcaption className="mt-[6.5px] mb-[13px] text-center text-[13px]">{caption}</figcaption>
        )}
       </figure>
      );
     } else if (block.type === "accordion-1") {
      return (
       <Accordion
        key={i}
        type="single"
        collapsible
        className="gradient-box-shadow mb-[25.5px] w-full rounded-tl-[50px] rounded-br-[50px] p-6"
       >
        {block.items.map((item, j) => (
         <AccordionItem key={j} value={`item-${j + 1}`}>
          <AccordionTrigger className="p-0 text-[18.7px] font-bold">{item.title}</AccordionTrigger>
          <AccordionContent className="mt-6 flex flex-col gap-4 p-0 text-[17px] font-light text-balance">
           {Array.isArray(item.content) ? (
            item.content.map((contentItem, k) => {
             if (contentItem.type === "list") {
              return (
               <ul key={k} className="list-disc pl-[1.75em] leading-[1.5] underline">
                {contentItem.listItems.map((li, l) => {
                 return (
                  <li key={l}>
                   <a href={li.href || "#"}>{parseRichText(li.text, li.inlines)}</a>
                   {li.sublist && (
                    <ul className="ml-[1.5em] list-disc">
                     {li.sublist.map((sli, m) => {
                      return (
                       <li key={m}>
                        <a href={sli.href || "#"}>{parseRichText(sli.text, sli.inlines)}</a>
                       </li>
                      );
                     })}
                    </ul>
                   )}
                  </li>
                 );
                })}
               </ul>
              );
             }
             return null;
            })
           ) : (
            <p>{item.content}</p>
           )}
          </AccordionContent>
         </AccordionItem>
        ))}
       </Accordion>
      );
     } else if (block.type === "accordion-2") {
      return (
       <Accordion
        key={i}
        type="multiple"
        className="mb-[15px] flex w-full flex-col gap-[15px] rounded-tl-[50px] rounded-br-[50px]"
       >
        {block.items.map((item, j) => {
         return (
          <AccordionItem
           key={j}
           value={`item-${j + 1}`}
           className="overflow-hidden rounded-[6px] border border-[#bcb6b638]"
          >
           <AccordionTrigger
            className="bg-primary text-primary-foreground rounded-none p-0 px-[22px] py-[13px] text-[17px] font-light"
            icon={
             <>
              <Plus id="svg-1" />
              <Minus id="svg-2" />
             </>
            }
           >
            {item.title}
           </AccordionTrigger>
           <AccordionContent className="flex flex-col gap-4 px-[22px] py-[13px] text-[17px] font-light text-balance">
            <p className="mb-1">{item.content as string}</p>
           </AccordionContent>
          </AccordionItem>
         );
        })}
       </Accordion>
      );
     } else if (block.type === "subsection") {
      return (
       <React.Fragment key={i}>
        <h3 id={block.id} className="mb-5 text-[30px] leading-[50.4px]">
         {block.title}
        </h3>
        {block.content.map((subBlock, j, arrJ) => {
         const isNextNewLine = arrJ[j + 1]?.type === "new-line";

         if (subBlock.type === "paragraph") {
          return (
           <p key={j} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
            {parseRichText(subBlock.text, subBlock.inlines)}
           </p>
          );
         } else if (subBlock.type === "new-line") {
          return (
           <p key={j} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
            {parseRichText(subBlock.text, subBlock.inlines)}
           </p>
          );
         }
         return null;
        })}
       </React.Fragment>
      );
     } else if (block.type === "list") {
      return (
       <ul key={i} className="mb-[25.5px] list-disc pl-[3em] leading-[1.5]">
        {block.listItems.map((li, j) => {
         return <li key={j}>{parseRichText(li.text, li.inlines)}</li>;
        })}
       </ul>
      );
     }
     return null;
    })}
   </main>
  </>
 );
}

export default SectionContent;
