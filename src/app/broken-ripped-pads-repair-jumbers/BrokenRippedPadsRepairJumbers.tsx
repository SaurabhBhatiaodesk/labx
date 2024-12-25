import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import React from "react";
import ExpertChooseLab from "../../components/HomeCpmponents/WhyChooseLabX/ExpertChooseLab"
import BrokenRippedFirstTab from "./BrokenRippedFirstTab";
import BrokenRippedSecondTab from "./BrokenRippedSecondTab";
import BrokenCourseInstructors from "./BrokenCourseInstructors";
import BrokenBlink from "./BrokenBlink";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";

import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import MainHeading from "@/components/ManinHeading/MainHeading";
import FormCode from "@/components/Form/FormCode";

const BrokenRippedPadsRepairJumbers = () => {
    const accordionData = [
        {
          title: "What is the duration of the training program?",
          content:
            "The training program lasts for 5 days, providing intensive hands-on experience and theoretical knowledge to master mobile repair techniques efficiently.",
        },
        {
          title: "Do I need prior experience in mobile phone repairs?",
          content:
            "No prior experience is required. The course is designed for beginners, with step-by-step guidance to ensure you develop the necessary skills from scratch.",
        },
        {
          title: "What devices will I learn to repair?",
          content:
          "You will learn to repair iPhones, iPads, and Android devices, covering a range of common issues like screen, battery, and camera replacements.",   
        },
        {
          title: "Are the tools and materials provided?",
          content:
            "Yes, all tools and materials required for the course, including practice devices, will be provided, allowing you to learn hands-on during the training.",
        },
        {
          title: "How can I register for the course?",
          content:
            "You can register for the mobile phone repair course through our website, where you can select a suitable date and complete the registration process securely online.",
        },
        {
          title: "What happens if I miss a class?",
          content:
            "If you miss a class, you can arrange to attend a make-up session. We ensure flexibility to help you complete your training.",
        },
        {
          title: "Will I be able to start my own repair business after this training?",
          content:
            "Absolutely! The phone repair course equips you with the skills needed to start your own mobile repair business, offering practical insights into running a successful operation.",
        },
      ];
  return (
    <>
      <TraningBanner
        pageName=" Broken/ Ripped Pads Repair Jumbers "
        pageDescription=" "
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        AdminImage="/Images/adminimage.png"
        link="/broken-ripped-pads-repair-jumbers"
        courseName="Beginner"
        courseRating="4.7"
        courseHour="25 Hours"
        Duration="5 Days"
        Price="$1249 (Includes a free toolkit for each student)"
         buttonname="JOIN THIS COURSE"
      />


<TraningWillLearn
        title="Course Highlights"
        Course="Phone Repair Course Format"
        paramtitle1="Essential Tools, Parts, and Screen Replacement"
        param1="Learn to use essential tools and parts for high-quality mobile repairs. This phone fixing course covers effective screen replacement techniques for phones and iPads, helping you restore device appearance and functionality. Mastering these skills ensures efficient, professional screen repairs.
"
        paramtitle2="Battery and Charging Port Repairs"
        param2="Gain expertise in battery and charging port replacements for smartphones and tablets. You’ll learn safe removal, installation, and testing techniques that ensure proper power flow. These skills are essential for extending device lifespan and delivering reliable, long-lasting repairs.

"
        paramtitle3="Fault Diagnostics and Component Replacement"
        param3="Develop your diagnostic skills and learn to replace key components, including back glass, housings, cameras, and flashlights. This fixing phones course focuses on troubleshooting methods to efficiently fix faults, allowing you to improve device performance and maintain high repair standards.
"
        Courseformate1="Video Tutorials"
        Courseformate2="  5 Days Duration"
        Courseformate3="  Experienced Instructors"
        Courseformate4="  Free Toolkit"
           border="#26bd9aed"
      />
      <BrokenRippedFirstTab/>
      <BrokenRippedSecondTab/>
      <BrokenCourseInstructors/>
      <BrokenBlink/>
      <ExpertChooseLab />
      <div className="container" id="broken-ripped-pads-repair-jumbers-id">
        <MainHeading Heading="Broken Ripped Pads Repair Jumbers"/>
        </div>
          <FormCode/>
          
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications."
        accordionData={accordionData}
      />
      <BiginnerReviews />

      
    </>
  );
};

export default BrokenRippedPadsRepairJumbers;
