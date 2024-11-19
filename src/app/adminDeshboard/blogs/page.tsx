"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import ReactQuill styles

// Dynamically import ReactQuill for client-side rendering only
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

type BlogData = {
  heading: string;
  content: string;
  pageTitle: string;
  pageDescription: string;
  pageKeyword: string;
  status: boolean;
};

const BlogPage: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogData>({
    heading: '',
    content: '',
    pageTitle: '',
    pageDescription: '',
    pageKeyword: '',
    status: false,
  });

  // Quill editor toolbar configuration with custom image handler
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link', 'blockquote'],
      [{ align: [] }],
      ['image'], // Add image button
    ],
  };

  // Handle image upload (Not needed anymore since no image field is being sent)
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files && input.files[0];
      if (file) {
        // Handle file upload (you can send the file to your server or S3)
        const formData = new FormData();
        formData.append('image', file);

        // Upload image to your server (replace the URL below with your API endpoint)
        const response = await fetch('http://localhost:7000/api/admin/blog', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          const imageUrl = result.imageUrl;  // The image URL returned from your server

          // Insert the image into the editor
          const quill = window.Quill;  // Access Quill from the window object
          const range = quill.getSelection();

          // Check if range is not null before inserting the image
          if (range) {
            quill.insertEmbed(range.index, 'image', imageUrl);
          } else {
            console.error('Selection range is null');
          }
        } else {
          console.error('Image upload failed');
        }
      }
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (content: string) => {
    setBlogData((prev) => ({
      ...prev,
      content,
    }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogData((prev) => ({
      ...prev,
      status: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare form data (Excluding image)
    const data = {
      heading: blogData.heading,
      content: blogData.content,
      pageTitle: blogData.pageTitle,
      pageDescription: blogData.pageDescription,
      pageKeyword: blogData.pageKeyword,
      status: blogData.status,
    };

    // Send data to the backend (no image data sent)
    try {
      const response = await fetch('http://localhost:7000/api/admin/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Blog created successfully:', result);
        alert('Blog created successfully!');
      } else {
        const error = await response.json();
        console.error('Error creating blog:', error);
        alert('Error creating blog');
      }
    } catch (error) {
      console.error('Request failed', error);
      alert('Request failed');
    }
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="heading" className="block text-lg font-semibold text-green-500 mb-2">Heading</label>
          <input
            type="text"
            id="heading"
            name="heading"
            className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-indigo-200 text-black"
            value={blogData.heading}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="block text-lg font-semibold text-green-500 mb-2">Content</label>
          <ReactQuill
            value={blogData.content}
            onChange={handleEditorChange}
            modules={modules}
            theme="snow"
            className="border rounded-lg"
            style={{ color: 'black' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pageTitle" className="block text-lg font-semibold text-green-500 mb-2">Page Title</label>
          <input
            type="text"
            id="pageTitle"
            name="pageTitle"
            className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-indigo-200 text-black"
            value={blogData.pageTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pageDescription" className="block text-lg font-semibold text-green-500 mb-2">Page Description</label>
          <textarea
            id="pageDescription"
            name="pageDescription"
            className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-indigo-200 text-black"
            value={blogData.pageDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pageKeyword" className="block text-lg font-semibold text-green-500 mb-2">Page Keyword</label>
          <input
            type="text"
            id="pageKeyword"
            name="pageKeyword"
            className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-indigo-200 text-black"
            value={blogData.pageKeyword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group flex items-center space-x-2">
          <input
            type="checkbox"
            id="status"
            name="status"
            className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            checked={blogData.status}
            onChange={handleStatusChange}
          />
          <label htmlFor="status" className="text-lg font-medium text-green-500">Status</label>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogPage;
