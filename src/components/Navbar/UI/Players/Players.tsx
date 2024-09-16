import React from "react";

import "./Players.scss";
import { useMouseHover } from "hooks";
import { Link, useLocation } from "react-router-dom";

const Players = () => {
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
          currentPath === "/players/players" ||
          currentPath === "/players/blockedPlayers"
            ? "active"
            : ""
        }`}
      >
        <span>Players</span>
        <i className="icon bc-icon-arrow-down" />
      </div>
      {isHovered ? (
        <div className="modal-container popover-positioner cr-full-radius">
          <ul className="popover-content">
            <li className="popover-body">
              <div className="bo-submenu">
                <Link
                  className={`${
                    currentPath === "/players/players" ? "active" : ""
                  }`}
                  to="/players/players"
                >
                  <p>Active Players</p>
                </Link>
                <Link
                  className={`${
                    currentPath === "/players/blockedPlayers" ? "active" : ""
                  }`}
                  to="/players/blockedPlayers"
                >
                  <p>Blocked Players</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export { Players };
