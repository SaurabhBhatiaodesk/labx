import React from "react";
import Image from "next/image";
import owoner from "../../../../public/Images/Home/lab-x-owner.svg";
import MainButton from "@/components/MainButton/MainButton";
import "./FixLabx.css";
import bharatmobile from "../../../../public/Images/Home/bharat 1.svg";

const FixLabx = () => {
  return (
    // <div>FixLabx LabX Mobile Tech</div>

    <>
      <div className="bg-[url('/Images/Home/LabXMobileTech.svg')]  gk bg-no-repeat bg-cover bg-fixed bg-center	">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] xl:grid-cols-[2fr_4fr_2fr] items-center  md:px-[30px]  ">
          <div className="owener-image">
            <Image
              className="h-[22rem] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] 3xl:h-[100%] w-full lg:block hidden"
              src={owoner}
              alt=""
            />
            <Image
              className="h-[19rem] lg:h-[26rem] xl:h-[26rem] 2xl:h-[26rem] 3xl:h-[32rem] w-full lg:hidden block"
              src={bharatmobile}
              alt=""
            />
          </div>
          <div className="text-center lg:p-0 p-4">
            <span className="text-[#696969]">Mobile Repair</span>
            <h2 className="text-[#040404] text-[32px]  lg:text-[38px] 2xl:text-[42px] font-[800] pb-3">
              LabX Mobile Repair
            </h2>
            <p className="text-black ">
           
            {" I'm Bharat Dhingra, the founder of LabX, dedicated to providing exceptional, complex mobile phone repair services. With years of experience in the tech industry, I combine innovation and expertise to offer reliable solutions, ensuring quality and customer satisfaction for everyone who trusts LabX."}

            </p>
            <MainButton MainButton="READ MORE" link="/about-us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FixLabx;
