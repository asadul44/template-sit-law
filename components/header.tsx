import { Tooltip } from "flowbite-react";
import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { userData } from "../utils/user";

import DrawerMenu from "./drawer-menu";
import PortalDrawer from "./portal-drawer";

const Header: NextPage = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const data = userData;

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  const gotoContactInfo = () => {
    const scrollSection = document.getElementById("contact-info");
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
      closeDrawerMenu();
    }
  };
  const newsEvent = () => {
    const scrollSection = document.getElementById("news-events");
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
      closeDrawerMenu();
    }
  };
  const legalService = () => {
    const scrollSection = document.getElementById("legal-service");
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
      closeDrawerMenu();
    }
  };

  return (
    <>
      <div className="self-stretch flex flex-row py-10 px-[72px] items-center justify-between text-left text-17xl text-white font-cormorant lg:pl-[66px] lg:pr-[66px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <div className="relative w-[250px] sm:w-[181px] h-11">
          <b className="absolute top-[0px] left-[60px] sm:left-[50px] w-56">
            <Tooltip
              content={data?.name}
              placement="bottom"
              className="text-[28px]  bg-gray-100"
            >
              {data?.name?.length > 13
                ? `${data?.name.slice(0, 13)}..`
                : data?.name}
            </Tooltip>
          </b>

          <img
            className="absolute h-[90.91%] w-[22.1%] top-[4.55%] right-[77.9%] bottom-[4.55%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[72px] text-xl font-poppins">
          <div className="flex flex-row items-start justify-start gap-[35px] md:hidden">
            <a className="relative hover:cursor-pointer" onClick={legalService}>
              Legal Services
            </a>
            <a className="relative hover:cursor-pointer" onClick={newsEvent}>
              News & Events
            </a>
            <a
              className="relative hover:cursor-pointer"
              onClick={gotoContactInfo}
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-row items-center justify-start gap-[24px]">
            <div className="cursor-pointer py-[9px] px-[19px] bg-[transparent] flex flex-row items-center justify-start gap-[9px] border-[2px] border-solid border-burlywood-100 md:hidden">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
              </button>
              <span className="relative text-xl font-medium font-poppins text-khaki text-left">
                {data?.phone}
              </span>
            </div>
            <img
              className="relative w-6 h-[18px] hidden cursor-pointer md:flex"
              alt=""
              src="/menu.svg"
              onClick={openDrawerMenu}
            />
          </div>
        </div>
      </div>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu
            onClose={closeDrawerMenu}
            gotoContactInfo={gotoContactInfo}
            newsEvent={newsEvent}
            legalService={legalService}
          />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
