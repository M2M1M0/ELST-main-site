import React from 'react'

type Props = {
    setOpenMenu: (arg: boolean) => void
}

function LayerThree({ setOpenMenu }: Props) {
    return (
        <div className='absolute right-0 top-0 h-screen max-w-[90%] md:max-w-[400px] w-full bg-black z-50 transition-all ease-in-out duration-500 translate delay-1000'>
            <button onClick={() => setOpenMenu(false)}
                className='text-white text-2xl absolute right-4 top-4'
            >
                X
            </button>
        </div>
    )
}

export default LayerThree