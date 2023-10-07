import React from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import icons from "../../../ultis/icons";
import { Tooltip } from "antd";
const { BsPlayFill, AiOutlineHeart, MdOutlineMoreHoriz } = icons;

const ItemOverlay = ({ item, top100 }) => {
  const navigate = useNavigate();
  const handleClickSong = () => {
    const pathAlbum = item?.link.split(".")[0];
    navigate(pathAlbum);
  };
  return (
    <div className="item">
      <figure
        className="image is-60x60"
        title="Slow Dancing"
        onClick={handleClickSong}
      >
        <img src={item?.thumbnail} alt="" />
      </figure>
      <div className="opacity "></div>
      <div className="icon-control">
        <Tooltip title="Thêm vào thư viện">
          <button className="btn-icon">
            <AiOutlineHeart />
          </button>
        </Tooltip>
        <button className="zm-btn action-play button" title={item?.title}>
          <BsPlayFill />
        </button>
        <Tooltip title="Khác">
          <button className="btn-icon">
            <MdOutlineMoreHoriz />
          </button>
        </Tooltip>
      </div>
      {top100?.sectionId !== "h100" ? (
        <p className="limit-text limit-text-2">{item?.sortDescription}</p>
      ) : (
        <p className="limit-text limit-text-2">
          {item?.artists?.map((artist, index) => {
            return (
              <NavLink key={index} to={artist?.link}>
                {artist?.name + ", "}
              </NavLink>
            );
          })}
        </p>
      )}
    </div>
  );
};

export default ItemOverlay;
ItemOverlay.propTypes = {
  itemsAll: PropTypes.any,
  top100: PropTypes.any,
};
