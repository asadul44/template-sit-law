import type { NextPage } from "next";
import { useState } from "react";

type LawCardType = {
  title?: string;
  description: string;
  image?: string;
};

const LawCard: NextPage<LawCardType> = ({ title, description, image }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex-1 flex flex-col items-end justify-start gap-[25px] text-left text-29xl text-gray-100 font-cormorant md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-col items-start justify-start gap-[33px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[360px] shrink-0 object-cover"
          alt=""
          src={image}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
          <p className="m-0 self-stretch relative tracking-[-0.02em] leading-[106%] font-bold sm:text-17xl">
            {title}
          </p>
          <p className="m-0 self-stretch relative text-base tracking-[0.05em] leading-[160%] font-poppins md:self-stretch md:w-auto sm:text-base">
            <span className="block">
              {description?.length > 120 ? (
                <>
                  {showMore
                    ? description
                    : `${description?.substring(0, 100)}..`}
                  <button
                    className="text-gray-100 bg-white"
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
      <button className="cursor-pointer [border:none] py-2 px-[50px] bg-gray-100 self-stretch flex flex-row items-start justify-start hover:bg-burlywood-100">
        <span className="flex-1 relative text-xl tracking-[0.05em] leading-[160%] font-medium font-poppins text-white text-center">
          Read More
        </span>
      </button>
    </div>
  );
};

export default LawCard;
