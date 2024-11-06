import React from "react";
import MainButton from "../MainButton/MainButton";
import Image from "next/image";
import bannerimage from "../../../public/Images/Home/bannerimage-top.png";
// import backbanner from "../../../public/Images/Home/back-banner.svg"

const MainBanner = () => {
  return (
    <>
      <section className="background-banner">
        <div className="main-Home-banner container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center xl:py-5">
            <div>
              <div className=" mb-4  lg:mt-[0] mt-[20px]">
                <button
                  className="px-[20px] py-[10px] border-[2px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] 
             animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[20px] tracking-[1.5px]"
                  style={{ transform: "rotate(-5deg)" }}
                >
                  Need Training?
                </button>
              </div>

              <h1 className="text-[2.6rem] font-bold text-white tracking-[1.5px] leading-tight  bg-gradient-to-r to-black py-5">
                Get Hands-On with <span className="text-[#D5C967]">Mobile</span>
                <span className="text-[#D5C967]">Board Repair</span> – Start
                Today!
              </h1>

              <p>
                LabXrepair, powered by Bharat, is a mobile phone repair business
                that will provide various services and training through a
                dynamic and responsive website and mobile app. The project will
                be divided into phases, starting with a basic live launch and
                expanding over time to include full functionalities.
              </p>
              <div className="my-4 xl:my-10">
                <MainButton MainButton="Request a Quote" />
              </div>
            </div>
            <div className="w-full">
              <Image
                className="w-full object-contain"
                src={bannerimage}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
