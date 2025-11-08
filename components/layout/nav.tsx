import { AppConfig as appConfig } from "@/config/main";
import { AnalyticsIcon } from "@/icons/analytics";
import { LocationIcon } from "@/icons/location";
import { useTranslations } from "next-intl";
import { useState } from "react";

// nav config
type NavigationPathProps = {
  titleKey: string;
  path: string;
};

const NavigationPaths: NavigationPathProps[] = [
  {
    titleKey: "navigation.loans",
    path: "/loans",
  },
  {
    titleKey: "navigation.cards",
    path: "/cards",
  },
  { titleKey: "Займы", path: "" },
  { titleKey: "Вклады", path: "" },
  { titleKey: "Страхование", path: "" },
  { titleKey: "Образование", path: "" },
];

const NavigationPath: React.FC<NavigationPathProps> = ({ path, titleKey }) => {
  return <div className="text-text font-medium text-sm">{titleKey}</div>;
};

export const Navigation = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="flex gap-2">
          <LocationIcon />
          {t("home.mosscow")}
        </div>
        <div className="flex gap-2">
          <AnalyticsIcon />
          {t("home.ExchangeRates")}
        </div>
        <div className="flex gap-3  ">
          <p className="text-[#111111] text-[10px]">
            <span className="font-bold">{t("home.USD")}</span>
            <span className="font-medium">88.72</span>
            <span className="font-medium text-sm">+001</span>
          </p>
          <p className="text-[#111111] text-[10px]">
            <span className="font-bold">{t("home.EUR")}</span>
            <span className="font-medium">96.44</span>
            <span className="font-medium text-sm">+012</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex w-full items-center justify-start gap-2">
          <img src="/favicon.svg" />
          <h3 className="uppercase text-text text-[24px] font-bold">
            <span className="text-primary ">{appConfig.name.slice(4)}</span>
            <span>{appConfig.name.slice(4, appConfig.name.length)}</span>
          </h3>
        </div>
        <div className="bg-background flex gap-2 px-5 py-1">
          {NavigationPaths.map((pathInfo) => (
            <NavigationPath {...pathInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};
