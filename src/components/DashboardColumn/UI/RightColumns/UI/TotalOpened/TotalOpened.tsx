import React from "react";

import "./TotalOpened.scss";

import total_opened from "accets/images/svg/dashboard/total_open_bets.svg";

const TotalOpened = () => {
  return (
    <ul className="widget-holder t-default s-big widget-grid shadow">
      <li className="image">
        <img src={total_opened} alt="" />
      </li>
      <li className="head">
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div className="ellipsis-text module-title">
                <span title="Total opened bets">Total opened bets</span>
              </div>
            </div>
          </li>
          <li className="right-content">
            <button className="btn a-minimal s-default f-default c-default id-start cr-round c-icon">
              <i className="icon bc-icon-go-forward" />
            </button>
          </li>
        </ul>
      </li>
      <li className="text">
        <p className="ellipsis-text">0</p>
      </li>
    </ul>
  );
};

export { TotalOpened };
