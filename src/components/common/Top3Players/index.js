import React from "react";
import Rank1Image from "../../../assets/rank_1_rect.png";
import Rank2Image from "../../../assets/rank_2_rect.png";
import Rank3Image from "../../../assets/rank_3_rect.png";
import CrownImage from "../../../assets/crown.png";
import { topPlayers } from "./utils";

export function Top3Players() {
  return (
    <div className="flex items-end px-10 pt-28 py-3">
      <div className="bg-[#211C16] bg-opacity-90 p-4 w-full flex flex-col items-center gap-2 relative">
        <div className="absolute -top-14">
          <div className="rounded-full border-[3px] border-[#A78A6D] flex justify-center relative">
            <img
              src={topPlayers[1].avatar}
              alt={topPlayers[1].name}
              width={68}
              height={68}
            />
            <img
              src={Rank2Image}
              alt="rank_2_rect"
              className="absolute -bottom-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center pt-8">
          <h2 className="text-xs">{topPlayers[1].name}</h2>
          <p className="text-[#A78A6D] text-[15px]">{topPlayers[1].score}</p>
          <p className=" text-[12px]">{topPlayers[1].username}</p>
        </div>
      </div>
      <div className="bg-[#8C6B28] bg-opacity-90 p-4 w-full flex flex-col items-center gap-2 relative">
        <div className="absolute -top-16">
          <div
            className="rounded-full border-[3px] border-[#A78A6D] flex justify-center relative drop-shadow"
            style={{ filter: "drop-shadow(0px 4px 20px #CD6700)" }}
          >
            <img
              src={CrownImage}
              alt="rank_2_rect"
              className="absolute -top-7 drop-shadow"
            />
            <img
              src={topPlayers[0].avatar}
              alt={topPlayers[0].name}
              width={82}
              height={82}
            />
            <img
              src={Rank1Image}
              alt="rank_2_rect"
              className="absolute -bottom-4 drop-shadow"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center pt-8">
          <h2 className="text-xs">{topPlayers[2].name}</h2>
          <p className=" text-[15px]">{topPlayers[2].score}</p>
          <p className=" text-[12px]">{topPlayers[2].username}</p>
        </div>
      </div>
      <div className="bg-[#211C16] bg-opacity-90 p-4 w-full flex flex-col items-center gap-2 relative">
        <div className="absolute -top-14">
          <div className="rounded-full border-[3px] border-[#A78A6D] flex justify-center relative">
            <img
              src={topPlayers[2].avatar}
              alt={topPlayers[2].name}
              width={68}
              height={68}
            />
            <img
              src={Rank3Image}
              alt="rank_2_rect"
              className="absolute -bottom-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center pt-8">
          <h2 className="text-xs">{topPlayers[2].name}</h2>
          <p className="text-[#A78A6D] text-[15px]">{topPlayers[2].score}</p>
          <p className=" text-[12px]">{topPlayers[2].username}</p>
        </div>
      </div>
    </div>
  );
}
