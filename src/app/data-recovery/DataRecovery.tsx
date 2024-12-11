import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import MainHeading from '@/components/ManinHeading/MainHeading'
import React from 'react'
import GoogleReview from '@/components/GoogleReviews/GoogleReviews';

const DataRecovery = () => {
  return (
   <>
   
   <div>
   <Breadcrumb
            pageName="Data Recovery"
            pageDescription="At LabX, we specialize in recovering data from a wide range of mobile devices, including phones, tablets, and other gadgets that may have suffered significant damage. However, device data recovery comes with certain limitations that customers need to be aware of before submitting a device."
            backgroundImage="/Images/BannerImages/mailinrepair.png"
            AdminImage="/Images/Data Recovery side.png"
             link="/contact-us"
          />
        </div>

        <section style={{background:'#0B0B0B'}}>
          <div className='container py-4 xl:py-6'> 
            <div className="text-center">
            <h2>Your Data. What Happened Is Terrible, We Can Help!</h2>
          <p>The only path to data recovery is getting the phone to work again. We bring phones back from the dead every day. There is no manual, no instruction book, for what we do. We are the motherboard whisperers.</p>
            </div>
            <div className="video__section flex justify-center">
            <iframe width="1000" height="550"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>

           
            </div>
            <div className="mt-5 text-center m-auto"> 
              <button className='btn'>GET STARTED</button>
            </div>
          </div>
        </section>
      <div className="process_section pt-8 pb-8">
        <div className="container">
          <div className="main__cart_section">
        <div className="card_box">
            <b className='one'>1</b>
            <p>Start Repair Request: You will fill out a request here and tell us about the history of your phone and what happened to it. Provide as much detail as you can to help us in our detective work to find the problem and get your data back. We will reply with a formal estimate via email within 1 business day.</p>
          </div>
          <div className="card_box hoverBlue">
          <b className='two'>2</b>
          <p>Mail It In: Follow the mail in instructions provided in your estimate email and send your device to us. We will match your device to your request and let you know that we received your device.</p>
          </div>
          <div className="card_box hoverGreen">
          <b className='three'>3</b>
          <p>Wait For Results: When your phone is recovered you’ll get the “great news!” email from us with details on your recovery. We will send an invoice you can pay online, and then your phone and drive will be shipped home with a tracking number.</p>
          </div>
        </div>
        </div>
      </div>
    <GoogleReview />
   </>
  )
}

export default DataRecovery