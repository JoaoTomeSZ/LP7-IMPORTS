import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/about/About'
import TalkToMe from '../components/talkToMe/TalkToMe'

const InitialPage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <TalkToMe/>
    </div>
  )
}

export default InitialPage