import React from "react";
import Image from "next/image";
// import datarecoverytop from "../../../public/Images/Home/datarecoverytop.png"

import datarecoverytop from "../../../public/Images/Home/datarecoverytop.png";
import pointer from "../../../public/Images/icons/pointing-right.svg";
// import pointer from "../../../";

const BoxComponents = () => {
  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  lg:p-4 p-1 items-center">
          <div>
            {" "}
            <Image src={datarecoverytop} className=" h-auto object-cover rounded-[20px] " alt=""></Image>
          </div>
          <div>
            <div className="flex-col flex">
            
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer"  />

                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                  Expertise in Complex Cases:
                  </span>
                  <p>
                  From water-damaged devices to dead motherboards, we tackle the most challenging recovery scenarios.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />

                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                  Cutting-Edge Technology:
                  </span>
                  <p>
                  Utilizing advanced tools and techniques, we maximize the chances of retrieving your valuable data
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />

                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                  Professional Service:
                  </span>
                  <p>
                  All recovery services are handled with strict confidentiality and care to ensure your data remains secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoxComponents;
