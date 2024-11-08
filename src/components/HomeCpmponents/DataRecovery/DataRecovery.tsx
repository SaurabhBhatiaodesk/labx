import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";
import Image from "next/image";
import pointer from "../../../../public/Images/icons/pointing-right.svg";
import MainButton from "@/components/MainButton/MainButton";
import cloud from "../../../../public/Images/Home/3dillustrationcloud.png";

const DataRecovery = () => {
  return (
    // <div>DataRecovery</div>

    <>
      <div className="container lg:py-5 py-4">
        <MainHeading Heading="Automated Customer Service" />
        <MainTitle Title="At LabX, we specialize in recovering data from a wide range of mobile devices, including phones, tablets, and other gadgets that may have suffered significant damage. However, data recovery comes with certain limitations that customers need to be aware of before submitting a device." />

        <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
          <div>
            <div className="flex-col gap-2  flex">
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                Customer Portal for Seamless Tracking
Our customer portal offers a convenient, user-friendly way for customers to log in and monitor their device repairs. They can view real-time updates, repair status, and access service history.

                </p>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                Real-Time Repair Updates
Through automated notifications, customers receive timely emails or messages that keep them informed of every repair stage. From initial assessment to completion, users stay in the loop.

                </p>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                Feedback Requests and Customer Interaction
After each service, customers receive automated feedback requests, allowing them to rate their experience. This helps us continuously improve while ensuring satisfaction with every mobile phone repair.

                </p>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                Streamlined Communication for a Better Experience
Automated notifications reduce the need for back-and-forth inquiries, making communication faster and more efficient. Customers can relax, knowing they’re updated every step of the way.

                </p>
              </div>

              {/* <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <p>
                  Failed or Broken Logic Boards: Our team specializes in
                  recovering data from devices with broken or failed logic
                  boards, using advanced techniques.
                </p>
              </div> */}
              <div className="flex items-start gap-3">
                <MainButton MainButton="LEARN MORE" link="#" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <Image src={cloud} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataRecovery;
