import Container from '@/components/container'
import React from 'react'
import { Title, Text } from "@/components/ui/text"
import { stasData } from '@/constants/constants'
import Statistics from './statistics'
import Image from 'next/image'
import component from "@public/stats/Component_5.png"
import person from "@public/stats/Rectangle 1697.png"
import bgImage from "@public/stats/Group1171275296.png"


type Props = {}


function Stats({ }: Props) {

    return (
        <Container className='mt-24'>
            <div
                className='relative rounded-2xl flex flex-col gap-3 text-white p-8 md:p-12 md:px-16 bg-gradient-to-br to-[#A03A43] from-[#737373]'
            >
                <Title className='font-bold text-3xl'>
                    Software Solutions Tailored for Your Business Success...
                </Title>
                <Text className='font-light text-lg leading-6'>
                    From the initial spark of an idea to the final product, we turn visions into reality with precision and passion. Experience seamless innovation and unparalleled craftsmanship with our expert team, dedicated to bringing your concepts to life.
                </Text>

                {/* <Image src={bgImage} alt="Footer pattern" fill /> */}
            </div>

            <div className='grid grid-cols-2 md:grid-cols-6 gap-6 justify-center items-center mx-auto my-16'>
                {stasData.map((data, index) => (
                    <Statistics {...data} key={index + "Stat Data"} />
                ))}
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
                <div style={{
                    boxShadow: "0px 4px 20px 0px #3333330D"
                }}
                    className='relative boder-[0.6px] border-[#A03A434D] pb-16 p-6 h-fit flex flex-col gap-2 rounded-[15px] bg-[#ffffff] shadow-lg shadow-[#3333330D]'>
                    <Title className='font-bold text-xl'>
                        Over 28 Products
                    </Title>
                    <Text className='font-light'>
                        Discover the innovation behind our 28+ groundbreaking products designed to transform your business.
                    </Text>

                    <Image src={component} alt="" className='absolute -right-4 -top-4 object-contain w-28 h-28' />
                </div>

                <div style={{
                    boxShadow: "0px 4px 20px 0px #3333330D"
                }}
                    className='relative boder-[0.3px] border-[#A03A434D] pb-16 p-6 h-fit flex flex-col gap-2 rounded-[15px] bg-[#ffffff] shadow-lg shadow-[#3333330D]'>
                    <Title className='font-bold text-xl'>
                        Creating Waves of Change: Empowering Impactful Solutions
                    </Title>
                </div>

                <div className='relative rounded-2xl flex flex-col gap-5 text-white p-8 bg-gradient-to-br to-[#A03A43] from-[#737373]'>

                    <Title className='font-bold text-2xl'>
                        “Leading the Charge in Financial Innovation. Your Partner in Banking Excellence. Leading the Charge in Financial Innovation. ”
                    </Title>

                    <div className='flex gap-2'>
                        <Image src={person} alt="" />
                        <div className='flex flex-col'>
                            <Title className='font-bold text-base'>
                                Ato Yonas Kebede
                            </Title>
                            <Text className='font-light text-sm'>
                                CEO and Director of Dashen Bank
                            </Text>

                        </div>
                    </div>

                    {/* <Image src={bgImage} alt="Footer pattern" fill /> */}

                </div>

            </div>

        </Container>
    )
}

export default Stats