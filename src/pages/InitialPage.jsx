import Header from '../components/header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/about/About'
import Feedbacks from '../components/feedbacks/Feedbacks'
import SeeGalery from '../components/see/SeeGalery'
import Footer from '../components/footer/Footer'

const InitialPage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Feedbacks/>
        <SeeGalery/>
        <Footer/>
    </div>
  )
}

export default InitialPage