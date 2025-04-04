import React from "react";
import PS5Banner from "./PS5Banner";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import PS5RepairsSydney from "./PS5RepairsSydney";
import PS5ExpertRepair from "./PS5ExpertRepair";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import Accordion from "@/components/AskusQuestion/AskusQuestion";
import PS5Sydney from "./PS5Sydney";
import StaperForm from "../mail-in-repair/StaperForm";

const PS5Repairs = () => {
  return (
    <div>
      <PS5Banner />
      <div className="bg-[#0b0b0b] md:py-10 py-8">
        <div className=" container">
          <MainHeading Heading="PS5 Repairs Sydney" />
          <MainTitle
            Title={`There is nothing more frustrating than when you're looking forward to a good sesh on your PS5 with your mates and you run into issues.. We have legit seen it all. From bad connections and overheating to power loss and USB f**k ups. Get yourself back in the game today and give us a holla! `}
          />
        </div>
      </div>
      <StaperForm />
      <PS5RepairsSydney />
      <PS5ExpertRepair />
      <PS5Sydney />
      <GoogleReviews />
      <Accordion />
    </div>
  );
};

export default PS5Repairs;
