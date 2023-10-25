import type { NextPage } from "next";
import { useState } from "react";
import VideoModal from "./Modal/VideoModal";
import Videos2 from "./videos2";

const WatchOurVideos: NextPage = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  return (
    <div
      id="news-events"
      className="self-stretch bg-white flex flex-col py-[98px] px-[100px] items-center justify-start gap-[60px] text-center text-37xl text-gray-100 font-cormorant lg:pl-[90px] lg:pr-[90px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[9px]">
        <p className="m-0 self-stretch relative tracking-[-0.02em] leading-[99%] font-bold sm:text-17xl">
          Watch Our Videos
        </p>
        <p className="m-0 self-stretch relative text-xl tracking-[0.05em] leading-[160%] font-poppins sm:text-base">
          Discover videos about our Lawyer Cases
        </p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[40px] text-left text-xl text-dimgray font-poppins md:flex-col">
        <Videos2
          rectangle220="/rectangle-220@2x.png"
          february2023="21 February, 2023"
          whatShouldIDoIfIGet="What Should I Do If I Get "
          intoAccident="Into Accident?"
          setOpenModal={setOpenModal}
        />
        <Videos2
          rectangle220="/rectangle-2201@2x.png"
          february2023="8 June, 2022"
          whatShouldIDoIfIGet="What Kind Of Cases do "
          intoAccident="Take on?"
          propLetterSpacing="0.01em"
          setOpenModal={setOpenModal}
        />
      </div>

      <VideoModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default WatchOurVideos;
