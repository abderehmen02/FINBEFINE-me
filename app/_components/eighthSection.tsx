"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FifthLogo,
  FirstLogo,
  FourthLogo,
  SecondLogo,
  SixthLogo,
  ThirdLogo,
} from "@/icons/eigthSection";

import { cn } from "@/lib/tailwind";
import { useState } from "react";

export interface RowInfo {
  flag: string;
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
}

const banksLogos = [
  <FirstLogo />,
  <SecondLogo />,
  <ThirdLogo />,
  <FourthLogo />,
  <FifthLogo />,
  <SixthLogo />,
];

const tabsData: { tab: string; items: RowInfo[] }[] = [
  {
    tab: "Кредиты",
    items: [
      {
        firstColumn: "Почта банк",
        secondColumn: "до 6.5 млн",
        thirdColumn: "11.9 - 35.9%",
        flag: "/home/red-blue-flag.png",
      },
      {
        firstColumn: "Банк ВТБ",
        secondColumn: "до 40 млн",
        thirdColumn: "18.3 - 47%",
        flag: "/home/blue-flag.png",
      },

      {
        firstColumn: "Paylate МКК Кредит Лайн",
        secondColumn: "до 250 тыс",
        thirdColumn: "0.1 - 292%",
        flag: "/home/red-circle-flag.png",
      },

      {
        firstColumn: "Газпромбанк",
        secondColumn: "до 30 млн",
        thirdColumn: "13.4 - 41.1%      ",
        flag: "/home/pink-flag.png",
      },

      {
        firstColumn: "Альфа-Банк",
        secondColumn: "до 30 млн",
        thirdColumn: "0.01 - 56.99%",
        flag: "/home/red-flag.png",
      },
    ],
  },
  { tab: "Вклады", items: [] },
  { tab: "Ипотека", items: [] },
  { tab: "Кредитные карты", items: [] },
  { tab: "Дебетовые карты", items: [] },
];

const Row: React.FC<RowInfo> = ({
  firstColumn,
  flag,
  secondColumn,
  thirdColumn,
}) => {
  return (
    <div className="flex w-full flex-1 justify-between py-3 border-b border-b-[#EEEEEE]">
      <div className="flex flex-1 gap-2 items-center">
        <img src={flag} className="w-[30px] h-[30px]" />
        <p className="font-medium leading-[26px]">{firstColumn}</p>
      </div>
      <div className="flex flex-1">
        <p className="font-medium leading-[26px]">{secondColumn}</p>
      </div>
      <div className="flex flex-1">
        <p className="font-medium leading-[26px]">{thirdColumn}</p>
      </div>
    </div>
  );
};

const EigthSectionTabel: React.FC<{ rows: RowInfo[] }> = ({ rows }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-between py-3 border-b border-b-[#EEEEEE]">
        <div className="flex flex-1">
          <p className="text-sm text-[#6C6C6C] leading-[26px]">Банк</p>
        </div>
        <div className="flex flex-1">
          <p className="text-sm text-[#6C6C6C] leading-[26px]">Сумма кредита</p>
        </div>
        <div className="flex flex-1">
          <p className="text-sm text-[#6C6C6C] leading-[26px]">Ставка</p>
        </div>
      </div>
      {rows.map((row) => (
        <Row {...row} />
      ))}
      <div className="flex w-full py-2 justify-between">
        <p className="text-primary">Смотреть все предложения по кредитам</p>
        <p className="text-sm text-[#6C6C6C]">Обновлено 16.05.2025</p>
      </div>
    </div>
  );
};

const BanksSection = () => {
  return (
    <div className="flex flex-col  px-5 py-2 lightShadow  shadow-2xl">
      <h3 className="font-semibold py-3 text-[24px]    ">
        Все банки в <span className="text-primary">Москве</span>
      </h3>
      <Input
        className="w-full h-[45px]  lightShadow "
        placeholder="Введите название банка"
      />
      <div className="flex flex-wrap gap-3 py-3 max-w-[400px] w-full">
        {banksLogos.map((logo) => (
          <div className="w-[194px] lightShadow flex items-center justify-center h-[84px] ">
            {logo}
          </div>
        ))}
      </div>
      <p className="text-primary text-[14px]">Смотреть все банки</p>
    </div>
  );
};

export const EigthSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);

  return (
    <div className="flex flex-col  gap-5">
      <h3 className="text-[24px] font-semibold">
        Лучшие условия по продуктам в банках Москвы
      </h3>
      <div className="flex gap-2">
        <div className="lightShadow rounded-[10px]  w-[922px] px-5 py-2 ">
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
            <EigthSectionTabel
              rows={
                tabsData.find((tab) => tab.tab === selectedTab)
                  ?.items as RowInfo[]
              }
            />
          </div>
        </div>
        <BanksSection />
      </div>
    </div>
  );
};
