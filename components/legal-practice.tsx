import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import LawCard from "./law-card";
import { Specialtie, Specialties } from "../model/Specialties.model";
import useFetchData from "../hooks/useDataFetch";

const LegalPractice: NextPage = () => {
  const { data } = useFetchData<Specialties>("/specialties?populate=*");

  return (
    <div
      id="legal-service"
      className="self-stretch bg-white flex flex-col py-[127px] px-[92px] items-center justify-start gap-[92px] text-center text-37xl text-gray-100 font-cormorant lg:pl-20 lg:pr-20 lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <p className="m-0 self-stretch relative tracking-[-0.02em] leading-[99%] font-bold sm:text-17xl">
          <span className="block">{`The Realm Where `}</span>
          <span className="block">We Exercise Legal Practice</span>
        </p>
        <p className="m-0 self-stretch relative text-xl tracking-[0.05em] leading-[160%] font-poppins sm:text-base">
          In the realm of legal practice, complexities converge of individuals
        </p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[45px] text-left text-29xl md:flex-col">
        {data?.data?.map((item: Specialtie, index: number) => {
          return (
            <div key={index}>
              <LawCard
                image={item?.attributes?.img?.data[0]?.attributes?.url}
                title={item?.attributes?.name_of_specialty}
                description={item?.attributes?.description as string}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LegalPractice;
