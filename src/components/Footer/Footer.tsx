"use client";
import React from "react";
import Image from "next/image";
import labx from "../../../public/Images/Brand logos/Frame.svg";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import MobileFooterMenue from "./MobileFooterMenue";
import sendicon from "../../../public/Images/icons/send.svg";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="pt-5 xl:pt-20">
          <section className="hidden lg:block">
            <div className="grid xl:grid-cols-[2fr_2fr_2fr_2.5fr] lg:grid-cols-2 gap-12 pb-6">
              <div className="pr-8">
                <div>
                  <Link href="/">
                    <Image className="mb-4" src={labx} alt=" lab-x" />
                  </Link>
                  <p className="font-[300] font-poppins">
                    LabX is a professional and skilful phone repair service
                    provider in Australia
                  </p>
                  <div className="flex gap-3 mt-5">
                    <SlSocialFacebook
                      className="hover:scale-110 transition-transform duration-200"
                      fontSize={30}
                    />
                    <FaInstagram
                      className="hover:scale-110 transition-transform duration-200"
                      fontSize={30}
                    />
                    <FaXTwitter
                      className="hover:scale-110 transition-transform duration-200"
                      fontSize={30}
                    />
                    <Link
                      href="https://www.youtube.com/@PRCRepair"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5">Our Services</h3>
                  <div>
                    <ul className="text-[18px]">
                      <div>
                        <Link href="/mail-in-repair">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] ">
                            Mail-In-Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Training
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            B2B Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Screen Refurbishment
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Data Recovery
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Parts Store
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Repair Forum
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Repair Solutions
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5">Quick links</h3>
                  <div>
                    <ul className="text-[18px]">
                      <div>
                        <Link href="/about-us">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            About Us
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/contact-us">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Contact Us
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/blogs">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Blogs
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Trademark_Disclaimer">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Trademark Disclaimer
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Warranty_and_Terms">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Warranty and Terms
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Shipping_Policy">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Shipping Policy
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/faq">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            FAQ’s
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Terms_and_Conditions">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]">
                            Terms and conditions
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5">Contact Info</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <CiMail
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={25}
                      />
                      <Link
                        href="mailto:bharat@labxrepair.com.au"
                        legacyBehavior
                      >
                        <a className="text-[18px] transition-transform duration-300 hover:scale-105 font-poppins font-[300]">
                          bharat@labxrepair.com.au
                        </a>
                      </Link>
                    </div>
                    <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <IoCallOutline
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={25}
                      />
                      <Link href="" legacyBehavior>
                        <a
                          href="tel:+61455777077"
                          className="text-[18px] transition-transform duration-300 hover:scale-105 font-poppins font-[300]"
                        >
                          +61455777077
                        </a>
                      </Link>
                    </div>
                    <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <IoLocationOutline
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={25}
                      />
                      <Link
                        href="https://www.google.com/maps/place/LabXRepair/@-33.766127,150.7743917,15z/data=!4m6!3m5!1s0x6b129b2ceccf72d7:0x2bd3b51996f0eed4!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11lv7kb0ct?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                        legacyBehavior
                      >
                        <a
                          className="text-[18px] transition-transform duration-300 hover:scale-105 font-poppins font-[300]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          122 Queen St, St Marys NSW 2760, Australia
                        </a>
                      </Link>
                    </div>
                    <div>
                      <h2 className="xl:text-[30px]  lg:text-26px text-30px font-poppins">
                        Sign-Up The LABX
                      </h2>
                    </div>
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
              </div>
            </div>
          </section>

          <section className="block lg:hidden">
            <div className="">
              <div className="flex justify-center">
                <Link href="/">
                  <Image
                    className="mb-4 flex justify-center "
                    src={labx}
                    alt=" lab-x"
                  />
                </Link>
              </div>
              <p className="text-center">
                LabX is a professional and skilful phone repair service provider
                in Australia
              </p>
              <div className="flex gap-3 mt-5 justify-center">
                <SlSocialFacebook
                  className="hover:scale-110 transition-transform duration-200"
                  fontSize={30}
                />
                <FaInstagram
                  className="hover:scale-110 transition-transform duration-200"
                  fontSize={30}
                />
                <FaXTwitter
                  className="hover:scale-110 transition-transform duration-200"
                  fontSize={30}
                />
                <Link
                  href="https://www.youtube.com/@PRCRepair"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    className="hover:scale-110 transition-transform duration-200"
                    fontSize={30}
                  />
                </Link>
              </div>

              <MobileFooterMenue />
            </div>
          </section>

          <hr
            style={{
              height: "0.2px",
              border: "none",
              backgroundColor: "#42425a",
            }}
          />
          <section className="copywrite py-5 xl:py-8">
            <div className="flex-col flex justify-between xl:flex-row">
              <div className="">
                <p className="xl:text-[16px] text-[14px] tracking-[1px] text-center ">
                  Copyright © LabX Repair {new Date().getFullYear()} - All
                  rights reserved
                </p>
              </div>
              <div className="sm:text-center">
                <p className="xl:text-[16px] text-[14px] tracking-[1px] text-center ">
                  Website Design by{" "}
                  <a href="https://www.base2brand.com/">Base2Brand Infotech</a>{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
