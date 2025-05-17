import React from 'react'
import AboutText from './AboutText'
import BigImage from './BigImage'
import Sells from './Sells'

const About = () => {
  return (
    <div id='sobre' className='min-h-screen h-full max-w-full w-full p-5 justify-center items-center flex flex-wrap'>
      <div className='flex lg:flex-row flex-col w-full'>
        <div className='flex flex-col max-h-full justify-between max-w-full w-full flex-wrap'>
              <AboutText/>
              <Sells/>
        </div>
        <div className='max-w-full pt-5 flex justify-center'>
              <BigImage/>
            </div>
      </div>
        
    </div>
  )
}

export default About