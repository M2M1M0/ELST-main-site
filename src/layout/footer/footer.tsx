"use client";
import React from "react";
import Copyright from "./copyright";
import { Text, Title } from "@/components/ui/text";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@public/Logo-white.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navItems } from "@/constants/constants";
import Subscribe from "./subscribe";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import bgPattern from "@public/pattern/BackgroundPatternFooter.png"

const Footer = () => {

  const socialMedia = [
    {
      icon: <FaFacebook />,
      href: "#"
    },
    {
      icon: <FaInstagram />,
      href: "#"
    },
    {
      icon: <FaLinkedin />,
      href: "#"
    },
    {
      icon: <FaTwitter />,
      href: "#"
    },
  ]

  const companyAddress = [
    {
      name: "Phone",
      icon: <FaPhone />,
      value: "+251-933-03-0116"
    },
    {
      name: "Email",
      icon: <MdOutlineMailOutline />,
      value: "contact@eaglelionsystems.com"
    },
    {
      name: "Phone",
      icon: <CiLocationOn />,
      value: "Megenaga, Addis Ababa, ETHIOPIA"
    },
  ]

  return (
    <footer className="relative">

      <Image src={bgPattern} alt="Footer pattern" fill />

      <div className="pt-8 w-full bg-primary">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pb-5 items-start justify-center  w-full">
          {/* Logo and description */}
          <div className="flex flex-col gap-4">
            <Image src={LogoImage}
              alt="EagleLion System Technology"
              className="object-cover"
            />

            <p className="text-white max-w-md">
              Eaglelion is a company driven by providing technological solutions. We believe in delivering life-simplifying and user-friendly financial solutions to the Ethiopian market.
            </p>

            <ul className="flex gap-4 items-center">
              {socialMedia.map((media, index) => (
                <li key={index}
                  className="text-white text-2xl">{media.icon}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-3 text-white">
              <Title as="h3" className="uppercase underline font-bold">
                Navgation Links
              </Title>
              {navItems.map((item) => (
                <Link key={item + "Nav Item"}
                  className="font-light"
                  href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-white">
              <Title as="h3" className="uppercase underline font-bold">
                Others
              </Title>
              <Link className="font-light" href="/"
              >
                Privacy and policies</Link>
              <Link className="font-light" href="/"
              >
                Terms and conditions</Link>
            </div>
          </div>

          {/* subscription and Address */}
          <div className="flex flex-col gap-6">
            <Subscribe />

            {/* Address */}
            <ul className="flex flex-col gap-4 text-white">
              <Title as="h3" className="uppercase underline font-bold">
                Address
              </Title>

              <div className="flex flex-col gap-2">
                {companyAddress.map((address) => (
                  <li key={address.name}
                    className="text-lg flex items-center gap-3">
                    <span className="text-white font-bold">
                      {address.icon}
                    </span>
                    <span>{address.value}</span>
                  </li>
                ))}
              </div>
            </ul>
          </div>

        </Container>
        <Copyright />
      </div >
    </footer>

  );
};

export default Footer;
