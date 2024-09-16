import React from "react";

import "./CommisionHeader.scss";

const CommisionHeader = () => {
  return (
    <div className="head-right">
      <button className="btn btn-reset a-outline s-medium f-content-size c-primary id-start cr-round">
        <i className="icon bc-icon-plus-crm" />
        <span className="ellipsis-text">Create</span>
      </button>
    </div>
  );
};

export { CommisionHeader };
