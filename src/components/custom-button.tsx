import React from 'react'

type Props = {
    onClick: () => void
    text: string
}

const CustomButton = ({ onClick, text }: Props) => {
    return (
        <button
            className='px-10 py-1 rounded-full font-bold text-primary border-[3px] border-primary hover:text-white hover:bg-primary'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default CustomButton