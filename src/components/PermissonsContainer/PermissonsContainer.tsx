import React, { useState } from "react";

import "./PermissonsContainer.scss";
import {
  AgentManager,
  CityManager,
  CountryManager,
  RegionalManager,
} from "./pages";

const PermissonsContainer = () => {
  const [selectedPage, setSelectedPage] = useState("Country manager");
  const handleSelectePage = (item: string) => {
    selectedPage !== item && setSelectedPage(item);
  };
  return (
    <div className="configuration-container pages">
      <div className="transferParentBlock permission">
        <div className="permission-body">
          <div className="permission-body-filter">
            <div className="permission-body-button">
              <button
                className={`btn ${
                  selectedPage === "Country manager" ? "a-default" : "a-minimal"
                } s-medium f-default c-default id-start cr-round`}
                onClick={() => {
                  handleSelectePage("Country manager");
                }}
              >
                <span className="ellipsis-text">Country manager</span>
              </button>
              <button
                className={`btn ${
                  selectedPage === "Regional manager"
                    ? "a-default"
                    : "a-minimal"
                } s-medium f-default c-default id-start cr-round`}
                onClick={() => {
                  handleSelectePage("Regional manager");
                }}
              >
                <span className="ellipsis-text">Regional manager</span>
              </button>
              <button
                className={`btn ${
                  selectedPage === "City manager" ? "a-default" : "a-minimal"
                } s-medium f-default c-default id-start cr-round`}
                onClick={() => {
                  handleSelectePage("City manager");
                }}
              >
                <span className="ellipsis-text">City manager</span>
              </button>
              <button
                className={`btn ${
                  selectedPage === "Area manager" ? "a-default" : "a-minimal"
                } s-medium f-default c-default id-start cr-round`}
                onClick={() => {
                  handleSelectePage("Area manager");
                }}
              >
                <span className="ellipsis-text">Area manager</span>
              </button>
              <button
                className={`btn ${
                  selectedPage === "Agent" ? "a-default" : "a-minimal"
                } s-medium f-default c-default id-start cr-round`}
                onClick={() => {
                  handleSelectePage("Agent");
                }}
              >
                <span className="ellipsis-text">Agent</span>
              </button>
            </div>
            <div className="permission-body-search">
              <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text search-holder">
                <div className="input-structure">
                  <i className="icon bc-icon-search" />
                  <label>
                    <div className="input-element-relative">
                      <input
                        placeholder="Search "
                        className="input-element placeholder"
                        type="text"
                      />
                    </div>
                    <div className="input-element-back" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="agentPermissionWrapper-bc">
            <div className="agentPermissionCol-bc">
              <ul className="module-header cr-position-radius p-top s-big headerBorder">
                <li className="left-content">
                  <div className="left-inner">
                    <div className="ellipsis-text module-title">
                      <div className="agentPermissionCol-title-bc">
                        Manage Permissions
                        <i className="icon bc-icon-info-48" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="right-content" />
              </ul>
              {selectedPage === "Country manager" && <CountryManager />}
              {selectedPage === "Regional manager" && <RegionalManager />}
              {selectedPage === "City manager" && <CityManager />}
              {selectedPage === "Area manager" && <CityManager />}
              {selectedPage === "Agent" && <AgentManager />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PermissonsContainer };
