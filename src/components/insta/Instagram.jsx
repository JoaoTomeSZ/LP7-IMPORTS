import "./Insta.css"
import InstaText from "./InstaText"

const Instagram = () => {
  return (
    <div className='min-h-screen background flex justify-end items-center'>
        <div className="text-right flex items-center max-w-[50%] w-full justify-center">
            <InstaText/>
        </div>
    </div>
  )
}

export default Instagram