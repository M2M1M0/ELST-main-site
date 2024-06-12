"use client";
import React from "react";
import Container from "@/components/container";
import { Title, Text } from "@/components/ui/text";

import "@/css/hero-image-scroll.css";
import CustomButton from "@/components/custom-button";
import Products from "./products";
import { OrbitingCirclesDemo } from "./orbiting-circles";


const Hero = () => {
  return (
    <Container className="relative overflow-hidden w-full h-screen">
      {/* <Products /> */}
      {/* <OrbitingCirclesDemo /> */}
      
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full -mt-24">
        <Title className="font-bold text-center text-xl md:text-2xl xl:text-4xl">
          Leading the Charge in Financial Innovation.
          <br />
          Your Partner in Banking Excellence.
        </Title>

        <Text className="font-normal max-w-2xl text-center">
          Embark on a journey of financial innovation with us, where tradition meets cutting-edge technology. As leaders in the field, we pave the way for banking excellence, offering tailored solutions to meet your every need.
        </Text>

        <CustomButton onClick={() => { }}
          text={"Explore"} />
      </div>


    </Container>
  );
};

export default Hero;
