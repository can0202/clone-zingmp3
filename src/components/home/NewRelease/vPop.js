import React from "react";
import PropTypes from "prop-types";
import ItemVertical from "../ItemVertical";

const VpopRelease = ({ itemsVpop }) => {
  return (
    <>
      <div className="list">
        {itemsVpop?.slice(0, 12)?.map((item, index) => {
          return <ItemVertical item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default VpopRelease;
VpopRelease.propTypes = {
  itemsVpop: PropTypes.any,
};
