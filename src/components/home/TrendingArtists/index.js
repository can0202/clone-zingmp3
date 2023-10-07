import React from "react";
import { useSelector } from "react-redux";
import ItemOverlay from "../ItemOverlay";
import "./style.scss";

const TrendingArtists = () => {
  const { artists } = useSelector((state) => state.app);
  return (
    <div className="section section-release mb-48">
      <div className="title mb-20">
        <h2 className="title-main d-flex item-center justify-between">
          {artists?.title}
        </h2>
      </div>
      <div className="content-item">
        {artists?.items?.slice(0, 5).map((item, index) => {
          return <ItemOverlay item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TrendingArtists;
