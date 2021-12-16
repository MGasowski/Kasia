import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Swipers() {
  return (
    <div className="container">
      <Swiper
        style={{ height: 300 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ maxHeight: 300 }}>
          <img
            alt="nature"
            style={{ maxHeight: 300 }}
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
