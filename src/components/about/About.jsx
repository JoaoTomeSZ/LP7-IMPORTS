import "./About.css"
import AboutText from "./AboutText"
import banner from "/banner.jpg"


const About = () => {
  
  return (
    
    <div id='sobre' className='min-h-screen h-full max-w-full w-full justify-center items-center flex flex-col flex-wrap scroll-mt-40 gap-10'>
      <div className="flex md:flex-row flex-col w-full max-w-full justify-center lg:justify-around items-center text-center gap-5 p-5">
      <AboutText/>
      <img className="lg:w-[450px] lg:h-full md:h-[400px] max-w-full h-[350px] w-full md:object-cover object-fill rounded-4xl " src={banner} alt="" />
      </div>
    </div>
  )
}

export default About