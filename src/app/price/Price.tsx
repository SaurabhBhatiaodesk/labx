"use client";
import React, { useState } from 'react';
import './price.css'
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Iphone from '../../../public/Images/about/iphone.svg'
import Oppo from '../../../public/Images/about/oppo.svg'
import Samsung from '../../../public/Images/about/Samsung.svg'
import Nokia from '../../../public/Images/about/nokia.svg'
import Image from 'next/image';
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
                  <th className="border-bottom px-4 py-2">Phone Model</th>
                  <th className="border-bottom px-4 py-2">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2">Buy Back ( Grade A )</th>
                  <th className="border-bottom px-4 py-2">Buy Back ( Grade B )</th>
                  <th className="border-bottom px-4 py-2">Grade C</th>
                  <th className="border-bottom px-4 py-2">Unqualified</th>
                  <th className="border-bottom px-4 py-2">Updated at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 15 Pro Max</td>
                  <td className="border-bottom px-4 py-2">$200</td>
                  <td className="border-bottom px-4 py-2">$200</td>
                  <td className="border-bottom px-4 py-2">$70 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 15 Pro</td>
                  <td className="border-bottom px-4 py-2">$200</td>
                  <td className="border-bottom px-4 py-2">$140</td>
                  <td className="border-bottom px-4 py-2">$60 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 15 Plus</td>
                  <td className="border-bottom px-4 py-2">$120</td>
                  <td className="border-bottom px-4 py-2">$70</td>
                  <td className="border-bottom px-4 py-2">$25 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 15</td>
                  <td className="border-bottom px-4 py-2">$120</td>
                  <td className="border-bottom px-4 py-2">$55</td>
                  <td className="border-bottom px-4 py-2">$25 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14 Pro Max</td>
                  <td className="border-bottom px-4 py-2">$170</td>
                  <td className="border-bottom px-4 py-2">$180</td>
                  <td className="border-bottom px-4 py-2">$60 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14 Pro</td>
                  <td className="border-bottom px-4 py-2">$120</td>
                  <td className="border-bottom px-4 py-2">$160</td>
                  <td className="border-bottom px-4 py-2">$50 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14 Plus</td>
                  <td className="border-bottom px-4 py-2">$90</td>
                  <td className="border-bottom px-4 py-2">$60</td>
                  <td className="border-bottom px-4 py-2">$35 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 14</td>
                  <td className="border-bottom px-4 py-2">$90</td>
                  <td className="border-bottom px-4 py-2">$60</td>
                  <td className="border-bottom px-4 py-2">$25 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13 Pro Max</td>
                  <td className="border-bottom px-4 py-2">$140</td>
                  <td className="border-bottom px-4 py-2">$130</td>
                  <td className="border-bottom px-4 py-2">$45 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13 Pro</td>
                  <td className="border-bottom px-4 py-2">$120</td>
                  <td className="border-bottom px-4 py-2">$110</td>
                  <td className="border-bottom px-4 py-2">$35 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13</td>
                  <td className="border-bottom px-4 py-2">$55</td>
                  <td className="border-bottom px-4 py-2">$50</td>
                  <td className="border-bottom px-4 py-2">$20 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 13 Mini</td>
                  <td className="border-bottom px-4 py-2">$55</td>
                  <td className="border-bottom px-4 py-2">$50</td>
                  <td className="border-bottom px-4 py-2">$20 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12 Pro Max</td>
                  <td className="border-bottom px-4 py-2">$70</td>
                  <td className="border-bottom px-4 py-2">$70</td>
                  <td className="border-bottom px-4 py-2">$20 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12 Pro</td>
                  <td className="border-bottom px-4 py-2">$50</td>
                  <td className="border-bottom px-4 py-2">$35</td>
                  <td className="border-bottom px-4 py-2">$15 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12</td>
                  <td className="border-bottom px-4 py-2">$50</td>
                  <td className="border-bottom px-4 py-2">$35</td>
                  <td className="border-bottom px-4 py-2">$15 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 12 Mini</td>
                  <td className="border-bottom px-4 py-2">$50</td>
                  <td className="border-bottom px-4 py-2">$45</td>
                  <td className="border-bottom px-4 py-2">$20 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 11 Pro Max</td>
                  <td className="border-bottom px-4 py-2">$50</td>
                  <td className="border-bottom px-4 py-2">$35</td>
                  <td className="border-bottom px-4 py-2">$15 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 11 Pro</td>
                  <td className="border-bottom px-4 py-2">$40</td>
                  <td className="border-bottom px-4 py-2">$30</td>
                  <td className="border-bottom px-4 py-2">$15 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone 11 </td>
                  <td className="border-bottom px-4 py-2">X</td>
                  <td className="border-bottom px-4 py-2">X</td>
                  <td className="border-bottom px-4 py-2">X </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone XS Max</td>
                  <td className="border-bottom px-4 py-2">$40</td>
                  <td className="border-bottom px-4 py-2">$40</td>
                  <td className="border-bottom px-4 py-2">$20 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone XS</td>
                  <td className="border-bottom px-4 py-2">$35</td>
                  <td className="border-bottom px-4 py-2">$20</td>
                  <td className="border-bottom px-4 py-2">$10 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone X</td>
                  <td className="border-bottom px-4 py-2">$35</td>
                  <td className="border-bottom px-4 py-2">$20</td>
                  <td className="border-bottom px-4 py-2">$10 </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
                </tr>
                <tr>
                <td className="border-bottom px-4 py-2">iPhone XR</td>
                  <td className="border-bottom px-4 py-2">X</td>
                  <td className="border-bottom px-4 py-2">X</td>
                  <td className="border-bottom px-4 py-2">X </td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
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
                  <th className="border-bottom px-4 py-2">Device Modal</th>
                  <th className="border-bottom px-4 py-2">Grade A</th>
                  <th className="border-bottom px-4 py-2">Grade B</th>
                  <th className="border-bottom px-4 py-2">Grade C</th>
                  <th className="border-bottom px-4 py-2">Grade D</th>
                  <th className="border-bottom px-4 py-2">Unqualified</th>
                  <th className="border-bottom px-4 py-2">Updated at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">Data 1</td>
                  <td className="border-bottom px-4 py-2">Data 2</td>
                  <td className="border-bottom px-4 py-2">Data 3</td>
                  <td className="border-bottom px-4 py-2">Data 4</td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
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
                  <th className="border-bottom px-4 py-2">Device Modal</th>
                  <th className="border-bottom px-4 py-2">Grade A</th>
                  <th className="border-bottom px-4 py-2">Grade B</th>
                  <th className="border-bottom px-4 py-2">Grade C</th>
                  <th className="border-bottom px-4 py-2">Grade D</th>
                  <th className="border-bottom px-4 py-2">Unqualified</th>
                  <th className="border-bottom px-4 py-2">Updated at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">Data 1</td>
                  <td className="border-bottom px-4 py-2">Data 2</td>
                  <td className="border-bottom px-4 py-2">Data 3</td>
                  <td className="border-bottom px-4 py-2">Data 4</td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
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
                  <th className="border-bottom px-4 py-2">Device Modal</th>
                  <th className="border-bottom px-4 py-2">Grade A</th>
                  <th className="border-bottom px-4 py-2">Grade B</th>
                  <th className="border-bottom px-4 py-2">Grade C</th>
                  <th className="border-bottom px-4 py-2">Grade D</th>
                  <th className="border-bottom px-4 py-2">Unqualified</th>
                  <th className="border-bottom px-4 py-2">Updated at</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">Data 1</td>
                  <td className="border-bottom px-4 py-2">Data 2</td>
                  <td className="border-bottom px-4 py-2">Data 3</td>
                  <td className="border-bottom px-4 py-2">Data 4</td>
                  <td className="border-bottom px-4 py-2">Data 5</td>
                  <td className="border-bottom px-4 py-2">Data 6</td>
                  <td className="border-bottom px-4 py-2">Data 7</td>
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
       <Breadcrumb
          pageName="Price List" 
          pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
          backgroundImage="/Images/BannerImages/price.png"
          AdminImage="/Images/money.png"
          link="/coming-soon"
        />
        <section className="pt-8">
            <div className="container">
                <div className="text-center">
                    <h2>Prices to Repair Your Devices</h2>
                    <p>Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing.</p>
                </div>
            </div>
        </section>

        <section className="pt-8">
        <div className="container p-4">
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
          <Image width={100} height={100} src={tab.image} className='logo__img' />   
          </button>
        ))}
      </div>

      {/* {/ Tab Content /} */}
      <div className=" rounded-md p-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
        </section>
     </>
  );
};

export default Price;
