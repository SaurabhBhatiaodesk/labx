import React from 'react'
import PS5Banner from './PS5Banner'
import MainHeading from '@/components/ManinHeading/MainHeading'
import MainTitle from '@/components/MainTitle/MainTitle'
import PS5RepairsSydney from './PS5RepairsSydney'
import PS5ExpertRepair from './PS5ExpertRepair'
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import Accordion from '@/components/AskusQuestion/AskusQuestion'
import PS5Sydney from './PS5Sydney'
import StaperForm from '../mail-in-repair/StaperForm'

const PS5Repairs = () => {
  return (
    <div>


   <PS5Banner/>
 <div className='bg-[#0b0b0b] md:py-10 py-8'>
 <div className=' container'>
   <MainHeading Heading="How Mail-In PS5 Repair Works?" />
   <MainTitle Title={`Simply package your PS5 securely and ship it to us. Once we receive your console, our expert technicians will diagnose the issue and carry out the necessary repairs using high-quality parts. After a thorough quality check, we’ll quickly ship your fully functional PS5 back to you so you can resume gaming without delay. `}/>
   </div>
 </div>
 <StaperForm/>
 <PS5RepairsSydney/>
 <PS5ExpertRepair/>
 <PS5Sydney/>
 <GoogleReviews />
<Accordion/>
    
    </div>
  )
}

export default PS5Repairs