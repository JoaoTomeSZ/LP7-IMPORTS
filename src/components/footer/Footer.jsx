import Logo from "/lp7Logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex justify-center items-center max-h-[300px] lg:h-full px-6 py-10">
      <div className="masx-w-full mx-auto grid grid-cols-2 gap-8 items-center">
        <div>
          <img className="w-40" src={Logo} alt="" />
        </div>
        <div className="text-white flex flex-col text-center items-center justify-center">
          <a
            href="https://www.instagram.com/lp7_sports/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-2xl"
          >
            Instagram
            <FaInstagram/>
          </a>
          <a
            href="https://wa.me/62999156322?text=Olá%2C%20vim%20pelo%20site.%20Gostaria%20de%20fazer%20um%20pedido!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-2xl"
          >
            Whatsapp
            <FaWhatsapp/>
          </a>
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
