import { ClockIcon } from "@/icons/loansPage/clockIcon";

export const Hero = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-[40px] leading-[100%] max-w-[530px]">
          Все
          <div className="bg-primary p-2 rounded-lg mx-2  w-fit inline-flex">
            <ClockIcon />
          </div>
          кредитные предложения в Москве
        </h3>
        <p className="text-text max-w-[874px]">
          Узнайте о самых выгодных кредитных ставках для физических лиц в 2025
          году. Подберите идеальный кредит на FINBEFINE и получите
          профессиональные советы по кредитованию в банках России.
        </p>
        <h3 className="text-[24px] text-text font-semibold leading-[26px]">
          Укажите параметры кредита
        </h3>
      </div>
      <img src="/loans-page/hero-img.png  " />
    </div>
  );
};
