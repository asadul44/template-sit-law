import type { NextPage } from "next";
import LegalPractice from "../components/legal-practice";
import ReasonToChooseUs from "../components/reason-to-choose-us";
import WatchOurVideos from "../components/watch-our-videos";
import FAQContainer from "../components/f-a-q-container";
import FreeConsultation from "../components/free-consultation";
import Carousel from "../components/carousel";

const LawPixLandingPage: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start">
      <LegalPractice />
      <ReasonToChooseUs />
      <WatchOurVideos />
      <FAQContainer />
      <FreeConsultation />
      <Carousel />
    </div>
  );
};

export default LawPixLandingPage;
