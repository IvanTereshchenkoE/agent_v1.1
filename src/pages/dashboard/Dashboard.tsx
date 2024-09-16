import React from "react";

import "./Dashboard.scss";
import {
  DashboardColumn,
  DashboardFilters,
  Layout,
  Profit,
  StatisticWrapper,
  Totals,
} from "components";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboardBodyWrapper-bc">
        <DashboardColumn />
        <DashboardFilters />
        <Totals />
        <Profit />
        <StatisticWrapper />
        <div className="dashboardLowerStatisticsWrapper-bc withMarginTop" />
      </div>
    </Layout>
  );
};

export { Dashboard };
