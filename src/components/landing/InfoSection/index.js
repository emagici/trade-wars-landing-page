import React from "react";

const InfoCard = ({ value, title }) => {
  return (
    <div className="bg-gradient-to-b w-full from-[#A78A6D] to-transparent p-[1px]">
      <div className="bg-[#222C2E] py-4 flex justify-center flex-col items-center">
        <h1 className="text-shadow-lg text-[32px] shadow-[#49838F]">{value}</h1>
        <h1 className="text-[#E8E1D4] text-base">{title}</h1>
      </div>
    </div>
  );
};

export function InfoSection() {
  return (
    <div className="flex justify-between gap-2">
      <InfoCard value={3} title="Games" />
      <InfoCard value="1300+" title="Twitter followers" />
      <InfoCard value="6000+" title="Registered players" />
    </div>
  );
}
