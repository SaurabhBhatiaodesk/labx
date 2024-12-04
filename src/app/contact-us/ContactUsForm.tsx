"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import "./contactus.css";
import contactusimage from "../../../public/Images/contactusimage.png";

// icons
import localtion from "../../../public/Images/localtion.svg";
import contactustime from "../../../public/Images/icons/contactustime.svg";
import callcontactus from "../../../public/Images/icons/callcontactus.svg";
import contactusmail from "../../../public/Images/icons/contactusmail.svg";

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    contact_no: "",
    enquiry_message: "",
  });

  const [formErrors, setFormErrors] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    contact_no: "",
    enquiry_message: "",
  });

  // Handle changes for all form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name!]: value,
    }));

    // Validate the field as the user types
    validateField(name!, value as string);
  };

  const validateField = (name: string, value: string) => {
    let errors = { ...formErrors };
    switch (name) {
      case "first_name":
        errors.first_name = value ? "" : "First Name is required";
        break;
      case "last_name":
        errors.last_name = value ? "" : "Last Name is required";
        break;
      case "email_address":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email_address =
          value === ""
            ? "Email is required"
            : emailPattern.test(value)
            ? ""
            : "Please enter a valid email address";
        break;
      case "contact_no":
        const phonePattern = /^[0-9]{10}$/;
        errors.contact_no =
          value === ""
            ? "Phone number is required"
            : phonePattern.test(value)
            ? ""
            : "Please enter a valid 10-digit phone number";
        break;

      default:
        break;
    }
    setFormErrors(errors); // Update errors state after validation
  };

  const validateAllFields = () => {
    let errors = { ...formErrors };
    validateField("first_name", formData.first_name);
    validateField("last_name", formData.last_name);
    validateField("email_address", formData.email_address);
    validateField("contact_no", formData.contact_no);

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateAllFields(); // Validate all fields
    setFormErrors(errors); // Update form errors state

    // If there are any errors in the required fields, prevent form submission
    if (
      errors.first_name ||
      errors.last_name ||
      errors.email_address ||
      errors.contact_no
    ) {

      alert("Please fill all the required fields")
      return; // Prevent form submission
    }
    const requestData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email_address,
      contact_no: formData.contact_no,
      enquiry_message: formData.enquiry_message,
    };

    try {
      const response = await axios.post(
        "http://localhost:7000/api/create/contact-us",
        requestData
      );
      if (response.status === 201) {
        alert("Form submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email_address: "",
          contact_no: "",
          enquiry_message: "",
        });
      } else {
        alert("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred while submitting the form.");
    }
  };
