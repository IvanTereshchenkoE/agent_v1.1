import React from "react";

import "./TotalWidgetModal.scss";

const TotalWidgetModal = () => {
  return (
    <div>
      <div className="popover-positioner cr-full-radius custom-container-total-modal">
        <div>
          <ul
            className="popover-content"
            style={{ bottom: "0px", width: "174px" }}
          >
            <li className="popover-body">
              <div
                className="scroll-holder s-medium"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "auto",
                }}
              >
                <div
                  className="scroll-content"
                  style={{
                    position: "relative",
                    overflow: "scroll",
                  }}
                >
                  <div
                    className="popover-top-bottom-padding"
                    style={{ position: "relative" }}
                  >
                    <div style={{ overflow: "visible", width: "0px" }}>
                      <div
                        aria-label="grid"
                        aria-readonly="true"
                        className="ReactVirtualized__Grid ReactVirtualized__List"
                        role="grid"
                        tabIndex={0}
                        style={{
                          direction: "ltr",
                          height: "auto",
                          position: "relative",
                          width: "174px",
                          overflow: "auto",
                        }}
                      >
                        <div
                          className="ReactVirtualized__Grid__innerScrollContainer"
                          role="rowgroup"
                          style={{
                            width: "auto",
                            height: "240px",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <div
                            className="dropdown-item selected hovered"
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "0px",
                              width: "100%",
                            }}
                          >
                            <p title="All Products">
                              <span>All Products</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                          <div
                            className="dropdown-item"
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "40px",
                              width: "100%",
                            }}
                          >
                            <p title="Sportsbook">
                              <span>Sportsbook</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                          <div
                            className="dropdown-item"
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "80px",
                              width: "100%",
                            }}
                          >
                            <p title="Live Games">
                              <span>Live Games</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                          <div
                            className="dropdown-item"
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "120px",
                              width: "100%",
                            }}
                          >
                            <p title="Virtual Games">
                              <span>Virtual Games</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                          <div
                            className="dropdown-item"
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "160px",
                              width: "100%",
                            }}
                          >
                            <p title="Skill Games">
                              <span>Skill Games</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                          <div
                            className="dropdown-item"
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "200px",
                              width: "100%",
                            }}
                          >
                            <p title="Betting Games">
                              <span>Betting Games</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                          <div
                            className="dropdown-item"
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "240px",
                              width: "100%",
                            }}
                          >
                            <p title="Pool Betting Games">
                              <span>Pool Betting Games</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { TotalWidgetModal };
