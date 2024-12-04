"use client"; // Add this at the top to mark this as a client component
import MainTitle from '@/components/MainTitle/MainTitle';
import MainHeading from '@/components/ManinHeading/MainHeading';
import React from 'react';

const HowWorks = () => {
  const steps = [
    {
      title: 'Review Our Pricing',
      content:
        'Check out our Price List for no-fix, no-fee pricing on common logic board issues. If your issue isn’t listed, contact us for a custom quote. Please note, a $66 service fee is charged for any device that has undergone a previous repair attempt by another technician, whether or not we’re able to fix the device and it includes B2B repair.',
    },
    {
      title: 'Start Mail in Repair',
      content:
        'Click on "Start Repair" and provide details about your device and its issue, including its repair history (e.g., prior repairs, water damage). You’ll receive a quote and mailing instructions within 24 hours.',
    },
    {
      title: 'For Immediate Help Call Directly',
      content:
        'For immediate assistance with your mobile repair needs, call us directly. Our team is ready to guide you through the mail-in phone repairs process and get your device fixed fast.',
    },
    {
      title: 'Post Phone for Repair',
      content:
        'Once your repair is pre-approved, follow the Mailing Instructions to ship your device to us.',
    },
    {
      title: 'Device Intake and Repair',
      content:
        'Upon receiving your device, we’ll send an automated confirmation email and place your device in the repair queue. If we have questions or updates during the repair, we’ll notify you via email. Otherwise, you’ll receive a notification once your device is fixed.',
    },
    {
      title: 'Payment & Return',
      content:
        'After your device is repaired, we’ll send an invoice with a secure payment link (via PayPal or credit card). Once payment is complete, we’ll ship your device back to you with tracking information to follow its return journey.',
    },
  ];

  const hoverGradients = [
    'linear-gradient(74deg, #56c1c1, #000000)',
    'linear-gradient(74deg, #f35520c0, #000000)',
    'linear-gradient(74deg, #d5fd33a1, #000000)',
    'linear-gradient(74deg, #cf2362a7, #000000)',
    'linear-gradient(74deg, #2052e8a5, #000000)',
  ];

  return (
    <div className='py-5'>
      <div className="container">
        <div>
          <MainHeading Heading='How Mail in Phone Repair Service Work?

' />
          {/* <MainTitle Title='Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing.' /> */}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-5 xl:gap-4 gap-3 my-4'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='p-4 bg-gray-800 rounded-md shadow-lg text-white transition-all duration-300 border-[1px] border-[#5b5b5b99]'
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = hoverGradients[index % hoverGradients.length];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1f1f1f';
              }}
            >
              <h3 className='text-lg font-bold mb-2'>{step.title}</h3>
              <p className='text-sm'>{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
