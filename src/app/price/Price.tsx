// "use client";
// import React, { useState } from 'react';
// import './price.css'
// import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
// import Iphone from '../../../public/Images/about/iphone.svg'
// import Oppo from '../../../public/Images/about/oppo.svg'
// import Samsung from '../../../public/Images/about/Samsung.svg'
// import Nokia from '../../../public/Images/about/nokia.svg'
// import Image from 'next/image';
// import MainHeading from '@/components/ManinHeading/MainHeading';
// import { text } from 'stream/consumers';
// const Price = () => {

//     const tabs = [
//         {
//           id: 1,
//           label: "IPHONE",
//         text:'iPhone',
//           content: (

//             <table className="table min-w-full table-auto">

//               <thead>
//                 <tr>
//                   <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
//                   <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
//                   <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade A )</th>
//                   <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade B )</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-bottom px-4 py-2">iPhone 15 Pro Max</td>
//                   <td className="border-bottom px-4 py-2 text-center">$200</td>
//                   <td className="border-bottom px-4 py-2 text-center">$200</td>
//                   <td className="border-bottom px-4 py-2 text-center">$70 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 15 Pro</td>
//                   <td className="border-bottom px-4 py-2 text-center">$200</td>
//                   <td className="border-bottom px-4 py-2  text-center">$140</td>
//                   <td className="border-bottom px-4 py-2 text-center">$60 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 15 Plus</td>
//                   <td className="border-bottom px-4 py-2 text-center">$120</td>
//                   <td className="border-bottom px-4 py-2 text-center">$70</td>
//                   <td className="border-bottom px-4 py-2 text-center">$25 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 15</td>
//                   <td className="border-bottom px-4 py-2 text-center">$120</td>
//                   <td className="border-bottom px-4 py-2 text-center">$55</td>
//                   <td className="border-bottom px-4 py-2 text-center">$25 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 14 Pro Max</td>
//                   <td className="border-bottom px-4 py-2 text-center">$170</td>
//                   <td className="border-bottom px-4 py-2 text-center">$180</td>
//                   <td className="border-bottom px-4 py-2 text-center">$60 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 14 Pro</td>
//                   <td className="border-bottom px-4 py-2 text-center">$120</td>
//                   <td className="border-bottom px-4 py-2 text-center">$160</td>
//                   <td className="border-bottom px-4 py-2 text-center">$50 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 14 Plus</td>
//                   <td className="border-bottom px-4 py-2 text-center">$90</td>
//                   <td className="border-bottom px-4 py-2 text-center">$60</td>
//                   <td className="border-bottom px-4 py-2 text-center">$35 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 14</td>
//                   <td className="border-bottom px-4 py-2 text-center">$90</td>
//                   <td className="border-bottom px-4 py-2 text-center">$60</td>
//                   <td className="border-bottom px-4 py-2 text-center">$25 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 13 Pro Max</td>
//                   <td className="border-bottom px-4 py-2 text-center">$140</td>
//                   <td className="border-bottom px-4 py-2 text-center">$130</td>
//                   <td className="border-bottom px-4 py-2 text-center">$45 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 13 Pro</td>
//                   <td className="border-bottom px-4 py-2 text-center">$120</td>
//                   <td className="border-bottom px-4 py-2 text-center">$110</td>
//                   <td className="border-bottom px-4 py-2 text-center">$35 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 13</td>
//                   <td className="border-bottom px-4 py-2 text-center">$55</td>
//                   <td className="border-bottom px-4 py-2 text-center">$50</td>
//                   <td className="border-bottom px-4 py-2 text-center">$20 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 13 Mini</td>
//                   <td className="border-bottom px-4 py-2 text-center">$55</td>
//                   <td className="border-bottom px-4 py-2 text-center">$50</td>
//                   <td className="border-bottom px-4 py-2 text-center">$20 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 12 Pro Max</td>
//                   <td className="border-bottom px-4 py-2 text-center">$70</td>
//                   <td className="border-bottom px-4 py-2 text-center">$70</td>
//                   <td className="border-bottom px-4 py-2 text-center">$20 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 12 Pro</td>
//                   <td className="border-bottom px-4 py-2 text-center">$50</td>
//                   <td className="border-bottom px-4 py-2 text-center">$35</td>
//                   <td className="border-bottom px-4 py-2 text-center">$15 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 12</td>
//                   <td className="border-bottom px-4 py-2 text-center">$50</td>
//                   <td className="border-bottom px-4 py-2 text-center">$35</td>
//                   <td className="border-bottom px-4 py-2 text-center">$15 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 12 Mini</td>
//                   <td className="border-bottom px-4 py-2 text-center">$50</td>
//                   <td className="border-bottom px-4 py-2 text-center">$45</td>
//                   <td className="border-bottom px-4 py-2 text-center">$20 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 11 Pro Max</td>
//                   <td className="border-bottom px-4 py-2 text-center">$50</td>
//                   <td className="border-bottom px-4 py-2 text-center">$35</td>
//                   <td className="border-bottom px-4 py-2 text-center">$15 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 11 Pro</td>
//                   <td className="border-bottom px-4 py-2 text-center">$40</td>
//                   <td className="border-bottom px-4 py-2 text-center">$30</td>
//                   <td className="border-bottom px-4 py-2 text-center">$15 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone 11 </td>
//                   <td className="border-bottom px-4 py-2 text-center">X</td>
//                   <td className="border-bottom px-4 py-2 text-center">X</td>
//                   <td className="border-bottom px-4 py-2 text-center">X </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone XS Max</td>
//                   <td className="border-bottom px-4 py-2 text-center">$40</td>
//                   <td className="border-bottom px-4 py-2 text-center">$40</td>
//                   <td className="border-bottom px-4 py-2 text-center">$20 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone XS</td>
//                   <td className="border-bottom px-4 py-2 text-center">$35</td>
//                   <td className="border-bottom px-4 py-2 text-center">$20</td>
//                   <td className="border-bottom px-4 py-2 text-center">$10 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone X</td>
//                   <td className="border-bottom px-4 py-2 text-center">$35</td>
//                   <td className="border-bottom px-4 py-2 text-center">$20</td>
//                   <td className="border-bottom px-4 py-2 text-center">$10 </td>

