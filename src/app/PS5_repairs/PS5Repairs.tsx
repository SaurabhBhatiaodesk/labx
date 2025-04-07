import React from "react";
import PS5Banner from "./PS5Banner";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import PS5RepairsSydney from "./PS5RepairsSydney";
import PS5ExpertRepair from "./PS5ExpertRepair";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import PS5Sydney from "./PS5Sydney";
import StaperForm from "../mail-in-repair/StaperForm";

const PS5Repairs = () => {
  const accordionData = [
    {
      title: "What types of devices do you repair?",
      content:
        "We repair a wide range of mobile devices, including iPhones, Android phones, tablets, and MacBooks. We specialize in logic board repairs, microsoldering, and screen refurbishments.",
    },
    {
      title: "What types of repairs do you specialize in?",
      content:
        "Our expertise includes screen replacement, motherboard repairs, data recovery, and micro soldering. We also handle complex repairs like Face ID issues, and water damage recovery.",
    },
    {
      title: "Do you offer any warranties on your repairs?",
      content:
        "Yes, all repairs come with a 1 Year warranty on parts and workmanship. This ensures that if the same issue reoccurs, we will repair it free of charge, provided no further damage has occurred to the device.",
    },
    {
      title: "What is the warranty on liquid-damaged devices?",
      content:
        "We do not recommend repairing liquid-damaged devices and suggest only data recovery services. If the customer insists on repair, we do not provide any warranty, including for the replaced parts.",
    },
    {
      title: "Will all functions work on my dead device after repair?",
      content:
        "No guarantees can be made. The initial quote covers the visible issue, e.g., turning on a dead device. Since devices have numerous functions, issues like a non-working camera or mic will require a separate quote unless the fault is minor, in which case we’ll address it during the repair. Major issues will need re-quoting.",
    },
    {
      title: "Do you offer repair services for all phone brands?",
      content:
        "Yes, we provide repair services for a wide range of phone brands, including Apple, Samsung, Xiaomi, and more. Our technicians are experienced in handling various devices and models.",
    },
    {
      title: "How long does a typical phone repair take?",
      content:
        "Most phone repairs are completed within a few hours, depending on the complexity of the issue. We strive to return your device in working condition as quickly as possible.",
    },
  ];
  return (
    <div>
      <PS5Banner />
      <div className="bg-[#0b0b0b] md:py-10 py-8">
        <div className=" container">
          <MainHeading Heading="How Mail-In PS5 Repair Works?" />
          <MainTitle
            Title={`Simply package your PS5 securely and ship it to us. Once we receive your console, our expert technicians will diagnose the issue and carry out the necessary repairs using high-quality parts. After a thorough quality check, we’ll quickly ship your fully functional PS5 back to you so you can resume gaming without delay. `}
          />
        </div>
      </div>
      <StaperForm />
      <PS5RepairsSydney />
      <PS5ExpertRepair />
      <PS5Sydney />
      <GoogleReviews />
      <AskusQuestion accordionData={accordionData}
      faq="Frequently Asked Questions (FAQs)
" />
    </div>
  );
};

export default PS5Repairs;
