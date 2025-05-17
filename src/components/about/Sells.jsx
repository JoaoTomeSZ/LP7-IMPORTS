import camisaCBFpreta from "/camisaCBFpreta.jpg";
import camisaCBFlado from "/camisaCBFlado.jpg";

const Sells = () => {
  return (
    <div className="flex lg:flex-row flex-col max-w-full w-full lg:justify-around justify-evenly lg:items-start items-center px-2 lg:gap-0 gap-4">
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
      <img
        src={camisaCBFlado}
        alt=""
        className="h-[300px] w-[300px] rounded-2xl"
      />
    </div>
  );
};

export default Sells;
