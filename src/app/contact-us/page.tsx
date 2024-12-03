import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import React from 'react'
import ContactUsForm from './ContactUsForm'

const page = () => {
  return (
   <>
   
   <div>
   <Breadcrumb
        pageName="Contact Us"
        pageDescription="Contact Us For More Information "
        backgroundImage="/Images/BannerImages/contact-us.png"
        AdminImage="/Images/contactus.svg"
        link="/coming-soon"
      />

      <div>
        <ContactUsForm/>
      </div>
    
    </div></>
  )
}

export default page