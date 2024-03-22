import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

// import required modules
import { Pagination } from 'swiper/modules';

const swiper = () => {
    return (
        <>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="TestimonialSection"
        >
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse at quia iure dicta magnam, ipsam velit reiciendis aspernatur, corporis, quo dolorem sequi quas autem eum eveniet perferendis provident repudiandae repellendus quae hic sapiente nemo quibusdam consequuntur! Delectus sequi architecto itaque iste suscipit id neque facilis explicabo, molestias in placeat.</SwiperSlide>
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse at quia iure dicta magnam, ipsam velit reiciendis aspernatur, corporis, quo dolorem sequi quas autem eum eveniet perferendis provident repudiandae repellendus quae hic sapiente nemo quibusdam consequuntur! Delectus sequi architecto itaque iste suscipit id neque facilis explicabo, molestias in placeat.</SwiperSlide>
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse at quia iure dicta magnam, ipsam velit reiciendis aspernatur, corporis, quo dolorem sequi quas autem eum eveniet perferendis provident repudiandae repellendus quae hic sapiente nemo quibusdam consequuntur! Delectus sequi architecto itaque iste suscipit id neque facilis explicabo, molestias in placeat.</SwiperSlide>
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse at quia iure dicta magnam, ipsam velit reiciendis aspernatur, corporis, quo dolorem sequi quas autem eum eveniet perferendis provident repudiandae repellendus quae hic sapiente nemo quibusdam consequuntur! Delectus sequi architecto itaque iste suscipit id neque facilis explicabo, molestias in placeat.</SwiperSlide>
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse at quia iure dicta magnam, ipsam velit reiciendis aspernatur, corporis, quo dolorem sequi quas autem eum eveniet perferendis provident repudiandae repellendus quae hic sapiente nemo quibusdam consequuntur! Delectus sequi architecto itaque iste suscipit id neque facilis explicabo, molestias in placeat.</SwiperSlide>
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse at quia iure dicta magnam, ipsam velit reiciendis aspernatur, corporis, quo dolorem sequi quas autem eum eveniet perferendis provident repudiandae repellendus quae hic sapiente nemo quibusdam consequuntur! Delectus sequi architecto itaque iste suscipit id neque facilis explicabo, molestias in placeat.</SwiperSlide>
          <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse at quia iure dicta magnam, ipsam velit reiciendis aspernatur, corporis, quo dolorem sequi quas autem eum eveniet perferendis provident repudiandae repellendus quae hic sapiente nemo quibusdam consequuntur! Delectus sequi architecto itaque iste suscipit id neque facilis explicabo, molestias in placeat.</SwiperSlide>
  
        </Swiper>
      </>
    );
};

export default swiper;