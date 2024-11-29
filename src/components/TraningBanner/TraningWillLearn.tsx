import React from "react";
import Image from "next/image";
import checkmark from "../../../public/Images/icons/checkmark.svg";
import moniter from "../../../public/Images/icons/monitor.svg";
import arrowright from  "../../../public/Images/icons/arrowright.svg";
import clockbig from  "../../../public/Images/icons/clockbig.svg"

interface TraningWillLearn {
  title: string;
  param1: string;
  param2:string;
  param3:string;
  // backgroundImage: string;
  // AdminImage: string;
  // link: any; 
  // courseName:string;
  // courseRating:any;
  // courseHour:any;
  // Duration:any;
  // Price:any;
}

function TraningWillLearn({
  title,
  param1,
  param2,
  param3,
  // backgroundImage,
  // AdminImage,
  // link, 
  // courseName,
  // courseRating,
  // courseHour,
  // Duration,
  // Price,

}: TraningWillLearn) {
  return (
    <>
      <div className="container py-4 lg:py-[30px]">
        <div className="grid xl:grid-cols-[4fr_2fr] lg:grid-cols-2 gap-4 ">
          <div className="space-y-4">
            <h2>{title}</h2>
            <div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt="" />
                <p>
                  {param1}
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt="" />
                <p>
                 {param2}
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt="" />
                <p>
                {param3}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 items-center">
            <div className="p-3 border-[1px] border-[#8c8c8c96] rounded-[15px] items-center">
              <Image src={moniter} alt="" />
              <h3 className="mb-1">Course Format</h3>
              <ul className="space-y-3">
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Video Tutorials</li>
                </div>

                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Checking the Task</li>
                </div>
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Pulvinar sapien </li>
                </div>
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Software</li>
                </div>
              </ul>
            </div>
            <div className="p-3 border-[1px] border-[#8c8c8c96] rounded-[15px] items-center">
              <Image src={clockbig} alt="" />
              <h3 className="mb-1">Duration Course</h3>
              <ul className="space-y-3">
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Video Tutorials</li>
                </div>

                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Checking the Task</li>
                </div>
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Pulvinar sapien </li>
                </div>
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">Software</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraningWillLearn;
