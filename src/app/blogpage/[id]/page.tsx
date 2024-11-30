"use-client";
import { Metadata } from "next";
import React from "react";
import BlogSidebar from "../../../components/BlogSidebar/BlogSidebar";
import FixLabx from "../../../components/HomeCpmponents/FixLabx/FixLabx";
import Image from "next/image";
import "./BlogDetails.css";
import Banner from '../../../../public/Images/blog/banner.svg'
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
      cache: "no-store",
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
      <div className="blog-details-os">
        <div className="container">
         <div className="main__section text-center">
            <h1>Our Blogs</h1>
            <p>This course is designed and based on the highest industry standards and over 14 years of industry experience.  It includes everything that anyone needs to be one of the best technicians or a successful business owner.</p>
          </div>
          </div>
        <div className="container mx-auto my-10 p-6 bg-black shadow-lg rounded-lg flex flex-col lg:flex-row">
          {/* Main Blog Content */}
          <div className="w-full lg:w-3/4 pr-6 mb-6 lg:mb-0">
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
                      src={image}
                      alt={`Image ${index + 1}`}
                      layout="responsive"
                      width={700}
                      height={300}
                      className="w-full rounded-md"
                    />
                  </div>
                ))}
              </div>
            ) : (
              "No Image"
            )}

            <h2 className="text-3xl font-bold my-[10px] mt-5">{blog.heading}</h2>

            <div className="mb-4">
              <div
                className="mt-2 text-white"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
            </div>
          </div>

          {/* Sidebar with Paginated Blogs */}
          <div className="lg:w-1/4 w-full bg-black p-4 rounded-lg shadow-md">
            <BlogSidebar />
          </div>
        </div>
            <FixLabx />
        {/* <img src={Banner.src} className="banner_img" /> */}
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto my-10 p-6 bg-black shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Blog not found</h2>
      </div>
    );
  }
}
