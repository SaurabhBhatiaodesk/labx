import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Lottie from "lottie-react";
import lottieflowemail from "../../../public/Images/jsonfile/lottieflowemail.json";
import sendicon from "../../../public/Images/icons/send.svg";

const MobileFooterMenue = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto p-[12px] mt-4 ">
      {/* Our Services Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center p-[12px] rounded-[50px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(0)}
        >
          <span className="text-[17px] tracking-[1.5px]">Our Services</span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 ${
              activeIndex === 0 ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            activeIndex === 0 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="p-[12px]   rounded-b-lg text-[16px]">
            <li className="mb-2">Mail-In-Repair</li>
            <li className="mb-2">Training</li>
            <li className="mb-2">B2B Repair</li>
            <li className="mb-2">Screen Refurbishment</li>
            <li className="mb-2">Data Recovery</li>
            <li className="mb-2">Parts Store</li>
            <li className="mb-2">Repair Forum</li>
            <li className="mb-2">Repair Solutions</li>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center  p-[12px] rounded-[50px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(1)}
        >
          <span className="text-[17px] tracking-[1.5px]">Quick links</span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 ${
              activeIndex === 1 ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            activeIndex === 1 ? "max-h-screen" : "max-h-0"
          }`}
        >
                 <ul className="p-[12px]   rounded-b-lg text-[16px]">
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Blogs</li>
            <li className="mb-2">Trademark Disclaimer</li>
            <li className="mb-2">Warranty and Terms</li>
            <li className="mb-2">Shipping Policy</li>
            <li className="mb-2">FAQ’s</li>
            <li className="mb-2">Terms and conditions</li>
          </ul>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center  p-[12px] rounded-[50px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(2)}
        >
          <span className="text-[17px] tracking-[1.5px]">Contact Info</span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 ${
              activeIndex === 2 ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            activeIndex === 2 ? "max-h-screen" : "max-h-0"
          }`}
        >
               <ul className="p-[12px]   rounded-b-lg text-[16px]">
            <li className="mb-2">info@labxrepair.com.au</li>
            <li className="mb-2">0433 222 203</li>
            <li className="mb-2">132, Tic St, Kingston, New York 12401</li>
            <li className="mb-2">Sign-Up The LABX</li>
          </ul>
        </div>
      </div>

      <div className="emailsection relative">
        <h3 className="text-center">Sign-Up The LABX</h3>
        <div className="relative max-w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="text-black w-full p-[11px] rounded-[50px] cursor-pointer border-[1px] border-gray-300 focus:outline-none my-3"
          />
          <button
            type="submit"
            className="text-white rounded-[50px] flex items-center justify-center game absolute bg-black p-[11px] right-[2px] top-1/2 transform -translate-y-1/2"
            style={{ width: "14%" }}
          >
            <Image className="gl" src={sendicon} alt="Send icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFooterMenue;
