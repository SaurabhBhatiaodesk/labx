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
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import Link from "next/link";
import applescreen from "../../../public/Images/icons/applescreen.svg"
import allcompany from "../../../public/Images/icons/allcompany.svg"
import samsung from "../../../public/Images/icons/samsung.svg"
import EcoFriendlyPractices from "../../../public/Images/Eco-Friendly Practices.png"
import MainButton from "@/components/MainButton/MainButton";

const Page = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Phone Screen Refurbishment Service"
          pageDescription="At LabXRepair, we specialize in professional screen refurbishment for mobile phones, tablets, and other devices. Our advanced techniques and state-of-the-art equipment allow us to restore damaged screens to their original condition, saving both time and money compared to full screen replacements.
"
          backgroundImage="/Images/BannerImages/price.png"
          AdminImage="/Images/screen-refurbishing.png"
          link="/price"
          buttonname="View Pricing"
        />

        <div className="flex justify-center flex-col max-container lg:py-5">
          <h2 className="pt-8 text-center">Why Choose Screen Refurbishment?</h2>

          <Image
            height="100"
            width="800"
            src={Line.src}
            alt=""
            className="pb-3 m-auto"
          />
          <p>
            Screen refurbishment is an eco-friendly and cost-effective
            alternative to replacing an entire display assembly. Instead of
            disposing of cracked or scratched screens, we repair and restore
            them to like-new condition, ensuring high-quality results without
            compromising on functionality.
          </p>
        </div>

        <section>
          <div className="container pt-5 mt-5">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div>
                <Image src={Glass} alt="" />
              </div>
              <div className="glass__description">
                <h2>Benefits of Working with LabXRepair</h2>
                <Image
                  height="500"
                  width="500"
                  src={Line.src}
                  alt=""
                  className="pb-3"
                />
                <div className="list__glass">
                  <div className="flex items-center gap-2">
                    <p>
                      <strong className="text-tertiary">
                        Fair Grading System:{" "}
                      </strong>{" "}
                      Fair Grading System: We provide transparent grading with
                      detailed photos for B-grade or rejected screens, ensuring
                      trust and reliability.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <strong className="text-tertiary">
                        Expertise You Can Trust:{" "}
                      </strong>{" "}
                      Our technicians are highly trained in advanced
                      refurbishment techniques, offering consistent,
                      high-quality results.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <strong className="text-tertiary">
                        Quick Turnaround:{" "}
                      </strong>{" "}
                      We understand the importance of time in your business.
                      That’s why we aim to complete refurbishment services as
                      quickly as possible without compromising quality.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p>
                      <strong className="text-tertiary">B2B Solutions:</strong>{" "}
                      Whether you’re a retailer or repair shop, our screen
                      refurbishment services are tailored for
                      business-to-business clients who require bulk repairs with
                      exceptional quality and efficiency.
                    </p>
                  </div>

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
        </section>

        {/*  */}
        <div className="bg__shade relative pb-8">
          <div className="container text-center ">
            <h2 className="pt-8">
              Get your phone back faster than replacement
            </h2>

            <Image
              height="100"
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
                <Image
                  className="w-[80px]"
                  src={ExpertB2BDisplayRefurbishing}
                  alt=""
                />
                <h3>Expert B2B Display Refurbishing</h3>
                <p>
                  At LabX, we specialize in glass only repair for phone,
                  offering high-quality, cost-effective solutions to repair
                  shops, retailers, and wholesalers.
                </p>
              </div>
              <div className="front__box">
                <Image
                  className="w-[80px]"
                  src={StateoftheArtTechnology}
                  alt=""
                />
                <h3>State-of-the-Art Technology</h3>
                <p>
                  We use the latest equipment and techniques to restore damaged
                  or defective screens, ensuring they meet factory standards.
                </p>
              </div>
              <div className="front__box">
                <Image
                  className="w-[80px]"
                  src={FairandTransparentGrading}
                  alt=""
                />
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
        <section>
          <div className="container pt-8 mt-5">
            <MainHeading Heading="Supported Models" />
            <MainTitle
              Title="We refurbish screens for a wide range of devices, including
