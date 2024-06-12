import React from 'react'
import Container from '@/components/container'
import { Title, Text } from "@/components/ui/text"
import Image from 'next/image'

import image1 from "@public/products/teletv.svg"
import image2 from "@public/products/cashgo.svg"
import image3 from "@public/products/chatbirr.svg"
import image4 from "@public/products/getrooms.svg"
import image5 from "@public/products/ethiodirect.svg"
import image6 from "@public/products/getfee.svg"
import image7 from "@public/products/dube.svg"

type Props = {}

const Hero = (props: Props) => {
  return (
    <Container className='mt-24'>
      <div className='flex flex-col items-center leading-7'>

        <Title className="font-bold text-5xl text-center mx-auto max-w-6xl -mt-6">
          Explore Our Extensive Portfolio of Innovative such Products and Solutions
        </Title>

      </div>

      <div className='flex flex-col mt-8'>
        <div className='flex justify-between mx-auto max-w-5xl w-full'>
          <Image src={image1} alt="" className="h-10 w-20 p-3 rounded-lg object-cover shadow-lg" />
          <Image src={image2} alt="" className="h-20 w-40 p-3 rounded-lg object-contain shadow-lg" />
        </div>
        <div className='flex justify-between mx-auto max-w-md w-full -mt-3'>
          <Image src={image3} alt="" className="h-12 w-40 p-3 rounded-lg object-contain shadow-lg" />
          <Image src={image4} alt="" className="h-15 w-20 p-3 rounded-lg object-contain shadow-lg" />
        </div>
        <div className='flex justify-between mx-auto max-w-[52rem] w-full -mt-1'>
          <Image src={image5} alt="" className="h-10 w-24 p-3 rounded-lg object-cover shadow-lg" />
          <Image src={image6} alt="" className="h-15 w-40 p-3 rounded-lg object-contain shadow-lg" />
        </div>
        <div className='flex justify-center mx-auto w-full -mt-6 -mr-8'>
          <Image src={image7} alt="" className="h-25 w-40 p-3 rounded-lg object-contain shadow-lg" />
        </div>

      </div>

    </Container>
  )
}

export default Hero