import React from "react";

function SectionTitle({ title, id }: { title: string; id: string }) {
 return (
  <>
   <header id={id} className="bg-primary text-primary-foreground mb-5 px-4 text-center text-[30px] font-bold">
    <h2>{title}</h2>
   </header>
  </>
 );
}

export default SectionTitle;
