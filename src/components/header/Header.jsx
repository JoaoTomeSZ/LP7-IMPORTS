import ContactButton from "./ContactButton"
import HeaderLogo from "./HeaderLogo"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="max-w-full w-full flex">
        <HeaderLogo/>
        <Nav/>
        <ContactButton/>
    </div>
  )
}

export default Header