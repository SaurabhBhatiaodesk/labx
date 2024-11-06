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
      title: "Will I be updated throughout the repair process?",
      content:
        "Content for Accordion 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "How long will i be without my device?",
      content:
        "Content for Accordion 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "I have a busy schedule, can you accommodate?",
      content:
        "Content for Accordion 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      title: "Is your repair work guaranteed?",
      content:
        "Content for Accordion 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
    {
      title: "Can I only book online?",
      content:
        "Content for Accordion 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
        title: "Will you wipe my device?",
        content:
          "Content for Accordion 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      },
      {
        title: "Is my data Safe?",
        content:
          "Content for Accordion 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      },
      {
        title: "How long will i be without my device?",
        content:
          "Content for Accordion 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
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
            <MainHeading
              Heading="Most People Ask us These Questions . . ."
              color="black"
            />
            <MainTitle
              Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing."
              color="black"
            />
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
