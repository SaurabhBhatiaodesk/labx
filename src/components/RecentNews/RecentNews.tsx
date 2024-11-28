"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RecentNews.css";
import { useRouter } from "next/navigation";

interface BlogData {
  _id: string;
  featuredImage: string[]; // Array of base64 image strings
  heading: string;
  content: string; // This is treated as the page description
  pageTitle: string;
  status: boolean;
}

interface PaginationData {
  totalBlogs: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Utility function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const RecentNews: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]); // State to store blogs
  const [pagination, setPagination] = useState<PaginationData | null>(null); // Pagination data
  const [page, setPage] = useState<number>(1); // Current page number
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations

    // Fetch blogs from the API with pagination
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://labxbackend.labxrepair.com.au/api/admin/blogs?page=${page}&limit=3`
        ); // Fetch blogs with current page and limit (3 blogs per page)
        const data = await response.json();
        const filteredBlogs = data.blogs.filter(
          (blog: BlogData) => blog.status
        ); // Filter blogs where status is true
        setBlogs(filteredBlogs); // Set filtered blogs
        setPagination(data.pagination); // Set pagination metadata
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs(); // Call fetchBlogs whenever the page changes
  }, [page]);

  // Function to navigate to the blog page with dynamic ID
  const sendId = (id: string) => {
    router.push(`/blogpage/${id}`);
  };

  return (
    <div className="RecentNews-os">
      <div className="container">
        <div className="py-5 xl:py-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center">Recent News</h2>
          <p className="text-center text-lg mt-2 mb-6">
            Explore our latest blogs for insights, news, and expert tips on
            mobile phone repair and technology. Stay updated with LabX’s tech
            knowledge!
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:py-5 py-3">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div className="blogs" key={blog._id} data-aos="zoom-in">
                  <div>
                    {/* Render the first featured image */}
                    {blog.featuredImage.length > 0 && (
                      <Image
                        src={blog.featuredImage[0]} // Base64 image string
                        alt={blog.heading}
                        width={100}
                        height={100}
                        className="rounded-md"
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-lg text-gray-800">
                      {blog.heading.split(" ").length > 8
                        ? `${blog.heading.split(" ").slice(0, 8).join(" ")}...`
                        : blog.heading}
                    </h4>
                    <p className="text-gray-700 text-base mt-2">
                      {stripHtmlTags(blog.content).split(" ").length > 40
                        ? `${stripHtmlTags(blog.content)
                            .split(" ")
                            .slice(0, 40)
                            .join(" ")}...`
                        : stripHtmlTags(blog.content)}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => sendId(blog._id)} // Pass the blog ID to the function
                        className="capitalize text-[16px] tracking-[1px] p-2 bg-blue-500 text-white rounded-md"
                      >
                        Read More
                      </button>
                      <span className="capitalize text-[16px] tracking-[1px] text-gray-500">
                        {/* Placeholder date, can add createdAt/updatedAt if available */}
                        20 Oct, 2024
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No blogs available.</p>
            )}
          </div>
          {/* Pagination Controls */}
          {pagination && (
            <div className="flex justify-center mt-6 space-x-4">
              {/* Render pagination numbers */}
              {[...Array(pagination.totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md ${
                    pagination.currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
