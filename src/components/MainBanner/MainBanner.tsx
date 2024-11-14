// "use client";
// import React, { useState, useEffect } from "react";
// import MainButton from "../MainButton/MainButton";
// import Image from "next/image";
// import bannerimage from "../../../public/Images/Home/bannerimage-top.png";

// const MainBanner = () => {
//   const textArray = [
//     {
//       text: "Get Your Device Fixed or Learn Mobile Phone Repairs",
//       highlight: " — LabX Repair Does It All!",
//     },
//     {
//       text: "Quick Repairs, Quality Service",
//       highlight: " – Only at LabX Repair!",
//     },
//     {
//       text: "Expert Repairs and Training ",
//       highlight: " – All at LabX Repair!",
//     },
//     {
//       text: "Fix Your Device, Learn to Repair ",
//       highlight: "– LabX Repair!"
//     },
//   ];
//   const labXRepairDescription: string = `
//     LabX Repair is more than just a mobile phone repair service.
//     We’re a full-service platform dedicated to quality mobile phone
//     repairing, professional training, and community support.
//     Whether you're looking to get your iPhone or smartphone
//     repaired, purchase repair parts, or enhance your repair skills
//     through our training programs, LabX Repair has it all.
// `;

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
//     }, 3000); // Change content every 3 seconds

//     return () => clearInterval(interval);
//   }, [textArray.length]);

//   const { text, highlight } = textArray[currentIndex];

//   return (
//     <>
//       <section className="background-banner">
//         <div className="main-Home-banner container">
//           <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center xl:py-5">
//             <div>
//               <div className="mb-4 lg:mt-[0] mt-[20px]">
//                 <button
//                   className="px-[20px] py-[6px] border-[2px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98]
//                   animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px]"
//                   style={{ transform: "rotate(-5deg)" }}
//                 >
//                   Need Training?
//                 </button>
//               </div>

//               {/* Content Rotator */}
//               <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
//                 {text}
//                 <span className="text-[#fff563]">{highlight}</span>
//               </h1>

//               <p>
//                 {labXRepairDescription}

//               </p>
//               <div className="my-4 xl:my-10">
//                 <MainButton MainButton="Request a Quote" link="/training" />
//               </div>
//             </div>
//             <div className="w-full">
//               <Image
//                 className="w-full xl:h-[550px] object-contain"
//                 src={bannerimage}
//                 alt="Banner"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MainBanner;

"use client";
import "./MainBanner.css";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";
import bannerimage from "../../../public/Images/Home/bannerimage-top.png";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay, Navigation } from "swiper/modules";

export default function MainBanner() {
  return (
    <>
      <section className="background-banner">
        <div className="container ">
          <div className="mb-4 lg:mt-[0] mt-[0px] relative">
            <button
              className="px-[20px] py-[6px] border-[2px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] 
                  animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] relative  top-6"
              style={{ transform: "rotate(-5deg)" }}
            >
              Need Training?
            </button>
          </div>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwipergk"
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={600}
            breakpoints={{
              1024: { slidesPerView: 1 },
              1440: { slidesPerView: 1 },
              1600: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Get Your Device Fixed or Learn Mobile Phone Repairs
                    <span className="text-[#fff563]">
                      {" "}
                      — LabX Repair Does It All!
                    </span>
                  </h1>

                  <p>
                    {`
                    LabX Repair is more than just a mobile phone repair service.
                    We’re a full-service platform dedicated to quality mobile
                    phone repairing, professional training, and community
                    support. Whether you're looking to get your iPhone or
                    smartphone repaired, purchase repair parts, or enhance your
                    repair skills through our training programs, LabX Repair has
                    it all.`}
                  </p>

                  <div className="my-4 xl:my-10">
                    <MainButton MainButton="Request a Quote" link="/training" />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full xl:h-[550px] object-contain"
                    src={bannerimage}
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
                    <span className="text-[#fff563]">
                      {" "}
                      – Only at LabX Repair!
                    </span>
                  </h1>

                  <p>
                    Need a quick repair? At LabX Repair, we specialize in fast
                    and efficient repairs for all mobile devices. With expert
                    technicians, we guarantee the best quality service and
                    support.
                  </p>

                  <div className="my-4 xl:my-10">
                    <MainButton MainButton="Get Started" link="/repair" />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full xl:h-[550px] object-contain"
                    src={bannerimage}
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
                    <span className="text-[#fff563]">
                      {" "}
                      – All at LabX Repair!
                    </span>
                  </h1>

                  <p>
                    Our expert technicians offer top-notch repair services,
                    while our training programs help you gain valuable skills to
                    repair mobile devices like a pro. Join LabX Repair and learn
                    from the best!
                  </p>

                  <div className="my-4 xl:my-10">
                    <MainButton MainButton="Start Training" link="/training" />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full xl:h-[550px] object-contain"
                    src={bannerimage}
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
                    <span className="text-[#fff563]"> – LabX Repair!</span>
                  </h1>

                  <p>
                    At LabX Repair, you don’t just get your devices repaired,
                    you also learn the skills to fix them yourself. We offer
                    comprehensive training and hands-on experience to get you
                    started in the mobile repair industry.
                  </p>

                  <div className="my-4 xl:my-10">
                    <MainButton MainButton="Join Us Now" link="/training" />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full xl:h-[550px] object-contain"
                    src={bannerimage}
                    alt="Device Repair"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Looking for Mobile Repair Parts?
                    <span className="text-[#fff563]">
                      {" "}
                      – LabX Repair Has You Covered!
                    </span>
                  </h1>

                  <p>
                    LabX Repair is your go-to source for high-quality mobile
                    repair parts. Whether you need screens, batteries, or tools,
                    we have everything you need to make your repair business a
                    success.
                  </p>

                  <div className="my-4 xl:my-10">
                    <MainButton MainButton="Shop Parts" link="/shop" />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full xl:h-[550px] object-contain"
                    src={bannerimage}
                    alt="Repair Parts"
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
