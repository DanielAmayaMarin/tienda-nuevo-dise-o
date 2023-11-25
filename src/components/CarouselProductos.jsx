import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Product from "./Product";
import { getProductsFrecuentes } from "../services/productsFrecuentes";

const CarouselProductos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(await getProductsFrecuentes());
    })();
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper h-full w-full mb-6"
    >
      {products.map((producto) => {
        const { id } = producto;
        return (
          <SwiperSlide>
            <div
              key={id}
              className="w-full h-full flex justify-center items-center"
            >
              <Product key={id} item={producto} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselProductos;
