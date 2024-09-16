import React from "react";

import "./RegionalManager.scss";
import { mockRegionalManager } from "./mockRegionalManager";
import { PaymentRow } from "components/PermissonsContainer/UI";

const RegionalManager = () => {
  return (
    <div className="permission-body-wrap">
      {mockRegionalManager.map((item) => {
        return <PaymentRow name={item.name} isSelected={item.isSelected} />;
      })}
    </div>
  );
};

export { RegionalManager };
