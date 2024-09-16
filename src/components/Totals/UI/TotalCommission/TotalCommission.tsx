import React from "react";

import "./TotalCommission.scss";

const TotalCommission = () => {
  return (
    <div
      className="paper bg-color pd-row pw-nowrap jc-center ai-paper-start none"
      style={{ padding: "31px 20px 50px" }}
    >
      <div className="dashboardWidgetEl-bc">
        <ul className="widget-holder t-minimal s-big shadow border">
          <li>
            <i style={{ background: "rgb(32, 126, 222)" }} />
            <span className="ellipsis-text">
              <span title="Commission">Commission</span>
            </span>
          </li>
          <li>
            <span className="ellipsis-text">0</span>
          </li>
        </ul>
      </div>
      <div className="dashboardWidgetEl-bc">
        <ul className="widget-holder t-minimal s-big shadow border">
          <li>
            <i style={{ background: "rgb(244, 138, 58)" }} />
            <span className="ellipsis-text">
              <span title="Referral Commission">Referral Commission</span>
            </span>
          </li>
          <li>
            <span className="ellipsis-text">0</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { TotalCommission };
