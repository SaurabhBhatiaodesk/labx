"use client";
import React from "react";

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
import headercallicon from "../../../public/Images/icons/headercallicon.svg";
import searchicon from "../../../public/Images/icons/search-interface-symbol.svg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Services",
    "Parts Store",
    "Training",
    "B2b Repair",
    "Contact Us",
    "Price List",
  
  ];

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
          <div className="flex gap-[20px] xl:gap-[40px]">
            {menuItems.map((item, index) => (
              <NavbarItem key={item}>
                <Link
                  className="relative tracking-[1.5px] font-medium group"
                  href="/"
                >
                  {item}
                  <span className="absolute bottom-[-5px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </NavbarItem>
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <NavbarContent justify="end">
          <Image src={searchicon} alt="Search Icon" />
          <button className="btn hidden lg:block">GET STARTED</button>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-black text-white lg:hidden">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
