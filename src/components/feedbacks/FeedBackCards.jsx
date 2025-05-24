import boyAvatar from "/boyAvatar.png";
import girlAvatar from "/girlAvatar.png";

const FeedBackCards = () => {
  const feedbacks = [
    {
      name: "Thiago",
      avatar: boyAvatar,
      message:
        "Parceiro, sem palavras! Camisa 10/10, entrega rápida e sem dor de cabeça.",
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
  ];

  return (
    <div className="flex md:flex-row flex-col gap-4 items-center p-4 max-w-full  mt-5">
      {feedbacks.map((item, index) => (
        <div
          key={index}
          className="bg-gray-200 border border-blue-500 rounded-3xl lg:w-[600px] p-6 shadow-md"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.avatar}
              alt={`Avatar of ${item.name}`}
              className="w-24 h-24 rounded-full bg-white"
            />
            <h2 className="text-black text-xl font-bold">{item.name}</h2>
          </div>
          <p className="text-black mt-4 text-justify">{item.message}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      ))}
    </div>
  );
};

export default FeedBackCards;
