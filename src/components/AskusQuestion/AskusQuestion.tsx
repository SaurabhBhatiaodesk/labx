"use client";

import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import Image from "next/image";
import faqimages from "../../../public/Images/Home/faqimages.png";
import MainHeading from "../ManinHeading/MainHeading";


export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  // Sample data for the accordion content
  const accordionData = [
    {
      title: "What types of devices do you repair?",
      content:
        "We repair a wide range of mobile devices, including iPhones, Android phones, tablets, and MacBooks. We specialize in logic board repairs, microsoldering, and screen refurbishments.",
    },
    {
      title: "What types of repairs do you specialize in?",
      content:
        "Our expertise includes screen replacement, motherboard repairs, data recovery, and micro soldering. We also handle complex repairs like Face ID issues, and water damage recovery.",
    },
    {
      title: "Do you offer any warranties on your repairs?",
      content:
        "Yes, all repairs come with a 1 Year warranty on parts and workmanship. This ensures that if the same issue reoccurs, we will repair it free of charge, provided no further damage has occurred to the device.",
    },
    {
      title: "What is the warranty on liquid-damaged devices?",
      content:
        "We do not recommend repairing liquid-damaged devices and suggest only data recovery services. If the customer insists on repair, we do not provide any warranty, including for the replaced parts.",
    },
    {
      title: "Will all functions work on my dead device after repair?",
      content:
        "No guarantees can be made. The initial quote covers the visible issue, e.g., turning on a dead device. Since devices have numerous functions, issues like a non-working camera or mic will require a separate quote unless the fault is minor, in which case we’ll address it during the repair. Major issues will need re-quoting.",
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
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-5 xl:py-10 bg-[url('/Images/Home/faq.svg')] bg-no-repeat bg-cover">
      <div className="container">
        <MainHeading Heading="General FAQs" color="black" />
        <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
          <div>
            <div className="flex flex-col xl:space-y-2">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <button
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() => handleToggle(index)}
                  >
                    <h3 className="text-black xl:text-[24px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
                      {item.title}
                    </h3>
                    {active === index ? (
                      <GrSubtract color="black" />
                    ) : (
                      <LuPlus color="black" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out`}
                    style={{
                      maxHeight: active === index ? "500px" : "0px",
                    }}
                  >
                    <p className="py-4 pt-0 text-[#0B0B0B]">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="seconf-grid">
            <div className="flex justify-center">
              <Image
                className="lg:h-auto h-[300px] object-contain"
                src={faqimages}
                alt="Mobile repair"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
