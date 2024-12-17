"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import rktaxilog from "../../../public/Images/Brand logos/Frame.svg";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropUpLine } from "react-icons/ri";
import Facebook from "../../../public/Images/blog/facebook.svg";
import Telegram_logo from "../../../public/Images/blog/Telegram_logo.svg";
import Instagram from "../../../public/Images/blog/instagram.svg";
import Twitter from "../../../public/Images/blog/twitter.svg";
import { SlCallOut, SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbMenu2 } from "react-icons/tb";
import { MdCall } from "react-icons/md";
import { IoIosCart } from "react-icons/io";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null); // Reference for the entire menu

  const menuItems = [
    {
      label: "Services",
      path: "/coming-soon",
      dropdown: true,
      subItems: [
        { label: "Mail-In-Repair", path: "/mail-in-repair" },
        { label: "Training", path: "/training" },
        { label: "B2B Repair", path: "b2b-repair-services" },
        { label: "Screen Refurbishment", path: "/coming-soon" },
        { label: "Data Recovery", path: "/coming-soon" },
        { label: "Parts Store", path: "/coming-soon" },
        { label: "Repair Forum", path: "/coming-soon" },
        { label: "Repair Solutions", path: "/coming-soon" },
      ],
    },
    { label: "Parts Store", path: "/coming-soon" },
    { label: "Training", path: "/training" },
    { label: "Screen Refurbishment", path: "/coming-soon" },
    { label: "About us", path: "/about-us" },
    { label: "What We Do", path: "/what-we-do" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Price List", path: "/price" },
  ];

  // Function to toggle the "Services" dropdown only
  // const handleServicesDropdownToggle = () => {
  //   setIsServicesDropdownOpen((prev) => !prev); // Toggle Services dropdown state
  // };

  // Close the menu if clicked outside the menu (and not on a link)
  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     // Check if the click is outside the menu or NavbarMenuItem
  //     // if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     //   setIsMenuOpen(false); // Close the menu if clicked outside the menu
  //     // }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // Prevent closing dropdown when clicking inside the menu (except on links)
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the dropdown from toggling when a link is clicked
  };

  // Close the menu when an item is clicked (link)
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item (link) is clicked
  };

  // Toggle function to change menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full header header-component">
        <Navbar
          className="text-white bg-black"
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent
            className="lg:hidden"
            id="nav-toggle"
            onClick={toggleMenu}
          >
            {/* <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            /> */}
            {!isMenuOpen ?
            <button className=" w-[50px] text-[12px] font-medium font-poppins flex flex-col items-center rounded-lg p-[4px] bg-tertiary text-secondary"> <TbMenu2 fontSize={20} height={19} /> <span className="leading-3">  Menu</span></button>
            :
            <button className="w-[50px] flex justify-center"><RxCross2 /></button>}
          </NavbarContent>
          <div className="w-full">
            <div className="navbar text-pastelBlue items-center justify-between">
              <div className="navmenu flex items-center justify-between">
                <NavbarContent className="flex justify-center items-center">
                  <NavbarBrand>
                    <Link href="/">
                      <Image
                        src={rktaxilog}
                        alt="Brand Logo"
                        className="logo_LabX"
                      />
                    </Link>
                  </NavbarBrand>
                </NavbarContent>

                <div className="flex gap-[6px] relative">
                  <span className="showmobile">
                    <Link href="tel:+61455777077">
                    <MdCall   fontSize={26}/>
                    </Link>
                  </span>
                  <Link
                    className="showmobile hover:scale-110 transition-transform duration-200"
                    href="tel:+61455777077"
                  >
                <IoIosCart fontSize={26} />
                  </Link>
                </div>

                <div
                  className={`${
                    isMenuOpen ? "block" : "hidden"
                  } lg:flex  flex-grow justify-center`}
                  id="nav-content"
                >
                  <ul className="menu menu-horizontal px-1 flex">
                    <li>
                      <div className="dropdowns services_drop inline-block relative">
                        <button className="btn__menu inline-flex items-center hover:text-yellow-200">
                          <span className="mr-1">Services</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                          </svg>
                        </button>
                        <ul className="dropdown-menus absolute hidden text-white pt-1">
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link href="/mail-in-repair" onClick={toggleMenu}>
                              Mail In Repair
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link href="/training" onClick={toggleMenu}>
                              Training{" "}
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link
                              href="/b2b-repair-services"
                              onClick={toggleMenu}
                            >
                              B2B Repair{" "}
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link
                              href="/screen-refurbishing"
                              onClick={toggleMenu}
                            >
                              Screen Refurbishment{" "}
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link href="/data-recovery" onClick={toggleMenu}>
                              Data Recovery{" "}
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link href="/coming-soon" onClick={toggleMenu}>
                              Parts Store{" "}
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link href="/coming-soon" onClick={toggleMenu}>
                              Repair Forum{" "}
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link href="/repair-solutions" onClick={toggleMenu}>
                              Repair Solutions{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/coming-soon"
                        onClick={toggleMenu}
                      >
                        Parts Store
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/training"
                        onClick={toggleMenu}
                      >
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/screen-refurbishing"
                        onClick={toggleMenu}
                      >
                        Screen Refurbishment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/price"
                        onClick={toggleMenu}
                      >
                        Price List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/contact-us"
                        onClick={toggleMenu}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown inline-block relative">
                        <button className="btn__menu inline-flex items-center hover:text-yellow-200">
                          <span className="mr-1">About us</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                          </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-white pt-1">
                          <li className="block px-4 py-2 hover:bg-gray-800">
                            <Link
                              className="hover:text-yellow-200"
                              href="/about-us"
                              onClick={toggleMenu}
                            >
                              About
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800">
                            <Link
                              className="hover:text-yellow-200"
                              href="/what-we-do"
                              onClick={toggleMenu}
                            >
                              What We Do
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800">
                            <Link
                              className="hover:text-yellow-200"
                              href="/faq"
                              onClick={toggleMenu}
                            >
                              FAQ{" "}
                            </Link>
                          </li>
                          <li className="block px-4 py-2 hover:bg-gray-800">
                            <Link
                              className="hover:text-yellow-200"
                              href="/blogs"
                              onClick={toggleMenu}
                            >
                              Blogs{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>

                  <div className="lg:hidden block">
                    <div className=" flex gap-3 mt-5 justify-start pt-3">
                      <Link
                        href="https://www.facebook.com/profile.php?id=61568955864034"
                        target="blank"
                      >
                        <SlSocialFacebook
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link
                        href="https://www.instagram.com/labxrepair/"
                        target="blank"
                      >
                        <FaInstagram
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link href="https://x.com/LabxRepair" target="blank">
                        <FaXTwitter
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@PRCRepair"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link
                      href="https://www.tiktok.com/@labxrepair"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok 
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={30}
                      />
                    </Link>
                    </div>
                  </div>
                </div>
                <Link href="/mail-in-repair">
                  <button className="btn hidden lg:block uppercase">Start Repair </button>
                </Link>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
    // <div classNameName="header-component">
    //   <Navbar classNameName="text-white bg-black" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
    //     <NavbarContent classNameName="lg:hidden">
    //       <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
    //     </NavbarContent>

    //     <NavbarContent classNameName="flex justify-center items-center">
    //       <NavbarBrand>
    //         <Link  href="/">
    //           <Image src={rktaxilog} alt="Brand Logo" />
    //         </Link>
    //       </NavbarBrand>
    //     </NavbarContent>

    //     <div classNameName="hidden lg:flex flex-grow justify-center">
    //       <div classNameName="flex gap-[20px] xl:gap-[30px]" ref={menuRef}>
    //         {menuItems.map((item) => (
    //           <NavbarItem key={item.label}>
    //             {item.dropdown ? (
    //               <div classNameName="relative" ref={dropdownRef}>
    //                 <button onClick={handleServicesDropdownToggle} classNameName="flex items-center tracking-[1.5px] font-medium group">
    //                   {item.label}
    //                   <span classNameName={`ml-2 transform transition-transform ${isServicesDropdownOpen ? "rotate-0" : "rotate-180"}`}>
    //                     <RiArrowDropUpLine />
    //                   </span>
    //                 </button>
    //                 {isServicesDropdownOpen && (
    //                   <div classNameName="absolute left-0 mt-2 p-2 bg-black text-white rounded shadow-lg">
    //                     {item.subItems.map((subItem) => (
    //                       <Link
    //                         key={subItem.label}
    //                         href={subItem.path || "#"}
    //                         onClick={(e) => {
    //                           handleLinkClick(e); // Prevent closing dropdown when clicking a link
    //                           handleMenuItemClick(); // Close the menu
    //                         }}
    //                         classNameName="block px-4 py-2 hover:bg-gray-800"
    //                       >
    //                         {subItem.label}
    //                       </Link>
    //                     ))}
    //                   </div>
    //                 )}
    //               </div>
    //             ) : item.path ? (
    //               <Link  classNameName="relative tracking-[1.5px] font-medium group" href={item.path} onClick={(e) => { handleMenuItemClick(); handleLinkClick(e); }}>
    //                 {item.label}
    //                 <span classNameName="absolute bottom-[-5px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
    //               </Link>
    //             ) : (
    //               <span classNameName="tracking-[1.5px] font-medium">{item.label}</span>
    //             )}
    //           </NavbarItem>
    //         ))}
    //       </div>
    //     </div>

    //     <NavbarContent justify="end">
    //       <Link  href="/coming-soon">
    //         <button classNameName="btn hidden lg:block">GET STARTED</button>
    //       </Link>
    //     </NavbarContent>

    //     <NavbarMenu classNameName="bg-black text-white lg:hidden">
    //       {menuItems.map((item, index) => (
    //         <NavbarMenuItem key={`${item.label}-${index}`}>
    //           {item.dropdown ? (
    //             <div>
    //               <button onClick={handleServicesDropdownToggle} classNameName="flex justify-between w-full px-4 py-2">
    //                 {item.label}
    //                 <span classNameName={`ml-2 transform transition-transform ${isServicesDropdownOpen ? "rotate-180" : "rotate-0"}`}>
    //                   <RiArrowDropUpLine />
    //                 </span>
    //               </button>

    //               {isServicesDropdownOpen && (
    //                 <div classNameName="pl-4">
    //                   {item.subItems.map((subItem) => (
    //                     <Link
    //                       key={subItem.label}
    //                       href={subItem.path || "#"}
    //                       onClick={(e) => {
    //                         handleLinkClick(e); // Prevent closing dropdown when clicking a link
    //                         handleMenuItemClick(); // Close the menu
    //                       }}
    //                       classNameName="block px-0 py-2 hover:bg-gray-800"
    //                     >
    //                       {subItem.label}
    //                     </Link>
    //                   ))}
    //                 </div>
    //               )}
    //             </div>
    //           ) : item.path ? (
    //             <Link  classNameName="w-full" href={item.path} onClick={handleMenuItemClick}>
    //               {item.label}
    //             </Link>
    //           ) : (
    //             <span classNameName="w-full block px-4 py-2">{item.label}</span>
    //           )}
    //         </NavbarMenuItem>
    //       ))}
    //     </NavbarMenu>
    //   </Navbar>
    // </div>
  );
}

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarMenuToggle,
//   NavbarMenuItem,
//   NavbarMenu,
//   NavbarContent,
//   NavbarItem,
// } from "@nextui-org/react";
// import rktaxilog from "../../../public/Images/Brand logos/Frame.svg";
// import "./Header.css";
// import Link from "next/link";
// import Image from "next/image";
// import { RiArrowDropUpLine } from "react-icons/ri";

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesDropdownOpenMobile, setIsServicesDropdownOpenMobile] =
//     useState(false); // For mobile dropdown state
//   const [isServicesDropdownOpenDesktop, setIsServicesDropdownOpenDesktop] =
//     useState(false); // For desktop dropdown state
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const menuItems = [
//     {
//       label: "Services",
//       path: "/coming-soon",
//       dropdown: true,
//       subItems: [
//         { label: "Mail-In-Repair", path: "/mail-in-repair" },
//         { label: "Training", path: "/training" },
//         { label: "B2B Repair", path: "b2b-repair-services" },
//         { label: "Screen Refurbishment", path: "/coming-soon" },
//         { label: "Data Recovery", path: "/coming-soon" },
//         { label: "Parts Store", path: "/coming-soon" },
//         { label: "Repair Forum", path: "/coming-soon" },
//         { label: "Repair Solutions", path: "/coming-soon" },
//       ],
//     },
//     { label: "Parts Store", path: "/coming-soon" },
//     { label: "Training", path: "/training" },
//     { label: "Screen Refurbishment", path: "/coming-soon" },
//     {
//       label: "About us",
//       path: "/about-us",
//       dropdown: true,
//       subItems: [{ label: "What We Do", path: "/what-we-do" }],
//     },
//     { label: "Contact Us", path: "/coming-soon" },
//     { label: "Price List", path: "/coming-soon" },
//   ];

//   useEffect(() => {
//     console.log("isServicesDropdownOpenMobile ::", isServicesDropdownOpenMobile)
//   }, [isServicesDropdownOpenMobile])

//   // Function to toggle the "Services" dropdown only for mobile
//   const handleServicesDropdownToggleMobile = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Stop the click event from propagating to parent elements
//     setIsServicesDropdownOpenMobile((prev) => !prev); // Toggle Services dropdown state for mobile
//   };

//   // Function to toggle the "Services" dropdown only for desktop
//   const handleServicesDropdownToggleDesktop = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Stop the click event from propagating to parent elements
//     setIsServicesDropdownOpenDesktop((prev) => !prev); // Toggle Services dropdown state for desktop
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: any) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsServicesDropdownOpenMobile(false); // Close mobile dropdown if clicked outside
//         setIsServicesDropdownOpenDesktop(false); // Close desktop dropdown if clicked outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div classNameName="header-component">
//       <Navbar
//         classNameName="text-white bg-black"
//         isBordered
//         isMenuOpen={isMenuOpen}
//         onMenuOpenChange={setIsMenuOpen}
//       >
//         {/ Mobile Menu Toggle /}
//         <NavbarContent classNameName="lg:hidden">
//           <NavbarMenuToggle
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           />
//         </NavbarContent>

//         {/ Brand Logo /}
//         <NavbarContent classNameName="flex justify-center items-center">
//           <NavbarBrand>
//             <Link  href="/">
//               <Image src={rktaxilog} alt="Brand Logo" />
//             </Link>
//           </NavbarBrand>
//         </NavbarContent>

//         {/ Desktop Menu /}
//         <div classNameName="hidden lg:flex flex-grow justify-center">
//           <div classNameName="flex gap-[20px] xl:gap-[30px]">
//             {menuItems.map((item) => (
//               <NavbarItem key={item.label}>
//                 {item.dropdown ? (
//                   <div classNameName="relative" ref={dropdownRef}>
//                     <button
//                       onClick={handleServicesDropdownToggleDesktop}
//                       classNameName="flex items-center tracking-[1.5px] font-medium group"
//                     >
//                       {item.label}
//                       <span
//                         classNameName={`ml-2 transform transition-transform ${
//                           isServicesDropdownOpenDesktop
//                             ? "rotate-0"
//                             : "rotate-180"
//                         }`}
//                       >
//                         <RiArrowDropUpLine />
//                       </span>
//                     </button>
//                     {isServicesDropdownOpenDesktop && (
//                       <div classNameName="absolute left-0 mt-2 p-2 bg-black text-white rounded shadow-lg">
//                         {item.subItems.map((subItem) => (
//                           <Link
//                             key={subItem.label}
//                             href={subItem.path || "#"}
//                             classNameName="block px-4 py-2 hover:bg-gray-800"
//                           >
//                             {subItem.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : item.path ? (
//                   <Link
//                     classNameName="relative tracking-[1.5px] font-medium group"
//                     href={item.path}
//                   >
//                     {item.label}
//                     <span classNameName="absolute bottom-[-5px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 ) : (
//                   <span classNameName="tracking-[1.5px] font-medium">
//                     {item.label}
//                   </span>
//                 )}
//               </NavbarItem>
//             ))}
//           </div>
//         </div>

