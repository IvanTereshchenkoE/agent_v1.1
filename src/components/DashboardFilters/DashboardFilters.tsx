import React from "react";

import "./DashboardFilters.scss";
import { DateRange, WholeNetwork } from "components";

const DashboardFilters = () => {
  return (
    <div
      className="paper bg-transparent dashboardTotalsFilter-bc pd-row pw-nowrap jc-space-between ai-center none"
      style={{ padding: "0rem" }}
    >
      <WholeNetwork />
      <DateRange />
    </div>
  );
};

export { DashboardFilters };
