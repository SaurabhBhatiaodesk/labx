"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base"; // For the message input
import "./Form.css";

const FormCode: React.FC = () => {
  const [formData, setFormData] = useState({
    business_name: "",
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

  const [isSubmitEnabled, setIsSubmitEnabled] = useState<any>(false);

  console.log('formDataaaaa',formData)
  // Handle changes for all form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name!]: value,
    }));

    // Validate the field
    validateField(name!, value as string);
  };

  // Handle course selection change
  const handleCourseChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      course_name: value,
    }));

    // Validate course field
    validateField("course_name", value);
  };

  // Validate the fields
  const validateField = (name: string, value: string) => {
    let errors = { ...formErrors };
    switch (name) {
      case "email_address":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email = emailPattern.test(value)
          ? ""
          : "Please enter a valid email address";
        break;
      case "contact_no":
        const phonePattern = /^[0-9]{10}$/;
        errors.phoneNumber = phonePattern.test(value)
          ? ""
          : "Please enter a valid 10-digit phone number";
        break;
      case "course_name":
        errors.course_name = value ? "" : "Please select a course";
        break;
      default:
        break;
    }
    setFormErrors(errors);

    // Enable submit only when there are no errors and all fields are filled
    setIsSubmitEnabled(
      !formErrors.email &&
        !formErrors.phoneNumber &&
        formData.email_address &&
        formData.contact_no &&
        formData.course_name
    );
  };

  // Handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If the form is valid, send the data to the backend
    if (isSubmitEnabled) {
      const requestData = {
        business_name: formData.business_name || undefined,
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
        console.log(await response.data,"xxxxxxxxxxx");
        if (response) {
          alert("Form submitted successfully!");
          setFormData({
            business_name: "",
            email_address: "",
            contact_no: "",
            course_name: "",
            training_message: "",
          }); // Reset form after successful submission
        } else {
          alert("Error submitting the form.");
        }
      } catch (error) {
        console.error("Error submitting the form", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  return (
    <div className="p-4 steper-form-section-os">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 bg-black text-white">
          <div className="grid grid-cols-2 gap-4 form-label">
            {/* Business Name Input */}
            <TextField
              label="Business Name"
              name="business_name"
              fullWidth
              variant="outlined"
              value={formData.business_name}
              onChange={handleChange}
            />

            {/* Email Input with validation */}
            <TextField
              label="Your Email"
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
              label="Phone Number"
              name="contact_no"
              fullWidth
              variant="outlined"
              value={formData.contact_no}
              onChange={handleChange}
              error={!!formErrors.phoneNumber}
              helperText={formErrors.phoneNumber}
            />

            {/* Course Selection */}
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select Your Course</InputLabel>
              <Select
                label="Select Your Course"
                name="course_name"
                value={formData.course_name}
                onChange={handleCourseChange}
                sx={{
                  color: "white", // Set the text color of the selected option to white
                  "& .MuiSelect-icon": {
                    color: "white", // Set the dropdown icon color to white
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // Set the border color of the select input
                  },
                }}
                error={!!formErrors.course_name} // Show error if course is not selected
              >
                <MenuItem value="" sx={{ color: "black" }}>
                  -- Select a Course --
                </MenuItem>
                <MenuItem value="video_editing" sx={{ color: "black" }}>
                  Screen Refurbishment
                </MenuItem>
                <MenuItem value="graphic_design" sx={{ color: "black" }}>
                  Mail-In-Repair
                </MenuItem>
                <MenuItem value="web_design" sx={{ color: "black" }}>
                  Web Designing
                </MenuItem>
                <MenuItem value="web_development" sx={{ color: "black" }}>
                  Training
                </MenuItem>
                <MenuItem value="php" sx={{ color: "black" }}>
                  B2B Repair
                </MenuItem>
                <MenuItem value="laravel" sx={{ color: "black" }}>
                  Data Recovery
                </MenuItem>
                <MenuItem value="wordpress" sx={{ color: "black" }}>
                  Parts Store
                </MenuItem>
                <MenuItem value="c++" sx={{ color: "black" }}>
                  Repair Solutions
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Training Message */}
          <TextareaAutosize
            className="border-[1.5px]"
            minRows={4}
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
            disabled={!isSubmitEnabled} // Disable the submit button if the form is invalid
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCode;
