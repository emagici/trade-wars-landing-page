import React from "react";
import GreenUpImage from "../../../assets/green_up.png";

export default function ListItem({ player }) {
  return (
    <div className="bg-[#211C16] flex justify-between py-2 px-4">
      <div className="flex gap-4">
        <img src={player.avatar} alt={player.name} />
        <div>
          <h2 className="text-base text-[#BAA67E]">{player.name}</h2>
          <p className="text-[#DCD0C5]">{player.username}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-white text-[12px] font-bold">{player.score}</p>
        <img src={GreenUpImage} alt="green" />
      </div>
    </div>
  );
}
