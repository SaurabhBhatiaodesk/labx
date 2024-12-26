



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
                    <td className="border-bottom px-4 py-2">Air 2 9.7&quot; (2014)</td>
                    <td className="border-bottom px-4 py-2 text-center">$80</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 3 10.5&quot; (2019)</td>
                    <td className="border-bottom px-4 py-2 text-center">$80</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 4 11&quot; (2020)</td>
                    <td className="border-bottom px-4 py-2 text-center">$90</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 5 11&quot; (2022)</td>
                    <td className="border-bottom px-4 py-2 text-center">$90</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$25</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Air 6 11&quot; (2024)</td>
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
                  <td className="border-bottom px-4 py-2">Pro 9.7&quot; (2016)</td>
                  <td className="border-bottom px-4 py-2 text-center">$80</td>
                  <td className="border-bottom px-4 py-2 text-center">$20</td>
                  <td className="border-bottom px-4 py-2 text-center">$10</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Pro 10.5&quot; (2017)</td>
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
        {
          title: "iPad Mini Series",
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
                  <td className="border-bottom px-4 py-2">Mini 4</td>
                  <td className="border-bottom px-4 py-2 text-center">$80</td>
                  <td className="border-bottom px-4 py-2 text-center">$30</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Mini 5</td>
                  <td className="border-bottom px-4 py-2 text-center">$80</td>
                  <td className="border-bottom px-4 py-2 text-center">$30</td>
                  <td className="border-bottom px-4 py-2 text-center">$15</td>
                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">Mini 6</td>
                  <td className="border-bottom px-4 py-2 text-center">$220</td>
                  <td className="border-bottom px-4 py-2 text-center">$60</td>
                  <td className="border-bottom px-4 py-2 text-center">$25</td>
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
                    <th className="border-bottom px-4 py-2 text-center addontext">With Existing Customer&apos;s Old Frame (Bazel) Or No Frame</th>
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
          title: "Note Series",
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
                    <th className="border-bottom px-4 py-2 text-center addontext">With Existing Customer&apos;s Old Frame (Bazel) Or No Frame</th>
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
        {
          title: "S Series",
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
                    <th className="border-bottom px-4 py-2 text-center addontext">With Existing Customer &apos;s Old Frame (Bazel) Or No Frame</th>
                    <th className="border-bottom px-4 py-2 text-center addontext">With Brand New Frame (Bazel)</th>
                    <th className="border-bottom px-4 py-2 text-center"></th>
                    <th className="border-bottom px-4 py-2 text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-bottom px-4 py-2">S24 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S23 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S22 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S21 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S20 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S10 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$10</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S9 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                    <td className="border-bottom px-4 py-2 text-center">$10</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S8 Plus</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                    <td className="border-bottom px-4 py-2 text-center">$10</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S24</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S23</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S22</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$50</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S21</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S20</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S10 5G</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S10</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S9</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                    <td className="border-bottom px-4 py-2 text-center">$10</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S8</td>
                    <td className="border-bottom px-4 py-2 text-center">$100</td>
                    <td className="border-bottom px-4 py-2 text-center">$150</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                    <td className="border-bottom px-4 py-2 text-center">$10</td>
                  </tr>
                </tbody>
              </table>
            </>
          ),
        },

        {
          title: "Fold Series",
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
                    <td className="border-bottom px-4 py-2">Fold 6 (Outer)</td>
                    <td className="border-bottom px-4 py-2 text-center">$90</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Fold 5 (Outer)</td>
                    <td className="border-bottom px-4 py-2 text-center">$80</td>
                    <td className="border-bottom px-4 py-2 text-center">$30</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Fold 4 (Outer)</td>
                    <td className="border-bottom px-4 py-2 text-center">$70</td>
                    <td className="border-bottom px-4 py-2 text-center">$35</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Fold 3 (Outer)</td>
                    <td className="border-bottom px-4 py-2 text-center">$90</td>
                    <td className="border-bottom px-4 py-2 text-center">$40</td>
                    <td className="border-bottom px-4 py-2 text-center">$15</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Fold 2 (Outer)</td>
                    <td className="border-bottom px-4 py-2 text-center">$70</td>
                    <td className="border-bottom px-4 py-2 text-center">$20</td>
                    <td className="border-bottom px-4 py-2 text-center">$10</td>
                  </tr>
                </tbody>
              </table>
            </>
          ),
        },
        {
          title: "Fold Series",
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
                    <td className="border-bottom px-4 py-2">Outer Screen Refurb</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Hinge Replacement</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">
                      Inner Flex Replacement (Which Goes from One Side to Another)
                    </td>
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
          title: "Flip Series",
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
                    <td className="border-bottom px-4 py-2">Outer Screen Refurb</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">Hinge Replacement</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">
                      Inner Flex Replacement (Which Goes from One Side to Another)
                    </td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                </tbody>
              </table>
            </>
          ),
        },
      ],
    },

    // i pad data
    {
      id: 3,
      category: "Samsung Tablet",
      accordionData: [
        {
          title: "S9 Series",
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
                    <td className="border-bottom px-4 py-2">S9 Ultra (X910 / X916)</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S9 Plus (X810 / X816)</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S9 (X710 / X716)</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S9 FE (X510 / X516)</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S9 FE Plus (X610 / X616)</td>
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
          title: "S8 Series",
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
                    <td className="border-bottom px-4 py-2">S8 Ultra (X900 / X906)</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S8 Plus (X800 / X806)</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                    <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  </tr>
                  <tr>
                    <td className="border-bottom px-4 py-2">S8 (X700 / X706)</td>
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
          title: "S7 Series",
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
                  <td className="border-bottom px-4 py-2">S7 Plus (T970 / T975)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">S7 (T870 / T875)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">S7 FE (T730 / T726)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "S6 Series",
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
                  <td className="border-bottom px-4 py-2">S6 (T860 / T865)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">S6 Lite (P610 / P615 / P613 / P619)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "A Series",
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
                  <td className="border-bottom px-4 py-2">A7 (T500 / T505)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">A 10.1 (T510 / T515)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">A8.0 (T290 / T295)</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>
                  <td className="border-bottom px-4 py-2 text-center">Contact Us</td>

                </tr>
                <tr>
                  <td className="border-bottom px-4 py-2">A9 Plus (X210 / X216)</td>
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
    // add new category here
    {
      id: 3,
      category: "iWatch ",
      accordionData: [
        {
          title: "iWatch ",
          content: (
            <>
              <table className="table min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left">PRC Solutions</th>
                    <th className="border-bottom px-4 py-2 text-center">{"Address: 122 Queen St, St Marys NSW 2760"}</th>
                    <th className="border-bottom px-4 py-2 text-center">{"Contact Person : Bharat - 0406060607"}</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="border-bottom px-4 py-2">{"We're capable of refurbishing any phone screen, as long as we can source the top glass and OCA for the model. Got a unique or uncommon screen? Reach out to us! We’ll collaborate with you to breathe new life into that broken screen, ready for a second chance on a different phone."}</td>
                  </tr>




                </tbody>
              </table>
            </>
          ),
        },
      ],
    },
    {
      id: 4,
      category: "Oppo ",
      accordionData: [
        {
          title: "Oppo ",
          content: (
            <>
              <table className="table min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left">PRC Solutions</th>
                    <th className="border-bottom px-4 py-2 text-center">{"Address: 122 Queen St, St Marys NSW 2760"}</th>
                    <th className="border-bottom px-4 py-2 text-center">{"Contact Person : Bharat - 0406060607"}</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="border-bottom px-4 py-2">{"We're capable of refurbishing any phone screen, as long as we can source the top glass and OCA for the model. Got a unique or uncommon screen? Reach out to us! We’ll collaborate with you to breathe new life into that broken screen, ready for a second chance on a different phone."}</td>
                  </tr>




                </tbody>
              </table>
            </>
          ),
        },
      ],
    },
    {
      id: 5,
      category: "Goggle ",
      accordionData: [
        {
          title: "Goggle ",
          content: (
            <>
              <table className="table min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="border-bottom px-4 py-2 text-left">PRC Solutions</th>
                    <th className="border-bottom px-4 py-2 text-center">{"Address: 122 Queen St, St Marys NSW 2760"}</th>
                    <th className="border-bottom px-4 py-2 text-center">{"Contact Person : Bharat - 0406060607"}</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="border-bottom px-4 py-2">{"We're capable of refurbishing any phone screen, as long as we can source the top glass and OCA for the model. Got a unique or uncommon screen? Reach out to us! We’ll collaborate with you to breathe new life into that broken screen, ready for a second chance on a different phone."}</td>
                  </tr>




                </tbody>
              </table>
            </>
          ),
        },
      ],
    },


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
      <section className="py-5 xl:py-10 ">
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
                  <div className="py-4 pt-0 text-white overflow-auto">{item.content}</div>
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
