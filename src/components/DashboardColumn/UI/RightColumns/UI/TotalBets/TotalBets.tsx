import React from "react";

import "./TotalBets.scss";

import total_bets from "accets/images/svg/dashboard/total_bets.svg";

const TotalBets = () => {
  return (
    <ul className="widget-holder t-default s-big widget-grid shadow">
      <li className="image">
        <img src={total_bets} alt="" />
      </li>
      <li className="head">
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div className="ellipsis-text module-title">
                <span title="Total bets ">Total bets </span>
              </div>
            </div>
          </li>
          <li className="right-content" />
        </ul>
      </li>
      <li className="text">
        <p className="ellipsis-text">-</p>
      </li>
    </ul>
  );
};

export { TotalBets };
