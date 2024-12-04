"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseInstructors from "../../../public/Images/CourseInstructors.png";
import coursereating from "../../../public/Images/icons/coursereating.svg";
import clock from "../../../public/Images/icons/clock.svg";

function BeginnerPhoneRepairCourseSale() {
  // State for counters
  const [personsMentored, setPersonsMentored] = useState(0);
  const [workshopsAttended, setWorkshopsAttended] = useState(0);
  const [coachingCertificates, setCoachingCertificates] = useState(0);

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate time left until sale ends
  useEffect(() => {
    const saleEndDate: any = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 29); // Change this as needed

    const updateCountdown = () => {
      const now: any = new Date();
      const difference = saleEndDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timerInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Effect for counting up to the target numbers
  useEffect(() => {
    const incrementCounters = (target: any, setCounter: any) => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setCounter(current);
        if (current >= target) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval speed as needed
    };

    incrementCounters(45, setPersonsMentored);
    incrementCounters(10, setWorkshopsAttended);
    incrementCounters(8, setCoachingCertificates);
  }, []);

  return (
    <div>
      <section>
        <div className="container">
          {/* Course Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
            <div className="p-3 lg:p-6 bg-black text-white rounded-md">
              <h2 className="text-3xl font-bold mb-4">
              Hands-On Learning for Real-World Skills
              </h2>
              <ul className="space-y-2 pb-5">
              <p>
                
                {`This mobile phone training program is designed to provide hands-on experience in mobile device repair, covering everything from essential tools to complex diagnostics. Our expert instructors guide students through each repair technique, emphasizing real-world applications and precision. By mastering key skills like screen and battery replacement, troubleshooting, and component replacement, students gain confidence to handle repairs on a wide range of devices.`}
              </p>
              </ul>

              {/* Countdown Timer */}
              <div className=" flex justify-between w-full gap-2">
                <div className="flex justify-between items-center  border-[2px] border-[#EDE574] text-black p-4 rounded-md w-full">
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.days}
                    </h3>
                    <p className="m-0">Days</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.hours}
                    </h3>
                    <p className="m-0"> Hours</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.minutes}
                    </h3>
                    <p className="m-0">Minutes</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.seconds}
                    </h3>
                    <p className="m-0">Seconds</p>
                  </div>
                </div>

                {/* <div className="text-center bg-yellow-400 p-2 rounded w-fit text-[40px]  flex flex-col items-center justify-center ">
                  <h3 className="lg:text-[50px] font-bold text-black">40%</h3>
                  <p className="m-0 text-[black]">SALE</p>
                </div> */}
              </div>
            </div>

            <div className="relative w-full h-[300px] md:h-[550px]">
              <Image
                className="object-cover rounded-[30px]"
                src={CourseInstructors}
                alt="Course Image"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BeginnerPhoneRepairCourseSale;
