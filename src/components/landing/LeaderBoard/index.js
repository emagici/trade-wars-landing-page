import React, { useState } from "react";
import { tabs } from "./utils";
import { Top3Players, TopPlayersList } from "../../";

export function LeaderBoard() {
  const [selectedTab, setTab] = useState(tabs[0]);
  return (
    <div className="w-1/3">
      <div className="bg-[#211C16] flex justify-center py-2">
        <h1 className="text-[20px] text-center">Leaderboard</h1>
      </div>
      <div className="bg-[#A38953] px-6 pt-2 flex justify-between">
        {tabs.map((tab, index) => (
          <div
            className={`${
              tab === selectedTab
                ? "text-[#1C1508] pb-2 border-b-2 border-[#1C1508]"
                : "text-[#E8E1D4]"
            } cursor-pointer`}
            onClick={() => setTab(tab)}
            key={index}
          >
            <h2 className="text-[15px]">{tab}</h2>
          </div>
        ))}
      </div>
      <div className="bg-[#A38953] bg-opacity-40 flex flex-col ">
        <Top3Players />
        <TopPlayersList />
      </div>
    </div>
  );
}
