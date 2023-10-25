import type { NextPage } from "next";
import { useState } from "react";
import CustomRating from "./CustomRating";

type TestimonialsCardType = {
  description: string;
  userName?: string;
  userTittle?: string;
  rating: number;
};

const TestimonialsCard: NextPage<TestimonialsCardType> = ({
  description,
  userName,
  userTittle,
  rating,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="self-stretch rounded-3xs flex flex-col py-[70px] px-2.5 mx-4 items-center justify-start gap-[48px] text-center text-11xl text-lightslategray font-poppins border-[2px] border-solid border-gray-500">
        <div className="self-stretch flex flex-row items-center justify-center gap-[11px]">
          <CustomRating value={rating} />
        </div>
        <p className="m-0 self-stretch relative tracking-[0.05em] leading-[160%] sm:text-xl">
          <span className="block">
            {description?.length > 210 ? (
              <>
                {showMore
                  ? description
                  : `${description?.substring(0, 210)}...`}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="bg-gray-100 text-white text-lg tracking-[0.05em"
                >
                  {showMore ? "Less" : "More"}
                </button>
              </>
            ) : (
              description
            )}
          </span>
        </p>
        <div className="self-stretch flex flex-col items-center justify-start text-13xl text-white">
          <p className="m-0 self-stretch relative tracking-[0.05em] leading-[160%] font-semibold sm:text-5xl">
            {userName}
          </p>
          <p className="m-0 self-stretch relative text-base tracking-[0.05em] leading-[160%] text-gray-400">
            {userTittle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