"
            />

            <div className=" grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div className="flex flex-col justify-center text-center items-center gap-2">
                <Image src={applescreen} alt="" height={100} />
                <p className="text-tertiary">Apple iPhone and iPad</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center gap-2">
                <Image src={allcompany} alt=""  height={100}/>
                <p className="text-tertiary">Huawei, Oppo, Vivo, and other Android models</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center gap-2">
                <Image src={samsung} alt="" height={100} />
                <p className="text-tertiary">Samsung Galaxy and Note series</p>
              </div>
            </div>
          </div>
        </section>
        <div className="container pt-8 mt-5">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div>
              <Image src={Glass} alt="" />
            </div>
            <div className="glass__description">
              <h2>Why Refurbish Instead of Screen Replacement?</h2>
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
          <div className="p-8">
            <h2 className="text-center">Our Refurbishment Process</h2>
            <Image
              height="500"
              width="600"
              src={Line.src}
              alt=""
              className="pb-3 m-auto"
            />

            <div className="grid xl:grid-cols-3  lg:grid-cols-3 grid-cols-1  pt-8 mt-5 relative gap-5">
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Screen} alt="" />
                <h4>Assessment</h4>
                <p>
                  {
                    " Each screen undergoes a detailed inspection to determine the level of damage and feasibility of refurbishment."
                  }
                </p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Small} alt="" />
                <h4>Lamination and Separation</h4>
                <p>
                  {
                    "Using cutting-edge machinery, we separate the broken glass from the LCD while preserving the display's integrity."
                  }
                </p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Saprate} alt="" />
                <h4>Cleaning and Polishing</h4>
                <p>
                  {
                    "The LCD is meticulously cleaned and polished to remove any adhesive residue or surface imperfections."
                  }
                </p>
              </div>
              {/* <div className=" flex flex-col text-center justify-center items-center gap-2">
              
                <Image src={OCA} alt="" />
                <h4>Glass Replacement</h4>
                <p>{"We use high-quality, durable glass to replace the broken layer, ensuring a flawless finish."}</p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Test} alt="" />
                <h4>Final Testing</h4>
                <p>{" Every refurbished screen is thoroughly tested for touch sensitivity, brightness, and display quality before it is sent back to you."}</p>
              </div> */}
            </div>

            <div className="grid__processs_section process__section pt-8 mt-5 relative gap-5 grid xl:grid-cols-[1fr_1fr]  lg:grid-cols-2 grid-cols-1">
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={OCA} alt="" />
                <h4>Glass Replacement</h4>
                <p>
                  {
                    "We use high-quality, durable glass to replace the broken layer, ensuring a flawless finish."
                  }
                </p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Test} alt="" />
                <h4>Final Testing</h4>
                <p>
                  {
                    " Every refurbished screen is thoroughly tested for touch sensitivity, brightness, and display quality before it is sent back to you."
                  }
                </p>
              </div>
              {/* <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Align} alt="" />
                <h4>Quality Inspection</h4>
                <p>Check for defects, touch functionality, and visual clarity.                </p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Align} alt="" />
                <h4>Final Assembly</h4>
                <p>{"Reassemble the refurbished screen with a new frame if required."}</p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center gap-2">
                <Image src={Align} alt="" />
                <h4>Packaging and Labeling</h4>
                <p>{"Safely package the refurbished screen and label it for storage or shipping."}</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="bg__shade relative pt-8 bg-black">
          <div className="container">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div className="glass__description">
                <h2>
                  Advanced Technology & Equipment for Premium Mobile Phone
                  Refurbishment
                </h2>
                <Image
                  height="500"
                  width="500"
                  src={Line.src}
                  alt=""
                  className="pb-3"
                />

                <p>
                  {
                    "At our service center, we use state-of-the-art equipment for mobile phone refurbishment to ensure precision, quality, and longevity in every repair. Our advanced tools allow us to address scratches, cracks, and other screen imperfections with exceptional accuracy, restoring your device to its original clarity and responsiveness. "
                  }{" "}
                </p>
                <p>
                  {
                    "By investing in top-tier technology, we not only provide superior results but also minimize the time needed for each screen refurbishment. This commitment to high-quality equipment ensures that every refurbished phone looks and functions like new, giving our customers a premium, reliable service experience."
                  }
                </p>
                <Link href="/mail-in-repair">
                  <button className="btn">START REPAIR</button>
                </Link>
              </div>
              <div className="text-center m-auto">
                <Image src={Machine} alt="" />
              </div>
            </div>
          </div>
        </div>

        <section className="container ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  lg:p-8 p-4 items-center">
       <div><Image src={EcoFriendlyPractices} alt=""></Image></div>
       <div>
       <h2>
       Eco-Friendly Practices
                </h2>
                <Image
                  height="500"
                  width="500"
                  src={Line.src}
                  alt=""
                  className="pb-3"
                />
                <p>By choosing refurbishment, you’re contributing to a greener planet. Refurbishing reduces electronic waste and minimizes the need for new manufacturing, helping to lower the carbon footprint of your business.</p>
       </div>
          </div>
        </section>
        <section className=" py-4">
          <div className="max-container text-center">
        <MainHeading Heading="Start Your Refurbishment Today"/>

<p>{"Join hundreds of satisfied clients who trust LabXRepair for their screen refurbishment needs. Whether you have a single device or a bulk batch, we’re ready to help. Contact us today or submit your screens for refurbishment using our Mail-In Repair service!"}</p>

<MainButton MainButton="START REPAIR" link="/mail-in-repair"/>
          </div>


        </section>
      </div>
      <YouTubeHome />
      <GoogleReview />
    </>
  );
};

export default Page;
