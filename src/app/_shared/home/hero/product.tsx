import React from 'react'

import { motion } from "framer-motion"
import Link from 'next/link';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import cn from '@/utils/class-names';

type Props = {
    x: string,
    y: string,
    label?: string,
    icon?: StaticImport,
    reverse?: boolean,
}

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
};

function Product({
    x,
    y,
    label,
    icon,
    reverse
}: Props) {
    const NavLink = motion(Link);

    return (
        <>
            <div
                className="absolute cursor-pointer z-50"
                style={{ transform: `translate(${x}, ${y})`, borderRadius: "50%", boxSizing: "border-box" }}
            >
                <div
                    className="rounded-full flex items-center justify-center w-full h-full"
                    aria-label={label}
                >
                    <span className={cn(reverse ? "animate-spin-slow" : "animate-spin-slow-reverse",
                        "relative"
                    )}>
                        <Image
                            src={icon as StaticImport}
                            alt={label as string}
                            className='w-20 h-20 object-contain rounded-full  p-1 bg-[#fff] border-[0.03px]' />
                        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                        {/* <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                            {label}
                        </span> */}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Product