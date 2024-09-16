import React from "react";

import "./PermissionsHeader.scss";

const PermissionsHeader = () => {
  return (
    <div className="head-right">
      <div
        className="paper bg-color pd-row pw-nowrap jc-paper-end ai-stretch none"
        style={{ padding: "1.5rem 2rem" }}
      >
        <button
          className="btn btn-reset a-outline s-medium f-default c-default id-start cr-round"
          disabled
        >
          <span className="ellipsis-text">Reset</span>
        </button>
        <button
          className="btn a-default s-medium f-default c-confirm id-start cr-round"
          disabled
        >
          <span className="ellipsis-text">Save</span>
        </button>
      </div>
    </div>
  );
};

export { PermissionsHeader };
