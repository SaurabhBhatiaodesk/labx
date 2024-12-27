import dynamic from "next/dynamic";
import React from 'react'
// import MasterMotherboardRepair from './MasterMotherboardRepair'
const MasterMotherboardRepair = dynamic(() => import('./MasterMotherboardRepair'), { ssr: false });
const page = () => {
  return (
    <div>
        <MasterMotherboardRepair/>
    </div>
  )
}

export default page
