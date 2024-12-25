"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";

interface BreadcrumbProps {
  pageName: string;
  pageDescription: string;
  backgroundImage: string;
  AdminImage: string;
  link?: any;
  buttonname?: string;
  scrollId?:any;
  scrollOffSet?:any;
}

function Breadcrumb({
  pageName,
  pageDescription,
  backgroundImage,
  AdminImage,
  link,
  buttonname, // Destructure the link prop
  scrollId,
  scrollOffSet
}: BreadcrumbProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleScrollToTarget = () => {
    const currentRoute = window.location.pathname;

    // Set the target ID based on the current route
    let targetId: any;
    if (currentRoute === link) {
      targetId = scrollId;
    }
    //  else if (currentRoute === "/contact-us") {
    //   targetId = "contactId";
    // } else if (currentRoute === "/training") {
    //   targetId = "Kickstart";
    // }
    const target = document.getElementById(targetId);
    const offset = scrollOffSet; // 3rem in pixels (assuming 1rem = 16px)

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
            <div className="w-full lg:px-4">
              <div className="text-center lg:text-left">
                <ul className="flex items-center lg:justify-start justify-center gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="text-dark flex items-center gap-[10px] lg:text-base font-medium dark:text-white text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <p className="text-body-color flex items-center gap-[10px] lg:text-base font-medium mb-0 text-sm ">
                      <span className="text-body-color dark:text-dark-6">
                        /
                      </span>
                      {pageName}
                    </p>
                  </li>
                </ul>
                <h1 className="text-dark lg:mb-3 mb-2 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {pageName}
                </h1>
                <p
                  className="text-body-color dark:text-dark-6 mb-5 text-base"
                  dangerouslySetInnerHTML={{ __html: pageDescription }}
                ></p>
              </div>
              <div className="flex lg:justify-start justify-center">
                {/* Button is now dynamic */}
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
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Breadcrumb;
