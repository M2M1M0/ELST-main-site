import React from 'react'
import { Title, Text } from '@/components/ui/text';
import Image from 'next/image';
import image1 from "@public/creations/Group 1171275056 (1).png"
import image2 from "@public/creations/Group 1171275052 (1).png"
import image3 from "@public/creations/Component 9 (1).png"
import ImageSlider from './image-slider';
import bgPattern from "@public/pattern/BackgroundPattern 1.png"


function Creativity() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-4 h-max relative'>
      <Image src={bgPattern} alt='bgpattern' fill/>
      <div className='flex flex-col mt-8 h-full justify-center'>
        <Title as="h1" className='font-bold text-3xl w-full'>
          Redefining Possibilities with <br />
          Creative Solutions
        </Title>

        <div className='flex justify-center items-center w-full h-full mx-auto'>
          <div className='relative min-h-[230px] max-w-md w-full py-4 px-6 flex flex-col gap-1 rounded-2xl bg-white shadow-lg'>
            <Title className='font-bold'>
              Creativity
            </Title>
            <Text>
              Creativity is at the heart of everything we do. Our innovative solutions are designed to transform businesses and drive success.
            </Text>

            <Image src={image1} alt='' className='object-contain w-full h-40 absolute -bottom-20 -left-44' />
            <Image src={image2} alt='' className='object-contain w-full h-36 absolute top-[36%] left-[40%]' />
            <Image src={image3} alt='' className='object-contain w-32 h-32 absolute -bottom-20 left-1/2 right-1/2 mx-auto' />

          </div>

        </div>
      </div>

      <div className='flex justify-center overflow-hidden h-full w-full col-span-2'>
        <ImageSlider />
      </div>
    </div>
  )
}

export default Creativity;