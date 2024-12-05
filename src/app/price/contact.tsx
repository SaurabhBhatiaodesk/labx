"use client";
import React, { useState } from 'react';
import Price from './Price'
import Device from "../../../public/Images/about/device.svg"
import GoogleReview from "@/components/GoogleReviews/what-we-do-review";
import Image from 'next/image';

const Page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value.trim() });
      };
  return (
  <>
  
  <div className='container_small bg-black pt-8 pb-6'>
    <h2 className='text-center mb-5'>Contact Information</h2>

    <form>
        <div className="grid grid-cols-1 gap-6">
          <div className='grid grid-cols-2 gap-6'>
            <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white-700">First Name <span className='text-red-700'>*</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-white-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transprint"
              required
            />
          </div>
          <div> 
            <label htmlFor="lastName" className="block text-sm font-medium text-white-700">Last Name <span className='text-red-700'>*</span></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-white-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transprint"
              required
            />
          </div>
          </div>
          <div className='grid grid-cols-2 gap-6'>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white-700">Your Email <span className='text-red-700'>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-white-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transprint"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white-700">Your Phone Number <span className='text-red-700'>*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-white-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transprint"
              required
            />
          </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 px-3 py-2 border border-white-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transprint"
              rows={4} 
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
  </div>
  <div className='device__img text-center container pt-8 mt-5 pb-8 mb-5 relative'>
    <Image src={Device.src} alt="" className='m-auto' />
    <div className="overlap__number">
        <h2>Get Your Device Fixed Now!</h2>
        <h3>+1-800-1234567</h3>
    </div>
  </div>

  <GoogleReview />
  </>
  )
}

export default Page