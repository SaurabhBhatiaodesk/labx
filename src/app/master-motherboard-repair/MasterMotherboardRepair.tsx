"use client"
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import BeginnerPhoneRepaiCourseSale from "@/components/TraningBanner/BeginnerPhoneRepaiCourseSale";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "@/components/TraningBanner/TraningCourseInstructors";
import TraningTabBigner from "@/components/TraningBanner/TraningTabBigner";
import TraningTabBignersecond from "@/components/TraningBanner/TraningTabBignersecond";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import React from "react";
import FristTraningTab from "../expert-motherboard-repair/FristTraningTab";
import TrainingInstructors from "../expert-motherboard-repair/TrainingInstructors";
import TraningSales from "../expert-motherboard-repair/TraningSales";
import ThreeTraningTab from "./ThreeTraningTab";


const MasterMotherboardRepair = () => {
  const accordionData = [
    {
      title: "Who is this course suitable for?",
      content:
        "This course is ideal for technicians, hobbyists, and beginners aiming to master advanced motherboard repair and micro soldering techniques for professional electronic repairs.",
    },
    {
      title: "What skills will I gain from this course?",
      content:
        "You’ll learn diagnostics, micro soldering, reballing, NAND programming, Face ID repairs, and more, equipping you with essential skills for complex motherboard-level electronic repairs.",
    },
    {
      title: "Do I need prior experience in motherboard repairs?",
      content:
        "No prior experience is necessary. This motherboard repair course covers foundational concepts and advanced techniques, making it suitable for both beginners and experienced repair technicians.",
    },
    {
      title: "What tools are required for this course?",
      content:
        "You’ll need soldering stations, hot air rework tools, microscopes, and diagnostic equipment. A detailed list of tools will be provided upon enrollment..",
    },
    {
      title: "Is this course hands-on or theoretical?",
      content:
        "The motherboard repair course emphasizes hands-on training, allowing you to practice repair techniques directly. Theoretical lessons complement practical sessions to build a strong technical foundation.",
    },
    {
      title: "Will I receive certification after completing the course?",
      content:
        "Yes, participants will receive a certification upon successful completion, validating their expertise in motherboard repairs and enhancing their professional credentials.",
    },
    {
      title: "How long does the course take to complete?",
      content:
        "The course duration varies but typically spans several weeks, depending on the intensity of the program and your chosen schedule. Flexible options are available.",
    },
  ];
  const instructorData = {
    instructorName: "Bharat Dhingra & Team",
    instructorImage: "/Images/CourseInstructors.png", // Update with the correct image path
    courseRating: 4.7,
    courseDuration: "40 Hours",
    personsMentoredTarget: 10,
    workshopsAttendedTarget: 500,
    coachingCertificatesTarget: 9,
    CourseHeading: "Training Instructors",
    param2: "Professionals trained ",
    param3: "Positive feedback",
    param1: "Years of industry experience",
    courseDescription: [
      "Our instructors for the Advanced Motherboard Repair – Micro Soldering course are seasoned professionals with over a decade of expertise in mobile device repair. They bring extensive industry knowledge, practical insights, and hands-on guidance to every session. Dedicated to helping students master micro soldering techniques, they ensure confidence and precision in advanced motherboard diagnostics, circuit repair, and component-level replacements.",
    ],
  };
  return (
    <>
      <TraningBanner
        pageName="Master Motherboard Repair – Micro Soldering (Level 3)"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        AdminImage="/Images/adminimage.png"
        link="/coming-soon"
        courseName="Beginner"
        courseRating="4.7"
        courseHour="40 Hours"
        Duration=" 5 Days"
        Price=" $5500"
      />

      <TraningWillLearn
        title="Course Highlights"
        Course="Course Format"
        paramtitle1=" Advanced Motherboard Repair Techniques :-"
        param1=" Gain hands-on experience in diagnosing and fixing complex motherboard issues, including IC replacement and chip-level troubleshooting, guided by industry experts.


"
        paramtitle2="Mastering Soldering Skills :-"
        param2=" Learn precision soldering techniques for microcomponents, enabling you to handle delicate repairs with confidence, ensuring professional-grade results for every repair task.

"
        paramtitle3="Comprehensive Practical Training :-"
        param3="Work with real-world scenarios and modern tools to develop expertise in motherboard repair and soldering, preparing you for a successful career in mobile phone repair.

"
        Courseformate1="Video Tutorials"
        Courseformate2="1 Week Duration"
        Courseformate3="Experienced Instructors"
        Courseformate4="Free Toolkit"
      />
      <ThreeTraningTab/>
      {/* <FristTraningTab /> */}
      {/* <SecondTraningTab/> */}
      <TrainingInstructors {...instructorData} />

      <TraningSales
        courseName="The Course Will Prepare You for Expert Mobile Phone Repair"
        imagedata="/Images/CourseInstructors.png"
        courseDescription={["This Level 3 mainboard repair training is designed to take your repair expertise to the highest level, enabling you to handle the most advanced repairs and data recovery tasks. By the end of this course, you’ll be prepared to tackle any challenge, from CPU reballing to restoring devices with critical board damage."]}
        saleDurationDays={7}
        initialCounters={{
          personsMentored: 50,
          workshopsAttended: 300,
          coachingCertificates: 25,
        }}
      />


      {/* <BeginnerPhoneRepaiCourseSale /> */}
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)
"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications
"
        accordionData={accordionData}
      />
      <GoogleReviews />
    </>
  );
};

export default MasterMotherboardRepair;
