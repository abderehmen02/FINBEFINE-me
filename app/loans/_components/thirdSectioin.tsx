"use client";
import { Button } from "@/components/ui/button";
import {
  AccountIcon,
  FiveIcon,
  LocationIcon,
  MessagingIcon,
} from "@/icons/nenethSection";
import { cn } from "@/lib/tailwind";
import { JSX, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  BlueRedCircle,
  DoneFlag,
  GreenLinesFlag,
  RedAFlag,
  TYellowBgFlag,
} from "@/icons/flags/tableFlags";

type RowInfo = {
  firstColumn: {
    flag: JSX.Element;
    title: string;
    description: string;
  };
  secondColumn: {
    title: string;
    description: string;
  };
  thirdColumn: {
    title: string;
    description: string;
  };
  fourthColumn: {
    title: string;
    description: string;
  };
};

const cardsInfo: RowInfo[] = [
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 5 млн",
      description: "до 5 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "14.90%",
      description: "Ставка в год",
    },
  },
  {
    firstColumn: {
      flag: <GreenLinesFlag />,
      title: "Кредит со сниженным платежом",
      description: "Россельхозбанк Лиц. №3349",
    },
    secondColumn: {
      title: "до 5 млн",
      description: "до 5 лет",
    },
    thirdColumn: {
      title: "28.412% - 42.650%",
      description: "от 27.50%",
    },
    fourthColumn: {
      title: "Полная стоимость кредита",
      description: "Ставка в год",
    },
  },
  {
    firstColumn: {
      flag: <TYellowBgFlag />,
      title: '"Наличными без залога (с безопасной доставкой карты)',
      description: "Т-Банк Лиц. №2673",
    },
    secondColumn: {
      title: "до 5 млн",
      description: "29.802% - 38.402%",
    },
    thirdColumn: {
      title: "от 29.90%",
      description: "до 5 лет",
    },
    fourthColumn: {
      title: "Полная стоимость кредита",
      description: "Ставка в год",
    },
  },
  {
    firstColumn: {
      flag: <DoneFlag />,
      title: "Кредит на образование с господдержкой",
      description: "Сбербанк Лиц. №1481",
    },
    secondColumn: {
      title: "от 1",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "3.000%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "3.00%",
      description: "Ставка в год",
    },
  },
  {
    firstColumn: {
      flag: <RedAFlag />,
      title: "Наличными (онлайн заявка)",
      description: "Альфа-Банк Лиц. №1326",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "21.153% - 46.990%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
  },
];

const tabsData: { tab: string; items: RowInfo[] }[] = [
  {
    tab: "Лучшие",
    items: cardsInfo,
  },
  { tab: "Онлайн-заявка", items: [] },
  { tab: "Рефинансирование под залог", items: [] },
  { tab: "Наличными", items: [] },
  { tab: "Без отказа", items: [] },
  { tab: "Еще", items: [] },
];

export const Row: React.FC<RowInfo> = ({
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
}) => {
  return (
    <div className="flex w-full border-b border-[#EEEEEE] px-2 justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          {firstColumn.flag}
          <div className="flex flex-col ">
            <p className="text-text">{firstColumn.title}</p>
            <p>{firstColumn.description}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button variant="secondary" size="sm">
            Изучить все условия кредита
          </Button>
          <Button variant="secondary" size="sm">
            Реклама
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-text">{secondColumn.title}</h3>
        <p className="text-[#A9A9A9] leading-[26px]">
          {secondColumn.description}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-text">{thirdColumn.title}</h3>
        <p className="text-[#A9A9A9] leading-[26px]">
          {thirdColumn.description}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-text">{fourthColumn.title}</h3>
        <p className="text-[#A9A9A9] leading-[26px]">
          {fourthColumn.description}
        </p>
      </div>
      <Button variant="primary">Получить кредит</Button>
    </div>
  );
};

export const ThirdSection = () => {
  const t = useTranslations("NinethSection");
  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);
  const selectedTabRows = tabsData.find(
    (tabData) => tabData.tab === selectedTab
  )?.items;
  return (
    <div className="flex flex-col py-7">
      <h3 className="text-[24px] font-semibold">{t("title")}</h3>
      <div className="flex flex-wrap gap-2 py-6">
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
        {selectedTabRows?.map((row) => (
          <Row {...row} />
        ))}
      </div>
    </div>
  );
};
