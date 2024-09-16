import React from "react";

import "./ModulSavedFilters.scss";

import notResurce from "accets/images/svg/emptyMessage.svg";
import { useDispatch } from "react-redux";
import { setModalSavedFilters } from "store/reducers/modalsReducer";

const ModulSavedFilters = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setModalSavedFilters(false));
  };
  return (
    <div
      className="modal-splash light-background a-default p-center"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-default" style={{ width: "700px" }}>
        <div className="modal-head">
          <div className="ellipsis-text">Saved filters</div>
        </div>
        <div className="modal-body">
          <div
            className="paper bg-color pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow"
            style={{ padding: "0rem" }}
          >
            <ul className="module-header cr-position-radius p-top s-big headerBorder">
              <li className="left-content">
                <div className="left-inner">
                  <div className="ellipsis-text module-title" title="Filters">
                    Filters
                  </div>
                </div>
              </li>
              <li className="right-content" />
            </ul>
            <ul className="paper-actions">
              <li className="paper-left-actions">
                <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text search-holder ">
                  <div className="input-structure">
                    <span tabIndex={0} className="icon-holder">
                      <i className="icon bc-icon-search" />
                    </span>
                    <label>
                      <div className="input-element-relative">
                        <input
                          placeholder="Search"
                          className="input-element placeholder"
                          type="text"
                        />
                      </div>
                      <div className="input-element-back" />
                    </label>
                  </div>
                </div>
              </li>
              <li className="paper-right-actions" />
            </ul>
            <div
              className="table-holder content-empty"
              style={{ maxWidth: "658.75px" }}
            >
              <div
                className="scroll-holder s-medium"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  minHeight: "0px",
                  maxHeight: "5000px",
                }}
              >
                <div
                  className="scroll-content"
                  style={{
                    position: "relative",
                    overflow: "scroll",
                    minHeight: "16px",
                    maxHeight: "5016px",
                  }}
                >
                  <div className="ta-n-body ta-header pointer-events-none">
                    <div className="ta-row border-bottom">
                      <div
                        className="ta-cell ta-header-cell cursor-pointer"
                        data-id="90327ce7-6492-4ca6-54c0-8a872c9f4d19-name"
                        title="Name"
                        style={{
                          left: "0px",
                          right: "0px",
                          width: "219.583px",
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
                                Name
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
                        className="ta-cell ta-header-cell"
                        data-id="90327ce7-6492-4ca6-54c0-8a872c9f4d19-filter"
                        title="Filters"
                        style={{
                          left: "0px",
                          right: "0px",
                          width: "219.583px",
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
                                Filters
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
                        className="ta-cell ta-header-cell cursor-pointer"
                        data-id="90327ce7-6492-4ca6-54c0-8a872c9f4d19-createDate"
                        title="Creation Date"
                        style={{
                          left: "0px",
                          right: "0px",
                          width: "219.583px",
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
                                Creation Date
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
                    <div className="ta-nested-child-holder table-empty-holder">
                      <div className="empty-state-holder s-big">
                        <div className="empty-state-image">
                          <img alt="Empty" src={notResurce} />
                        </div>
                        <div className="empty-state-title">No result</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="scroll-track horizontal"
                  style={{
                    position: "absolute",
                    height: "6px",
                    visibility: "visible",
                  }}
                >
                  <div
                    className="scroll-thumb horizontal"
                    style={{
                      position: "relative",
                      display: "block",
                      height: "100%",
                      width: "593px",
                      WebkitTransform: "translateX(0px)",
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
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="confirmMobile-buttons">
            <button
              className="btn a-default s-medium f-default c-primary id-start cr-round"
              onClick={handleCloseModal}
            >
              <span className="ellipsis-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModulSavedFilters };
