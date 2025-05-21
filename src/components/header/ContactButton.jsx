import React from 'react'
import {Link} from "react-router-dom"

const ContactButton = () => {
  return (
    <div className=' justify-center text-center text-white bg-[#525252] px-5 py-2 lg:flex hidden'>
        <Link to='/Galeria' className='text-white text-xl'><p>Galeria</p></Link>
    </div>
  )
}

export default ContactButton