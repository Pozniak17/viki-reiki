import { t } from "i18next";

import ServicesCard from "../ServicesCard/ServicesCard";
import services from "../../utils/json/services.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css"; // ✅ Базові стилі
import "swiper/css/pagination"; // ✅Стилі для пагінації
import "swiper/css/navigation"; //  Стилі для стрілок

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
        {services.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <ServicesCard
              image={image}
              title={t(`services.cards.servicesCard${id}.title`)}
              text={t(`services.cards.servicesCard${id}.text`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
