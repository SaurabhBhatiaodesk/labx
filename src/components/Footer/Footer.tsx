import React from "react";
import Image from "next/image";
import labx from "../../../public/Images/Brand logos/Frame.svg";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="py-5 xl:py-10">
          <section>
            <div className="grid grid-cols-4 gap-12">
              <div className="pr-8">
                <div>
                  <Image className="mb-4" src={labx} alt=" lab-x" />
                  <p className="font-[300]">
                    LABX’s Mobile Tech is a professional and skilful Cell Phone
                    repairing services provider in Melbourne West.{" "}
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
                    <FaYoutube
                      className="hover:scale-110 transition-transform duration-200"
                      fontSize={30}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5">Our Services</h3>
                  <div>
                    <ul>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>

                    
                    </ul>
                  </div>
                </div>
              </div>
              <div>
              <div>
                  <h3 className="xl:mb-5">Our Services</h3>
                  <div>
                    <ul>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>
                      <li className="xl:p-1">Mail-In-Repair</li>

                    
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                <h3 className="xl:mb-5">Contact Info</h3>
                <div className="flex gap-4">
                <CiMail />


                </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
