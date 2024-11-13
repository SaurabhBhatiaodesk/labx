"use client";
import { Input, Textarea } from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import React, { useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MainHeading from "@/components/ManinHeading/MainHeading";
import StaperForm1 from "../../../public/Images/StaperForm1.png";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";
import "./mail-in-repair.css";

const StaperForm: React.FC = () => {
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

          {/* Multi-stepper */}
          <div className="max-w-5xl mx-auto p-4">
            <div className="grid grid-cols-4 mb-8">
              {/* Step 1 */}
              <div className="flex items-center flex-col">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px] ${
                    activeStep === 0
                      ? "bg-yellow-500"
                      : activeStep > 0
                      ? "bg-green-300"
                      : ""
                  }`}
                >
                  {activeStep > 0 ? <IoCheckmarkDoneOutline /> : 1}
                </div>
                <p className={`mt-2 ${activeStep === 0 ? "font-bold" : ""}`}>
                  Personal Details
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-center flex-col">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px] ${
                    activeStep === 1
                      ? "bg-yellow-500"
                      : activeStep > 1
                      ? "bg-green-300"
                      : ""
                  }`}
                >
                  {activeStep > 1 ? <IoCheckmarkDoneOutline /> : 2}
                </div>
                <p className={`mt-2 ${activeStep === 1 ? "font-bold" : ""}`}>
                  Repair Details
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-center flex-col">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px] ${
                    activeStep === 2
                      ? "bg-yellow-500"
                      : activeStep > 2
                      ? "bg-green-300"
                      : ""
                  }`}
                >
                  {activeStep > 2 ? <IoCheckmarkDoneOutline /> : 3}
                </div>
                <p className={`mt-2 ${activeStep === 2 ? "font-bold" : ""}`}>
                  Shipping Details
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex items-center flex-col">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px] ${
                    activeStep === 3
                      ? "bg-yellow-500"
                      : activeStep > 3
                      ? "bg-green-300"
                      : ""
                  }`}
                >
                  {activeStep === 3 ? <IoCheckmarkDoneOutline /> : 4}
                </div>
                <p className={`mt-2 ${activeStep === 3 ? "font-bold" : ""}`}>
                  Terms & Pricing Agreement
                </p>
              </div>
            </div>

            {/* Display different forms for each step */}
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
                            required
                          />
                          <Input
                            type="text"
                            label="Full Name"
                            variant="bordered"
                            className="w-full bg-black text-white border-white"
                            required
                          />
                          <Input
                            type="text"
                            label="Contact Number"
                            variant="bordered"
                            className="w-full bg-black text-white border-white"
                            required
                          />
                          <Input
                            type="email"
                            label="Your Email"
                            variant="bordered"
                            value={email}
                            isInvalid={isInvalid}
                            errorMessage={
                              isInvalid ? "Please enter a valid email" : ""
                            }
                            className={`w-full bg-black text-white border-white ${
                              isInvalid ? "border-red-500" : ""
                            }`}
                            onChange={handleValidation}
                            required
                          />
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 bg-black">
                          <Select
                            label="Select an animal"
                            className="bg-black text-white " // Add `!` to override Tailwind's default background
                          >
                            {animals.map((animal) => (
                              <SelectItem
                                key={animal.key}
                                className="bg-black text-white  hover:bg-gray-800"
                              >
                                {animal.label}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>

                        <div>
                          <h4>Device Details</h4>
                          <div className="grid grid-cols-2 gap-4 form-label">
                            <Select
                              label="Select an animal"
                              className="bg-black text-white " // Add `!` to override Tailwind's default background
                            >
                              {animals.map((animal) => (
                                <SelectItem
                                  key={animal.key}
                                  className="bg-black text-white  hover:bg-gray-800"
                                >
                                  {animal.label}
                                </SelectItem>
                              ))}
                            </Select>
                            <Select
                              label="Select an animal"
                              className="bg-black text-white " // Add `!` to override Tailwind's default background
                            >
                              {animals.map((animal) => (
                                <SelectItem
                                  key={animal.key}
                                  className="bg-black text-white  hover:bg-gray-800"
                                >
                                  {animal.label}
                                </SelectItem>
                              ))}
                            </Select>
                            <Input
                              type="text"
                              label="Contact Number"
                              variant="bordered"
                              className="w-full bg-black text-white border-white"
                              required
                            />
                            <Input
                              type="email"
                              label="Your Email"
                              variant="bordered"
                              value={email}
                              isInvalid={isInvalid}
                              errorMessage={
                                isInvalid ? "Please enter a valid email" : ""
                              }
                              className={`w-full bg-black text-white border-white ${
                                isInvalid ? "border-red-500" : ""
                              }`}
                              onChange={handleValidation}
                              required
                            />
                          </div>
                        </div>

                        {/* <Textarea
                          label="Your Message"
                          placeholder="Enter your message here"
                          variant="bordered"
                          className="w-full mt-4 bg-black text-white border-white"
                          style={{
                            borderColor: "#ffffff",
                            borderRadius: "0.375rem",
                            padding: "0.5rem",
                          }}
                          required
                        /> */}
                      </div>
                      <div className="py-4">
                        <input
                          className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                          type="submit"
                        />
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
                      <Select
                            label="Select an animal"
                            className="bg-black text-white " // Add `!` to override Tailwind's default background
                          >
                            {animals.map((animal) => (
                              <SelectItem
                                key={animal.key}
                                className="bg-black text-white  hover:bg-gray-800"
                              >
                                {animal.label}
                              </SelectItem>
                            ))}
                          </Select>
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
                          required
                        />
                        <div className="grid grid-cols-2 gap-4 form-label">

                        </div>
                    <div className="space-y-2">
                      <h4>Any Previous Repair Attempts? </h4>
                   
                          <Select
                            label="Select an animal"
                            className="bg-black text-white " // Add `!` to override Tailwind's default background
                          >
                            {animals.map((animal) => (
                              <SelectItem
                                key={animal.key}
                                className="bg-black text-white  hover:bg-gray-800"
                              >
                                {animal.label}
                              </SelectItem>
                            ))}
                          </Select>
                          </div>
                          <div className="space-y-2">
                      <h4>Want to Jump the Queue for Faster Service at an Additional Cost? </h4>
                   
                          <Select
                            label="Select an animal"
                            className="bg-black text-white " // Add `!` to override Tailwind's default background
                          >
                            {animals.map((animal) => (
                              <SelectItem
                                key={animal.key}
                                className="bg-black text-white  hover:bg-gray-800"
                              >
                                {animal.label}
                              </SelectItem>
                            ))}
                          </Select>
                          </div>
                     <div>
                      <h4>Additional Comments</h4>
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
                          required
                        />
                     </div>
                      

                        {/* <div>
                          <h4>Device Details</h4>
                          <div className="grid grid-cols-2 gap-4 form-label">
                            <Select
                              label="Select an animal"
                              className="bg-black text-white " // Add `!` to override Tailwind's default background
                            >
                              {animals.map((animal) => (
                                <SelectItem
                                  key={animal.key}
                                  className="bg-black text-white  hover:bg-gray-800"
                                >
                                  {animal.label}
                                </SelectItem>
                              ))}
                            </Select>
                            <Select
                              label="Select an animal"
                              className="bg-black text-white " // Add `!` to override Tailwind's default background
                            >
                              {animals.map((animal) => (
                                <SelectItem
                                  key={animal.key}
                                  className="bg-black text-white  hover:bg-gray-800"
                                >
                                  {animal.label}
                                </SelectItem>
                              ))}
                            </Select>
                            <Input
                              type="text"
                              label="Contact Number"
                              variant="bordered"
                              className="w-full bg-black text-white border-white"
                              required
                            />
                            <Input
                              type="email"
                              label="Your Email"
                              variant="bordered"
                              value={email}
                              isInvalid={isInvalid}
                              errorMessage={
                                isInvalid ? "Please enter a valid email" : ""
                              }
                              className={`w-full bg-black text-white border-white ${
                                isInvalid ? "border-red-500" : ""
                              }`}
                              onChange={handleValidation}
                              required
                            />
                          </div>
                        </div> */}

                        {/* <Textarea
                          label="Your Message"
                          placeholder="Enter your message here"
                          variant="bordered"
                          className="w-full mt-4 bg-black text-white border-white"
                          style={{
                            borderColor: "#ffffff",
                            borderRadius: "0.375rem",
                            padding: "0.5rem",
                          }}
                          required
                        /> */}
                      </div>
                      <div className="py-4">
                        <input
                          className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
                          type="submit"
                        />
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
                <div className="space-y-3">
                <div className="space-y-2">
                      <h4>Want to Jump the Queue for Faster Service at an Additional Cost? </h4>
                   
                          <Select
                            label="Select an animal"
                            className="bg-black text-white " // Add `!` to override Tailwind's default background
                          >
                            {animals.map((animal) => (
                              <SelectItem
                                key={animal.key}
                                className="bg-black text-white  hover:bg-gray-800"
                              >
                                {animal.label}
                              </SelectItem>
                            ))}
                          </Select>
                          </div>

                          <div className="space-y-2">
                      <h4>Want to Jump the Queue for Faster Service at an Additional Cost? </h4>
                   
                          <Select
                            label="Select an animal"
                            className="bg-black text-white " // Add `!` to override Tailwind's default background
                          >
                            {animals.map((animal) => (
                              <SelectItem
                                key={animal.key}
                                className="bg-black text-white  hover:bg-gray-800"
                              >
                                {animal.label}
                              </SelectItem>
                            ))}
                          </Select>
                          </div>





                          <div className="py-4">
                            <h4 className="">Terms and Conditions Acknowledgment
                            </h4>
                            <div className="mt-3">
                            <Checkbox defaultSelected></Checkbox>
                            <span className="text-base">By checking this box, I confirm that I have read and agree to the LabX  Terms and Conditions
                            Privacy Policy, and Warranty Terms. </span>
                            </div>
                          </div>


                         <div>
                          <div className="flex justify-between"> 
                            <span className="p-3 bg-[#EDE574]  text-black rounded-t-[5px]">Draw Your Signature</span>
                            <button >Clear</button>


                          </div>
                          <div>
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
                          required
                        />
                          </div>
                         </div>
                

                </div>
              </div>
              </>
            )}
            {activeStep === 3 && (
              <>
                <h2 className="text-lg font-bold mb-2">
                  Terms & Pricing Agreement
                </h2>
                <p className="text-gray-600">This is the final step</p>
              </>
            )}

            <div className="flex justify-between mt-4">
              {activeStep > 0 && (
                <button
                  onClick={handlePrevStep}
                  className="bg-gray-200 hover: py-2 px-4 rounded-md"
                >
                  Previous
                </button>
              )}
              {activeStep < 3 ? (
                <button
                  onClick={handleNextStep}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
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
      </section>
    </>
  );
};

export default StaperForm;