//                 </tr>
//                 <tr>
//                 <td className="border-bottom px-4 py-2">iPhone XR</td>
//                   <td className="border-bottom px-4 py-2 text-center">X</td>
//                   <td className="border-bottom px-4 py-2 text-center">X</td>
//                   <td className="border-bottom px-4 py-2 text-center">X </td>

//                 </tr>
//                 {/* Add more rows here if needed */}
//               </tbody>
//             </table>
//           )
//         },
//         {
//           id: 2,
//           label: "iPad",
//           text:'iPad',
//           content: (
//               <table className="table min-w-full table-auto">
//               <thead>
//                 <tr> 
//                   <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
//                   <th className="border-bottom px-4 py-2 text-center">Grade A</th>
//                   <th className="border-bottom px-4 py-2 text-center">Grade B</th>
//                   <th className="border-bottom px-4 py-2 text-center">Grade C</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-bottom px-4 py-2 text-left">Data 1</td>
//                   <td className="border-bottom px-4 py-2 text-center ">Data 2</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 3</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 4</td>

//                 </tr>
//                 {/* Add more rows here if needed */}
//               </tbody>
//             </table>
//           )
//         },
//         {
//           id: 3,
//           label: "Samsung Phone",
//           text:'Samsung Phone',
//           content: (
//               <table className="table min-w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
//                   <th className="border-bottom px-4 py-2">Grade A</th>
//                   <th className="border-bottom px-4 py-2">Grade B</th>
//                   <th className="border-bottom px-4 py-2">Grade C</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-bottom px-4 py-2">Data 1</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 2</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 3</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 4</td>

//                 </tr>
//                 {/* Add more rows here if needed */}
//               </tbody>
//             </table>
//           )
//         },
//         {
//           id: 4,
//           label: "Samsung Tablet",
//           text:'Samsung Tablet',
//           content: (
//               <table className="table min-w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
//                   <th className="border-bottom px-4 py-2">Grade A</th>
//                   <th className="border-bottom px-4 py-2">Grade B</th>
//                   <th className="border-bottom px-4 py-2">Grade C</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-bottom px-4 py-2">Data 1</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 2</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 3</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 4</td>

