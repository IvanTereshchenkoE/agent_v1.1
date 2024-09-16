import React from "react";

import "./AreaManager.scss";
import { PaymentRow } from "components/PermissonsContainer/UI";
import { mockCounterManager } from "./mockAreaManager";

const AreaManager = () => {
  return (
    <div className="permission-body-wrap">
      {mockCounterManager.map((item) => {
        return <PaymentRow name={item.name} isSelected={item.isSelected} />;
      })}
    </div>
  );
};

export { AreaManager };
