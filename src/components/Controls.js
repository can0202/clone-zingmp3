import React from "react";
import icons from "../ultis/icons";
import PropTypes from "prop-types";
const {
  PiShuffleAngularThin,
  PiSkipBackFill,
  PiSkipForwardFill,
  PiRepeat,
  BsPause,
  BsFillPlayFill,
} = icons;

const Controls = ({ isPlaying, onTogglePayPause }) => {
  return (
    <>
      <div className="level-item controls d-flex item-center justify-center">
        <PiShuffleAngularThin />
        <PiSkipBackFill />
        <div className="btn btn-play" onClick={onTogglePayPause}>
          {isPlaying ? <BsPause /> : <BsFillPlayFill />}
        </div>
        <PiSkipForwardFill />
        <PiRepeat />
      </div>
    </>
  );
};

export default Controls;
Controls.propTypes = {
  isPlaying: PropTypes.any,
  onTogglePayPause: PropTypes.any,
};
