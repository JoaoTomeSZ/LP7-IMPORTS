import React from "react";
import galery from "/galery.png"
import { Link } from "react-router-dom";
import {IoLogoWhatsapp} from "react-icons/io5";
const SeeGalery = () => {
  return (
    <div className="flex min-h-screen justify-center items-center pt-40 px-5">
      <div className="flex flex-col gap-5 justify-center items-center max-w-full w-full">
                <h1 className="text-white text-5xl md:text-5xl lg:text-7xl font-bold text-center">Confira nossa galeria no menu de navegação</h1>
                <p className="text-2xl lg:text-3xl text-[#828282] text-center">Ou clique na imagem abaixo</p>
                <div className="flex lg:flex-row flex-col-reverse lg:pt-10 justify-center items-center max-w-full w-full">
                        <h2 className="text-[#E5A020] text-2xl lg:text-5xl text-center lg:text-left p-10 flex">Não Achou o que procura? Me chame no Whatsapp que resolvemos!</h2>
                        <Link to={"/Galeria"} className="flex items-center justify-center"><img className="lg:w-[50%] shadow-2xl shadow-[#828282]" src={galery} alt="" /></Link>
                </div>
                
      </div>
    </div>
  );
};

export default SeeGalery;
