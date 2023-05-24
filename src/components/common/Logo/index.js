import React from "react";
import LogoIcon from "../../../assets/logo.png";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={LogoIcon} alt="logo" />
      <h1 className="text-[#A38953] text-base">Trade wars</h1>
    </div>
  );
}
