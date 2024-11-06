import React from 'react';

interface MainHeadingProps {
    Heading: string;
    color?: string; // Optional color prop
}

const MainHeading: React.FC<MainHeadingProps> = ({ Heading, color }) => {
  return (
    <div>
      <h2 className="text-center" style={{ color: color || 'inherit' }}>
        {Heading}
      </h2>
    </div>
  );
};

export default MainHeading;
