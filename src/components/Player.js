import { Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import icons from "../ultis/icons";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import FooterRight from "./FooterRight";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../api";
import * as actions from "../redux/actions";
import { NavLink } from "react-router-dom";

const { AiOutlineHeart, RiMoreLine } = icons;

const Player = () => {
  const dispatch = useDispatch();
  const audioEle = useRef(new Audio());
  const { curSongId } = useSelector((state) => state.music);
  const { isPlaying } = useSelector((state) => state.settings);
  const [infoSong, setInfoSong] = useState(null);
  const [source, setSource] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const [res1, res2] = await Promise.all([
        api.getInfoSong(curSongId),
        api.getSong(curSongId),
      ]);
      if (res1?.data.msg === "Success") {
        setInfoSong(res1?.data?.data);
      }
      if (res2?.data.msg === "Success") {
        setSource(res2?.data?.data["128"]);
      }
    };
    fetchApi();
  }, [curSongId]);

  useEffect(() => {
    audioEle.current.pause();
    audioEle.current.src = source;
    audioEle.current.load();
    if (isPlaying) audioEle.current.play();
  }, [curSongId, source]);

  console.log("curSongId", curSongId);
  console.log("source", source);
  console.log("isPlaying", isPlaying);

  const onTogglePayPause = () => {
    if (isPlaying) {
      audioEle.current.pause();
      dispatch(actions.play(false));
    } else {
      audioEle.current.play();
      dispatch(actions.play(true));
    }
  };
  return (
    <>
      {curSongId && (
        <div className="footer">
          <div className="play-controls d-flex item-center ">
            <div className="play-controls-left play-left d-flex item-center ">
              <div className="play-controls-left__song d-flex item-center">
                <div className="song-thumb">
                  <figure className="image is-60x60" title="Slow Dancing">
                    <img src={infoSong?.thumbnail} alt={infoSong?.title} />
                  </figure>
                </div>
                <div className="song-info">
                  <h4
                    className="song-title limit-text limit-text-1"
                    title={infoSong?.title}
                  >
                    {infoSong?.title}
                  </h4>
                  <p className="song-author">
                    {infoSong?.artists?.map((ele) => {
                      return (
                        <NavLink to={ele?.link} key={ele?.id}>
                          {ele?.name}
                        </NavLink>
                      );
                    })}
                  </p>
                </div>
              </div>
              <div className="play-controls-left__control d-flex item-center">
                <Tooltip title="Thêm vào thư viện">
                  <button className="btn-icon">
                    <AiOutlineHeart />
                  </button>
                </Tooltip>
                <Tooltip title="Xem thêm">
                  <button className="btn-icon">
                    <RiMoreLine />
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="play-controls-bar play-center">
              <Controls
                isPlaying={isPlaying}
                onTogglePayPause={onTogglePayPause}
              />
              <ProgressBar />
            </div>
            <div className="play-controls-right play-right d-flex item-center">
              <FooterRight />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
