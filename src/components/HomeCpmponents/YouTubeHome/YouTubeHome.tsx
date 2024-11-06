"use client"
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from '@/components/ManinHeading/MainHeading'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const YouTubeHome = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
    <div className="bg-[#0b0b0b] py-5 xl:py-10">
    <div className="container relative ">
      <MainHeading Heading="YouTube Section" />
      <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />
      
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="arrow-top-right w-[100%] py-4 my-5"
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={600}
        breakpoints={{
          320: { slidesPerView: 1 },
          450: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 2 },
          1440: { slidesPerView: 2 },
        }}
      >
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 relative py-5">
        <SwiperSlide>
            <div className="youtube-1">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cD1NOCDl0bQ?si=vkdniHk6YC3fv6iw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="youtube-1">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cD1NOCDl0bQ?si=vkdniHk6YC3fv6iw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="youtube-1">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cD1NOCDl0bQ?si=vkdniHk6YC3fv6iw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
        </SwiperSlide>
        </div>

        {/* Add more SwiperSlides as needed */}
      </Swiper>
      <div
  className="custom-nav"
  style={{
    position: 'absolute',
    top: '62%',
    zIndex: 5,
    width: '100%',
    left: 0,
    right: 0,
  }}
>
<div className="custom-navigation221  flex justify-between">
        <button onClick={handlePrev} className="prev-button bg-gray-300 p-[4px] rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button onClick={handleNext} className="next-button bg-gray-300 p-[4px] rounded-full ml-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

</div>

    </div>
    </div>
    
    </>
  );
};

export default YouTubeHome;
