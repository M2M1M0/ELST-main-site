import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
    logo: any
}

const CompanyLogo = ({ logo }: Props) => {
    const [currentImage, setCurrentImage] = useState(logo.image1);

    const handleMouseEnter = () => {
        setCurrentImage(logo.image2);
    };

    const handleMouseLeave = () => {
        setCurrentImage(logo.image1);
    };

    return (
        <Image
            className='w-full h-16 object-contain'
            src={currentImage}
            alt={logo.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    )
}

export default CompanyLogo