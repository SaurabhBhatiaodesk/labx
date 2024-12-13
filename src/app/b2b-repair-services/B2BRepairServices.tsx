"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import Image from "next/image";
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import processor from "../../../public/Images/icons/processor.svg";
import lighting from "../../../public/Images/icons/lighting.svg";
import phonerepair from "../../../public/Images/icons/phonerepair.svg";
import laptop from "../../../public/Images/icons/laptop.svg";
import {
  TextField,
  Button,
  TextareaAutosize,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import "./B2BRepairServices.css";
import MainButton from "@/components/MainButton/MainButton";
import pointer from "../../../public/Images/icons/pointing-right.svg";
import B2BRepairNeeds from "../../../public/Images/B2B Repair Needs.png";
import RepairServices from "../../../public/Images/Repair Services.png";

import ApplyforaBusinessAccount from "../../../public/Images/icons/Apply for a Business Account.svg";
import SendUsYourDevices from "../../../public/Images/icons/Send Us Your Devices.svg";
import TrackYourOrders from "../../../public/Images/icons/Track Your Orders.svg";
import ReceiveYourRepairedDevices from "../../../public/Images/icons/Receive Your Repaired Devices.svg";

import AOS from "aos";
import "aos/dist/aos.css";

// import pointer from "../../../public"

const B2BRepairServices: React.FC = () => {
  const repairData = [
    {
      title: "Top iPad Repair",
      items: [
        {
          icon: processor,
          color: "bg-yellow-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
        {
          icon: processor,
          color: "bg-blue-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
        {
          icon: processor,
          color: "bg-pink-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
        {
          icon: processor,
          color: "bg-teal-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
      ],
    },
    {
      title: "Top Macbook Repair",
      items: [
        {
          icon: lighting,
          color: "bg-sky-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
        {
          icon: lighting,
          color: "bg-yellow-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
        {
          icon: lighting,
          color: "bg-lime-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
        {
          icon: lighting,
          color: "bg-gray-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
      ],
    },
    {
      title: "Top Phone Repair",
      items: [
        {
          icon: phonerepair,
          color: "bg-teal-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
        {
          icon: phonerepair,
          color: "bg-pink-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
        {
          icon: phonerepair,
          color: "bg-sky-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
        {
          icon: phonerepair,
          color: "bg-orange-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
      ],
    },
    {
      title: "Top Laptop Repair",
      items: [
        {
          icon: laptop,
          color: "bg-amber-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
        {
          icon: laptop,
          color: "bg-sky-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
        {
          icon: laptop,
          color: "bg-green-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
        {
          icon: laptop,
          color: "bg-gray-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
      ],
    },
  ];

  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Simple validation: check if the email format is invalid
    setIsInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };
  const sectionData = [
    {
      image: ApplyforaBusinessAccount,
      alt: "Repairs",
      title: `Apply for a Business Account`,
      description: `Start by filling out our Business Account Application form on the website. Once your account is approved, you’ll be able to access bulk pricing, streamlined processes, and specialized services.`,
      hoverBackground:
        "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
    },
    {
      image: SendUsYourDevices,
      alt: "Transparency",
      title: "Send Us Your Devices",
      description: `Our grading and repair process is 100% transparent. You'll receive photos and detailed reports for any repair decisions so you always know what's happening.`,
      hoverBackground:
        "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))",
    },
    {
      image: TrackYourOrders,
      alt: "Recovery",
      title: "Track Your Orders",
      description: `Even if your device is non-functional, we employ advanced techniques to recover your important data, providing a valuable opportunity to retrieve lost files.`,
      hoverBackground:
        "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
    },
    {
      image: ReceiveYourRepairedDevices,
      alt: "B2B Services",
      title: "Receive Your Repaired Devices",
      description: `LabX Repair offers tailored solutions for businesses, including bulk refurbishments and wholesale repairs, ensuring your operations run smoothly and efficiently.`,
      hoverBackground:
        "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
    },
  ];

  return (
    <>
      <div className="steper-form-section-os">
        <Breadcrumb
          pageName="B2B Phone Repair Service"
          pageDescription="We offer tailored B2B solutions designed to streamline your operations and ensure the highest quality mobile phone repairs for your customers. LabX provides specialized services that help you maintain your business efficiency and product quality."
          backgroundImage="/Images/BannerImages/about.png"
          AdminImage="/Images/B2BRepairServices.svg"
          link="/contact-us"
          buttonname="Request a Quote"
        />

        {/* <section>
        <div className="container">
          <div className='py-2 lg:py-3'>
            <MainHeading Heading="B2B Service For Repair Shop, Retailers, & Bulk Device Suppliers" />
            <MainTitle Title="From repair shops to retailers to bulk device suppliers, LabX caters to the specific needs of B2B phone repairs. Our specialized services are designed to help you maintain efficiency and product quality. We handle complex repairs, including motherboard repair, precision soldering, and logic board restoration, ensuring that your business delivers reliable, top-quality service every time." />
          </div>
        </div>
      </section> */}

        {/* <section>
        <div className="container">
          <div className="p-4">
            <div className="flex flex-col gap-4 bg-black text-white">
              <div className="grid grid-cols-2 gap-4 form-label">
                <TextField label="Business Name" name="business_name" fullWidth variant="outlined" />
                <TextField label="Your Email" name="email" fullWidth variant="outlined" value={email} onChange={handleValidation} error={isInvalid} helperText={isInvalid ? "Please enter a valid email" : ""} />
                <TextField label="Your Phone Number" name="phone" fullWidth variant="outlined" />
                <TextField label="Select Your Course" name="course" fullWidth variant="outlined" />
              </div>

              <TextareaAutosize className="border-[1.5px]"
                minRows={4}
                placeholder="Enter your message here"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "17px",
                  borderRadius: "8px",
                  borderColor: "white",
                }}
              />

              <div className="pt-4">
               <MainButton MainButton="submit"
/>              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* <section>
        <div className="container">
          <div className='py-2 lg:py-[30px]'>
            <MainHeading Heading="B2b Repair" />
            <MainTitle Title="When your phone is damaged, sometimes only the front glass needs to be replaced as long as the screen and touch function working properly." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] p-[8px] lg:p-5 lg:gap-5 bg-black text-white">
              {repairData.map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg font-bold mb-4">{section.title}</h2>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="w-full lg:h-36 h-[6rem] lg:h:min-h-[9rem] min-h-[5rem] p-2 lg-py-[10px] rounded-lg flex items-center gap-[10px]">
                        <div className={`w-16 h-16 flex items-center justify-center rounded-md ${item.color} group`}>
                          <Image width={40} src={item.icon} alt="icon" className="" />
                        </div>
                        <div>
                          <p className="text-[16px] leading-[20px] text-white m-0">{item.text}</p>
                          <p className="text-sm text-white ">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
        <section>
          <div className="container">
            <div className="text-center py-8  space-y-4">
              <h2>
                B2B Service For Repair Shop, Retailers, & Bulk Device Suppliers
              </h2>
              <p>
                From repair shops to retailers to bulk device suppliers, LabX
                caters to the specific needs of B2B phone repairs. Our
                specialized services are designed to help you maintain
                efficiency and product quality. We handle complex repairs,
                including motherboard repair, precision soldering, and logic
                board restoration, ensuring that your business delivers
                reliable, top-quality service every time.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner with LabX for Your B2B Repair Needs? */}

        <section>
          <div className="container lg:py-5 py-4">
            <MainHeading Heading="Why Partner with LabX for Your B2B Repair Needs?" />
            {/* <MainTitle Title="At LabX, we provide a seamless, transparent data recovery experience designed to keep you informed and stress-free throughout the entire process. Our commitment to communication and quality ensures you receive timely updates and support every step of the way." /> */}

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div>
                <Image src={B2BRepairNeeds} alt="" />
              </div>
              <div>
                <div className="flex-col gap-2  flex">
                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />

                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Reliable Screen Refurbishing:
                      </span>
                      <p className="inline ml-1">
                        {
                          "    We focus on offering high-quality screen refurbishing services, particularly for B2B clients. Our refurbishing process ensures factory-level quality at competitive prices, allowing businesses to extend the life of their inventory while reducing waste."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Expert Logic Board Repairs:
                      </span>
                      <p className="inline ml-1">
                        {
                          " As specialists in complex repairs, including motherboard micro soldering and logic board repair, our phone repair store repair handle the most challenging cases that other repair providers may not be equipped for. By partnering with LabX, you gain access to a higher level of phone fixing services."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Comprehensive Data Recovery:
                      </span>
                      <p className="inline ml-1">
                        {
                          "We offer data recovery services to ensure your clients’ data can be retrieved from damaged or dead devices. Our advanced techniques maximize the chances of data retrieval, even from severely damaged devices."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Bulk Repair Solutions:
                      </span>
                      <p className="inline ml-1">
                        {
                          "Our infrastructure is designed to handle bulk B2B phone repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our motherboard issue repair services to match your volume."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* next section  desing are same*/}

        <section>
          <div className="container lg:py-5 py-4">
            <MainHeading Heading="Key Features of Our B2B Phone Repair Services" />
            {/* <MainTitle Title="At LabX, we provide a seamless, transparent data recovery experience designed to keep you informed and stress-free throughout the entire process. Our commitment to communication and quality ensures you receive timely updates and support every step of the way." /> */}

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div>
                <div className="flex-col gap-2  flex">
                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />

                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Competitive Pricing:
                      </span>
                      <p className="inline ml-1">
                        Our pricing is already competitive, so we do not offer
                        additional discounts for regular mobile phone repairs.
                        However, we guarantee cost-effective solutions without
                        sacrificing quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Fast Turnaround Times:
                      </span>
                      <p className="inline ml-1">
                        {
                          " We understand that time is money. That’s why we prioritize fast turnaround times for all B2B clients, ensuring that your devices are repaired or refurbished quickly to minimize downtime."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Custom Repair Solutions:
                      </span>
                      <p className="inline ml-1">
                        {
                          "Whether you need screen refurbishing, bulk cellular device repairs, or a specific service tailored to your business model, we can customize our repair offerings to meet your needs."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Repair Tracking and Updates:
                      </span>
                      <p className="inline ml-1">
                        {
                          "You’ll always know the status of your repairs. We provide automated updates and tracking, so you can stay informed at every stage of the repair process."
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div>
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Easy B2B Account Setup:
                      </span>
                      <p className="inline ml-1">
                        {
                          " Signing up for a B2B account is simple. Just fill out the Apply for Business Account form on our website, and we’ll get your account activated promptly. Once approved, you’ll have access to special technician damage phone repair designed to support your business operations."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image src={RepairServices} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container" data-aos="fade-up">
            <MainHeading Heading="We Do, What Others Don't" />
            {/* <MainTitle Title="At LabX, we tackle complex mobile phone repair challenges that others can’t, delivering reliable solutions and unmatched expertise." /> */}

            <div className="lg:pb-8 py-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
                {sectionData.map((section, index) => (
                  <div
                    key={index}
                    style={{ background: "transparent" }} // Default background
                    className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        section.hoverBackground)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div className="flex justify-center">
                      <Image
                        className="pb-2"
                        src={section.image}
                        alt={section.alt}
                      />
                    </div>
                    <h3 className="text-[#EDE574] xl:text-lg lg:w-[70%] m-auto line-clamp-2">
  {section.title}
</h3>
                    <p>{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <YouTubeHome />
        <GoogleReviews />
      </div>
    </>
  );
};

export default B2BRepairServices;
