import { IoHomeSharp, IoAlertCircleOutline, IoLogoWhatsapp } from "react-icons/io5";

const Nav = () => {

    const NavItems = ["Início", "Sobre", "Contatos"]
    const conectors = ["#inicio", "#sobre", "#contatos"]
    const icons = [<IoHomeSharp/>, <IoAlertCircleOutline/>, <IoLogoWhatsapp/>]
    
  return (
    <nav className="max-w-full w-full lg:flex hidden justify-center items-center text-center">
        <ul className="flex text-center justify-between items-center max-w-full ">
            {NavItems.map((list, index) => (
                <li key={index} className="text-white text-2xl flex justify-between items-center max-w-full w-full text-center p-5">
                    <a href={"/" + conectors[index]} className="flex w-full max-w-full items-center text-center whitespace-nowrap gap-1 font-light">{list}{icons[index]}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Nav