import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import arsenal from "/arsenal.jpeg"
import inter from "/inter.jpeg"
import psg from "/psg.jpeg"

const Slide = () => {
  const images = [
    arsenal,
    inter,
    psg
  ];
  return (
    <div className="lg:hidden flex w-full h-full">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Imagem ${index + 1}`}
              className="max-w-[400px] w-full h-full object-contain rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide