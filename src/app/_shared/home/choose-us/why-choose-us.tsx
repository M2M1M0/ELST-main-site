import React, { useState } from 'react'
import { Title, Text } from "@/components/ui/text"
type Props = {
    whyChoose: {
        title: string,
        description: string
    }
}

function WhyChooseUs({
    whyChoose: { title, description }
}: Props) {
    const [open, setOpen] = useState(false)
    return (
        <div onClick={() => setOpen((prev: boolean) => !prev)}
            className='flex flex-col p-5 gap-1 rounded-lg cursor-pointer bg-[#ffffff] shadow-md'>
            <Title className='font-bold text-primary'>
                {title}
            </Title>
            {open &&
                <Text className='font-light text-sm'>
                    {description}
                </Text>
            }
        </div>
    )
}

export default WhyChooseUs