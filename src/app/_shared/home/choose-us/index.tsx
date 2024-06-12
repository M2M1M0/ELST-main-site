import React from 'react'
import Container from '@/components/container'
import { Title, Text } from "@/components/ui/text"
import WhyChooseUs from './why-choose-us'
import image from "../../../../../public/choose-us/Frame6140.png"
import Image from 'next/image'

type Props = {}

const whyChoose = [
    {
        title: "01 - Commitment",
        description: "Our commitment to our clients is unwavering. We go above and beyond to ensure your success and satisfaction with every project."
    },
    {
        title: "02 - Excellence",
        description: "Our commitment to our clients is unwavering. We go above and beyond to ensure your success and satisfaction with every project."
    },
    {
        title: "03 - Quality",
        description: "Our commitment to our clients is unwavering. We go above and beyond to ensure your success and satisfaction with every project."
    },
    {
        title: "04 - Innovation",
        description: "Our commitment to our clients is unwavering. We go above and beyond to ensure your success and satisfaction with every project."
    },
]

function ChooseUs({ }: Props) {
    return (
        <Container className={"mt-24 grid grid-cols-1 gap-8 mx-auto items-center md:grid-cols-2 h-full md:h-[70vh]"}>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col gap-2'>
                    <Title className='font-bold text-2xl'>
                        Why you choose us?
                    </Title>
                    <Text className='font-light text-center max-w-xl'>
                        Embark on a journey of financial innovation with us, where tradition meets cutting-edge technology. As leaders in the field.
                    </Text>
                    <div className='flex flex-col gap-4 mt-5 max-w-lg'>
                        {whyChoose.map((whyChoose, index) => (
                            <WhyChooseUs key={index} whyChoose={whyChoose} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-max relative h-[28rem]'
            // style={{ backgroundImage: `url('../../../../../public/choose-us/Frame6140.png')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >
                <Image src={image} alt="" className='w-max h-full object-cover z-10 -rotate-[15] rounded-xl' />
                <Image src={image} alt="" className='absolute top-0 w-max h-full object-cover -rotate-6 rounded-xl' />
            </div>

        </Container>
    )
}

export default ChooseUs