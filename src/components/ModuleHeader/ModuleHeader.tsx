import React from "react";

import "./ModuleHeader.scss";
import { HeaderExport, HeaderName, HeaderRefresh, HeaderSettings } from "./UI";

interface IModuleHeader {
  name?: string;
  isName?: boolean;
  isExport?: boolean;
  isSettings?: boolean;
  isRefresh?: boolean;
}

const ModuleHeader = ({
  name,
  isName,
  isExport,
  isSettings,
  isRefresh,
}: IModuleHeader) => {
  return (
    <ul className="module-header cr-position-radius p-top s-big headerBorder">
      <li className="left-content">{isName && <HeaderName name={name} />}</li>
      <li className="right-content">
        {isExport && <HeaderExport />}
        {isExport && (
          <div
            className="divider type-vertical"
            style={{ height: "2.4rem" }}
          ></div>
        )}
        {isSettings && <HeaderSettings />}
        {isRefresh && <HeaderRefresh />}
      </li>
      {/* <div
        className="modal-splash light-background a-default p-center tableCustomisationModal-bc"
        style={{ zIndex: "400" }}
      >
        <div className="modal-content s-default" style={{ width: "740px" }}>
          <div className="modal-head">
            <div className="ellipsis-text">Table columns customization</div>
          </div>
          <div className="modal-body">
            <div className="bc-transfer-list">
              <ul className="bc-transfer-container">
                <li className="bc-tl-head">
                  <h5>Possible</h5>
                  <span>Columns (0/2)</span>
                </li>
                <li className="bc-tl-search">
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text search-holder">
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
                </li>
                <li className="bc-tl-content-holder">
                  <div
                    className="scroll-holder s-medium"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      className="scroll-content"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        overflow: "scroll",
                      }}
                    >
                      <div
                        data-rbd-droppable-id="possibleList"
                        data-rbd-droppable-context-id={1}
                        className="bc-tl-content"
                      >
                        <div className="bc-transfer-element minimalistic">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="18417f1b-505d-33f8-2ccb-70caf8952d59"
                                >
                                  Select All
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="18417f1b-505d-33f8-2ccb-70caf8952d59"
                                  tabIndex={0}
                                  
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="18417f1b-505d-33f8-2ccb-70caf8952d59"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="affiliateId"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="affiliateId"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="b38a6f7a-3fc9-9a4a-1d2d-772fd06f55aa"
                                  >
                                    User Id
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="b38a6f7a-3fc9-9a4a-1d2d-772fd06f55aa"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="b38a6f7a-3fc9-9a4a-1d2d-772fd06f55aa"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="role"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="role"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="de87e609-4728-39d3-6002-576605f4cb4e"
                                  >
                                    Role
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="de87e609-4728-39d3-6002-576605f4cb4e"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="de87e609-4728-39d3-6002-576605f4cb4e"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
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
                </li>
              </ul>
              <div className="bc-tl-buttons">
                <button
                  className="btn a-clean s-default f-default c-primary id-start cr-round c-icon"
                  disabled
                >
                  <i className="icon bc-icon-arrow-right" />
                </button>
                <button
                  className="btn a-clean s-default f-default c-primary id-start cr-round c-icon"
                  disabled
                >
                  <i className="icon bc-icon-arrow-left" />
                </button>
              </div>
              <ul className="bc-transfer-container">
                <li className="bc-tl-head">
                  <h5>Current</h5>
                  <span>Columns (0/15)</span>
                </li>
                <li className="bc-tl-search">
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text search-holder">
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
                </li>
                <li className="bc-tl-content-holder">
                  <div
                    className="scroll-holder s-medium"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      className="scroll-content"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        overflow: "scroll",
                      }}
                    >
                      <div
                        data-rbd-droppable-id="currentList"
                        data-rbd-droppable-context-id={1}
                        className="bc-tl-content"
                      >
                        <div className="bc-transfer-element minimalistic">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="df1960e3-7016-4699-cf2e-4452b3efe9d6"
                                >
                                  Select All
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="df1960e3-7016-4699-cf2e-4452b3efe9d6"
                                  tabIndex={0}
                                  
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="df1960e3-7016-4699-cf2e-4452b3efe9d6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="username"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="username"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="c321fbd2-bc85-7eac-33d8-7e9225616a5e"
                                  >
                                    Username
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="c321fbd2-bc85-7eac-33d8-7e9225616a5e"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="c321fbd2-bc85-7eac-33d8-7e9225616a5e"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="name"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="name"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="99af0098-f516-3abd-da01-21c96e54e360"
                                  >
                                    First Name
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="99af0098-f516-3abd-da01-21c96e54e360"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="99af0098-f516-3abd-da01-21c96e54e360"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="lastName"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="lastName"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="fddc995a-45b0-bf3f-0f0a-7d735a4b3fb3"
                                  >
                                    Last Name
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="fddc995a-45b0-bf3f-0f0a-7d735a4b3fb3"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="fddc995a-45b0-bf3f-0f0a-7d735a4b3fb3"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="parentName"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="parentName"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="ce16227a-9110-1346-6669-221cf96ec7a5"
                                  >
                                    Referral
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="ce16227a-9110-1346-6669-221cf96ec7a5"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="ce16227a-9110-1346-6669-221cf96ec7a5"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="level"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="level"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="ef259892-662f-dc5b-1abc-d52adfa7df6d"
                                  >
                                    Referred Level
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="ef259892-662f-dc5b-1abc-d52adfa7df6d"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="ef259892-662f-dc5b-1abc-d52adfa7df6d"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="registerDate"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="registerDate"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="cba3eb24-ab02-622e-a311-328e6f74d104"
                                  >
                                    Registration date
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="cba3eb24-ab02-622e-a311-328e6f74d104"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="cba3eb24-ab02-622e-a311-328e6f74d104"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="lastLogin"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="lastLogin"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="e2aedd74-5600-108a-5dfd-e38e619fc006"
                                  >
                                    Last login date
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="e2aedd74-5600-108a-5dfd-e38e619fc006"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="e2aedd74-5600-108a-5dfd-e38e619fc006"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="mainCurrency"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="mainCurrency"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="ff5a0d7d-21c7-7c0a-4f6e-ec3608bfd845"
                                  >
                                    Currency
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="ff5a0d7d-21c7-7c0a-4f6e-ec3608bfd845"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="ff5a0d7d-21c7-7c0a-4f6e-ec3608bfd845"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="planName"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="planName"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="2f5b0342-5d08-d6d4-ba5f-b7cecce5bd6a"
                                  >
                                    Commission Plan
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="2f5b0342-5d08-d6d4-ba5f-b7cecce5bd6a"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="2f5b0342-5d08-d6d4-ba5f-b7cecce5bd6a"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="commissionTypeId"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="commissionTypeId"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="d8acfae8-72c1-94e4-8aa5-7db544db299c"
                                  >
                                    plan type
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="d8acfae8-72c1-94e4-8aa5-7db544db299c"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="d8acfae8-72c1-94e4-8aa5-7db544db299c"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="playersCount"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="playersCount"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="08b94969-3949-2358-e467-0fc0eaadbe6d"
                                  >
                                    Players Count
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="08b94969-3949-2358-e467-0fc0eaadbe6d"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="08b94969-3949-2358-e467-0fc0eaadbe6d"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="cellPhone"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="cellPhone"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="96f5c31c-37f3-a9df-b7b9-178282b16137"
                                  >
                                    Mobile
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="96f5c31c-37f3-a9df-b7b9-178282b16137"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="96f5c31c-37f3-a9df-b7b9-178282b16137"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="marketingWebsite"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="marketingWebsite"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="09395c8a-2f6b-1406-36c4-ec7a22cb4bfb"
                                  >
                                    Marketing Website
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="09395c8a-2f6b-1406-36c4-ec7a22cb4bfb"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="09395c8a-2f6b-1406-36c4-ec7a22cb4bfb"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="currentWallet"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="currentWallet"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="891dab3f-b4b2-7fe2-cba7-454fd7bddc4e"
                                  >
                                    Pending Commission
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="891dab3f-b4b2-7fe2-cba7-454fd7bddc4e"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="891dab3f-b4b2-7fe2-cba7-454fd7bddc4e"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
                        <div
                          data-rbd-draggable-context-id={1}
                          data-rbd-draggable-id="availableWallet"
                          tabIndex={0}
                          role="button"
                          aria-describedby="rbd-hidden-text-1-hidden-text-20"
                          data-rbd-drag-handle-draggable-id="availableWallet"
                          data-rbd-drag-handle-context-id={1}
                          draggable="false"
                          className="bc-tl-item"
                        >
                          <div className="bc-transfer-element">
                            <div className="crs-holder checkBox lp-right la-start">
                              <div className="label-holder has-label">
                                <div className="crs-item crs-label">
                                  <label
                                    className="ellipsis-text"
                                    htmlFor="8d3a226f-5144-546e-7690-82995ecf0292"
                                  >
                                    available commission
                                  </label>
                                </div>
                                <div className="crs-item crs-component">
                                  <input
                                    type="checkbox"
                                    id="8d3a226f-5144-546e-7690-82995ecf0292"
                                    tabIndex={0}
                                    
                                  />
                                  <label
                                    className="checkbox cr-element s-small"
                                    htmlFor="8d3a226f-5144-546e-7690-82995ecf0292"
                                  />
                                </div>
                              </div>
                            </div>
                            <i className="icon bc-icon-drag" />
                          </div>
                        </div>
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
                        }}
                      />
                    </div>
                    <div
                      className="scroll-track vertical"
                      style={{
                        position: "absolute",
                        width: "6px",
                        visibility: "visible",
                      }}
                    >
                      <div
                        className="scroll-thumb vertical"
                        style={{
                          position: "relative",
                          display: "block",
                          width: "100%",
                          height: "141px",
                          transform: "translateY(0px)",
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn a-minimal s-medium f-default c-default id-start cr-round">
              <span className="ellipsis-text">Cancel</span>
            </button>
            <button
              className="btn a-default s-medium f-default c-primary id-start cr-round"
              disabled
            >
              <span className="ellipsis-text">Save</span>
            </button>
            <button className="btn a-default s-medium f-default c-primary id-start cr-round">
              <span className="ellipsis-text">Reset</span>
            </button>
          </div>
        </div>
      </div> */}
    </ul>
  );
};

export { ModuleHeader };
