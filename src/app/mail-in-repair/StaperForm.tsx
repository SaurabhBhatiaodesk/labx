"use client";
import Lottie from "lottie-react";
import lottiearrow from "../../../public/Images/jsonfile/lottieflow-fill.json";
// import { Input, Textarea } from "@nextui-org/react";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MainHeading from "@/components/ManinHeading/MainHeading";
import StaperForm1 from "../../../public/Images/StaperForm1.png";
import secondmail from "../../../public/Images/second mail.png";
import StaperForm3 from "../../../public/Images/StaperForm3.png";
import StaperForm4 from "../../../public/Images/StaperForm4.png";
import Textarea from "@mui/joy/Textarea";

import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import "./mail-in-repair.css";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
type Errors = {
  businessName?: string;
  fullName?: string;
  contactNo?: string;
  emailAddress?: string;
  returnShippingAddress?: string;
  deviceType?: string;
  brand?: string;
  model?: string;
  imeiOrSerialNo?: string;
  repairDeviceType?: string;
  issueDescription?: string;
  termsAndConditions?: string;
  signature?: string;
  pricingAgreement?: string;
  previousRepairAttempts?: string;
  jumpQueueForFasterService?: string;
  additionalComments?: string;
  requireReturnLabel?: string;
  requirePickupLabel?: string;
  previousRepairAttemptsComments?: string;
  returnLabelDetails?: string;
  pickupLabelDetails?: string;
};

type PersonalDetails = {
  businessName: string;
  fullName: string;
  contactNo: string;
  emailAddress: string;
  returnShippingAddress: string;
};

type DeviceDetails = {
  deviceType: string;
  brand: string;
  model: string;
  imeiOrSerialNo: string;
  devicePassword: string;
};

type RepairDetails = {
  issueDescription: string;
  previousRepairAttempts: string;
  jumpQueueForFasterService: string;
  additionalComments: string;
};
type ShippingDetails = {
  requireReturnLabel: string;
  requirePickupLabel: string;
  termsAndConditions: boolean;
  signature: string;
};

type HandleSubmitParams = {
  personalDetails: PersonalDetails;
  deviceDetails: DeviceDetails;
  repairDetails: RepairDetails;
  shippingDetails: ShippingDetails;
  pricingAgreement: boolean;
};

