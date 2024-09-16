import React from "react";

import "./CountryManager.scss";
import { PaymentRow } from "components/PermissonsContainer/UI";
import { mockCounterManager } from "./mockCounterManager";

const CountryManager = () => {
  return (
    <div className="permission-body-wrap">
      {mockCounterManager.map((item) => {
        return <PaymentRow name={item.name} isSelected={item.isSelected} />;
      })}
    </div>
  );
};

export { CountryManager };
