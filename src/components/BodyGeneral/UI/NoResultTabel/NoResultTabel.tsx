import React from "react";

import "./NoResultTabel.scss";

import emptyImage from "accets/images/svg/emptylist.svg";

const NoResultTabel = () => {
  return (
    <div className="ta-nested-child-holder table-empty-holder">
      <div className="empty-state-holder s-big">
        <div className="empty-state-image">
          <img alt="Empty" src={emptyImage} />
        </div>
        <div className="empty-state-title">No result</div>
      </div>
    </div>
  );
};

export { NoResultTabel };
