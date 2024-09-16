import React from "react";

import "./LeftColumns.scss";
import { AllPlayers, RegisteredPlayers } from "./UI";

const LeftColumns = () => {
  return (
    <div className="grid-child" style={{ padding: "1rem", width: "50%" }}>
      <div
        className="paper bg-transparent pd-column pw-nowrap jc-paper-start ai-stretch none"
        style={{ padding: "0rem" }}
      >
        <RegisteredPlayers />
        <AllPlayers />
      </div>
    </div>
  );
};

export { LeftColumns };
