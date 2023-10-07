import React from "react";
import PropTypes from "prop-types";
import ItemVertical from "../ItemVertical";

const AllRelease = ({ itemsAll }) => {
  return (
    <div className="list">
      {itemsAll?.slice(0, 12)?.map((item, index) => {
        return <ItemVertical item={item} key={index} />;
      })}
    </div>
  );
};

export default AllRelease;
AllRelease.propTypes = {
  itemsAll: PropTypes.any,
};
