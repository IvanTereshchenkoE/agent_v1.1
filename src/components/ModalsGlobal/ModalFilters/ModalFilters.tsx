import React from "react";

import "./ModalFilters.scss";
import { useDispatch } from "react-redux";
import { setModalFilters } from "store/reducers/modalsReducer";

const ModalFilters = () => {
  const dispatch = useDispatch();
  const handleClostModal = () => {
    dispatch(setModalFilters(false));
  };
  return (
    <div
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
                <span>Columns (0/0)</span>
              </li>
              <li className="bc-tl-search">
                <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text search-holder  disabled">
                  <div className="input-structure">
                    <span
                      tabIndex={0}
                      className="icon-holder icon-holder-disabled"
                    >
                      <i className="icon bc-icon-search" />
                    </span>
                    <label>
                      <div className="input-element-relative">
                        <input
                          disabled
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
                      data-rbd-droppable-context-id={0}
                      className="bc-tl-content"
                    >
                      <div className="bc-tl-placeholder pointer-events-none">
                        <div className="empty-state-holder s-medium">
                          <div className="empty-state-image">
                            <img
                              alt="Empty"
                              src="data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 22.0.1%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 215 215' style='enable-background:new 0 0 215 215%3b' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:url(%23SVGID_1_)%3b%7d .st1%7bopacity:0.2%3bclip-path:url(%23SVGID_3_)%3bfill:%231473E6%3b%7d .st2%7bopacity:0.1%3bclip-path:url(%23SVGID_5_)%3bfill:%231473E6%3b%7d .st3%7bfill:%23F9FBFC%3b%7d .st4%7bopacity:0.7%3bfill:%23F9FBFC%3b%7d .st5%7bfill:url(%23SVGID_6_)%3b%7d .st6%7bfill:%23F5F5F5%3b%7d .st7%7bfill:%2360AFFF%3b%7d .st8%7bfill:%23FFCC4D%3b%7d .st9%7bfill:%239BE4EC%3b%7d .st10%7bfill:%2314CEE6%3b%7d .st11%7bfill:url(%23SVGID_7_)%3b%7d .st12%7bopacity:0.2%3bclip-path:url(%23SVGID_9_)%3bfill:%231473E6%3b%7d .st13%7bopacity:0.1%3bclip-path:url(%23SVGID_11_)%3bfill:%231473E6%3b%7d .st14%7bfill:url(%23SVGID_12_)%3b%7d .st15%7bfill:url(%23SVGID_13_)%3b%7d .st16%7bopacity:0.1%3bclip-path:url(%23SVGID_15_)%3bfill:%231473E6%3b%7d .st17%7bfill:%23FFE49D%3b%7d .st18%7bclip-path:url(%23SVGID_17_)%3bfill:url(%23SVGID_18_)%3b%7d .st19%7bclip-path:url(%23SVGID_17_)%3bfill:url(%23SVGID_19_)%3b%7d .st20%7bfill:url(%23SVGID_20_)%3b%7d .st21%7bfill:url(%23SVGID_21_)%3b%7d .st22%7bopacity:0.25%3bclip-path:url(%23SVGID_23_)%3bfill:%231473E6%3b%7d .st23%7bfill:url(%23SVGID_24_)%3b%7d .st24%7bfill:url(%23SVGID_25_)%3b%7d .st25%7bopacity:0.1%3bclip-path:url(%23SVGID_27_)%3bfill:%231473E6%3b%7d .st26%7bclip-path:url(%23SVGID_29_)%3bfill:url(%23SVGID_30_)%3b%7d .st27%7bclip-path:url(%23SVGID_29_)%3bfill:url(%23SVGID_31_)%3b%7d .st28%7bfill:url(%23SVGID_32_)%3b%7d .st29%7bfill:url(%23SVGID_33_)%3b%7d .st30%7bopacity:0.25%3bclip-path:url(%23SVGID_35_)%3bfill:%231473E6%3b%7d .st31%7bfill:url(%23SVGID_36_)%3b%7d .st32%7bfill:url(%23SVGID_37_)%3b%7d .st33%7bopacity:0.2%3bclip-path:url(%23SVGID_39_)%3bfill:%231473E6%3b%7d .st34%7bopacity:0.1%3bclip-path:url(%23SVGID_41_)%3bfill:%231473E6%3b%7d .st35%7bfill:url(%23SVGID_42_)%3b%7d .st36%7bopacity:5.000000e-02%3b%7d .st37%7bopacity:5.000000e-02%3bclip-path:url(%23SVGID_44_)%3b%7d .st38%7bopacity:0.9%3b%7d .st39%7bfill:white%3b%7d .st40%7bopacity:0.9%3bfill:white%3b%7d .st41%7bfill:%23EBEFF2%3b%7d .st42%7bopacity:5.000000e-02%3bclip-path:url(%23SVGID_48_)%3b%7d .st43%7bfill:url(%23SVGID_51_)%3b%7d .st44%7bopacity:0.1%3bclip-path:url(%23SVGID_53_)%3bfill:%231473E6%3b%7d .st45%7bclip-path:url(%23SVGID_55_)%3bfill:url(%23SVGID_56_)%3b%7d .st46%7bclip-path:url(%23SVGID_55_)%3bfill:url(%23SVGID_57_)%3b%7d .st47%7bfill:url(%23SVGID_58_)%3b%7d .st48%7bfill:url(%23SVGID_59_)%3b%7d .st49%7bopacity:0.25%3bclip-path:url(%23SVGID_61_)%3bfill:%231473E6%3b%7d .st50%7bfill:url(%23SVGID_62_)%3b%7d .st51%7bopacity:0.9%3bclip-path:url(%23SVGID_66_)%3bfill:white%3b%7d .st52%7bopacity:5.000000e-02%3bclip-path:url(%23SVGID_68_)%3b%7d .st53%7bopacity:0.9%3bclip-path:url(%23SVGID_72_)%3bfill:white%3b%7d .st54%7bopacity:5.000000e-02%3bclip-path:url(%23SVGID_74_)%3b%7d .st55%7bfill:none%3b%7d .st56%7bfill:url(%23SVGID_75_)%3b%7d .st57%7bopacity:0.2%3bclip-path:url(%23SVGID_77_)%3bfill:%231473E6%3b%7d .st58%7bopacity:0.1%3bclip-path:url(%23SVGID_79_)%3bfill:%231473E6%3b%7d .st59%7bfill:url(%23SVGID_80_)%3b%7d .st60%7bfill:url(%23SVGID_81_)%3b%7d .st61%7bopacity:0.1%3bclip-path:url(%23SVGID_83_)%3bfill:%231473E6%3b%7d .st62%7bclip-path:url(%23SVGID_85_)%3bfill:url(%23SVGID_86_)%3b%7d .st63%7bclip-path:url(%23SVGID_85_)%3bfill:url(%23SVGID_87_)%3b%7d .st64%7bfill:url(%23SVGID_88_)%3b%7d .st65%7bfill:url(%23SVGID_89_)%3b%7d .st66%7bopacity:0.25%3bclip-path:url(%23SVGID_91_)%3bfill:%231473E6%3b%7d .st67%7bfill:url(%23SVGID_92_)%3b%7d .st68%7bopacity:5.000000e-02%3bclip-path:url(%23SVGID_94_)%3b%7d .st69%7bclip-path:url(%23SVGID_96_)%3bfill:white%3b%7d .st70%7bopacity:5.000000e-02%3bclip-path:url(%23SVGID_98_)%3b%7d%3c/style%3e%3cg%3e %3cg%3e %3cpath class='st41' d='M161.7%2c174H72.2c-4.6%2c0-8.2-3.7-8.2-8.3V43.3c0-4.6%2c3.7-8.3%2c8.2-8.3h89.5c4.6%2c0%2c8.3%2c3.7%2c8.3%2c8.3v122.5 C169.9%2c170.3%2c166.2%2c174%2c161.7%2c174z'/%3e %3c/g%3e %3cg%3e %3cdefs%3e %3cpath id='SVGID_93_' d='M161.7%2c174H72.1c-4.5%2c0-8.2-3.7-8.2-8.2V43.2c0-4.5%2c3.7-8.2%2c8.2-8.2h89.6c4.5%2c0%2c8.2%2c3.7%2c8.2%2c8.2v122.6 C169.9%2c170.3%2c166.2%2c174%2c161.7%2c174z'/%3e %3c/defs%3e %3cclipPath id='SVGID_1_'%3e %3cuse xlink:href='%23SVGID_93_' style='overflow:visible%3b'/%3e %3c/clipPath%3e %3cpath style='opacity:5.000000e-02%3bclip-path:url(%23SVGID_1_)%3b' d='M94.1%2c175H53.7c-2.1%2c0-3.8-1.7-3.8-3.8v-50.3 c0-2.1%2c1.7-3.8%2c3.8-3.8h40.3c2.1%2c0%2c3.8%2c1.7%2c3.8%2c3.8v50.3C97.9%2c173.3%2c96.2%2c175%2c94.1%2c175z'/%3e %3c/g%3e %3cg%3e %3cpath class='st39' d='M138.7%2c59.5H95.1c-1.7%2c0-3.2-1.4-3.2-3.2v-2.2c0-1.7%2c1.4-3.2%2c3.2-3.2h43.7c1.7%2c0%2c3.2%2c1.4%2c3.2%2c3.2v2.2 C141.9%2c58.1%2c140.5%2c59.5%2c138.7%2c59.5z'/%3e %3cpath class='st39' d='M130.4%2c82.5H80.9c-1.1%2c0-2-0.9-2-2v-3c0-1.1%2c0.9-2%2c2-2h49.5c1.1%2c0%2c2%2c0.9%2c2%2c2v3 C132.4%2c81.6%2c131.5%2c82.5%2c130.4%2c82.5z'/%3e %3cpath class='st39' d='M152.9%2c105h-72c-1.1%2c0-2-0.9-2-2v-3c0-1.1%2c0.9-2%2c2-2h72c1.1%2c0%2c2%2c0.9%2c2%2c2v3C154.9%2c104.1%2c154%2c105%2c152.9%2c105z' /%3e %3cpath class='st39' d='M121.9%2c131h-48c-1.1%2c0-2-0.9-2-2v-3c0-1.1%2c0.9-2%2c2-2h48c1.1%2c0%2c2%2c0.9%2c2%2c2v3C123.9%2c130.1%2c123%2c131%2c121.9%2c131z' /%3e %3cpath class='st39' d='M152.9%2c150h-79c-1.1%2c0-2-0.9-2-2v-3c0-1.1%2c0.9-2%2c2-2h79c1.1%2c0%2c2%2c0.9%2c2%2c2v3C154.9%2c149.1%2c154%2c150%2c152.9%2c150z' /%3e %3c/g%3e %3cg%3e %3cpath class='st41' d='M89.3%2c180H48.9c-2.1%2c0-3.8-1.7-3.8-3.8v-48.3c0-2.1%2c1.7-3.8%2c3.8-3.8h40.3c2.1%2c0%2c3.8%2c1.7%2c3.8%2c3.8v48.3 C93.1%2c178.3%2c91.4%2c180%2c89.3%2c180z'/%3e %3ccircle class='st39' cx='69.1' cy='145.5' r='9.5'/%3e %3cpath class='st39' d='M83.4%2c164.8H54.7c-0.6%2c0-1.2-0.5-1.2-1.2v-0.2c0-0.6%2c0.5-1.2%2c1.2-1.2h28.7c0.6%2c0%2c1.2%2c0.5%2c1.2%2c1.2v0.2 C84.6%2c164.2%2c84.1%2c164.8%2c83.4%2c164.8z'/%3e %3cpath class='st39' d='M83.1%2c170.8H54.4c-0.6%2c0-1.2-0.5-1.2-1.2v-0.2c0-0.6%2c0.5-1.2%2c1.2-1.2h28.7c0.6%2c0%2c1.2%2c0.5%2c1.2%2c1.2v0.2 C84.2%2c170.2%2c83.7%2c170.8%2c83.1%2c170.8z'/%3e %3c/g%3e%3c/g%3e%3c/svg%3e"
                            />
                          </div>
                          <div className="empty-state-title">No Data</div>
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
                <span>Columns (0/17)</span>
              </li>
              <li className="bc-tl-search">
                <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text search-holder ">
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
                      data-rbd-droppable-context-id={0}
                      className="bc-tl-content"
                    >
                      <div className="bc-transfer-element minimalistic">
                        <div className="crs-holder checkBox lp-right la-start">
                          <div className="label-holder has-label">
                            <div className="crs-item crs-label">
                              <label
                                className="ellipsis-text"
                                htmlFor="6578a427-6287-c2b1-6a38-d4ff80db63b9"
                              >
                                Select All
                              </label>
                            </div>
                            <div className="crs-item crs-component">
                              <input
                                type="checkbox"
                                id="6578a427-6287-c2b1-6a38-d4ff80db63b9"
                                tabIndex={0}
                              />
                              <label
                                className="checkbox cr-element s-small"
                                htmlFor="6578a427-6287-c2b1-6a38-d4ff80db63b9"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="affiliateId"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="affiliateId"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="46d93e7a-2d6b-e4ff-9c3d-70e2b4d89e80"
                                >
                                  User Id
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="46d93e7a-2d6b-e4ff-9c3d-70e2b4d89e80"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="46d93e7a-2d6b-e4ff-9c3d-70e2b4d89e80"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="role"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="role"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="3f60474e-ebf5-52db-e0c0-35c5c5b1434e"
                                >
                                  Role
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="3f60474e-ebf5-52db-e0c0-35c5c5b1434e"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="3f60474e-ebf5-52db-e0c0-35c5c5b1434e"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="username"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="username"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="8de1c939-11b7-09c9-6417-18200d5b0531"
                                >
                                  Username
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="8de1c939-11b7-09c9-6417-18200d5b0531"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="8de1c939-11b7-09c9-6417-18200d5b0531"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="name"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="name"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="a3ec889b-662d-9f92-86b4-96677611022a"
                                >
                                  First Name
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="a3ec889b-662d-9f92-86b4-96677611022a"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="a3ec889b-662d-9f92-86b4-96677611022a"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="lastName"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="lastName"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="237bc1af-3d10-0825-8df6-a172a7a02f89"
                                >
                                  Last Name
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="237bc1af-3d10-0825-8df6-a172a7a02f89"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="237bc1af-3d10-0825-8df6-a172a7a02f89"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="parentName"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="parentName"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="9de4e897-93ea-0c0e-2e1e-92e34a736998"
                                >
                                  Referral
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="9de4e897-93ea-0c0e-2e1e-92e34a736998"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="9de4e897-93ea-0c0e-2e1e-92e34a736998"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="level"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="level"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="fc0927b5-8974-1755-1c19-a849e11a23c9"
                                >
                                  Referred Level
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="fc0927b5-8974-1755-1c19-a849e11a23c9"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="fc0927b5-8974-1755-1c19-a849e11a23c9"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="registerDate"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="registerDate"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="7be65bf4-d9df-798b-6302-c495e30d7ca6"
                                >
                                  Registration date
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="7be65bf4-d9df-798b-6302-c495e30d7ca6"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="7be65bf4-d9df-798b-6302-c495e30d7ca6"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="lastLogin"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="lastLogin"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="0819a546-cbb6-9eae-7705-8f8faf53ce3d"
                                >
                                  Last login date
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="0819a546-cbb6-9eae-7705-8f8faf53ce3d"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="0819a546-cbb6-9eae-7705-8f8faf53ce3d"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="mainCurrency"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="mainCurrency"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="a6b48a41-33df-e62a-812f-4b17fa551453"
                                >
                                  Currency
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="a6b48a41-33df-e62a-812f-4b17fa551453"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="a6b48a41-33df-e62a-812f-4b17fa551453"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="planName"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="planName"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="a3938aaf-47dc-3876-518a-465e66b8ef89"
                                >
                                  Commission Plan
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="a3938aaf-47dc-3876-518a-465e66b8ef89"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="a3938aaf-47dc-3876-518a-465e66b8ef89"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="commissionTypeId"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="commissionTypeId"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="7afa36b2-347b-dfb7-b72f-e959e28f5922"
                                >
                                  plan type
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="7afa36b2-347b-dfb7-b72f-e959e28f5922"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="7afa36b2-347b-dfb7-b72f-e959e28f5922"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="playersCount"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="playersCount"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="a84aeb14-3394-637a-2b06-b2b88632061b"
                                >
                                  Players Count
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="a84aeb14-3394-637a-2b06-b2b88632061b"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="a84aeb14-3394-637a-2b06-b2b88632061b"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="cellPhone"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="cellPhone"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="a681bc75-0e6c-dda6-4905-f2f07317c29a"
                                >
                                  Mobile
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="a681bc75-0e6c-dda6-4905-f2f07317c29a"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="a681bc75-0e6c-dda6-4905-f2f07317c29a"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="marketingWebsite"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="marketingWebsite"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="4b3e35d4-ac89-bb4a-5507-c13328152023"
                                >
                                  Marketing Website
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="4b3e35d4-ac89-bb4a-5507-c13328152023"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="4b3e35d4-ac89-bb4a-5507-c13328152023"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="currentWallet"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="currentWallet"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="9064a380-2279-520f-6ab6-da622af63d79"
                                >
                                  Pending Commission
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="9064a380-2279-520f-6ab6-da622af63d79"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="9064a380-2279-520f-6ab6-da622af63d79"
                                />
                              </div>
                            </div>
                          </div>
                          <i className="icon bc-icon-drag" />
                        </div>
                      </div>
                      <div
                        data-rbd-draggable-context-id={0}
                        data-rbd-draggable-id="availableWallet"
                        tabIndex={0}
                        role="button"
                        aria-describedby="rbd-hidden-text-0-hidden-text-0"
                        data-rbd-drag-handle-draggable-id="availableWallet"
                        data-rbd-drag-handle-context-id={0}
                        draggable="false"
                        className="bc-tl-item"
                      >
                        <div className="bc-transfer-element">
                          <div className="crs-holder checkBox lp-right la-start">
                            <div className="label-holder has-label">
                              <div className="crs-item crs-label">
                                <label
                                  className="ellipsis-text"
                                  htmlFor="8ef52c95-2d74-e09f-a207-ef4a21fd1343"
                                >
                                  available commission
                                </label>
                              </div>
                              <div className="crs-item crs-component">
                                <input
                                  type="checkbox"
                                  id="8ef52c95-2d74-e09f-a207-ef4a21fd1343"
                                  tabIndex={0}
                                />
                                <label
                                  className="checkbox cr-element s-small"
                                  htmlFor="8ef52c95-2d74-e09f-a207-ef4a21fd1343"
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
                        height: "103px",
                        WebkitTransform: "translateY(0px)",
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
          <button
            className="btn a-minimal s-medium f-default c-default id-start cr-round"
            onClick={handleClostModal}
          >
            <span className="ellipsis-text">Cancel</span>
          </button>
          <button
            className="btn a-default s-medium f-default c-primary id-start cr-round"
            disabled
          >
            <span className="ellipsis-text">Save</span>
          </button>
          <button
            className="btn a-default s-medium f-default c-primary id-start cr-round"
            disabled
          >
            <span className="ellipsis-text">Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalFilters };
