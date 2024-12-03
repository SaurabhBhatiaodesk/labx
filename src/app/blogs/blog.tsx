import React from "react";
import Image from "next/image";
import course2 from "../../../../public/Images/course2.png";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainButton from "@/components/MainButton/MainButton";
import BlogList from "./BlogListing";

const Blogs = () => {
  return (
    <>
     <div className="py-4 lg:py-[20px]">
        <div className="container">
          <div className="">
            <MainHeading Heading="Our Blogs" />
          </div>
        </div>
    </div>
    <BlogList />
    </>
  );
};

export default Blogs;
