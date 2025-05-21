import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import {Link} from 'react-router-dom'

const DropDownMenu = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden relative inline-block items-center justify-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white flex items-center cursor-pointer text-2xl">
          Menu <MdArrowDropDown/>
        </button>
        {isOpen && (
          <div className="origin-top-left absolute left-[-25px] bg-white w-36">
            <div className="py-1">
              <a href="#inicio" className="block px-4 py-2">Início</a>
              <a href="#sobre" className="block px-4 py-2">Sobre</a>
              <a href="#faleComigo" className="block px-4 py-2">Fale comigo!</a>
              <Link to="/Galeria" className="block px-4 py-2">Galeria</Link>
            </div>
          </div>
        )}
    </div>
  )
}

export default DropDownMenu