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
        className="w-full mt-4"
       style={{
          borderColor: '#333', // Same border color as input
          borderRadius: '0.375rem', // Matches the rounded corners
          padding: '0.5rem', // Matches input padding
          backgroundColor: 'black', // Background color to match inputs
          color: 'white', // Text color to match inputs
        }}
        required
      />

     
    </div>
<div className="py-4">
<input type="submit" /></div>  
   
    </div>
    </>
  );
};

export default FormCode;
