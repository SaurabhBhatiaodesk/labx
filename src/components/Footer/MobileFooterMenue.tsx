import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import sendicon from "../../../public/Images/icons/send.svg";
import Link from "next/link";

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
            <li className="mb-2">
            <Link href="/mail-in-repair">Mail-In-Repair</Link>
              </li>
            <li className="mb-2">
            <Link href="/coming-soon">Training</Link>
              </li>
            <li className="mb-2">
            <Link href="/coming-soon">B2B Repair</Link>
              </li>
            <li className="mb-2">
            <Link href="/coming-soon">Screen Refurbishment</Link>
              </li>
            <li className="mb-2">
            <Link href="/coming-soon"> Data Recovery</Link>
             </li>
            <li className="mb-2">
            <Link href="/coming-soon">Parts Store</Link>
              </li>
            <li className="mb-2">
            <Link href="/coming-soon">Repair Forum</Link>
              </li>
            <li className="mb-2">
            <Link href="/coming-soon">Repair Solutions</Link>
              </li>
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
            <li className="mb-2">
              <Link href="/coming-soon">Contact Us</Link></li>
            <li className="mb-2">
            <Link href="/blogs">Blogs</Link></li>
            <li className="mb-2">
              <Link href="/Trademark_Disclaimer">Trademark Disclaimer</Link>
            </li>
            <li className="mb-2">
              <Link href="/Warranty_and_Terms">Warranty and Terms</Link>
            </li>
            <li className="mb-2">
              <Link href="/Shipping_Policy">Shipping Policy</Link>
            </li>
            <li className="mb-2">
            <Link href="/coming-soon">FAQ's</Link>
              </li>
            <li className="mb-2">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
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
            <li className="mb-2">
              <a
                href="mailto:bharat@labxrepair.com.au"
                className="hover:underline"
              >
                bharat@labxrepair.com.au
              </a>
            </li>
            <li className="mb-2">
              <a href="tel:+61455777077" className="hover:underline">
                +61455777077
              </a>
            </li>

            <Link
              href="https://www.google.com/maps/place/LabXRepair/@-33.766127,150.7743917,15z/data=!4m6!3m5!1s0x6b129b2ceccf72d7:0x2bd3b51996f0eed4!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11lv7kb0ct?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
              legacyBehavior
            >
              <a className=" " target="_blank" rel="noopener noreferrer">
                122 Queen St, St Marys NSW 2760, Australia
              </a>
            </Link>

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
            className="text-black w-full p-[11px] rounded-[50px] cursor-pointer border-[1px] border-gray-300 focus:outline-none my-2 placeholder:text-[#3737379c] placeholder:font-normal placeholder:text-[16px]"
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
