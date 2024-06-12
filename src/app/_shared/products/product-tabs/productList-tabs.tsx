"use client"
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from 'rizzui'
import React from 'react'
import cn from '@/utils/class-names'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ProductDetails from './product-details';

import nedaj from "@public/products/nedaj.svg"
import dube from "@public/products/dube.svg"
import guzogo from "@public/products/guzogo.svg"
import getrooms from "@public/products/getrooms.svg"

import smartphone from "@public/products/smartphone.png"
import Image from 'next/image';

type Props = {}

const tabs = [
    {
        title: "Nedaj",
        icon: nedaj,
        image: smartphone,
        component: <ProductDetails />
    },
    {
        title: "Dube",
        icon: dube,
        image: smartphone,
        component: <ProductDetails />
    },
    {
        title: "Guzogo",
        icon: guzogo,
        image: smartphone,
        component: <ProductDetails />
    },
    {
        title: "Getrooms",
        icon: getrooms,
        image: smartphone,
        component: <ProductDetails />
    },
]

function ProductListTabs({ }: Props) {

    return (
        <section className="w-full h-full flex">
            <Tabs vertical className="mt-6 flex gap-8 md:px-6 w-full">
                <TabList className="w-fit flex flex-col gap-8 overflow-auto">
                    {tabs.map(({ title, icon, image }, index) => (
                        <Tab
                            key={index}
                            className={({ selected }: { selected: boolean }) =>
                                cn(
                                    "border-[1.5px] p-6 flex w-[400px] h-[180px] rounded-xl items-center justify-around",
                                    selected ? "border-t-[#A03A43] outline-none border-r-transparent border-b-[#A03A4399] border-l-[#A03A434D]" : "border-[#8C65331A]"
                                )
                            }
                        >
                            <div className='flex items-center rounded-full justify-center p-3 bg-white borde-[#F9F9F9]'>
                                <Image src={icon} alt={title} className="w-16 h-16 shrink-0" />
                            </div>
                            <Image src={image} alt={title} className='w-48 h-36 shrink-0' />
                        </Tab>
                    ))}
                </TabList>
                <TabPanels className="flex-grow w-full">
                    {tabs.map(({ component }, index) => (
                        <TabPanel key={index} className="md:px-16 w-full">
                            {component}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </section>

    )
}

export default ProductListTabs