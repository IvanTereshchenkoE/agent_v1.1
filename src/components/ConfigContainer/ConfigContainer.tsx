import React from "react";

import "./ConfigContainer.scss";
import { useNavigate } from "react-router-dom";

const ConfigContainer = () => {
  const navigation = useNavigate();
  const handleNavigate = (item: string) => {
    navigation(item);
  };
  return (
    <div className="configuration-container">
      <div className="menu-items-container">
        <div
          className="menu-item"
          style={{
            borderWidth: "0.1rem",
            borderColor: "rgb(247, 119, 110)",
          }}
          onClick={() => handleNavigate("/configuration/commissionPlan")}
        >
          <div
            className="menu-item-icon"
            style={{ background: "rgba(247, 119, 110, 0.11)" }}
          >
            <i
              className="icon bc-icon-money-48"
              style={{ color: "rgb(247, 119, 110)" }}
            />
          </div>
          <div className="menu-item-description">
            <h2>Commission Plan</h2>
            <p>Create commission plan templates to set up on affiliates</p>
          </div>
        </div>
        <div
          className="menu-item"
          style={{
            borderWidth: "0.1rem",
            borderColor: "rgb(207, 109, 65)",
          }}
          onClick={() => handleNavigate("/configuration/permissions")}
        >
          <div
            className="menu-item-icon"
            style={{ background: "rgba(207, 109, 65, 0.11)" }}
          >
            <i
              className="icon bc-icon-permissions-48"
              style={{ color: "rgb(207, 109, 65)" }}
            />
          </div>
          <div className="menu-item-description">
            <h2>Permissions</h2>
            <p>Enable or disable the system user permission list</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ConfigContainer };
