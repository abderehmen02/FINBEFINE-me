import { Button } from "@/components/ui/button";
import { DropDownIcon } from "@/icons/dropDown";
import { BlueRedCircle } from "@/icons/flags/tableFlags";
import { cn } from "@/lib/tailwind";
import { JSX } from "react";

type BoxData = {
  name: string;
};

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
  fifthColumn: {
    value: string;
  };
};

const rows: RowInfo[] = [
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
  {
    firstColumn: {
      flag: <BlueRedCircle />,
      title: "Прайм Выгодный",
      description: "Совкомбанк Лиц. №963",
    },
    secondColumn: {
      title: "до 30 млн",
      description: "до 15 лет",
    },
    thirdColumn: {
      title: "14.883% - 14.901%",
      description: "Полная стоимость кредита",
    },
    fourthColumn: {
      title: "от 18.80%",
      description: "Ставка в год",
    },
    fifthColumn: {
      value:
        "Возраст от 18 до 85 летБез справки о доходахБез поручителей и залога",
    },
  },
];
const boxesData: BoxData[] = [
  { name: "Банк" },
  { name: "Сумма и срок" },
  { name: "Полная стоимость кредита" },
  { name: "Ставка" },
  { name: "Условия" },
];

export const Row: React.FC<RowInfo> = ({
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  fifthColumn,
}) => {
  return (
    <div className="flex py-7 px-5 lightShadow w-full border-b border-[#EEEEEE]  justify-between">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2">
          {firstColumn.flag}
          <div className="flex max-w-[268px] flex-col ">
            <p className="text-text ">{firstColumn.title}</p>
            <p className="text-[#A9A9A9] text-[12px]">
              {firstColumn.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-xl font-bold text-text">{secondColumn.title}</h3>
        <p className="text-[#A9A9A9] leading-[26px]">
          {secondColumn.description}
        </p>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-[20px]  font-normal text-text">
          {thirdColumn.title}
        </h3>
        <p className="text-[#A9A9A9] leading-[26px]">
          {thirdColumn.description}
        </p>
      </div>
      <div className="flex flex-col ">
        <h3 className="text-[20px] text-text">{fourthColumn.title}</h3>
        <p className="text-[#A9A9A9] leading-[26px]">
          {fourthColumn.description}
        </p>
      </div>
      <p className="max-w-[164px] text-[12px]">{fifthColumn.value}</p>
      <div className="flex flex-col items-center gap-1.5">
        <p>40318 заявок</p>
        <Button variant="primary">Узнать решение</Button>
        <p>
          40318 заявок{" "}
          <div className="inline-flex px-1.5">
            <DropDownIcon />
          </div>
        </p>
      </div>
    </div>
  );
};

export const FourthSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[24px] font-bold">
        Мы подобрали для вас 252 потребительские кредиты в банках{" "}
        <span className="text-primary">Москвы</span>
      </h3>
      <div className="flex flex-wrap gap-2 py-6">
        {boxesData.map((boxData) => (
          <div
            key={boxData.name}
            className={cn(
              "flex px-12 py-4 lightShadow rounded-[10px] border-b cursor-pointer font-semibold border-b-[#EEEEEE]"
            )}
          >
            {boxData.name}
          </div>
        ))}
      </div>
      <div className="  py-3 rounded-[5px] ">
        {rows?.map((row) => (
          <Row {...row} />
        ))}
      </div>
    </div>
  );
};
