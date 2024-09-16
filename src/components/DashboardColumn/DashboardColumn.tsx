import React from "react";

import "./DashboardColumn.scss";
import { LeftColumns } from "./UI";
import { RightColumns } from "./UI";

const DashboardColumn = () => {
  return (
    <div className="grid-holder">
      <div
        className="grid-items-group"
        style={{ width: "calc(100% + 2rem)", margin: "-1rem" }}
      >
        <LeftColumns />
        <RightColumns />
      </div>
    </div>
  );
};

export { DashboardColumn };
