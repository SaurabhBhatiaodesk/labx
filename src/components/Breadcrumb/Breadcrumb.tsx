"use client"
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
  buttonname?:string;
}

function Breadcrumb({
  pageName,
  pageDescription,
  backgroundImage,
  AdminImage,
  link, 
  buttonname, // Destructure the link prop
}: BreadcrumbProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleScrollToTarget = () => {
    const target = document.getElementById("stapergk");
    const offset = 12 * 5; // 3rem in pixels (assuming 1rem = 16px)

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
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
            <div className="w-full px-4">
              <div className="text-center lg:text-left">
                <ul className="flex items-center lg:justify-start justify-center gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <p className="text-body-color flex items-center gap-[10px] text-base font-medium mb-0">
                      <span className="text-body-color dark:text-dark-6">
                        /
                      </span>
                      {pageName}
                    </p>
                  </li>
                </ul>
                <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {pageName}
                </h1>
                <p className="text-body-color dark:text-dark-6 mb-5 text-base">
                  {pageDescription}
                </p>
              </div>
              <div className="flex lg:justify-start justify-center">
                {/* Button is now dynamic */}
                {isBrowser && window.location.pathname === "/mail-in-repair" ? (
                  <button
                    className="btn"
                    onClick={handleScrollToTarget}
                  >
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

export default Breadcrumb;
