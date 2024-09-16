import React from "react";

import "./Profit.scss";

import emptylist from "accets/images/svg/emptylist.svg";

const Profit = () => {
  return (
    <div
      className="paper bg-color filterMargin pd-column pd-row pw-nowrap jc-center ai-stretch full-radius with-shadow"
      style={{ padding: "0rem" }}
    >
      <ul className="module-header cr-position-radius p-top s-big headerBorder">
        <li className="left-content">
          <div className="left-inner">
            <div className="ellipsis-text module-title" title="Profit">
              Profit
            </div>
          </div>
        </li>
        <li className="right-content" />
      </ul>
      <div className="profitInnerPadding">
        <div className="empty-state-holder s-big">
          <div className="empty-state-image">
            <img alt="Empty" src={emptylist} />
          </div>
          <div className="empty-state-title">No data to display</div>
        </div>
      </div>
    </div>
  );
};

export { Profit };
