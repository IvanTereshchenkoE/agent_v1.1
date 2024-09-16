import React from "react";

import "./Network.scss";
import { useMouseHover } from "hooks";
import { Link, useLocation } from "react-router-dom";

const Network = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useMouseHover();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      className="custom-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        id="network"
        className={`nav-item cursor-pointer ${
          currentPath === "/network/deletedAffilates" ||
          currentPath === "/network/customers"
            ? "active"
            : ""
        }`}
      >
        <span>Network</span>
        <i className="icon bc-icon-arrow-down" />
      </div>
      {isHovered ? (
        <div className="modal-container popover-positioner cr-full-radius">
          <ul className="popover-content">
            <li className="popover-body">
              <div className="bo-submenu">
                <Link
                  className={`${
                    currentPath === "/network/customers" ? "active" : ""
                  }`}
                  to="/network/customers"
                >
                  <p>Users</p>
                </Link>
                <Link
                  className={`${
                    currentPath === "/network/deletedAffilates" ? "active" : ""
                  }`}
                  to="/network/deletedAffilates"
                >
                  <p>Deleted Users</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export { Network };
