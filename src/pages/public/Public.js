import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Player from "../../components/Player";

const Public = () => {
  const { toggleMusic } = useSelector((state) => state.settings);
  const { curSongId } = useSelector((state) => state.music);
  return (
    <div className="main">
      <div className="container">
        <div className={`main-wrapper d-flex ${!curSongId ? "hide" : ""}`}>
          <div className="sidebar-left">
            <SidebarLeft />
          </div>
          <div className={`content`}>
            <Header />
            <Outlet />
            <Player />
          </div>
          <div className={`sidebar-right ${toggleMusic ? "collapsed" : ""}`}>
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
