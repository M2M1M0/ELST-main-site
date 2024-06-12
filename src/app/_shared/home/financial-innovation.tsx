import React from 'react'
import { Title, Text } from "@/components/ui/text"
import Container from '@/components/container'
import bgPattern from "@public/pattern/BackgroundPattern 4.png"
import Image from 'next/image'

type Props = {}

function FinancialInnovation({ }: Props) {
    return (
        <div className='mt-24 bg-primary flex flex-co w-full items-center justify-center h-[50vh] relative'>
            <Image src={bgPattern} alt='bgpattern' fill/>

            <Container className='flex flex-col gap-6 text-[#fff]'>
                <Title className='font-bold text-2xl md:text-4xl text-center max-w-4xl w-full'>
                    Leading the Charge in Financial Innovation. Your Partner in Banking Excellence.
                </Title>
                <Text className='font-light text-center max-w-5xl w-full'>
                    Embark on a journey of financial innovation with us, where tradition meets cutting-edge technology. As leaders in the field, we pave the way for banking excellence, offering tailored solutions to meet your every need.
                </Text>
            </Container>
        </div>
    )
}

export default FinancialInnovation