"use client";
import React, { useEffect, useState } from "react";
import Price from "./Price";
import Device from "../../../public/Images/about/device.svg";
import GoogleReview from "@/components/GoogleReviews/what-we-do-review";
import Image from "next/image";
import ContactForm from "../contact-us/ContactForm";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainHeading from "@/components/ManinHeading/MainHeading";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Page = () => {
  const priceCat = useSelector((state: RootState) => state.users.priceCat);
  const priceData = [
    {
      id: 0,
      title: "Buy Back Price List",
      description:
        "Check the pricing for all our complex mobile phone repair services, including B2B solutions and training courses. Visit our Price List page for detailed cost information and tailored quotes based on the specific repair or course you need.",
    },
    {
      id: 1,
      title: "LabX Repair - Price List",
      description:
        "At LabX Repair, we provide a comprehensive range of repair including Data Recovery, Technician Damage Repair, DIY Damage Repair, Screen refurbishment services and General Spare Part Replacment. Below are the four main categories of pricing for our offerings:",
    },
    {
      id: 2,
      title: " Buy Back Price List",
      description:
        "Check the pricing for all our complex mobile phone repair services, including B2B solutions and training courses. Visit our Price List page for detailed cost information and tailored quotes based on the specific repair or course you need.",
    },
    {
      id: 3,
      title: "Buy Back Price List",
      description:
        "Check the pricing for all our complex mobile phone repair services, including B2B solutions and training courses. Visit our Price List page for detailed cost information and tailored quotes based on the specific repair or course you need.",
    },
  ];
  const [selectedPriceData, setSelectedPriceData] = useState(priceData[0]);
  useEffect(() => {
    // Filter the priceData array based on the current value of priceCat
    const filteredData = priceData.find((item) => item.id === priceCat);
    if (filteredData) {
      setSelectedPriceData(filteredData); // Update the local state with the filtered data
    }
  }, [priceCat]);
  return (
    <>
      <div className="gk-hidden button">
        <Breadcrumb
          pageName={selectedPriceData.title}
          pageDescription={selectedPriceData.description}
          backgroundImage="/Images/BannerImages/price.png"
          AdminImage="/Images/money.png"
          link=""
          buttonname=""
        />
      </div>
      <section className="pt-8">
        <div className="max-container">
          <div className="text-center">
            <MainHeading Heading="Get the Best Value for Your Device - LabX Buyback Prices" />
            <p>
              Select your mobile phone brand and explore our price list for
              various repair services we offer, from screen refurbishment to
              advanced motherboard repairs and more.
            </p>
          </div>
        </div>
      </section>
      <Price />
      <div className="container_small bg-black pt-8 pb-6">
        <h2 className="text-center">Contact Information</h2>
        <ContactForm />
      </div>
      <div className="device__img text-center container pt-8 mt-5 pb-8 mb-5 relative">
        <Image
          height="1000"
          width="1000"
          src={Device.src}
          alt=""
          className="m-auto"
        />
        <div className="overlap__number">
          <h2>Start Buy Back Process Now</h2>
          <h3>
            <Link href="tel:+61455777077">+61455777077</Link>
          </h3>
        </div>
      </div>

      <GoogleReview />
    </>
  );
};

export default Page;
