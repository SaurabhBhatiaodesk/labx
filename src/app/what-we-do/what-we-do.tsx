import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainButton from "@/components/MainButton/MainButton";
import Image from "next/image";
import WhatBlock from "./what-we-do-block";
import GoogleReview from "@/components/GoogleReviews/what-we-do-review";
import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';

const WhatWeDo = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="What We Do"
          pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
          backgroundImage="/Images/BannerImages/about.png"
          AdminImage="/Images/adminimage.png"
          link="/coming-soon"
             buttonname="Request a Quote"
        />
      </div>
      <WhatBlock/>
      <YouTubeHome />
      <GoogleReview/>
    </>
  );
};

export default WhatWeDo;
