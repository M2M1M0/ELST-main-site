import React from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';

import image1 from "@public/creations/Rectangle 1785 (1).png"
import image2 from "@public/creations/Rectangle 1784 (1).png"
import image3 from "@public/creations/Rectangle 1786.svg"

type Props = {}

function ImageSlider({ }: Props) {

    // var settings = {
    //     className: "flex gap-6",
    //     dots: false,
    //     infinite: true,
    //     autoplay: false,
    //     slidesToShow: isMobile ? 1 : 3,
    //     slidesToScroll: isMobile ? 1 : 3,
    //     arrows: true,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    // };

    const settings = {
        className: "center slider variable-width",
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 600,
    };

    return (
        <div>

            <div className="slider-container w-full h-full">
                <Slider {...settings} className="flex gap-3 h-96 w-full relative">
                    <div className='w-full h-96'>
                        <Image src={image1} alt='' fill className='object-fill w-full h-full ' />
                    </div>
                    <div className='w-full h-96'>
                        <Image src={image2} alt='' fill className='object-contain w-full h-full ' />
                    </div>
                    <div className='w-full h-96'>
                        <Image src={image3} alt='' fill className='object-fill w-full h-full ' />
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default ImageSlider