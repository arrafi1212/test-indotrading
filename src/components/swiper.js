import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import itemsData from "../data/item_data.json";
import ItemCard from "./ItemCard";

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper swiper-testimoni"
      >
        {itemsData.map((item, index) => (
          <SwiperSlide key={index}>
            <ItemCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
