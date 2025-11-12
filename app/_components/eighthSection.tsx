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
import { useTranslations } from "next-intl";

export interface RowInfo {
  flag: string;
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
}

export const BankProductsSection = () => {
  const t = useTranslations("bankProductsSection");

  const banksLogos = [
    <FirstLogo key="1" />,
    <SecondLogo key="2" />,
    <ThirdLogo key="3" />,
    <FourthLogo key="4" />,
    <FifthLogo key="5" />,
    <SixthLogo key="6" />,
  ];

  const tabsData: { tab: string; items: RowInfo[] }[] = [
    {
      tab: t("tabs.loans"),
      items: [
        {
          firstColumn: t("rows.0.name"),
          secondColumn: t("rows.0.amount"),
          thirdColumn: t("rows.0.rate"),
          flag: "/home/red-blue-flag.png",
        },
        {
          firstColumn: t("rows.1.name"),
          secondColumn: t("rows.1.amount"),
          thirdColumn: t("rows.1.rate"),
          flag: "/home/blue-flag.png",
        },
        {
          firstColumn: t("rows.2.name"),
          secondColumn: t("rows.2.amount"),
          thirdColumn: t("rows.2.rate"),
          flag: "/home/red-circle-flag.png",
        },
        {
          firstColumn: t("rows.3.name"),
          secondColumn: t("rows.3.amount"),
          thirdColumn: t("rows.3.rate"),
          flag: "/home/pink-flag.png",
        },
        {
          firstColumn: t("rows.4.name"),
          secondColumn: t("rows.4.amount"),
          thirdColumn: t("rows.4.rate"),
          flag: "/home/red-flag.png",
        },
      ],
    },
    { tab: t("tabs.deposits"), items: [] },
    { tab: t("tabs.mortgage"), items: [] },
    { tab: t("tabs.creditCards"), items: [] },
    { tab: t("tabs.debitCards"), items: [] },
  ];

  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);

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

  const BankTable: React.FC<{ rows: RowInfo[] }> = ({ rows }) => {
    return (
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between py-3 border-b border-b-[#EEEEEE]">
          <div className="flex flex-1">
            <p className="text-sm text-[#6C6C6C] leading-[26px]">
              {t("table.bank")}
            </p>
          </div>
          <div className="flex flex-1">
            <p className="text-sm text-[#6C6C6C] leading-[26px]">
              {t("table.amount")}
            </p>
          </div>
          <div className="flex flex-1">
            <p className="text-sm text-[#6C6C6C] leading-[26px]">
              {t("table.rate")}
            </p>
          </div>
        </div>
        {rows.map((row, index) => (
          <Row key={index} {...row} />
        ))}
        <div className="flex w-full py-2 justify-between">
          <p className="text-primary">{t("table.viewAllOffers")}</p>
          <p className="text-sm text-[#6C6C6C]">{t("table.updated")}</p>
        </div>
      </div>
    );
  };

  const BanksSection = () => {
    return (
      <div className="flex flex-col px-5 py-2 lightShadow shadow-2xl">
        <h3 className="font-semibold py-3 text-[24px]">
          {t("banksSection.title")}{" "}
          <span className="text-primary">{t("banksSection.city")}</span>
        </h3>
        <Input
          className="w-full h-[45px] lightShadow"
          placeholder={t("banksSection.placeholder")}
        />
        <div className="flex flex-wrap gap-3 py-3 max-w-[400px] w-full">
          {banksLogos.map((logo, index) => (
            <div
              key={index}
              className="w-[194px] lightShadow flex items-center justify-center h-[84px]"
            >
              {logo}
            </div>
          ))}
        </div>
        <p className="text-primary text-[14px]">
          {t("banksSection.viewAllBanks")}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[24px] font-semibold">{t("title")}</h3>
      <div className="flex gap-2">
        <div className="lightShadow rounded-[10px] w-[922px] px-5 py-2">
          <div className="flex w-full gap-2 py-6">
            {tabsData.map((tab) => (
              <div
                key={tab.tab}
                onClick={() => setSelectedTab(tab.tab)}
                className={cn(
                  "flex px-3 text-[#6C6C6C] py-2 border-b cursor-pointer font-semibold border-b-[#EEEEEE]",
                  {
                    "text-primary cursor-default border-b-primary border-b-2":
                      selectedTab === tab.tab,
                  }
                )}
              >
                {tab.tab}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <BankTable
              rows={
                (tabsData.find((tab) => tab.tab === selectedTab)
                  ?.items as RowInfo[]) || []
              }
            />
          </div>
        </div>
        <BanksSection />
      </div>
    </div>
  );
};
