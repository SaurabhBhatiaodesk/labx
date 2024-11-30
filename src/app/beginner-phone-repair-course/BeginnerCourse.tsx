import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import BeginnerPhoneRepaiCourseSale from "@/components/TraningBanner/BeginnerPhoneRepaiCourseSale";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "@/components/TraningBanner/TraningCourseInstructors";
import TraningTabBigner from "@/components/TraningBanner/TraningTabBigner";
import TraningTabBignersecond from "@/components/TraningBanner/TraningTabBignersecond";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import React from "react";

const BeginnerCourse = () => {
  const accordionData = [
    {
      title: "Can I learn phone repair through a course?",
      content:
        "Yes, our phone repair coaching Australia focuses on key repair techniques, diagnostics, and device management to help aspiring technicians enhance their skills and knowledge.",
    },
    {
      title: "Can Water damage repair fully restore my phone?",
      content:
        "In many cases, yes. Our technicians use advanced techniques to clean, dry, and repair water-damaged components, aiming for full restoration if possible.",
    },
    {
      title: "Are OEM parts used in your phone repairs?",
      content:
        "Yes, we use genuine OEM parts replacement for mobile phones whenever possible to ensure optimal compatibility, performance, and longevity for your mobile device.",
    },
    {
      title: "How soon should I bring in a water-damaged phone?",
      content:
        "Bring it in as soon as possible! Delays can lead to corrosion and further damage. Immediate action improves the chances of recovery.",
    },
    {
      title: "Do you offer warranties on replaced phone parts?",
      content:
        "Yes, we offer warranties on most replaced parts, covering defects and issues that arise after repair, giving you peace of mind.",
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
    <>
      <TraningBanner
        pageName="Beginner Phone Repair Course"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        AdminImage="/Images/adminimage.png"
        link="/coming-soon"
        courseName="Beginner"
        courseRating="4.7"
        courseHour="40 Hours"
        Duration="5 Day"
        Price="$1249 (Includes a free toolkit for each student"
      />

      <TraningWillLearn
        title="What You will Learn"
        Course="Course Format"
        param1="Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs. Our expert trainers will guide you through each step, ensuring you gain practical knowledge and confidence in repairing various devices.
"
        param2="Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs. Our expert trainers will guide you through each step, ensuring you gain practical knowledge and confidence in repairing various devices.
"
        param3="Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs. Our expert trainers will guide you through each step, ensuring you gain practical knowledge and confidence in repairing various devices.
"

Courseformate1="Video Tutorials"
Courseformate2="Checking the Task"
Courseformate3="Pulvinar sapien"
Courseformate4="Software"

      />
      <TraningTabBigner/>

      <TraningTabBignersecond/>
      <TraningCourseInstructors/>
      <BeginnerPhoneRepaiCourseSale/>
      <FrequentlyAskedQuestions
    heading="Frequently Asked Questions"
    title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing."
    accordionData={accordionData}
  />
      <GoogleReviews />
    </>
  );
};

export default BeginnerCourse;
