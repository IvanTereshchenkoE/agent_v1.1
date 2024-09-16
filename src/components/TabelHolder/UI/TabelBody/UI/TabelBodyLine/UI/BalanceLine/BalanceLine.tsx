import React, { useState } from "react";

import "./BalanceLine.scss";

interface IBalanceLine {
  name: string;
  widthHeader: number;
}

const BalanceLine = ({ name, widthHeader }: IBalanceLine) => {
  const [show, setShow] = useState(false);
  const handleShowBalance = () => {
    setShow(true);
  };
  return (
    <div
      className="ta-cell"
      data-id="2ce393de-8070-bb76-c321-18a64e4f7bfe-balance"
      style={{ left: "0px", right: "0px", width: `${widthHeader}px` }}
    >
      <div className="ellipsis-text">
        {show ? (
          <>{name}</>
        ) : (
          <button
            className="btn a-minimal s-medium f-default c-primary id-start cr-round c-icon"
            onClick={handleShowBalance}
          >
            <i className="icon bc-icon-preview" />
          </button>
        )}
      </div>
    </div>
  );
};

export { BalanceLine };
