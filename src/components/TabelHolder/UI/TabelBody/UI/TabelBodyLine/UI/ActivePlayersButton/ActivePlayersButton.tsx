import React from "react";

import "./ActivePlayersButton.scss";

const ActivePlayersButton = () => {
  return (
    <div className="ta-action ta-a-2">
      <div className="ta-item">
        <button
          className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
          title="Change Password"
        >
          <i className="icon bc-icon-permission-48" />
        </button>
        <button
          className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
          title="Transfer"
        >
          <i className="icon bc-icon-transfer-bold" />
        </button>
        <button
          className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
          title="Block player"
        >
          <i className="icon bc-icon-block-48" />
        </button>
        <button
          className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
          title="Notes"
        >
          <i className="icon bc-icon-note" />
        </button>
      </div>
    </div>
  );
};

export { ActivePlayersButton };
