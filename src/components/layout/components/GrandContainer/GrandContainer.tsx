import React from "react";

import "./GrandContainer.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { CommisionHeader, PermissionsHeader } from "./UI";

interface IGrandContainer {
  children: React.ReactNode;
}

const GrandContainer = ({ children }: IGrandContainer) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const handleMoveBack = () => {
    if (currentPath === "/configuration") {
      navigate("dashboard");
    } else if (currentPath === "/configuration/commissionPlan") {
      navigate("/configuration");
    } else if (currentPath === "/configuration/permissions") {
      navigate("/configuration");
    }
  };
  return (
    <main className="grand-body-inner grandConfiguration">
      <div className="configurationContainer-bc">
        <div className="configuration-section">
          <div className="configuration-header">
            <div className="head-left">
              <p className="close" onClick={handleMoveBack}>
                <i className="icon bc-icon-arrow-back" />
              </p>
              <div className="left-section">
                <div className="header-title">
                  {currentPath === "/configuration" && <h1>Configuration</h1>}
                  {currentPath === "/configuration/commissionPlan" && (
                    <h1>Commission Plan</h1>
                  )}
                  {currentPath === "/configuration/permissions" && (
                    <h1>Permissions</h1>
                  )}
                </div>
              </div>
            </div>
            {currentPath === "/configuration/commissionPlan" && (
              <CommisionHeader />
            )}
            {currentPath === "/configuration/permissions" && (
              <PermissionsHeader />
            )}
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export { GrandContainer };
