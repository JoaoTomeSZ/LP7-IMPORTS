import HeroText from "./HeroText"

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-150px)] h-full flex justify-center items-center">
        <div>
            <HeroText/>
        </div>
    </div>
  )
}

export default Hero