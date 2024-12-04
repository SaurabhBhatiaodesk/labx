"use client";
import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MainHeading from "../../../components/ManinHeading/MainHeading";
import MainTitle from "../../../components/MainTitle/MainTitle";

interface Params {
  id: string | null; // id can be a string or null if not found
}



const Thankyou = () => {
  const [params, setParams] = useState<Params>({ id: null });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    setParams({ id });
  }, []);

  useEffect(() => {
    console.log("params ::", params);
  }, [params]);

  const steps = [
    {
      title: "Print & Pack",
      content:
        "Print the PDF attachment in your email and place it inside the package.",
      subtitle: "Don’t have a printer?",
      subcontent:
        "  Please include your Ticket # and contact info so we can look you up upon receiving your package. ",
    },
    {
      title: "Confirmation",
      content:
        "You will get an email confirmation when your package has been received. It’s your responsibility to get a quote before mailing your device.",
    },
    {
      title: "Repair",
      content:
        "Your device will be worked on in the order it was received. Queue time is 4-8 weeks for regular service & 1-9 days for expedited. To be added to the Expedited Queue, please mail a check or money order with your package in the amount of $95.",
    },
    {
      title: "Mail Back",
      content:
        "Your device will be mailed back to you once the repair is complete and invoice paid. Tracking number will be emailed to you and will update on your ticket.",
    },
  ];
  const hoverGradients = [
    "linear-gradient(74deg, #56c1c1, #000000)",
    "linear-gradient(74deg, #f35520c0, #000000)",
    "linear-gradient(74deg, #d5fd33a1, #000000)",
    "linear-gradient(74deg, #cf2362a7, #000000)",
  ];

  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-[#EDE574] to-[#E1F5C4] p-4 rounded-md">
          <div className="flex flex-col">
            <DotLottieReact
              src="/Images/jsonfile/thank-you.json"
              loop
              autoplay
              className=" lg:h-[200px] h-[100px]"
            />
            <div className="Removeborder-Heading">
              <MainHeading
                Heading="We have received your request. Thank you!"
                color="black"
              />
            </div>
            {params.id && (
              <MainTitle
                Title={`Your order reference ID: ${params.id}`}
                color="black"
              />
            )}
            <MainTitle
              Title="If you opted for LabX’s shipping label, we will send you the connote details shortly. Otherwise, please include your own shipping information with the reference number provided."
              color="black"
            />
          </div>
        </div>

        <div className="container lg:py-8 py-3 ">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-md shadow-lg text-white transition-all duration-300 border-[1px] border-[#5b5b5b99]"
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    hoverGradients[index % hoverGradients.length];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1f1f1f";
                }}
              >
                <h3 className="text-xl text-[#EDE574]  mb-2">{step.title}</h3>
                <p className="text-base mb-2">{step.content}</p>
                {step.subtitle && (
                  <p className="text-xl text-[#EDE574]  mb-2">
                    {step.subtitle}
                  </p>
                )}
                {step.subcontent && (
                  <p className="text-base mb-2"> {step.subcontent}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex lg:py-8 py-3 lg:my-3 xl-my-4 my-2"></div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
