import React from "react";
import { useSelector } from "react-redux";
import ItemOverlay from "../ItemOverlay";
import "./style.scss";

const Top100 = () => {
  const { top100 } = useSelector((state) => state.app);
  return (
    <div className="section section-release mb-48">
      <div className="title mb-20">
        <h2 className="title-main d-flex item-center justify-between">
          {top100?.title}
        </h2>
      </div>
      <div className="content-item">
        {top100?.items?.slice(0, 5).map((item, index) => {
          return <ItemOverlay item={item} top100={top100} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Top100;
