import HeroText from "./HeroText"


const Hero = () => {
  return (
    <div id='inicio' className="min-h-[calc(100vh-150px)] h-full flex justify-center items-center scroll-mt-20">
        <div>
            <HeroText/>
        </div>
    </div>
  )
}

export default Hero