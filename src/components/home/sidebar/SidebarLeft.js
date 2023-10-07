import React from "react";
import logo from "../../../assets/img/logo-light.svg";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../../ultis/menuSidebar";
import routerConfig from "../../../ultis/RouterConfig";

const SidebarLeft = () => {
  return (
    <>
      <div className="logo">
        <NavLink to={routerConfig.HOME}>
          <img src={logo} alt="Zing MP3" />
        </NavLink>
      </div>
      <nav className="nav">
        <ul>
          {sidebarMenu.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  key={index}
                  to={item.path}
                  className="nav-item d-flex item-center "
                >
                  <span className="d-flex item-center ">{item.icon}</span>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SidebarLeft;
