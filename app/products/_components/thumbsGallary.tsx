"use client";
import { useState } from "react";
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Thumbs,
  FreeMode,
} from "@/app/components/Slider";
import type { SwiperClass } from "swiper/react";
import ImageSlide from "./imageSlide";

const ThumbsGallary = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <div>
      <Swiper
        spaceBetween={10}
        // navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="custom-shadow rounded-xl"
      >
        {images.map((url) => (
          <SwiperSlide key={url}>
            <ImageSlide url={url} size="h-96" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper as (swiper: any) => void}
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        // watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-5 p-3 w-4/5 "
      >
        {images.map((url) => (
          <SwiperSlide key={url} className="p-1 ">
            <ImageSlide
              url={url}
              size="h-16   sm:h-20 md:h-24 lg:28 xl:h-32 "
              classStyles=" custom-shadow "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsGallary;
