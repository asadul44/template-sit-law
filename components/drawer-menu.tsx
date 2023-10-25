import type { NextPage } from "next";
import { useEffect } from "react";

type DrawerMenuType = {
  onClose?: () => void;
  gotoContactInfo?: () => void;
  newsEvent?: () => void;
  legalService?: () => void;
};

const DrawerMenu: NextPage<DrawerMenuType> = ({
  onClose,
  gotoContactInfo,
  newsEvent,
  legalService,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-gray-100 flex flex-col pt-10 px-[70px] pb-[199px] box-border items-center justify-start gap-[25px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] h-full max-w-[90%] overflow-auto text-left text-xl text-white font-poppins"
      data-animate-on-scroll
    >
      <div className="flex flex-row py-2 px-1 items-start justify-start">
        <img
          onClick={onClose}
          className="relative w-[18.41px] h-[18.41px]"
          alt=""
          src="/union.svg"
        />
      </div>
      <div className="flex flex-col items-center justify-start gap-[24px]">
        <div className="relative w-[158px] h-[30px]">
          <a
            className="absolute top-[0px] left-[0px] hover:cursor-pointer"
            onClick={legalService}
          >
            Legal Services
          </a>
        </div>
        <a className="relative hover:cursor-pointer" onClick={newsEvent}>
          News & Events
        </a>
        <a className="relative hover:cursor-pointer" onClick={gotoContactInfo}>
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default DrawerMenu;
