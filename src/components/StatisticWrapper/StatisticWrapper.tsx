import React from "react";

import { ProfitWrapper, TopBetWapper, TopPlayersWrapper } from "./UI";

import "./StatisticWrapper.scss";

const StatisticWrapper = () => {
  return (
    <div className="dashboardLowerStatisticsWrapper-bc">
      <ProfitWrapper />
      <TopBetWapper />
      <TopPlayersWrapper />
    </div>
  );
};

export { StatisticWrapper };
