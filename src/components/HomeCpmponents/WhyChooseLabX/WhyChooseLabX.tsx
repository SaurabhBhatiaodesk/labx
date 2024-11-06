import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";
import Image from "next/image";
import Repairs from "../../../../public/Images/icons/Vector.svg";
import Transparency from "../../../../public/Images/icons/Transparency.svg"
import Recovery from "../../../../public/Images/icons/Recovery.svg"
import B2BServices from "../../../../public/Images/icons/B2B Services.svg"

const WhyChooseLabX = () => {
  return (
    // <div>WhyChooseLabX</div>

    <>
      <div>
        <div className="container">
          <MainHeading Heading="Why Choose LabX?" />
          <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />

          <div className="lg:py-8 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
              <div className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456]">
                <div className="flex justify-center">
                  <Image src={Repairs} alt="" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                  Complex Repairs Made Simple
                </h3>
                <p>
                  We specialize in repairs that others can’t fix, including
                  challenging motherboard and microsoldering repairs. When
                  others fail, we succeed.
                </p>
              </div>
              <div className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456]">
                <div className="flex justify-center">
                  <Image src={Transparency} alt="Transparency" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                Full Transparency with Proof
                </h3>
                <p>
                Our grading and repair process is 100% transparent. You'll receive photos and detailed reports for any repair decisions, so you always know what’s happening.

                </p>
              </div>
              <div className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456]">
                <div className="flex justify-center">
                  <Image src={Recovery} alt="B2BServices" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                Data Recovery Specialists
                </h3>
                <p>
                Even if your device is dead, we go the extra mile to recover your data using advanced techniques, offering a second chance for your lost files.

                </p>
              </div>
              <div className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456]">
                <div className="flex justify-center">
                  <Image src={B2BServices} alt="B2BServices" />
                </div>
                <h3 className="text-[#EDE574] lg:w-[70%] m-auto">
                Tailored B2B Services
                </h3>
                <p>
                LabX offers custom solutions for businesses, from bulk refurbishments to wholesale repairs, designed to keep your business running smoothly and efficiently.
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
