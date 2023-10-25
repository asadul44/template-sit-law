import type { NextPage } from "next";
import { Accordion } from "flowbite-react";
import useFetchData from "../hooks/useDataFetch";
import { Faq, Faqs } from "../model/Faq.model";

const FAQContainer: NextPage = () => {
  const { data } = useFetchData<Faqs>("/faqs");

  return (
    <div className="self-stretch bg-gray-100 flex flex-col py-[100px] sm:py-[40px] px-[100px] items-center justify-start gap-[87px] text-center text-37xl text-white font-cormorant lg:pl-[90px] lg:pr-[90px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
      <p className="m-0 self-stretch relative tracking-[-0.02em] leading-[99%] font-bold sm:text-17xl mb-6">
        Frequently Asked Questions!
      </p>

      {data?.data?.map((item: Faq, index: any) => {
        return (
          <Accordion
            collapseAll
            className="self-stretch custom-accordion border-0 sm:-mt-20 -mt-10"
            key={index}
          >
            <Accordion.Panel>
              <Accordion.Title className="bg-gray-200 focus:ring-0 hover:bg-gray-200 text-white text-[15px] sm:text-[12px] font-medium tracking-[0.05em]">
                <p className="m-0 font-extralight">
                  {item?.attributes?.question}
                </p>
              </Accordion.Title>
              <Accordion.Content className="m-0 text-sm font-normal font-poppins text-left">
                <p className="m-0">{item?.attributes?.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FAQContainer;
