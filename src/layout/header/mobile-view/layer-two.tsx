import React from 'react'

type Props = {}

function LayerTwo({}: Props) {
  return (
    <div className='absolute right-0 top-0  h-screen w-[75%] bg-black/30 z-40 transition-transform delay-700 -translate-x-1/2'/>
  )
}

export default LayerTwo