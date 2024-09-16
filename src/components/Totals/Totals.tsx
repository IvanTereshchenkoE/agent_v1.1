import React from "react";

import "./Totals.scss";
import { TotalCommission, TotalHeader, TotalWidgetWrapper } from "./UI";

const Totals = () => {
  return (
    <div
      className="paper bg-colopd-column pd-row pw-nowrap jc-center ai-stretch full-radius with-shadow total-custom"
      style={{ padding: "0rem" }}
    >
      <TotalHeader />
      <TotalCommission />
      <TotalWidgetWrapper />
    </div>
  );
};

export { Totals };
