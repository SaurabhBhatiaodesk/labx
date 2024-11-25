"use client";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

type PrivacyPolicy = {
  _id: string;
  heading: string;
  content: string;
  pageTitle: string;
  pageKeywords: string;
  metaDescription: string;
  status: boolean;
  images: string[];
};

const PrivacyPolicyList: React.FC = () => {
  const [policies, setPolicies] = useState<PrivacyPolicy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await fetch("https://labxbackend.labxrepair.com.au/api/admin/privacypolicy");
        const data = await response.json();
        setPolicies(Array.isArray(data) ? data : [data]); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching privacy policies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPolicies();
  }, []);

  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`https://labxbackend.labxrepair.com.au/api/admin/privacypolicy/${deleteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Privacy policy deleted successfully!");
        setPolicies((prev) => prev.filter((policy) => policy._id !== deleteId));
      } else {
        alert("Failed to delete privacy policy.");
      }
    } catch (error) {
      console.error("Error deleting privacy policy:", error);
    } finally {
      setShowModal(false);
      setDeleteId(null);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/adminDeshboard/privacypolicy?id=${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Privacy Policies</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4 border">Heading</th>
            <th className="py-2 px-4 border">Page Title</th>

            <th className="py-2 px-4 border">Keywords</th>
            <th className="py-2 px-4 border">Images</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy) => (
            <tr key={policy._id} className="hover:bg-gray-100">
              {/* Heading */}
              <td className="py-2 px-4 border" style={{ color: "black" }}>
                {policy.heading}
              </td>

              {/* Page Title */}
              <td className="py-2 px-4 border" style={{ color: "black" }}>
                {policy.pageTitle}
              </td>


              {/* Keywords */}
              <td className="py-2 px-4 border" style={{ color: "black" }}>
                {policy.pageKeywords}
              </td>

              {/* Images */}
              <td className="py-2 px-4 border">
                <div className="flex flex-wrap gap-2">
                  {policy.images && policy.images.length > 0 ? (
                    policy.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Policy Image ${index + 1}`}
                        className="h-16 w-16 object-cover rounded"
                      />
                    ))
                  ) : (
                    <p className="text-gray-500">No Images</p>
                  )}
                </div>
              </td>

              {/* Status */}
              <td className="py-2 px-4 border" style={{ color: "black" }}>
                {policy.status ? "Active" : "Inactive"}
              </td>

              {/* Actions */}
              <td className="py-2 px-4 border">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(policy._id)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => confirmDelete(policy._id)}
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Are you sure you want to delete this policy?</h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setDeleteId(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyList;
