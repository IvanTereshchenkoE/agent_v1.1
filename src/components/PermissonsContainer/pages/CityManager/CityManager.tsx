import React from "react";

import "./CityManager.scss";
import { PaymentRow } from "components/PermissonsContainer/UI";
import { mockCounterManager } from "./mockCityManager";

const CityManager = () => {
  return (
    <div className="permission-body-wrap">
      {mockCounterManager.map((item) => {
        return <PaymentRow name={item.name} isSelected={item.isSelected} />;
      })}
    </div>
  );
};

export { CityManager };
