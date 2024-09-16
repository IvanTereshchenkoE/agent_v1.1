import React from "react";

import "./LogsPage.scss";

const LogsPage = () => {
  return (
    <div className="tabs-holder horizontal">
      <div className="tabs-head">
        <div className="tabs-wrapper">
          <ul className="tabs-content type-basic">
            <li className="active">
              <div className="ellipsis-text">
                <a href="/account/1063512/logs/commission-plan">
                  Commission Plan
                </a>
              </div>
            </li>
            <li>
              <div className="ellipsis-text">
                <a href="/account/1063512/logs/life-time">Life time</a>
              </div>
            </li>
            <li>
              <div className="ellipsis-text">
                <a href="/account/1063512/logs/carryOverLog">Carry over</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="tabs-content-holder" style={{ padding: "1.9rem" }}>
        <div
          className="paper bg-color tableHeaderRemoval withoutPaperActions pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow"
          style={{ padding: "0rem" }}
        >
          <ul className="module-header cr-position-radius p-top s-big headerBorder">
            <li className="left-content">
              <div className="left-inner" />
            </li>
            <li className="right-content" />
          </ul>
          <ul className="paper-actions">
            <li className="paper-left-actions" />
            <li className="paper-right-actions" />
          </ul>
          <div className="table-holder">
            <div
              className="scroll-holder s-medium"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "8.6rem",
              }}
            >
              <div
                className="scroll-content"
                style={{
                  position: "absolute",
                  overflow: "scroll",
                  inset: "0px",
                }}
              >
                <div className="ta-n-body ta-header">
                  <div className="ta-row border-bottom">
                    <div
                      className="ta-cell ta-header-cell cursor-pointer"
                      data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-type"
                      title="Commission Plan Type"
                      style={{ left: "0px", right: "0px", width: "268.066px" }}
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
                              Commission Plan Type
                            </div>
                            <div className="ta-filter-icon" />
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
                      className="ta-cell ta-header-cell cursor-pointer"
                      data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-planName"
                      title="Commission Plan Name"
                      style={{ left: "0px", right: "0px", width: "268.066px" }}
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
                              Commission Plan Name
                            </div>
                            <div className="ta-filter-icon" />
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
                      className="ta-cell ta-header-cell cursor-pointer"
                      data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-date"
                      title="Assigned Date"
                      style={{ left: "0px", right: "0px", width: "268.066px" }}
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
                              Assigned Date
                            </div>
                            <div className="ta-filter-icon" />
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
                      className="ta-cell ta-header-cell cursor-pointer"
                      data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-editBy"
                      title="Assigned By"
                      style={{ left: "0px", right: "0px", width: "268.066px" }}
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
                              Assigned By
                            </div>
                            <div className="ta-filter-icon" />
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
                    <div className="ta-cell right-actions-holder a-square" />
                  </div>
                </div>
                <div className="ta-body">
                  <div
                    aria-label="grid"
                    aria-readonly="true"
                    className="ReactVirtualized__Grid ReactVirtualized__List"
                    role="grid"
                    tabIndex={0}
                    style={{
                      boxSizing: "border-box",
                      direction: "ltr",
                      height: "auto",
                      position: "relative",
                      width: "1134.27px",
                      willChange: "transform",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="ReactVirtualized__Grid__innerScrollContainer"
                      role="rowgroup"
                      style={{
                        width: "auto",
                        height: "51px",
                        maxWidth: "1134.27px",
                        maxHeight: "51px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div
                        className="ta-group"
                        data-index={0}
                        style={{
                          height: "51px",
                          left: "0px",
                          position: "absolute",
                          top: "0px",
                          width: "100%",
                        }}
                      >
                        <div className="ta-row hover-able border-bottom">
                          <div className="ta-gr-left-line" />
                          <div
                            className="ta-cell"
                            data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-type"
                            style={{
                              left: "0px",
                              right: "0px",
                              width: "268.066px",
                            }}
                          >
                            <div className="ellipsis-text">
                              <ul className="static-title-holder f-content-size">
                                <li className="st-c">
                                  <div
                                    className="tag-c cr-smooth-radius a-light f-content-size s-medium pointer-events-none"
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  >
                                    <div className="tag-cp tag-cc ellipsis-text">
                                      revenue
                                    </div>
                                    <div className="tag-backdrop" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="ta-cell"
                            data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-planName"
                            title="SYSTEM__AGENT"
                            style={{
                              left: "0px",
                              right: "0px",
                              width: "268.066px",
                            }}
                          >
                            <div className="ellipsis-text">SYSTEM__AGENT</div>
                          </div>
                          <div
                            className="ta-cell"
                            data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-date"
                            title="2023-02-15 15:53:39"
                            style={{
                              left: "0px",
                              right: "0px",
                              width: "268.066px",
                            }}
                          >
                            <div className="ellipsis-text">
                              2023-02-15 15:53:39
                            </div>
                          </div>
                          <div
                            className="ta-cell"
                            data-id="88cb5d07-2faa-ceeb-e79c-b53554567333-editBy"
                            title="Default"
                            style={{
                              left: "0px",
                              right: "0px",
                              width: "268.066px",
                            }}
                          >
                            <div className="ellipsis-text">Default</div>
                          </div>
                          <div className="ta-cell right-actions-holder a-square">
                            <div className="ta-action ta-a-1">
                              <div className="ta-item">
                                <button className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon">
                                  <i className="icon bc-icon-more-horizontal" />
                                </button>
                              </div>
                            </div>
                            <div className="ta-action ta-a-2">
                              <div className="ta-item">
                                <button
                                  className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
                                  title="View"
                                >
                                  <i className="icon bc-icon-view-doc" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="resize-triggers">
                  <div className="expand-trigger">
                    <div style={{ width: "1136px", height: "105px" }} />
                  </div>
                  <div className="contract-trigger" />
                </div>
              </div>
              <div
                className="scroll-track horizontal"
                style={{
                  position: "absolute",
                  height: "6px",
                  visibility: "hidden",
                }}
              >
                <div
                  className="scroll-thumb horizontal"
                  style={{
                    position: "relative",
                    display: "block",
                    height: "100%",
                    width: "0px",
                    transform: "translateX(0px)",
                  }}
                />
              </div>
              <div
                className="scroll-track vertical"
                style={{
                  position: "absolute",
                  width: "6px",
                  visibility: "hidden",
                }}
              >
                <div
                  className="scroll-thumb vertical"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "0px",
                  }}
                />
              </div>
            </div>
            <ul className="ta-pagination-holder">
              <li>
                <div className="pagination-drop">
                  <div className="dropdown-holder f-content-size a-outline s-default">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-outline s-default id-start f-content-size cr-full-radius t-text filled">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Select "
                                readOnly
                                className="input-element write-protected"
                                type="text"
                                size={1}
                                defaultValue={10}
                              />
                            </div>
                            <div className="fit-content-hack">
                              <div className="input-element">Select </div>
                            </div>
                            <div className="input-element-back" />
                          </label>
                          <i className="icon bc-icon-arrow-down" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>1-1 of 1</p>
                </div>
              </li>
              <li>
                <div className="pagination-holder">
                  <button
                    className="btn a-minimal s-default f-content-size c-default id-start cr-round c-icon"
                    disabled
                  >
                    <i className="icon bc-icon-arrow-left-nav" />
                  </button>
                  <div className="divider type-vertical" />
                  <button
                    className="btn defaultCursor a-minimal s-default f-content-size c-default id-start cr-round active"
                    data-key={1}
                  >
                    <span className="ellipsis-text">1</span>
                  </button>
                  <div className="divider type-vertical" />
                  <button
                    className="btn a-minimal s-default f-content-size c-default id-start cr-round c-icon"
                    disabled
                  >
                    <i className="icon bc-icon-arrow-right-nav" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogsPage };
