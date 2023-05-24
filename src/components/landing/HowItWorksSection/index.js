import React from "react";
import KnightStandingImage from "../../../assets/knight_standing.png";
import SwordImage from "../../../assets/sword.png";
import GMXLogoIcon from "../../../assets/gmx_logo.png";

const Item = ({ children }) => {
  return (
    <div className="flex gap-4 justify-start items-start">
      <img src={SwordImage} alt="sword" />
      <p className="text-base text-[#D1C4A9] leading-6">{children}</p>
    </div>
  );
};

export function HowItWorksSection() {
  return (
    <div className="flex w-2/3 bg-[#111617] bg-opacity-80 items-center px-14 pt-20 ">
      <div className="w-1/4 h-full relative">
        <img
          src={KnightStandingImage}
          className="absolute -left-28 bottom-0"
          alt="knight_standing"
        />
      </div>
      <div className="w-3/4 flex flex-col gap-6 pb-14">
        <h1 className="text-[#D1C4A9]">how it works</h1>
        <Item>First, create an account and deposit funds into the wallet.</Item>
        <Item>Enter a match against other players or teams.</Item>
        <Item>
          Users place trades in real time and track their progress on the
          leaderboard.
        </Item>
        <Item>The match ends after a specified time period</Item>
        <Item>
          The user or team with the highest profit and loss (PnL) percentage
          wins the game and earns the loser's wager.{" "}
        </Item>
        <Item>
          The earnings are then deposited into the user's Trade Wars wallet,
          which can be withdrawn at any time. With a simple and intuitive
          interface.
        </Item>
        <Item>
          Trade Wars makes it easy for users to compete in high-stakes trading
          games and earn real prizes.
        </Item>
        <div className="flex items-center gap-2">
          <p className="text-base">Built on top of</p>
          <img src={GMXLogoIcon} width={70} height={18} alt="GMX Logo" />
        </div>
      </div>
    </div>
  );
}
