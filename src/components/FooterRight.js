import { Slider, Tooltip } from "antd";
import React from "react";

import icons from "../ultis/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleListMusic } from "../redux/actions/Settings";

const {
  IoMdPhotos,
  IoIosFlashlight,
  PiTerminalWindowLight,
  BsVolumeUp,
  MdOutlineLibraryMusic,
} = icons;

const FooterRight = () => {
  const dispatch = useDispatch();
  const toggleMusic = useSelector((state) => state.settings.toggleMusic);
  const handleToggleListMusic = () => {
    dispatch(toggleListMusic(!toggleMusic));
  };

  return (
    <>
      <Tooltip title="Mv">
        <button className="btn-icon">
          <IoMdPhotos />
        </button>
      </Tooltip>
      <Tooltip title="Xem lời bài hát">
        <button className="btn-icon">
          <IoIosFlashlight />
        </button>
      </Tooltip>
      <Tooltip title="Chế độ cửa sổ">
        <button className="btn-icon">
          <PiTerminalWindowLight />
        </button>
      </Tooltip>
      <div className="player-volume d-flex item-center">
        <BsVolumeUp />
        <div className="player-volume-slide">
          <Slider defaultValue={30} />
        </div>
      </div>
      <div className="list-music">
        <Tooltip title="Danh sách phát">
          <button
            className={`btn-icon ${toggleMusic ? "active" : ""}`}
            onClick={handleToggleListMusic}
          >
            <MdOutlineLibraryMusic />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default FooterRight;
