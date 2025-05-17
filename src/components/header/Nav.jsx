const Nav = () => {

    const NavItems = ["Início", "Sobre", "Fale comigo!"]
    const conectors = ["#inicio", "#sobre", "#faleComigo"]
    
  return (
    <div>
        <ul className="flex gap-10">
            {NavItems.map((list, index) => (
                <li key={index} className="text-white">
                    <a href={conectors[index]}>{list}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Nav