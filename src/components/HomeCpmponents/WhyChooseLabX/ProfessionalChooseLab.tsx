"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useEffect } from "react";
import Image from "next/image";
import Repairs from "../../../../public/Images/icons/Vector.svg";
import Transparency from "../../../../public/Images/icons/Transparency.svg";
import Recovery from "../../../../public/Images/icons/Recovery.svg";
import B2BServices from "../../../../public/Images/icons/B2B Services.svg";
import MainButton from "@/components/MainButton/MainButton";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseLabX: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionData = [
    {
        image: B2BServices,
        alt: "Beginner Phone Repair",
        title: "Beginner Phone Repair Course",
        content:"Duration: 5 Days | Price: $1249 (Includes a free toolkit for each student)",
        description: `Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs.`,
        hoverBackground: "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
        pageUrl:'/beginner-phone-repair-course'
    },
    {
      image: Repairs,
      alt: "Advanced Motherboard Repair",
      title: `Advanced Motherboard Repair – Micro Soldering (Level 1)`,
      content:"Duration: 1 Week | Price: $2200",
      description: `Our Level 1 course repairing mobile phones offers hands-on training in essential micro soldering techniques for mobile device motherboard repairs. Ideal for technicians ready to expand their skills, this course covers..`,
      hoverBackground: "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
      pageUrl:'/advanced-motherboard'
    },
    {
      image: Transparency,
      alt: "Expert Motherboard Repair",
      title: "Expert Motherboard Repair – Micro Soldering (Level 2)",
      content:"Duration: 1 Week | Price: $2800",
      description: `The Level 2 cell phone repair course builds on foundational micro soldering techniques and focuses on advanced repairs for modern devices. This phone repairing course covers..`,
      hoverBackground: "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))",
      pageUrl:'/expert-motherboard-repair'
    },
    {
      image: Recovery,
      alt: "Master Motherboard Repair",
      title: "Master Motherboard Repair – Micro Soldering (Level 3)",
      content:"Duration: 5 Days | Price: $5500",
      description: `Our Level 3 Master Course is designed for experienced technicians seeking to master the most advanced techniques in mobile motherboard repair. This intensive phone repairing course covers complex repairs and data recovery, ensuring you can handle the most challenging issues in modern devices.`,
      hoverBackground: "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
      pageUrl:'/master-motherboard-repair'
    },
    
  ];

  return (
    <div>
      <div className="container pt-4" data-aos="fade-up">
        <MainHeading Heading="Our Other Training" />
        <MainTitle Title="Enhancing Skills Through Diverse and Specialized Training Programs" />

        <div className="lg:pb-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
            {sectionData.map((section, index) => (
              <div
                key={index}
                style={{ background: "transparent" }} // Default background
                className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
                onMouseEnter={(e) => e.currentTarget.style.background = section.hoverBackground}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                {/* <div className="flex justify-center">
                  <Image className="pb-2" src={section.image} alt={section.alt} />
                </div> */}
               <a href={section.pageUrl}>
                <h3 className="text-[#EDE574] xl:text-xl lg:w-[100%] m-auto mb-3">{section.title}</h3>
                <p>{section.content}</p>
                <p style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}>
                    {section.description}
                </p>
                <div className="learnmore">
                  <MainButton
                    MainButton="Learn More"
                    link={section.pageUrl}
                  />
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLabX;