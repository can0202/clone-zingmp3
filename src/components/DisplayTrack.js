import React from "react";
import thumb from "../assets/thumb.png";
import PropTypes from "prop-types";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  progressBarRef,
  setDuration,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  return (
    <>
      <audio
        ref={audioRef}
        className="src-audio"
        src={currentTrack.src}
        controls
        onLoadedMetadata={onLoadedMetadata}
      />
      <div className="audio-track">
        <div className="thumb">
          <img src={currentTrack.thumbnail} alt="" />
        </div>
        <h3 className="title">{currentTrack.title}</h3>
        <p className="author">{currentTrack.author}</p>
      </div>
    </>
  );
};

export default DisplayTrack;
DisplayTrack.propTypes = {
  currentTrack: PropTypes.any,
  audioRef: PropTypes.any,
  progressBarRef: PropTypes.any,
  setDuration: PropTypes.any,
};
