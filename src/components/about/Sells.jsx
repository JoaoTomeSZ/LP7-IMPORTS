import flamengo from "/flamengo.jpeg"
import palmeiras from "/palmeiras.jpeg"
import santos from "/santos.jpeg"
const Sells = () => {
const images = [
    flamengo,
    palmeiras,
    santos
  ];
  
  return (
    <div className="lg:flex hidden lg:flex-row flex-col max-w-full w-full lg:justify-between justify-evenly lg:items-start items-center px-2 lg:gap-0 gap-4">
      <ul className="w-full flex justify-between">
        {images.map((src, index) => (
          <li key={index}>
            <img src={src} alt="" className="h-[380px] w-[350px] rounded-2xl object-cover"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sells;
