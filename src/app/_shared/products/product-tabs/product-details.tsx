import React from 'react'
import { Title, Text } from "@/components/ui/text"

type Props = {}

function ProductDetails({ }: Props) {
    return (
        <div className='p-5 w-fit'>
            <button className='px-3 round bg-[#1A6B4814] text-[#2F654C]'>
                Payment Solution
            </button>
            <div className='flex flex-col gap-2 mt-2'></div>
            <Title className='text-2xl font-bold'>
                Nedaj App
            </Title>
            <Text className='text-justify w-full'>
                Nedaj is a cutting-edge mobile application designed to streamline the process of fuel payment for car owners. With Nedaj, users can effortlessly manage and track their fuel consumption while conveniently making payments directly from their smartphones. Whether refueling at a gas station or topping up at designated fueling points, Nedaj offers a seamless and secure payment experience. Say goodbye to cash transactions and cumbersome payment methods – Nedaj puts the power of fuel payment in the palm of your hand.
            </Text>
        </div>
    )
}

export default ProductDetails