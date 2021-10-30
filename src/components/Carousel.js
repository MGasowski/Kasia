import Compare from './Compare';
// import SwiperCore, {
//     Autoplay,Pagination,Navigation
//   } from 'swiper';
import {  Swiper, SwiperSlide } from "swiper/react";
import  { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/swiper.min.css'
// install Swiper modules

const Carousel = () => {
    return (<>
 <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
    <SwiperSlide>
      <Compare />
    </SwiperSlide>
    <SwiperSlide>
        <Compare />
    </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
  </>
    );
}

export default Carousel;