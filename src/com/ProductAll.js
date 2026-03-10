import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const ProductAll = ({ data, Card }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <img
            src="https://ecimg.cafe24img.com/pg1289b40716902088/kotona24/web/upload/_dj/img/s103/251017/main_img16.jpg"
            alt="제품1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ecimg.cafe24img.com/pg1289b40716902088/kotona24/web/upload/_dj/img/s103/251017/main_img15.jpg"
            alt="제품2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ecimg.cafe24img.com/pg1289b40716902088/kotona24/web/upload/_dj/img/s103/251017/main_img17.jpg"
            alt="제품3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ecimg.cafe24img.com/pg1289b40716902088/kotona24/web/upload/_dj/img/s103/251017/main_img15.jpg"
            alt="제품4"
          />
        </SwiperSlide>
      </Swiper>
      <ul>
        {data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ProductAll;
