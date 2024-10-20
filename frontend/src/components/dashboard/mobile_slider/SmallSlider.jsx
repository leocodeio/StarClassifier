// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./SmallSlider.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { items } from "../../../constants/still";

const SmallSlider = () => {
  return (
    <div>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        autoplay
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="item w-full h-full">
              <img
                id={item.id}
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmallSlider;
