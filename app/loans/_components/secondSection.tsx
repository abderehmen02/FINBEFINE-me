import { DropDownIcon } from "@/icons/dropDown";
import { RublIcon } from "@/icons/rubel";
import React, { JSX } from "react";

type CardInfo = {
  title: string;
  value: string | JSX.Element;
};

const FirstCard: React.FC = () => {
  return (
    <div className="flex flex-col w-full loansSecondSectionCard  items-center justify-center p-3">
      <h3 className="text-[#B8B8B8] text-[12px]">Сумма</h3>
      <p className="text-text">
        500 000 <RublIcon />
      </p>
      <div className="w-full h-1 relative bg-[#DEDEDE]">
        <div className="absolute h-full top-0 left-0 w-[60%] "></div>
        <div className="w-2 h-2 rounded-full  bg-white flex items-center justify-center">
          <div className="bg-[#5279F4] w-1 h-1 rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

const SecondCard: React.FC = () => {
  return (
    <div className="flex gap-2 w-full loansSecondSectionCard  items-center justify-center p-3">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#B8B8B8] text-[12px]">Срок в годах</h3>
        <p className="text-text">5</p>
      </div>
      <div className="h-full bg-[#B8B8B8] w-px"></div>
      <DropDownIcon />
    </div>
  );
};

const ThirdCard: React.FC = () => {
  return (
    <div className="flex gap-2 w-full loansSecondSectionCard  items-center justify-center p-3">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#B8B8B8] text-[12px]">Цель</h3>
        <p className="text-text">Деньги на любые цели</p>
      </div>
      <div className="h-full bg-[#B8B8B8] w-px"></div>
      <DropDownIcon />
    </div>
  );
};

export const SecondSection = () => {
  return (
    <div className="flex gap-1.5">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  );
};
