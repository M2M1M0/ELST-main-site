import React from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Testimonial from './testimonial';

import { Title, Text } from "@/components/ui/text"
import Container from '@/components/container'
import image1 from "@public/testimonials/Rectangle1618.png"
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import bgPattern from "@public/pattern/BackgroundPattern5.png"
import Image from 'next/image';

type Props = {}

const testimonials = [
    {
        title: "Help us improve our productivity",
        description: "Partnering with EagleLion has been a game-changer for us. Their expertise in software development and commitment to innovation have turned our ideas into reality. Their team's dedication, attention to detail, and ability to deliver high-quality solutions have exceeded our expectations. We highly recommend EagleLion for anyone seeking a reliable and innovative software development partner.",
        fullName: "James Westervelt",
        role: "CEO, of Tamegas furnitures",
        image: image1
    },
    {
        title: "Help us improve our productivity",
        description: "Partnering with EagleLion has been a game-changer for us. Their expertise in software development and commitment to innovation have turned our ideas into reality. Their team's dedication, attention to detail, and ability to deliver high-quality solutions have exceeded our expectations. We highly recommend EagleLion for anyone seeking a reliable and innovative software development partner.",
        fullName: "James Westervelt",
        role: "CEO, of Tamegas furnitures",
        image: image1
    },
]


function Testimonials({ }: Props) {


    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="hover:text-primary cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute -bottom-10 left-1"
                onClick={onClick}
            >
                <IoIosArrowRoundBack />
            </div>
        );
    };
    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="hover:text-primary cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute -bottom-10 left-8"
                onClick={onClick}
            >
                <IoIosArrowRoundForward />
            </div>
        );
    };

    var settings = {
        className: "",
        dots: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Container className='mt-24 bg-[#EEEEEE] relative'>
            <Image src={bgPattern} alt=""
                // fill
                className="absolute right-0 top-0 h-full w-2/3 object-cover"
            />
            <div className='max-w-7xl mx-auto w-full flex flex-col gap-6 pb-8'>

                <Text className='font-light'>
                    Testimonials
                </Text>
                <Title className='font-bold text-xl'>
                    Words of Trust: Real Stories from Satisfied Clients
                </Title>

                <div className="slider-container flex flex-col !items-center !justify-center">
                    <Slider {...settings} className="w-full">
                        {testimonials.map((blog, index) => (
                            <Testimonial {...blog} key={index + "Blog"} />
                        ))}
                    </Slider>
                </div>
            </div>
        </Container>
    )
}

export default Testimonials