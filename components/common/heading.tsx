import React from "react";

function Heading({ children }: { children: React.ReactNode }) {
 return <h1 className="mb-[34px] text-[42px] leading-[50.4px]">{children}</h1>;
}

export default Heading;
