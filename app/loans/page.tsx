import { FourthSection } from "./_components/fourthSection";
import { Hero } from "./_components/hero";
import { SecondSection } from "./_components/secondSection";
import { ThirdSection } from "./_components/thirdSectioin";

export default function Page() {
  return (
    <div className="flex max-w-[1440px] flex-col ">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
