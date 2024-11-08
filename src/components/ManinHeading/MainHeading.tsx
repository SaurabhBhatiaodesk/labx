// import React from 'react';

// interface MainHeadingProps {
//     Heading: string;
//     color?: string; // Optional color prop
// }

// const MainHeading: React.FC<MainHeadingProps> = ({ Heading, color }) => {
//   return (
//     <div>
//       <h2 className="text-center" style={{ color: color || 'inherit' }} >
//         {Heading}
//       </h2>
//     </div>
//   );
// };

// export default MainHeading;


"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface MainHeadingProps {
  Heading: string;
  color?: string; // Optional color prop
  animation?: string; // Optional animation prop
}

const MainHeading: React.FC<MainHeadingProps> = ({ Heading, color, animation }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div data-aos={animation || 'fade-up'}>
      <h2 className="text-center" style={{ color: color || 'inherit' }}>
        {Heading}
      </h2>
    </div>
  );
};

export default MainHeading;

