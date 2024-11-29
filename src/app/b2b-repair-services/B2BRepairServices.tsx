"use client";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import FormCode from '@/components/Form/FormCode'
import MainTitle from '@/components/MainTitle/MainTitle'
import MainHeading from '@/components/ManinHeading/MainHeading'
import Image from 'next/image';
import processor from '../../../public/Images/icons/processor.svg'
import lighting from '../../../public/Images/icons/lighting.svg'
import phonerepair from '../../../public/Images/icons/phonerepair.svg'
import laptop from '../../../public/Images/icons/laptop.svg'


import { Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import "./B2BRepairServices.css";
import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';


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
    <div>
      
      
      
      <Breadcrumb
        pageName="B2B Repair Services
"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner.
"
        backgroundImage="/Images/BannerImages/about.png"
        AdminImage="/Images/B2BRepairServices.svg"
        link="/coming-soon"
      />

      <section>
        <div className="container">
          <div className='py-2 lg:py-3'>
            <MainHeading Heading='We Repair All Phone Products'/>
            <MainTitle Title='Are you in search of a reliable B2B repair service provider? Look no further than LabX With years of experience and thousands of satisfied clients,  LabX is the go-to destination for all your B2B phone repair needs. Smartphones have become an integral part of our daily lives, be it personal or professional. But as time passes, they can start to lose their charm, performance, and durability. To extend the life of your devices, a quick, affordable, and trustworthy repair solution is essential.'/>
            <div className='mt-[-25px]'>

          
            <MainTitle Title='At LaBX we offer B2B repair services at competitive prices. Our team of skilled technicians is capable of fixing any issue your device might be facing. No matter what s causing trouble, we promise to give your phone a new life and make sure you leave our store with a fully-functional device. So, whether you need repair services for your company s phones or personal devices, LabX is here to help. Contact Us today or visit our store for a hassle-free experience and get your devices up and running in no time!'/>
            </div>
          </div>

        </div>
      </section>
      
      
      {/* <FormCode/> */}
      <section>
        <div className="container">
        <div className="p-4">
        <div className="flex flex-col gap-4  bg-black text-white">
          <div className="grid grid-cols-2 gap-4 form-label">
            <Input
              type="text"
              label="Your Name"
              variant="bordered"
              className="w-full"
              required
            />
            <Input
              type="email"
              label="Your Email"
              variant="bordered"
              value={email}
              isInvalid={isInvalid}
              errorMessage={isInvalid ? "Please enter a valid email" : ""}
              className={`w-full ${isInvalid ? "border-red-500" : ""}`}
              onChange={handleValidation}
              required
            />
            <Input
              type="text"
              label="Your Phone Number"
              variant="bordered"
              className="w-full"
              required
            />
            <Input
              type="text"
              label="Select Your Course"
              variant="bordered"
              className="w-full"
              required
            />
          </div>
          <Textarea
          label="Your Message"
          placeholder="Enter your message here"
          variant="bordered"
          className="w-full mt-4 custom-textarea" // Add a custom class if needed
          style={{
            borderColor: "#333",
            borderRadius: "0.375rem",
            padding: "0.5rem",
            backgroundColor: "black",
            color: "white",
          }}
          required
        />
        </div>
        <div className="py-4">
          <input
            className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
            type="submit"
          />
        </div>
      </div>

        </div>
      </section>


      <section>
        {/* B2b Repair */}

        <div className="container">
          <div className='py-2 lg:py-[30px]'>
            <MainHeading Heading='B2b Repair'/>
            <MainTitle Title='When your phone is damaged, sometimes only the front glass needs to be replaced as long as the screen and touch function working properly.'/>

{/* division section phome and mobile */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-[10px] p-[8px] lg:p-5 lg:gap-5 bg-black text-white">
  {repairData.map((section, index) => (
    <div key={index}>
      <h2 className="text-lg font-bold mb-4">{section.title}</h2>
      <div className="space-y-2">
        {section.items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="w-full lg:h-36 h-[6rem] lg:h:min-h-[9rem] min-h-[5rem] p-2 lg-py-[10px] rounded-lg flex items-center gap-[10px]"
          >
            <div
              className={`w-16 h-16  flex items-center justify-center rounded-md ${item.color} group`}
            >
              <Image
                src={item.icon}
                alt="icon"
                // width={50}
                // height={50}
                className="transform transition-transform duration-300 group-hover:scale-125"
              />
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
      <YouTubeHome/>
    
    </div>
  )
}

export default B2BRepairServices