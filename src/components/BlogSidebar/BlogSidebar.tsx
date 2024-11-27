"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface BlogData {
  _id: string;
  heading: string;
  featuredImage: string[];
  createdAt: string;
}

async function fetchPaginatedBlogs(
  page: number,
  limit: number
): Promise<{
  blogs: BlogData[];
  totalPages: number;
}> {
  const res = await fetch(
    `http://localhost:7000/api/admin/blogs?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs data");
  }

  const data = await res.json();
  return { blogs: data.blogs, totalPages: data.pagination.totalPages };
}

export default function BlogSidebar() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    fetchBlogs(currentPage, blogsPerPage);
  }, [currentPage]);

  const fetchBlogs = async (page: number, limit: number) => {
    try {
      const { blogs, totalPages } = await fetchPaginatedBlogs(page, limit);
      setBlogs(blogs);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-center">Recent Blogs</h3>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog._id}
            className="flex items-center mb-4 bg-white shadow-sm rounded-lg p-2 hover:shadow-md"
          >
            {blog.featuredImage.length > 0 && (
              <Image
                src={blog.featuredImage[0]}
                alt={blog.heading}
                className="h-12 w-12 rounded-md object-cover mr-4"
              />
            )}
            <div>
              <h4 className="text-sm font-medium text-gray-800">
                {blog.heading}
              </h4>
              <p className="text-xs text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* Pagination Buttons */}
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
