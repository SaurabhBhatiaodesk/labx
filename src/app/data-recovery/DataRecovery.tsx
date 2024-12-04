import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainButton from "@/components/MainButton/MainButton";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";

const DataRecovery = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Data Recovery Service
"
          pageDescription="At LabX, we specialize in recovering data from a wide range of mobile devices, including phones, tablets, and other gadgets that may have suffered significant damage. However, device data recovery comes with certain limitations that customers need to be aware of before submitting a device.
"
          backgroundImage="/Images/BannerImages/mailinrepair.png"
          AdminImage="/Images/Data Recovery side.png"
          link="/coming-soon"
        />
      </div>
      <div className="container">
        <section>
          <div className=" py-4 xl:py-6">
            <MainHeading Heading="Your Data. What Happened Is Terrible, We Can Help!" />
            <MainTitle Title="The only path to data recovery is getting the phone to work again. We bring phones back from the dead every day. There is no manual, no instruction book, for what we do. We are the motherboard whisperers." />
          </div>
          <div>
            <div className="youtube-1">
              <iframe
                className="rounded-[30px]"
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/I5t-cizP1hg?si=LBePw21BaCh97Vri"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <MainButton MainButton="getstart" />
          </div>
        </section>
      </div>
      <YouTubeHome />
      <GoogleReviews />
    </>
  );
};

export default DataRecovery;
