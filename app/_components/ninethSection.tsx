"use client";
import { Button } from "@/components/ui/button";
import {
  AccountIcon,
  FiveIcon,
  LocationIcon,
  MessagingIcon,
} from "@/icons/nenethSection";
import { cn } from "@/lib/tailwind";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

type CardInfo = {
  title: string;
  description: string;
  date: string;
};

export const NinethSection = () => {
  const t = useTranslations("NinethSection");

  const cardsInfo: CardInfo[] = [
    {
      title: t("cards.0.title"),
      description: t("cards.0.description"),
      date: "15.05.2025",
    },
    {
      title: t("cards.1.title"),
      description: t("cards.1.description"),
      date: "15.05.2025",
    },
    {
      title: t("cards.2.title"),
      description: t("cards.2.description"),
      date: "15.05.2025",
    },
    {
      title: t("cards.3.title"),
      description: t("cards.3.description"),
      date: "15.05.2025",
    },
    {
      title: t("cards.4.title"),
      description: t("cards.4.description"),
      date: "15.05.2025",
    },
    {
      title: t("cards.5.title"),
      description: t("cards.5.description"),
      date: "15.05.2025",
    },
    {
      title: t("cards.6.title"),
      description: t("cards.6.description"),
      date: "15.05.2025",
    },
  ];

  const tabsData: { tab: string; items: CardInfo[] }[] = [
    {
      tab: t("tabs.banks"),
      items: cardsInfo,
    },
    { tab: t("tabs.mfo"), items: [] },
    { tab: t("tabs.investments"), items: [] },
  ];

  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);
  const selectedTabItems =
    useMemo(
      () => tabsData.find((tab) => tab.tab === selectedTab)?.items,
      [selectedTab, tabsData]
    ) || [];

  const BanksCard = () => (
    <div className="flex flex-col rounded-[10px] gap-8 w-[453px] h-[231px] py-4 bg-primary">
      <div className="flex justify-between w-full px-6 py-4">
        <div className="flex text-white flex-col gap-2">
          <h3 className="text-xl">
            {t("banksCard.banks")}{" "}
            <span className="text-3xl font-medium leading-[26px]">313</span>
          </h3>
          <h3 className="text-xl">
            {t("banksCard.reviews")}{" "}
            <span className="text-3xl font-medium leading-[26px]">
              2 439 110
            </span>
          </h3>
        </div>
        <MessagingIcon />
      </div>
      <p className="text-white p-5 underline text-xl">
        {t("banksCard.readAll")}
      </p>
    </div>
  );

  const ReviewCard = () => (
    <div className="flex lightShadow flex-col w-[299px] justify-between py-7 h-[244px] rounded-[10px] p-4">
      <h3 className="text-text text-[24px] font-semibold">
        {t("reviewCard.title")}
      </h3>
      <p className="font-medium text-[#6C6C6C] leading-[26px]">
        {t("reviewCard.description")}
      </p>
      <Button variant="primary">{t("reviewCard.button")}</Button>
    </div>
  );

  const Card: React.FC<CardInfo & { className: string }> = ({
    date,
    className,
    description,
    title,
  }) => (
    <div
      className={cn(
        "flex flex-col gap-3.5 lightShadow h-fit rounded-[10px] p-6",
        className
      )}
    >
      <div className="flex justify-between">
        <h3 className="leading-[26px] max-w-[290px] font-semibold">{title}</h3>
        <img src="/home/a.png" className="w-[50px] h-[50px] rounded-full" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-medium text-[15px] leading-[26px]">{description}</p>
        <p className="text-primary">{t("card.readMore")}</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-[#6C6C6C]">{date}</p>
        <div className="flex gap-3">
          <h3>
            <span className="inline-flex">
              <AccountIcon />
            </span>{" "}
            {t("card.author")}
          </h3>
          <h3>
            <span className="inline-flex">
              <LocationIcon />
            </span>
            {t("card.city")}
          </h3>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-[12px] text-[#6C6C6C]">{t("card.rating")}</p>
          <FiveIcon />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col py-7">
      <h3 className="text-[24px] font-semibold">{t("title")}</h3>
      <div className="flex gap-2 py-6">
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
      <div className="flex gap-3.5 flex-wrap max-w-full">
        {<Card className="w-[453px]" {...selectedTabItems[0]} />}
        {<Card className="w-[453px]" {...selectedTabItems[1]} />}
        {<Card className="w-[453px]" {...selectedTabItems[2]} />}
        <BanksCard />
        {<Card className="w-[912px]" {...selectedTabItems[4]} />}
        {<Card className="w-[453px]" {...selectedTabItems[5]} />}
        {<Card className="w-[595px]" {...selectedTabItems[6]} />}
        <ReviewCard />
      </div>
    </div>
  );
};
