"use client";
import React, { useState } from "react";
import Image from "next/image";
import MainHeading from "@/components/ManinHeading/MainHeading";
import PS5HDMIPortRepair from "../../../public/Images/PS5 HDMI Port Repair.webp";
import PS5PowerIssues from "../../../public/Images/PS5 Power Issues.webp";
import OverheatingFanNoise from "../../../public/Images/Overheating & Fan Noise.webp";
import PS5SSDStorageIssues from "../../../public/Images/PS5 SSD & Storage Issues.webp";
import BlueLightofDeath from "../../../public/Images/Blue Light of Death.webp";
import ControllerRepairs from "../../../public/Images/Controller Repairs.webp";
import DiscDriveRepairs from "../../../public/Images/Disc Drive Repairs.webp";
import PS5ConnectivityIssues from "../../../public/Images/PS5 Connectivity Issues.webp";
import "./PS5.css";

import Link from "next/link";
import arrow1 from "../../../public/Images/icons/arrow1-1.svg";
import arrow2 from "../../../public/Images/icons/arrow1-2.svg";
import arrow3 from "../../../public/Images/icons/arrow1-3.svg";
import arrow4 from "../../../public/Images/icons/arrow1-4.svg";
import arrow5 from "../../../public/Images/icons/arrow1-5.svg";

import DeliveryTousMobile from "@/components/HomeCpmponents/DeliveryTo-us/DeliveryTousMobile";

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

