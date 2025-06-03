import Header from '../components/header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/about/About'
import Feedbacks from '../components/feedbacks/Feedbacks'
import SeeGalery from '../components/see/SeeGalery'

const InitialPage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Feedbacks/>
        <SeeGalery/>
    </div>
  )
}

export default InitialPage