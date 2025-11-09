import { AnalyticsIcon } from "@/icons/analytics";

type FirstBoxRowData = {
  flagImg: string;
  currency: string;
  firstColumn: {
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

type SecondBoxItemInfo = {
  title: string;
  value: string;
  flag: string;
};

export const secondBoxItems: SecondBoxItemInfo[] = [
  {
    title: "RUB",
    flag: "/home/rub.png",
    value: "100",
  },
  { title: "USD", flag: "/home/usd.png", value: " 1.2381" },
  { title: "EUR", flag: "/home/eur.png", value: " 1.1025" },
  { title: "CNY", flag: "/home/cny.png", value: " 8.9611" },
];

const firstBoxRowsData: FirstBoxRowData[] = [
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
    fourthColumn: { title: "90.66 F", description: "+0.01" },
  },
  {
    currency: "CNY",
    flagImg: "/home/cny.png",
    firstColumn: {
      title: "11.7",
      description: "Название банка",
    },
    secondColumn: {
      title: "11.69",
      description: "Название банка",
    },
    thirdColumn: {
      title: "11.1593",
      description: "0",
    },
    fourthColumn: {
      title: "11.18",
      description: "+0.06",
    },
  },
];

export const FirstBox = () => {
  return (
    <div className="flex flex-col p-6 standardShaddow  gap-1">
      <div className="flex gap-2 font-semibold text-[24px]">
        <AnalyticsIcon />
        <h3>
          Курсы валют в <span className="text-primary">Москве</span>
        </h3>
      </div>
      <table className="border-collapse w-full">
        <thead className="">
          <tr>
            <th className="w-1/5 h-10 py-5 font-medium text-left px-2"></th>

            <th className="w-1/5 h-10 py-5 font-medium text-left px-2">
              <div className="flex flex-col">
                <h3 className="font-semibold leading-[21px]">
                  Лучшие курсы валют в банках
                </h3>
                <p className="text-sm leading-[21px]">Покупка</p>
              </div>
            </th>

            <th className="w-1/5 h-10 font-medium text-left px-2">
              <div className="flex flex-col">
                <p className="text-sm leading-[21px]">Покупка</p>
              </div>
            </th>

            <th className="w-1/5 h-10 font-medium text-left px-2">
              <div className="flex flex-col">
                <h3 className="font-semibold leading-[21px]">ЦБ РФ</h3>
                <p className="text-sm leading-[21px]">13.05</p>
              </div>
            </th>

            <th className="w-1/5 h-10 font-medium text-left px-2">
              <div className="flex flex-col">
                <h3 className="font-semibold leading-[21px]">Мосбиржа</h3>
                <p className="text-sm leading-[21px]">22:50, 13.05</p>
              </div>
            </th>
          </tr>
        </thead>

        <tbody className="">
          {firstBoxRowsData.map((row) => (
            <tr className="w-full">
              <td className="w-1/5 py-4 h-10">
                <div className="flex gap-1 w-full h-full items-center justify-center">
                  <img src={row.flagImg} />
                  <p className="text-primary font-semibold">{row.currency}</p>
                </div>
              </td>

              <td className="w-1/5 h-10">
                <div className="flex flex-col gap-1">
                  <h3 className="text-text text-[20px] leading-[17px]">
                    {row.firstColumn.title}
                  </h3>
                  <p className="text-primary leading-[17px]">
                    {row.firstColumn.description}
                  </p>
                </div>
              </td>

              <td className="w-1/5 h-10">
                <div className="flex flex-col gap-1">
                  <h3 className="text-text text-[20px] leading-[17px]">
                    {row.firstColumn.title}
                  </h3>
                  <p className="text-primary leading-[17px]">
                    {row.firstColumn.description}
                  </p>
                </div>
              </td>

              <td className="w-1/5 h-10">
                <div className="flex flex-col gap-1">
                  <h3 className="text-text text-[20px] leading-[17px]">
                    {row.firstColumn.title}
                  </h3>
                  <p className="text-primary leading-[17px]">
                    {row.firstColumn.description}
                  </p>
                </div>
              </td>

              <td className="w-1/5 h-10 relative">
                <div className="flex flex-col gap-1">
                  <h3 className="text-text text-[20px] leading-[17px]">
                    {row.firstColumn.title}
                  </h3>
                  <p className="text-primary leading-[17px]">
                    {row.firstColumn.description}
                  </p>
                </div>
                {/* separator line FIX: position inside td, not inside tr */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-[#EEEEEE]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SecondBoxItem: React.FC<SecondBoxItemInfo> = ({ flag, title, value }) => {
  return (
    <div className="flex  justify-between items-center py-2 px-3 rounded-[5px] gap-2 standardShaddow">
      <div className="flex gap-2">
        <h3 className="text-[#6C6C6C] text-[20px] leading-[26px]">{title}</h3>
        <p className="text-text font-semibold ">{value}</p>
      </div>
      <img src={flag} className="w-[30px] h-[30px]" />
    </div>
  );
};
const SecondBox = () => {
  return (
    <div className="flex p-5 py-11 w-full max-w-[462] flex-col justify-start gap-6 fourthBoxShaddow ">
      <h3 className="text-[24px] font-semibold leading-[26px] text-text">
        Конвертер валют ЦБ РФ{" "}
      </h3>
      <div className="flex flex-col gap-2">
        {secondBoxItems.map((itemInfo) => (
          <SecondBoxItem {...itemInfo} />
        ))}
      </div>
    </div>
  );
};

export const FourthSection = () => {
  return (
    <div className="flex gap-3 py-14">
      <FirstBox />
      <SecondBox />
    </div>
  );
};
