import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { BiSolidQuoteRight } from "react-icons/bi";

import { Title, Text } from "@/components/ui/text"

type Props = {
    title: string,
    description: string,
    fullName: string,
    image: StaticImageData,
    role: string
}

function Testimonial({ title, description, fullName, image, role }: Props) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full'>
            <div className='w-full col-span-1 relative'>
                <Image src={image} alt={title} className='max-w-lg w-full aspect-video object-cover rounded-xl' />
                <div className='absolute right-0 top-0 flex items-center justify-center rounded-full p-4 bg-primary'>
                    <BiSolidQuoteRight className='text-[#fff]' size={20}/>
                </div>
            </div>

            <div className='flex flex-col gap-2 col-span-2 px-2'>
                <Title className='font-bold text-lg'>{title}</Title>
                <Text className='text-base max-w-xxl w-full text-justify'>{description}</Text>

                <div className='mt-4'>
                    <Text className='font-bold text-sm'>{fullName}</Text>
                    <Text className='font-light text-sm'>{role}</Text>
                </div>
            </div>
        </div>
    )
}

export default Testimonial