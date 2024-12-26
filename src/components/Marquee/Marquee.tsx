"use client";
import React from "react";

const Marquee = () => {
  const messages = ["We Don’t Provide Walk-In Service"]; 
  const repetitions = 100; 

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
           animation: marquee 800s linear infinite; /* Slower animation with 60s duration */
          display: flex;
        }

        .marquee-item {
          animation: pulse 32s infinite;
          transition: all 0.3s ease-in-out;
        }

        .marquee-item:hover {
          box-shadow: 0 0 25px 10px rgba(255, 223, 101, 0.8);
        }
      `}</style>
      <section className="w-full relative h-[50px] bg-black overflow-hidden">
        <div className="absolute top-[-13px] whitespace-nowrap animate-marquee">
          <div className="flex gap-2">
            {Array.from({ length: repetitions }).map((_, repetitionIndex) =>
              messages.map((message, messageIndex) => (
                <span
                  key={`${repetitionIndex}-${messageIndex}`}
                  className="px-[10px] py-[5px] border-[1px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c9894] marquee-item lg:text-[12px] text-[10px] tracking-[1.5px] relative top-6"
                >
                  {message}
                </span>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Marquee;