console.log("formDataaaa",formData)
  return (
    <>
      <section
        className="py-4 lg:py-[30px] "
        style={{
          backgroundImage: "url('/images/Home/back-banner.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="grid md:grid-cols-[3fr_5fr] grid-cols-1    ">
            <div
              className="w-full flex flex-col items-center justify-center hello"
              style={{
                backgroundImage: "url('/images/contactusimage.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // borderRadius: "20px 0 10px 20px",
              }}
            >
              <div className="relative w-full h-[100%]">
                <div className="lg:absolute w-full lg:top-[20%] xl:right-[80px] lg:right-[40px] lg:transform lg:translate-x-[10px] lg:translate-y-[10px]">
                  <div className="flex gap-3 flex-col justify-center p-4 lg:p-6 bg-white text-black rounded-3xl">
                    {/* Address */}
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0">
                        <Image
                          className="w-[50px] h-[50px] object-contain" // Ensure size is same
                          src={localtion}
                          alt="Location Icon"
                        />
                      </span>
                      <Link
                        href="https://www.google.com/maps/place/122+Queen+St,+St+Marys+NSW+2760,+Australia"
                        passHref
                      >
                        <p className="m-0 text-black lg:font-semibold font-medium text-xl cursor-pointer">
                          122 Queen St, St Marys NSW 2760, Australia
                        </p>
                      </Link>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0">
                        <Image
                          className="w-[50px] h-[50px] object-contain" // Ensure size is same
                          src={callcontactus}
                          alt="Phone Icon"
                        />
                      </span>
                      <Link href="tel:+61455777077" passHref>
                        <p className="m-0 text-black lg:font-semibold font-medium text-xl cursor-pointer">
                          +61455777077
                        </p>
                      </Link>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0">
                        <Image
                          className="w-[50px] h-[50px] object-contain" // Ensure size is same
                          src={contactusmail}
                          alt="Email Icon"
                        />
                      </span>
                      <Link href="mailto:bharat@labxrepair.com.au" passHref>
                        <p className="m-0 text-black lg:font-semibold font-medium text-xl cursor-pointer">
                          bharat@labxrepair.com.au
                        </p>
                      </Link>
                    </div>
                    {/* Operating Hours */}
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0">
                        <Image
                          className="w-[50px] h-[50px] object-contain" // Ensure size is same
                          src={contactustime}
                          alt="Clock Icon"
                        />
                      </span>
                      <p className="m-0 text-black lg:font-semibold font-medium text-xl cursor-pointer">
                        Monday-Friday: 9am - 6pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Image className="w-full h-full object-cover" src={contactusimage} alt="Contact Us Image" /> */}
            </div>

            <div>
              <div className="p-4 lg:p-10 steper-form-section-os bg-black ">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4 bg-black text-white">
                    <div className="grid grid-cols-2 gap-4 form-label">
                      {/* Business Name Input */}
                      <TextField
                        label="First Name*"
                        name="first_name"
                        fullWidth
                        variant="outlined"
                        value={formData.first_name}
                        onChange={handleChange}
                        error={!!formErrors.first_name}
                        helperText={formErrors.first_name}
                      />

                      {/* Email Input with validation */}
                      {/* <TextField
              label="Your Email *"
              name="email_address"
              fullWidth
              variant="outlined"
              value={formData.email_address}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            /> */}
                      <TextField
                        label="Last Name*"
                        name="last_name"
                        fullWidth
                        variant="outlined"
                        value={formData.last_name}
                        onChange={handleChange}
                        error={!!formErrors.last_name}
                        helperText={formErrors.last_name}
                      />

                      <TextField
                        label="Your Email *"
                        name="email_address"
                        fullWidth
                        variant="outlined"
                        value={formData.email_address}
                        onChange={handleChange}
                        error={!!formErrors.email_address}
                        helperText={formErrors.email_address}
                      />

                      {/* Phone Number Input with validation */}
                      <TextField
                        label="Phone Number *"
                        name="contact_no"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.contact_no}
                        onChange={handleChange}
                        error={!!formErrors.contact_no}
                        helperText={formErrors.contact_no}
                      />

                      {/* Course Selection */}
                      {/* <FormControl fullWidth variant="outlined">
              <InputLabel>Select Your Course *</InputLabel>
              <Select
                label="Select Your Course *"
                name="course_name"
                value={formData.course_name} // This is binding the course name to the Select value
                onChange={handleCourseChange}
                error={!!formErrors.course_name} // Show error if course is not selected

                sx={{
                  color: "white", // Set the text color of the selected option to white
                  "& .MuiSelect-icon": {
                    color: "white", // Set the dropdown icon color to white
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // Set the border color of the select input
                  },
                }}
              >
                <MenuItem value="">-- Select a Course --</MenuItem>
                <MenuItem value="video_editing">Screen Refurbishment</MenuItem>
                <MenuItem value="graphic_design">Mail-In-Repair</MenuItem>
                <MenuItem value="web_design">Web Designing</MenuItem>
                <MenuItem value="web_development">Training</MenuItem>
                <MenuItem value="php">B2B Repair</MenuItem>
                <MenuItem value="laravel">Data Recovery</MenuItem>
                <MenuItem value="wordpress">Parts Store</MenuItem>
                <MenuItem value="c++">Repair Solutions</MenuItem>
              </Select>

              {formErrors.course_name && (
                <p style={{ color: "#d32f2f", fontSize: "12px" }}>
                  {formErrors.course_name}
                </p>
              )}
            </FormControl> */}
                    </div>

                    {/* Training Message */}
                    <div>
                      <h3 className="text-[20px] lg:text-[26px]">
                        Write Your Enquiry
                      </h3>
                      <TextareaAutosize
                        className="border-[1.5px]"
                        minRows={6}
                        placeholder="Enter your message here"
                        value={formData.enquiry_message}
                        onChange={handleChange}
                        name="enquiry_message"
                        style={{
                          width: "100%",
                          padding: "10px",
                          marginTop: "10px",
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "8px",
                          borderColor: "white",
                          fontSize: "17px",
                          textTransform: "capitalize",
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="py-4">
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(to right, #E1F5C4, #EDE574)",
                        color: "black",
                        textTransform: "uppercase",
                        fontSize: "14px",
                        padding: "12px 18px",
                        borderRadius: "50px",
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #EDE574, #E1F5C4)",
                        },
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsForm;
