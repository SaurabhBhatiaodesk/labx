
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import DataRecovery from "@/components/HomeCpmponents/DataRecovery/DataRecovery";
import DeliveryTous from "@/components/HomeCpmponents/DeliveryTo-us/DeliveryTous";
import FixLabx from "@/components/HomeCpmponents/FixLabx/FixLabx";
import OurClient from "@/components/HomeCpmponents/OurClients/OurClient";
import WhyChooseLabX from "@/components/HomeCpmponents/WhyChooseLabX/WhyChooseLabX";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import MainBanner from "@/components/MainBanner/MainBanner";
import RecentNews from "@/components/RecentNews/RecentNews";

// import ServicesComponents from "@/components/ServicesComponents/ServicesComponents";
import Storeproduct from "@/components/Storeproduct/Storeproduct";
import React from "react";
export const metadata = {
  title: "LabX Repair Mobile Phone Services - Expert Repair & Training",
  description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
  // keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    url: "/", // Replace with your actual page URL
    type: "website",
    images: [
      {
        url: "", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "LabX Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },

};

const page = () => {
  return (
    <div>
      <MainBanner />
      <OurClient />
      <DeliveryTous/>
      <Storeproduct/>
      <DataRecovery/>
      <WhyChooseLabX />
      <FixLabx />
      <GoogleReviews />
      <RecentNews/>
      <YouTubeHome/>
      <AskusQuestion />
     
    
     
    </div>
  );
};

export default page;
