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
          pageName="Master the Art of Mobile Repair with LabX—Learn and Help Others"
          pageDescription="Join LabX's comprehensive mobile phone repairing course to acquire essential skills and certifications. Transform your passion for technology into a rewarding career, and make a difference in people’s lives through mobile phone repair services!"
          backgroundImage="/Images/BannerImages/traningback.png"
          AdminImage="/Images/adminimage.png"
              link="/coming-soon"
        />
        <CourseHighlights/>
        <Form />
        <GoogleReviews />
      </div>
    </>
  );
};

export default Training;