//                 </tr>
//               </tbody>
//             </table>
//           )
//         },
//         {
//           id: 5,
//           label: "iWatch ",
//           text:'iWatch ',
//           content: (
//               <table className="table min-w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
//                   <th className="border-bottom px-4 py-2">Grade A</th>
//                   <th className="border-bottom px-4 py-2">Grade B</th>
//                   <th className="border-bottom px-4 py-2">Grade C</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-bottom px-4 py-2">Data 1</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 2</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 3</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 4</td>

//                 </tr>
//               </tbody>
//             </table>
//           )
//         },
//         {
//           id: 6,
//           label: "Oppo",
//           text:'Oppo',
//           content: (
//               <table className="table min-w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
//                   <th className="border-bottom px-4 py-2">Grade A</th>
//                   <th className="border-bottom px-4 py-2">Grade B</th>
//                   <th className="border-bottom px-4 py-2">Grade C</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-bottom px-4 py-2">Data 1</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 2</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 3</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 4</td>

//                 </tr>
//               </tbody>
//             </table>
//           )
//         },
//         {
//           id: 6,
//           label: "Goggle",
//           text:'Goggle',
//           content: (
//               <table className="table min-w-full table-auto">
//               <thead>
//                 <tr>
//                   <th className="border-bottom px-4 py-2 text-left">Device Modal</th>
//                   <th className="border-bottom px-4 py-2">Grade A</th>
//                   <th className="border-bottom px-4 py-2">Grade B</th>
//                   <th className="border-bottom px-4 py-2">Grade C</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-bottom px-4 py-2">Data 1</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 2</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 3</td>
//                   <td className="border-bottom px-4 py-2 text-center">Data 4</td>

//                 </tr>
//               </tbody>
//             </table>
//           )
//         },

//       ];

//       const [activeTab, setActiveTab] = useState(tabs[0].id);

//   return (
//      <>


//         <section className="pt-8">
//         <div className="max-container p-4">

//       <div className="flex flex-wrap justify-center   space-x-2 mb-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`px-3 py-2 rounded-full text-sm font-medium transition-colors mb-3 ${
//               activeTab === tab.id
//                 ? "bg-[#EDE574] text-black"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-black"
//             }`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//           <span>{tab.text}</span>
//           </button>
//         ))}
//       </div>
//       <div className=" rounded-md p-4">
//         <div className='flex justify-end'><h4 className='text-primary lg:text-lg text-sm  p-[8px] w-fit'>
//         Last update on :17/12/24
//           </h4></div>
//         {tabs.find((tab) => tab.id === activeTab)?.content}
//       </div>
//     </div>
//         </section>
//      </>
//   );
// };

// export default Price;



import React, { useState } from "react";
import './price.css'
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import MainHeading from "@/components/ManinHeading/MainHeading";

