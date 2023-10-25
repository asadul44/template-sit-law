import { Tooltip } from "flowbite-react";
import type { NextPage } from "next";
import { userData } from "../utils/user";

const Footer: NextPage = () => {
  const data = userData;
  return (
    <div className="self-stretch bg-white flex flex-row py-[82px] px-[100px] items-center justify-between text-left text-17xl text-darkkhaki font-cormorant lg:pl-[60px] lg:pr-[60px] lg:box-border md:flex-col md:gap-[80px] md:items-start md:justify-start md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <div className="relative w-full h-11">
          <b className="absolute top-[0px] left-[0px]">
            <Tooltip
              content={data?.name}
              placement="bottom"
              className="text-[24px] bg-gray-100"
            >
              {data?.name?.length > 13
                ? `${data?.name.slice(0, 13)}..`
                : data?.name}
            </Tooltip>
          </b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px] text-xl text-gray-100 font-poppins">
          <a
            href={`tel:${data?.phone}`}
            className="relative tracking-[0.05em] leading-[160%] text-gray-100 no-underline"
          >
            {data?.phone}
          </a>
          <div className="relative tracking-[0.05em] leading-[160%]">
            {data?.email}
          </div>
          <div className="relative tracking-[0.05em] leading-[160%]">
            <p className="m-0">
              {data?.postCode} {data?.location},
            </p>
            <p className="m-0">{data?.city}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[74px] md:flex-col">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <b className="relative">Services</b>
          <div className="relative text-xl tracking-[0.05em] leading-[190%] font-poppins text-gray-100">
            <p className="m-0">Lawyer</p>
            <p className="m-0">Car Accidents</p>
            <p className="m-0">Family Law</p>
            <p className="m-0">Blog</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <b className="relative">About</b>
          <div className="relative text-xl tracking-[0.05em] leading-[190%] font-poppins text-gray-100">
            <p className="m-0">{`Privacy & Policy
`}</p>
            <p className="m-0">{`Terms & Conditions
`}</p>
            <p className="m-0">Cookie Settings</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[23px]">
          <b className="relative">Contact With Us</b>
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <a href={data?.facebook} target="_blank">
              <img
                className="relative w-8 h-8"
                alt=""
                src="/facebook-icon.svg"
              />
            </a>
            <a
              href={data?.twitter}
              target="_blank"
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 hover:bg-burlywood-100"
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
            </a>
            <a
              href={data?.linkedIn}
              target="_blank"
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 hover:bg-white"
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector4.svg"
              />
            </a>
            <a
              href={data?.instagram}
              target="_blank"
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 hover:bg-burlywood-100"
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector5.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
