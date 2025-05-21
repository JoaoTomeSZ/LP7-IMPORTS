import Logo from "/lp7Logo.png"
import {Link} from "react-router-dom"

const HeaderLogo = () => {
  return (
    <Link to="/"><img src={Logo} alt="LeoP7 Imports Logo" className="max-h-[150px]"/></Link>
  )
}

export default HeaderLogo