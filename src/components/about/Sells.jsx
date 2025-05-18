import arsenal from "/arsenal.jpeg"
import inter from "/inter.jpeg"
import psg from "/psg.jpeg"

const Sells = () => {
  return (
    <div className="lg:flex hidden lg:flex-row flex-col max-w-full w-full lg:justify-between justify-evenly lg:items-start items-center px-2 lg:gap-0 gap-4">
      <img
        src={psg}
        alt=""
        className="h-[350px] w-[300px] rounded-2xl object-fill"
      />
      <img
        src={inter}
        alt=""
        className="h-[350px] w-[300px] rounded-2xl object-fill"
      />
      <img
        src={arsenal}
        alt=""
        className="h-[350px] w-[300px] rounded-2xl object-fill"
      />
    </div>
  );
};

export default Sells;
