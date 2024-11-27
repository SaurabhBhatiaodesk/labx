import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainButton from "@/components/MainButton/MainButton";
import Image from "next/image";
import course2 from "../../../public/Images/aboutadmin.png";
import aboutbg from "../../../public/Images/aboutbg.svg";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import OurVision from "../../../public/Images/OurVision.png"
import checkmark from "../../../public/Images/icons/checkmark.svg"
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb
        pageName="About Us
"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner.
"
        backgroundImage="/Images/BannerImages/about.png"
        AdminImage="/Images/adminimage.png"
        link="/coming-soon"
      />

      <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
      {/* Left Image Section */}
      <div className="bg-[url('/Images/aboutbg.svg')] bg-no-repeat bg-cover relative xl:p-[30px]  lg:p-[20px]  p-[20px] xl:w-[70%] lg:w-[90%] rounded-md ">
        <div className="relative w-[100%] flex justify-end h-[300px] md:h-[400px] m-[0_0_0_auto] xl:left-[200px] lg:left-[55px] left-[20px] ">
          <Image
            className="object-cover rounded-[30px]"
            src={course2}
            alt="About Us Image"
            fill
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="p-4 bg-black text-white rounded-md">
        <h2 className="text-3xl font-bold c">Established in 2008</h2>
        <p className="">
        We provide diverse solutions for all your circuit board microsoldering requirements, extending beyond iPhones and MacBooks to encompass Samsung and other Android mobile devices. Our services also include HDMI replacement for various game consoles, such as Sony Playstation 5 and Microsoft Xbox. 
        </p>
        <p className=" ">
        Our approach is to perform open-ended troubleshooting and microsoldering to identify and correct faults on the logic board to bring the dead phone back to life enough to provide a path to your data. Once the phone can boot, we extract the data and create a backup. Then we go one step farther and parse your backup for you so that we can deliver useful information---folders containing all your pictures and videos, your notes, contacts, and text messages. We deliver the parsed data and the backup to you via a custom usb drive.
        </p>
      
        <p className="font-semibold text-yellow-400 mt-4">Bharat Dhingra - Owner</p>
      </div>
    </div>

<section>
    {/* our missio section use about */}
    <div className="bg-black text-white flex flex-col items-center py-2 lg:py-4">
      {/* YouTube Embedded Video */}
      <div className="w-full  rounded-[30px] overflow-hidden shadow-lg mb-6">
        <iframe
          className="rounded-[30px]"
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/I5t-cizP1hg?si=LBePw21BaCh97Vri"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Mission Text Section */}
      <div className="w-full bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left text-black">Our Mission</h2>
        <p className="text-base text-center lg:text-left text-black">
          Our approach is to perform open-ended troubleshooting and microsoldering to identify and correct faults on the logic board to bring the dead phone back to life enough to provide a path to your data. Once the phone can boot, we extract the data and create a backup. Then we go one step farther and parse your backup for you so that we can deliver useful information---folders containing all your pictures and videos, your notes, contacts, and text messages. We deliver the parsed data and the backup to you via a custom USB drive.
        </p>
      </div>
    </div>
    </section>
    </div>



{/* our value */}

<section className="py-4 lg-py-[20px]">
    <div className="container">
        <MainHeading Heading="Our Values" />

        <MainTitle Title="We provide diverse solutions for all your circuit board microsoldering requirements, extending beyond iPhones and MacBooks to encompass Samsung and other Android mobile devices. Our services also include HDMI replacement for various game consoles, such as Sony Playstation 5 and Microsoft Xbox. "/>
        <div className="mt-[-25px]">
        <MainTitle Title="Our approach is to perform open-ended troubleshooting and microsoldering to identify and correct faults on the logic board to bring the dead phone back to life enough to provide a path to your data. Once the phone can boot, we extract the data and create a backup. Then we go one step farther and parse your backup for you so that we can deliver useful information---folders containing all your pictures and videos, your notes, contacts, and text messages. We deliver the parsed data and the backup to you via a custom usb drive."/>
        </div>
      

    </div>
</section>

<section>
    {/* Our Vision */}
    <div className="container">
        <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:py-5 py-3">
            <div className="">
                <h2>Our Vision</h2>
                <p>We provide diverse solutions for all your circuit board microsoldering requirements, extending beyond iPhones and MacBooks to encompass Samsung and other Android mobile devices.</p>
                <div className="flex gap-3 items-start">
                <Image src={checkmark} alt="" />
                <p>Our client support team updates you regarding your cell phone device repair status, so you don’t have to worry about your phone or any other gadget.</p>
                </div>
                <div className="flex gap-3 items-start">
                <Image src={checkmark} alt="" />
                <p>Our client support team updates you regarding your cell phone device repair status, so you don’t have to worry about your phone or any other gadget.</p>
                </div>
                <div className="flex gap-3 items-start">
                <Image src={checkmark} alt="" />
                <p>Our client support team updates you regarding your cell phone device repair status, so you don’t have to worry about your phone or any other gadget.</p>
                </div>
            </div>
            <div className="">
                <Image src={OurVision} alt="" />
            </div>
        </div>
    </div>
</section>
<YouTubeHome/>

<GoogleReviews />






   
    </div>
  );
};

export default AboutUs;
