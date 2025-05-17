import ContactButton from "./ContactButton"
import HeaderLogo from "./HeaderLogo"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="max-w-full w-full flex justify-center items-center px-5 sticky top-0 bg-black">
        <div className="max-w-[90%] w-full flex justify-between items-center">
          <HeaderLogo/>
          <Nav/>
          <ContactButton/>
          </div>
    </div>
  )
}

export default Header