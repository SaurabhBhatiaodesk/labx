import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
import ContactUsForm from "./ContactUsForm";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import FixLabx from "@/components/HomeCpmponents/FixLabx/FixLabx";

const page = () => {
  return (
    <>
      <div className="gkhidden button ">
        <Breadcrumb
          pageName="Contact Us"
          pageDescription="Contact Us For More Information "
          backgroundImage="/Images/BannerImages/contact-us.png"
          AdminImage="/Images/contactus.svg"
          link="/contact-us"
          buttonname="Request a Quote"
          scrollId = "contactId"
          scrollOffSet = {24 * 5}
        />
       
        </div>
          <ContactUsForm />
          <FixLabx/>
          <YouTubeHome />
          <GoogleReviews />
     
    
    </>
  );
};

export default page;
