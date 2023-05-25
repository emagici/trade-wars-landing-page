import React, { useEffect, useState } from "react";

import GMXLogoIcon from "../../../assets/gmx_logo.png";
import { Socials } from "../../common";

import "./index.css";

export function HeroSection() {
  return (
    <div className="animate-wiggle grow bg-no-repeat bg-cover relative w-full h-full flex justify-center">
      <div className="flex flex-col mix-blend-multiply w-[673px] h-[354px] items-center bg-[#222C2E] shadow-sm bg-opacity-90 absolute bottom-0 shadow-[#076A80] border border-[#778A8F] py-7 px-[107px]"></div>
      <div className="flex flex-col items-center absolute bottom-4 gap-4">
        <h1 className="text-[32px] text-center text-shadow shadow-[#BD3A02] w-[450px]">
          a PvP,
          <p className="glitch">
            <span aria-hidden="true">risk-to-earn</span>
            risk-to-earn
            <span aria-hidden="true">risk-to-earn</span>
          </p>
          <br /> trading game{" "}
        </h1>
        <h6 className="text-base font-bold">built on top of</h6>
        <img src={GMXLogoIcon} alt="GMX Logo" />
        <Socials />
        <h1 className="text-shadow shadow-[#BD3A02] ">coming soon!</h1>
      </div>
    </div>
  );
}
