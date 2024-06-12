import React from 'react'
import Container from '@/components/container'

import { Title, Text } from "@/components/ui/text"
import Image from 'next/image'
import map from "@public/contact-us/Rectangle1725.png"
import ContacUsForm from './contac-us-form'

type Props = {}

function ContactUs({ }: Props) {
    return (
        <Container className='mt-24 flex flex-col gap-8'>
            <div>
                <Title className='text-2xl font-bold'>
                    Get In Touch: Let’s build something great together.
                </Title>
                <Text className='font-light text-sm'>
                    For general enquires you can touch with our front desk supporting team
                </Text>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-5 w-full'>
                <ContacUsForm className={"col-span-2"} />

                <Image src={map} alt="" className='w-full h-max object-contain col-span-3' />

            </div>
        </Container>
    )
}

export default ContactUs