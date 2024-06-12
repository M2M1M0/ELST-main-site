import React from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import image1 from "@public/blogs/blog1.png"
import image2 from "@public/blogs/blog2.png"
import image3 from "@public/blogs/blog3.png"
import Blog from './blog';
import useMedia from 'react-use/lib/useMedia';

type Props = {}

const blogs = [
  {
    title: "AI: Shaping the Future of Tech",
    description: "In this era of rapid technological advancement, artificial intelligence (AI) stands at the forefront, reshaping industries and revolutionizing the way we ....",
    date: "April 12,2024",
    image: image1
  },
  {
    title: "AI: Shaping the Future of Tech",
    description: "In this era of rapid technological advancement, artificial intelligence (AI) stands at the forefront, reshaping industries and revolutionizing the way we ....",
    date: "April 12,2024",
    image: image2
  },
  {
    title: "AI: Shaping the Future of Tech",
    description: "In this era of rapid technological advancement, artificial intelligence (AI) stands at the forefront, reshaping industries and revolutionizing the way we ....",
    date: "April 12,2024",
    image: image3
  },
  {
    title: "AI: Shaping the Future of Tech",
    description: "In this era of rapid technological advancement, artificial intelligence (AI) stands at the forefront, reshaping industries and revolutionizing the way we ....",
    date: "April 12,2024",
    image: image2
  },
  {
    title: "AI: Shaping the Future of Tech",
    description: "In this era of rapid technological advancement, artificial intelligence (AI) stands at the forefront, reshaping industries and revolutionizing the way we ....",
    date: "April 12,2024",
    image: image1
  },
]

function News({ }: Props) {
  const isMobile = useMedia('(max-width: 620px)', false);

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-[#EEEEEE] border-[3px] hover:border-primary hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute -bottom-20 left-[30%] md:left-[47%]"
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
        className="p-3 bg-[#EEEEEE] border-[3px] hover:border-primary hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute -bottom-20 left-[60%] md:left-[53%]"
        onClick={onClick}
      >
        <IoIosArrowRoundForward />
      </div>
    );
  };
  var settings = {
    className: "flex gap-6",
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="flex gap-3 w-full">
        {blogs.map((blog, index) => (
          <div key={index + "Blog"}>
            <Blog {...blog} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default News
