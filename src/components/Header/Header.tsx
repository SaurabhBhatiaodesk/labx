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
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDropdownDelayedClose, setIsDropdownDelayedClose] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    { label: "Contact Us", path: "/coming-soon" },
    { label: "Price List", path: "/coming-soon" },
  ];

  // Function to toggle the "Services" dropdown only
  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen((prev) => !prev); // Toggle Services dropdown state
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isDropdownDelayedClose) {
          const timer = setTimeout(() => {
            setIsServicesDropdownOpen(false);
            setIsDropdownDelayedClose(false); // Reset the delayed close flag
          }, 300); // Delay to close the dropdown
          return () => clearTimeout(timer); // Cleanup the timeout on component unmount or change
        }
        // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownDelayedClose]);

  // Prevent closing dropdown when clicking on a menu item
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the dropdown from toggling when a link is clicked
  };

  return (
    <div className="header-component">
      <Navbar
        className="text-white bg-black"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="flex justify-center items-center">
          <NavbarBrand>
            <Link href="/">
              <Image src={rktaxilog} alt="Brand Logo" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <div className="hidden lg:flex flex-grow justify-center">
          <div className="flex gap-[20px] xl:gap-[30px]">
            {menuItems.map((item) => (
              <NavbarItem key={item.label}>
                {item.dropdown ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={handleServicesDropdownToggle}
                      className="flex items-center tracking-[1.5px] font-medium group"
                    >
                      {item.label}
                      <span
                        className={`ml-2 transform transition-transform ${
                          isServicesDropdownOpen ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <RiArrowDropUpLine />
                      </span>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="absolute left-0 mt-2 p-2 bg-black text-white rounded shadow-lg">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.path || "#"}
                            className="block px-4 py-2 hover:bg-gray-800"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.path ? (
                  <Link
                    className="relative tracking-[1.5px] font-medium group"
                    href={item.path}
                  >
                    {item.label}
                    <span className="absolute bottom-[-5px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <span className="tracking-[1.5px] font-medium">
                    {item.label}
                  </span>
                )}
              </NavbarItem>
            ))}
          </div>
        </div>

        <NavbarContent justify="end">
          <Link href="/coming-soon">
            <button className="btn hidden lg:block">GET STARTED</button>
          </Link>
        </NavbarContent>

        <NavbarMenu className="bg-black text-white lg:hidden">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={handleServicesDropdownToggle}
                    className="flex justify-between w-full px-4 py-2"
                  >
                    {item.label}
                    <span
                      className={`ml-2 transform transition-transform ${
                        isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <RiArrowDropUpLine />
                    </span>
                  </button>

                  {isServicesDropdownOpen && (
                    <div className="pl-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.path || "#"}
                          onClick={handleLinkClick} // Prevent closing the dropdown on click
                          className="block px-4 py-2 hover:bg-gray-800"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.path ? (
                <Link className="w-full" href={item.path}>
                  {item.label}
                </Link>
              ) : (
                <span className="w-full block px-4 py-2">{item.label}</span>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
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
//     <div className="header-component">
//       <Navbar
//         className="text-white bg-black"
//         isBordered
//         isMenuOpen={isMenuOpen}
//         onMenuOpenChange={setIsMenuOpen}
//       >
//         {/ Mobile Menu Toggle /}
//         <NavbarContent className="lg:hidden">
//           <NavbarMenuToggle
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           />
//         </NavbarContent>

//         {/ Brand Logo /}
//         <NavbarContent className="flex justify-center items-center">
//           <NavbarBrand>
//             <Link href="/">
//               <Image src={rktaxilog} alt="Brand Logo" />
//             </Link>
//           </NavbarBrand>
//         </NavbarContent>

//         {/ Desktop Menu /}
//         <div className="hidden lg:flex flex-grow justify-center">
//           <div className="flex gap-[20px] xl:gap-[30px]">
//             {menuItems.map((item) => (
//               <NavbarItem key={item.label}>
//                 {item.dropdown ? (
//                   <div className="relative" ref={dropdownRef}>
//                     <button
//                       onClick={handleServicesDropdownToggleDesktop}
//                       className="flex items-center tracking-[1.5px] font-medium group"
//                     >
//                       {item.label}
//                       <span
//                         className={`ml-2 transform transition-transform ${
//                           isServicesDropdownOpenDesktop
//                             ? "rotate-0"
//                             : "rotate-180"
//                         }`}
//                       >
//                         <RiArrowDropUpLine />
//                       </span>
//                     </button>
//                     {isServicesDropdownOpenDesktop && (
//                       <div className="absolute left-0 mt-2 p-2 bg-black text-white rounded shadow-lg">
//                         {item.subItems.map((subItem) => (
//                           <Link
//                             key={subItem.label}
//                             href={subItem.path || "#"}
//                             className="block px-4 py-2 hover:bg-gray-800"
//                           >
//                             {subItem.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : item.path ? (
//                   <Link
//                     className="relative tracking-[1.5px] font-medium group"
//                     href={item.path}
//                   >
//                     {item.label}
//                     <span className="absolute bottom-[-5px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 ) : (
//                   <span className="tracking-[1.5px] font-medium">
//                     {item.label}
//                   </span>
//                 )}
//               </NavbarItem>
//             ))}
//           </div>
//         </div>

//         {/ Right Side Content /}
//         <NavbarContent justify="end">
//           <Link href="/coming-soon">
//             <button className="btn hidden lg:block">GET STARTED</button>
//           </Link>
//         </NavbarContent>

//         {/ Mobile Menu /}
//         <NavbarMenu className="bg-black text-white lg:hidden">
//           {menuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item.label}-${index}`}>
//               {item.dropdown ? (
//                 <div>
//                   <button
//                     onClick={handleServicesDropdownToggleMobile}
//                     className="flex justify-between w-full px-4 py-2"
//                   >
//                     {item.label}
//                     <span
//                       className={`ml-2 transform transition-transform ${
//                         isServicesDropdownOpenMobile ? "rotate-180" : "rotate-0"
//                       }`}
//                     >
//                       <RiArrowDropUpLine />
//                     </span>
//                   </button>

//                   {/ This part will conditionally render the dropdown /}
//                   {isServicesDropdownOpenMobile && (
//                     <div className="pl-4">
//                       {item.subItems.map((subItem) => (
//                         <Link
//                           key={subItem.label}
//                           href={subItem.path || "#"}
//                           className="block px-4 py-2 hover:bg-gray-800"
//                         >
//                           {subItem.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : item.path ? (
//                 <Link className="w-full" href={item.path}>
//                   {item.label}
//                 </Link>
//               ) : (
//                 <span className="w-full block px-4 py-2">{item.label}</span>
//               )}
//             </NavbarMenuItem>
//           ))}
//         </NavbarMenu>
//       </Navbar>
//     </div>
//   );
// }
