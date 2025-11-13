"use client";
import React from "react";
import {
  CarDoneIcon,
  GraphIcon,
  ManIcon,
  MoneyIncomeOutlinedIcon,
  PageIcon,
  TurnIcon,
  AnalyticsIcon,
  CarIcon,
  HandIcon,
} from "@/icons/homeSecondSectionIcons";
import { useTranslations } from "next-intl";

interface ServicesCardInfo {
  icon: React.ReactNode;
  label: string;
}

const servicesData: ServicesCardInfo[] = [
  { label: "Инвестиции", icon: <MoneyIncomeOutlinedIcon /> },
  { label: "Рейтинг МФО", icon: <AnalyticsIcon /> },
  { label: "Автокредит", icon: <CarIcon /> },
  { label: "Рефинансирование", icon: <TurnIcon /> },
  { label: "Займы без отказа", icon: <HandIcon /> },
  { label: "Кредиты для бизнеса", icon: <PageIcon /> },
  { label: "КАСКО", icon: <CarDoneIcon /> },
  { label: "Банкротство", icon: <ManIcon /> },
  { label: "Рейтинг банков", icon: <GraphIcon /> },
];

export const ServiceCard: React.FC<ServicesCardInfo> = ({ icon, label }) => {
  return (
    <div className="homeSecondSectionBoxShaddow flex flex-col w-full rounded-[10px] h-[144px] items-center justify-center gap-2">
      {icon}
      <h3 className="text-text text-[13px]  text-center font-medium">
        {label}
      </h3>
    </div>
  );
};

export const ServicesSection = () => {
  const t = useTranslations("servicesSection"); // for i18n support

  return (
    <div className="flex py-12 gap-2 flex-col lg:flex-row justify-center">
      {servicesData.map((service, i) => (
        <ServiceCard
          key={i}
          icon={service.icon}
          label={t ? t(service.label) : service.label}
        />
      ))}
    </div>
  );
};
