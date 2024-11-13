"use client";
import React, { useState } from "react";
import Image from "next/image";
import hammer from "../../../../public/Images/Home/hammer.svg";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import "./DeliveryTo.css";
import pointet from "../../../../public/Images/icons/pointingright.svg";
import DeliveryTousMobile from "./DeliveryTousMobile";
import Link from 'next/link';


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


}

const VerticalTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      id: 0,
      label: "Screen Refurbishment",
      content: "LabX Professional  Screen Refurbishment:",
      contentf2:
        "Expert B2B Screen Refurbishing: At LabX Repair, we specialize in screen refurbishment services for businesses, offering high-quality, cost-effective solutions to repair shops, retailers, and wholesalers.",
      contentf3:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf4:
        "Fair and Transparent Grading: We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      contentf5:
        "Fast Turnaround Phone Repair: We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "LEARN MORE",
      link: "/coming-soon",
    },
    {
      id: 1,
      label: "Phone Repair Courses",
      content: "LabX Professional Phone Repair Courses:",
      contentf2:
        "Beginner Training: Our beginner phone repairing course covers essential phone repairs, including screen replacement services and charging port repairs. Gain hands-on experience and confidence in your repair skills.",
      contentf3:
        "Advanced Training: In our advanced course, you will master complex repairs like motherboard and microsoldering training. Enhance your skill set to tackle challenging issues with precision and professionalism.",
      contentf4:
        "Software Training: This course focuses on essential software repairs, including phone flashing, unlocking, and other software fixes. Learn how to troubleshoot and resolve software-related problems effectively.",
      contentf5:
        "Screen Refurbishing Training: Learn how to restore damaged screens to their original quality. Master the techniques needed to refurbish screens for a variety of devices.",
      button: "LEARN MORE",
      link: "/coming-soon",
    },
    {
      id: 2,
      label: "Mail In Repair",
      content: "LabX Professional Mail In Repair:",
      contentf2:
        "Review Our Pricing: Check our Price List for no-fix, no-fee pricing on common logic board issues. A $66 service fee applies for devices with previous repair attempts.",
      contentf3:
        "Start Your Repair: Click Start Repair to provide details about your device and its issues. You’ll receive a quote and mailing instructions within 24 hours.",
      contentf4:
        "Need Help Now?: For immediate assistance, call us directly to start the repair process right away.",
      contentf5:
        "Send Your Device: Once approved, follow the provided mailing instructions to ship your device to us securely.",
      contentf6:
        "Device Intake and Repair: Upon receipt, we’ll confirm via email and place your device in the repair queue, notifying you of any updates during the process.",
      button: "LEARN MORE",
      link: "/coming-soon",
    },
    {
      id: 3,
      label: "B2B Phone Repair",
      content: "LabX Professional B2B Phone Repair:",
      contentf2:
        "Competitive Pricing:Our pricing is competitive with one standard rate for both end users and shops. We focus on providing high-quality repair services and offer support to businesses when they need reliable, cost-effective solutions for their repair needs.",
      contentf3:
        "Bulk Repair Solutions Our infrastructure is designed to handle bulk repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our services to match your volume",
      contentf4:
        "Custom Repair Solutions:We offer tailored repair solutions to suit your business requirements, whether you need bulk repairs, iphone parts, screen refurbishing, or specialized services. Our flexible offerings can adapt to your unique needs.",
      contentf5:
        "Repair Tracking and Updates:Stay informed with our comprehensive mobile phone repair tracking system. We provide automated updates at each stage, ensuring you always know the status of your devices throughout the mobile phone repair process",

      contentf6:
        "Easy B2B Account Setup:Setting up a B2B account is straightforward. Complete the Apply for Business Account form on our website, and your account will be activated within moments, providing you with fast turnaround time for exclusive B2B phone repair services.",
      button: "LEARN MORE",
      link: "/coming-soon",
    },
    {
      id: 4,
      label: "Data Recovery",
      content: "LabX Professional Data Recovery:",
      contentf2:
        "Data from Dead: We can do data recovery from damaged phones that won’t turn on due to hardware damage, shock, or water exposure",
      contentf3:
        "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      contentf4:
        "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      contentf5:
        "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "LEARN MORE",
      link: "/coming-soon",
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
      className="py-4 lg:py-[60px]"
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container bgchange">
        <MainHeading Heading="Get a Quick Look at What We Offer" />
        <MainTitle Title="Take a quick look at our range of mobile phone repair services tailored to meet all your needs, from expert repairs and training programs to quality parts and data recovery — everything under one roof!" />
        <div className="lg:block hidden">
          <div className="grid xl:grid-cols-[1fr_3fr_1fr] lg:grid-cols-[3fr_6fr] gap-4 ">
            <div className="flex flex-col w-full gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`p-3 text-white rounded-[50px] border-[1.5px] text-base tracking-[1.2px] ${
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
              <h3>{tabs[activeTab].content}</h3>
              {[
                tabs[activeTab].contentf2,
                tabs[activeTab].contentf3,
                tabs[activeTab].contentf4,
                tabs[activeTab].contentf5,
                tabs[activeTab].contentf6,
              ]
                .filter(Boolean)
                .map((content, index) => (
                  <div className="flex items-start gap-4" key={index}>
                    <Image
                      className="w-[30px] h-[30px]"
                      src={pointet}
                      alt="Pointing Right Icon"
                      width={50}
                      height={50}
                    />
                    <div>
                      <p>{content}</p>
                    </div>
                  </div>
                ))}

{/* {tabs[activeTab].button && tabs[activeTab].link && (
  <Link href={tabs[activeTab].link} passHref>
    <a
      className="border-[0.5px] py-3 px-5 rounded-[50px] text-sm text-white font-[500]"
      style={{
        background: getGradientColor(activeTab),
        borderColor: getGradientColor(activeTab),
      }}
    >
      {tabs[activeTab].button}
    </a>
  </Link>
)} */}
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
            <div className="p-4 hidden xl:block">
              <Image src={hammer} alt="Hammer Icon" />
            </div>
          </div>
        </div>

        <section className="lg:hidden block">
          <DeliveryTousMobile></DeliveryTousMobile>
        </section>
      </div>
    </section>
  );
};

export default VerticalTabs;
