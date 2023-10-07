import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import icons from "../../../ultis/icons";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
const { BsPlayFill } = icons;

const ItemVertical = ({ item }) => {
  const dispatch = useDispatch();

  const handleClickSong = () => {
    dispatch(actions.play(true));
    dispatch(actions.setCurSongId(item?.encodeId));
  };
  return (
    <div className="list-item d-flex item-center ">
      <div className="song-thumb" onClick={handleClickSong}>
        <figure className="image is-60x60" title="Slow Dancing">
          <img src={item?.thumbnail} alt={item?.title} />
        </figure>
        <div className="opacity "></div>
        <div className="icon-control">
          <button className="zm-btn action-play button">
            <BsPlayFill />
          </button>
        </div>
      </div>
      <div className="song-info">
        <h4 className="song-title" title={item?.title}>
          {item?.title}
        </h4>
        <p className="song-author">
          <NavLink to="">{item?.artistsNames}</NavLink>
        </p>
        <p className="song-time">Hôm nay</p>
      </div>
    </div>
  );
};

export default ItemVertical;
ItemVertical.propTypes = {
  itemsAll: PropTypes.any,
};
