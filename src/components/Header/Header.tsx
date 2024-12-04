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
<<<<<<< HEAD
// // import headercallicon from "../../../public/Images/icons/headercallicon.svg";
// import searchicon from "../../../public/Images/icons/search-interface-symbol.svg";
=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
// import { RiArrowDropUpLine } from "react-icons/ri";

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
<<<<<<< HEAD
//   const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] =
//     useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const menuItems = [
//     // { label: "B2B Repair", path: "/coming-soon" },
=======
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const menuItems = [
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
//     {
//       label: "Services",
//       path: "/coming-soon",
//       dropdown: true,
//       subItems: [
<<<<<<< HEAD
//         { label: "Mail-In-Repair", path: "/mail-in-repair" },
=======
//         { label: "Mail-In-Repairkkkyy", path: "/mail-in-repair" },
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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
<<<<<<< HEAD
//     { label: "Screen Refurbishment", path: "/coming-soon"},
//     { label: "About us", path: "/about-us", 
//       dropdown: true,
//       subItems: [
//         { label: "What We Do", path: "/what-we-do" },
//       ],
//     },
=======
//     { label: "Screen Refurbishment", path: "/coming-soon" },
//     { label: "About us", path: "/about-us" },
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
//     { label: "Contact Us", path: "/coming-soon" },
//     { label: "Price List", path: "/coming-soon" },
//   ];

<<<<<<< HEAD
//   // Single function to toggle dropdowns based on type
//   const handleDropdownToggle = (type: "desktop" | "mobile") => {
//     if (type === "desktop") {
//       setIsServicesDropdownOpen((prev) => !prev);
//     } else {
//       setIsMobileServicesDropdownOpen((prev) => !prev);
//     }
=======
//   // Function to toggle the "Services" dropdown only
//   const handleServicesDropdownToggle = () => {
//     setIsServicesDropdownOpen((prev) => !prev); // Toggle Services dropdown state
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
//   };

//   // Close the dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: any) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
<<<<<<< HEAD
//         setIsServicesDropdownOpen(false);
//         setIsMobileServicesDropdownOpen(false);
=======
//         setIsServicesDropdownOpen(false); // Close dropdown if clicked outside
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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
//         {/* Mobile Menu Toggle */}
//         <NavbarContent className="lg:hidden">
//           <NavbarMenuToggle
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           />
//         </NavbarContent>

//         {/* Brand Logo */}
//         <NavbarContent className="flex justify-center items-center">
//           <NavbarBrand>
//             <Link href="/">
//               <Image src={rktaxilog} alt="Brand Logo" />
//             </Link>
//           </NavbarBrand>
//         </NavbarContent>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex flex-grow justify-center">
//           <div className="flex gap-[20px] xl:gap-[30px]">
//             {menuItems.map((item) => (
//               <NavbarItem key={item.label}>
//                 {item.dropdown ? (
//                   <div className="relative" ref={dropdownRef}>
//                     <button
<<<<<<< HEAD
//                       onClick={() => handleDropdownToggle("desktop")}
=======
//                       onClick={handleServicesDropdownToggle}
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
//                       className="flex items-center tracking-[1.5px] font-medium group"
//                     >
//                       {item.label}
//                       <span
//                         className={`ml-2 transform transition-transform ${
//                           isServicesDropdownOpen ? "rotate-0" : "rotate-180"
//                         }`}
//                       >
//                         <RiArrowDropUpLine />
//                       </span>
//                     </button>
//                     {isServicesDropdownOpen && (
//                       <div className="absolute left-0 mt-2 p-2 bg-black text-white rounded shadow-lg">
//                         {item.subItems.map((subItem) => (
//                           <Link
//                             key={subItem.label}
//                             href={subItem.path || "#"}
//                             className="block px-4 py-2 hover:bg-gray-800"
<<<<<<< HEAD
//                             onClick={() => setIsServicesDropdownOpen(false)}
=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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

//         {/* Right Side Content */}
//         <NavbarContent justify="end">
<<<<<<< HEAD
//           {/* <Image src={searchicon} alt="Search Icon" /> */}
=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
//           <Link href="/coming-soon">
//             <button className="btn hidden lg:block">GET STARTED</button>
//           </Link>
//         </NavbarContent>

//         {/* Mobile Menu */}
//         <NavbarMenu className="bg-black text-white lg:hidden">
//           {menuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item.label}-${index}`}>
//               {item.dropdown ? (
//                 <div>
//                   <button
<<<<<<< HEAD
//                     onClick={() => handleDropdownToggle("mobile")}
//                     className="flex justify-between w-full px-4 py-2"
//                   >
//                     {item.label}
//                     <span
//                       className={`ml-2 transform transition-transform ${
//                         isMobileServicesDropdownOpen ? "rotate-180" : "rotate-0"
=======
//                     onClick={handleServicesDropdownToggle}
//                     className="flex justify-between w-full px-4 py-2"
//                   >
//                     {item.label} eee
//                     <span
//                       className={`ml-2 transform transition-transform ${
//                         isServicesDropdownOpen ? "rotate-180" : "rotate-0"
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
//                       }`}
//                     >
//                       <RiArrowDropUpLine />
//                     </span>
//                   </button>
<<<<<<< HEAD
//                   {isMobileServicesDropdownOpen && (
=======
//                   {isServicesDropdownOpen && (
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
//                     <div className="pl-4">
//                       {item.subItems.map((subItem) => (
//                         <Link
//                           key={subItem.label}
//                           href={subItem.path || "#"}
//                           className="block px-4 py-2 hover:bg-gray-800"
<<<<<<< HEAD
//                           onClick={() => setIsMobileServicesDropdownOpen(false)}
=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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


<<<<<<< HEAD

=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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
<<<<<<< HEAD
import searchicon from "../../../public/Images/icons/search-interface-symbol.svg";
=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
import { RiArrowDropUpLine } from "react-icons/ri";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Track which dropdown is active
=======
  const [isServicesDropdownOpenMobile, setIsServicesDropdownOpenMobile] =
    useState(false); // For mobile dropdown state
  const [isServicesDropdownOpenDesktop, setIsServicesDropdownOpenDesktop] =
    useState(false); // For desktop dropdown state
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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
    {
      label: "About us",
      path: "/about-us",
      dropdown: true,
      subItems: [{ label: "What We Do", path: "/what-we-do" }],
    },
    { label: "Contact Us", path: "/coming-soon" },
    { label: "Price List", path: "/coming-soon" },
  ];

