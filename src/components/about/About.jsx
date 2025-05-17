import React from 'react'
import AboutText from './AboutText'
import BigImage from './BigImage'
import Sells from './Sells'

const About = () => {
  return (
    <div id='sobre' className='min-h-screen h-full max-w-full w-full p-5 justify-center items-center flex'>
      <div className='flex w-full'>
        <div className='flex flex-col max-h-full justify-between max-w-full w-full'>
              <AboutText/>
              <Sells/>
        </div>
        <div className='w-[700px]'>
              <BigImage/>
            </div>
      </div>
        
    </div>
  )
}

export default About