import React from "react";
import Image from "next/image";
import owoner from "../../../../public/Images/Home/lab-x-owner.svg";
import MainButton from "@/components/MainButton/MainButton";
import "./FixLabx.css";
import bharatmobile from "../../../../public/Images/Home/bharat 1.svg"

const FixLabx = () => {
  return (
    // <div>FixLabx LabX Mobile Tech</div>

    <>
      <div className="bg-[url('/Images/Home/LabXMobileTech.svg')]  gk bg-no-repeat bg-cover bg-fixed bg-center	">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] xl:grid-cols-[2fr_4fr_2fr] items-center pxs-0 md:px-[30px]  ">
          <div className="owener-image">
            <Image
              className="h-[22rem] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] 3xl:h-[100%] w-full lg:block hidden"
              src={owoner}
              alt=""
            />
               <Image
              className="h-[19rem] lg:h-[100%] xl:h-[26rem] 2xl:h-[30rem] 3xl:h-[32rem] w-full lg:hidden block"
              src={bharatmobile}
              alt=""
            />

          </div>
          <div className="text-center lg:p-0 p-4">
            <span className="text-[#696969]">Mobile Repair</span>
            <h2 className="text-[#040404] text-[32px]  lg:text-[42px] 2xl:text-[42px] font-[800] pb-3">
            LabX Repair Mobile Repair 
            </h2>
            <p className="text-black pb-5">
              LABX’s Mobile Tech is a professional and skilful Cell Phone
              repairing services provider in Melbourne West. You can visit our
              outlet in Fraser Rise. We’ve certified and endured cell phone
              technicians available in our stores.{" "}
            </p>
            <MainButton MainButton="LEARN MORE" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FixLabx;