<<<<<<< HEAD
  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label)); // Toggle the dropdown based on label
=======
  useEffect(() => {
    console.log("isServicesDropdownOpenMobile ::", isServicesDropdownOpenMobile)
  }, [isServicesDropdownOpenMobile])

  // Function to toggle the "Services" dropdown only for mobile
  const handleServicesDropdownToggleMobile = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop the click event from propagating to parent elements
    setIsServicesDropdownOpenMobile((prev) => !prev); // Toggle Services dropdown state for mobile
  };

  // Function to toggle the "Services" dropdown only for desktop
  const handleServicesDropdownToggleDesktop = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop the click event from propagating to parent elements
    setIsServicesDropdownOpenDesktop((prev) => !prev); // Toggle Services dropdown state for desktop
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
<<<<<<< HEAD
        setActiveDropdown(null); // Close dropdown if clicked outside
=======
        setIsServicesDropdownOpenMobile(false); // Close mobile dropdown if clicked outside
        setIsServicesDropdownOpenDesktop(false); // Close desktop dropdown if clicked outside
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-component">
      <Navbar
        className="text-white bg-black"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Mobile Menu Toggle */}
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* Brand Logo */}
        <NavbarContent className="flex justify-center items-center">
          <NavbarBrand>
            <Link href="/">
              <Image src={rktaxilog} alt="Brand Logo" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center">
          <div className="flex gap-[20px] xl:gap-[30px]">
            {menuItems.map((item) => (
              <NavbarItem key={item.label}>
                {item.dropdown ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
<<<<<<< HEAD
                      onClick={() => toggleDropdown(item.label)}
=======
                      onClick={handleServicesDropdownToggleDesktop}
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
                      className="flex items-center tracking-[1.5px] font-medium group"
                    >
                      {item.label}
                      <span
                        className={`ml-2 transform transition-transform ${
<<<<<<< HEAD
                          activeDropdown === item.label ? "rotate-0" : "rotate-180"
=======
                          isServicesDropdownOpenDesktop
                            ? "rotate-0"
                            : "rotate-180"
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
                        }`}
                      >
                        <RiArrowDropUpLine />
                      </span>
                    </button>
<<<<<<< HEAD
                    {activeDropdown === item.label && (
=======
                    {isServicesDropdownOpenDesktop && (
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
                      <div className="absolute left-0 mt-2 p-2 bg-black text-white rounded shadow-lg">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.path || "#"}
                            className="block px-4 py-2 hover:bg-gray-800"
<<<<<<< HEAD
                            onClick={() => setActiveDropdown(null)}
=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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

        {/* Right Side Content */}
        <NavbarContent justify="end">
          <Link href="/coming-soon">
            <button className="btn hidden lg:block">GET STARTED</button>
          </Link>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-black text-white lg:hidden">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {item.dropdown ? (
                <div>
                  <button
<<<<<<< HEAD
                    onClick={() => toggleDropdown(item.label)}
=======
                    onClick={handleServicesDropdownToggleMobile}
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
                    className="flex justify-between w-full px-4 py-2"
                  >
                    {item.label}
                    <span
                      className={`ml-2 transform transition-transform ${
<<<<<<< HEAD
                        activeDropdown === item.label ? "rotate-180" : "rotate-0"
=======
                        isServicesDropdownOpenMobile ? "rotate-180" : "rotate-0"
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
                      }`}
                    >
                      <RiArrowDropUpLine />
                    </span>
                  </button>
<<<<<<< HEAD
                  {activeDropdown === item.label && (
=======

                  {/* This part will conditionally render the dropdown */}
                  {isServicesDropdownOpenMobile && (
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
                    <div className="pl-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.path || "#"}
                          className="block px-4 py-2 hover:bg-gray-800"
<<<<<<< HEAD
                          onClick={() => setActiveDropdown(null)}
=======
>>>>>>> 2f56ddd0df143bf8972430bb28035b998b6558bc
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

