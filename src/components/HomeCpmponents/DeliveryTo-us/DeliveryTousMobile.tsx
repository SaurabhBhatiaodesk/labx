import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import pointet from "../../../../public/Images/icons/pointingright.svg";

// import screenreplace from "../../../../public/Images/Home/screen.svg";
// import traning from "../../../../public/Images/Home/phone.svg";
// import MailinRepair from "../../../../public/Images/Home/mail.svg";
// import repairsoloutaion from "../../../../public/Images/Home/repairsoloutaion.svg";
// import B2BRepair from "../../../../public/Images/Home/B2B Repair.svg";
// import datarecovery from "../../../../public/Images/Home/data.svg";


import arrow1 from "../../../../public/Images/icons/arrow1-1.svg";
import arrow2 from "../../../../public/Images/icons/arrow1-2.svg";
import arrow3 from "../../../../public/Images/icons/arrow1-3.svg";
import arrow4 from "../../../../public/Images/icons/arrow1-4.svg";
import arrow5 from "../../../../public/Images/icons/arrow1-5.svg";

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
  image?: any;
}

const tabs: Tab[] = [
  {
    id: 0,
    label: "Screen Refurbishment",
    content: "LabX Professional Screen Refurbishment Services:",
    contentf2:
      "Expert B2B Screen Refurbishing: At LabX Repair, we specialize in screen refurbishment services for businesses, offering high-quality, cost-effective solutions to repair shops, retailers, and wholesalers.",
    contentf3:
      "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
    contentf4:
      "Fair and Transparent Grading: We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
    contentf5:
      "Fast Turnaround Phone Repair: We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
    button: "LEARN MORE",
    image: arrow1,
  },
  {
    id: 1,
    label: "Phone Repair Courses",
    content: "LabX Professional Screen Refurbishment Services:",
    contentf2:
      "Beginner Training: Our beginner phone repairing course covers essential phone repairs, including screen replacement services and charging port repairs. Gain hands-on experience and confidence in your repair skills.",
    contentf3:
      "Advanced Training: In our advanced course, you will master complex repairs like motherboard and microsoldering training. Enhance your skill set to tackle challenging issues with precision and professionalism.",
    contentf4:
      "Software Training: This course focuses on essential software repairs, including phone flashing, unlocking, and other software fixes. Learn how to troubleshoot and resolve software-related problems effectively.",
    contentf5:
      "Screen Refurbishing Training: Learn how to restore damaged screens to their original quality. Master the techniques needed to refurbish screens for a variety of devices.",
    button: "LEARN MORE",
    image: arrow2,

  },
  {
    id: 2,
    label: "Mail In Repair",
    content: "LabX Professional Screen Refurbishment Services:",
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
    image: arrow3,

  },
  {
    id: 3,
    label: "B2B Phone Repair",
    content: "LabX Professional Screen Refurbishment Services:",
    contentf2:
      "Competitive Pricing: Our pricing is competitive with one standard rate for both end users and shops. We focus on providing high-quality repair services and offer support to businesses when they need reliable, cost-effective solutions for their repair needs.",
    contentf3:
      "Bulk Repair Solutions: Our infrastructure is designed to handle bulk repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our services to match your volume.",
    contentf4:
      "Custom Repair Solutions: We offer tailored repair solutions to suit your business requirements, whether you need bulk repairs, iPhone parts, screen refurbishing, or specialized services. Our flexible offerings can adapt to your unique needs.",
    contentf5:
      "Repair Tracking and Updates: Stay informed with our comprehensive mobile phone repair tracking system. We provide automated updates at each stage, ensuring you always know the status of your devices throughout the mobile phone repair process.",
    contentf6:
      "Easy B2B Account Setup: Setting up a B2B account is straightforward. Complete the Apply for Business Account form on our website, and your account will be activated within moments, providing you with fast turnaround time for exclusive B2B phone repair services.",
    button: "LEARN MORE",
    image: arrow4,
  },
  {
    id: 4,
    label: "Data Recovery",
    content: "LabX Professional Screen Refurbishment Services:",
    contentf2:
      "Data from Dead: We can do data recovery from damaged phones that won’t turn on due to hardware damage, shock, or water exposure.",
    contentf3:
      "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
    contentf4:
      "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
    contentf5:
      "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
    button: "LEARN MORE",
    image: arrow5,
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

const DeliveryTousMobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      {tabs.map((tab) => (
        <div key={tab.id} className="mb-4">
          <div
            className="flex justify-between items-center p-[12px] rounded-[50px] cursor-pointer border-[1px]"
            onClick={() => handleToggle(tab.id)}
            style={{
              background: activeIndex === tab.id ? getGradientColor(tab.id) : undefined,
            }}
          >
            <span className="text-[17px] tracking-[1.5px]">{tab.label}</span>
            <MdKeyboardArrowDown
              className={`transition-transform duration-300 ${
                activeIndex === tab.id ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === tab.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-[12px] rounded-b-lg text-[16px]">
              <div className="flex items-start gap-2 mb-2">
                <Image src={tab.image} alt="Pointing icon" width={20} height={20} />
                <p className="xl:pb-2 pb-1">{tab.content}</p>
              </div>
              {tab.contentf2 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image src={tab.image} alt="Pointing icon" width={20} height={20} />
                  <p>{tab.contentf2}</p>
                </div>
              )}
              {tab.contentf3 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image src={tab.image} alt="Pointing icon" width={20} height={20} />
                  <p>{tab.contentf3}</p>
                </div>
              )}
              {tab.contentf4 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image src={tab.image} alt="Pointing icon" width={20} height={20} />
                  <p>{tab.contentf4}</p>
                </div>
              )}
              {tab.contentf5 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image src={tab.image} alt="Pointing icon" width={20} height={20} />
                  <p>{tab.contentf5}</p>
                </div>
              )}
              {tab.contentf6 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image src={tab.image} alt="Pointing icon" width={20} height={20} />
                  <p>{tab.contentf6}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryTousMobile;
