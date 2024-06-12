"use client";
import React, { useEffect, useState } from "react";
import Companies from "../_shared/home/company/companies";
import Container from "@/components/container";
import Creations from "../_shared/home/creation";
import Hero from "../_shared/home/hero";
import Stats from "../_shared/home/stats";
import Innovations from "../_shared/home/innovations";
import ChooseUs from "../_shared/home/choose-us";
import FinancialInnovation from "../_shared/home/financial-innovation";
import Blogs from "../_shared/home/blogs";
import Testimonials from "../_shared/home/testimonials";
import ContactUs from "../_shared/contact-us";
import Products from "../_shared/home/products";
import { GoArrowUp } from "react-icons/go";
import ScrollToUp from "../_shared/scroll-to-up";


const page = () => {

  return (
    <div className="relative">

      <Hero />
      <Companies />

      <Creations />
      <Products />

      <Stats />
      <Innovations />

      <ChooseUs />
      <FinancialInnovation />

      <Blogs />
      <Testimonials />

      <ContactUs />


      <ScrollToUp className={"fixed h-screen z-20 bottom-4 right-4 "}/>

    </div>
  );
};

export default page;
