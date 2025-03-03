import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ServicesCard from "../ServicesCard/ServicesCard";
import services from "../../utils/json/services.json";

export default function ServicesSlider() {
  console.log(services);
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        centeredSlidesBounds={true}
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal" // Горизонтальна прокрутка (за замовчуванням)
        pagination={{ clickable: true }} // Додає навігацію (опціонально)
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {services.map((item) => (
          <SwiperSlide key={item.id}>
            <ServicesCard image={item.image} text={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
