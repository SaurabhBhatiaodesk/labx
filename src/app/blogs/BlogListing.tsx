import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import Image from "next/image";
import BlogImage from "../../../public/Images/OurVision.png";
import MainButton from "@/components/MainButton/MainButton";
import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="main-blog-list">
        <div className="container flex flex-wrap gap-1 mb-2">
          <div className="blog-article p-4">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>

            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

          <div className="blog-article p-4">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>

            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

          <div className="blog-article p-4">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>
            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

          <div className="blog-article p-4">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>
            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

          <div className="blog-article p-4">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4">
              Is It Worthwhile Investing in Digital Marketing for Yoga Studio.
            </h1>
            <div className="learnmore">
                <MainButton MainButton="View Details" link="/" />
            </div>
          </div>

          <div className="blog-article p-4">
            <Image src={BlogImage} alt="" />
            <h1 className="mb-4">
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
