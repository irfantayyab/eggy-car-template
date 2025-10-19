import { cn } from "@/lib/utils";
import { ContentBlock } from "@/types/content-block";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Link } from "@/i18n/routing";

function SectionContent({ content }: { content: ContentBlock[] }) {
 return (
  <>
   <main>
    {content.map((block, i, arr) => {
     const isNextNewLine = arr[i + 1]?.type === "new-line";

     if (block.type === "paragraph") {
      return (
       <p key={i} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
        {block.text}
       </p>
      );
     } else if (block.type === "new-line") {
      return (
       <p key={i} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
        {block.text}
       </p>
      );
     } else if (block.type === "image") {
      return (
       <figure key={i}>
        <img src={block.src} className="mx-auto mb-[25.5px] block w-[950px]" />
        {block.caption && <figcaption>{block.caption}</figcaption>}
       </figure>
      );
     } else if (block.type === "accordion") {
      return (
       <Accordion
        key={i}
        type="single"
        collapsible
        className="gradient-box-shadow mb-[25.5px] w-full rounded-tl-[50px] rounded-br-[50px] p-6"
        defaultValue="item-1"
       >
        <AccordionItem value="item-1">
         <AccordionTrigger className="p-0 text-[18.7px] font-bold">{block.title}</AccordionTrigger>
         <AccordionContent className="mt-6 flex flex-col gap-4 text-[17px] font-light text-balance">
          <ul className="list-disc pl-[1.75em] leading-[1.5] underline">
           {block.list.map((li, j) => {
            return (
             <li key={j}>
              <Link href={li.href}>{li.text}</Link>
              {li.sublist && (
               <ul className="ml-[1.5em] list-disc">
                {li.sublist.map((sli, k) => {
                 return (
                  <li key={k}>
                   <Link href={sli.href}>{sli.text}</Link>
                  </li>
                 );
                })}
               </ul>
              )}
             </li>
            );
           })}
          </ul>
         </AccordionContent>
        </AccordionItem>
       </Accordion>
      );
     } else if (block.type === "subsection") {
      return (
       <React.Fragment key={i}>
        <h3 className="mb-5 text-[30px] leading-[50.4px]">{block.title}</h3>
        {block.content.map((subBlock, j, arrJ) => {
         const isNextNewLine = arrJ[j + 1]?.type === "new-line";
         if (subBlock.type === "paragraph") {
          return (
           <p key={j} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
            {subBlock.text}
           </p>
          );
         } else if (subBlock.type === "new-line") {
          return (
           <p key={j} className={cn(!isNextNewLine ? "mb-[25.5px]" : "")}>
            {subBlock.text}
           </p>
          );
         }
        })}
       </React.Fragment>
      );
     } else if (block.type === "list") {
      return (
       <ul key={i} className="mb-[25.5px] list-disc pl-[3em] leading-[1.5]">
        {block.content.map((li, j) => {
         return <li key={j}>{li.text}</li>;
        })}
       </ul>
      );
     }
    })}
   </main>
  </>
 );
}

export default SectionContent;