const Pricing: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);


  // Data for the Pricing page
  const heading = "Our Services and Pricing";
  const categories = [
    {
      id: 0,
      category: "iPhone",
      accordionData: [
        {
          title: "iPhone 15 Series",
          content: (
            <>
              <table className="table min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
                    <th className="border-bottom px-4 py-2">Refurb price ($AUD)</th>
                    <th className="border-bottom px-4 py-2">Buy Back ( Grade A )</th>
                    <th className="border-bottom px-4 py-2">Buy Back ( Grade B )</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-bottom px-4 py-2">iPhone 15 Pro Max</td>
                    <td className="border-bottom px-4 py-2 text-center">$200</td>
                    <td className="border-bottom px-4 py-2 text-center">$200</td>
                    <td className="border-bottom px-4 py-2 text-center">$70</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">iPhone 15 Pro</td>
                    <td className="border-bottom px-4 py-2 text-center">$200</td>
                    <td className="border-bottom px-4 py-2 text-center">$140</td>
                    <td className="border-bottom px-4 py-2 text-center">$60</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">iPhone 15 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$120</td>
                    <td className="border-bottom px-4 py-2 text-center">$70</td>
                    <td className="border-bottom px-4 py-2 text-center">$25</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">iPhone 15</td>
                    <td className="border-bottom px-4 py-2 text-center">$120</td>
                    <td className="border-bottom px-4 py-2 text-center">$55</td>
                    <td className="border-bottom px-4 py-2 text-center">$25</td>
                  </tr>
                </tbody>
              </table>


            </>
          ),
        },
        {
          title: "iPhone 14 Series",
          content: (
            <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
                  <th className="border-bottom px-4 py-2">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2">Buy Back ( Grade A )</th>
                  <th className="border-bottom px-4 py-2">Buy Back ( Grade B )</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 14 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$170</td>
                  <td className="border-bottom px-4 py-2 text-center">$180</td>
                  <td className="border-bottom px-4 py-2 text-center">$60</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 14 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$160</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 14 Plus</td>
                  <td className="border-bottom px-4 py-2 text-center">$90</td>
                  <td className="border-bottom px-4 py-2 text-center">$60</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 14</td>
                  <td className="border-bottom px-4 py-2 text-center">$90</td>
                  <td className="border-bottom px-4 py-2 text-center">$60</td>
                  <td className="border-bottom px-4 py-2 text-center">$25</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "iPhone 13 Series",
          content: (
            <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
                  <th className="border-bottom px-4 py-2">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2">Buy Back ( Grade A )</th>
                  <th className="border-bottom px-4 py-2">Buy Back ( Grade B )</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 13 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$140</td>
                  <td className="border-bottom px-4 py-2 text-center">$130</td>
                  <td className="border-bottom px-4 py-2 text-center">$45</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 13 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$110</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 13</td>
                  <td className="border-bottom px-4 py-2 text-center">$55</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 13 Mini</td>
                  <td className="border-bottom px-4 py-2 text-center">$55</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "iPhone 12 Series",
          content: (
            <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
                  <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade A)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 12 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$70</td>
                  <td className="border-bottom px-4 py-2 text-center">$70</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 12 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 12</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 12 Mini</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$45</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "iPhone 11 Series",
          content: (
            <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
                  <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade A)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 11 Pro Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 11 Pro</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$30</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone 11</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "iPhone X Series",
          content: (
            <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Phone Model</th>
                  <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade A)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone XS Max</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone XS</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                  <td className="border-bottom px-4 py-2 text-center">$10</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone X</td>
                  <td className="border-bottom px-4 py-2 text-center">$35</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                  <td className="border-bottom px-4 py-2 text-center">$10</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPhone XR</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                  <td className="border-bottom px-4 py-2 text-center">X</td>
                </tr>
              </tbody>
            </table>
          ),
        },


      ],
    },
    // i pad data
    {
      id: 1,
      category: "iPad",
      accordionData: [
        {
          title: "iPad Air Series",
          content: (
            <>
              <table className="table min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left">Device Model</th>
                    <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
                    <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade A)</th>
                    <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade B)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 2 9.7" (2014)</td>
                    <td className="border-bottom px-4 py-2 text-center">$80</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 3 10.5" (2019)</td>
                    <td className="border-bottom px-4 py-2 text-center">$80</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 4 11" (2020)</td>
                    <td className="border-bottom px-4 py-2 text-center">$90</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 5 11" (2022)</td>
                    <td className="border-bottom px-4 py-2 text-center">$90</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$25</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 6 11" (2024)</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                </tbody>
              </table>


            </>
          ),
        },
        {
          title: "iPad Pro Series",
          content: (
            <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Device Model</th>
                  <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade A)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 9.7" (2016)</td>
                  <td className="border-bottom px-4 py-2 text-center">$80</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                  <td className="border-bottom px-4 py-2 text-center">$10</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 10.5" (2017)</td>
                  <td className="border-bottom px-4 py-2 text-center">$90</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPad Pro 11 1st (2018)</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPad Pro 11 2nd (2020)</td>
                  <td className="border-bottom px-4 py-2 text-center">$120</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPad Pro 11 3rd (2021)</td>
                  <td className="border-bottom px-4 py-2 text-center">$140</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPad Pro 11 4th (2022)</td>
                  <td className="border-bottom px-4 py-2 text-center">$140</td>
                  <td className="border-bottom px-4 py-2 text-center">$40</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">iPad Pro 13 (2024)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "iPad Pro 12.9",
          content: (
            <table className="table min-w-full table-auto">
              <thead>
                <tr>
                  <th className="border-bottom px-4 py-2 text-left">Device Model</th>
                  <th className="border-bottom px-4 py-2 text-center">Refurb price ($AUD)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade A)</th>
                  <th className="border-bottom px-4 py-2 text-center">Buy Back (Grade B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 12.9 1st (2015)</td>
                  <td className="border-bottom px-4 py-2 text-center">$150</td>
                  <td className="border-bottom px-4 py-2 text-center">$30</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 12.9 2nd (2017)</td>
                  <td className="border-bottom px-4 py-2 text-center">$200</td>
                  <td className="border-bottom px-4 py-2 text-center">$80</td>
                  <td className="border-bottom px-4 py-2 text-center">$30</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 12.9 3rd (2018)</td>
                  <td className="border-bottom px-4 py-2 text-center">$150</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 12.9 4th (2020)</td>
                  <td className="border-bottom px-4 py-2 text-center">$150</td>
                  <td className="border-bottom px-4 py-2 text-center">$50</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 12.9 5th (2021)</td>
                  <td className="border-bottom px-4 py-2 text-center">$180</td>
                  <td className="border-bottom px-4 py-2 text-center">$70</td>
                  <td className="border-bottom px-4 py-2 text-center">$25</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 12.9 6th (2022)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                </tr>
              </tbody>
            </table>
          ),
        },
      ],
    },
    {
      id: 2,
      category: "Samsung Phone",
      accordionData: [
        {
          title: "S Ultra Series",
          content: (
            <>
              <table className="table min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left">Device Model</th>
                    <th className="border-bottom px-4 py-2 text-center">Refurb price (Old Frame or No Frame)</th>
                    <th className="border-bottom px-4 py-2 text-center">Refurb price (New Frame)</th>
                    <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade A )</th>
                    <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade B )</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left"> </th>
                    <th className="border-bottom px-4 py-2 text-center addontext">With Existing Customer's Old Frame (Bazel) Or No Frame</th>
                    <th className="border-bottom px-4 py-2 text-center addontext">With Brand New Frame (Bazel)</th>
                    <th className="border-bottom px-4 py-2 text-center"></th>
                    <th className="border-bottom px-4 py-2 text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-bottom px-4 py-2">S24 Ultra</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$200</td>
                    <td className="border-bottom px-4 py-2 text-center">$110</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S23 Ultra</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$200</td>
                    <td className="border-bottom px-4 py-2 text-center">$110</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S22 Ultra</td>
                    <td className="border-bottom px-4 py-2 text-center">$130</td>
                    <td className="border-bottom px-4 py-2 text-center">$180</td>
                    <td className="border-bottom px-4 py-2 text-center">$110</td>
                    <td className="border-bottom px-4 py-2 text-center">$35</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S21 Ultra</td>
                    <td className="border-bottom px-4 py-2 text-center">$120</td>
                    <td className="border-bottom px-4 py-2 text-center">$170</td>
                    <td className="border-bottom px-4 py-2 text-center">$80</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S20 Ultra</td>
                    <td className="border-bottom px-4 py-2 text-center">$120</td>
                    <td className="border-bottom px-4 py-2 text-center">$170</td>
                    <td className="border-bottom px-4 py-2 text-center">$70</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                </tbody>
              </table>


            </>
          ),
        },
        {
          title: "S Ultra Series",
          content: (
            <>
              <table className="table min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left">Device Model</th>
                    <th className="border-bottom px-4 py-2 text-center">Refurb price (Old Frame or No Frame)</th>
                    <th className="border-bottom px-4 py-2 text-center">Refurb price (New Frame)</th>
                    <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade A )</th>
                    <th className="border-bottom px-4 py-2 text-center">Buy Back ( Grade B )</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left"> </th>
                    <th className="border-bottom px-4 py-2 text-center addontext">With Existing Customer's Old Frame (Bazel) Or No Frame</th>
                    <th className="border-bottom px-4 py-2 text-center addontext">With Brand New Frame (Bazel)</th>
                    <th className="border-bottom px-4 py-2 text-center"></th>
                    <th className="border-bottom px-4 py-2 text-center"></th>
                  </tr>
                </thead>
                <tbody>
        <tr>
          <td className="border-bottom px-4 py-2">Note 20 Ultra</td>
          <td className="border-bottom px-4 py-2 text-center">$120</td>
          <td className="border-bottom px-4 py-2 text-center">$170</td>
          <td className="border-bottom px-4 py-2 text-center">$70</td>
          <td className="border-bottom px-4 py-2 text-center">$20</td>
        </tr>
        <tr>
          <td className="border-bottom px-4 py-2">Note 20</td>
          <td className="border-bottom px-4 py-2 text-center">$100</td>
          <td className="border-bottom px-4 py-2 text-center">$150</td>
          <td className="border-bottom px-4 py-2 text-center">$30</td>
          <td className="border-bottom px-4 py-2 text-center">$10</td>
        </tr>
        <tr>
          <td className="border-bottom px-4 py-2">Note 10 Plus</td>
          <td className="border-bottom px-4 py-2 text-center">$120</td>
          <td className="border-bottom px-4 py-2 text-center">$170</td>
          <td className="border-bottom px-4 py-2 text-center">$70</td>
          <td className="border-bottom px-4 py-2 text-center">$20</td>
        </tr>
        <tr>
          <td className="border-bottom px-4 py-2">Note 10</td>
          <td className="border-bottom px-4 py-2 text-center">$100</td>
          <td className="border-bottom px-4 py-2 text-center">$150</td>
          <td className="border-bottom px-4 py-2 text-center">$50</td>
          <td className="border-bottom px-4 py-2 text-center">$20</td>
        </tr>
        <tr>
          <td className="border-bottom px-4 py-2">Note 9</td>
          <td className="border-bottom px-4 py-2 text-center">$100</td>
          <td className="border-bottom px-4 py-2 text-center">$150</td>
          <td className="border-bottom px-4 py-2 text-center">$40</td>
          <td className="border-bottom px-4 py-2 text-center">$20</td>
        </tr>
        <tr>
          <td className="border-bottom px-4 py-2">Note 8</td>
          <td className="border-bottom px-4 py-2 text-center">$100</td>
          <td className="border-bottom px-4 py-2 text-center">$150</td>
          <td className="border-bottom px-4 py-2 text-center">$40</td>
          <td className="border-bottom px-4 py-2 text-center">$20</td>
        </tr>
      </tbody>
              </table>


            </>
          ),
        },
      ],
    }
  ];

  // Handle tab switching
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  // Handle toggle of FAQ accordion
  const handleToggle = (index: number) => {
    setActiveCategoryIndex(activeCategoryIndex === index ? null : index);
  };

  // Random gradient colors for tabs
  const gradientColors = [
    "linear-gradient(74deg, #56c1c1, #000000)",
    "linear-gradient(74deg, #f35520c0, #000000)",
    "linear-gradient(74deg, #d5fd33a1, #000000)",
    "linear-gradient(74deg, #A044FF, #000000)",
    "linear-gradient(74deg, #2052e8a5, #000000)",
  ];

  const getGradientColor = (index: number) => {
    return activeTabIndex === index
      ? gradientColors[index % gradientColors.length]
      : "transparent";
  };

  return (
    <div>
      <section className="py-5 xl:py-10 hidden lg:block">
        <div className="max-container">
          <div className="my-4">
            <MainHeading Heading={heading} />
          </div>

          {/* Tabs */}
          <div className="flex mb-6 flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  background: getGradientColor(index),
                }}
                className="px-2 py-2 text-white text-[18px] md:text-[18px] rounded-lg border border-gray-300 w-full sm:w-1/3 md:w-1/4 lg:w-[24%]"
                onClick={() => handleTabClick(index)}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Accordion Content */}
          <div className="space-y-4">
            {categories[activeTabIndex]?.accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                <button
                  className="flex w-full items-center justify-between py-3 text-left"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-white xl:text-[24px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
                    {item.title}
                  </h3>
                  {activeCategoryIndex === index ? (
                    <GrSubtract color="white" />
                  ) : (
                    <LuPlus color="white" />
                  )}
                </button>
                {activeCategoryIndex === index && (
                  <div className="py-4 pt-0 text-white">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
