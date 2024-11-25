"use client";
import React, { useEffect, useState } from 'react';

// Define the types for the Blog data
type FeaturedImage = {
  name: string;
  type: string;
  size: number;
  url: string;
};

type Blog = {
  _id: string;
  heading: string;
  content: string;
  pageTitle: string;
  pageDescription: string;
  pageKeyword: string;
  status: boolean;
  featuredImage: FeaturedImage;
};

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // State to store blogs
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch all blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/admin/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Blogs</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4 border">Heading</th>
            <th className="py-2 px-4 border">Content</th>
            <th className="py-2 px-4 border">Page Title</th>
            <th className="py-2 px-4 border">Page Description</th>
            <th className="py-2 px-4 border">Page Keyword</th>
            <th className="py-2 px-4 border">Status</th>
            {/* <th className="py-2 px-4 border">Featured Image</th> */}
          </tr>
        </thead>
        <tbody>
  {blogs.map((blog) => (
    <tr key={blog._id} className="hover:bg-gray-100">
      <td className="py-2 px-4 border"style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html:blog.heading}}></td>
      <td className="py-2 px-4 border" style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: blog.content }}></td>
      <td className="py-2 px-4 border"style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html:blog.pageTitle}}></td>
      <td className="py-2 px-4 border"style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html:blog.pageDescription}}></td>
      <td className="py-2 px-4 border"style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html:blog.pageKeyword}}></td>
      <td className="py-2 px-4 border"style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html:blog.status ? 'Active' : 'Inactive'}}></td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default BlogsPage;
