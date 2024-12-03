"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
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
import "./contactus.css"
import contactusimage from "../../../public/Images/contactusimage.png"

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
   First_name: "",
    email_address: "",
    contact_no: "",
    course_name: "",
    training_message: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    course_name: "",
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

  // Handle course selection change
  const handleCourseChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      course_name: value,
    }));

    // Log the updated course name
    console.log("Selected Course:", value);

    // Validate course field
    validateField("course_name", value);
  };

  const validateField = (name: string, value: string) => {
    let errors = { ...formErrors };
    switch (name) {
      case "email_address":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email =
          value === ""
            ? "Email is required"
            : emailPattern.test(value)
            ? ""
            : "Please enter a valid email address";
        break;
      case "contact_no":
        const phonePattern = /^[0-9]{10}$/;
        errors.phoneNumber =
          value === ""
            ? "Phone number is required"
            : phonePattern.test(value)
            ? ""
            : "Please enter a valid 10-digit phone number";
        break;
      case "course_name":
        errors.course_name = value ? "" : "Please select a course";
        break;
      default:
        break;
    }
    setFormErrors(errors); // Update errors state after validation
  };

  const validateAllFields = () => {
    let errors = { email: "", phoneNumber: "", course_name: "" }; // Reset errors first

    // Manually validate each field
    validateField("email_address", formData.email_address);
    validateField("contact_no", formData.contact_no);
    validateField("course_name", formData.course_name);

    // Check the state of the form data before returning errors
    console.log("All Errors After Validation:", errors);

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Early validation: Check if any required field is empty
    const errors: { email: string; phoneNumber: string; course_name: string } =
      {
        email: "",
        phoneNumber: "",
        course_name: "",
      };

    // Check if the required fields are empty and set errors immediately
    if (formData.email_address === "") {
      errors.email = "Email is required";
    }

    if (formData.contact_no === "") {
      errors.phoneNumber = "Phone number is required";
    }

    if (formData.course_name === "") {
      errors.course_name = "Please select a course";
    }

    // If there are errors, prevent the form submission and display validation messages
    if (errors.email || errors.phoneNumber || errors.course_name) {
      setFormErrors(errors);
      return; // Prevent API call if any required field is empty
    }

    // Perform the usual field validation after the initial check
    validateAllFields();

    // If validation fails after the field check, stop the submission
    if (formErrors.email || formErrors.phoneNumber || formErrors.course_name) {
      return;
    }

    // If everything is validated, proceed with the form submission
    const requestData = {
      First_name: formData.First_name || undefined,
      email_address: formData.email_address,
      contact_no: formData.contact_no,
      course_name: formData.course_name,
      training_message: formData.training_message || undefined,
    };

    try {
      const response = await axios.post(
        "https://labxbackend.labxrepair.com.au/api/create/training",
        requestData
      );
      console.log(await response.data, "Form submitted successfully");
      if (response) {
        alert("Form submitted successfully!");
        setFormData({
          First_name: "",
          email_address: "",
          contact_no: "",
          course_name: "",
          training_message: "",
        });
      } else {
        alert("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
        <section
      className="py-4 lg:py-[30px]"
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
    <div className="container">
    <div className="grid grid-cols-[3fr_5fr]   " >
    <div className="w-full"
      style={{
        backgroundImage: "url('/images/contactusimage.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius:"20px 0 10px 20px"
      }}>
  {/* <Image className="w-full h-full object-cover" src={contactusimage} alt="Contact Us Image" /> */}
</div>

    <div>
    <div className="p-4 lg:p-10 steper-form-section-os bg-black ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 bg-black text-white">
          <div className="grid grid-cols-2 gap-4 form-label">
            {/* Business Name Input */}
            <TextField
              label="First Name"
              name="First_name"
              fullWidth
              variant="outlined"
              value={formData.First_name}
              onChange={handleChange}
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
              label="Last Name"
              // name=""Last_Name"
              fullWidth
              variant="outlined"
              value={formData.First_name}
              onChange={handleChange}
            />


             <TextField
              label="Your Email *"
              name="email_address"
              fullWidth
              variant="outlined"
              value={formData.email_address}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />

            {/* Phone Number Input with validation */}
            <TextField
              label="Phone Number *"
              name="contact_no"
              fullWidth
              variant="outlined"
              value={formData.contact_no}
              onChange={handleChange}
              error={!!formErrors.phoneNumber}
              helperText={formErrors.phoneNumber}
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
          <h3>Write Your Enquiry</h3>
          <TextareaAutosize
            className="border-[1.5px]"
            minRows={6}
            placeholder="Enter your message here"
            value={formData.training_message}
            onChange={handleChange}
            name="training_message"
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
              background: "linear-gradient(to right, #E1F5C4, #EDE574)",
              color: "black",
              textTransform: "uppercase",
              fontSize: "14px",
              padding: "12px 18px",
              borderRadius: "50px",
              "&:hover": {
                background: "linear-gradient(to right, #EDE574, #E1F5C4)",
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
