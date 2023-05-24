import React from "react";
import { topPlayers } from "./utils";
import ListItem from "./ListItem";

export function TopPlayersList() {
  return (
    <div className="flex flex-col w-full gap-[1px]">
      {topPlayers.map((player, index) => (
        <ListItem player={player} key={index} />
      ))}
    </div>
  );
}
