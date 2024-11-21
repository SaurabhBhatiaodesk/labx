'use client';

import { useState } from 'react';
import { TextField, Button, Box, Checkbox, FormControlLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Editor } from '@tinymce/tinymce-react';

interface FormProps {
  initialValues?: {
    pageName: string;
    pageEditor: string;
    seoPageTitle: string;
    pageKeywords: string;
    pageDescription: string;
    status: boolean;
  };
}

export default function Form({ initialValues }: FormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pageName: initialValues?.pageName || '',
    pageEditor: initialValues?.pageEditor || '',
    seoPageTitle: initialValues?.seoPageTitle || '',
    pageKeywords: initialValues?.pageKeywords || '',
    pageDescription: initialValues?.pageDescription || '',
    status: initialValues?.status || false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({ ...prev, pageEditor: content }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formdataaaaaa", formData);
    try {
      const response = await fetch("http://localhost:7000/api/admin/createpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Page created successfully");
        // Navigate back to the home page after successful creation
        router.push("/");
      } else {
        const errorResponse = await response.json();
        console.error("Failed to create data:", errorResponse.message);
      }
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };


  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 , color:'green'}}>
      <TextField
        required
        label="Page Name"
        name="pageName"
        value={formData.pageName}
        onChange={handleChange}
      />
      <label>Page Editor</label>
      <Editor
        apiKey="ae920f5hbpe9wq3gkz4x804iph6knqh5nk20dz6gi5l570vz" // Replace with your TinyMCE API key
        initialValue={formData.pageEditor}
        init={{
          height: 300,
          menubar: false,
          plugins: 'link image code',
          toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | code',
        }}
        onEditorChange={handleEditorChange}
      />
      <TextField
        required
        label="SEO Page Title"
        name="seoPageTitle"
        value={formData.seoPageTitle}
        onChange={handleChange}
      />
      <TextField
        required
        label="Page Keywords"
        name="pageKeywords"
        value={formData.pageKeywords}
        onChange={handleChange}
      />
      <TextField
        required
        label="Page Description"
        name="pageDescription"
        value={formData.pageDescription}
        onChange={handleChange}
      />
     <FormControlLabel
  control={
    <Checkbox
      name="status"
      checked={formData.status}
      onChange={handleCheckboxChange}
    />
  }
  label="Status"
/>

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}
