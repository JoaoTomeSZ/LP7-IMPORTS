import React from 'react'

const HeroText = () => {
  return (
    <div  className='flex max-w-full w-full text-center items-center justify-center'>
        <div className='flex flex-col'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2b2b2b73] font-bold text-5xl md:text-8xl sm:text-7xl lg:text-9xl'>LP<span className='bg-gradient-to-t bg-clip-text from-[#EFD07C] to-[#9A6B26]'>7</span> IMPORTS</h1>
            <h2 className='text-[#E5A020] lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extralight italic'>• Sports • Moda • Grife •</h2>
        </div>
    </div>
  )
}

export default HeroText