"use client";
import React, { useEffect, useState } from "react";

// Define types for the Privacy Policy
type PrivacyPolicy = {
  _id: string;
  title: string;
  content: string;
  lastUpdated: string;
  status: boolean;
};

const PrivacyPolicyList: React.FC = () => {
  const [policies, setPolicies] = useState<PrivacyPolicy[]>([]); // State to store privacy policies
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch all privacy policies from the API
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await fetch(
          "http://localhost:7000/api/admin/privacypolicy"
        );
        const data = await response.json();

        // If the data is an object and not an array, wrap it in an array
        if (Array.isArray(data)) {
          setPolicies(data); // If it's already an array, set it directly
        } else {
          setPolicies([data]); // If it's an object, make it an array
        }
      } catch (error) {
        console.error("Error fetching privacy policies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Privacy Policies
      </h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Content</th>
            <th className="py-2 px-4 border">Last Updated</th>
            <th className="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
  {policies.map((policy) => (
    <tr key={policy._id} className="hover:bg-gray-100">
      {/* Heading Column */}
      <td
        className="py-2 px-4 border"
        dangerouslySetInnerHTML={{
          __html: policy.title,
        }}
        style={{ color: "black" }}  // Make content black
      ></td>
      {/* Content Column */}
      <td
        className="py-2 px-4 border"
        dangerouslySetInnerHTML={{
          __html: policy.content,
        }}
        style={{ color: "black" }}  // Make content black
      ></td>

      {/* Last Updated Column */}
      <td className="py-2 px-4 border" style={{ color: "black" }}>
        {new Date(policy.lastUpdated).toLocaleDateString()}
      </td>

      {/* Status Column */}
      <td className="py-2 px-4 border" style={{ color: "black" }}>
        {policy.status ? "Active" : "Inactive"}
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default PrivacyPolicyList;
