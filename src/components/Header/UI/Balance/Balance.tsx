import React from "react";

import "./Balance.scss";

const Balance = () => {
  return (
    <div className="walletWrapper-bc">
      <i className="icon iconWallet bc-icon-wallet" />
      <div className="wrapper">
        <div className="title">Balance</div>
        <div className="subtitle">€ 0</div>
      </div>
    </div>
  );
};

export { Balance };
