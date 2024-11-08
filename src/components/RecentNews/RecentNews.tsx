"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import MainHeading from "../ManinHeading/MainHeading";
import MainTitle from "../MainTitle/MainTitle";
import blogimage from "../../../public/Images/Home/blogimage.png";
import blogimage1 from "../../../public/Images/Home/imageblog.svg";
import blogimage2 from "../../../public/Images/Home/imageblog2.svg";
import AOS from "aos";
import "aos/dist/aos.css";

interface BlogData {
  id: number;
  image: any; // use StaticImageData type for Next.js images
  heading: string;
  param: string;
  date: string;
}

const RecentNews: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const data: BlogData[] = [
    {
      id: 0,
      image: blogimage,
      heading: "Diagnosing and Fixing Logic Board",
      param:
        "The logic board, or motherboard, is the heart of any smartphone, handling essential functions such as processing data, memory storage, and connecting",
      date: "2 Oct, 2024",
    },
    {
      id: 0,
      image: blogimage1,
      heading: "Replacing and Recalibrating Smartphone",
      param:
        "Modern smartphones are equipped with a variety of sensors that enhance user experience, from simple actions like auto-rotating the screen to advanced",
      date: "2 Oct, 2024",
      
    },
    {
      id: 0,
      image: blogimage2,
      heading: "Data Recovery from Severely Damaged",
      param:
        "In today’s digital world, smartphones have become essential for storing valuable data, from personal photos and messages to important documents and contacts",
      date: "2 Oct, 2024",
      
    }


  ];

  return (
    <>
      <div className="container">
        <div className="py-5 xl:py-10" data-aos="fade-up">
          <MainHeading Heading="Recent News" />
          <MainTitle
            Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing."
            data-aos="fade-up"
          />
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:py-5 py-3">
            {data.map((item) => (
              <div className="blogs" key={item.id} data-aos="zoom-in">
                <div >
                  <Image src={item.image} alt="Blog Image" />
                </div>
                <div className="mt-[10px] lg:mt-[20px]">
                  <h4 className="font-[600]" >
                    {item.heading.split(" ").slice(0, 5).join(" ")}...
                  </h4>
                  <p data-aos="fade-left">{item.param}</p>
                  <div className="flex justify-between" >
                    <button className="capitalize text-[16px] tracking-[1px]">
                      read more
                    </button>
                    <span className="capitalize text-[16px] tracking-[1px]">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentNews;
