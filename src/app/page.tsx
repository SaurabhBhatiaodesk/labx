
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
      {/* <ServicesComponents /> */}
     
    
     
    </div>
  );
};

export default page;
