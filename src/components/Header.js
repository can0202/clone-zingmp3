import React from "react";
import icons from "../ultis/icons";
import { Input } from "antd";

const { BsArrowLeft, BsArrowRight, RiSearchLine } = icons;

const Header = () => {
  const { Search } = Input;
  return (
    <div className="header d-flex item-center">
      <div className="header-history d-flex item-center">
        <div className="icon icon-back">
          <BsArrowLeft />
        </div>
        <div className="icon icon-next">
          <BsArrowRight />
        </div>
      </div>
      <div className="header-search">
        <Search
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          allowClear
          prefix={<RiSearchLine />}
          // onSearch={onSearch}
          style={{
            width: 440,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
