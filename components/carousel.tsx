import React from "react";
import useFetchData from "../hooks/useDataFetch";
import { Review, Reviews } from "../model/Review.model";
import AliceCarousel from "react-alice-carousel";
import TestimonialsCard from "./testimonials-card";

const CarouselComponent = () => {
  const { data } = useFetchData<Reviews>("/reviews?populate=*");

  return (
    <>
      <div className="self-stretch bg-gray-100 flex flex-col py-[76px] px-[193px] items-center justify-start gap-[87px] lg:pl-[180px] lg:pr-[180px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border">
        <p className="m-0  text-white text-center relative tracking-[-0.02em] leading-[99%] font-bold text-37xl sm:text-17xl">
          Testimonials
        </p>
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px]">
          <AliceCarousel
            responsive={{
              0: { items: 1 },
            }}
            disableDotsControls={false}
            disableButtonsControls={true}
            mouseTracking
            items={data?.data?.map((item: Review, index: number) => {
              return (
                <div key={index}>
                  <TestimonialsCard
                    description={item?.attributes?.review_text as string}
                    rating={item?.attributes?.rating as number}
                    userName={
                      item?.attributes?.users_permissions_users?.data[0]
                        ?.attributes?.username
                    }
                    userTittle="CEO at RedX"
                  />
                </div>
              );
            })}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
