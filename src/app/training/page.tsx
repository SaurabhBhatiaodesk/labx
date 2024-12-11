import React from 'react';
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseHighlights from './CourseHighlights/CourseHighlights';
import Form from '@/components/Form/Form';
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
export const metadata = {
  title: "LabX Repair Mobile Phone Services - Expert Repair & Training",
  description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
  // keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    url: "/", // Replace with your actual page URL
    type: "website",
    images: [
      {
        url: "", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "LabX Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },

};
const Training = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Master the Art of Mobile Repair"
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
