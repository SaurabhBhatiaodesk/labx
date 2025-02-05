import dynamic from "next/dynamic";
import React from "react";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const Breadcrumb = dynamic(() => import('../../components/Breadcrumb/Breadcrumb'), { ssr: false });
// import CourseHighlights from "./CourseHighlights/CourseHighlights";
const CourseHighlights = dynamic(() => import('./CourseHighlights/CourseHighlights'), { ssr: false });
// import Form from "@/components/Form/Form";
const Form = dynamic(() => import('../../components/Form/Form'), { ssr: false });

// import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
const GoogleReviews = dynamic(() => import('../../components/GoogleReviews/GoogleReviews'), { ssr: false });

export const metadata = {
  title: "LabX Repair Mobile Phone Services - Expert Repair & Training",
  description:
    "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description:
      "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
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
    description:
      "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/training",
  },
};
const Training = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Master the Art of Mobile Phone Repair"
          pageDescription="Join LabX's comprehensive mobile phone repairing course to acquire essential skills and certifications. Transform your passion for technology into a rewarding career, and make a difference in people’s lives through mobile phone repair services!"
          backgroundImage="/Images/BannerImages/traningback.png"
          AdminImage="/Images/adminimage.png"
          link="/training"
          buttonname="Join Course"
          scrollId = "Kickstart"
          scrollOffSet = {34 * 5}
        />
        <CourseHighlights />
        <Form />
        <GoogleReviews />
      </div>
    </>
  );
};

export default Training;
