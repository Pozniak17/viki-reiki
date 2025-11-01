import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { t } from "i18next";
import CertificationCard from "../CertificationCard/CertificationCard";
import certificates from "../../utils/json/certificates.json";

export default function CertificationSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.025,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {certificates.map(({ id, image }) => (
          <CertificationCard
            key={id}
            image={image}
            text={t(`certification.cards.certificationCard${id}`)}
          />
        ))}
      </Slider>
    </div>
  );
}

// //<Swiper
//   modules={[Pagination, Autoplay]}
//   centeredSlidesBounds={true}
//   spaceBetween={0}
//   slidesPerView={1}
//   direction="horizontal" // Горизонтальна прокрутка (за замовчуванням)
//   pagination={{ clickable: true }} // Додає навігацію (опціонально)
//   onSlideChange={() => console.log("slide change")}
//   onSwiper={(swiper) => console.log(swiper)}
//   breakpoints={{
//     0: {
//       slidesPerView: 1,
//     },
//     360: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     1440: {
//       slidesPerView: 3,
//       spaceBetween: 24,
//     },
//   }}
// >

// {
//   certificates.map(({ id, image }) => (
//     <SwiperSlide key={id}>
//       <CertificationCard
//         image={image}
//         text={t(`certification.cards.certificationCard${id}`)}
//       />
//     </SwiperSlide>
//   ));
// }
