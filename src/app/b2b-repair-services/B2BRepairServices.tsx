"use client";
import React, { useState } from "react";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import MainTitle from '@/components/MainTitle/MainTitle';
import MainHeading from '@/components/ManinHeading/MainHeading';
import Image from 'next/image';
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import processor from '../../../public/Images/icons/processor.svg';
import lighting from '../../../public/Images/icons/lighting.svg';
import phonerepair from '../../../public/Images/icons/phonerepair.svg';
import laptop from '../../../public/Images/icons/laptop.svg';
import { TextField, Button, TextareaAutosize, Grid, Typography, ImageList, ImageListItem } from "@mui/material";
import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';
import "./B2BRepairServices.css";
import MainButton from "@/components/MainButton/MainButton";


const B2BRepairServices: React.FC = () => {
  const repairData = [
    {
      title: "Top iPad Repair",
      items: [
        { icon: processor, color: "bg-yellow-100", text: "Liquid/Motherboard Damage Assessment", price: "$24.99" },
        { icon: processor, color: "bg-blue-100", text: "Liquid/Motherboard Damage Assessment", price: "$24.99" },
        { icon: processor, color: "bg-pink-100", text: "Liquid/Motherboard Damage Assessment", price: "$24.99" },
        { icon: processor, color: "bg-teal-100", text: "Liquid/Motherboard Damage Assessment", price: "$24.99" },
      ],
    },
    {
      title: "Top Macbook Repair",
      items: [
        { icon: lighting, color: "bg-sky-100", text: "Macbook Battery Replacement", price: "$24.99" },
        { icon: lighting, color: "bg-yellow-100", text: "Macbook Battery Replacement", price: "$24.99" },
        { icon: lighting, color: "bg-lime-100", text: "Macbook Battery Replacement", price: "$24.99" },
        { icon: lighting, color: "bg-gray-100", text: "Macbook Battery Replacement", price: "$24.99" },
      ],
    },
    {
      title: "Top Phone Repair",
      items: [
        { icon: phonerepair, color: "bg-teal-100", text: "iPhone 16 Pro Screen Change", price: "$24.99" },
        { icon: phonerepair, color: "bg-pink-100", text: "iPhone 16 Pro Screen Change", price: "$24.99" },
        { icon: phonerepair, color: "bg-sky-100", text: "iPhone 16 Pro Screen Change", price: "$24.99" },
        { icon: phonerepair, color: "bg-orange-100", text: "iPhone 16 Pro Screen Change", price: "$24.99" },
      ],
    },
    {
      title: "Top Laptop Repair",
      items: [
        { icon: laptop, color: "bg-amber-100", text: "Laptop on-board GPU Reflow", price: "$24.99" },
        { icon: laptop, color: "bg-sky-100", text: "Laptop on-board GPU Reflow", price: "$24.99" },
        { icon: laptop, color: "bg-green-100", text: "Laptop on-board GPU Reflow", price: "$24.99" },
        { icon: laptop, color: "bg-gray-100", text: "Laptop on-board GPU Reflow", price: "$24.99" },
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

  return (
    <div className="steper-form-section-os">
      <Breadcrumb
        pageName="B2B Repair Services"
        pageDescription="We offer tailored B2B solutions designed to streamline your operations and ensure the highest quality mobile phone repairs for your customers. LabX provides specialized services that help you maintain your business efficiency and product quality."
        backgroundImage="/Images/BannerImages/about.png"
        AdminImage="/Images/B2BRepairServices.svg"
        link="/coming-soon"
      />

      <section>
        <div className="container">
          <div className='py-2 lg:py-3'>
            <MainHeading Heading="B2B Service For Repair Shop, Retailers, & Bulk Device Suppliers" />
            <MainTitle Title="From repair shops to retailers to bulk device suppliers, LabX caters to the specific needs of B2B phone repairs. Our specialized services are designed to help you maintain efficiency and product quality. We handle complex repairs, including motherboard repair, precision soldering, and logic board restoration, ensuring that your business delivers reliable, top-quality service every time." />
          </div>
        </div>
      </section>

      <section>
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
      </section>

      <section>
        <div className="container">
          <div className='py-2 lg:py-[30px]'>
            <MainHeading Heading="B2b Repair" />
            <MainTitle Title="When your phone is damaged, sometimes only the front glass needs to be replaced as long as the screen and touch function working properly." />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px] p-[8px] lg:p-5 lg:gap-5 bg-black text-white">
              {repairData.map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg font-bold mb-4">{section.title}</h2>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="w-full lg:h-36 h-[6rem] lg:h:min-h-[9rem] min-h-[5rem] p-2 lg-py-[10px] rounded-lg flex items-center gap-[10px]">
                        <div className={`w-16 h-16 flex items-center justify-center rounded-md ${item.color} group`}>
                          <Image src={item.icon} alt="icon" className="transform transition-transform duration-300 group-hover:scale-125" />
                        </div>
                        <div>
                          <p className="text-[16px] leading-[20px] text-white">{item.text}</p>
                          <p className="text-sm text-white">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

   

      <YouTubeHome />
      <GoogleReviews />
    </div>
  );
};

export default B2BRepairServices;
