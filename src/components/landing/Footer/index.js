import React from "react";
import { Logo } from "../../";

export function Footer({ isFirst }) {
  return (
    <div className="bg-[#222C2E] py-2 px-10 flex justify-between items-center">
      <Logo />
      <p className="text-[#B9A18A] text-xs">All rights reserved 2023</p>
      {/* <Socials /> */}
    </div>
  );
}
