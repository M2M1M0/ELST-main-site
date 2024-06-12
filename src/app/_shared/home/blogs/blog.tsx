import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { Title, Text } from "@/components/ui/text"

type Props = {
    title: string,
    description: string,
    date: string,
    image: StaticImageData
}

function Blog({ title, description, date, image }: Props) {
    return (
        <div className='flex flex-col gap-3'>
            <Image src={image} alt={title} className='max-w-[24rem] 2xl:max-w-[26rem] w-full aspect-video object-cover rounded-xl' />

            <div className='flex flex-col gap-2'>
                <Text className='font-light text-sm'>{date}</Text>
                <Title className='font-bold text-lg'>{title}</Title>
                <Text className='text-base max-w-[24rem] 2xl:max-w-[26rem] w-full text-justify'>{description}</Text>
            </div>
        </div>
    )
}

export default Blog