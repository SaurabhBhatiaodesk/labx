"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RecentNews.css";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  const swiperRef = useRef<any>(null); // Ref for Swiper instance
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations

    // Fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://labxbackend.labxrepair.com.au/api/admin/blogs`
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

  const sendId = (id: string) => {
    router.push(`/blogpage/${id}`);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="RecentNews-os">
      <div className="container">
        <div className="py-3 xl:py-5" data-aos="fade-up">
          <MainHeading Heading="Read Our Blogs" />
          <p className="text-center text-lg mt-2 mb-6">
            Explore our latest blogs for insights, news, and expert tips on
            mobile phone repair and technology. Stay updated with LabX’s tech
            knowledge!
          </p>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : blogs.length > 0 ? (
              <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{ delay: 3000 }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
              className="blogs-swiper"
            >
                {blogs.map((blog) => (
                  <SwiperSlide key={blog._id}>
                    <div
                      onClick={() => sendId(blog._id)}
                      className="blogs-row-col-os"
                      data-aos="zoom-in"
                    >
                      <div>
                        {blog.featuredImage.length > 0 && (
                          <Image
                            src={blog.featuredImage[0]}
                            alt={blog.heading}
                            width={500}
                            height={350}
                            className="rounded-md object-cover blog-image-home"
                          />
                        )}
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-lg text-[#EDE574]">
                          {blog.heading}
                        </h4>
                        <p className="text-base mt-2 text-white">
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
                  </SwiperSlide>
                ))}
                <div
                  className="custom-nav"
                  style={{
                    position: "absolute",
                    top: "62%",
                    zIndex: 5,
                    width: "100%",
                    left: 0,
                    right: 0,
                  }}
                >
                  <div className="resentblogs flex justify-between relative lg:top-[-35px] top-[-65px]">
                    <button
                      onClick={handlePrev}
                      className="prev-button bg-gray-300 p-[4px] rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 18L9 12L15 6"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="next-button bg-gray-300 p-[4px] rounded-full ml-2"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Swiper>
            ) : (
              <p className="text-center text-gray-500 italic">
                No blogs available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
