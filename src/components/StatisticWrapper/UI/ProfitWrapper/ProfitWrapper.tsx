import React from "react";

import "./ProfitWrapper.scss";

import emptylist from "accets/images/svg/emptylist.svg";

const ProfitWrapper = () => {
  return (
    <div className="dashboardLowerStatisticsEl-bc">
      <div className="pd-column mediaStatistics-bc overflowHidden-bc">
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div
                className="ellipsis-text module-title"
                title="Profit by Products"
              >
                Profit by Products
              </div>
            </div>
          </li>
          <li className="right-content">
            <button className="btn a-minimal s-default f-default c-default id-start cr-round c-icon">
              <i className="icon bc-icon-list-border" />
            </button>
            <button className="btn a-minimal s-default f-default c-primary id-start cr-round c-icon">
              <i className="icon bc-icon-chart-border" />
            </button>
          </li>
        </ul>
        <div className="center-content-wrap">
          <div className="empty-state-holder s-big">
            <div className="empty-state-image">
              <img alt="Empty" src={emptylist} />
            </div>
            <div className="empty-state-title">No data to display</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfitWrapper };
