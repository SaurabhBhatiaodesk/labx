"use client";
import React, { useState } from "react";
import Image from "next/image";
import tabimage from "../../../public/Images/tabtraning.png";
// import screenreplace from "../../../../public/Images/Home/hammer.svg";
import screenreplace from "../../../public/Images/Home/hammer.svg";
import traning from "../../../public/Images/Home/Training.svg";
// import MailinRepair from "../../../../public/Images/Home/Mail in Repair.svg";
import MailinRepair from "../../../public/Images/Home/Mail in Repair.svg";
import repairsoloutaion from "../../../public/Images/Home/repairsoloutaion.svg";
import B2BRepair from "../../../../public/Images/Home/B2B Repair.svg";
import datarecovery from "../../../public/Images/Home/datarecovery.svg";
import MainHeading from "../../components/ManinHeading/MainHeading";
import MainTitle from "../../components/MainTitle/MainTitle";
// import "./TraningTab.css";
import pointet from "../../../public/Images/icons/pointingright.svg";

import Link from "next/link";
// import DeliveryTousMobile from "../HomeCpmponents/DeliveryTo-us/DeliveryTousMobile";

interface Tab {
  id: number;
  label: string;
  content: string;
  contentf2?: string;
  contentf3?: string;
  contentf4?: string;
  contentf5?: string;
  contentf6?: string;
  button?: string;
  link?: string;
  image?: any;
  contentf2title?: string;
  contentf3title?: string;
  contentf4title?: string;
  contentf5title?: string;
  contentf6title?: string;
}

const SecondTraningTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      id: 0,
      label: "basic Phone Repair Introduction",
      content: "basic Phone Repair Introduction",
      contentf2title: "Expert B2B Screen Refurbishing",
      contentf2:
        " Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs. Our expert trainers will guide you through each step, ensuring you gain practical knowledge and confidence in repairing various devices.",
      contentf3title: "State-of-the-Art Technology",
      contentf3:
        " Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs.",

      button: "Get Course",
      link: "/coming-soon",
      image: tabimage,
    },
    {
      id: 1,
      label: "basic Phone Repair Introduction",
      content: "LabX Professional Phone Repair Courses:",
      contentf2title: "Beginner Training",
      contentf2:
        " Our beginner phone repairing course covers essential phone repairs, including screen replacement services and charging port repairs. Gain hands-on experience and confidence in your repair skills.",
      contentf3title: "Advanced Training",
      contentf3:
        " In our advanced course, you will master complex repairs like motherboard and microsoldering training. Enhance your skill set to tackle challenging issues with precision and professionalism.",
      contentf4title: "Software Training ",
      contentf4:
        " This course focuses on essential software repairs, including phone flashing, unlocking, and other software fixes. Learn how to troubleshoot and resolve software-related problems effectively.",
      contentf5title: "Screen Refurbishing Training",
      contentf5:
        " Learn how to restore damaged screens to their original quality. Master the techniques needed to refurbish screens for a variety of devices.",
      button: "Get Course",
      link: "/coming-soon",
      image: tabimage,
    },
    {
      id: 2,
      label: "Mail In Repair",
      content: "basic Phone Repair Introduction",
      contentf2title: "Review Our Pricing",
      contentf2:
        "Review Our Pricing: Check our Price List for no-fix, no-fee pricing on common logic board issues. A $66 service fee applies for devices with previous repair attempts.",
      contentf3title: "Start Your Repair",
      contentf3:
        " Click Start Repair to provide details about your device and its issues. You’ll receive a quote and mailing instructions within 24 hours.",
      contentf4title: "Need Help Now?",
      contentf4:
        " For immediate assistance, call us directly to start the repair process right away.",
      contentf5title: "Send Your Device",
      contentf5:
        "Send Your Device: Once approved, follow the provided mailing instructions to ship your device to us securely.",
      contentf6title: "Device Intake and Repair",
      contentf6:
        " Upon receipt, we’ll confirm via email and place your device in the repair queue, notifying you of any updates during the process.",
      button: "Get Course",
      link: "/coming-soon",
      image: tabimage,
    },
    {
      id: 3,
      label: "B2B Phone Repair",
      content: "LabX Professional B2B Phone Repair:",
      contentf2title: "Competitive Pricing",
      contentf2:
        "Our pricing is competitive with one standard rate for both end users and shops. We focus on providing high-quality repair services and offer support to businesses when they need reliable, cost-effective solutions for their repair needs.",
      contentf3title: "Bulk Repair Solutions",
      contentf3:
        " Our infrastructure is designed to handle bulk repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our services to match your volume",
      contentf4title: "Custom Repair Solutions",
      contentf4:
        "We offer tailored repair solutions to suit your business requirements, whether you need bulk repairs, iphone parts, screen refurbishing, or specialized services. Our flexible offerings can adapt to your unique needs.",
      contentf5title: "Repair Tracking and Updates",
      contentf5:
        "Stay informed with our comprehensive mobile phone repair tracking system. We provide automated updates at each stage, ensuring you always know the status of your devices throughout the mobile phone repair process",
      contentf6title: "Easy B2B Account Setup",
      contentf6:
        "Setting up a B2B account is straightforward. Complete the Apply for Business Account form on our website, and your account will be activated within moments, providing you with fast turnaround time for exclusive B2B phone repair services.",
      button: "Get Course",
      link: "/coming-soon",
      image: tabimage,
    },
    {
      id: 4,
      label: "Data Recovery",
      content: "LabX Professional Data Recovery:",
      contentf2title: "Data from Dead ",
      contentf2:
        " We can do data recovery from damaged phones that won’t turn on due to hardware damage, shock, or water exposure",
      contentf3title: "Physically Damaged Devices ",
      contentf3:
        " Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      contentf4title: "Corrupt Operating Systems ",
      contentf4:
        " We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      contentf5title: "Failed or Broken Logic Boards",
      contentf5:
        " Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Get Course",
      link: "/coming-soon",
      image: tabimage,
    },
  ];

  const getGradientColor = (id: number) => {
    switch (id) {
      case 0:
        return "linear-gradient(74deg, #56c1c1, #000000)";
      case 1:
        return "linear-gradient(74deg, #f35520c0, #000000)";
      case 2:
        return "linear-gradient(74deg, #d5fd33a1, #000000)";
      case 3:
        return "linear-gradient(74deg, #cf2362a7, #000000)";
      case 4:
        return "linear-gradient(74deg, #2052e8a5, #000000)";
      default:
        return "linear-gradient(74deg, #56c1c1, #000000)";
    }
  };

  return (
    <section
      className="pb-4 lg:pb-[60px]"
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container bgchange">
        {/* <div className="mb-3">
          <MainHeading Heading="Course Content" />
        </div> */}

        <div className="p-3 bg-white mb-6">
          <p className="text-black mb-0 font-[600]">
            Section 2. Phone Repair Course
          </p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-[2fr_5fr] lg:grid-cols-[3fr_6fr] gap-4 ">
            <div className="flex flex-col w-full gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`p-3 lg:p-6 xl:p-6 text-white rounded-[5px] border-[1.5px] text-base tracking-[1.2px] ${
                    activeTab === tab.id
                      ? "active-tab"
                      : "bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  data-selected={tab.id.toString()}
                  role="tab"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              className={`flex-1 xl:pl-4 radial-gradient-background-${activeTab}`}
            >
              {/* Display image at the top */}
              <div className="mb-4 text-center">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  className="mx-auto"
                />
              </div>

              <h3>{tabs[activeTab].content}</h3>
              {[
                {
                  title: tabs[activeTab].contentf2title,
                  content: tabs[activeTab].contentf2,
                },
                {
                  title: tabs[activeTab].contentf3title,
                  content: tabs[activeTab].contentf3,
                },
                {
                  title: tabs[activeTab].contentf4title,
                  content: tabs[activeTab].contentf4,
                },
                {
                  title: tabs[activeTab].contentf5title,
                  content: tabs[activeTab].contentf5,
                },
                {
                  title: tabs[activeTab].contentf6title,
                  content: tabs[activeTab].contentf6,
                },
              ]
                .filter((item) => item.content)
                .map((item, index) => (
                  <div className="flex items-start gap-4" key={index}>
                    {/* <Image
                      className="w-[30px] h-[30px]"
                      src={pointet}
                      alt="Pointing Right Icon"
                      width={50}
                      height={50}
                    /> */}
                    <div>
                      <p>
                        {/* <span className="font-bold pb-[2px] border-b-[#fff563] border-b-[1px]">
                          {item.title}
                        </span> */}
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}

              {tabs[activeTab].button && tabs[activeTab].link && (
                <Link
                  href={tabs[activeTab].link}
                  passHref
                  className="border-[0.5px] py-3 px-5 rounded-[50px] text-sm text-white font-[500]"
                  style={{
                    background: getGradientColor(activeTab),
                    borderColor: getGradientColor(activeTab),
                  }}
                >
                  {tabs[activeTab].button}
                </Link>
              )}
            </div>
          </div>
        </div>

        <section className="lg:hidden block">
          {/* <DeliveryTousMobile /> */}
        </section>
      </div>
    </section>
  );
};

export default SecondTraningTab;
