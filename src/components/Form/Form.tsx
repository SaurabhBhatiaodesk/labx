import React from 'react'
import MainHeading from '../ManinHeading/MainHeading'
import FormCode from './FormCode'

const Form = () => {

    
  return (
   <>
   <div className="py-4 lg:py-[20px]" >
   <div className='container '>
    <div className="form-section">
       <MainHeading Heading='Ready to Kickstart Your Career in Mobile Repair? Enquire Now!'/>
       <div className='form'>
        <FormCode/>
       </div>
    </div>
   </div>
   </div>
   
   </>
  )
}

export default Form