"use client";
import "./MainBanner.css";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";

import bannerimage from "../../../public/Images/Home/bannerimage-top.png";
import mainb1 from "../../../public/Images/Home/banner3.svg";
import mainb4 from "../../../public/Images/Home/mainb4.png";
import mainb3 from "../../../public/Images/Home/mainb3.png";
import mainb2 from "../../../public/Images/Home/mainb2.png";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import mainf1 from "../../../public/Images/BannerImages/mainf1.png";
import mainf2 from "../../../public/Images/BannerImages/mainf2.png";
import mainf3 from "../../../public/Images/BannerImages/mainf3.png";
import mainf4 from "../../../public/Images/BannerImages/mainf4.png";




export default function MainBanner() {
  const [backgroundImage, setBackgroundImage] = useState(mainf1); // State to track background image

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
    AOS.refresh(); // Refresh AOS for updated DOM
  }, []);
  const Paginationback = ["#FF0000", "#FF9966", "#6DD5ED", "#A044FF"];
  const backgroundImages = [mainf1, mainf2, mainf3, mainf4];

  const handleSlideChange = (swiper: any) => {
    const index = swiper.realIndex; // Get the real index of the slide
    setBackgroundImage(backgroundImages[index % backgroundImages.length]); // Update the background image
  };

  return (
    <>
      <section
        className="background-banner"
        data-aos="fade-in" // Apply AOS animation
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="mb-4 lg:mt-[0] mt-[0px] relative">
            <Link href="/training">
              <button
                className="px-[20px] py-[6px] border-[2px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98]
                  animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] relative top-6"
                style={{ transform: "rotate(-5deg)" }}
              >
                Need Training?
              </button>
            </Link>
          </div>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwipergk"
            spaceBetween={20}
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            onSlideChange={handleSlideChange} // Update background image and trigger animation
            breakpoints={{
              1024: { slidesPerView: 1 },
              1440: { slidesPerView: 1 },
              1600: { slidesPerView: 1 },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Get Your Device Fixed or Learn Mobile Phone Repairs
                    <span className="text-[#EDE574]">
                      {" "}
                      — LabX Repair Does It All!
                    </span>
                  </h1>
                  <p>
                    {`LabX Repair is more than just a mobile phone repair service.
                    We’re a full-service platform dedicated to quality mobile
                    phone repairing, professional training, and community
                    support. Whether you're looking to get your iPhone or
                    smartphone repaired, purchase repair parts, or enhance your
                    repair skills through our training programs, LabX Repair has
                    it all.`}
                  </p>
                  <div className="my-4 xl:my-10">
                    <MainButton
                      MainButton="Request a Quote"
                      link="/coming-soon"
                    />

                    {/* <button className="btn1"> hello</button> */}
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[450px] object-contain"
                    src={mainb1}
                    alt="Banner"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Quick Repairs, Quality Service
                    <span className="text-[#FF9966]">
                      {" "}
                      – Only at LabX Repair!
                    </span>
                  </h1>
                  <p>
                    {` LabX Repair goes beyond standard mobile repair! We're your
                    complete platform for top-quality repairs, professional
                    training, and community support. From iPhone and smartphone
                    repairs to purchasing parts and skill-building courses, LabX
                    Repair is here to meet all your mobile needs.`}
                  </p>
                  <div className="my-4 xl:my-10">
                    <MainButton MainButton="Get Started" link="/coming-soon"  color="bg-[#FF9966]" />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[450px] object-contain"
                    src={mainb2}
                    alt="Quick Repairs"

                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Expert Repairs and Training
                    <span className="text-[#6DD5ED]">
                      {" "}
                      – All at LabX Repair!
                    </span>
                  </h1>
                  <p>
                    Discover LabX Repair—more than a mobile repair service. We
                    offer quality repairs, trusted training programs, and
                    essential parts for all your repair needs. Whether fixing
                    your smartphone or learning new repair skills, LabX Repair
                    provides everything to keep you and your devices connected.
                  </p>
                  <div className="my-4 xl:my-10">
                    <MainButton
                      MainButton="Start Training"
                      link="/coming-soon"
                      color="bg-[#6DD5ED]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[450px] object-contain"
                    src={mainb3}
                    alt="Training and Repairs"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Fix Your Device, Learn to Repair
                    <span className="text-[#A044FF]"> – LabX Repair!</span>
                  </h1>
                  <p>
                    {`At LabX Repair, we do more than fix phones! We're a
                    full-service platform with expert repair solutions, quality
                    repair parts, and professional training programs. Choose
                    LabX Repair to upgrade your device or advance your
                    skills—your go-to destination for all things mobile repair.`}
                  </p>
                  <div className="my-4 xl:my-10">

                    <MainButton MainButton="Join Us Now" link="/coming-soon" color="bg-[#A044FF]" />

                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[450px] object-contain"
                    src={mainb4}
                    alt="Device Repair"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  );
}
