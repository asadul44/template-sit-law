import type { NextPage } from "next";
import { useState } from "react";

type StrategicGuidanceType = {
  icons?: string;
  title?: string;
  description: string;
};

const StrategicGuidance: NextPage<StrategicGuidanceType> = ({
  icons,
  title,
  description,
}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex-1 flex flex-col py-[88px] px-[92px] items-start justify-start gap-[13px] text-left text-17xl text-white font-cormorant border-[2px] border-solid border-burlywood-200 md:flex-[unset] md:self-stretch sm:items-start sm:justify-start sm:py-12 sm:px-6 sm:box-border">
      <img className="relative w-[88px] h-[88.06px]" alt="" src={icons} />
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
        <p className="m-0 self-stretch relative tracking-[0.05em] leading-[160%] font-bold sm:text-11xl">
          {title}
        </p>
        <p className="m-0 self-stretch relative text-xl tracking-[0.05em] leading-[166%] font-light font-poppins sm:text-base">
          <span className="block">
            {description?.length > 100 ? (
              <>
                {showMore ? description : `${description?.substring(0, 100)}..`}
                <button
                  className="bg-gray-100 text-white"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  {" "}
                  {showMore ? "Less" : "More"}
                </button>
              </>
            ) : (
              description
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StrategicGuidance;
