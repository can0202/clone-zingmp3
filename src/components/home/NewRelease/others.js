import React from "react";
import PropTypes from "prop-types";
import ItemVertical from "../ItemVertical";

const OthersRelease = ({ itemsOther }) => {
  return (
    <>
      <div className="list">
        {itemsOther?.slice(0, 12)?.map((item, index) => {
          return <ItemVertical item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default OthersRelease;
OthersRelease.propTypes = {
  itemsOther: PropTypes.any,
};