const StaperForm: React.FC = () => {
  const router = useRouter();

  const sigPad = useRef<SignatureCanvas>(null);
  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [personalDetails, setPersonalDetails] = useState({
    businessName: "",
    fullName: "",
    contactNo: "",
    emailAddress: "",
    returnShippingAddress: "",
  });
  const [deviceDetails, setDeviceDetails] = useState({
    deviceType: "",
    brand: "",

    imeiOrSerialNo: "",
    devicePassword: "",
  });
  const [repairDetails, setRepairDetails] = useState({
    issueDescription: "",
    previousRepairAttempts: "No",
    previousRepairAttemptsComments: "", // New field
    jumpQueueForFasterService: "No",
    additionalComments: "",
  });

  const [shippingDetails, setShippingDetails] = useState({
    requireReturnLabel: "No",
    pickupLabelDetails: "",
    returnLabelDetails: "",
    requirePickupLabel: "No",
    termsAndConditions: false,
    signature: "", // Assume this is captured from a signature input
  });
  const [pricingAgreement, setPricingAgreement] = useState(false);

  console.log("personalDetails", personalDetails);
  console.log("deviceDetails", deviceDetails);
  console.log("repairDetails", repairDetails);
  console.log("shippingDetails", shippingDetails);
  console.log("pricingAgreement", pricingAgreement);

  // Function to clear the signature
  const clearSignature = () => {
    sigPad.current?.clear();
    setShippingDetails({
      ...shippingDetails,
      signature: "",
    });
  };

  // Function to handle signature save
  const saveSignature = () => {
    if (sigPad.current) {
      const signatureData = sigPad.current.toDataURL("image/png"); // This is a base64 string
      setShippingDetails({
        ...shippingDetails,
        signature: signatureData,
      });
    }
  };

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Simple validation: check if the email format is invalid
    setIsInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const validateStep = () => {
    const newErrors: Errors = {};

    if (activeStep === 0) {
      // Only validate required fields for Step 0
      if (!personalDetails.fullName.trim())
        newErrors.fullName = "Full name is required";

      // Contact number validation: 10 digits only
      if (!/^\d{10}$/.test(personalDetails.contactNo))
        newErrors.contactNo = "Contact number must be 10 digits";

      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalDetails.emailAddress))
        newErrors.emailAddress = "Invalid email format";

      if (!personalDetails.returnShippingAddress.trim())
        newErrors.returnShippingAddress = "Return shipping address is required";
    }
    if (activeStep === 1) {
      // Validate Repair Details (Step 1)

      if (!repairDetails.issueDescription.trim())
        newErrors.issueDescription = "Description is required";
      if (repairDetails.previousRepairAttempts === undefined)
        newErrors.previousRepairAttempts =
          "Please indicate if there were previous attempts";

      if (
        repairDetails.previousRepairAttempts == "yes" &&
        !repairDetails.previousRepairAttemptsComments.trim()
      ) {
        newErrors.previousRepairAttemptsComments =
          "Explanation of previous repair attempts is required";
      }

      if (repairDetails.jumpQueueForFasterService === undefined)
        newErrors.jumpQueueForFasterService =
          "Please indicate if you want to jump the queue";

      // If Previous Repair Attempts is "Yes", the additional comments field is required
    }

    if (activeStep === 2) {
      // Shipping Details Validation
      if (
        shippingDetails.requireReturnLabel &&
        !shippingDetails.returnLabelDetails
      )
        newErrors.requireReturnLabel = "Return label details are required";

      // if (shippingDetails.requirePickupLabel && !shippingDetails.pickupLabelDetails)
      // newErrors.requirePickupLabel = "Pickup label details are required";

      if (!shippingDetails.termsAndConditions)
        newErrors.termsAndConditions =
          "Accepting terms and conditions is required";

      if (!shippingDetails.signature.trim())
        newErrors.signature = "Signature is required";
    }

    if (activeStep === 3) {
      if (!pricingAgreement)
        newErrors.pricingAgreement = "You must agree to the pricing agreement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
    }
  };

  // const handleNextStep = () => {
  //   if (activeStep < 3) {
  //     setActiveStep((prev) => prev + 1);
  //   }
  // };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      personalDetails,
      deviceDetails,
      repairDetails,
      shippingDetails,
      pricingAgreement,
    };
    console.log("payloadd", payload);
    try {
      const response = await axios.post(
        "https://labxbackend.labxrepair.com.au/api/repair_info",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response.json()", response.status);
      if (response.status === 200 || response.status == 201) {
        if (typeof window !== "undefined") {
          router.push("/mail-in-repair/thank-you");
        }
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  console.log(
    "repairDetails?.previousRepairAttempts",
    repairDetails?.previousRepairAttempts
  );
  return (
    <>
      <section className="steper-form-section-os">
        <div className="container gaurav-bg-trans ">
          <div className="my-5">
            <div
              className="max-w-5xl m-auto bg-[#FFFFFF] text-center text-black p-4 rounded-[20px]"
              style={{ boxShadow: "10px 15px 0px 3px #EDE574" }}
            >
              <span className="text-[16px]">
                Please Note: Our current turnaround time for regular service is
                4-8 weeks. Expedited service is 1-9 days. It is the customer’s
                responsibility to reach out for a quote ahead of time, if one is
                needed.
              </span>
            </div>
          </div>
          <div className="py-3 xl:py-6 2xl:py-6">
            <MainHeading Heading="LabX Mail-In Repair Submission Form" />
          </div>

          <div className="max-w-5xl mx-auto p-4">
            <div className="grid grid-cols-4 mb-8">
              {[
                "Personal Details",
                "Repair Details",
                "Shipping Details",
                "Terms & Pricing Agreement",
              ].map((step, index) => (
                <div key={index} className="flex items-center flex-col">
                  <div
                    className={`w-[3rem] h-[3rem] xl:w-20 xl:h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px]  ${
                      activeStep === index
                        ? "bg-yellow-500"
                        : activeStep > index
                        ? ""
                        : ""
                    }`}
                  >
                    {activeStep > index ? (
                      <Lottie
                        animationData={lottiearrow}
                        style={{ width: 50, height: 50 }}
                        className="lottie-icon"
                      />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <p
                    className={`font-medium lg:text-lg text-sm text-center m-0  ${
                      activeStep === index
                        ? "font-medium lg:text-lg text-sm text-center m-0 "
                        : ""
                    }`}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            {activeStep === 0 && (
              <>
                <div className="grid md:grid-cols-2 gap-[20px] py-2 lg:py-8 border-y-[1px] border-[#81818175]">
                  <div className="hidden md:block">
                    <div className="relative w-full h-full block pb-[61%]">
                      <Image
                        src={StaperForm1}
                        alt="Step Form Image"
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-[10px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="p-4">
                      <div className="flex flex-col xl:gap-4 lg:gap-3 gap-2 bg-black text-white">
                        <h4 className="lg:text-lg text-sm">Personal Details</h4>

                        <div className="grid grid-cols-2 gap-4 form-label">
                          {/* Business Name (Optional) */}
                          <div>
                            {/* <Input
                              type="text"
                              label="Business Name"
                              variant="faded"
                              className="w-full bg-black text-white border-white"
                              value={personalDetails.businessName}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  businessName: e.target.value,
                                })
                              }
                            /> */}
                            <TextField
                              required
                              label="Business Name"
                              name="business_name"
                              fullWidth
                              value={personalDetails.businessName}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  businessName: e.target.value,
                                })
                              }
                            />
                          </div>

                          {/* Full Name (Required) */}
                          <div>
                            {/* <Input
                              type="text"
                              label="Full Name*"
                              variant="faded"
                              className="w-full bg-black text-white border-white"
                              value={personalDetails.fullName}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  fullName: e.target.value,
                                })
                              }
                              required
                            /> */}
                            <TextField
                              required
                              label="Full Name"
                              name="full_name"
                              fullWidth
                              value={personalDetails.fullName}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  fullName: e.target.value,
                                })
                              }
                            />
                            {errors.fullName && (
                              <p className="text-[red] text-sm mb-0">
                                {errors.fullName}
                              </p>
                            )}
                          </div>

                          {/* Contact Number (Required) */}
                          <div>
                            {/* <Input
                              type="text"
                              label="Contact Number*"
                              variant="faded"
                              className="w-full bg-black text-white border-white"
                              value={personalDetails.contactNo}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  contactNo: e.target.value,
                                })
                              }
                              required
                            /> */}
                            <TextField
                              required
                              label="Contact Number"
                              name="contact_number"
                              fullWidth
                              value={personalDetails.contactNo}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  contactNo: e.target.value,
                                })
                              }
                            />
                            {errors.contactNo && (
                              <p className="text-[red] text-sm mb-0">
                                {errors.contactNo}
                              </p>
                            )}
                          </div>

                          {/* Email Address (Required) */}
                          <div>
                            {/* <Input
                              type="email"
                              label="Your Email*"
                              variant="faded"
                              value={personalDetails.emailAddress}
                              isInvalid={isInvalid}
                              className={`w-full bg-black text-white border-white ${
                                isInvalid ? "border-red-500" : ""
                              }`}
                              onChange={(e) => {
                                setPersonalDetails({
                                  ...personalDetails,
                                  emailAddress: e.target.value,
                                });
                                handleValidation(e);
                              }}
                              required
                            /> */}
                            <TextField
                              required
                              label="Your Email"
                              name="email"
                              fullWidth
                              value={personalDetails.emailAddress}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  emailAddress: e.target.value,
                                })
                              }
                              className={`w-full bg-black text-white border-white ${
                                isInvalid ? "border-red-500" : ""
                              }`}
                              type="email"
                            />
                            {errors.emailAddress && (
                              <p className="text-[red] text-sm mb-0">
                                {errors.emailAddress}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Shipping Address (Required) */}
                        <div className="w-full">
                          {/* <Input
                            label="Return Shipping Address*"
                            variant="faded"
                            className="bg-black text-white border-white"
                            value={personalDetails.returnShippingAddress}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setPersonalDetails({
                                ...personalDetails,
                                returnShippingAddress: e.target.value,
                              })
                            }
                            required
                          /> */}

                          <TextField
                            required
                            label="Return Shipping Address"
                            name="return_shipping_address"
                            fullWidth
                            value={personalDetails.returnShippingAddress}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setPersonalDetails({
                                ...personalDetails,
                                returnShippingAddress: e.target.value,
                              })
                            }
                          />
                          {errors.returnShippingAddress && (
                            <p className="text-[red] text-sm mb-0 w-full">
                              {errors.returnShippingAddress}
                            </p>
                          )}
                        </div>

                        {/* Device Details Section */}
                        <div>
                          <h4 className="lg:text-lg text-sm pb-[4px]">
                            Device Details
                          </h4>
                          <div className="grid grid-cols-2 gap-4 form-label">
                            {/* Device Type (Optional) */}
                            <div className="w-full">
                              {/* <input
                                type="text"
                                id="deviceType"
                                name="deviceType"
                                className="bg-black text-white border border-gray-400 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Enter Device Type"
                                value={deviceDetails.deviceType}
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    deviceType: e.target.value,
                                  })
                                }
                              /> */}
                              <TextField
                                required
                                type="text"
                                label="Enter Device Type"
                                name="deviceType"
                                fullWidth
                                value={deviceDetails.deviceType}
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    deviceType: e.target.value,
                                  })
                                }
                                // className="bg-black text-white border border-gray-400 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                              />
                            </div>

                            {/* Brand/Model (Optional) */}
                            <div className="w-full">
                              {/* <input
                                type="text"
                                id="brandModel"
                                name="brandModel"
                                className="bg-black text-white border border-gray-400 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Enter Brand/Model (e.g., Apple - iPhone 13 Pro)"
                                value={deviceDetails.brand}
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    brand: e.target.value,
                                  })
                                }
                              /> */}
                              <TextField
                                required
                                id="brandModel"
                                type="text"
                                label="Enter Brand/Model (e.g., Apple - iPhone 13 Pro)"
                                name="brandModel"
                                fullWidth
                                value={deviceDetails.brand}
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    brand: e.target.value,
                                  })
                                }
                              />
                            </div>

                            {/* IMEI/Serial No. (Optional) */}
                            <div>
                              {/* <Input
                                type="text"
                                label="IMEI/Serial No."
                                variant="faded"
                                className="w-full bg-black text-white border-white"
                                value={deviceDetails.imeiOrSerialNo}
                                onChange={(e) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    imeiOrSerialNo: e.target.value,
                                  })
                                }
                              /> */}
                              <TextField
                                required
                                type="text"
                                label="IMEI/Serial No."
                                name="imei_serial_no"
                                fullWidth
                                value={deviceDetails.imeiOrSerialNo}
                                onChange={(e) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    imeiOrSerialNo: e.target.value,
                                  })
                                }
                              />
                            </div>

                            {/* Device Password (Optional) */}
                            <div>
                              {/* <Input
                                type="text"
                                label="Device Password"
                                variant="faded"
                                className="w-full bg-black text-white border-white"
                                value={deviceDetails.devicePassword}
                                onChange={(e) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    devicePassword: e.target.value,
                                  })
                                }
                              /> */}

                              <TextField
                                required
                                type="text"
                                label="Device Password"
                                name="device_password"
                                fullWidth
                                value={deviceDetails?.devicePassword}
                                onChange={(e) =>
                                  setDeviceDetails({
                                    ...deviceDetails,
                                    devicePassword: e?.target?.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="flex justify-end mt-4">
                          {activeStep > 0 && (
                            <button
                              onClick={handlePrevStep}
                              className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                            >
                              Previous
                            </button>
                          )}
                          {activeStep < 3 ? (
                            <button
                              onClick={handleNextStep}
                              className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                            >
                              Next
                            </button>
                          ) : (
                            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                              <IoCheckmarkDoneOutline className="mr-2" />
                              Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 1 && (
              <>
                <div className="grid md:grid-cols-2 gap-[20px] py-2 lg:py-8 border-y-[1px] border-[#81818175]">
                  <div className="hidden md:block">
                    <div className="relative w-full h-full block pb-[61%]">
                      <Image
                        src={secondmail}
                        alt="Step Form Image"
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-[10px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="p-4">
                      <div className="flex flex-col gap-4 bg-black text-white">
                        {/* Description of Issue */}
                        <div className="steper-textarea-os">
                          <h4>Description of Issue*</h4>
                          {/* <Textarea
                            placeholder="Enter your message here"
                            variant="faded"
                            className="w-full mt-2 bg-black text-white border-white"
                            style={{
                              borderColor: "#ffffff",
                              borderRadius: "0.375rem",
                              padding: "0.5rem",
                            }}
                            value={repairDetails.issueDescription}
                            onChange={(e) =>
                              setRepairDetails({
                                ...repairDetails,
                                issueDescription: e.target.value,
                              })
                            }
                            required
                          /> */}

                          <Textarea
                            placeholder="Enter your message here"
                            minRows={5}
                            value={repairDetails.issueDescription}
                            onChange={(e) =>
                              setRepairDetails({
                                ...repairDetails,
                                issueDescription: e.target.value,
                              })
                            }
                            required
                          />
                          {errors.issueDescription && (
                            <p className="text-[red] text-sm mb-0">
                              {errors.issueDescription}
                            </p>
                          )}
                        </div>

                        {/* Previous Repair Attempts */}
                        <div>
                          <h4>Any Previous Repair Attempts?*</h4>
                          <Select
                            className="bg-black text-white gauav"
                            value={
                              repairDetails?.previousRepairAttempts || "No"
                            } // Default value "No"
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                              setRepairDetails({
                                ...repairDetails,
                                previousRepairAttempts: e.target.value, // Store as "Yes" or "No"
                              })
                            }
                          >
                            <SelectItem
                              key="no"
                              value="No"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              No
                            </SelectItem>
                            <SelectItem
                              key="yes"
                              value="Yes"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              Yes
                            </SelectItem>
                          </Select>

                          {repairDetails?.previousRepairAttempts == "yes" && (
                            <div className="steper-textarea-os mt-2">
                              {/* <Textarea
                                placeholder="Little explanation about previous attempts"
                                className="w-full bg-black text-white border-white"
                                style={{
                                  borderColor: "#ffffff",
                                  borderRadius: "0.375rem",
                                  fontSize: "0.875rem",
                                  padding: "0.5rem",
                                }}
                                value={
                                  repairDetails.previousRepairAttemptsComments
                                }
                                onChange={(e) =>
                                  setRepairDetails({
                                    ...repairDetails,
                                    previousRepairAttemptsComments:
                                      e.target.value,
                                  })
                                }
                              /> */}
                              <Textarea
                                placeholder="Little explanation about previous attempts"
                                minRows={5}
                                value={
                                  repairDetails.previousRepairAttemptsComments
                                }
                                onChange={(e) =>
                                  setRepairDetails({
                                    ...repairDetails,
                                    previousRepairAttemptsComments:
                                      e.target.value,
                                  })
                                }
                                required
                              />
                              {errors.previousRepairAttemptsComments && (
                                <p className="text-[red] text-sm mb-0">
                                  {errors.previousRepairAttemptsComments}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Jump the Queue */}
                        <div>
                          <h4 className="lg:text-lg text-sm lg:pb-3 pb-[5px]">
                            Want to Jump the Queue for Faster Service at an
                            Additional Cost?*
                          </h4>
                          <Select
                            className="bg-black text-white gauav"
                            value={
                              repairDetails.jumpQueueForFasterService || "No"
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                              setRepairDetails({
                                ...repairDetails,
                                jumpQueueForFasterService: e.target.value, // Store as "Yes" or "No"
                              })
                            }
                          >
                            <SelectItem
                              key="no"
                              value="No"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              No
                            </SelectItem>
                            <SelectItem
                              key="yes"
                              value="Yes"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              Yes
                            </SelectItem>
                          </Select>

                          {repairDetails.jumpQueueForFasterService == "yes" && (
                            <p className="text-yellow-500 text-sm mt-2">
                              $20 extra for this service.
                            </p>
                          )}
                        </div>

                        {/* Additional Comments (Optional) */}
                        <div className="steper-textarea-os">
                          <h4>Additional Comments </h4>
                          {/* <Textarea
                            placeholder="Any other comments or notes"
                            variant="faded"
                            className="w-full mt-2 bg-black text-white border-white"
                            style={{
                              borderColor: "#ffffff",
                              borderRadius: "0.375rem",
                              padding: "0.5rem",
                            }}
                            value={repairDetails.additionalComments || ""}
                            onChange={(e) =>
                              setRepairDetails({
                                ...repairDetails,
                                additionalComments: e.target.value,
                              })
                            }
                          /> */}
                          <Textarea
                            placeholder="Any other comments or notes"
                            minRows={5}
                            value={repairDetails.additionalComments || ""}
                            onChange={(e) =>
                              setRepairDetails({
                                ...repairDetails,
                                additionalComments: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="flex justify-between mt-4">
                          {activeStep > 0 && (
                            <button
                              onClick={handlePrevStep}
                              className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                            >
                              Previous
                            </button>
                          )}
                          {activeStep < 3 ? (
                            <button
                              onClick={handleNextStep}
                              className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                            >
                              Next
                            </button>
                          ) : (
                            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                              <IoCheckmarkDoneOutline className="mr-2" />
                              Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 2 && (
              <>
                <div className="grid md:grid-cols-2 gap-[20px] py-2 lg:py-8 border-y-[1px] border-[#81818175]">
                  <div className="hidden md:block">
                    <div className="relative w-full h-full block pb-[100%]">
                      <Image
                        src={StaperForm3}
                        alt="Step Form Image"
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-[10px]"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-col gap-4 bg-black text-white">
                      {/* Require Return Label */}
                      <div className="steper-textarea-os">
                        <h4>Do you require a return label?</h4>
                        <Select
                        className="bg-black text-white gauav"
                          value={shippingDetails.requireReturnLabel}
                          onChange={(e) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requireReturnLabel: e.target.value,
                            })
                          }
                        >
                          <SelectItem key="Yes" value="Yes">
                            Yes
                          </SelectItem>
                          <SelectItem key="No" value="No">
                            No
                          </SelectItem>
                        </Select>
                        {shippingDetails.requireReturnLabel === "Yes" && (
                          <>
                            {/* <Textarea
                              placeholder="Please provide details for the return label"
                              className="w-full bg-black text-white border-white mt-2"
                              value={shippingDetails.returnLabelDetails}
                              onChange={(e) =>
                                setShippingDetails({
                                  ...shippingDetails,
                                  returnLabelDetails: e.target.value,
                                })
                              }
                            /> */}
                            <Textarea
                              placeholder="Please provide details for the return label"
                              minRows={5}
                              value={shippingDetails.returnLabelDetails}
                              onChange={(e) =>
                                setShippingDetails({
                                  ...shippingDetails,
                                  returnLabelDetails: e.target.value,
                                })
                              }
                              required
                            />
                            {/* Validation Error */}
                            {errors.requireReturnLabel && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.requireReturnLabel}
                              </p>
                            )}
                          </>
                        )}
                      </div>

                      {/* Require Pickup Label */}
                      <div className="steper-textarea-os">
                        <h4>Do you require a pickup label from LabX?</h4>
                        <Select
                          label="Require Pickup Label*"
                          className="bg-black text-white gauav"
                          value={shippingDetails.requirePickupLabel}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requirePickupLabel: e.target.value,
                            })
                          }
                        >
                          <SelectItem key="Yes" value="Yes">
                            Yes
                          </SelectItem>
                          <SelectItem key="No" value="No">
                            No
                          </SelectItem>
                        </Select>
                        {shippingDetails.requirePickupLabel === "Yes" && (
                          <>
                            {/* <Textarea
                              placeholder="Please provide details for the pickup label"
                              className="w-full bg-black text-white border-white mt-2"
                              value={shippingDetails.pickupLabelDetails || ""}
                              onChange={(e) =>
                                setShippingDetails({
                                  ...shippingDetails,
                                  pickupLabelDetails: e.target.value,
                                })
                              }
                            /> */}
                            <Textarea
                              minRows={5}
                              placeholder="Please provide details for the pickup label"
                              value={shippingDetails.pickupLabelDetails || ""}
                              onChange={(e) =>
                                setShippingDetails({
                                  ...shippingDetails,
                                  pickupLabelDetails: e.target.value,
                                })
                              }
                              required
                            />
                            {/* Validation Error */}
                            {errors.requirePickupLabel && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.requirePickupLabel}
                              </p>
                            )}
                          </>
                        )}
                      </div>

                      {/* Terms and Conditions */}
                      <div className="border-b-[1px] border-[#6161617b] xl:py-3">
                        <h4 className="xl:mb-2 mb-[4px] text-[#EDE574]">
                          Terms and Conditions Acknowledgment *
                        </h4>
                        <div>
                          <Checkbox
                            isSelected={shippingDetails.termsAndConditions}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setShippingDetails({
                                ...shippingDetails,
                                termsAndConditions: e.target.checked,
                              })
                            }
                          >
                            <span className="lg:text-base text-sm text-white">
                              By checking this box, I confirm that I have read
                              and agree to the LabX
                              <Link
                                className="text-[#EDE574] border-[#EDE574] border-b-1"
                                href="/coming-soon"
                              >
                                {" "}
                                Terms and Conditions{" "}
                              </Link>
                              Privacy Policy, and Warranty Terms.{" "}
                            </span>
                          </Checkbox>
                          {errors.termsAndConditions && (
                            <p className="text-[red] text-sm mb-0">
                              {errors.termsAndConditions}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="my-5">
                        <div className="flex justify-between">
                          <span className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-t-[5px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]">
                            Draw Your Signature *
                          </span>
                          <button
                            className="text-md italic"
                            onClick={clearSignature}
                          >
                            clear
                          </button>
                        </div>
                        <SignatureCanvas
                          ref={sigPad}
                          penColor="black"
                          canvasProps={{
                            className:
                              "w-full h-[200px] bg-white border border-white rounded-md",
                          }}
                          onEnd={saveSignature} // Save signature on end
                        />
                        {errors.signature && (
                          <p className="text-[red] text-sm mb-0">
                            {errors.signature}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex justify-between mt-4">
                        {activeStep > 0 && (
                          <button onClick={handlePrevStep}>Previous</button>
                        )}
                        {activeStep < 3 ? (
                          <button onClick={handleNextStep}>Next</button>
                        ) : (
                          <button onClick={handleSubmit}>Submit</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 3 && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center border-y-[1px] border-[#81818175]">
                  <div className="relative w-full h-[300px] md:h-[550px]">
                    <Image
                      className="object-cover rounded-[30px]"
                      src={StaperForm4}
                      alt="Course Image"
                      fill
                    />
                  </div>
                  <div className="p-2 lg:p-2 bg-black text-white rounded-md">
                    <h2 className="text-3xl font-bold mb-4">
                      Pricing Agreement*
                    </h2>
                    <div className="flex items-start gap-4 text-yellow-400">
                      <Checkbox
                        className="pt-4 px-0 pb-0"
                        isSelected={pricingAgreement}
                        onChange={() => {
                          setPricingAgreement(!pricingAgreement);
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            pricingAgreement: !pricingAgreement
                              ? ""
                              : "You must agree to the pricing agreement",
                          }));
                        }}
                      ></Checkbox>

                      <p className="">
                        By submitting this form, I agree to proceed with repairs
                        or data recovery based on the prices displayed on the
                        LabX website. LabX will not provide a separate quote if
                        the repair can be completed within the listed prices. If
                        costs exceed the displayed prices, LabX will contact me
                        before proceeding. I am pre-approving repairs or
                        services at the prices shown on the website. If a price
                        is not listed on the website, LabX will provide a
                        separate quotation before proceeding.
                      </p>
                    </div>
                    {errors.pricingAgreement && (
                      <p className="text-[red] text-sm mb-0">
                        {errors.pricingAgreement}
                      </p>
                    )}

                    <div>
                      <button
                        onClick={handleSubmit}
                        disabled={!pricingAgreement}
                        className={`bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4] ${
                          !pricingAgreement
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default StaperForm;
