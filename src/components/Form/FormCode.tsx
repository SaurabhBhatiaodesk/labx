
"use client"
import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { TextareaAutosize } from "@mui/base"; // For the message input
import "./Form.css";

const FormCode: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [course, setCourse] = useState(""); // New state for course selection

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  // Update event type here to SelectChangeEvent<string>
  const handleCourseChange = (e: SelectChangeEvent<string>) => {
    setCourse(e.target.value); // Update course selection
  };

  return (
    <div className="p-4 steper-form-section-os">
      <div className="flex flex-col gap-4 bg-black text-white">
        <div className="grid grid-cols-2 gap-4 form-label">
          <TextField label="Business Name" name="business_name" fullWidth variant="outlined" />
          <TextField
            label="Your Email"
            name="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={handleValidation}
            error={isInvalid}
            helperText={isInvalid ? "Please enter a valid email" : ""}
          />
          <TextField label="Phone Number" name="phone_number" fullWidth variant="outlined" />

          {/* Convert to Select component for course selection */}
          <FormControl fullWidth variant="outlined">
            <InputLabel>Select Your Course</InputLabel>
            <Select
              label="Select Your Course"
              value={course}
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
            >
              <MenuItem value="" sx={{ color: "black" }}>-- Select a Course --</MenuItem>
              <MenuItem value="video_editing" sx={{ color: "black" }}>Screen Refurbishment
              </MenuItem>
              <MenuItem value="graphic_design" sx={{ color: "black" }}>Mail-In-Repair</MenuItem>
              <MenuItem value="web_design" sx={{ color: "black" }}>Web Designing</MenuItem>
              <MenuItem value="web_development" sx={{ color: "black" }}>Training</MenuItem>
              <MenuItem value="php" sx={{ color: "black" }}>B2B Repair</MenuItem>
              <MenuItem value="laravel" sx={{ color: "black" }}>Data Recovery</MenuItem>
              <MenuItem value="wordpress" sx={{ color: "black" }}>Parts Store</MenuItem>
              <MenuItem value="c++" sx={{ color: "black" }}>Repair Solutions</MenuItem>

            </Select>
          </FormControl>
        </div>

        <TextareaAutosize
          className="border-[1.5px]"
          minRows={4}
          placeholder="Enter your message here"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "8px",
            borderColor: "white",
          }}
        />
      </div>

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
    </div>
  );
};

export default FormCode;
