import type { NextPage } from "next";
import { useMemo, useState } from "react";
import CSS, { Property } from "csstype";
import VideoModal from "./Modal/VideoModal";

type Videos2Type = {
  rectangle220?: string;
  february2023?: string;
  whatShouldIDoIfIGet?: string;
  intoAccident?: string;
  setOpenModal: (v: any) => void;
  /** Style props */
  propLetterSpacing?: Property.LetterSpacing;
};

const Videos2: NextPage<Videos2Type> = ({
  rectangle220,
  february2023,
  whatShouldIDoIfIGet,
  intoAccident,
  propLetterSpacing,
  setOpenModal,
}) => {
  const whatShouldIContainerStyle: CSS.Properties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-left text-xl text-dimgray font-poppins md:flex-[unset] md:self-stretch">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[360px] shrink-0 object-cover"
        alt=""
        src={rectangle220}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <div className="self-stretch relative tracking-[0.05em] leading-[160%]">
            {february2023}
          </div>
          <p
            className="m-0 self-stretch relative text-17xl leading-[146%] font-medium text-gray-100 sm:text-7xl"
            style={whatShouldIContainerStyle}
          >
            <span className="block">{whatShouldIDoIfIGet}</span>
            <span className="block">{intoAccident}</span>
          </p>
        </div>
        <button
          onClick={() => setOpenModal("form-elements")}
          className="cursor-pointer [border:none] py-2.5 px-[50px] bg-gray-100 self-stretch h-14 flex flex-row box-border items-center justify-center hover:bg-burlywood-100"
        >
          <span className="flex-1 relative text-5xl leading-[146%] font-medium font-poppins text-white text-center">
            Watch Videos
          </span>
        </button>
      </div>
    </div>
  );
};

export default Videos2;
