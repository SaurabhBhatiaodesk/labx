"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  imageUrl: string; // Assuming the API provides an image URL
}

const Blogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sendId = (id: string) => {
    router.push(`/blogpage/${id}`);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://labxbackend.labxrepair.com.au/api/admin/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();

        console.log("data: ",data)
        setBlogs(data?.blogs); // Assuming `data` is an array of blogs
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-blog-list">
      <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 justify-center text-center gap-4 mb-2">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="blog-article p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h1 className="mb-4 mt-4">{blog.title}</h1>
            <div className="learnmore">
              {/* Button that triggers navigation */}
              <button
                onClick={() => sendId(blog.id)} // Directly triggering the navigation here
                className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
