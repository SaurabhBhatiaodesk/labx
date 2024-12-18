"use client";
import "./mail-in-repair.css";
import Lottie from "lottie-react";
import lottiearrow from "../../../public/Images/jsonfile/scrolling.json";
import correct from "../../../public/Images/jsonfile/lottieflow-fill.json"
// import { Input, Textarea } from "@nextui-org/react";
import React, { useState, useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MainHeading from "@/components/ManinHeading/MainHeading";
import StaperForm1 from "../../../public/Images/StaperForm1.png";
import secondmail from "../../../public/Images/second mail.png";
import StaperForm3 from "../../../public/Images/StaperForm3.png";
import StaperForm4 from "../../../public/Images/StaperForm4.png";
import Textarea from "@mui/joy/Textarea";
import { TextField } from "@mui/material";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import "./mail-in-repair.css";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import { IoIosArrowRoundForward } from "react-icons/io";

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
  const formContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const sigPad = useRef<SignatureCanvas>(null);
  const selectOptions = [
    { key: "Yes", label: "Yes" },
    { key: "No", label: "No" },
  ];
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false); // State for loader
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
    requireReturnLabel: "I will arrange pickup myself",
    requirePickupLabel: "No,I will send the device myself",
    termsAndConditions: false,
    signature: "",
  });

  const [pricingAgreement, setPricingAgreement] = useState(false);

  useEffect(() => {
    // Check if there's saved signature in localStorage
    const savedSignature = localStorage.getItem("signatureData");
    if (savedSignature) {
      setShippingDetails((prevState) => ({
        ...prevState,
        signature: savedSignature,
      }));
    }
  }, []);

  const saveSignature = () => {
    if (sigPad?.current) {
      const signatureData = sigPad.current.toDataURL("image/png"); // Get the base64 image
      setShippingDetails((prevState) => ({
        ...prevState,
        signature: signatureData,
      }));

      // Save signature to localStorage
      localStorage.setItem("signatureData", signatureData);
    }
  };

  // Function to clear the signature
  const clearSignature = () => {
    sigPad.current?.clear();
    setShippingDetails((prevState) => ({
      ...prevState,
      signature: "",
    }));
    localStorage.removeItem("signatureData"); // Clear from localStorage as well
  };

  // const sigPad = useRef(null);

  useEffect(() => {
    // Load the signature from localStorage or shippingDetails on component mount
    const savedSignature = localStorage.getItem("signatureData");
    if (savedSignature && sigPad?.current) {
      sigPad.current.fromDataURL(savedSignature); // Load the signature into the canvas
    }
  }, [shippingDetails?.signature]); // Re-run when signature changes

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Simple validation: check if the email format is invalid
    setIsInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  useEffect(() => {
    setPersonalDetails({
      businessName: personalDetails?.businessName || "",
      fullName: personalDetails?.fullName || "",
      contactNo: personalDetails?.contactNo || "",
      emailAddress: personalDetails?.emailAddress || "",
      returnShippingAddress: personalDetails?.returnShippingAddress || "",
    });

    setDeviceDetails({
      deviceType: deviceDetails.deviceType || "",
      brand: deviceDetails.brand || "",
      imeiOrSerialNo: deviceDetails.imeiOrSerialNo || "",
      devicePassword: deviceDetails.devicePassword || "",
    });
    setRepairDetails({
      issueDescription: repairDetails.issueDescription || "",
      previousRepairAttempts: repairDetails.previousRepairAttempts || "",
      previousRepairAttemptsComments:
        repairDetails.previousRepairAttemptsComments || "", // New field
      jumpQueueForFasterService:
        repairDetails.jumpQueueForFasterService || "No",
      additionalComments: repairDetails.additionalComments || "",
    });

    setShippingDetails({
      requireReturnLabel:
        shippingDetails.requireReturnLabel || "I will arrange pickup myself",
      requirePickupLabel:
        shippingDetails.requirePickupLabel ||
        "No,I will send the device myself",
      termsAndConditions: shippingDetails.termsAndConditions || false,
      signature: shippingDetails.signature || "", // Assume this is captured
    });



    setPricingAgreement(false);
  }, []);

  const validateStep = () => {
    const newErrors: Errors = {};

    setPersonalDetails({
      businessName: personalDetails?.businessName || "",
      fullName: personalDetails?.fullName || "",
      contactNo: personalDetails?.contactNo || "",
      emailAddress: personalDetails?.emailAddress || "",
      returnShippingAddress: personalDetails?.returnShippingAddress || "",
    });
    setDeviceDetails({
      deviceType: deviceDetails.deviceType || "",
      brand: deviceDetails.brand || "",
      imeiOrSerialNo: deviceDetails.imeiOrSerialNo || "",
      devicePassword: deviceDetails.devicePassword || "",
    });
    setRepairDetails({
      issueDescription: repairDetails.issueDescription || "",
      previousRepairAttempts: repairDetails.previousRepairAttempts || "",
      previousRepairAttemptsComments:
        repairDetails.previousRepairAttemptsComments || "", // New field
      jumpQueueForFasterService:
        repairDetails.jumpQueueForFasterService || "No",
      additionalComments: repairDetails.additionalComments || "",
    });

    setShippingDetails({
      requireReturnLabel:
        shippingDetails.requireReturnLabel || "I will arrange pickup myself",
      requirePickupLabel: shippingDetails.requirePickupLabel || "No",
      termsAndConditions: shippingDetails.termsAndConditions || false,
      signature: shippingDetails.signature || "", // Assume this is captured
    });

    setPricingAgreement(false);

    if (activeStep === 0) {
      // Only validate required fields for Step 0
      if (
        !personalDetails?.fullName.trim() ||
        !personalDetails.hasOwnProperty("fullName")
      )
        newErrors.fullName = "Full name is required";

      // Contact number validation: 10 digits only
      if (!/^\d{10}$/.test(personalDetails?.contactNo))
        newErrors.contactNo = "Contact number must be 10 digits";

      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalDetails?.emailAddress))
        newErrors.emailAddress = "Invalid email format";

      if (!personalDetails?.returnShippingAddress.trim())
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
        repairDetails.previousRepairAttempts == "Yes" &&
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
      // Check for return label details
      // if (
      //   shippingDetails.requireReturnLabel === "Yes" &&
      //   !shippingDetails.returnLabelDetails.trim()
      // )
      //   newErrors.requireReturnLabel = "Return label details are required";

      // // Check for pickup label details
      // if (
      //   shippingDetails.requirePickupLabel === "Yes" &&
      //   !shippingDetails.pickupLabelDetails.trim()
      // )
      //   newErrors.requirePickupLabel = "Pickup label details are required";

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

  // const handleNextStep = () => {
  //   if (validateStep()) {
  //     setActiveStep((prev) => prev + 1);
  //   }
  // };

  const handleNextStep = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start", // Ensure the top of the form is aligned with the top of the viewport
        });
      }, 100);
    }
  };
  // const handlePrevStep = () => {
  //   if (activeStep > 0) {
  //     setActiveStep((prev) => prev - 1);
  //   }
  // };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start", // Ensure the top of the form is aligned with the top of the viewport
        });
      }, 100);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const payload = {
      personalDetails,
      deviceDetails,
      repairDetails,
      shippingDetails,
      pricingAgreement,
    };
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
      if (response.status === 200 || response.status == 201) {
        const { orderReferenceId } = response.data.data; // Assuming the orderReferenceId is returned in the response data

        if (typeof window !== "undefined") {
          localStorage.removeItem("formData");

          // Pass orderReferenceId as query parameter in the URL
          // router.push(`/mail-in-repair/thank-you?id=${orderReferenceId}`);
          const cleanOrderReferenceId = orderReferenceId.startsWith("#")
            ? orderReferenceId.slice(1)
            : orderReferenceId;
          router.push(`/mail-in-repair/thank-you?id=${cleanOrderReferenceId}`);
        }
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsLoading(false); // Hide loader after processing
    }
  };

  useEffect(() => {
    // You can use `localStorage` or the `useEffect` hook to persist form values
    const storedData = JSON.parse(localStorage.getItem("formData") || "{}");
    if (storedData) {
      setShippingDetails(storedData.shippingDetails || {});
      setRepairDetails(storedData.repairDetails || {});
      setPersonalDetails(storedData.personalDetails || {});
      setDeviceDetails(storedData.deviceDetails || {});
    }
  }, []);

  useEffect(() => {
    // When 'requireReturnLabel' is set to 'No', clear returnLabelDetails
    if (shippingDetails.requireReturnLabel === "No") {
      setShippingDetails((prevState) => ({
        ...prevState,
        returnLabelDetails: "", // Clear returnLabelDetails when 'No' is selected
      }));
    }

    // When 'requirePickupLabel' is set to 'No', clear pickupLabelDetails
    if (shippingDetails.requirePickupLabel === "No") {
      setShippingDetails((prevState) => ({
        ...prevState,
        pickupLabelDetails: "", // Clear pickupLabelDetails when 'No' is selected
      }));
    }

    // Save the updated state to localStorage
    const formData = {
      shippingDetails,
      repairDetails,
      personalDetails,
      deviceDetails,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
  }, [
    shippingDetails.requireReturnLabel, // Watch for changes in requireReturnLabel
    shippingDetails.requirePickupLabel, // Watch for changes in requirePickupLabel
  ]);

  return (
    <>
      {isLoading && (
       <div
       style={{
         position: "fixed",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%",
         backgroundColor: "rgba(0, 0, 0, 0.5)",
         zIndex: 9999,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
       }}
     >
    <Lottie
    animationData={lottiearrow}
    style={{ width: 50, height: 50 }}
    className="lottie-icon"
   />
     </div>
      )}

      <section className="steper-form-section-os">
        <div className="container gaurav-bg-trans ">
          <div className="my-5">
            <div
              className="max-w-5xl m-auto bg-[#FFFFFF] text-center text-black p-4 rounded-[20px]"
              style={{ boxShadow: "10px 15px 0px 3px #EDE574" }}
            >
              <span className="text-[16px]">

                Please Note: Our current turnaround time for regular service is
                3-4 weeks. Expedited service is 1-9 days. It is the customer’s
                responsibility to reach out for a quote ahead of time, if one is
                needed.
              </span>
            </div>
          </div>
          <div className="py-3 xl:py-6 2xl:py-6">
            <MainHeading Heading="LabX Mail-In Repair Submission Form" />
          </div>

          <div ref={formContainerRef} className="max-w-5xl mx-auto lg:p-4 " id="stapergk">
            <div className="grid grid-cols-4 mb-8  relative gaurav-line">
              {[
                "Personal Details",
                "Repair Details",
                "Shipping Details",
                "Terms & Pricing Agreement",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col  relative z-10"
                >
                  <div
                    className={`w-[3rem] h-[3rem] xl:w-20 xl:h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px] bg-black  ${
                      activeStep === index
                        ? "bg-yellow-500"
                        : activeStep > index
                        ? "bg-black"
                        : " relative z-10"
                    }`}
                  >
                    {activeStep > index ? (
                      <Lottie
                        animationData={correct}
                        style={{ width: 50, height: 50 }}
                        className="lottie-icon"
                      />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <p
                    className={`font-medium lg:text-lg text-[12px] leading-[14px] text-center m-0  ${
                      activeStep === index
                        ? "font-medium lg:text-lg text-[12px] leading-[14px]  text-center m-0 "
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
                    <div className="">
                      <div className="flex flex-col xl:gap-4 lg:gap-3 gap-4 bg-black text-white">
                        <h4 className="lg:text-lg text-sm">Personal Details</h4>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 form-label">
                          {/* Business Name (Optional) */}
                          <div>
                            <TextField
                              label="Business Name(If any)"
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
                            <TextField
                              required
                              label="Contact Number"
                              name="contact_number"
                              type="number"
                              fullWidth
                              value={personalDetails.contactNo}
                              onChange={(e) => {
                                // Allow only up to 10 digits
                                if (e.target.value.length <= 10) {
                                  setPersonalDetails({
                                    ...personalDetails,
                                    contactNo: e.target.value,
                                  });
                                }
                              }}
                              inputProps={{ maxLength: 10 }} // Additional safeguard to restrict input length
                            />

                            {errors.contactNo && (
                              <p className="text-[red] text-sm mb-0">
                                {errors.contactNo}
                              </p>
                            )}
                          </div>

                          {/* Email Address (Required) */}
                          <div>
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
                          <h4 className="lg:text-lg text-sm pb-[10px]">
                            Device Details
                          </h4>
                          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 form-label">
                            {/* Device Type (Optional) */}
                            <div className="w-full">
                              <TextField
                                type="text"
                                label="Enter Device Type(eg:Mobile Phone/Tablet/laptop) "
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
                              <TextField
                                id="brandModel"
                                type="text"
                                label="Enter Brand/Model (e.g:Apple-iPhone 13 Pro)"
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
                              <TextField
                                type="text"
                                label="IMEI/Serial No.(If known)"
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
                              <TextField
                                type="text"
                                label="Device Password(Must be correct)"
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
                              className="btn hidden lg:block"
                            >
                              Previous
                            </button>
                          )}
                          {activeStep < 3 ? (
                            <button
                              onClick={handleNextStep}
                              className="btn flex items-center gap-2"
                            >
                              Next
                              <IoIosArrowRoundForward />
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
                <div className=" sdev_bghide grid md:grid-cols-2 gap-[20px] py-2 lg:py-8 border-y-[1px] border-[#81818175]">
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
                    <div className="">
                      <div className="flex flex-col gap-4 bg-black text-white">
                        {/* Description of Issue */}
                        <div className="steper-textarea-os ">
                          <Textarea
                            placeholder="Please provide a detailed information of the damage(The more information you include, the better chances of successfully repairing the device).*"
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
                          <p className="text-base leading-5 mb-2">
                            Any Previous Repair Attempts?*
                          </p>
                          <Select 
                            defaultSelectedKeys={
                              repairDetails.previousRepairAttempts != "Yes"
                                ? ["No"]
                                : ["Yes"]
                            }
                            className="bg-black text-white gauav "
                            value={
                              repairDetails?.previousRepairAttempts != "Yes"
                                ? "No"
                                : "Yes"
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                              setRepairDetails({
                                ...repairDetails,
                                previousRepairAttempts: e.target.value,
                              })
                            }
                          >
                            {selectOptions.map((animal) => {
                              return (
                                <SelectItem key={animal.key}>
                                  {animal.label}
                                </SelectItem>
                              );
                            })}
                          </Select>

                          {repairDetails?.previousRepairAttempts == "Yes" && (
                            <div className="steper-textarea-os mt-2">
                              <p className="text-yellow-500 text-sm mt-2 italic">
                                A $66 service fee will be required to release
                                the device, regardless of whether it is fixed or
                                not.
                              </p>
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
                          <p className=" text-base leading-5 mb-2">
                            Do you require Priority Repair Service?*
                          </p>
                          <Select
                            className="bg-black text-white gauav"
                            defaultSelectedKeys={
                              repairDetails.jumpQueueForFasterService != "Yes"
                                ? ["No"]
                                : ["Yes"]
                            }
                            value={
                              repairDetails.jumpQueueForFasterService != "Yes"
                                ? "No"
                                : "Yes"
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                              setRepairDetails({
                                ...repairDetails,
                                jumpQueueForFasterService: e.target.value,
                              })
                            }
                          >
                            {selectOptions.map((animal) => {
                              return (
                                <SelectItem key={animal.key}>
                                  {animal.label}
                                </SelectItem>
                              );
                            })}
                          </Select>

                          {repairDetails.jumpQueueForFasterService == "Yes" && (
                            <p className="text-yellow-500 text-sm mt-2 mb-0 italic">
                              A minimum fee of $100 (or higher) will be charged
                              for priority service.
                            </p>
                          )}
                        </div>

                        {/* Additional Comments (Optional) */}
                        <div className="steper-textarea-os">
                          <p className=" text-base leading-5 mb-2">
                            Additional Comments
                          </p>
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
                          />
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="flex justify-between mt-4">
                          {activeStep > 0 && (
                            <button
                              onClick={handlePrevStep}
                              className="btn"
                            >
                              Previous
                            </button>
                          )}
                          {activeStep < 3 ? (
                            <button
                              onClick={handleNextStep}
                              className="btn  flex items-center gap-2"
                            >
                              Next
                              <IoIosArrowRoundForward />
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
                  <div className="">
                    <div className="flex flex-col gap-4 bg-black text-white">
                      {/* Require Pickup Label */}
                      <div className="steper-textarea-os space-y-4">
                        <p className="text-base leading-5 mb-2">
                          Would you like LABX to arrange a pickup from your
                          location?
                        </p>
                        <Select
                          defaultSelectedKeys={
                            shippingDetails.requirePickupLabel ==
                            "Yes,Please arrange pickup from my location"
                              ? ["Yes,Please arrange pickup from my location"]
                              : ["No,I will send the device myself"]
                          }
                          className="bg-black text-white gauav"
                          value={
                            shippingDetails.requireReturnLabel ||
                            "No,I will send the device myself"
                          }
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requirePickupLabel: e.target.value,
                            })
                          }
                        >
                          <SelectItem
                            key="No,I will send the device myself"
                            value="No,I will send the device myself"
                          >
                            No, I will send the device myself
                          </SelectItem>
                          <SelectItem
                            key="Yes,Please arrange pickup from my location"
                            value="Yes,Please arrange pickup from my location"
                          >
                            Yes, please arrange pickup from my location
                          </SelectItem>
                        </Select>

                        {shippingDetails.requirePickupLabel ==
                          "Yes,Please arrange pickup from my location" && (
                          <p className="text-yellow-500 text-sm mt-2 mb-0 italic">
                            A one-way shipping fee of $15-$20 will be added to
                            your invoice, regardless of whether the device is
                            repaired or not. Connote label will be sent to your
                            email.
                          </p>
                        )}

                        {shippingDetails.requirePickupLabel ===
                          "No,I will send the device myself" && (
                          <p className="text-yellow-500 text-sm mt-2 mb-0 italic">
                            No, I will send the device myself.
                          </p>
                        )}
                      </div>

                      {/* Require Return Label */}
                      <div className="steper-textarea-os space-y-4">
                        <p className="text-base leading-5 mb-2">
                          How would LABX return your device?
                        </p>
                        <Select
                          defaultSelectedKeys={
                            shippingDetails.requireReturnLabel ==
                            "Please ship the device back to me"
                              ? ["Please ship the device back to me"]
                              : ["I will arrange pickup myself"]
                          }
                          className="bg-black text-white gauav"
                          value={
                            shippingDetails.requireReturnLabel ||
                            "I will arrange pickup myself"
                          }
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requireReturnLabel: e.target.value,
                            })
                          }
                        >
                          <SelectItem key="I will arrange pickup myself">
                            I will arrange pickup myself
                          </SelectItem>
                          <SelectItem key="Please ship the device back to me">
                            Please ship the device back to me
                          </SelectItem>
                        </Select>

                        {shippingDetails.requireReturnLabel ===
                          "Please ship the device back to me" && (
                          <p className="text-yellow-500 text-sm mt-2 mb-0 italic">
                            Additional shipping fee of $15-$20 will be added to
                            your invoice.
                          </p>
                        )}
                      </div>

                      {/* Terms and Conditions */}
                      <div className="border-b-[1px] border-[#6161617b] xl:py-3">
                        <h4 className=" lg:text-xl text-lg mb-3 text-[#EDE574]">
                          Terms and Conditions Acknowledgment *
                        </h4>
                        <div>
                          <input
                            type="checkbox"
                            className="check__box"
                            checked={
                              shippingDetails.termsAndConditions == true
                                ? true
                                : false
                            } // Retain state when revisited
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setShippingDetails({
                                ...shippingDetails,
                                termsAndConditions: e.target.checked, // Update state based on checkbox value
                              })
                            }
                          />
                          <span className="lg:text-base text-sm text-white ml-2 ">
                            By checking this box, I confirm that I have read and
                            agree to the LabX
                            <Link
                              className="text-[#EDE574]  "
                              href="/Terms_and_Conditions"
                            >
                              {" "}
                              Terms and Conditions{" "}
                            </Link>
                            <Link
                              className="text-[#EDE574]  "
                              href="/Shipping_Policy"
                            >
                              Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                              className="text-[#EDE574]  "
                              href="/Warranty_and_Terms"
                            >
                              Warranty Terms
                            </Link>
                            .{" "}
                          </span>
                          {errors.termsAndConditions && (
                            <p className="text-[red] text-sm mb-0">
                              {errors.termsAndConditions}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="my-2">
                        <div className="flex justify-between gap-2">
                          <span className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-t-[5px]  hover:from-[#EDE574] hover:to-[#E1F5C4] w-full">
                            Draw Your Signature *
                          </span>
                          <button
                            className=" italic text-primary  border-[--F1-btn-color] bg-[red] px-2 rounded-t-[5px] text-sm"
                            onClick={clearSignature}
                          >
                            Clear
                          </button>
                        </div>
                        {/* <SignatureCanvas
                          ref={sigPad}
                          penColor="black"
                          canvasProps={{
                            className:
                              "w-full h-[200px] bg-white border border-white rounded-md",
                          }}
                          onEnd={saveSignature} // Save signature on end
                          backgroundColor={
                            shippingDetails?.signature ? "red" : "#fff"
                          }
                        /> */}

                        <div className="signature-canvas-row-os">
                          <div className="signature-canvas-col-os">
                            <SignatureCanvas
                              ref={sigPad}
                              penColor="black"
                              canvasProps={{
                                className:
                                  "w-full h-[200px] bg-white border border-white",
                              }}
                              onEnd={saveSignature} // Save signature when drawing ends
                              backgroundColor={
                                shippingDetails?.signature ? "white" : "#fff"
                              }
                            />
                          </div>

                          {shippingDetails?.signature && (
                            <div className="signature-canvas-col-os">
                              <Image
                                src={shippingDetails.signature}
                                alt="Saved Signature"
                                width={200}
                                height={400}
                              />
                              {/* <button onClick={clearSignature}>
                                Clear Signature
                              </button> */}
                            </div>
                          )}
                        </div>

                        {errors.signature && (
                            <p className="text-[red] text-sm mb-0">
                              {errors.signature}
                            </p>
                          )}

                        {/* {shippingDetails.signature === "" && (
                          <p className="text-[red] text-sm mb-0">
                            Signature is required
                          </p>
                        )} */}
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex justify-between mt-4">
                        {activeStep > 0 && (
                          <button
                            className="btn"
                            onClick={handlePrevStep}
                          >
                            Previous
                          </button>
                        )}
                        {activeStep < 3 ? (
                          <button
                            onClick={handleNextStep}
                            className="btn flex items-center gap-2"
                          >
                            Next
                            <IoIosArrowRoundForward />
                          </button>
                        ) : (
                          <button
                            onClick={handleSubmit}
                            disabled={isLoading} // Disable button while loading
                            className={`btn flex items-center gap-2 ${
                              isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                          >
                            {isLoading ? (
                              <span className="loader" /> // You can use a loader component or spinner
                            ) : (
                              <>
                                {isLoading ? "Submitting..." : "Submit"}
                                <IoIosArrowRoundForward />
                              </>
                            )}
                          </button>
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
                      <input
                        type="checkbox"
                        className="check__boxs"
                        checked={pricingAgreement == true ? true : false}
                        onChange={() => {
                          setPricingAgreement(!pricingAgreement);
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            pricingAgreement: !pricingAgreement
                              ? ""
                              : "You must agree to the pricing agreement",
                          }));
                        }}
                      />

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

                    <div className="flex justify-between mt-4">
                      <button
                        className="btn "
                        onClick={handlePrevStep}
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!pricingAgreement || isLoading} // Disable when loading
                        className={`btn ${
                          !pricingAgreement || isLoading
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {isLoading ? "Processing..." : "Submit"}
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
