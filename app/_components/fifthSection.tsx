"use client";
import { Button } from "@/components/ui/button";
import {
  FirstIcon,
  FourthIcon,
  SecondIcon,
  ThirdIcon,
} from "@/icons/fifthSection";
import { cn } from "@/lib/tailwind";
import { useTranslations } from "next-intl";
import { useState } from "react";

export interface FifthSectionCardInfo {
  topText: string;
  icon: React.ReactNode;
  description: string;
  values: { key: string; values: string }[];
}

export const FifthSection = () => {
  const t = useTranslations("fifthSection");

  const tabsData: { tab: string; items: FifthSectionCardInfo[] }[] = [
    {
      tab: t("tabs.credits"),
      items: [
        {
          icon: <FirstIcon />,
          topText: t("cards.creditPlans.title"),
          description: t("cards.creditPlans.description"),
          values: [
            { key: t("common.amount"), values: t("cards.creditPlans.amount") },
            { key: t("common.rate"), values: t("cards.creditPlans.rate") },
            { key: t("common.term"), values: t("cards.creditPlans.term") },
          ],
        },
        {
          icon: <SecondIcon />,
          topText: t("cards.creditIn5Min.title"),
          description: t("cards.creditIn5Min.description"),
          values: [
            { key: t("common.amount"), values: t("cards.creditIn5Min.amount") },
            { key: t("common.rate"), values: t("cards.creditIn5Min.rate") },
            { key: t("common.term"), values: t("cards.creditIn5Min.term") },
          ],
        },
        {
          icon: <ThirdIcon />,
          topText: t("cards.getMoneyToday.title"),
          description: t("cards.getMoneyToday.description"),
          values: [
            {
              key: t("common.amount"),
              values: t("cards.getMoneyToday.amount"),
            },
            { key: t("common.rate"), values: t("cards.getMoneyToday.rate") },
            { key: t("common.term"), values: t("cards.getMoneyToday.term") },
          ],
        },
        {
          icon: <FourthIcon />,
          topText: t("cards.profitableConditions.title"),
          description: t("cards.profitableConditions.description"),
          values: [
            {
              key: t("common.amount"),
              values: t("cards.profitableConditions.amount"),
            },
            {
              key: t("common.rate"),
              values: t("cards.profitableConditions.rate"),
            },
            {
              key: t("common.term"),
              values: t("cards.profitableConditions.term"),
            },
          ],
        },
      ],
    },
    { tab: t("tabs.deposits"), items: [] },
    { tab: t("tabs.debitCards"), items: [] },
    { tab: t("tabs.creditCards"), items: [] },
    { tab: t("tabs.investments"), items: [] },
    { tab: t("tabs.business"), items: [] },
  ];

  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);

  return (
    <div className="flex flex-col ">
      <h3 className="text-[24px] font-semibold">{t("title")}</h3>
      <div className="flex flex-wrap w-full   gap-2 py-6">
        {tabsData.map((tab) => (
          <div
            key={tab.tab}
            onClick={() => setSelectedTab(tab.tab)}
            className={cn(
              "flex px-3 py-2 border-b cursor-pointer font-semibold border-b-[#EEEEEE]",
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
      <div className="flex flex-col w-full items-center gap-6 lg:gap-2 lg:flex-row ">
        {tabsData
          .find((tab) => tab.tab === selectedTab)
          ?.items.map((itemInfo, i) => (
            <div
              key={i}
              className="flex flex-col w-full  max-w-[350px] px-2  relative items-center"
            >
              <div className="bg-[#10A26F] px-6 py-3 text-center text-white flex items-center justify-center rounded-[5px] translate-y-4 w-[290px] h-[54px] z-20">
                {itemInfo.topText}
              </div>
              <div className="bg-[#F2F2F2] flex justify-center w-[332px] h-[180px] z-10 rounded-[10px] items-center">
                {itemInfo.icon}
              </div>
              <div className="flex flex-col w-full">
                <div className="py-2 border-b min-h-[70px] border-b-[#EEEEEE]">
                  <p className="font-medium">{itemInfo.description}</p>
                </div>
                <div className="py-5 flex flex-col gap-2">
                  {itemInfo.values.map((val, j) => (
                    <div key={j} className="flex w-full justify-between">
                      <p className="font-semibold">{val.key}</p>
                      <p className="font-semibold">{val.values}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full" variant="primary">
                  {t("applyButton")}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
