import dynamic from "next/dynamic";
import React from "react";
const DataRecovery = dynamic(() => import('./DataRecovery'), { ssr: false });

// import DataRecovery from "./DataRecovery";
import "./data.css";

const page = () => {
  return (
    <>
      <div>
        <DataRecovery />
      </div>
    </>
  );
};

export default page;
