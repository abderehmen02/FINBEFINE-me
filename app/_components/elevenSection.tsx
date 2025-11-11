"use client";
import { LeftArrow, RightArrow } from "@/icons/arrows";

import { cn } from "@/lib/tailwind";
import { useState } from "react";

const FirstTabUI = () => {
  return (
    <div className="flex gap-3 p-3 justify-between  py-6 lightShadow w-full">
      <div className="flex flex-col   max-w-[496px] px-9 gap-2.5">
        <h3 className="text-[32px] text-text font-semibold">Лента новостей</h3>
        <p className="text-xl text-text">
          Кто рискует остаться без пенсии: разъяснения юриста.
        </p>
        <div className="flex gap-3.5 ">
          <h5 className="text-primary text-xs">Рубрика 1</h5>
          <div className="w-px h-full bg-[#6C6C6C]"></div>
          <p className="text-[#6C6C6C] font-medium text-xs">15.05.2025</p>
          <div className="w-px h-full bg-[#6C6C6C]"></div>
          <p className="text-[#6C6C6C] font-medium text-xs">22:05</p>
        </div>
        <p className="font-semibold">
          Несмотря на то что право на страховую пенсию закреплено Федеральным
          законом, для ее получения необходимо выполнить ряд условий. Об этом
          рассказывает «РГ» со ссылкой на юриста Илью Русяева.
        </p>
        <p className="text-primary font-semibold">Читать полностью</p>
        <img
          src="/old-man.png"
          className="w-[491px] h-[209px] rounded-[10px]"
        />
      </div>
      <div className="bg-[#D8D8D8] w-px h-full"></div>
      <div className="flex max-w-[358px] px-3.5  ">
        <div className="flex flex-col gap-3.5 px-3 py-4">
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold leading-[26px] underline ">
              Кто рискует остаться без пенсии: разъяснения юриста.
            </h3>
            <div className="flex py-3 gap-1.5 border-b border-b-[#D8D8D8]">
              <p className="text-primary  font-semibold text-xs">Рубрика 1</p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C]  font-semibold text-xs">
                15.05.2025
              </p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C] font-semibold text-xs">22:05</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold leading-[26px] underline ">
              Кто рискует остаться без пенсии: разъяснения юриста.
            </h3>
            <div className="flex py-3 gap-1.5 border-b  border-b-[#D8D8D8]">
              <p className="text-primary  font-semibold text-xs">Рубрика 1</p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C]  font-semibold text-xs">
                15.05.2025
              </p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C] font-semibold text-xs">22:05</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold leading-[26px] underline ">
              Кто рискует остаться без пенсии: разъяснения юриста.
            </h3>
            <div className="flex py-3 gap-1.5 border-b  border-b-[#D8D8D8]">
              <p className="text-primary  font-semibold text-xs">Рубрика 1</p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C]  font-semibold text-xs">
                15.05.2025
              </p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C] font-semibold text-xs">22:05</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold leading-[26px] underline ">
              Кто рискует остаться без пенсии: разъяснения юриста.
            </h3>
            <div className="flex py-3 gap-1.5 ">
              <p className="text-primary  font-semibold text-xs">Рубрика 1</p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C]  font-semibold text-xs">
                15.05.2025
              </p>
              <div className="bg-[#6C6C6C] w-px h-full "></div>
              <p className="text-[#6C6C6C] font-semibold text-xs">22:05</p>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-col w-[300px] h-full items-center justify-center">
        <div className="w-full h-[420px] relative">
          <div className="bg-[#5279F4] absolute top-0 left-1/2 -translate-x-1/2 opacity-50 w-[231px] h-[296px] rounded-[10px] "></div>
          <div className="bg-[#5279F4] absolute top-4 left-1/2 -translate-x-1/2  w-[264px] h-[296px] rounded-[10px] "></div>
          <img
            src="/old-woman.png"
            className="w-full h-[383px] absolute top-8 left-1/2 -translate-x-1/2 rounded-[10px]"
          />
        </div>
        <div className="flex py-4 w-full items-center justify-between">
          <LeftArrow />
          <div className="flex items-center gap-3">
            <h3>1</h3>
            <div className="bg-[#EFEFEF] w-[139px] h-1.5 relative">
              <div className="absolute bg-primary h-full left-0 w-[35%]"></div>
            </div>
            <h3>5</h3>
          </div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

const tabsData: { tab: string; item: React.ReactNode }[] = [
  {
    tab: "Сегодня",
    item: <FirstTabUI />,
  },
  { tab: "Рубрика 1", item: <></> },
  { tab: "Рубрика 2", item: <></> },
  { tab: "Рубрика 3", item: <></> },
  { tab: "Рубрика 4", item: <></> },
];

export const ElevenSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);

  return (
    <div className="flex flex-col py-14  gap-5">
      <h3 className="text-[24px] font-semibold">Новости в области финансов</h3>
      <div className="flex gap-2">
        <div className=" rounded-[10px]  w-full px-5 py-2 ">
          <div className="flex  w-full gap-2 py-6">
            {tabsData.map((tab) => (
              <div
                onClick={() => setSelectedTab(tab.tab)}
                className={cn(
                  "flex px-3  text-[#6C6C6C] py-2 border-b cursor-pointer font-semibold border-b-[#EEEEEE]",
                  {
                    "text-primary cursor-default border-b-primary border-b-2":
                      selectedTab === tab.tab,
                  }
                )}
              >
                {tab.tab}
              </div>
            ))}{" "}
          </div>
          <div className="flex gap-2">
            {tabsData.find((tab) => tab.tab === selectedTab)?.item}
          </div>
        </div>
      </div>
    </div>
  );
};
