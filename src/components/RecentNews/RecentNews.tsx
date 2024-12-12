// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./RecentNews.css";
// import { useRouter } from "next/navigation";

// interface BlogData {
//   _id: string;
//   featuredImage: string[]; // Array of base64 image strings
//   heading: string;
//   content: string; // This is treated as the page description
//   pageTitle: string;
//   status: boolean;
// }

// interface PaginationData {
//   totalBlogs: number;
//   currentPage: number;
//   totalPages: number;
//   hasNextPage: boolean;
//   hasPrevPage: boolean;
// }

// // Utility function to strip HTML tags
// const stripHtmlTags = (html: string): string => {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// };

// const RecentNews: React.FC = () => {
//   const [blogs, setBlogs] = useState<BlogData[]>([]); // State to store blogs
//   const [pagination, setPagination] = useState<PaginationData | null>(null); // Pagination data
//   const [page, setPage] = useState<number>(1); // Current page number
//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS animations

//     // Fetch blogs from the API with pagination
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:7000/api/admin/blogs?page=${page}&limit=3`
//         ); // Fetch blogs with current page and limit (3 blogs per page)
//         const data = await response.json();
//         const filteredBlogs = data.blogs.filter(
//           (blog: BlogData) => blog.status
//         ); // Filter blogs where status is true
//         setBlogs(filteredBlogs); // Set filtered blogs
//         setPagination(data.pagination); // Set pagination metadata
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs(); // Call fetchBlogs whenever the page changes
//   }, [page]);

//   // Function to navigate to the blog page with dynamic ID
//   const sendId = (id: string) => {
//     router.push(`/blogpage/${id}`);
//   };

//   return (
//     <div className="RecentNews-os">
//       <div className="container">
//         <div className="py-5 xl:py-10" data-aos="fade-up">
//           <h2 className="text-3xl font-bold text-center">Recent News</h2>
//           <p className="text-center text-lg mt-2 mb-6">
//             Explore our latest blogs for insights, news, and expert tips on
//             mobile phone repair and technology. Stay updated with LabX’s tech
//             knowledge!
//           </p>
//           <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:py-5 py-3">
//             {blogs.length > 0 ? (
//               blogs.map((blog) => (
//                 <div className="blogs" key={blog._id} data-aos="zoom-in">
//                   <div>
//                     {/* Render the first featured image */}
//                     {blog.featuredImage.length > 0 && (
//                       <Image
//                         src={blog.featuredImage[0]} // Base64 image string
//                         alt={blog.heading}
//                         width={100}
//                         height={100}
//                         className="rounded-md"
//                       />
//                     )}
//                   </div>
//                   <div className="mt-4">
//                     <h4 className="font-bold text-lg text-gray-800">
//                       {blog.heading.split(" ").length > 8
//                         ? `${blog.heading.split(" ").slice(0, 8).join(" ")}...`
//                         : blog.heading}
//                     </h4>
//                     <p className="text-gray-700 text-base mt-2">
//                       {stripHtmlTags(blog.content).split(" ").length > 40
//                         ? `${stripHtmlTags(blog.content)
//                             .split(" ")
//                             .slice(0, 40)
//                             .join(" ")}...`
//                         : stripHtmlTags(blog.content)}
//                     </p>
//                     <div className="flex justify-between items-center mt-4">
//                       <button
//                         onClick={() => sendId(blog._id)} // Pass the blog ID to the function
//                         className="capitalize text-[16px] tracking-[1px] p-2 bg-blue-500 text-white rounded-md"
//                       >
//                         Read More
//                       </button>
//                       <span className="capitalize text-[16px] tracking-[1px] text-gray-500">
//                         {/* Placeholder date, can add createdAt/updatedAt if available */}
//                         20 Oct, 2024
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No blogs available.</p>
//             )}
//           </div>
//           {/* Pagination Controls */}
//           {pagination && (
//             <div className="flex justify-center mt-6 space-x-4">
//               {/* Render pagination numbers */}
//               {[...Array(pagination.totalPages)].map((_, index) => (
//                 <button
//                   key={index}
//                   className={`px-4 py-2 rounded-md ${
//                     pagination.currentPage === index + 1
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-300 text-gray-700 hover:bg-gray-400"
//                   }`}
//                   onClick={() => setPage(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentNews;

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./RecentNews.css";
// import { useRouter } from "next/navigation";
// import BlogsSlider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface BlogData {
//   _id: string;
//   featuredImage: string[]; // Array of base64 image strings
//   heading: string;
//   content: string; // This is treated as the page description
//   pageTitle: string;
//   status: boolean;
// }

// // Utility function to strip HTML tags
// const stripHtmlTags = (html: string): string => {
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   return div.textContent || div.innerText || "";
// };

// const RecentNews: React.FC = () => {
//   const [blogs, setBlogs] = useState<BlogData[]>([]); // State to store blogs
//   const [loading, setLoading] = useState<boolean>(true); // State to track loading status
//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS animations

//     // Fetch blogs from the API
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:7000/api/admin/blogs`
//         ); // No pagination required
//         const data = await response.json();
//         const filteredBlogs = data.blogs.filter(
//           (blog: BlogData) => blog.status
//         ); // Filter blogs where status is true
//         setBlogs(filteredBlogs); // Set filtered blogs
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false); // Set loading to false once the request is finished
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Function to navigate to the blog page with dynamic ID
//   const sendId = (id: string) => {
//     router.push(`/blogpage/${id}`);
//   };

//   const blogsSliderSettings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="RecentNews-os">
//       <div className="container">
//         <div className="py-5 xl:py-10" data-aos="fade-up">
//           <h2 className="text-3xl font-bold text-center">Recent News</h2>
//           <p className="text-center text-lg mt-2 mb-6">
//             Explore our latest blogs for insights, news, and expert tips on
//             mobile phone repair and technology. Stay updated with LabX’s tech
//             knowledge!
//           </p>

//           <div className="blogs-slider-row-os">
//             {/* Show Loading message while data is being fetched */}
//             {loading ? (
//               <p className="text-center text-gray-500">Loading...</p>
//             ) : blogs.length > 0 ? (
//               <BlogsSlider {...blogsSliderSettings}>
//                 {blogs.map((blog) => (
//                   <div
//                     className="blogs blogs-slider-col-os"
//                     key={blog._id}
//                     data-aos="zoom-in"
//                   >
//                     <div>
//                       {blog.featuredImage.length > 0 && (
//                         <Image
//                           src={blog.featuredImage[0]}
//                           alt={blog.heading}
//                           width={100}
//                           height={100}
//                           className="rounded-md"
//                         />
//                       )}
//                     </div>
//                     <div className="mt-4">
//                       <h4 className="font-bold text-lg text-gray-800">
//                         {blog.heading.split(" ").length > 8
//                           ? `${blog.heading
//                               .split(" ")
//                               .slice(0, 8)
//                               .join(" ")}...`
//                           : blog.heading}
//                       </h4>
//                       <p className="text-gray-700 text-base mt-2">
//                         {stripHtmlTags(blog.content).split(" ").length > 40
//                           ? `${stripHtmlTags(blog.content)
//                               .split(" ")
//                               .slice(0, 40)
//                               .join(" ")}...`
//                           : stripHtmlTags(blog.content)}
//                       </p>
//                       <div className="flex justify-between items-center mt-4">
//                         <button
//                           onClick={() => sendId(blog._id)}
//                           className="capitalize text-[16px] tracking-[1px]"
//                         >
//                           Read More
//                         </button>
//                         <span className="capitalize text-[16px] tracking-[1px] text-gray-500">
//                           20 Oct, 2024
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </BlogsSlider>
//             ) : (
//               <p className="text-center text-gray-500">No blogs available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentNews;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RecentNews.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MainHeading from "../ManinHeading/MainHeading";

interface BlogData {
  _id: string;
  featuredImage: string[]; // Array of base64 image strings
  heading: string;
  content: string; // This is treated as the page description
  pageTitle: string;
  status: boolean;
}

// Utility function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const RecentNews: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]); // State to store blogs
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations

    // Fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/api/admin/blogs`
        ); // No pagination required
        const data = await response.json();
        const filteredBlogs = data.blogs.filter(
          (blog: BlogData) => blog.status
        ); // Filter blogs where status is true

        // Get the latest 3 blogs
        setBlogs(filteredBlogs.slice(0, 3)); // Set the latest 3 blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false once the request is finished
      }
    };

    fetchBlogs();
  }, []);

  // Function to navigate to the blog page with dynamic ID
  const sendId = (id: string) => {
    router.push(`/blogpage/${id}`);
  };

  return (
    <div className="RecentNews-os">
      <div className="container">
        <div className="py-5 xl:py-8" data-aos="fade-up">

        <MainHeading Heading="LabX Mobile Phone Repair: Latest Updates & Insights"/>
          <p className="text-center text-lg mt-2 mb-6">
            Explore our latest blogs for insights, news, and expert tips on
            mobile phone repair and technology. Stay updated with LabX’s tech
            knowledge!
          </p>

          {/* <div className="blogs-row-os grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:py-5 py-3">
            {loading ? (
              ""
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
                <div
                  className="blogs-row-col-os"
                  key={blog._id}
                  data-aos="zoom-in"
                >
                  <div>
                    {blog.featuredImage.length > 0 && (
                      <Image
                        src={blog.featuredImage[0]}
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
                        ? `${blog.heading.split(" ").slice(0, 5).join(" ")}...`
                        : blog.heading}
                      {blog.heading}
                    </h4>
                    <p className="text-gray-700 text-base mt-2">
                      {stripHtmlTags(blog.content).split(" ").length > 30
                        ? `${stripHtmlTags(blog.content)
                            .split(" ")
                            .slice(0, 30)
                            .join(" ")}...`
                        : stripHtmlTags(blog.content)}
                    </p>
                    <p className="text-gray-700 text-base mt-2">
                      {stripHtmlTags(blog.content).length > 160
                        ? `${stripHtmlTags(blog.content).slice(0, 160)}...`
                        : stripHtmlTags(blog.content)}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => sendId(blog._id)}
                        className="capitalize text-[16px] text-[#9D9C98]"
                      >
                        Read More
                      </button>
                      <span className="capitalize text-[16px] tracking-[1px] text-white">
                        20 Oct, 2024
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 italic">No blogs available.</p>
            )}
          </div> */}

          <div>
            {/* Show Loading message while data is being fetched */}
            {loading ? (
              ""
            ) : blogs.length > 0 ? (
              <div className="blogs-row-os grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:py-5 py-3">
                {blogs.map((blog) => (
                  <div  onClick={() => sendId(blog._id)}
                    className="blogs-row-col-os"
                    key={blog._id}
                    data-aos="zoom-in"
                  >
                    <div>
                      {blog.featuredImage.length > 0 && (
                        <Image
                          src={blog.featuredImage[0]}
                          alt={blog.heading}
                          width={100}
                          height={100}
                          className="rounded-md"
                        />
                      )}
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-lg text-gray-800">
                        {blog.heading}
                      </h4>
                      <p className="text-gray-700 text-base mt-2">
                        {stripHtmlTags(blog.content).length > 160
                          ? `${stripHtmlTags(blog.content).slice(0, 160)}...`
                          : stripHtmlTags(blog.content)}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={() => sendId(blog._id)}
                          className="capitalize text-[16px] text-[#EDE574]"
                        >
                          Read More
                        </button>
                        <span className="capitalize text-[16px] tracking-[1px] text-white">
                          20 Oct, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 italic">
                No blogs available.
              </p>
            )}
          </div>

          {blogs && blogs.length > 0 ? (
            <div className="flex justify-center text-center">
              {/* <Link
                href="/"
                className="capitalize text-[16px] tracking-[1px] px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                View All
              </Link> */}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
