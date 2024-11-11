import React from "react";
import Image from "next/image";
import course2 from "../../../../public/Images/course2.png";
import MainHeading from "@/components/ManinHeading/MainHeading";

const CourseHighlights = () => {
  return (
    <>
      <div>
        <div className="container">
 
            <div className=" lg:py-5 py-3">
               <MainHeading Heading="Course Highlights" /> 
            </div>
          <div>
            <div className="grid grid-col-2 gap-4">
              <div>
                <Image src={course2} alt="" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHighlights;
