import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
import FeeSolutions from "./FeeSolutions";
import HowWorks from "./HowWorks";
import StaperForm from "./StaperForm";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";

const MailRepair = () => {
  return (
    <>
      <div>
        <div>
          <Breadcrumb
            pageName="Mail In Repair"
            pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
            backgroundImage="/Images/BannerImages/mailinrepair.png"
            AdminImage="/Images/mailinrepair.png"
              link="/"
          />
        </div>

        <FeeSolutions />
        <HowWorks />
        <StaperForm />
        <GoogleReviews />

        
      </div>
    </>
  );
};

export default MailRepair;
