"use client";
import { Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import "./Form.css";

const FormCode: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Simple validation: check if the email format is invalid
    setIsInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col gap-4  bg-black text-white">
          <div className="grid grid-cols-2 gap-4 form-label">
            <Input
              type="text"
              label="Your Name"
              variant="bordered"
              className="w-full"
              required
            />
            <Input
              type="email"
              label="Your Email"
              variant="bordered"
              value={email}
              isInvalid={isInvalid}
              errorMessage={isInvalid ? "Please enter a valid email" : ""}
              className={`w-full ${isInvalid ? "border-red-500" : ""}`}
              onChange={handleValidation}
              required
            />
            <Input
              type="text"
              label="Your Phone Number"
              variant="bordered"
              className="w-full"
              required
            />
            <Input
              type="text"
              label="Select Your Course"
              variant="bordered"
              className="w-full"
              required
            />
          </div>
          <Textarea
          label="Your Message"
          placeholder="Enter your message here"
          variant="bordered"
          className="w-full mt-4 custom-textarea" // Add a custom class if needed
          style={{
            borderColor: "#333",
            borderRadius: "0.375rem",
            padding: "0.5rem",
            backgroundColor: "black",
            color: "white",
          }}
          required
        />
        </div>
        <div className="py-4">
          <input
            className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-[14px] 2xl:text-lg xl:text-base uppercase text-black py-3 2xl:py-3 xl:py-[10px] px-[18px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]"
            type="submit"
          />
        </div>
      </div>
    </>
  );
};

export default FormCode;
