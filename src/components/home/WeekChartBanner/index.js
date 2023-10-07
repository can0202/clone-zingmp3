import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const WeekChartBanner = () => {
  const { weekChartBanner } = useSelector((state) => state.app);
  return (
    <div className="section section-release mb-48">
      <div className="banner-chart">
        {weekChartBanner?.items?.map((item, index) => {
          return (
            <NavLink key={index} to={item?.link}>
              <figure className="image is-48x48">
                <img
                  className="w-100 border-radius-6"
                  src={item.cover}
                  alt={item.type}
                />
              </figure>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default WeekChartBanner;
