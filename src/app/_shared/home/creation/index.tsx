import Container from '@/components/container'
import React from 'react'
import { Text } from '@/components/ui/text'

import { BiLike } from "react-icons/bi";
import TCI from './tci';

type Props = {}

function Creations({ }: Props) {
    return (
        <Container className='flex flex-col gap-12 mt-24 max-w-8xl  mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4'>
                <Text className='font-bold text-xl md:text-4xl px-3'>
                    Creating Impact Through Innovation: <br />
                    Our Process for Bringing Your Ideas to Life
                </Text>
                <div className='flex flex-col justify-between gap-4 px-3'>
                    <Text className='flex items-center gap-4'>
                        <BiLike size={20} />
                        From concept to creation
                    </Text>
                    <Text className='font-light max-w-2xl w-full text-justify'>
                        From the initial spark of an idea to the final product, we turn visions into reality with precision and passion. Experience seamless innovation and unparalleled craftsmanship with our expert team, dedicated to bringing your concepts to life.
                    </Text>
                </div>
            </div>

            {/* Teamwork, Creativity and Impact */}
            <TCI />

        </Container>
    )
}

export default Creations