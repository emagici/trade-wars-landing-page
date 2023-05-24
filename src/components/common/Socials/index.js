import React from "react";
import TwitterIcon from "../../../assets/svgs/twitter.svg";
// import DiscordIcon from "../../../assets/svgs/discord.svg";
import BookIcon from "../../../assets/svgs/gitbook.svg";

export function Socials() {
  return (
    <div className="flex items-center justify-center gap-4">
      <a href="https://twitter.com/TradeWars__" target="_blank"><img src={TwitterIcon} alt="twitter" className="cursor-pointer" /></a>
      <a href="https://docs.wars.trade" target="_blank"><img src={BookIcon} alt="book" className="cursor-pointer" /></a>
      {/* <img src={DiscordIcon} alt="discord" className="cursor-pointer" /> */}
    </div>
  );
}
