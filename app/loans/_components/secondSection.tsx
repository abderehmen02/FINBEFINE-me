import { DropDownIcon } from "@/icons/dropDown";
import { RublIcon } from "@/icons/rubel";
import React, { JSX } from "react";

type CardInfo = {
  title: string;
  value: string | JSX.Element;
};

const FirstCard: React.FC = () => {
  return (
    <div className="flex lightShadow  rounded-[5px] relative flex-col w-full loansSecondSectionCard  justify-center p-3">
      <h3 className="text-[#B8B8B8] text-[12px]">Сумма</h3>
      <p className="text-text">
        500 000{" "}
        <div className="inline-flex">
          <RublIcon />
        </div>
      </p>
      <div className="w-full left-0 absolute bottom-0 h-0.5  bg-[#DEDEDE]">
        <div className="bg-[#5279F4] w-[60%] h-full  top-0 left-0  absolute  rounded-full "></div>
        <div className="w-2 h-2 rounded-full items-center justify-center top-1/2 -translate-y-1/2 lightShadow  absolute left-[59%]  bg-white flex ">
          <div className="bg-[#5279F4] w-1 h-1  rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

const SecondCard: React.FC = () => {
  return (
    <div className="flex gap-2 w-full  lightShadow rounded-[5px] justify-between  loansSecondSectionCard  items-center  p-3">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#B8B8B8] text-[12px]">Срок в годах</h3>
        <p className="text-text">5</p>
      </div>
      <div className="flex gap-4 h-full items-center px-4">
        <div className="h-full bg-[#B8B8B8] w-px"></div>
        <DropDownIcon />
      </div>
    </div>
  );
};

const ThirdCard: React.FC = () => {
  return (
    <div className="flex gap-2 w-full  lightShadow rounded-[5px] justify-between  loansSecondSectionCard  items-center  p-3">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#B8B8B8] text-[12px]">Цель</h3>
        <p className="text-text">Деньги на любые цели</p>
      </div>
      <div className="flex gap-4 h-full items-center px-4">
        <DropDownIcon />
      </div>
    </div>
  );
};

export const SecondSection = () => {
  return (
    <div className="flex gap-1.5 py-12">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <button className="bg-primary w-full max-w-[225px] h-[70px] text-white  rounded-[5px]">
        Подобрать
      </button>
    </div>
  );
};
