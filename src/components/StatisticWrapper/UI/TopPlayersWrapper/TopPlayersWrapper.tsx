import React from "react";

import "./TopPlayersWrapper.scss";

import emptylist from "accets/images/svg/emptylist.svg";

const TopPlayersWrapper = () => {
  return (
    <div className="dashboardLowerStatisticsEl-bc">
      <div className="tableSection pd-column">
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div className="ellipsis-text module-title" title="Top Players">
                Top Players
              </div>
            </div>
          </li>
          <li className="right-content" />
        </ul>
        <div
          className="table-holder content-empty"
          // style={{ "--table-max-width": "299.390625px" }}
        >
          <div
            className="scroll-holder s-medium"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              // "min-height": "0px",
              // "max-height": "5000px",
            }}
          >
            <div
              className="scroll-content"
              style={{
                position: "relative",
                overflow: "scroll",
                // "min-height": "0px",
                // "max-height": "5000px",
                // "--sb-margin-bottom": "0px",
                // "--sb-margin-side": "0px",
              }}
            >
              <div className="ta-n-body ta-header pointer-events-none">
                <div className="ta-row border-bottom">
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="3274dd75-6866-7057-9ba5-53637f523fd4-username"
                    title="Username"
                    style={{
                      left: "0px",
                      right: "0px",
                      width: "150px",
                    }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            Username
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder">
                      <i className="th-divider" />
                    </div>
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="3274dd75-6866-7057-9ba5-53637f523fd4-netRevenue"
                    title="NGR"
                    style={{
                      left: "0px",
                      right: "0px",
                      width: "150px",
                    }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            NGR
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder">
                      <i className="th-divider" />
                    </div>
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="3274dd75-6866-7057-9ba5-53637f523fd4-commission"
                    title="Commission"
                    style={{
                      left: "0px",
                      right: "0px",
                      width: "150px",
                    }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            Commission
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder" />
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="ta-body">
                <div className="ta-nested-child-holder table-empty-holder">
                  <div className="empty-state-holder s-big">
                    <div className="empty-state-image">
                      <img alt="Empty" src={emptylist} />
                    </div>
                    <div className="empty-state-title">No data to display</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="scroll-track horizontal"
              style={{
                position: "absolute",
                height: "6px",
                display: "none",
              }}
            >
              <div
                className="scroll-thumb horizontal"
                style={{
                  position: "relative",
                  display: "block",
                  height: "100%",
                }}
              />
            </div>
            <div
              className="scroll-track vertical"
              style={{
                position: "absolute",
                width: "6px",
                display: "none",
              }}
            >
              <div
                className="scroll-thumb vertical"
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TopPlayersWrapper };
