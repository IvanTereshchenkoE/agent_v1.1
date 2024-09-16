import React from "react";

import "./CreditLine.scss";

const CreditLine = () => {
  return (
    <div className="walletWrapper-bc">
      <i className="icon iconWallet bc-icon-wallet" />
      <div className="wrapper">
        <div className="title">Credit Line</div>
        <div className="subtitle">€ 100</div>
      </div>
    </div>
  );
};

export { CreditLine };
