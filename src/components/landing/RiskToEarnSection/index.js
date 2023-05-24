import React from "react";
import RiskToEarnImage from "../../../assets/risk_to_earn.png";

export function RiskToEarnSection() {
  return (
    <div className="bg-[#111617] bg-opacity-80 flex items-center gap-12 px-14">
      <img src={RiskToEarnImage} alt="risk_to_earn" />
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-[#D1C4A9] text-[32px]">risk-to-earn</h1>
        <br />
        <p className="text-base leading-6">
          Players deserve to earn based on their own merits. Trade Wars rewards{" "}
          <br />
          players for their skill and dedication to the game.
          <br />
          <br /> Risk to Earn provides the solution for this without attempting
          to artificially <br /> create value from thin air.
        </p>
        <br />
        <button className="flex flex-col items-center justify-center text-[#BAA67E] border border-[#B9A18A] px-4 py-3 text-xs">
          LET'S PLAY
          <h1 className="text-[#99A7AB] text-[8px]">(Free)</h1>
        </button>
      </div>
    </div>
  );
}
