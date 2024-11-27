import React from "react";
import Image from "next/image";
import course2 from "../../../../public/Images/course2.png";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainButton from "@/components/MainButton/MainButton";

const CourseHighlights = () => {
  return (
    <>
      <div className="py-4 lg:py-[20px]">
        <div className="container">
          <div className="">
            <MainHeading Heading="Beginner Phone Repair Course" />
          </div>
          <div>
            {/* course 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
              <div className="relative w-full h-[300px] md:h-[550px]">
                <Image
                  className="object-cover rounded-[30px]"
                  src={course2}
                  alt="Course Image"
                  fill
                />
              </div>
              <div className="p-2 lg:p-2 bg-black text-white rounded-md">
                <h2 className="text-3xl font-bold mb-4">
                Advanced Motherboard Repair – Micro Soldering (Level 1)
                </h2>
                <div className="flex gap-4 text-yellow-400">
                  <p className="font-semibold">Duration: 1 Week</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">Price: $2200</p>
                </div>
                <p className="text-base">
                Our Level 1 course repairing mobile phones offers hands-on training in essential micro soldering techniques for mobile device motherboard repairs. Ideal for technicians ready to expand their skills, this course covers:
                </p>
                <ul className="space-y-2 pb-5">
                  <li>
                    <strong className="text-yellow-400">
                      Component Familiarity:
                    </strong>{" "}
                    Learn to work with essential components and advanced tools,
                    including reballing techniques.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                      Schematics and Diagnostics:
                    </strong>{" "}
                    Understand how to read board schematics, trace faults, and diagnose common issues.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                      Repair Techniques:
                    </strong>{" "}
                    Tackle problems like no image, no backlight, underfilled chips, and create jumpers for board repairs.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                    Flex Cable and Connector Repairs:
                    </strong>{" "}
                    Develop the skills to repair torn flex cables and connectors, including charging ports.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                    Device Coverage:
                    </strong>{" "}
                    Work on a wide range of devices, from older models to the latest releases.
                  </li>
                </ul>
                <div>
                  <MainButton MainButton="READ MORE" />
                </div>
                <div className="my-4">
                  <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px]">
                    By the end of this course, you&apos;ll have the confidence to
                    handle a variety of motherboard-level repairs with
                    precision.
                  </div>
                </div>
              </div>
            </div>
            {/* course 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
              <div className="order-2 lg:order-1 p-2 lg:p-2 bg-black text-white rounded-md">
                <h2 className="text-3xl font-bold mb-4">
                  Expert Motherboard Repair – Micro Soldering (Level 2)
                </h2>
                <div className="flex gap-4 text-yellow-400">
                  <p className="font-semibold">Duration: 1 Week</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">Price: $2800</p>
                </div>
                <p className="text-base">
                The Level 2 cell phone repair course builds on foundational micro soldering techniques and focuses on advanced repairs for modern devices. This phone repairing course covers:
                </p>
                <ul className="space-y-2 pb-5">
                  <li>
                    <strong className="text-yellow-400">
                      Face ID and Sensor Repairs:
                    </strong>{" "}
                    Repair Face ID components, dot projectors, and infrared
                    cameras.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                      Removing Part Warnings:
                    </strong>{" "}
                    Learn how to remove non-genuine part warnings (battery,
                    screen, and camera).
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                      Baseband and Chip Repairs:
                    </strong>{" "}
                    Fix &quot;no service&quot; issues and work with large ICs
                    and baseband chips.
                  </li>
                  <li>
                    <strong className="text-yellow-400">
                    NAND Programming and iCloud Unlocking:
                    </strong>{" "}
                    Master NAND reprogramming and unlock iCloud on iPads.

                  </li>
                  <li>
                    <strong className="text-yellow-400">
                    Reballing and Dual-Board Repairs:
                    </strong>{" "}
                    Handle complex reballing techniques and fix broken connections on dual-layer boards.


                  </li>
                </ul>
                <div>
                  <MainButton MainButton="READ MORE" />
                </div>
                <div className="my-4">
                  <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] text-base font-poppins">
                  This advanced phone fixing course equips you with the expertise to tackle complex motherboard repairs, giving you the edge in handling the most challenging devices.
                  </div>
                </div>
              </div>
              <div className="relative w-full h-[300px] md:h-[550px] order-1 lg:order-2">
                <Image
                  className="object-cover rounded-[30px]"
                  src={course2}
                  alt="Course Image"
                  fill
                />
              </div>
            </div>
            {/* course 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
              <div className="relative w-full h-[300px] md:h-[550px]">
                <Image
                  className="object-cover rounded-[30px]"
                  src={course2}
                  alt="Course Image"
                  fill
                />
              </div>
              <div className="p-2 lg:p-2 bg-black text-white rounded-md">
                <h2 className="text-3xl font-bold mb-4">
                Master Motherboard Repair – Micro Soldering (Level 3)
                </h2>
                <div className="flex gap-4 text-yellow-400">
                  <p className="font-semibold">Duration: 1 Week</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">Price: $5500</p>
                </div>
                <p className="text-base">
                Our Level 3 Master Course is designed for experienced technicians seeking to master the most advanced techniques in mobile motherboard repair. This intensive phone repairing course covers complex repairs and data recovery, ensuring you can handle the most challenging issues in modern devices.
                </p>
               <h3>What You’ll Learn:</h3>
                <ul className="space-y-2 pb-5">
                  <strong className="text-yellow-400">
                    Advanced Data Recovery:
                  </strong>{" "}
                  Learn specialized techniques for recovering data from severely damaged or non-functional devices, including water-damaged phones and corrupted storage chips. This module will provide you with expertise in extracting critical data in difficult recovery cases.

                </ul>
                <div>
                  <MainButton MainButton="READ MORE" />
                </div>
                <div className="my-4">
                  <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] font-poppins text-base">
                    This Level 3 course is designed to take your repair
                    expertise to the highest level, enabling you to handle the
                    most advanced repairs and data recovery tasks. By the end of
                    this course, you&apos;ll be prepared to tackle any challenge,
                    from CPU reballing to restoring devices with critical board
                    damage.
                  </div>
                </div>
              </div>
            </div>

            {/* course 0 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
              <div className="order-2 lg:order-1 p-2 lg:p-2 bg-black text-white rounded-md">
                <h2 className="text-3xl font-bold mb-4">
                
Professional Phone Screen Refurbishing Course

                </h2>
                <div className="flex gap-4 text-yellow-400">
                  <p className="font-semibold">Duration: 5 Days</p>
                  <p className="font-semibold">|</p>
                  <p className="font-semibold">Price: $5500</p>
                </div>
                <p className="text-base">
                Our Professional Phone Screen Refurbishing Course is designed to teach technicians how to refurbish damaged or broken phone screens using industry-standard tools and techniques. This hands-on phone fixing course covers the entire refurbishing process, from screen disassembly to reassembly, ensuring high-quality results for both LCD and OLED screens.

                </p>
                <h3>What You’ll Learn:</h3>
                <ul className="space-y-2 pb-5">
                  <strong className="text-yellow-400">
                  Screen Disassembly and Inspection:
                  </strong>{" "}
                  Learn how to safely disassemble mobile devices and inspect LCD and OLED screens for damage, determining whether a screen is suitable for refurbishing or replacement.


                </ul>
             
                <div>
                  <MainButton MainButton="READ MORE" />
                </div>
                <div className="my-4">
                  <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] text-base font-poppins">
                    You&apos;ll have the opportunity to watch live
                    demonstrations of each repair, followed by hands-on practice
                    under our supervision. By the end of the course, you&apos;ll
                    have the skills and confidence to perform a wide range of
                    repairs on most modern devices.
                  </div>
                </div>
              </div>
              <div className="relative w-full h-[300px] md:h-[550px] order-1 lg:order-2">
                <Image
                  className="object-cover rounded-[30px]"
                  src={course2}
                  alt="Course Image"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHighlights;
