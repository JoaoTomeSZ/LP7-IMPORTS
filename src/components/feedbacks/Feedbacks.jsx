import Carousel from "./Carousel"
import FeedBackCards from "./FeedBackCards"
import boyAvatar from "/boyAvatar.png";
import girlAvatar from "/girlAvatar.png";
const Feedbacks = () => {
  const feedbacks = [
      {
        name: "Thiago",
        avatar: boyAvatar,
        message:
          "Parceiro, sem palavras! Camisa 10/10, entrega rápida e sem dor de cabeça. Sem dúvidas, o melhor!",
      },
      {
        name: "Lucas",
        avatar: boyAvatar,
        message: "Cara, que ótima camisa, uma qualidade excelente. Nunca ví uma loja desse nível.",
      },
      {
        name: "Fabiana",
        avatar: girlAvatar,
        message:
          "Produto TOP, vendedor atencioso, tirou todas as minhas dúvidas, recomendo!!!",
      },
      {
        name: "João",
        avatar: boyAvatar,
        message:
        "Simplesmente perfeito! Produto top, entrega antes do prazo. Recomendo de olhos fechados."
      },
      {
        name: "Mariana",
        avatar: girlAvatar,
        message:
        "Atendimento nota mil! A qualidade da peça é incrível e ainda veio com cheirinho bom."
      },
      {
        name: "Sofia",
        avatar: boyAvatar,
        message:
        "Vendedor atencioso, produto de ótima qualidade. Voltarei a comprar com certeza."
      },
    ];
  return (
    <div id="feedback" className="min-h-screen lg:mt-5 mt-20 pt-20 scroll-mt-20 ">
      <div className="">
        <h1 className="text-[#E5A020] font-bold md:text-7xl text-5xl lg:text-8xl text-center">Feedbacks</h1>
        <FeedBackCards feedbacks={feedbacks}/>
        <Carousel feedbacks={feedbacks}/>
      </div>      
    </div>
  )
}

export default Feedbacks