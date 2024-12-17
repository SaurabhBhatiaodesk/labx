import React from "react";
import Image from "next/image";
// import datarecoverytop from "../../../public/Images/Home/datarecoverytop.png"

// import HowtoGetStarted from "../../public/Images/Home/HowtoGetStarted.png";
import HowtoGetStarted from "../../../public/Images/HowtoGetStarted.png";

import pointer from "../../../public/Images/icons/pointing-right.svg";
import MainButton from "@/components/MainButton/MainButton";
import MainHeading from "@/components/ManinHeading/MainHeading";
// import pointer from "../../../";

const DataStarted = () => {
  return (
    <>
      <section className="container py-8 lg:py-4">
        <MainHeading Heading="How to Get Started"/>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10  lg:p-4 p-1 items-center">
          <div>
            {" "}
            <Image src={HowtoGetStarted} className=" h-auto object-cover rounded-[20px] " alt=""></Image>
          </div>
          <div>
            <div className="flex-col flex">
            
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer"  />

                <div className="">
                  <p className=" text-primary">
                  Visit our Mail-In Repair page to fill out the submission form and include details about your device and the issue.
                  </p>
                  
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />

                <div className="">
                <p className=" text-primary">
                Ship your device to LabX or request a shipping label during form submission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />

                <div className="">
                <p className=" text-primary">
                Relax while we handle the rest!
                  </p>
                </div>
              </div>
            </div>
            <MainButton MainButton="START REPAIR" link="/mail-in-repair"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataStarted;
