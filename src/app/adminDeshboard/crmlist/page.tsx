"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

type Page = {
  _id: string;
  pageName: string;
  pageEditor: string;
  seoPageTitle: string;
  pageKeywords: string;
  pageDescription: string;
  status: boolean;
  ipAddress: string;
  createdAt: string;
  updatedAt: string;
};

const CreatePageList: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const router = useRouter(); // Initialize the router
  // Fetch data from API when component mounts
  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect, // Correctly typed
    };

    try {
      const response = await fetch("http://localhost:7000/api/admin/createpage", requestOptions);

      if (!response.ok) {
        throw new Error("Failed to fetch pages");
      }

      const data = await response.json();
      console.log(data); // For debugging

      if (data.status === 200) {
        setPages(data.data); // Set the data in the state
      } else {
        throw new Error("Error retrieving pages");
      }
    } catch (error: any) {
      setError(error.message); // Handle errors
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Handle Edit, Delete, and View actions
  const handleEdit = (id: string) => {
    console.log("Edit page with id:", id);

  };

  const handleDelete = (id: string) => {
    console.log("Delete page with id:", id);

  };

  const handleView = (pageName: string) => {
    console.log("View page with id:", pageName);
    // Navigate to the page using its _id in the URL
    router.push(`/adminDeshboard/${pageName}`); // Navigate to /adminDeshboard/{id}
  };


  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      <h2>Pages List</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Page Name</th>
            <th className="px-4 py-2 border">Editor</th>
            <th className="px-4 py-2 border">SEO Title</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th> {/* Added Actions column */}
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page._id}>
              <td className="px-4 py-2 border">{page.pageName}</td>
              <td className="px-4 py-2 border">{page.pageEditor}</td>
              <td className="px-4 py-2 border">{page.seoPageTitle}</td>
              <td className="px-4 py-2 border">{page.status ? "Active" : "Inactive"}</td>
              <td className="px-4 py-2 border">
                {/* Action Buttons */}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleView(page.pageName)}
                >
                  View
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleEdit(page._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(page._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatePageList;
