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
            pageName="Mail In Repair Service
"
            pageDescription="Get your device back to peak performance with our expert mail in phone repair solutions. We ensure quick turnaround times and exceptional quality work on complex phone repair problems including motherboard repair. Trust us to keep you connected."
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
