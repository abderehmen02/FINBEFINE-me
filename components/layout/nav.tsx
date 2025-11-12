import { AppConfig as appConfig } from "@/config/main";
import { AnalyticsIcon } from "@/icons/analytics";
import { LocationIcon } from "@/icons/location";
import { useTranslations } from "next-intl";
import { LinkIcon } from "@/icons/link";
import { Button } from "../ui/button";

// nav config
type NavigationPathProps = {
  titleKey: string;
  path: string;
};

export const Navigation = () => {
  const t = useTranslations("navigation");

  const NavigationPaths: NavigationPathProps[] = [
    { titleKey: t("loans"), path: "/loans" },
    { titleKey: t("cards"), path: "/cards" },
    { titleKey: t("microloans"), path: "" },
    { titleKey: t("deposits"), path: "" },
    { titleKey: t("insurance"), path: "" },
    { titleKey: t("education"), path: "" },
  ];

  const NavigationPath: React.FC<NavigationPathProps> = ({
    path,
    titleKey,
  }) => {
    return <div className="text-text font-medium text-sm">{titleKey}</div>;
  };

  return (
    <div className="flex flex-col gap-6 p-4 max-w-[1440px] w-full">
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2">
          <LocationIcon />
          <p className="text-[#111111] text-[10px]">{t("moscow")}</p>
        </div>
        <div className="flex items-center gap-2">
          <AnalyticsIcon />
          <p className="text-[#111111] text-[10px]">{t("exchangeRates")}</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-[#111111] text-[10px]">
            <span className="font-bold">USD</span>
            <span className="font-medium">88.72</span>
            <span className="font-medium text-[8px]">+001</span>
          </p>
          <p className="text-[#111111] text-[10px]">
            <span className="font-bold">EUR</span>
            <span className="font-medium">96.44</span>
            <span className="font-medium text-[8px]">+012</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex w-fit items-center justify-start gap-14">
          <div className="flex gap-2 items-center">
            <img src="/favicon.svg" />
            <h3 className="uppercase text-text text-[24px] font-bold">
              <span className="text-primary">{appConfig.name.slice(4)}</span>
              <span>{appConfig.name.slice(4, appConfig.name.length)}</span>
            </h3>
          </div>
          <div className="bg-background items-center h-9 rounded-[20px] flex gap-2 px-5">
            {NavigationPaths.map((pathInfo) => (
              <NavigationPath key={pathInfo.titleKey} {...pathInfo} />
            ))}
          </div>
        </div>
        <Button variant="default">
          <LinkIcon /> {t("login")}
        </Button>
      </div>
    </div>
  );
};
