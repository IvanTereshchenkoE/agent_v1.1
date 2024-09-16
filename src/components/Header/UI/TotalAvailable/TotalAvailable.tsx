import React from "react";

import "./TotalAvailable.scss";

const TotalAvailable = () => {
  return (
    <div className="walletWrapper-bc">
      <i className="icon iconWallet bc-icon-wallet" />
      <div className="wrapper">
        <div className="title">Total Available</div>
        <div className="subtitle">€ 100</div>
      </div>
    </div>
  );
};

export { TotalAvailable };
