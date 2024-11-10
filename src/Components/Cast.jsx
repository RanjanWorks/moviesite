"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import CastCard from "./CastCard";
export function CastSlider({ movies }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      breakpoints={{
        320: { slidesPerView: 3 },
        640: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}

    >
      {movies.map((movie, i) => (
        <SwiperSlide key={i}>
       {movie.profile_path? <CastCard movies={movie} />:""}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
