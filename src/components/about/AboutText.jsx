import React from 'react'
import Cards from './Cards'

const AboutText = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='md:text-left text-center'>
            <h1 className='text-white lg:text-8xl sm:text-5xl text-4xl md:max-w- lg:max-w-[800px] '>A loja <span className='text-[#E5A020] '>número 1</span> de importações no Brasil!</h1>
            <p className='text-[#828282] lg:text-3xl md:text-2xl text-xl font-extralight'>Desde 2021 entregando qualidade e conforto.</p>   
        </div>
        <Cards/>
    </div>
  )
}

export default AboutText