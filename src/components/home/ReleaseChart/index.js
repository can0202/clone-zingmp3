import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const ReleaseChart = () => {
  const { newReleaseChart } = useSelector((state) => state.app);
  const swiperRefRe = useRef();
  return (
    <div className="section section-release mb-48">
      <div className="title mb-20">
        <h2 className="title-main d-flex item-center justify-between">
          {newReleaseChart?.title}
        </h2>
      </div>
      <div className="content-related">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRefRe.current = swiper;
          }}
          className="mySwiperRe"
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
          {newReleaseChart?.items?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="new-release-item">
                <div className="media">
                  <div className="media-left">
                    <figure className="">
                      <img src={item?.thumbnail} alt={item?.title} />
                    </figure>
                  </div>
                  <div className="media-right">
                    <div className="media-title">
                      <h3>{item?.title}</h3>
                      <p>
                        {item?.artists?.map((artist, index) => {
                          return (
                            <NavLink key={index} to={artist?.link}>
                              {artist?.name + ", "}
                            </NavLink>
                          );
                        })}
                      </p>
                      <div>
                        <span className="order">#{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReleaseChart;
