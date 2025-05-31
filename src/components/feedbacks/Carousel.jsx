import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import boyAvatar from "/boyAvatar.png";
import girlAvatar from "/girlAvatar.png";

import { Pagination } from 'swiper/modules';

const Carousel = ({ feedbacks }) => {

        
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 mt-5 md:hidden block">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-200 border border-blue-500 rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={`Avatar de ${item.name}`}
                  className="w-24 h-24 rounded-full bg-white"
                />
                <h2 className="text-black text-xl font-bold">{item.name}</h2>
              </div>
              <p className="text-black mt-4 text-justify">{item.message}</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