//         {/ Right Side Content /}
//         <NavbarContent justify="end">
//           <Link  href="/coming-soon">
//             <button classNameName="btn hidden lg:block">GET STARTED</button>
//           </Link>
//         </NavbarContent>

//         {/ Mobile Menu /}
//         <NavbarMenu classNameName="bg-black text-white lg:hidden">
//           {menuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item.label}-${index}`}>
//               {item.dropdown ? (
//                 <div>
//                   <button
//                     onClick={handleServicesDropdownToggleMobile}
//                     classNameName="flex justify-between w-full px-4 py-2"
//                   >
//                     {item.label}
//                     <span
//                       classNameName={`ml-2 transform transition-transform ${
//                         isServicesDropdownOpenMobile ? "rotate-180" : "rotate-0"
//                       }`}
//                     >
//                       <RiArrowDropUpLine />
//                     </span>
//                   </button>

//                   {/ This part will conditionally render the dropdown /}
//                   {isServicesDropdownOpenMobile && (
//                     <div classNameName="pl-4">
//                       {item.subItems.map((subItem) => (
//                         <Link
//                           key={subItem.label}
//                           href={subItem.path || "#"}
//                           classNameName="block px-4 py-2 hover:bg-gray-800"
//                         >
//                           {subItem.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : item.path ? (
//                 <Link  classNameName="w-full" href={item.path}>
//                   {item.label}
//                 </Link>
//               ) : (
//                 <span classNameName="w-full block px-4 py-2">{item.label}</span>
//               )}
//             </NavbarMenuItem>
//           ))}
//         </NavbarMenu>
//       </Navbar>
//     </div>
//   );
// }
