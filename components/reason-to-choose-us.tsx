import type { NextPage } from "next";
import StrategicGuidance from "./strategic-guidance";

const ReasonToChooseUs: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-100 flex flex-col py-[100px] px-[101px] items-center justify-start gap-[96px] text-center text-37xl text-white font-cormorant lg:pl-20 lg:pr-20 lg:box-border md:pl-9 md:pr-9 md:box-border sm:items-start sm:justify-start sm:pl-4 sm:pr-4 sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[11px]">
        <b className="self-stretch relative tracking-[-0.02em] leading-[99%] sm:text-17xl">
          4 Reason To Choose Us
        </b>
        <p className="m-0 self-stretch relative text-xl tracking-[0.05em] leading-[160%] font-poppins sm:text-base">
          Lawyers ensure clients' activities align with applicable laws
        </p>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-left text-17xl">
        <div className="self-stretch flex flex-row items-start justify-start gap-[40px] md:flex-col">
          <StrategicGuidance
            icons="/icons.svg"
            title="Strategic Guidance"
            description="We provide our clients the ability to determine a well-defined and correct  strategy, help to clarify the case."
          />
          <StrategicGuidance
            icons="/icons1.svg"
            title="Objective Advice"
            description="International Covenant on Civil and Political Rights proclaims, in addition right to be tried."
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[40px] md:flex-col">
          <StrategicGuidance
            icons="/icons2.svg"
            title="Available to Talk 24/7"
            description="In most trials, a jury decides whether person is guilty or not.
            Therefore, one most important tasks of a trial lawyer."
          />
          <StrategicGuidance
            icons="/icons3.svg"
            title="No Fees Unless we Win"
            description="Fee in a Nutshell. A no-fee apartment means the renter does not broker's fee. A fee only exists when
            a broker."
          />
        </div>
      </div>
    </div>
  );
};

export default ReasonToChooseUs;
