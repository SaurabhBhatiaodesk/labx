"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import "../store_product.css"
import p1 from "../../../public/Images/productimages/p1.png";
import p2 from "../../../public/Images/productimages/p2.png";
import p3 from "../../../public/Images/productimages/p3.png";
import p4 from "../../../public/Images/productimages/p5.png";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { GoArrowRight } from "react-icons/go";

export default function Productswiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideData = [
    { src: p1, alt: "Toyota Fortuner" , Product:"  iQuick 100W 2* USB-A 2* USB-C 4- port charger power strip-white"},
    { src: p2, alt: "Honda Civic", Product:"  iQuick 100W 2* USB-A 2* USB-C 4- port charger power strip-white"},
    { src: p3, alt: "BMW X5", Product:"  iQuick 100W 2* USB-A 2* USB-C 4- port charger power strip-white"},
    { src: p4, alt: "Mercedes Benz" , Product:"  iQuick 100W 2* USB-A 2* USB-C 4- port charger power strip-white"},
    { src: p1, alt: "Audi A4" , Product:"  iQuick 100W 2* USB-A 2* USB-C 4- port charger power strip-white"},
    { src: p1, alt: "BMW X5" , Product:"  iQuick 100W 2* USB-A 2* USB-C 4- port charger power strip-white"},
    { src: p1, alt: "Mercedes Benz" , Product:"  iQuick 100W 2* USB-A 2* USB-C 4- port charger power strip-white"},
  ];

  return (
    <div className="lg:py-8 py-3 bg-[#0b0b0b]">
      <div className="container  ">
        <div className="lg:py-5 py-4 ">
          <MainHeading Heading="Parts Store" />
          <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />
        </div>
      </div>
      <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col product-slider-section p-2">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="arrow-top-right w-full py-4"
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3000 }}
          speed={600}
          breakpoints={{
            320: { slidesPerView: 2 },
            450: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
            1600: { slidesPerView: 5 },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide className="" key={index}>
              <Link href="">
                <div className="relative  ">
                  <Image className="w-full object-cover xl:h-[300px]  lg:h-[273px] h-[200px] rounded-[20px] " src={slide.src} alt={slide.alt} />
                  <div className="product">
                    <p className="product-title text-[13px] lg:text-[15px] leading-6 line mb-1">
                   {slide.Product}
                    </p>
                    <div className="price-offer-discount flex justify-between py-[5px]">
                      <div className="flex gap-3 items-center">
                        <span className="line-through text-[#6d6d6dd2] lg:text-[20px] text-[16px]">
                          $99.00
                        </span>
                        <span className="lg:text-[20px] text-[16px]">$89.00</span>
                      </div>
                      <div>
                        <span className="text-[#00BA0C] font-semibold lg:text-[20px] text-[16px]">
                          10% off
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center xl:py-[20px]">
      <button className="btn  flex items-center ">VISIT STORE <GoArrowRight fontSize={25}/></button>
      </div>
    </div>
  );
}
