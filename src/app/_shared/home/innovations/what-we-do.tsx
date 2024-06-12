import Container from '@/components/container'
import Image from 'next/image'
import React from 'react'
import image from "@public/innovations/what-we-do.png"
import { Title, Text } from "@/components/ui/text"
import { GiDiamonds } from "react-icons/gi";

type Props = {}

const WhatWeDoLists = [
  {
    name: "Empowering Business Evolution",
    description: "Transforming industries through innovative solutions and strategic insights for a dynamic future."
  },
  {
    name: "Building Future",
    description: "Transforming industries through innovative solutions and strategic insights for a dynamic future."
  },
  {
    name: "Transforming Life",
    description: "Transforming industries through innovative solutions and strategic insights for a dynamic future."
  },
]

function WhatWeDo({ }: Props) {
  return (
    <Container className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center'>
      <div className='w-full h-full flex items-center justify-center'>
        <Image src={image} alt="" className="aspect-square object-contain" />
      </div>

      <div className='flex flex-col gap-6'>
        {WhatWeDoLists.map(({ name, description }, index) => (

          <div key={index}
            className='flex gap-4'>
            <GiDiamonds size={25} className='mt-1' />
            <div className='flex flex-col gap-2'>
              <Title className='text-2xl font-bold'>{name}</Title>
              <Text className='text-base font-light max-w-lg'>{description}</Text>
            </div>
          </div>
        ))}

      </div>
    </Container>
  )
}

export default WhatWeDo