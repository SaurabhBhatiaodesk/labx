// import React from "react";

// interface TitleProps {
//     Title: string;
// }

// const MainHeading: React.FC<TitleProps> = ({ Title }) => {
//   return (
//     <div className="title-text text-center xl:w-[50%] lg:w-[70%] md:w-[90%] m-auto py-3">
//       <p>{Title}</p>
//     </div>
//   );
// };

// export default MainHeading;


import React from 'react'
interface TitleProps {
    Title: string;
    color?:string;
}

const MainTitle: React.FC<TitleProps> = ({ Title , color }) => {
  return (
   <>
    <div className="title-text text-center 3xl:w-[70%] lg:w-[70%] 2xl:w-[60%] md:w-[90%] m-auto py-3">
      <p style={{ color: color || 'inherit' }}>
        {Title}</p>
     </div>
   </>
  )
}

export default MainTitle
// sm: '100%',
// md: '100%',
// lg: '1024px',
// xl: '1280px',
// '2xl': '1440px',
// '3xl': '1600px',
// '4xl': '1920px',