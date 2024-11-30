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
    `https://labxbackend.labxrepair.com.au/api/admin/blogs?page=${page}&limit=${limit}`,
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
            className="flex items-start mb-4  shadow-sm rounded-lg p-2 hover:shadow-md gap-4"
          >
            {blog.featuredImage.length > 0 && (
              <Image
                src={blog.featuredImage[0]}
                alt={blog.heading}
                className="h-12 w-12 rounded-md object-cover"
                width={400}
                height={300}
              />
            )}
            <div>
              <h4 className="text-sm font-medium text-white">
                {blog.heading}
              </h4>
              <p className="text-xs text-white">
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
         className={`px-4 py-2 text-black mx-1 rounded-full text-sm ${currentPage === index + 1 ? 'active' : 'bg-gray-200 text-gray-700'}`}
         style={currentPage === index + 1 ? { background: 'linear-gradient(45deg, #E1F5C4, #EDE574)', color: 'black' } : {}}
       >
         {index + 1}
       </button>
       
        ))}
      </div>
    </div>
  );
}
