"use client";
import Container from "@/components/container";
import React from "react";
import { Collapse } from "@/components/ui/collapse";
import { MdChevronRight } from "react-icons/md";
import { Text, Title } from "@/components/ui/text";
import { mockFAQData } from "@/data/faq";
import cn from "@/utils/class-names";
import { PiCaretDownBold } from "react-icons/pi";
const FaqList = () => {
  return (
    <section className="px-3 md:px-6 lg:px-8 2xl:px-10 flex flex-col items-center justify-center w-full space-y-10">
      <div className="flex flex-col items-center justify-center space-y-2">
        <Title
          as="h1"
          className="font-bold text-white leading-10 text-[40px] text-center"
        >
          FAQ
        </Title>
        <Text as="p" className="text-white/50 text-sm">
          Teaches the Art of strength and resilience
        </Text>
      </div>
      <Container
        className="max-w-3xl mx-auto flex flex-col items-start space-y-2 w-full"
        clean
      >
        {mockFAQData.map((faq) => (
          <Collapse
            key={faq.id}
            className="w-full"
            duration={600}
            header={({ open, toggle }) => (
              <div
                onClick={toggle}
                className={cn(
                  "w-full  flex items-center text-white p-4 rounded-md cursor-pointer justify-between border border-[#454647]/50 bg-white/[0.08]"
                )}
              >
                <span className="flex items-center text-sm">{faq.question}</span>

                <PiCaretDownBold
                  strokeWidth={3}
                  className={cn(
                    "h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200",
                    open && "rotate-40 "
                  )}
                />
              </div>
            )}
          >
            <div className="bg-[#090909] text-white/50 p-4 rounded-md">
              <Text className="text-sm">{faq.answer}</Text>
            </div>
          </Collapse>
        ))}
      </Container>
    </section>
  );
};

export default FaqList;
