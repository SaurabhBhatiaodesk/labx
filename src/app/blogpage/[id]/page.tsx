"use-client";
import { Metadata } from "next";
import React from "react";
import BlogSidebar from "../../../components/BlogSidebar/BlogSidebar"; // Import the new Client Component
import Image from "next/image";

interface BlogData {
  _id: string;
  heading: string;
  content: string;
  pageTitle: string;
  metaDescription: string;
  pageKeywords: string;
  featuredImage: string[];
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

// Fetch Blog Data by ID
async function fetchBlogData(blogId: string): Promise<BlogData> {
  const res = await fetch(
    `https://labxbackend.labxrepair.com.au/api/admin/blog/${blogId}`,
    {
      cache: "no-store", // Ensures no stale data
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  const data = await res.json();
  return data;
}

// Generate Metadata for the Blog
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const blog = await fetchBlogData(params.id);

    return {
      title: blog.pageTitle,
      description: `${blog?.metaDescription} Keywords: ${blog.pageKeywords}`,
      keywords: blog.pageKeywords,
    };
  } catch (error) {
    return {
      title: "Blog not found",
      description: "The requested blog could not be found",
    };
  }
}

// Blog Details Component (Server Component)
export default async function BlogDetails({
  params,
}: {
  params: { id: string };
}) {
  try {
    const blog = await fetchBlogData(params.id);

    return (
      <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg flex">
        {/* Main Blog Content */}
        <div className="w-3/4 pr-6">
        {blog?.featuredImage.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {blog?.featuredImage.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Image
                          src={image} // Base64 image string or image URL
                          alt={`Image ${index + 1}`}
                          width={400}
                          height={300}
                          className="rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  "No Image"
                )}

          <h2 className="text-3xl font-bold mb-6">{blog.heading}</h2>

          <div className="mb-4">
            <div
              className="mt-2 text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>
        </div>

        {/* Sidebar with Paginated Blogs */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <BlogSidebar />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Blog not found</h2>
      </div>
    );
  }
}
