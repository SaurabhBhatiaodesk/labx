"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useEffect } from "react";
import Image from "next/image";
import Repairs from "../../../../public/Images/icons/Vector.svg";
import Transparency from "../../../../public/Images/icons/Transparency.svg";
import Recovery from "../../../../public/Images/icons/Recovery.svg";
import B2BServices from "../../../../public/Images/icons/B2B Services.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseLabX: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    // <div>WhyChooseLabX</div>

    <>
       <div>
        <div className="container" data-aos="fade-up">
          <MainHeading Heading="Why Choose LabX Repair?" />
          <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />

          <div className="lg:py-8 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
              <div className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] hover:shadow-[0_0_20px_10px_#ede57456] transition-shadow duration-300">
                <div className="flex justify-center">
                  <Image className="pb-2" src={Repairs} alt="Repairs" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                  Expertise in Complex Repairs
                </h3>
                <p>
                  We excel in fixing challenging issues that others can&apos;t handle, including intricate microsoldering and motherboard repair services. When others can&apos;t succeed, we find a solution.
                </p>
              </div>

              <div className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] hover:shadow-[0_0_20px_10px_#ede57456] transition-shadow duration-300">
                <div className="flex justify-center">
                  <Image className="pb-2" src={Transparency} alt="Transparency" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                  Complete Transparency in Our Process
                </h3>
                <p>
                  Our grading and repair process is 100% transparent. You&apos;ll receive photos and detailed reports for any repair decisions so you always know what&apos;s happening.
                </p>
              </div>

              <div className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] hover:shadow-[0_0_20px_10px_#ede57456] transition-shadow duration-300">
                <div className="flex justify-center">
                  <Image className="pb-2" src={Recovery} alt="Recovery" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                  Specialized Data Recovery
                </h3>
                <p>
                  Even if your device is non-functional, we employ advanced techniques to recover your important data, providing a valuable opportunity to retrieve lost files.
                </p>
              </div>

              <div className="p-[20px] rounded-[8px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] hover:shadow-[0_0_20px_10px_#ede57456] transition-shadow duration-300">
                <div className="flex justify-center">
                  <Image className="pb-2" src={B2BServices} alt="B2B Services" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                  Customized B2B Services
                </h3>
                <p>
                  LabX Repair offers tailored solutions for businesses, including bulk refurbishments and wholesale repairs, ensuring your operations run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseLabX;
