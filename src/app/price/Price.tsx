"use client";
import React, { useState } from 'react';
import './price.css'
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Iphone from '../../../public/Images/about/iphone.svg'
import Oppo from '../../../public/Images/about/oppo.svg'
import Samsung from '../../../public/Images/about/Samsung.svg'
import Nokia from '../../../public/Images/about/nokia.svg'
import Image from 'next/image';
import MainHeading from '@/components/ManinHeading/MainHeading';
const Price = () => {

    const tabs = [
        {
          id: 1,
          label: "IPHONE",
          image:Iphone,
          content: (
            
            <table className="table min-w-full table-auto">
             
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
                  <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade A )</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade B )</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 15 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$200</td>
                  <td className="border-bottom px-4 py-2 text-center">$200</td>
                  <td className="border-bottom px-4 py-2 text-center">$70 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 15 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$200</td>
                  <td className="border-bottom px-4 py-2  text-center">$140</td>
                  <td className="border-bottom px-4 py-2 text-center">$60 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 15 Plus</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$70</td>
                  <td className="border-bottom px-4 py-2 text-center">$25 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 15</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$55</td>
                  <td className="border-bottom px-4 py-2 text-center">$25 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$170</td>
                  <td className="border-bottom px-4 py-2 text-center">$180</td>
                  <td className="border-bottom px-4 py-2 text-center">$60 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$160</td>
                  <td className="border-bottom px-4 py-2 text-center">$50 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14 Plus</td>
                  <td className="border-bottom px-4 py-2 text-center">$90</td>
                  <td className="border-bottom px-4 py-2 text-center">$60</td>
                  <td className="border-bottom px-4 py-2 text-center">$35 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14</td>
                  <td className="border-bottom px-4 py-2 text-center">$90</td>
                  <td className="border-bottom px-4 py-2 text-center">$60</td>
                  <td className="border-bottom px-4 py-2 text-center">$25 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$140</td>
                  <td className="border-bottom px-4 py-2 text-center">$130</td>
                  <td className="border-bottom px-4 py-2 text-center">$45 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$110</td>
                  <td className="border-bottom px-4 py-2 text-center">$35 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13</td>
                  <td className="border-bottom px-4 py-2 text-center">$55</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$20 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13 Mini</td>
                  <td className="border-bottom px-4 py-2 text-center">$55</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$20 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$70</td>
                  <td className="border-bottom px-4 py-2 text-center">$70</td>
                  <td className="border-bottom px-4 py-2 text-center">$20 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$15 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$15 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12 Mini</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$45</td>
                  <td className="border-bottom px-4 py-2 text-center">$20 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 11 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$15 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 11 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$30</td>
                  <td className="border-bottom px-4 py-2 text-center">$15 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 11 </td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone XS Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$20 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone XS</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                  <td className="border-bottom px-4 py-2 text-center">$10 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone X</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                  <td className="border-bottom px-4 py-2 text-center">$10 </td>
                 
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone XR</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X </td>
                 
                </tr>
                {/* Add more rows here if needed */}
              </tbody>
            </table>
          )
        },
        {
          id: 2,
          label: "SAMSUNG",
          image:Samsung,
          content: (
              <table className="table min-w-full table-auto">
              <thead>
                <tr> 
                  <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
                  <th className="border-bottom px-4 py-2 text-center">Grade A</th>
                  <th className="border-bottom px-4 py-2 text-center">Grade B</th>
                  <th className="border-bottom px-4 py-2 text-center">Grade C</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2 text-left">Data 1</td>
                  <td className="border-bottom px-4 py-2 text-center ">Data 2</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 3</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 4</td>
                 
                </tr>
                {/* Add more rows here if needed */}
              </tbody>
            </table>
          )
        },
        {
          id: 3,
          label: "NOKIA",
          image:Nokia,
          content: (
              <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
                  <th className="border-bottom px-4 py-2">Grade A</th>
                  <th className="border-bottom px-4 py-2">Grade B</th>
                  <th className="border-bottom px-4 py-2">Grade C</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">Data 1</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 2</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 3</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 4</td>
                 
                </tr>
                {/* Add more rows here if needed */}
              </tbody>
            </table>
          )
        },
        {
          id: 4,
          label: "OPPO",
          image:Oppo,
          content: (
              <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
                  <th className="border-bottom px-4 py-2">Grade A</th>
                  <th className="border-bottom px-4 py-2">Grade B</th>
                  <th className="border-bottom px-4 py-2">Grade C</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">Data 1</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 2</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 3</td>
                  <td className="border-bottom px-4 py-2 text-center">Data 4</td>
                 
                </tr>
                {/* Add more rows here if needed */}
              </tbody>
            </table>
          )
        },
      ];

      const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
     <>
     <div className='gk-hidden'>
       <Breadcrumb
          pageName="Buy Back Price List"
          pageDescription="Check the pricing for all our complex mobile phone repair services, including B2B solutions and training courses. Visit our Price List page for detailed cost information and tailored quotes based on the specific repair or course you need."
          backgroundImage="/Images/BannerImages/price.png"
          AdminImage="/Images/money.png"
          link=""
          buttonname=""
        />
        </div>
        <section className="pt-8">
            <div className="max-container">
                <div className="text-center">
                    
                    <MainHeading Heading='Get the Best Value for Your Device - LabX Buyback Prices'/>
                    <p>Select your mobile phone brand and explore our price list for various repair services we offer, from screen refurbishment to advanced motherboard repairs and more.
                    </p>
                </div>
            </div>
        </section>

        <section className="pt-8">
        <div className="max-container p-4">
      {/* {/ Tabs /} */}
      
      <div className="flex flex-wrap justify-center   space-x-2 mb-4">
       
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-colors mb-3 ${
              activeTab === tab.id
                ? "bg-[#EDE574] text-black"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
          <Image alt='' width={100} height={100} src={tab.image} className='logo__img' />
          </button>
        ))}
      </div>

      {/* {/ Tab Content /} */}
      <div className=" rounded-md p-4">
        <div className='flex justify-end'><h4 className='text-primary lg:text-lg text-sm  p-[8px] w-fit'>
        Last update on :17/12/24
          </h4></div>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
        </section>
     </>
  );
};

export default Price;
