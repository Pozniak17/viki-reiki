import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import styles from "./CertificationSlider.module.css";
import CertificationCard from "../CertificationCard/CertificationCard";

import certificates from "../../utils/certificates.json";

export default function CertificationSlider() {
  return (
    <Swiper
      // modules={[Navigation, Pagination]}
      modules={[Pagination, Autoplay, Navigation]}
      // spaceBetween={20}
      centeredSlidesBounds={true}
      navigation
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
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {certificates.map((item) => (
        <SwiperSlide key={item.id}>
          <CertificationCard image={item.image} text={item.text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
