import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { banners } = useSelector((state) => state.app);
  const swiperRef = useRef();
  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      dispatch(actions.setCurSongId(item?.encodeId));
      dispatch(actions.play(true));
    } else if (item?.type === 4) {
      const pathAlbum = item?.link.split(".")[0];
      navigate(pathAlbum);
    }
  };
  return (
    <div className="section section-banner mb-48">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          850: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {banners?.items?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item" onClick={() => handleClickBanner(item)}>
              <img src={item.banner} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
