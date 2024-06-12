"use client"
import React, { useEffect, useState } from "react";

import Container from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button"

import Logo from "@/components/logo";
import cn from "@/utils/class-names";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/constants";


const Header = () => {
  const pathName = usePathname()
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollable(window.scrollY > 0); // Update state when scrolled past the top
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section className="w-full mx-auto">
      <div className={cn("w-full px-4 mx-auto",
        isScrollable ? "fixed z-50 top-4 rounded-xl bg-[#ffffff] shadow-lg px-6 py-2 mx-auto" : "mt-6"
      )}>
        <Container className="relative !p-2 flex items-center justify-between gap-3 ">
          <div className="flex items-center gap-4 xl:gap-8 w-fit">
            {/* Logo */}
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>

          {/* Nav Items */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const activeLink = pathName === item.href
              return (
                <li key={item + "nav key"}
                  className={cn("text-[16px] font-bold", activeLink ? "text-primary" : "text-black")}
                >
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Button className="hidden md:flex items-center justify-center bg-primary text-[16px] font-bold px-12 py-6 rounded-full text-white" >
            Contact Us
          </Button>

        </Container>
      </div >
    </section>
  );
};

export default Header;
