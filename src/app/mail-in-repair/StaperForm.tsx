"use client";
import { Input, Textarea } from "@nextui-org/react";
import React, { useState, useRef  } from "react";
import SignatureCanvas from "react-signature-canvas";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MainHeading from "@/components/ManinHeading/MainHeading";
import StaperForm1 from "../../../public/Images/StaperForm1.png";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import "./mail-in-repair.css";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
const StaperForm: React.FC = () => {
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
    model: "",
    imeiOrSerialNo: "",
    devicePassword: "",
  });
  const [repairDetails, setRepairDetails] = useState({
    deviceType: "",
    issueDescription: "",
    previousRepairAttempts: false,
    jumpQueueForFasterService: false,
    additionalComments: "",
  });
  const [shippingDetails, setShippingDetails] = useState({
    requireReturnLabel: false,
    requirePickupLabel: false,
    termsAndConditions: false,
    signature: "", // Assume this is captured from a signature input
  });
  const [pricingAgreement, setPricingAgreement] = useState(false);



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

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };
  console.log("personalDetails", personalDetails);
  console.log("deviceDetails", deviceDetails);
  console.log("repairDetails", repairDetails);
  console.log("shippingDetails", shippingDetails);
  console.log("pricingAgreement", pricingAgreement);
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
        "http://localhost:7000/api/repair_info",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response.json()", response.status);
      if (response.status === 200 || response.status ==201) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  return (
    <>
      <section>
        <div className="container">
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
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px] ${
                      activeStep === index
                        ? "bg-yellow-500"
                        : activeStep > index
                        ? "bg-green-300"
                        : ""
                    }`}
                  >
                    {activeStep > index ? (
                      <IoCheckmarkDoneOutline />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <p
                    className={`mt-2 ${
                      activeStep === index ? "font-bold" : ""
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
                <div className="grid grid-cols-2">
                  <div>
                    <Image className="" src={StaperForm1} alt="" />
                  </div>
                  <div>
                    <div className="p-4">
                      <div className="flex flex-col gap-4 bg-black text-white">
                        <div className="grid grid-cols-2 gap-4 form-label">
                          <Input
                            type="text"
                            label="Business Name"
                            variant="bordered"
                            className="w-full bg-black text-white border-white"
                            value={personalDetails.businessName}
                            onChange={(e) =>
                              setPersonalDetails({
                                ...personalDetails,
                                businessName: e.target.value,
                              })
                            }
                            required
                          />
                          <Input
                            type="text"
                            label="Full Name"
                            variant="bordered"
                            className="w-full bg-black text-white border-white"
                            value={personalDetails.fullName}
                            onChange={(e) =>
                              setPersonalDetails({
                                ...personalDetails,
                                fullName: e.target.value,
                              })
                            }
                            required
                          />
                          <Input
                            type="text"
                            label="Contact Number"
                            variant="bordered"
                            className="w-full bg-black text-white border-white"
                            value={personalDetails.contactNo}
                            onChange={(e) =>
                              setPersonalDetails({
                                ...personalDetails,
                                contactNo: e.target.value,
                              })
                            }
                            required
                          />
                          <Input
                            type="email"
                            label="Your Email"
                            variant="bordered"
                            value={personalDetails.emailAddress}
                            isInvalid={isInvalid}
                            errorMessage={
                              isInvalid ? "Please enter a valid email" : ""
                            }
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
                          />
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 bg-black">
                          <Input
                            label="Return Shipping Address"
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
                            placeholder="Enter your return shipping address"
                            required
                          />
                        </div>

                        <div>
                          <h4>Device Details</h4>
                          <div className="grid grid-cols-2 gap-4 form-label">
                            <Select
                              label="Device Type"
                              className="bg-black text-white"
                              value={deviceDetails.deviceType}
                              onChange={(
                                e: React.ChangeEvent<HTMLSelectElement>
                              ) =>
                                setDeviceDetails({
                                  ...deviceDetails,
                                  deviceType: e.target.value,
                                })
                              }
                            >
                              {/* Replace 'animals' with actual device types */}
                              {[
                                { key: "smartphone", label: "Smartphone" },
                                { key: "tablet", label: "Tablet" },
                                { key: "laptop", label: "Laptop" },
                              ].map((device) => (
                                <SelectItem
                                  key={device.key}
                                  value={device.label}
                                  className="bg-black text-white hover:bg-gray-800"
                                >
                                  {device.label}
                                </SelectItem>
                              ))}
                            </Select>

                            <Select
                              label="Brand and Model"
                              className="bg-black text-white"
                              value={
                                deviceDetails.brand && deviceDetails.model
                                  ? `${deviceDetails.brand} - ${deviceDetails.model}`
                                  : ""
                              }
                              onChange={(
                                e: React.ChangeEvent<HTMLSelectElement>
                              ) => {
                                const [selectedBrand, selectedModel] =
                                  e.target.value.split(" - ");
                                setDeviceDetails({
                                  ...deviceDetails,
                                  brand: selectedBrand,
                                  model: selectedModel,
                                });
                              }}
                            >
                              {[
                                { brand: "Apple", model: "iPhone 13 Pro" },
                                { brand: "Apple", model: "iPhone 12" },
                                { brand: "Samsung", model: "Galaxy S21" },
                                { brand: "Samsung", model: "Galaxy Note 20" },
                              ].map((item) => (
                                <SelectItem
                                  key={`${item.brand} - ${item.model}`}
                                  value={`${item.brand} - ${item.model}`}
                                  className="bg-black text-white hover:bg-gray-800"
                                >
                                  {item.brand} - {item.model}
                                </SelectItem>
                              ))}
                            </Select>

                            <Input
                              type="text"
                              label="IMEI/Serial No."
                              variant="bordered"
                              className="w-full bg-black text-white border-white"
                              value={deviceDetails.imeiOrSerialNo}
                              onChange={(e) =>
                                setDeviceDetails({
                                  ...deviceDetails,
                                  imeiOrSerialNo: e.target.value,
                                })
                              }
                              required
                            />
                            <Input
                              type="text"
                              label="Device Password"
                              variant="bordered"
                              className="w-full bg-black text-white border-white"
                              value={deviceDetails.devicePassword}
                              onChange={(e) =>
                                setDeviceDetails({
                                  ...deviceDetails,
                                  devicePassword: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="py-4">
                        <button
                          onClick={handleNextStep}
                          className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeStep === 1 && (
              <>
                <div className="grid grid-cols-2">
                  <div>
                    <Image className="" src={StaperForm1} alt="" />
                  </div>
                  <div>
                    <div className="p-4">
                      <div className="flex flex-col gap-4 bg-black text-white">
                        <select
                          value={repairDetails.deviceType}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setRepairDetails({
                              ...repairDetails,
                              deviceType: e.target.value,
                            })
                          }
                        >
                          {animals.map((animal) => (
                            <option key={animal.key} value={animal.label}>
                              {animal.label}
                            </option>
                          ))}
                        </select>

                        <div>
                          <h4>Description of Issue</h4>
                          <Textarea
                            label="Your Message"
                            placeholder="Enter your message here"
                            variant="bordered"
                            className="w-full mt-4 bg-black text-white border-white"
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
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4 form-label"></div>

                        <div>
                          <h4>Any Previous Repair Attempts?</h4>
                          <Select
                            label="Previous Repair Attempts"
                            className="bg-black text-white"
                            value={
                              repairDetails.previousRepairAttempts
                                ? "Yes"
                                : "No"
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                              setRepairDetails({
                                ...repairDetails,
                                previousRepairAttempts:
                                  e.target.value === "Yes",
                              })
                            }
                          >
                            <SelectItem
                              key="yes"
                              value="Yes"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              Yes
                            </SelectItem>
                            <SelectItem
                              key="no"
                              value="No"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              No
                            </SelectItem>
                          </Select>
                        </div>

                        <div>
                          <h4>
                            Want to Jump the Queue for Faster Service at an
                            Additional Cost?
                          </h4>
                          <Select
                            label="Jump the Queue"
                            className="bg-black text-white"
                            value={
                              repairDetails.jumpQueueForFasterService
                                ? "Yes"
                                : "No"
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                              setRepairDetails({
                                ...repairDetails,
                                jumpQueueForFasterService:
                                  e.target.value === "Yes",
                              })
                            }
                          >
                            <SelectItem
                              key="yes"
                              value="Yes"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              Yes
                            </SelectItem>
                            <SelectItem
                              key="no"
                              value="No"
                              className="bg-black text-white hover:bg-gray-800"
                            >
                              No
                            </SelectItem>
                          </Select>
                        </div>

                        <div>
                          <h4>Additional Comments</h4>
                          <Textarea
                            label="Additional Comments"
                            placeholder="Enter any additional comments here"
                            variant="bordered"
                            className="w-full mt-4 bg-black text-white border-white"
                            style={{
                              borderColor: "#ffffff",
                              borderRadius: "0.375rem",
                              padding: "0.5rem",
                            }}
                            value={repairDetails.additionalComments}
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
                        <button
                          onClick={handleNextStep}
                          className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 2 && (
              <>
                <div className="grid grid-cols-2">
                  <div>
                    <Image className="" src={StaperForm1} alt="" />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-col gap-4 bg-black text-white">
                      <div>
                        <h4>Do you require a return label?</h4>
                        <Select
                          label="Require Return Label"
                          className="bg-black text-white"
                          value={
                            shippingDetails.requireReturnLabel ? "Yes" : "No"
                          }
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requireReturnLabel: e.target.value === "Yes",
                            })
                          }
                        >
                          <SelectItem
                            key="yes"
                            value="Yes"
                            className="bg-black text-white hover:bg-gray-800"
                          >
                            Yes
                          </SelectItem>
                          <SelectItem
                            key="no"
                            value="No"
                            className="bg-black text-white hover:bg-gray-800"
                          >
                            No
                          </SelectItem>
                        </Select>
                      </div>

                      <div>
                        <h4>Do you require a pickup label from LabX?</h4>
                        <Select
                          label="Require Pickup Label"
                          className="bg-black text-white"
                          value={
                            shippingDetails.requirePickupLabel ? "Yes" : "No"
                          }
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requirePickupLabel: e.target.value === "Yes",
                            })
                          }
                        >
                          <SelectItem
                            key="yes"
                            value="Yes"
                            className="bg-black text-white hover:bg-gray-800"
                          >
                            Yes
                          </SelectItem>
                          <SelectItem
                            key="no"
                            value="No"
                            className="bg-black text-white hover:bg-gray-800"
                          >
                            No
                          </SelectItem>
                        </Select>
                      </div>

                      <div className="border-b-[1px] border-[#6161617b] xl:py-3">
                        <h4 className="xl:mb-2 mb-[4px] text-[#EDE574]">
                          Terms and Conditions Acknowledgment
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
                            <span className="text-base">
                              By checking this box, I confirm that I have read
                              and agree to the LabX{" "}
                              <Link
                                className="text-[#EDE574] border-[#EDE574] border-b-1"
                                href="/terms-and-conditions"
                              >
                                Terms and Conditions
                              </Link>
                              , Privacy Policy, and Warranty Terms.
                            </span>
                          </Checkbox>
                        </div>
                      </div>

                      <div className="my-5">
        <div className="flex justify-between">
          <span className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-t-[5px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]">
            Draw Your Signature
          </span>
          <button className="text-md italic" onClick={clearSignature}>
            clear
          </button>
        </div>
        <SignatureCanvas
          ref={sigPad}
          penColor="black"
          canvasProps={{
            className: "w-full h-[200px] bg-white border border-white rounded-md",
          }}
          onEnd={saveSignature} // Save signature on end
        />
      </div>
                    </div>
                    <div className="py-4">
                      <button
                        onClick={handleNextStep}
                        className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 3 && (
              <>
                {/* Render Step 4 components */}
                <h2 className="text-lg font-bold mb-2">
                  Terms & Pricing Agreement
                </h2>
                <p className="text-gray-600">This is the final step</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrevStep}
                    className="bg-gray-200 py-2 px-4 rounded-md"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
                  >
                    <IoCheckmarkDoneOutline className="mr-2" />
                    Complete
                  </button>
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
