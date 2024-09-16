import React from "react";

import "./AgentManager.scss";
import { PaymentRow } from "components/PermissonsContainer/UI";
import { mockAgentManager } from "./mockAgentManager";

const AgentManager = () => {
  return (
    <div className="permission-body-wrap">
      {mockAgentManager.map((item) => {
        return <PaymentRow name={item.name} isSelected={item.isSelected} />;
      })}
    </div>
  );
};

export { AgentManager };
