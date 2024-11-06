"use client";
import React, { useState } from "react";
import Image from "next/image";
import hammer from "../../../../public/Images/Home/hammer.svg";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import pointingright from "../../../../public/Images/icons/pointingright.svg";
import "./DeliveryTo.css"

interface Tab {
  id: number;
  label: string;

  content: string;
  contentf2?: string;
  contentf3?: string;
  contentf4?: string;
  contentf5?: string;
  button?: string;
}

const VerticalTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      id: 0,
      label: "Screen Refurbishment",
 
      content: "LabX Professional Screen Refurbishment Services:",
      contentf2:
        "Expert B2B Screen Refurbishing: At LabX, we specialize in refurbishing phone screens for businesses, offering high-quality, cost-effective solutions to repair shops, retailers, and wholesalers.",
      contentf3:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf4:
        "Fair and Transparent Grading: We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      contentf5:
        "Fast Turnaround Time: We understand the urgency of business needs, which is why we offer quick and efficient refurbishing services without compromising quality.",

      button: "LEARN MORE",
    },
    {
      id: 1,
      label: "Training",
    
      content: "LabX Professional Screen Refurbishment Services:",
      contentf2:
        "Fair and Transparent Grading: We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      contentf3:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf4:
        "Fast Turnaround Time: We understand the urgency of business needs, which is why we offer quick and efficient refurbishing services without compromising quality.",
      button: "LEARN MORE",
    },
    {
      id: 2,
      label: "Mail In Repair",
   
      content: "LabX Professional Screen Refurbishment Services:",
      contentf2:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf3:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf4:
        "Fast Turnaround Time: We understand the urgency of business needs, which is why we offer quick and efficient refurbishing services without compromising quality.",
      button: "LEARN MORE",
    },
    {
      id: 3,
      label: "Repair Solutions",

      content: "LabX Professional Screen Refurbishment Services:",
      contentf2:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf3:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf4:
        "Fast Turnaround Time: We understand the urgency of business needs, which is why we offer quick and efficient refurbishing services without compromising quality.",
      button: "LEARN MORE",
    },
    {
      id: 4,
      label: "B2B Repair",
  
      content: "LabX Professional Screen Refurbishment Services:",
      contentf2:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf3:
        "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      contentf4:
        "Fast Turnaround Time: We understand the urgency of business needs, which is why we offer quick and efficient refurbishing services without compromising quality.",
      button: "LEARN MORE",
    },
  ];

  return (
    <section
      className="py-4 lg:py-[60px]"
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <MainHeading Heading="Ship Your Device To Us" />
        <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />

        <div className="grid  xl:grid-cols-[1fr_3fr_1fr]  lg:grid-cols-[3fr_6fr] gap-4">
          <div className="flex flex-col w-full 3xl:gap-4 2xl:gap-8  xl:gap-8 gap-[5px]  lg:gap-0 md:gap-[8px] xl:p-4 xl:justify-normal lg:justify-between">
            {tabs.map((tab) => (
       <button
       key={tab.id}
       className={`p-3 text-white rounded-[50px] border-[1.5px] text-base tracking-[1.2px] ${
         activeTab === tab.id ? "active-tab" : "bg-opacity-50 hover:bg-opacity-75"
       }`}
       onClick={() => setActiveTab(tab.id)}
       data-selected={tab.id.toString()} // This will be used in CSS for styling
       role="tab"
     >
       {tab.label}
     </button>
     
            ))}
          </div>
          <div className="flex-1 xl:p-4">
            <h3>{tabs[activeTab].content}</h3>
            <div className="flex items-start gap-4">
              <Image src={pointingright} alt="" />
              <div>
                <p>{tabs[activeTab].contentf2}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image src={pointingright} alt="" />
              <div>
                <p>{tabs[activeTab].contentf3}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image src={pointingright} alt="" />
              <div>
                <p>{tabs[activeTab].contentf4}</p>
              </div>
            </div>

            {/* Conditionally render contentf5 if it exists */}
            {tabs[activeTab].contentf5 && (
              <div className="flex items-start gap-4">
                <Image src={pointingright} alt="" />
                <div>
                  <p>{tabs[activeTab].contentf5}</p>
                </div>
              </div>
            )}

            <button className="border-[1px] py-3 px-5 rounded-[50px] text-sm bg-[#43C6AC] text-black border-[#43C6AC] font-semibold">
              {tabs[activeTab].button}
            </button>
          </div>
          <div className="p-4 hidden xl:block ">
            <Image src={hammer} alt="Hammer Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTabs;
