import React from 'react'
import AboutText from './AboutText'
import BigImage from './BigImage'
import Sells from './Sells'
import Slide from './Slide'
import "./About.css"
import LargeScrenSlide from './LargeScreenSlide'

const About = () => {
  return (
    <div id='sobre' className='min-h-screen h-full max-w-full w-full p-5 justify-center items-center flex flex-wrap scroll-mt-20'>
      <div className='flex lg:flex-row flex-col w-full h-full'>
        <div className='flex-col max-h-full h-full items-end justify-between max-w-full w-full flex-wrap'>
              <AboutText/>
              <Sells/>
        </div>
        <div className=' max-w-full pt-5 justify-center'>
              <LargeScrenSlide/>
            </div>
      </div>
        <Slide/>
    </div>
  )
}

export default About