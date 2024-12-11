import React from "react";
import Image from "next/image";
import checkmark from "../../../public/Images/icons/checkmark.svg";
import moniter from "../../../public/Images/icons/monitor.svg";
import arrowright from  "../../../public/Images/icons/arrowright.svg";
import clockbig from  "../../../public/Images/icons/clockbig.svg"
import Line from "../../../public/Images/about/leap.svg";

interface TraningWillLearn {
  title: string;
  paramtitle1?:string
  paramtitle2?:string
  paramtitle3?:string
  param1: string;
  param2:string;
  param3:string;
  Course:string;
  Courseformate1:string;
  Courseformate2:string;
  Courseformate3:string;
  Courseformate4:string;
}

function TraningWillLearn({
  title,
  param1,
  param2,
  param3,
  paramtitle1,
  paramtitle2,
  paramtitle3,
  Course,
  Courseformate1,
  Courseformate2,
  Courseformate3,
  Courseformate4,

}: TraningWillLearn) {
  return (
    <>
      <div className="container py-4 lg:py-[30px] space-y-2 lg:space-y-4">
      <h2 className="text-center">{title}</h2>
            <Image
              height="300"
              width="500"
              src={Line}
              alt=""
              className="pb-3 m-auto"
            />
        <div className="grid xl:grid-cols-[6fr_2fr] lg:grid-cols-2 gap-4 ">
          <div className="">
           
            <div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt="" />
               
                <p>
                  <strong className="text-[22px]">{paramtitle1} </strong> {param1}


                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt="" />
                <p>
                <strong className="text-[22px]">{paramtitle2} </strong>  {param2}
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt="" />
                <p>
                <strong className="text-[22px]">{paramtitle3} </strong>  {param3}
                </p>
              </div>
            </div>
          </div>
          <div className="grid  gap-3 items-center">
            <div className="p-3 border-[1px] border-[#8c8c8c96] rounded-[15px] items-center">
              <Image src={moniter} alt="" />
              <h3 className="mb-1"> {Course}</h3>
              <ul className="space-y-3">
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base ">{Courseformate1}</li>
                </div>

                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base "> {Courseformate2}</li>
                </div>
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base "> {Courseformate3}</li>
                </div>
                <div className="flex gap-1">
                <Image src={arrowright} alt=""/>
                <li className="text-sm lg:text-base animate-zoomInOut">{Courseformate4} </li>


                </div>
              </ul>
            </div>

            {/* <div className="p-3 border-[1px] border-[#8c8c8c96] rounded-[15px] items-center">
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
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default TraningWillLearn;
