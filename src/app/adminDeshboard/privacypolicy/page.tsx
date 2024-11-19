"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import ReactQuill styles

// Dynamically import ReactQuill for client-side rendering only
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

type PrivacyPolicyData = {
  title: string;
  content: string;
  lastUpdated: string;
  status: boolean;
};

const PrivacyPolicyPage: React.FC = () => {
  const [policyData, setPolicyData] = useState<PrivacyPolicyData>({
    title: '',
    content: '',
    lastUpdated: new Date().toISOString().split('T')[0], // Default to today's date
    status: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPolicyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (content: string) => {
    setPolicyData((prev) => ({
      ...prev,
      content,
    }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPolicyData((prev) => ({
      ...prev,
      status: e.target.checked,
    }));
  };

  // API integration for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare data to send in the API request
    const requestData = {
      title: policyData.title,
      content: policyData.content,
      lastUpdated: policyData.lastUpdated,
      status: policyData.status,
    };

    try {
      // Send POST request to create a new privacy policy
      const response = await fetch('http://localhost:7000/api/admin/privacypolicy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData), // Send the form data as JSON
      });

      // Handle the response
      if (response.ok) {
        const result = await response.json();
        console.log('Privacy policy created successfully:', result);
        alert('Privacy policy created successfully!');
      } else {
        const error = await response.json();
        console.error('Error creating privacy policy:', error);
        alert('Error creating privacy policy');
      }
    } catch (error) {
      console.error('Request failed', error);
      alert('Request failed');
    }
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Create or Update Privacy Policy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="title" className="block text-lg font-semibold text-green-500 mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-indigo-200 text-black"
            value={policyData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="block text-lg font-semibold text-green-500 mb-2">Content</label>
          <ReactQuill
            value={policyData.content}
            onChange={handleEditorChange}
            theme="snow"
            className="border rounded-lg"
            style={{ color: 'black' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastUpdated" className="block text-lg font-semibold text-green-500 mb-2">Last Updated</label>
          <input
            type="date"
            id="lastUpdated"
            name="lastUpdated"
            className="w-full border rounded-lg p-2 outline-none focus:ring focus:ring-indigo-200 text-black"
            value={policyData.lastUpdated}
            onChange={handleChange}
          />
        </div>
        <div className="form-group flex items-center space-x-2">
          <input
            type="checkbox"
            id="status"
            name="status"
            className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            checked={policyData.status}
            onChange={handleStatusChange}
          />
          <label htmlFor="status" className="text-lg font-medium text-green-500">Active</label>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PrivacyPolicyPage;
