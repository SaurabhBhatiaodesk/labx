import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import Image from "next/image";
import BlogImage from "../../../public/Images/adminimage.png";
import MainButton from "@/components/MainButton/MainButton";
import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="main-blog-list">
        <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 justify-center text-center gap-4 mb-2">
          <div className="blog-article p-4 p-4 p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4 mt-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>

            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

          <div className="blog-article p-4 p-4 p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4 mt-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>

            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

          <div className="blog-article p-4 p-4 p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4 mt-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>
            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default Blogs;
