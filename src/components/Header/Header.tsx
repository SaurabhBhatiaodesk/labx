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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
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
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Outs",
  ];

  return (
    <>
      <div className="header-component">
        <Navbar
          className="text-white bg-black"
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3 p-0" justify="center">
            <NavbarBrand>
              <Image src={rktaxilog} alt="" />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4">
            <NavbarBrand>
              <Image className="oooo" src={rktaxilog} alt="" />
            </NavbarBrand>
          </NavbarContent>

          <div className="hidden md:block">
            <div className="flex gap-[20px] lg:gap-[40px]">
              <NavbarItem isActive>
                <Link className="tracking-[1.5px] font-medium" href="/">Home</Link>
              </NavbarItem>
              <NavbarItem>
              <Link className="tracking-[1.5px] font-medium" href="/about-us">About Us</Link>
              </NavbarItem>
              <NavbarItem>
              <Link className="tracking-[1.5px] font-medium" href="/destination">Destination</Link>
              </NavbarItem>
              <NavbarItem>
              <Link className="tracking-[1.5px] font-medium" href="/blogs">Blogs</Link>
              </NavbarItem>
              <NavbarItem>
              <Link className="tracking-[1.5px] font-medium" href="/contact-us">Contact Us</Link>
              </NavbarItem>
              {/* Add dropdown for "Contact Us" */}
              {/* <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Link href="#" className="flex items-center">
                      Contact Us
                    </Link>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu aria-label="Contact Us Options" className="bg-black text-white">
                  <DropdownItem key="email">
                    <Link href="/contact-us/email">Email Us</Link>
                  </DropdownItem>
                  <DropdownItem key="call">
                    <Link href="/contact-us/call">Call Us</Link>
                  </DropdownItem>
                  <DropdownItem key="faq">
                    <Link href="/contact-us/faq">FAQ</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
            </div>
          </div>

          <NavbarContent justify="end">
            <div>
              <Image src={searchicon} alt="" />
            </div>

            <button className="btn hidden lg:block ">GET STARTED </button>
            <div className="oooppp w-[50px] lg:hidden block">
              <Image className="w-[100%]" src={headercallicon} alt="" />
            </div>
          </NavbarContent>

          <NavbarMenu className="bg-[var(--secondary-color)] text-white">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className=""
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  href="#"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
}
