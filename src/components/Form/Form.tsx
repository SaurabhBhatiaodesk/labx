import React from 'react'
import MainHeading from '../ManinHeading/MainHeading'
import FormCode from './FormCode'

const Form = () => {

    
  return (
   <>
   <div className="py-4 lg:py-[20px]" >
   <div className='container '>
    <div className="form-section">
       <MainHeading Heading='Inquire about the Training Program/Course to learn "How to Repair Phones/Tablets" and express your interest.'/>
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