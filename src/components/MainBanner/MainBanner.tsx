"use client";
import React, { useState, useEffect } from "react";
import MainButton from "../MainButton/MainButton";
import Image from "next/image";
import bannerimage from "../../../public/Images/Home/bannerimage-top.png";

const MainBanner = () => {
  const textArray = [
    {
      text: "Get Your Device Fixed or Learn Mobile Phone Repairs",
      highlight: " — LabX Repair Does It All!",
    },
    {
      text: "Quick Repairs, Quality Service",
      highlight: " – Only at LabX Repair!",
    },
    {
      text: "Expert Repairs and Training ",
      highlight: " – All at LabX Repair!",
    },
    {
      text: "Fix Your Device, Learn to Repair ",
      highlight: "– LabX Repair!"
    },
  ];
  const labXRepairDescription: string = `
    LabX Repair is more than just a mobile phone repair service.
    We’re a full-service platform dedicated to quality mobile phone
    repairing, professional training, and community support.
    Whether you're looking to get your iPhone or smartphone
    repaired, purchase repair parts, or enhance your repair skills
    through our training programs, LabX Repair has it all.
`;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval);
  }, [textArray.length]);

  const { text, highlight } = textArray[currentIndex];


  return (
    <>
      <section className="background-banner">
        <div className="main-Home-banner container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center xl:py-5">
            <div>
              <div className="mb-4 lg:mt-[0] mt-[20px]">
                <button
                  className="px-[20px] py-[6px] border-[2px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] 
                  animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px]"
                  style={{ transform: "rotate(-5deg)" }}
                >
                  Need Training?
                </button>
              </div>

              {/* Content Rotator */}
              <h1 className="text-[2.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                {text}
                <span className="text-[#EDE574]">{highlight}</span>
              </h1>

              <p>
                {labXRepairDescription}

              </p>
              <div className="my-4 xl:my-10">
                <MainButton MainButton="Request a Quote" link="#" />
              </div>
            </div>
            <div className="w-full">
              <Image
                className="w-full object-contain"
                src={bannerimage}
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
