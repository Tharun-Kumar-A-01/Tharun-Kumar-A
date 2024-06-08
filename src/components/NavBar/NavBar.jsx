"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { usePathname } from 'next/navigation';

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "About",
    path: "/about",
  }
];

export default function NavBar() {


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname()

  return (
    <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">Tharun</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">

        {links.map(
          (link) => {
            return (
              <NavbarItem key={link.path} {...pathName === link.path && { isActive: true }} >
                <Link color={link.path === pathName ? "primary" : "foreground"} href={link.path} >
                  {link.title}
                </Link>
              </NavbarItem>
            )
          })}
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="/" variant="flat"  >
            Hire Me
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent backdrop-blur-sm">
        {links.map((link) => (
          <NavbarMenuItem key={`${link.path}`}  {...link.path === pathName && { isActive: true }}>
            <Link
              color={link.path === pathName ? "primary" : "foreground"}
              className="w-full"
              href={link.path}
              size="lg"
            >
              {link.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
