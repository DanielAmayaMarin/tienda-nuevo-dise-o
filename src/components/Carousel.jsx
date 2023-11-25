import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../assets/coco.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

const Carousel = () => {
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
    className="mySwiper h-[15rem] w-full mb-6 "
  >
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='w-full h-full'>
            <img src={img} alt="" />
        </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default Carousel
