import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutationData } from "../hooks/useMutaionData";

interface AppointType {
  fullName: string;
  email: string;
  question: string;
  message: string;
}

const FreeConsultation: NextPage = () => {
  const [appoint, setAppoint] = useState<AppointType>({
    fullName: "",
    email: "",
    question: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAppoint({
      ...appoint,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { data, error } = await useMutationData<AppointType>(
      "/appoint",
      appoint
    );

    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Response:", data);
    }
  };
  return (
    <>
      <div
        id="contact-info"
        className="self-stretch  flex flex-col  py-[132px] px-[100px] items-center justify-start gap-[86px] text-center text-37xl text-gray-100 font-cormorant lg:pl-[90px] lg:pr-[90px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
          <p className="m-0 self-stretch relative tracking-[-0.02em] leading-[99%] font-bold sm:text-17xl">
            Free Consultation
          </p>
          <p className="m-0 self-stretch relative text-xl tracking-[0.05em] leading-[160%] font-poppins sm:text-base">
            Fill out the form below to request a free consulting
          </p>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[50px] md:flex-col">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover md:flex-[unset] md:self-stretch sm:hidden"
            alt=""
            src="/rectangle-227@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[48px] md:flex-[unset] md:self-stretch">
            <form
              onSubmit={handleSubmit}
              className="self-stretch flex flex-col items-start justify-start gap-[32px]"
            >
              <input
                className="font-poppins text-xl bg-[transparent] self-stretch flex flex-row py-5 pr-[50px] pl-[30px] items-center justify-start border-[2px] border-solid border-gray-300 sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:h-[70]"
                type="text"
                placeholder="Full Name"
                value={appoint?.fullName}
                onChange={handleChange}
                name="fullName"
              />

              <input
                className="font-poppins text-xl bg-[transparent] self-stretch flex flex-row py-5 pr-[50px] pl-[30px] items-center justify-start border-[2px] border-solid border-gray-300 sm:h-[70]"
                type="text"
                placeholder="Email Address"
                value={appoint?.email}
                onChange={handleChange}
                name="email"
              />
              <input
                className="font-poppins text-xl bg-[transparent] self-stretch flex flex-row py-5 pr-[50px] pl-[30px] items-center justify-start border-[2px] border-solid border-gray-300 sm:h-[70]"
                type="text"
                placeholder="What type of your cases?"
                value={appoint?.question}
                onChange={handleChange}
                name="question"
              />
              <textarea
                className="bg-[transparent] font-poppins text-xl self-stretch flex flex-row pt-5 pb-[281px] pr-[50px] pl-[30px] items-start justify-start border-[2px] border-solid border-gray-300 sm:h-[150]"
                placeholder="How can we help you?"
                value={appoint?.message}
                onChange={handleChange}
                name="message"
              />
              <button
                type="submit"
                className="cursor-pointer [border:none] py-[15px] px-10 bg-gray-100 self-stretch h-[72px] flex flex-row box-border items-center justify-center hover:bg-sandybrown"
              >
                <span className="flex-1 relative text-5xl leading-[180.02%] font-medium font-poppins text-white text-center">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeConsultation;
