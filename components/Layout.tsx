import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setMobile } from "../redux/reducer/appSlice";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./hero-section";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [resWidth, setResWidth] = useState(0);
  const dispatch = useAppDispatch();

  const handleResize = () => {
    if (window?.innerWidth < 768) {
      setResWidth(window?.innerWidth);
    } else {
      setResWidth(window?.innerWidth);
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      setResWidth(window?.innerWidth);
    }
    if (resWidth < 768) {
      dispatch(setMobile(true));
    } else {
      dispatch(setMobile(false));
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resWidth]);

  return (
    <>
      <header>
        <div className="self-stretch flex flex-col items-start justify-start bg-[url(/hero-section--navigation@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <Header />
          <HeroSection />
        </div>
      </header>

      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
