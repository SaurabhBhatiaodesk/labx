"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Repairsforcracked from "../../././../public/Images/icons/Repairsforcracked.svg";
import timer from "../../././../public/Images/icons/timer.svg";
import pricing from "../../././../public/Images/icons/pricing.svg";
// import Repairs from "../../../../public/Images/icons/Vector.svg";
// import Transparency from "../../../../public/Images/icons/Transparency.svg";
// import Recovery from "../../../../public/Images/icons/Recovery.svg";
// import B2BServices from "../../../../public/Images/icons/B2B Services.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { setPriceCat } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const DataBox: React.FC = () => {
  const dispatch = useDispatch();
  const [pricingId, setPricingId] = useState(0);
  const priceCat = useSelector((state: RootState) => state.users.priceCat);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionData = [
    {
      id: 1,
      //   image: Repairs,
      //   alt: "Repairs",
      title: `Screen Buy-Back Pricing`,
      description: `For fast screen refurbishment, you have two options: you can choose our service to replace the glass only, or you can sell your old broken screens to us, as we offer competitive buyback prices.`,
      hoverBackground:
        "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
    },
    {
      id: 2,
      //   image: Transparency,
      //   alt: "Transparency",
      title: "Data Recovery Pricing",
      description: `We offer professional data recovery services to retrieve essential information from non-functional devices. Any devices that are dead or have no power will be classified as data recovery cases.`,
      hoverBackground:
        "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))",
    },
    {
      id: 3,
      //   image: Recovery,
      //   alt: "Recovery",
      title: "General Repair Pricing",
      description: `Our general repair pricing includes common services such as screen replacements, charging port repairs, and other standard issues typically offered by most repair shops. `,
      hoverBackground:
        "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
    },
    {
      id: 4,
      //   image: B2BServices,
      //   alt: "B2B Services",
      title: "DIY/Techcnian Damage Pricing",
      description: `We repair devices damaged during DIY or technician attempts, addressing connector issues, fitting errors, and torn flex cables. Trust us for reliable service to restore your device.`,
      hoverBackground:
        "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
    },
  ];
  useEffect(() => {
    setPricingId(priceCat ?? 0);
  }, [priceCat]);

  const PricetoggleMenu = (data: number) => {
    dispatch(setPriceCat(data));
    setPricingId(data);
  };

  return (
    <div>
      <div className="container" data-aos="fade-up">
        {/* <MainHeading Heading="We Do, What Others Don't" />
        <MainTitle Title="At LabX, we tackle complex mobile phone repair challenges that others can’t, delivering reliable solutions and unmatched expertise." /> */}

        <div className="lg:pb-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
            {sectionData.map((section, index) => (
              <div
                key={index}
                style={{ background: "transparent" }} // Default background
                className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456] cursor-pointer"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = section.hoverBackground)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
                onClick={() => PricetoggleMenu(section.id)}
              >
                <div className="flex justify-center">
                  {/* <Image className="pb-2 w-[60px]" src={section.image} alt={section.alt} /> */}
                </div>
                <h3 className="text-[#EDE574] xl:text-xl  m-auto">
                  {section.title}
                </h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
        {priceCat !== 0 && (
          <>
            {(priceCat === 2 || pricingId === 2) && (
              <section className="datarecovery">
                <div className="KeyFeaturesDataRecovery">
                  <div>
                    <MainHeading Heading="   Key Features" />
                  </div>
                  {/* <span
                    className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] text-center"
                    style={{
                      transform: "rotate(-5deg)",
                    }}
                  >
                    Key Features
                  </span> */}

                  <div className="grid lg:grid-cols-3 grid-cols-1 py-5">
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={Repairsforcracked}
                        alt="Repairs for cracked"
                      />
                      <p className="lg:w-[70%] m-auto text-center">
                        Recover photos, videos, contacts, and more.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[44px] h-[75px]"
                        src={timer}
                        alt="Repairs for cracked"
                      />
                      <p className="lg:w-[70%] m-auto text-center">
                        Specialized recovery for water-damaged, dead, or
                        physically damaged devices.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[44px] h-[50px]"
                        src={pricing}
                        alt="Repairs for cracked"
                      />
                      <p className="lg:w-[70%] m-auto text-center">
                        Transparent pricing with no hidden fees.
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] text-center">
                  <strong className="text-tertiary"> Note: </strong> Data
                  recovery services are subject to device condition. Please
                  refer to our terms for full details. If you choose LabX to fix
                  your dead device, it will be treated as a data recovery case.
                  Our sole responsibility will be to temporarily power on the
                  device to facilitate data retrieval. No guarantees or
                  warranties are provided for the functionality of any other
                  features of the device.
                </div>
              </section>
            )}
            {(priceCat === 3 || pricingId === 3) && (
              <div className="KeyFeatures GeneralRepair">
                {/* <span></span> */}
                <div>
                <MainHeading Heading="   Key Features" />
                </div>
                {/* <span
                  className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] text-center"
                  style={{
                    transform: "rotate(-5deg)",
                  }}
                >
                  Key Features
                </span> */}

                <div className="grid lg:grid-cols-3 grid-cols-1 py-5">
                  <div className="flex flex-col justify-center items-center">
                    <Image src={Repairsforcracked} alt="Repairs for cracked" />
                    <p className="lg:w-[70%] m-auto text-center">
                      {" "}
                      Repairs for cracked screens, battery replacements, and
                      more.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[44px] h-[75px]"
                      src={timer}
                      alt="Repairs for cracked"
                    />
                    <p className="lg:w-[70%] m-auto text-center">
                      {" "}
                      Fast turnaround time for common repairs
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[44px] h-[50px]"
                      src={pricing}
                      alt="Repairs for cracked"
                    />
                    <p className="lg:w-[70%] m-auto text-center">
                      Competitive and upfront pricing.
                    </p>{" "}
                  </div>
                </div>
              </div>
            )}
            {(priceCat === 4 || pricingId === 4) && (
              <section className="DIY/Technician Damage Pricing">
                <div>
                <MainHeading Heading="   Key Features" />
                  <MainTitle Title="This service is specifically for devices damaged during DIY or technician attempts." />
                </div>
                {/* <span
                  className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] text-center"
                  style={{
                    transform: "rotate(-5deg)",
                  }}
                >
                  Key Features
                </span> */}

                <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
                  <div className="flex flex-col justify-center items-center">
                    <Image src={Repairsforcracked} alt="Repairs for cracked" />
                    <p className="lg:w-[70%] m-auto text-center">
                      Repairs for connector damage, bent connectors, fitting
                      issues, installation problems, torn flex cables, ripped
                      pads, and more.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[44px] h-[75px]"
                      src={timer}
                      alt="Repairs for cracked"
                    />
                    <p className="lg:w-[70%] m-auto text-center">
                      Please note that the pricing provided is a minimum
                      estimate. The final price will be determined after we
                      diagnose the device or complete the repair.
                    </p>
                  </div>
                </div>

                <p>
                  We ensure transparency and accuracy in pricing based on the
                  specific condition and requirements of your device.
                </p>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DataBox;