const PS5RepairsSydney: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      id: 0,
      label: "PS5 HDMI port repair",
      content: "",

      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2:
        "If your PlayStation 5 is experiencing video issues, a loose HDMI connection, or no display output, you may need an HDMI port repair. Our PS5 repair service replaces damaged HDMI ports with high-quality components, ensuring a stable connection and crystal-clear visuals. Get back to seamless gaming with our reliable PlayStation repair solutions.",
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: PS5HDMIPortRepair,
      // image: screenreplace,
    },
    {
      id: 1,
      label: "PS5 Power Issues",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2:
        "Power failures, sudden shutdowns, or a completely unresponsive PlayStation 5 can disrupt your gaming. Our PS5 repair service diagnoses faulty power supplies, motherboard issues, and charging problems. Whether your console won’t turn on or keeps shutting off unexpectedly, our expert PlayStation repair will restore full functionality, ensuring you enjoy uninterrupted gaming sessions.",
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: PS5PowerIssues,
      // image: screenreplace,
    },
    {
      id: 2,
      label: "Overheating & Fan Noise",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `An overheating PS5 with loud fan noises can lead to performance drops and long-term damage. Our PlayStation 5 repair service includes deep cleaning, thermal paste replacement, and cooling fan fixes to prevent overheating. By optimizing airflow and cooling efficiency, we keep your PlayStation repair experience hassle-free, ensuring your console runs smoothly for extended gaming sessions.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: OverheatingFanNoise,
      // image: screenreplace,
    },
    {
      id: 3,
      label: "PS5 SSD & Storage Issues",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `Slow loading times, frequent crashes, or storage errors can indicate SSD problems. Our PS5 repair service offers SSD replacements and upgrades, boosting your console’s speed and storage capacity. Whether you need to fix corrupted storage or install a larger SSD, our PlayStation 5 repair ensures better gaming performance with faster load times and smoother gameplay.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: PS5SSDStorageIssues,
      // image: screenreplace,
    },
    {
      id: 4,
      label: "Blue Light of Death (BLOD) Fix",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `If your PS5 won’t turn on and flashes a blue light, it’s likely experiencing the Blue Light of Death (BLOD). Our PlayStation repair service specializes in fixing motherboard, power, and software-related issues causing BLOD. We diagnose the problem, repair faulty components, and restore your PlayStation 5 to full functionality for a hassle-free gaming experience.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: BlueLightofDeath,
      // image: screenreplace,
    },
    {
      id: 5,
      label: "Controller Repairs",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `Drifting joysticks, unresponsive buttons, or charging problems can make gaming frustrating. Our PS5 repair service includes PlayStation 5 repair for DualSense controllers, fixing analog stick drift, faulty triggers, and battery issues. We replace damaged components to restore precision and responsiveness, ensuring a seamless gaming experience without controller-related interruptions.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: ControllerRepairs,
      // image: screenreplace,
    },
    {
      id: 6,
      label: "Disc Drive Repairs",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `Is your PS5 not reading discs or struggling to eject them? A malfunctioning disc drive can limit your gaming library. Our PS5 repair service fixes faulty laser readers, ejector mechanisms, and disc recognition errors. With our PlayStation 5 repair expertise, we ensure your console can read game discs smoothly, allowing you to enjoy your collection worry-free.
`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: DiscDriveRepairs,
      // image: screenreplace,
    },
    {
      id: 7,
      label: "PS5 Connectivity Issues",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `If your PS5 won’t connect to Wi-Fi, has frequent disconnections, or slow internet speeds, it could be a network hardware issue. Our PS5 repair service troubleshoots and repairs Wi-Fi modules, network adapters, and software settings. With our PlayStation repair expertise, we ensure a strong and stable internet connection for smooth online gaming and streaming.
`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "READ MORE",
      link: "/screen-refurbishing",
      image: PS5ConnectivityIssues,
      // image: screenreplace,
    },
  ];

  // const tabIcons = [arrow1, arrow2, arrow3, arrow4, arrow5];

  const getGradientColor = (id: number) => {
    switch (id) {
      case 0:
        return "linear-gradient(74deg, #43C6AC, #000000)";
      case 1:
        return "linear-gradient(74deg, #FF9966, #000000)";
      case 2:
        return "linear-gradient(74deg, #FFE000, #000000)";
      case 3:
        return "linear-gradient(74deg, #A044FF, #000000)";
      case 4:
        return "linear-gradient(74deg, #2052e8a5, #000000)";
      case 5:
        return "linear-gradient(74deg, #e89820a5, #000000)";
      case 6:
        return "linear-gradient(74deg, #19d113a5, #000000)";
      case 7:
        return "linear-gradient(74deg, #13abd1a5, #000000)";
      default:
        return "linear-gradient(74deg, #56c1c1, #000000)";
    }
  };

  const getTextColor = (id: number) => {
    switch (id) {
      case 0:
        return "#56c1c1";
      case 1:
        return "#f35520c0";
      case 2:
        return "#d5fd33a1";
      case 3:
        return "#A044FF";
      case 4:
        return "#2052e8a5";
      case 5:
        return "#e89820a5";
      case 6:
        return "#19d113a5";
      case 7:
        return "#13abd1a5";
      default:
        return "#2052e8a5";
    }
  };
  const itoms = [
    {
      id: 0,
      label: "PS5 HDMI port repair",
      // content: "LabX Professional Screen Refurbishment Services:",
      contentf2: `If your PlayStation 5 is experiencing video issues, a loose HDMI connection, or no display output, you may need an HDMI port repair. Our PS5 repair service replaces damaged HDMI ports with high-quality components, ensuring a stable connection and crystal-clear visuals. Get back to seamless gaming with our reliable PlayStation repair solutions.
`,
      // contentf3:
      //   "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4:
      //   "Fair and Transparent Grading: We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5:
      //   "Fast Turnaround Phone Repair: We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Read More",
      link2: "/screen-refurbishing",
      image: arrow1,
      buttonColor: "linear-gradient(74deg, #43C6AC, #000000)",
    },
    {
      id: 1,
      label: "PS5 Power Issues",
      // content: "LabX Professional Phone Repair Courses:",
      contentf2: `Power failures, sudden shutdowns, or a completely unresponsive PlayStation 5 can disrupt your gaming. Our PS5 repair service diagnoses faulty power supplies, motherboard issues, and charging problems. Whether your console won’t turn on or keeps shutting off unexpectedly, our expert PlayStation repair will restore full functionality, ensuring you enjoy uninterrupted gaming sessions.`,
      // contentf3:
      //   "Advanced Training: In our advanced course, you will master complex repairs like motherboard and microsoldering training. Enhance your skill set to tackle challenging issues with precision and professionalism.",
      // contentf4:
      //   "Software Training: This course focuses on essential software repairs, including phone flashing, unlocking, and other software fixes. Learn how to troubleshoot and resolve software-related problems effectively.",
      // contentf5:
      //   "Screen Refurbishing Training: Learn how to restore damaged screens to their original quality. Master the techniques needed to refurbish screens for a variety of devices.",
      button: "Read More",
      link2: "/repair-solutions",
      image: arrow2,
      buttonColor: "linear-gradient(74deg, #FF9966, #000000)",
    },
    {
      id: 2,
      label: "Overheating & Fan Noise",
      // content: "LabX Professional Mail In Repair:",
      contentf2: `An overheating PS5 with loud fan noises can lead to performance drops and long-term damage. Our PlayStation 5 repair service includes deep cleaning, thermal paste replacement, and cooling fan fixes to prevent overheating. By optimizing airflow and cooling efficiency, we keep your PlayStation repair experience hassle-free, ensuring your console runs smoothly for extended gaming sessions.
`,
      // contentf3:
      //   "Start Your Repair: Click Start Repair to provide details about your device and its issues. You’ll receive a quote and mailing instructions within 24 hours.",
      // contentf4:
      //   "Need Help Now?: For immediate assistance, call us directly to start the repair process right away.",
      // contentf5:
      //   "Send Your Device: Once approved, follow the provided mailing instructions to ship your device to us securely.",
      // contentf6:
      //   "Device Intake and Repair: Upon receipt, we’ll confirm via email and place your device in the repair queue, notifying you of any updates during the process.",
      button: "Read More",
      link2: "/mail-in-repair",
      image: arrow3,
      buttonColor: "linear-gradient(74deg, #FFE000, #000000)",
    },
    {
      id: 3,
      label: "PS5 SSD & Storage Issues",
      // content: "LabX Professional B2B Phone Repair:",
      contentf2: `Slow loading times, frequent crashes, or storage errors can indicate SSD problems. Our PS5 repair service offers SSD replacements and upgrades, boosting your console’s speed and storage capacity. Whether you need to fix corrupted storage or install a larger SSD, our PlayStation 5 repair ensures better gaming performance with faster load times and smoother gameplay.
`,
      // contentf3:
      //   "Bulk Repair Solutions: Our infrastructure is designed to handle bulk repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our services to match your volume.",
      // contentf4:
      //   "Custom Repair Solutions: We offer tailored repair solutions to suit your business requirements, whether you need bulk repairs, iPhone parts, screen refurbishing, or specialized services. Our flexible offerings can adapt to your unique needs.",
      // contentf5:
      //   "Repair Tracking and Updates: Stay informed with our comprehensive mobile phone repair tracking system. We provide automated updates at each stage, ensuring you always know the status of your devices throughout the mobile phone repair process.",
      // contentf6:
      //   "Easy B2B Account Setup: Setting up a B2B account is straightforward. Complete the Apply for Business Account form on our website, and your account will be activated within moments, providing you with fast turnaround time for exclusive B2B phone repair services.",
      button: "Read More",
      link2: "/b2b-repair-services",
      image: arrow4,
      buttonColor: "linear-gradient(74deg, #A044FF, #000000)",
    },
    {
      id: 4,
      label: "Blue Light of Death (BLOD) Fix",
      // content: "LabX Professional Data Recovery:",
      contentf2: `If your PS5 won’t turn on and flashes a blue light, it’s likely experiencing the Blue Light of Death (BLOD). Our PlayStation repair service specializes in fixing motherboard, power, and software-related issues causing BLOD. We diagnose the problem, repair faulty components, and restore your PlayStation 5 to full functionality for a hassle-free gaming experience.`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Read More",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #2052e8a5, #000000)",
    },
    {
      id: 5,
      label: "Controller Repairs",
      // content: "LabX Professional Data Recovery:",
      contentf2: `Drifting joysticks, unresponsive buttons, or charging problems can make gaming frustrating. Our PS5 repair service includes PlayStation 5 repair for DualSense controllers, fixing analog stick drift, faulty triggers, and battery issues. We replace damaged components to restore precision and responsiveness, ensuring a seamless gaming experience without controller-related interruptions.
`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Read More",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #2052e8a5, #000000)",
    },
    {
      id: 6,
      label: "Disc Drive Repairs",
      // content: "LabX Professional Data Recovery:",
      contentf2: `Is your PS5 not reading discs or struggling to eject them? A malfunctioning disc drive can limit your gaming library. Our PS5 repair service fixes faulty laser readers, ejector mechanisms, and disc recognition errors. With our PlayStation 5 repair expertise, we ensure your console can read game discs smoothly, allowing you to enjoy your collection worry-free.
`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Read More",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #2052e8a5, #000000)",
    },
    {
      id: 7,
      label: "PS5 Connectivity Issues",
      // content: "LabX Professional Data Recovery:",
      contentf2: `If your PS5 won’t connect to Wi-Fi, has frequent disconnections, or slow internet speeds, it could be a network hardware issue. Our PS5 repair service troubleshoots and repairs Wi-Fi modules, network adapters, and software settings. With our PlayStation repair expertise, we ensure a strong and stable internet connection for smooth online gaming and streaming.
`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Read More",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #31e820a5, #000000)",
    },
  ];
  return (
    <section
      className="py-4 lg:py-[30px]"
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container bgchange">
        <div className="py-3">
          {" "}
          <MainHeading Heading="Common PS5 Console Issues We Expertly Fix" />
        </div>
        {/* <MainTitle Title="Take a quick look at our range of mobile phone repair services tailored to meet all your needs, from expert repairs and training programs to quality parts and data recovery — everything under one roof!" /> */}
        <div className="lg:block hidden">
          <div className="grid xl:grid-cols-[2fr_5fr] lg:grid-cols-[3fr_6fr] gap-4">
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
                  aria-label={`Tab for ${tab.label}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              className={`flex-1 xl:pl-4 radial-gradient-background-${activeTab}`}
            >
              <div className="">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  width={1600} // higher resolution
                  height={900}
                  className="w-full h-[400px] object-cover rounded-lg"
                  quality={100}
                />
              </div>
              <h3 className="mb-2">{tabs[activeTab].content}</h3>
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
                    <div>
                      <p className="">
                        <span
                          className="font-bold pb-[2px] mr-[3px]"
                          style={{ color: getTextColor(activeTab) }} // Apply dynamic text color here
                        >
                          {item.title}
                        </span>
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
                  aria-label={`Read more about ${tabs[activeTab].label}`}
                >
                  {tabs[activeTab].button}
                </Link>
              )}
            </div>
          </div>
        </div>

        <section className="lg:hidden block">
          <DeliveryTousMobile itoms={itoms} />
        </section>
      </div>
    </section>
  );
};

export default PS5RepairsSydney;
