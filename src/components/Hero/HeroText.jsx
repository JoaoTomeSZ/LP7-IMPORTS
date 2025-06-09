import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroText = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    
    <div  className='flex max-w-full w-full text-center items-center justify-center'>
        <div className='flex flex-col'>
          <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
            <h1 className='flex text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2b2b2b73] font-bold text-5xl md:text-8xl sm:text-7xl lg:text-9xl'>LP<span className='bg-gradient-to-t bg-clip-text from-[#EFD07C] to-[#9A6B26]'>7</span> IMPORTS</h1>
            <h2 className='text-[#E5A020] lg:text-4xl md:text-3xl sm:text-2xl text-xl font-extralight italic'>• Sports • Moda • Grife •</h2>
        </motion.h1>
        </div>
    </div>
    
  )
}

export default HeroText