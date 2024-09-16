import React, { useState } from "react";

import "./PaymentRow.scss";

interface IPaymentRow {
  name: string;
  isSelected: boolean;
}

const PaymentRow = ({ name, isSelected }: IPaymentRow) => {
  const [handleSelected, setHandleSelected] = useState(isSelected);
  const handleSelectChange = () => {
    setHandleSelected((prev) => !prev);
  };
  return (
    <div className="paymentTableRow">
      <div className="paymentLabelCol">
        <h4 className="paymentMethodLabel">{name}</h4>
      </div>
      <div className="paymentLabelCol switcher">
        <div className="crs-holder lp-right la-start">
          <div className="label-holder" onClick={handleSelectChange}>
            <div className="crs-item crs-component">
              <input type="checkbox" />
              <label
                className={`switcher-element s-small ${
                  handleSelected ? "active" : ""
                } `}
              >
                <span />
                <small />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PaymentRow };
