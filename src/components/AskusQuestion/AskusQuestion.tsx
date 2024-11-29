"use client";

import MainHeading from "../ManinHeading/MainHeading";
import MainTitle from "../MainTitle/MainTitle";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import Image from "next/image";
import mobilerepair from "../../../public/Images/Home/mobileRepair.svg"


export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  // Sample data for the accordion content
  const accordionData = [
    {
      title: "Can I learn phone repair through a course?",
      content:
        "Yes, our phone repair coaching Australia focuses on key repair techniques, diagnostics, and device management to help aspiring technicians enhance their skills and knowledge.",
    },
    {
      title: "Can Water damage repair fully restore my phone?",
      content:
        "In many cases, yes. Our technicians use advanced techniques to clean, dry, and repair water-damaged components, aiming for full restoration if possible.",
    },
    {
      title: "Are OEM parts used in your phone repairs?",
      content:
        "Yes, we use genuine OEM parts replacement for mobile phones whenever possible to ensure optimal compatibility, performance, and longevity for your mobile device.",
    },
    {
      title: "How soon should I bring in a water-damaged phone?",
      content:
        "Bring it in as soon as possible! Delays can lead to corrosion and further damage. Immediate action improves the chances of recovery.",
    },
    {
      title: "Do you offer warranties on replaced phone parts?",
      content:
        "Yes, we offer warranties on most replaced parts, covering defects and issues that arise after repair, giving you peace of mind.",
    },
    {
        title: "Do you offer repair services for all phone brands?",
        content:
          "Yes, we provide repair services for a wide range of phone brands, including Apple, Samsung, Xiaomi, and more. Our technicians are experienced in handling various devices and models.",
      },
      {
        title: "How long does a typical phone repair take?",
        content:
          "Most phone repairs are completed within a few hours, depending on the complexity of the issue. We strive to return your device in working condition as quickly as possible.",
      },
      
  ];

  const handleToggle = (index: number) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div>
        <section className=" py-5 xl:py-10 bg-[url('/Images/Home/faq.svg')]  bg-no-repeat bg-cover">
          <div className="container">
          <MainHeading Heading="FAQs" color="black"  />
            {/* <MainTitle
              Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing."
              color="black"
            /> */}
            <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
              <div>
                <div className="flex flex-col xl:space-y-2">
                  {accordionData.map((item, index) => (
                    <div
                      key={index}
                      className=" border-b border-gray-200 dark:border-gray-700"
                    >
                      <button
                        className="flex w-full items-center justify-between py-4 text-left"
                        onClick={() => handleToggle(index)}
                      >
                        <h3 className="  text-black xl:text-[24px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
                          {item.title}
                        </h3>
                        {active === index ? (
                          <GrSubtract color="black" />
                        ) : (
                          <LuPlus color="black" />
                        )}
                      </button>
                      {active === index && (
                        <div className="py-4 pt-0">
                          <p className="text-[#0B0B0B]">{item.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="seconf-grid">
                <div className="flex justify-center">
                <Image  className=" lg:h-auto h-[300px] object-contain" src={mobilerepair} alt="" />
                </div>
                

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
