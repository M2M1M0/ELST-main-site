import React from 'react'
import { Title, Text } from "@/components/ui/text"
import CountUp from 'react-countup';

type Props = {
    name: string,
    value: number,
    description: string
}

function Statistics({ name, value, description }: Props) {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex gap-2 justify-center font-bold text-2xl md:text-4xl'>
                <Title>
                    <CountUp
                        decimal="."
                        // decimals={2}
                        end={value}
                    />
                </Title>
                <Title>
                    {description}
                </Title>
            </div>
            <Text className='text-lg text-center uppercase font-normal'>
                {name}
            </Text>
        </div>
    )
}

export default Statistics