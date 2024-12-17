import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
import ContactUsForm from "./ContactUsForm";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";

const page = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Contact Us"
          pageDescription="Contact Us For More Information "
          backgroundImage="/Images/BannerImages/contact-us.png"
          AdminImage="/Images/contactus.svg"
          link="/contact-us"
          buttonname="Request a Quote"
        />

        <div>
          <ContactUsForm />
          <YouTubeHome />
          <GoogleReviews />
        </div>
      </div>
    </>
  );
};

export default page;
