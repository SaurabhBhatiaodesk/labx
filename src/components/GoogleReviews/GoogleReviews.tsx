"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import jname from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png"
import Nname from "../../../public/Images/icons/N.png"
import Sname from "../../../public/Images/icons/S.png"
import Aname from "../../../public/Images/icons/A.png"
import Googletest from "../../../public/Images/icons/Googletest.svg";
import star from "../../../public/Images/icons/star.svg";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

const reviews = [
  {
    name: "Sophie Turner",
    date: "September 12, 2023",
    profileImage: Sname,
    logoImage: Googletest,
    rating: 5,
    param:"LabX Repair exceeded my expectations! They quickly repaired my iPhone screen and provided updates throughout the process. Excellent service and knowledgeable staff. Highly recommend to anyone needing phone repairs!",
  },
  {
    name: "Liam Brown",
    date: "October 5, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:"I had a great experience with LabX Repair. Their team handled my data recovery effortlessly. They were professional and kept me informed every step of the way. Truly impressive service!",
  },
  {
    name: "Ava Smith",
    date: "November 1, 2023",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:"LabX Repair made my mobile phone repair so easy! From the moment I contacted them, their customer service was fantastic. They fixed my charging port swiftly. Definitely my go-to repair shop!",
  },
  {
    name: "Noah Davis",
    date: "November 1, 2023",
    profileImage: Nname,
    logoImage: Googletest,
    rating: 5,
    param:"I needed a motherboard repair, and LabX Repair came through when others couldn't. Their expertise is unmatched, and they provided thorough updates. Very satisfied with their work and highly recommend them!",
  },
  {
    name: "Isabella Johnson",
    date: "November 1, 2023",
    profileImage: Iname,
    logoImage: Googletest,
    rating: 5,
    param:"Fantastic experience with LabX Repair! They not only fixed my phone quickly but also offered invaluable advice on maintenance. Their team is friendly and efficient. I’ll be back for sure!",
  },
  {
    name: "Ethan Wilson",
    date: "November 1, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:"LabX Repair's B2B services are top-notch! They handle our bulk repairs with efficiency and transparency. Communication is excellent, and we’ve never had an issue. Highly recommended for business needs!",
  },
  // Add more review objects as needed
];

export default function Productswiper({}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#0b0b0b]">
      <div className="container">
        <div className="py-5 xl:p-10">
          <MainHeading Heading="Our Google Reviews" />
          <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />

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
                  slidesPerView: 1,
                },
                450: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 bg-[#010101] rounded-[20px] border-[1px] border-[] shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex gap-3 items-start">
                        <Image src={review.profileImage} alt={`${review.name}'s profile`} />
                        <div>
                          <h5 className="font-semibold">{review.name}</h5>
                          <p className="text-gray-500 text-sm mb-2 ">{review.date}</p>
                        </div>
                      </div>
                      <Image src={review.logoImage} alt="Google logo" />
                    </div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, starIndex) => (
                        <Image key={starIndex} src={star} alt="star" width={20} height={20} />
                      ))}
                    </div>
                    <p
  className="font-extralight font-poppins text-[16px] leading-[24px]"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: 5, 
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  }}
>
  {review.param}
</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
