"use client"
import React, { useEffect, useState } from 'react'
import cn from '@/utils/class-names';
import { GoArrowUp } from 'react-icons/go';

type Props = {
    className: string
}

function ScrollToUp({ className }: Props) {

    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollable(window.scrollY > 50); // Update state when scrolled past the top
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cn(className)}>
            {isScrollable &&
                <button
                    onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}
                    className="absolute bottom-4 right-4 rounded-full p-3"
                    style={{ background: "#EEEEEE", border: "0.5px", boxShadow: "0px 0px 15px 0px #00000033" }}
                >
                    <GoArrowUp className="text-primary" size={30} />
                </button>
            }
        </div>
    )
}

export default ScrollToUp