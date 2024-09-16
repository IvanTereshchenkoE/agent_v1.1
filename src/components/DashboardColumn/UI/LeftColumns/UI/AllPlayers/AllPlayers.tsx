import React from "react";

import "./AllPlayers.scss";

import all_players from "accets/images/svg/dashboard/all_players.svg";

const AllPlayers = () => {
  return (
    <ul className="widget-holder t-default s-big widget-grid shadow">
      <li className="image">
        <img src={all_players} alt="" />
      </li>
      <li className="head">
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div className="ellipsis-text module-title">
                <span title="All players">All players</span>
              </div>
            </div>
          </li>
          <li className="right-content" />
        </ul>
      </li>
      <li className="text">
        <p className="ellipsis-text">0</p>
      </li>
    </ul>
  );
};

export { AllPlayers };
