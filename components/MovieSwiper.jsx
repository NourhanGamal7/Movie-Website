import React from 'react'
import './movieSwiper.css'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import previwe from '../assets/movies/65.jpg'
const MovieSwiper = ({slides,slideChange}) => {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    loop={true}
    modules={[Autoplay, EffectCoverflow]}
    className="movieSwiper"
  >

        {slides.map(slide => (
            <SwiperSlide key={slide._id}>
                <img src={slide.previewImg} alt="preview Image" onClick={()=>slideChange(slide._id)} />
            </SwiperSlide>
        ))}
        
    </Swiper>
  )
}

export default MovieSwiper



// {
//   "ImageName": "./data/image/assassin.jpg"
// }