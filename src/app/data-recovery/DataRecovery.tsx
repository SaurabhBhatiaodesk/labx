import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import MainHeading from '@/components/ManinHeading/MainHeading'
import React from 'react'

const DataRecovery = () => {
  return (
   <>
   
   <div>
   <Breadcrumb
            pageName="Data Recovery Service
"
            pageDescription="At LabX, we specialize in recovering data from a wide range of mobile devices, including phones, tablets, and other gadgets that may have suffered significant damage. However, device data recovery comes with certain limitations that customers need to be aware of before submitting a device.
"
            backgroundImage="/Images/BannerImages/mailinrepair.png"
            AdminImage="/Images/Data Recovery side.png"
             link="/coming-soon"
          />
        </div>

        <section>
          <div className=' py-4 xl:py-6'>
          <MainHeading Heading='Your Data. What Happened Is Terrible, We Can Help!'/>
          </div>
        </section>


   </>
  )
}

export default DataRecovery