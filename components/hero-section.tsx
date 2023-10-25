import type { NextPage } from "next";
import { Heroes } from "../model/Hero.model";
import useFetchData from "../hooks/useDataFetch";

const HeroSection: NextPage = () => {
  const { data } = useFetchData<Heroes>(
    "/banners?filters[type][$eq]=Lawyer&populate=*"
  );

  return (
    <div className="self-stretch flex flex-row sm:flex-col-reverse  pt-[100px] px-[130px] pb-0 items-start justify-start gap-[99px] text-left text-55xl text-white font-cormorant lg:pl-[100px] lg:pr-[100px] lg:box-border lg:pb-[100px] md:flex-col md:items-center md:justify-center md:pl-9 md:pr-9 md:box-border md:pb-0 sm:gap-[98px] sm:pl-4 sm:pt-12 sm:pr-4 sm:box-border">
      <div className="flex-1 flex flex-col  items-start justify-start gap-[36px] md:flex-[unset] md:self-stretch">
        <div className="self-stretch flex flex-col items-start justify-start gap-[36px]">
          <p className="m-0 self-stretch relative leading-[104%] font-bold sm:text-[45px] sm:-mt-8">
            {data?.data[0]?.attributes?.banner_title}
          </p>
          <p className="m-0 self-stretch relative text-xl tracking-[0.05em] leading-[160%] font-poppins sm:text-sm">
            {data?.data[0]?.attributes?.banner_description}
          </p>
        </div>
        <button className="cursor-pointer [border:none] py-2.5 sm:mb-8 px-[38px] bg-burlywood-100 w-[401px] flex flex-row box-border items-center justify-center hover:bg-white sm:self-stretch sm:w-auto">
          <span className="relative text-5xl sm:text-lg text-center font-medium font-poppins text-gray-100  inline-block w-[325px] shrink-0">
            Get a Free Case Evaluation
          </span>
        </button>
      </div>
      <img
        className="relative w-[468px] h-[607px] object-cover lg:max-w-full lg:h-auto md:h-auto sm:max-w-full sm:h-auto"
        alt=""
        src={data?.data[0]?.attributes?.hero_img?.data[0]?.attributes.url}
      />
    </div>
  );
};

export default HeroSection;
