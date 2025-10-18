import React from "react";

function SectionTitle({ title, id }: { title: string; id: string }) {
 return (
  <>
   <header id={id} className="bg-primary mb-5 px-4 text-center text-[30px] font-bold">
    {title}
   </header>
  </>
 );
}

export default SectionTitle;
