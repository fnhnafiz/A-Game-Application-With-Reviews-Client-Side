import slider1 from "../../public/assets/banner1Pubg.jpg";
import slider2 from "../../public/assets/banner2Freefire.jpg";
import slider3 from "../../public/assets/banner3LeftSurvive.jpg";
import slider4 from "../../public/assets/banner3StateSurvival.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Banner = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className={` ${theme}`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <img className="w-full" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
