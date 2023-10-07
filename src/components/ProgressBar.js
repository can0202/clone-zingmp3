import { Slider } from "antd";
import React from "react";

const ProgressBar = () => {
  return (
    <>
      <div className="level-item progress">
        <Slider defaultValue={30} />
        <div className="d-flex justify-between item-center">
          <span className="current-time time">00:00</span>
          <span className="duration-time time">04:00</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
