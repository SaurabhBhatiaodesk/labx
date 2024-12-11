"use client";

import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Image from "next/image";
import MainButton from "@/components/MainButton/MainButton";
import BlogImage from "../../../public/Images/adminimage.png"; // Fallback image
import Link from "next/link";

// Define types for the blog data
interface Blog {
  _id: string;
  heading: string;
  featuredImage: string[]; // Assuming the 'featuredImage' is an array of URLs
}

interface Pagination {
  totalBlogs: number;
  currentPage: number;
  totalPages: number;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(3); // Limit per page, can be adjusted as needed

  useEffect(() => {
    // Fetch blog data from the API using axios with pagination parameters
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/admin/blogs?page=${currentPage}&limit=${limit}`
        );

        setBlogs(response?.data?.blogs); // Set blogs
        setPagination(response?.data?.pagination); // Set pagination data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [currentPage, limit]); // Re-fetch when page changes

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the current page
  };

  return (
    <>
      <div className="main-blog-list">
        <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 justify-center text-center gap-4 mb-2">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => {
              // Get the featured image (first image) from the API response
              const featuredImage =
                blog.featuredImage && blog.featuredImage.length > 0
                  ? blog.featuredImage[0] // Use the first image from the array
                  : BlogImage; // Fallback to a dummy image if no image is available

              return (
                <div
                  key={index}
                  className="blog-article p-4 p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
                >
                  <Link   href={`/blogpage/${blog._id}`}>
                  <Image
                    src={featuredImage}
                    alt={blog.heading || "Blog Image"}
                    width={500} // Optional: specify width/height for better performance
                    height={300} // Optional: specify width/height for better performance
                  />
                  <h1 className="mb-4 mt-4">{blog.heading || "Blog Title"}</h1>
                  <div className="learnmore">
                    <MainButton
                      MainButton="View Details"
                      link={`/blogpage/${blog._id}`}
                    />
                  </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>Loading blogs...</p>
          )}
        </div>
      </div>

      {/* {/ Numbered Pagination Controls /} */}
      {pagination && (
        <div className="pagination-controls flex justify-center mt-4">
          {Array.from({ length: pagination.totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
