import React from "react";
import MainHeading from "./ManinHeading/MainHeading";
import MainTitle from "./MainTitle/MainTitle";

const MobileBrandName = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto pt-8">
          <MainHeading Heading="Supported Models" />
          <MainTitle
            Title="We refurbish screens for a wide range of devices, including"
          />
          <div className="flex justify-center gap-2 flex-wrap">
            {["iPhone", "iPad", "Samsung Phone", "Samsung Tablet", "Google", "Oppo", ].map((brand, index) => (
              <div
                key={index}
                className="px-4 py-2 border rounded-full shadow-lg text-center lg:text-sm text-xs tracking-wide transition duration-300 ease-in-out  hover:shadow-xl  hover:border-[1px] "
              >
                <p className=" text-tertiary m-0 text-[13px]  ">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileBrandName;
