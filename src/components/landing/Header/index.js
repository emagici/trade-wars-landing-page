import React from "react";
import { Logo } from "../../";

export function Header() {
  return (
    <div className="bg-[#222C2E] py-2 px-10 flex justify-center items-center">
      {/* <div /> */}
      <Logo />
      {/* <button className="text-[#BAA67E] border border-[#B9A18A] px-2 py-3 text-xs">
        LET'S PLAY
      </button> */}
    </div>
  );
}
