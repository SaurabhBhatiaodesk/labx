"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./OurClient.css";
// import { TiStarFullOutline } from "react-icons/ti";
// import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import logo1 from "../../../../public/Images/Home/gadag.svg";
import logo2 from "../../../../public/Images/Home/logo4slider.svg";
import logo3 from "../../../../public/Images/Home/teckcity.svg";
import logo4 from "../../../../public/Images/Home/empire.svg";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

export default function Productswiper({}) {
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
    <div>
      <div className="container ">
        <div className=" py-5 xl:p-6 ">
          <MainHeading Heading="Our Clients" />
          <MainTitle Title="Our clients trust us for expert mobile device repair and advanced motherboard soldering solutions. We are committed to delivering fast, reliable, and high-quality service tailored to their needs." />

          <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="arrow-top-right w-[100%] py-4"
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 3000 }}
              speed={600}
              breakpoints={{
                320: {
                  // for very small mobile screens
                  slidesPerView: 2,
                },
                450: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
                1440: {
                  slidesPerView: 6,
                },
              }}
            >
              <SwiperSlide>
             
                  <div className="relative  client-slider ">
                    <Image
                      className="w-full"
                      src={logo1}
                      alt="Toyota Fortuner"
                    />
                  </div>
             
              </SwiperSlide>
              <SwiperSlide>
               
                  <div className="relative  client-slider">
                    <Image className="w-full" src={logo2} alt="Honda Civic" />
                  </div>
             
              </SwiperSlide>
              <SwiperSlide>
             
                  <div className="relative  client-slider">
                    <Image className="w-full" src={logo3} alt="BMW X5" />
                  </div>
              
              </SwiperSlide>
              <SwiperSlide>
               
                  <div className="relative  client-slider">
                    <Image className="w-full" src={logo4} alt="Mercedes Benz" />
                  </div>
              
              </SwiperSlide>
              <SwiperSlide>
               
                  <div className="relative  client-slider">
                    <Image className="w-full" src={logo1} alt="Mercedes Benz" />
                  </div>
            
              </SwiperSlide>
              <SwiperSlide>
               
                  <div className="relative  client-slider">
                    <Image className="w-full" src={logo2} alt="BMW X5" />
                  </div>
              
              </SwiperSlide>
              <SwiperSlide>
                
                  <div className="relative client-slider">
                    <Image className="w-full" src={logo3} alt="Mercedes Benz" />
                  </div>
              
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="custom-navigation">
          <button onClick={handlePrev} className="prev-button bg-gray-300 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={handleNext} className="next-button bg-gray-300 p-4 rounded-full ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="custom-navigation">
          <button onClick={handlePrev} className="prev-button bg-gray-300 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={handleNext} className="next-button bg-gray-300 p-4 rounded-full ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div> */
}
