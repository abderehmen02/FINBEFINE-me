"use client";
import { AnalyticsIcon } from "@/icons/analytics";
import { useTranslations } from "next-intl";

type ExchangeRateRow = {
  flagImg: string;
  currency: string;
  firstColumn: { title: string; description: string };
  secondColumn: { title: string; description: string };
  thirdColumn: { title: string; description: string };
  fourthColumn: { title: string; description: string };
};

type ConverterItem = {
  title: string;
  value: string;
  flag: string;
};

export const converterItems: ConverterItem[] = [
  { title: "RUB", flag: "/home/rub.png", value: "100" },
  { title: "USD", flag: "/home/usd.png", value: "1.2381" },
  { title: "EUR", flag: "/home/eur.png", value: "1.1025" },
  { title: "CNY", flag: "/home/cny.png", value: "8.9611" },
];

const exchangeRateRows: ExchangeRateRow[] = [
  {
    currency: "USD",
    flagImg: "/home/usd.png",
    firstColumn: { title: "83.01", description: "Название банка" },
    secondColumn: { title: "82.59", description: "Название банка" },
    thirdColumn: { title: "80.7689", description: "0" },
    fourthColumn: { title: "81.06", description: "+0.01" },
  },
  {
    currency: "EUR",
    flagImg: "/home/eur.png",
    firstColumn: { title: "93.5", description: "Название банка" },
    secondColumn: { title: "92.7", description: "Название банка" },
    thirdColumn: { title: "90.7062", description: "0" },
    fourthColumn: { title: "90.66", description: "+0.01" },
  },
  {
    currency: "CNY",
    flagImg: "/home/cny.png",
    firstColumn: { title: "11.7", description: "Название банка" },
    secondColumn: { title: "11.69", description: "Название банка" },
    thirdColumn: { title: "11.1593", description: "0" },
    fourthColumn: { title: "11.18", description: "+0.06" },
  },
];

const ExchangeRatesTable = () => {
  const t = useTranslations("exchangeRatesSection.table");

  return (
    <div className="flex flex-col p-6 standardShaddow gap-1">
      <div className="flex gap-2 font-semibold text-[24px] items-center">
        <AnalyticsIcon />
        <h3>
          {t("title")} <span className="text-primary">{t("city")}</span>
        </h3>
      </div>

      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="w-1/5 h-10 py-5 px-2"></th>

            <th className="w-1/5 h-10 py-5 font-medium text-left px-2">
              <div className="flex flex-col">
                <h3 className="font-semibold leading-[21px]">
                  {t("headers.bestRates")}
                </h3>
                <p className="text-sm leading-[21px]">{t("headers.buy")}</p>
              </div>
            </th>

            <th className="w-1/5 h-10 font-medium text-left px-2">
              <p className="text-sm leading-[21px]">{t("headers.buy")}</p>
            </th>

            <th className="w-1/5 h-10 font-medium text-left px-2">
              <div className="flex flex-col">
                <h3 className="font-semibold leading-[21px]">
                  {t("headers.cbr")}
                </h3>
                <p className="text-sm leading-[21px]">{t("headers.cbrDate")}</p>
              </div>
            </th>

            <th className="w-1/5 h-10 font-medium text-left px-2">
              <div className="flex flex-col">
                <h3 className="font-semibold leading-[21px]">
                  {t("headers.moscowExchange")}
                </h3>
                <p className="text-sm leading-[21px]">
                  {t("headers.moexTime")}
                </p>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {exchangeRateRows.map((row, i) => (
            <tr key={i} className="w-full relative">
              <td className="w-1/5 py-4 h-10">
                <div className="flex gap-1 items-center justify-center">
                  <img src={row.flagImg} alt={row.currency} />
                  <p className="text-primary font-semibold">{row.currency}</p>
                </div>
              </td>

              {[
                row.firstColumn,
                row.secondColumn,
                row.thirdColumn,
                row.fourthColumn,
              ].map((col, j) => (
                <td key={j} className="w-1/5 h-10 relative">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text text-[20px] leading-[17px]">
                      {col.title}
                    </h3>
                    <p className="text-primary leading-[17px]">
                      {col.description}
                    </p>
                  </div>
                  {j === 3 && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-[#EEEEEE]" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CurrencyConverterItem: React.FC<ConverterItem> = ({
  flag,
  title,
  value,
}) => (
  <div className="flex justify-between items-center py-2 px-3 rounded-[5px] gap-2 standardShaddow">
    <div className="flex gap-2">
      <h3 className="text-[#6C6C6C] text-[20px] leading-[26px]">{title}</h3>
      <p className="text-text font-semibold">{value}</p>
    </div>
    <img src={flag} alt={title} className="w-[30px] h-[30px]" />
  </div>
);

const CurrencyConverter = () => {
  const t = useTranslations("exchangeRatesSection.converter");
  return (
    <div className="flex p-5 py-11 w-full max-w-[462px] flex-col justify-start gap-6 fourthBoxShaddow">
      <h3 className="text-[24px] font-semibold leading-[26px] text-text">
        {t("title")}
      </h3>
      <div className="flex flex-col gap-2">
        {converterItems.map((item, i) => (
          <CurrencyConverterItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export const ExchangeRatesSection = () => (
  <div className="flex gap-3 py-14">
    <ExchangeRatesTable />
    <CurrencyConverter />
  </div>
);
