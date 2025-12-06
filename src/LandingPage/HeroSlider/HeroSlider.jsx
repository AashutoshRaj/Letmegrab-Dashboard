import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../../assets/Images/SliderImages/slider1.jpg";
import image2 from "../../assets/Images/SliderImages/slider3.jpg";
import image3 from "../../assets/Images/SliderImages/slider4.webp";
import image4 from "../../assets/Images/SliderImages/slider5.jpg";
import image5 from "../../assets/Images/SliderImages/slider6.webp";
import { Navigation, Pagination } from "swiper/modules";

const sliderImages = [
  {
    sliderImage: image1,
  },
  {
    sliderImage: image2,
  },
  {
    sliderImage: image3,
  },
  {
    sliderImage: image4,
  },
  {
    sliderImage: image5,
  },
];

const HeroSlider = () => (
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    className="relative h-[calc(100vh-90px)]"
  >
    {sliderImages.map((items, index) => (
      <SwiperSlide>
        <img
          src={items.sliderImage}
          alt=""
          className="w-full h-full  object-cover  "
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HeroSlider;
