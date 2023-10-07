import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import icons from "../../../ultis/icons";
import ItemOverlay from "../ItemOverlay";
import "./style.scss";

const { SlArrowRight } = icons;

const Chill = () => {
  const { albums } = useSelector((state) => state.app);
  return (
    <div className="section section-release mb-48">
      <div className="title mb-20">
        <h2 className="title-main d-flex item-center justify-between">
          {albums?.title}
          <NavLink to={albums?.link}>
            Tất cả <SlArrowRight />
          </NavLink>
        </h2>
      </div>
      <div className="content-item">
        {albums?.items?.slice(0, 5).map((item, index) => {
          return <ItemOverlay item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Chill;
