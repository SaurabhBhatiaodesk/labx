import React from 'react';
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseHighlights from './CourseHighlights/CourseHighlights';
import Form from '@/components/Form/Form';
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
const Training = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Training"
          pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
          backgroundImage="/Images/BannerImages/traningback.png"
          AdminImage="/Images/adminimage.png"
        />
        <CourseHighlights/>
        <Form />
        <GoogleReviews />
      </div>
    </>
  );
};

export default Training;
