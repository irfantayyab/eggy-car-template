import { cn } from "@/lib/utils";
import { ContentBlock } from "@/types/content-block";
import React from "react";

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
     }
    })}
   </main>
  </>
 );
}

export default SectionContent;
