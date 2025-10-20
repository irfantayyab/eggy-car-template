import React from "react";
import { Link } from "@/i18n/routing";
import { Inlines } from "@/types/common";
import { cn } from "./utils";

export function parseRichText(text: string, inlines?: Inlines) {
 const parts: React.ReactNode[] = [];
 const regex = /<(\d+)>(.*?)<\1>/g;
 let lastIndex = 0;
 let match: RegExpExecArray | null;

 while ((match = regex.exec(text)) !== null) {
  const [full, id, content] = match;
  const index = match.index;

  // Push plain text before the match
  if (index > lastIndex) parts.push(text.slice(lastIndex, index));

  const inline = inlines?.[id];
  if (inline?.type === "link" && inline.href) {
   parts.push(
    <Link
     key={id + content}
     href={inline.href}
     className={cn("text-link font-bold underline", inline.className)}
    >
     {content}
    </Link>,
   );
  } else if (inline?.type === "span") {
   parts.push(
    <span key={id + content} className={cn(inline.className)}>
     {content}
    </span>,
   );
  } else {
   parts.push(content);
  }

  lastIndex = index + full.length;
 }

 // Add remaining text
 if (lastIndex < text.length) parts.push(text.slice(lastIndex));

 return parts;
}
