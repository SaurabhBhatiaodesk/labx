import React from "react";
import Image from "next/image";
import course2 from "../../../../public/Images/course2.png";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainButton from "@/components/MainButton/MainButton";

const CourseHighlights = () => {
  return (
    <>
      <div className="py-4 lg:py-[40px]">
        <div className="container">
          <div className="">
            <MainHeading Heading="Course Highlights" />
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:py-6 py-3  items-center">
              <div className="relative w-full h-[300px] md:h-[550px]">
                <Image
                  className="object-cover rounded-[30px]"
                  src={course2}
                  alt="Course Image"
                  fill // Ensures the image fills its parent container responsively
                />
              </div>
              <div className="p-6 bg-black text-white rounded-md ">
                <h2 className="text-3xl font-bold mb-4">
                  Advanced Motherboard Repair – Micro Soldering (Level 1)
                </h2>
                <div className="flex gap-4 text-yellow-400 ">
                  <p className="font-semibold">Duration: 1 Week</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">Price: $2200</p>
                </div>
                <p className="text-base  ">
                  Our Level 1 course offers hands-on training in essential micro
                  soldering techniques for mobile device motherboard repairs.
                  Ideal for technicians ready to expand their skills, this
                  course covers:
                </p>
                <ul className="space-y-2 pb-5">
                  <li>
                    <strong className="text-yellow-400">
                      Component Familiarity:
                    </strong>{" "}
                    Learn to work with essential components and advanced tools,
                    including reballing techniques.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                      Schematics and Diagnostics:
                    </strong>{" "}
                    Understand how to read board schematics, trace faults, and
                    diagnose common issues.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                      Repair Techniques:
                    </strong>{" "}
                    Tackle problems like no image, no backlight, underfilled
                    chips, and create jumpers for board repairs.
                  </li>
                </ul>
                <div >
                <MainButton MainButton="Learn More" />
                </div>
                <div className="my-4">
                    <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98]  animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px]">
                    By the end of this course, you'll have the confidence to handle a variety of motherboard-level repairs with precision.
                    </div>
                </div>
                
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHighlights;
