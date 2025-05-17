import camisaCBFpreta from "/camisaCBFpreta.jpg";
import camisaCBFlado from "/camisaCBFlado.jpg";

const Sells = () => {
  return (
    <div className="flex max-w-full w-full gap-20 px-2">
      <div className="h-[300px] w-[300px] rounded-2xl flex justify-center items-center wrap-normal text-4xl text-center">
        <h1 className="text-white">+1000 Vendas Realizadas</h1>
      </div>

      <img
        src={camisaCBFpreta}
        alt=""
        className="h-[300px] w-[300px] rounded-2xl"
      />
      <img
        src={camisaCBFlado}
        alt=""
        className="h-[300px] w-[300px] rounded-2xl"
      />
    </div>
  );
};

export default Sells;
