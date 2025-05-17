import { FaArrowDownLong } from "react-icons/fa6";

const DownArrow = () => {
  return (
    <div className="fixed bottom-1 right-[50%] flex justify-center items-center">
        <div className="bg-[#5252529a] flex justify-center items-center text-center p-4 rounded-full">
            <FaArrowDownLong color="white"/>
        </div>
    </div>
  )
}

export default DownArrow