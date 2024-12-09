"use client";
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Image from 'next/image';
import Phone from '../../../public/Images/our-phone.png'
import Offer from '../../../public/Images/offer.png'
import Offers from '../../../public/Images/offers.png'
import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';
import GoogleReview from '@/components/GoogleReviews/GoogleReviews';
import FixLabx from '@/components/HomeCpmponents/FixLabx/FixLabx';
import Line from "../../../public/Images/about/leap.svg"

const page = () => {
  return (
  <>
    <Breadcrumb
            pageName="Repair Solutions"
            pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
            backgroundImage="/Images/BannerImages/repair.png"
            AdminImage="/Images/repair-ph.png"
             link="/coming-soon"
          />
  <div>

  <div className="about__bg__gradiant">
          <div className="container text-white rounded-md">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
          <div>
            <h2>Our Phone Repair Solutions</h2>
            <Image  height="300" width="600"src={Line.src} alt="" className="pb-3" />

            <p>Are you in search of a reliable B2B repair service provider? Look no further than LabX With years of experience and thousands of satisfied clients,  LabX is the go-to destination for all your B2B phone repair needs. </p>
             <p>Are you in search of a reliable B2B repair service provider? Look no further than LabX With years of experience and thousands of satisfied clients,  LabX is the go-to destination for all your B2B phone repair needs. </p>
            <button className='btn'><a href='/price'>VIEW PRICE LIST</a></button>
          </div>
             <Image src={Phone} alt='' className='w-full' />
          </div> 
        </div>
      </div>
      <div className="container pt-8">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div>
              <Image src={Offer} alt=''  className='w-full'  />
            </div>

            <div> 
              <h2>We Offer Appointments</h2>
              <Image  height="300" width="400"src={Line.src} alt="" className="pb-3" />

              <p>We are local and offer appointment scheduling, but due to limited hours, please contact us at 585.397.4174 via phone or text to schedule a time with us!</p>
              <p>We are local and offer appointment scheduling, but due to limited hours, please contact us at 585.397.4174 via phone or text to schedule a time with us!</p>
              <button className='btn'>GET STARTED</button>
            </div>
            <div>
              <Image src={Offers} alt=''  className='w-full'  />
            </div>
          </div>
      </div>

      <div className="about__bg__gradiant pt-8 pb-8">
          <div className="max-container text-white rounded-md ">
          <div className="grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
          <div>
            <p className='text-center'>We have the following levels of repair – L0, L1, L2, L3 and L4 repair levels, where the following is the definition of repair</p>
            <div className='responsive'>
            <table className='table min-w-full table-auto'>
              <thead>
                <tr>
                  <th className="border px-2 py-2 text-left" style={{minWidth:'200px'}}>Level of Repair</th>
                  <th className="border px-2 py-2 text-left">Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Level 0</td>
                  <td className="border px-4 py-2">Issuing DOA Certificate, Accessories Replacement</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Level 1</td>
                  <td className="border px-4 py-2">Software upgrading, Escalation to Higher level, Parts cleaning</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Level 2</td>
                  <td className="border px-4 py-2">Replacement of LCD, Camera, Lens, and Key pad Dome, Mic., Ringer, Speaker, Flash LED, and Antenna (Mechanical).</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Level 3</td>
                  <td className="border px-4 py-2">Replacement of LCD (multi point solder type), Charging Connector multi point solder type</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Level 4</td>
                  <td className="border px-4 py-2">Main board Replacement, Oscillators, Tunner, FM IC, Charging IC, FM IC., I/O IC.</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div> 
          </div> 
        </div>
      </div>

  </div>
  <FixLabx />
  <YouTubeHome />
  <GoogleReview />
  </>
  )
}

export default page