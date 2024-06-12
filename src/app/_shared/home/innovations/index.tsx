import Container from '@/components/container'
import React from 'react'
import { Title, Text } from "@/components/ui/text"
import InnovationTabs from './tabs'
import bgPattern from "@public/pattern/BackgroundPattern 2.png"
import Image from 'next/image'

type Props = {}

function Innovations({ }: Props) {
    return (
        <Container className='mt-24 flex flex-col gap-12'>

            <div className='flex flex-col gap-5'>
                <Title className='text-xl md:text-3xl font-bold'>
                    Empowering Visionaries, Driving Innovation, <br />
                    and Transforming Futures
                </Title>
                <Text className="font-light text-center">
                    Pioneering solutions that redefine industry standards and spark change. Creating opportunities and driving growth for a brighter tomorrow.
                </Text>
            </div>

            <div className='bg-[#F2F2F2] rounded-2xl w-full h-full pb-6 relative'>
                <Image src={bgPattern} alt="" fill />

                <InnovationTabs />
            </div>

        </Container>
    )
}

export default Innovations