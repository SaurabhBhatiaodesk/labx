import Link from "next/link";
import React from "react";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";
import trending from "../../../public/Images/icons/trending-up.svg"
import coursereating from "../../../public/Images/icons/coursereating.svg"
import clock from "../../../public/Images/icons/clock.svg"

interface TraningBanner {
  pageName: string;
  pageDescription: string;
  backgroundImage: string;
  AdminImage: string;
  link: any; 
  courseName:string;
  courseRating:any;
  courseHour:any;
  Duration:any;
  Price:any;
}

function TraningBanner({
  pageName,
  pageDescription,
  backgroundImage,
  AdminImage,
  link, 
  courseName,
  courseRating,
  courseHour,
  Duration,
  Price,

}: TraningBanner) {
  return (
    <>
      <section
        className="bg-no-repeat bg-cover p-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-[5fr_3fr] items-center pt-3">
            <div className="w-full px-4">
              <div className="text-center lg:text-left">


                <div className="flex gap-3 mb-2">
                    <div className="flex gap-2">
                       <Image src={trending} alt=""/>
                        <span>{courseName}</span>

                    </div>
                    <div className="flex gap-2">
                       <Image src={coursereating} alt=""/>
                        <span>{courseRating}</span>

                    </div>
                    <div className="flex gap-2">
                       <Image src={clock} alt=""/>
                        <span>{courseHour}</span>

                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] xl:p-2 w-fit mb-2">
                <h1 className="text-dark  text-3xl font-bold text-black sm:text-4xl md:text-[40px] md:leading-[1.2] w">
                  {pageName}
                </h1>
                </div>
              
            <div className="flex lg:gap-3 gap-2 my-3 xl:flex-row flex-col
            ">
               <div className="flex lg:gap-3 gap-2 lg:justify-start justify-center">
                <span className="text-[#EDE574]">Duration</span>
                
                <span>{Duration}</span>
                |
               </div>
               <div className="flex lg:gap-3 gap-2 lg:justify-start justify-center">
                <span className="text-[#EDE574]">Price</span>
                
                <span>{Price}</span>
                
               </div>
            </div>
              </div>
              <div className="flex lg:justify-start justify-center">
                {/* Button is now dynamic */}
                <Link href={link}>
                  <button className="btn">joing This Course </button>
                </Link>
              </div>
            </div>
            <div className="admin-image relative 2xl:h-[500px] lg:h-[350px] h-[350px]">
              <Image
                src={AdminImage}
                alt="Admin Visual"
                className="object-contain pt-3"
                fill // Makes the image fill the parent container
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TraningBanner;
