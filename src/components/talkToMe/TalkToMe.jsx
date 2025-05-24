import React from 'react'
import TalkMe from './TalkMe'
import TalkToMeText from './TalkToMeText'

const TalkToMe = () => {
  return (
    <div id='faleComigo' className='min-h-screen h-full max-w-full flex scroll-mt-20'>
        <div className='flex sm:flex-row flex-col-reverse max-w-full w-full md:items-center items-center p-5'>
            <TalkMe/>
            <TalkToMeText/>
        </div>
        
    </div>
  )
}

export default TalkToMe