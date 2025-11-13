import { PinkLogo } from "@/icons/pinkLogo";
import { useTranslations } from "next-intl";

export const TwelevSection = () => {
  const t = useTranslations("twelveSection");

  return (
    <div className="flex gap-5 py-7 flex-col  lg:flex-row px-1.5">
      <div className="lg:min-w-[687px] rounded-[10px] flex flex-col items-center justify-center gap-3 pinkLinear h-[479px]">
        <div className="bg-white items-center justify-center rounded-[20px] text-xl w-[282px] h-[33px]">
          <h3 className="text-xl font-bold w-full text-center">
            FINBE
            <span className="text-primary w-full text-center">FINE.RU</span>
          </h3>
        </div>
        <PinkLogo />
      </div>

      <div className="flex flex-col max-w-[616px] gap-3">
        <h3 className="text-text font-semibold text-[32px]">{t("seoTitle")}</h3>
        <p className="leading-[26px]">{t("description")}</p>
      </div>
    </div>
  );
};
