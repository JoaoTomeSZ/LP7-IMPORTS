import React from 'react'
import TalkMe from './TalkMe'
import TalkToMeText from './TalkToMeText'

const TalkToMe = () => {
  return (
    <div id='faleComigo' className='min-h-screen max-w-full flex justify-center'>
        <div className='flex max-w-full w-full justify-between items-center'>
            <TalkMe/>
            <TalkToMeText/>
        </div>
        
    </div>
  )
}

export default TalkToMe