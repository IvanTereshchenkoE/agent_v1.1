import React from "react";

import "./TabelNoResult.scss";

import emptylist from "accets/images/svg/emptylist.svg";

const TabelNoResult = () => {
  return (
    <div className="ta-nested-child-holder table-empty-holder">
      <div className="empty-state-holder s-big">
        <div className="empty-state-image">
          <img alt="Empty" src={emptylist} />
        </div>
        <div className="empty-state-title">No result</div>
      </div>
    </div>
  );
};

export { TabelNoResult };
