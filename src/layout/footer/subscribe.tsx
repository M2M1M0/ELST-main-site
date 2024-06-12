import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { Input, Title } from 'rizzui'
import { LiaTelegram } from "react-icons/lia";

type Props = {}

function Subscribe({ }: Props) {
    return (
        <div className='flex flex-col gap-5'>
            <Title as="h3" className="text-white uppercase underline font-bold">
                Subscribe to our news letter
            </Title>
            <div className='flex justify-between'>
                <input placeholder='Enter your email address'
                    className='placeholder:text-white/40 focus:outline-none bg-transparent border-none border-b-4 border-b-white w-full' />

                <LiaTelegram size={40} className='text-white border-[3px] rounded-full border-white p-1' />
            </div>
        </div>
    )
}

export default Subscribe