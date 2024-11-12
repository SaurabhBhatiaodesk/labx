import React from "react";
import MainButton from "@/components/MainButton/MainButton";
import FeeSolutionss from "../../../public/Images/FeeSolutions.png";
import Image from "next/image";

const FeeSolutions = () => {
  return (
    <>
      <div>
        <section>
          <div className="container">
            {/* course 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:py-6 py-3  items-center">
              <div className="relative w-full h-[300px] md:h-[550px]">
                <Image
                  className="object-cover rounded-[30px]"
                  src={FeeSolutionss}
                  alt="Course Image"
                  fill // Ensures the image fills its parent container responsively
                />
              </div>
              <div className="p-3 lg:p-6 bg-black text-white rounded-md ">
                <h2 className="text-3xl font-bold mb-4">
                No Fix, No Fee Solutions
                </h2>
                {/* <div className="flex gap-4 text-yellow-400 ">
                  <p className="font-semibold">Duration: 1 Week</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">Price: $2200</p>
                </div> */}
                <p className="text-base  ">
                No Fix, No Fee Solutions for your iPhone Logic Board Repair Problems. <br/> With Lifetime Warranty!
                </p>
                <ul className="space-y-2 pb-5">
                  <li>
                  We provide diverse solutions for all your circuit board microsoldering requirements, extending beyond iPhones and MacBooks to encompass Samsung and other Android mobile devices. Our services also include HDMI replacement for various game consoles, such as Sony Playstation 5 and Microsoft Xbox.
                  </li>
                  <li>
                  Whether it's replacing connectors, fixing backlights, resolving charging issues, repairing broken traces, or tackling other intricate problems, we offer a comprehensive range of expertise.
                  </li>
               
                </ul>
                <div>
                  <MainButton MainButton="Learn More" />
                </div>
                {/* <div className="my-4">
                  <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98]  animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px]">
                    By the end of this course, you'll have the confidence to
                    handle a variety of motherboard-level repairs with
                    precision.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeeSolutions;
