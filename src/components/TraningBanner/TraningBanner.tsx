"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import trending from "../../../public/Images/icons/trending-up.svg";
import coursereating from "../../../public/Images/icons/coursereating.svg";
import clock from "../../../public/Images/icons/clock.svg";
import Link from "next/link";

interface TraningBanner {
  pageName: string;
  pageDescription: string;
  backgroundImage: string;
  AdminImage: string;
  link: any;
  courseName: string;
  courseRating: any;
  courseHour: any;
  Duration: any;
  Price: any;
  buttonname:any;
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
  buttonname
}: TraningBanner) {

    const [isBrowser, setIsBrowser] = useState(false);
  
    // Check if we're in the browser
    useEffect(() => {
      setIsBrowser(true);
    }, []);

  const handleScrollToTarget = () => {
    const currentRoute = window.location.pathname;

    // Set the target ID based on the current route
    let targetId: any;
    if (currentRoute === "/advanced-motherboard") {
      targetId = "mother-board";
    } else if (currentRoute === "/expert-motherboard-repair") {
      targetId = "expert-motherboard-repair-id";
    } else if (currentRoute === "/beginner-phone-repair-course") {
      targetId = "beginner-phone-repair-course-id";
    } else if (currentRoute === "/master-motherboard-repair") {
      targetId = "master-motherboard-repairi-id";
    } else if (currentRoute === "/professional-phone-screen") {
      targetId = "professional-phone-screen-id";
    } else if (currentRoute === "/broken-ripped-pads-repair-jumbers") {
      targetId = "broken-ripped-pads-repair-jumbers-id";
    }
    
    const target = document.getElementById(targetId);
    const offset = 12 * 5; // 3rem in pixels (assuming 1rem = 16px)

    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const scrollToPosition = targetPosition - offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section
        className="bg-no-repeat bg-cover p-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-[5fr_3fr] items-center pt-3">
            <div className="w-full lgh:px-4">
              <div className="text-center lg:text-left">
                <div className="flex gap-3 mb-2">
                  <div className="flex gap-2">
                    <Image src={trending} alt="" />
                    <span className=" lg:text-lg text-sm">{courseName}</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src={coursereating} alt="" />
                    <span className=" lg:text-lg text-sm">{courseRating}</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src={clock} alt="" />
                    <span className=" lg:text-lg text-sm">{courseHour}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] xl:p-2 w-fit mb-2">
                  <h1 className="text-dark  text-3xl font-bold text-black sm:text-4xl md:text-[40px] md:leading-[1.2] w">
                    {pageName}
                  </h1>
                </div>

                <div
                  className="flex lg:gap-3 gap-2 my-3 xl:flex-row flex-col
            "
                >
                  <div className="flex lg:gap-3 gap-2 lg:justify-start justify-center">
                    <span className="text-[#EDE574]">Duration</span>
                    <span>{Duration}</span>|
                  </div>
                  <div className="flex lg:gap-3 gap-2 lg:justify-start justify-center">
                    <span className="text-[#EDE574]">Price</span>

                    <span>{Price}</span>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-start justify-center">
                {/* Button is now dynamic */}
                {/* <button className="btn" onClick={handleScrollToTarget}>
                  JOIN THIS COURSE
                </button> */}
                 {isBrowser && window.location.pathname === link ? (
                  <button className="btn" onClick={handleScrollToTarget}>
                    {buttonname}
                  </button>
                ) : (
                  <Link href={link}>
                    <button className="btn">{buttonname}</button>
                  </Link>
                )}
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
