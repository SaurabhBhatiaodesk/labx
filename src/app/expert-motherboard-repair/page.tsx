import dynamic from "next/dynamic";
import React from 'react'
// import ExpertMotherBoardRepair from './ExpertMotherBoardRepair'
const ExpertMotherBoardRepair = dynamic(() => import('./ExpertMotherBoardRepair'), { ssr: false });

import "./Expert.css"

const page = () => {
  return (
    <div>
      <ExpertMotherBoardRepair/>
    </div>
  )
}

export default page
