import React from 'react'
import Container from '@/components/container'
import { Title, Text } from "@/components/ui/text"
import Image from 'next/image'

import image1 from "@public/discover/mobile.svg"
import image2 from "@public/discover/Group 1171275272.svg"
import image3 from "@public/discover/Untitled-3-02 2.svg"
import image4 from "@public/discover/Group 1171275275.svg"
import image5 from "@public/discover/teletv-02 2.svg"
import image6 from "@public/discover/Group 1171275260.svg"
import image7 from "@public/discover/Group 1171275265.svg"
import image8 from "@public/discover/Group 1171275263.svg"
import image9 from "@public/discover/image-removebg-preview (12) 1.svg"
import image10 from "@public/discover/Group 1171275273.svg"
import image11 from "@public/discover/Untitled-3-04 1.svg"
import image12 from "@public/discover/Untitled-3-05 2.svg"
import image13 from "@public/discover/Untitled-3-01 3.svg"
import image14 from "@public/discover/Untitled-3-10 2.svg"
import image16 from "@public/discover/chatbirr-01 2.svg"
import image17 from "@public/discover/Group 1171275270.svg"

import CustomButton from '@/components/custom-button'

type Props = {}

const Products = (props: Props) => {
  return (
    <Container className='mt-24'>
      <div className='flex flex-col items-center leading-7'>
        <p className='font-light text-base'>Our Products</p>
        <Title className="font-bold text-2xl text-center mx-auto">
          Discover our revolutionary innovations and finest products
        </Title>
        <Text className='font-light max-w-2xl text-center leading-5'>
          Explore our groundbreaking innovations and premium products, crafted to set new benchmarks for excellence and quality in the industry.
        </Text>
      </div>

      <div className='mt-12 grid grid-cols-1 lg:grid-cols-8 px-6 2xl:px-16 3xl:px-24 mx-auto'>
        <div className='col-span-3 grid grid-cols-3 items-start gap-4 mt-16'>
          <div className='flex flex-col gap-4'>
            <Image src={image2} alt="" className="h-fit w-full" />
            <Image src={image12} alt="" className="h-48 w-full p-3 rounded-lg object-contain shadow-lg " />
            <Image src={image11} alt="" className="h-32 w-full p-3 rounded-lg object-contain shadow-lg " />
          </div>

          <div className='flex flex-col gap-4'>
            <Image src={image3} alt="" className="h-48 w-full p-3 rounded-lg object-contain shadow-lg " />
            <Image src={image8} alt="" className="h-fit w-full" />
          </div>

          <div className='flex flex-col gap-4'>
            <Image src={image14} alt="" className="h-32 w-full p-3 rounded-lg object-contain shadow-lg" />
            <Image src={image12} alt="" className="h-48 w-full p-3 rounded-lg object-contain shadow-lg" />
            <Image src={image4} alt="" className="h-fit w-full" />
          </div>
        </div>



        <div className='col-span-2'>
          <Image src={image1} alt="" className="h-fit w-full" />
        </div>


        <div className='col-span-3 grid grid-cols-3 items-start gap-4 mt-16'>
          <div className='flex flex-col gap-4'>
            <Image src={image6} alt="" className="h-fit w-full" />
            <Image src={image17} alt="" className="h-40 w-full rounded-lg object-contain shadow-lg " />
            <Image src={image9} alt="" className="h-48 w-full p-3 rounded-lg object-contain shadow-lg " />
          </div>

          <div className='flex flex-col gap-4'>
            <Image src={image13} alt="" className="h-48 w-full p-3 rounded-lg object-contain shadow-lg " />
            <Image src={image5} alt="" className="h-fit w-full" />
          </div>

          <div className='flex flex-col gap-4'>
            <Image src={image10} alt="" className="h-32 w-full rounded-lg object-contain shadow-lg" />
            <Image src={image16} alt="" className="h-40 w-full p-3 rounded-lg object-contain shadow-lg" />
            <Image src={image7} alt="" className="h-32 w-full object-contain" />
          </div>
        </div>



      </div>

      <div className='w-full flex justify-center mt-6'>
        <CustomButton onClick={() => { }} text='Browse All' />
      </div>
    </Container>
  )
}

export default Products