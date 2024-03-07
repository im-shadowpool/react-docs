import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
         <div className='absolute text-zinc-500 top-[5%] w-full py-10 flex justify-center text-large font-semibold'>Documents</div>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-emerald-200'>Docs.</div>
    </div>
    </>
    
  )
}

export default Background