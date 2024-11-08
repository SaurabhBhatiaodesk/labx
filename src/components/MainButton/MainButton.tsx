import React from 'react';
import Link from 'next/link';

interface MainButtonProps {
  MainButton: string;
  link?: string; // Optional link prop
}

const MainButton: React.FC<MainButtonProps> = ({ MainButton, link }) => {
  return (
    <div>
      {link ? (
        <Link href={link}>
          <button className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-base xl:text-lg uppercase text-black py-3 xl:py-3 px-4 rounded-[50px] hover:from-[#EDE574] hover:to-[#E1F5C4] transition duration-300 ease-in-out">
            {MainButton}
          </button>
        </Link>
      ) : (
        <button className="bg-gradient-to-r from-[#E1F5C4] to-[#EDE574] text-base xl:text-lg uppercase text-black py-3 xl:py-3 px-4 rounded-[50px] hover:from-[#EDE574] hover:to-[#E1F5C4] transition duration-300 ease-in-out">
          {MainButton}
        </button>
      )}
    </div>
  );
};

export default MainButton;


// this is second way comment code >>>

// import React from 'react';


// interface MainHeadingProps {
//     Heading: string;
// }

// const MainHeading = ({ Heading }: MainHeadingProps) => {
//   return (
//     <div>
//       <h2 className="text-center">{Heading}</h2>
//     </div>
//   );
// };

// export default MainHeading;



