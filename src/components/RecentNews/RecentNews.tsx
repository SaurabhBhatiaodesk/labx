import React from "react";
import Image from "next/image";
import MainHeading from "../ManinHeading/MainHeading";
import MainTitle from "../MainTitle/MainTitle";
import blogimage from "../../../public/Images/Home/blogimage.png";


interface BlogData {
  id: number;
  image: any; // use StaticImageData type for Next.js images
  heading: string;
  param: string;
  date: string;
}

const RecentNews = () => {
  const data: BlogData[] = [
    {
      id: 0,
      image: blogimage,
      heading: "How To Upgrade Your iPhone",
      param:
        "How To Upgrade Your iPhone 14 Pro Max Storage If your iPhone is getting non stop Storage Full pop ups or constantly have to be deleting",
      date: "2 Oct, 2024",
    },
    {
      id: 0,
      image: blogimage,
      heading: "How To Upgrade Your iPhone",
      param:
        "How To Upgrade Your iPhone 14 Pro Max Storage If your iPhone is getting non stop Storage Full pop ups or constantly have to be deleting",
      date: "2 Oct, 2024",
      
    },
    {
      id: 0,
      image: blogimage,
      heading: "How To Upgrade Your iPhone",
      param:
        "How To Upgrade Your iPhone 14 Pro Max Storage If your iPhone is getting non stop Storage Full pop ups or constantly have to be deleting",
      date: "2 Oct, 2024",
      
    }


  ];

  return (
    <>
      <div className="container">
        <div className="py-5 xl:py-10">
          <MainHeading Heading="Recent News" />
          <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />

          {/* mapping data */}
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2  lg:grid-cols-3 gap-4 xl:py-5 py-3">
            {data.map((item) => (
              <div className="blogs" key={item.id}>
                <div>
                  <Image src={item.image} alt="" />
                </div>
                <div className="mt-[10px] lg:mt-[20px]">
                  <h4 className="font-[600]">
                    {item.heading.split(" ").slice(0, 5).join(" ")}...
                  </h4>

                  <p>{item.param}</p>
                  <div className="flex justify-between">
                    <button className="capitalize text-[16px] tracking-[1px]">read more</button>
                    <span className="apitalize text-[16px] tracking-[1px]">{item.date}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentNews;
