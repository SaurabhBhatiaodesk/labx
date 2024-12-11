"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import ExpertB2BDisplayRefurbishing from "../../../public/Images/icons/Expert B2B Display Refurbishing.svg";
import StateoftheArtTechnology from "../../../public/Images/icons/State-of-the-Art Technology.svg";
import FairandTransparentGrading from "../../../public/Images/icons/Fair and Transparent Grading.svg";
import FastTurnaroundTime from "../../../public/Images/icons/Fast Turnaround Time.svg";


// import Quality from "../../../public/Images/quality.svg";
import Glass from "../../../public/Images/glass.png";
import Machine from "../../../public/Images/machine.svg";
import Icon from "../../../public/Images/liststyle.svg";
import Screen from "../../../public/Images/screen.svg";
import Small from "../../../public/Images/small.svg";
import Saprate from "../../../public/Images/saprate.svg";
import OCA from "../../../public/Images/oca.svg";
import Test from "../../../public/Images/test.svg";
import Laminate from "../../../public/Images/laminate.svg";
import Align from "../../../public/Images/align.svg";
import Round_icon from "../../../public/Images/round_icon.svg";
import Arrow_icon from "../../../public/Images/errow_icon.svg";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import GoogleReview from "@/components/GoogleReviews/GoogleReviews";
import Line from "../../../public/Images/about/leap.svg";

import "./screen.css";

const Page = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Phone Screen Refurbishment Service"
          pageDescription="Expert Phone Screen Refurbishment – Crystal Clear, Scratch-Free, and Ready to Go! Fast Turnaround & Affordable Prices."
          backgroundImage="/Images/BannerImages/price.png"
          AdminImage="/Images/screen-refurbishing.png"
          link="/price"
        />
        <div className="bg__shade relative pb-8">
          <div className="container text-center ">
            <h2 className="pt-8">
              Why Choose LabX for Phone Screen Refurbishment?
            </h2>
            <Image
              height="300"
              width="1000"
              src={Line.src}
              alt=""
              className="pb-3 m-auto"
            />

            <p>
              When your phone is damaged, sometimes only the front glass needs
              to be replaced as long as the screen and touch function working
              properly.
            </p>
            <div className="grid grid-cols-1 main__box_section xl:grid-cols-4 lg:grid-cols-2 gap-2">
              <div className="front__box">
                <Image className="w-[80px]" src={ExpertB2BDisplayRefurbishing} alt="" />
                <h3>Expert B2B Display Refurbishing</h3>
                <p>
                  At LabX, we specialize in glass only repair for phone,
                  offering high-quality, cost-effective solutions to repair
                  shops, retailers, and wholesalers.
                </p>
              </div>
              <div className="front__box">
              <Image className="w-[80px]" src={StateoftheArtTechnology} alt="" />
                <h3>State-of-the-Art Technology</h3>
                <p>
                  We use the latest equipment and techniques to restore damaged
                  or defective screens, ensuring they meet factory standards.
                </p>
              </div>
              <div className="front__box">
              <Image className="w-[80px]" src={FairandTransparentGrading} alt="" />
                <h3>Fair and Transparent Grading</h3>
                <p>
                  We provide a clear and honest grading system. If a screen is
                  rejected or downgraded to a B grade, we will provide a
                  detailed explanation along with photos as proof.
                </p>
              </div>
              <div className="front__box">
              <Image className="w-[80px]" src={FastTurnaroundTime} alt="" />
                <h3>Fast Turnaround Time</h3>
                <p>
                  We understand the urgency of business needs, which is why we
                  offer quick and efficient refurbishing or screen repair
                  service without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-8 mt-5">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div>
              <Image src={Glass} alt="" />
            </div>
            <div className="glass__description">
              <h2>Why Refurbish Instead of Screen Replacement?
              </h2>
              <Image
                height="500"
                width="500"
                src={Line.src}
                alt=""
                className="pb-3"
              />

              {/* <p>
                In most cases, we can only replace the glass / touch screen
                digitizer after phone damage.
              </p> */}
              <div className="list__glass">
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt="" />
                  </span>
                  Retain original brightness, clarity, and color accuracy
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt="" />
                  </span>
                  Refurbishment is more affordable than full replacement
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt="" />
                  </span>
                  Get your phone back faster than replacement
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt="" />
                  </span>
                  Reduces electronic waste for a sustainable choice
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt="" />
                  </span>
                  Ideal for scratches or small cracks without replacement
                </p>
                {/* <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt="" />
                  </span>
                  All buttons and sensors work properly.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pb-8 relative bg__shade ">
          <div className="container">
            <h2 className="text-center">Phone Screen Refurbishing Process</h2>
            <Image
              height="500"
              width="500"
              src={Line.src}
              alt=""
              className="pb-3 m-auto"
            />

            <div className="grid__processs_section pt-8 mt-5 relative">
              <div className="process__box box_1">
                <Image src={Screen} alt="" />
                <p>{"Examine the screen’s condition for scratches or cracks."}</p>
              </div>
              <div className="process__box box_2">
                <Image src={Small} alt="" />
                <p>Clean the screen to remove dirt and debris.</p>
              </div>
              <div className="process__box box_3">
                <Image src={Saprate} alt="" />
                <p>Buff out surface scratches to restore smoothness.</p>
              </div>
              <div className="process__box box_4">
                <Image src={OCA} alt="" />
                <p>Apply sealant to stabilize minor cracks effectively.</p>
              </div>
            </div>
            <div className="grid__processs_section process__section pt-8 mt-5 relative">
              <div className="process__box box_1">
                <Image src={Test} alt="" />
                <p>Polish the screen for clear, bright display quality.</p>
              </div>
              <div className="process__box box_2">
                <Image src={Laminate} alt="" />
                <p>Add a coating to prevent future scratches and wear.</p>
              </div>
              <div className="process__box box_3">
                <Image src={Align} alt="" />
                <p>
                Inspect the screen for clarity and functionality.

                </p>
              </div>
              <div className="process__box box_3" >
                <Image src={Align} alt="" />
                <p>Ensure satisfaction and prepare the device for return.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg__shade relative pt-8 bg-black">
          <div className="container">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div className="glass__description">
                <h2>Advanced Technology & Equipment for Premium Mobile Phone Refurbishment</h2>
                <Image
                  height="500"
                  width="500"
                  src={Line.src}
                  alt=""
                  className="pb-3"
                />

                <p>{"At our service center, we use state-of-the-art equipment for mobile phone refurbishment to ensure precision, quality, and longevity in every repair. Our advanced tools allow us to address scratches, cracks, and other screen imperfections with exceptional accuracy, restoring your device to its original clarity and responsiveness. "} </p>
                <p>
                {"By investing in top-tier technology, we not only provide superior results but also minimize the time needed for each screen refurbishment. This commitment to high-quality equipment ensures that every refurbished phone looks and functions like new, giving our customers a premium, reliable service experience."}
                </p>
             
                <button className="btn">Request a Quote</button>
              </div>
              <div className="text-center m-auto">
                <Image src={Machine} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <YouTubeHome />
      <GoogleReview />
    </>
  );
};

export default Page;
