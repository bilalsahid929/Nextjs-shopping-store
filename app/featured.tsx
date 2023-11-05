"use client";

import { Card, CardSkeleton } from "@/app/components";
import useProducts from "./products/useProducts";
import {
  Swiper,
  SwiperSlide,
  Navigation,
  FreeMode,
  Keyboard,
  Mousewheel,
  Pagination,
} from "@/app/components/Slider";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Featured = () => {
  const { data: products, isLoading } = useProducts();
  return (
    <div>
      <section
        className="py-8 my-6 featured-section"
        style={{ width: "100vw" }}
      >
        <div className="flex w-full justify-between align-middle">
          <h2 className="text-info text-4xl font-semibold p-4 ">
            New Arrivals
          </h2>
          <Link href="/products" passHref>
            <h2 className="text-primary font-semibold inline-flex gap-4 link-hover me-3">
              View All <FaAngleRight size={24} />
            </h2>
          </Link>
        </div>

        <Swiper
          watchSlidesProgress={true}
          freeMode={true}
          observer={true}
          observeParents={true}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          spaceBetween={20}
          modules={[Navigation, FreeMode, Keyboard, Mousewheel, Pagination]}
          breakpoints={galleryCarouselBreakpoints}
          navigation={true}
        >
          {isLoading
            ? [1, 2, 3, 4, 5, 6, 7].map((item) => (
                <SwiperSlide key={item}>
                  <CardSkeleton />
                </SwiperSlide>
              ))
            : products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Featured;

const galleryCarouselBreakpoints = {
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  880: {
    slidesPerView: 3,
  },
  1040: {
    slidesPerView: 4,
  },
  1280: {
    slidesPerView: 5,
  },
  1440: {
    slidesPerView: 6,
  },
};
