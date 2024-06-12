import React from 'react'

type Props = {
    setOpenMenu: (arg: boolean) => void
}

function LayerOne({ setOpenMenu }: Props) {
    return (
        <div onClick={() => setOpenMenu(false)}
            className='absolute right-0 top-0 h-screen w-full bg-black/60 z-10 transition delay-300' ></div>
    )
}

export default LayerOne