import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

import MotherboardPhoneReapair from "@/components/TraningBanner/MotherboardPhoneRepair";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "@/components/TraningBanner/TraningCourseInstructors";
import TrainingTabMotherboard from "@/components/TraningBanner/TrainingTabMotherboard";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import MotherboardReviews from "@/components/GoogleReviews/MotherboardReviews";
import React from "react";

const BeginnerCourse = () => {
  const accordionData = [
    {
      title: "1. Who is this course suitable for?",
      content:
        "This motherboard repair course is designed for individuals with basic device repair knowledge who want to advance their skills in motherboard repair and micro soldering techniques.",
    },
    {
      title: "2. Do I need prior experience in soldering?",
      content:
        "Basic soldering knowledge is helpful but not mandatory. The course starts with foundational techniques, gradually advancing to expert-level micro soldering skills.",
    },
    {
      title: "3. What tools will I learn to use?",
      content:
        "You’ll learn to work with precision tools like soldering stations, microscopes, multimeters, and hot air rework stations essential for motherboard-level repairs.",
    },
    {
      title: "4. What devices does the course cover?",
      content:
        "The micro soldering course covers a wide range of devices, including smartphones, tablets, and other electronics, focusing on advanced motherboard-level repairs",
    },
    {
      title: "5. Will I receive hands-on training?",
      content:
        "Yes, the course emphasizes hands-on practice, allowing you to work on real devices under expert guidance to build confidence and precision.",
    },
    {
      title: "6. Is certification provided after completion?",
      content:
        "Yes, students receive a recognized certification upon successful completion, showcasing their expertise in advanced motherboard repair and micro soldering.",
    },
    {
      title: "7. How long is the course?",
      content:
        "The Advanced Motherboard Repair – Micro Soldering course is one week long, offering intensive, hands-on training to build expertise within a focused timeframe.",
    },
  ];
  return (
    <>
      <TraningBanner
        pageName="Advanced Motherboard Repair – Micro Soldering (Level 1)"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        AdminImage="/Images/adminimage.png"
        link="/coming-soon"
        courseName="Advanced"
        courseRating="4.7"
        courseHour="40 Hours"
        Duration=" 1 Week"
        Price="$2200"
      />

      <TraningWillLearn
        title="Course Highlights"
        Course="Course Format"
        paramtitle1="MMaster Complex Repairs with Expert Guidance"
        param1="Learn to diagnose and repair damaged motherboards with advanced techniques. This hands-on training covers common issues like power problems, faulty connectors, and damaged circuits, all with expert instruction to build your repair confidence.
"
        paramtitle2="Precision Micro Soldering Skills"
        param2="Develop expert-level micro soldering skills required for repairing modern electronics. Learn to handle tiny components on circuit boards with precision, using specialized tools for soldering and rework, ensuring high-quality, professional repairs.

"
        paramtitle3="Troubleshooting & Diagnostics Techniques"
        param3="Gain proficiency in advanced troubleshooting techniques using tools like oscilloscopes, multimeters, and thermal cameras. Learn how to efficiently diagnose and repair complex motherboard issues, equipping you with the skills to tackle any electronic problem.
"
        Courseformate1="Video Tutorials"
        Courseformate2="   1 Week Duration"
        Courseformate3="   Experienced Instructors"
        Courseformate4="  Free Toolkit"
      />
      <TrainingTabMotherboard />
      <TraningCourseInstructors />
      <MotherboardPhoneReapair />
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications."
        accordionData={accordionData}
      />
      <MotherboardReviews />
    </>
  );
};

export default BeginnerCourse;
