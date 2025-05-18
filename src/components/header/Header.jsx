import ContactButton from "./ContactButton"
import DropDownMenu from "./DropDownMenu"
import HeaderLogo from "./HeaderLogo"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="max-w-full w-full flex justify-center items-center px-5 sticky z-50 top-0 bg-black">
        <div className="max-w-full w-full flex justify-between items-center">
          <HeaderLogo/>
          <Nav/>
          <ContactButton/>
          <DropDownMenu/>
          </div>
    </div>
  )
}

export default Header