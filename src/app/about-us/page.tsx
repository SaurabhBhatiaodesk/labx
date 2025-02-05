import React from "react";
import AboutUs from "./AboutUs";




export const metadata = {
  title: "LabX Repair Mobile Phone Services - Expert Repair & Training",
  description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    url: "/", 
    type: "website",
    images: [
      {
        url: "", 
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
    images: ["https://example.com/path-to-your-image.jpg"],
  },
  alternates: {
    canonical: `https://labxrepair.com.au/about-us`,
  },

};

const page = () => {
  return (
    <>
      <div>
        <AboutUs />
      </div>
    </>
  );
};

export default page;
