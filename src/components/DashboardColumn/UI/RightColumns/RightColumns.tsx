import React from "react";

import "./RightColumns.scss";
import { TotalBets, TotalOpened } from "./UI";

const RightColumns = () => {
  return (
    <div className="grid-child" style={{ padding: "1rem", width: "50%" }}>
      <div
        className="paper bg-transparent pd-column pw-nowrap jc-paper-start ai-stretch none"
        style={{ padding: "0rem" }}
      >
        <TotalOpened />
        <TotalBets />
      </div>
    </div>
  );
};

export { RightColumns };
