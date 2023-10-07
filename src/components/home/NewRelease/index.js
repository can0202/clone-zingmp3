import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Tabs } from "antd";
import icons from "../../../ultis/icons";
import AllRelease from "./all";
import VpopRelease from "./vPop";
import OthersRelease from "./others";

const { SlArrowRight } = icons;

const NewRelease = () => {
  const { newRelease } = useSelector((state) => state.app);
  const { TabPane } = Tabs;
  return (
    <div className="section section-release mb-48">
      <div className="title">
        <h2 className="title-main d-flex item-center justify-between">
          {newRelease?.title}
          <NavLink>
            Tất cả <SlArrowRight />
          </NavLink>
        </h2>
      </div>
      <div className="content-tab">
        <Tabs defaultActiveKey="all">
          <TabPane tab="Tất cả" key="all">
            <AllRelease itemsAll={newRelease?.items?.all} />
          </TabPane>
          <TabPane tab="Việt Nam" key="vPop">
            <VpopRelease itemsVpop={newRelease?.items?.vPop} />
          </TabPane>
          <TabPane tab="Quốc tế" key="others">
            <OthersRelease itemsOther={newRelease?.items?.others} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default NewRelease;
