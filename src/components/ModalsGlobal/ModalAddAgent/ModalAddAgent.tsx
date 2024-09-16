import React, { useState } from "react";

import "./ModalAddAgent.scss";
import { useDispatch } from "react-redux";
import {
  setModalAddAgent,
  setModalAddUser,
} from "store/reducers/modalsReducer";

const ModalAddAgent = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setModalAddAgent(false));
  };
  const handleGoBack = () => {
    dispatch(setModalAddAgent(false));
    dispatch(setModalAddUser(true));
  };
  const [fullRegistration, setFullRegistration] = useState(false);
  const handleChangeFull = () => {
    setFullRegistration((prev) => !prev);
  };
  return (
    <div
      className="modal-splash light-background a-compact p-top"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-default" style={{ width: "680px" }}>
        <div className="modal-head">
          <div className="ellipsis-text">
            <button
              className="btn icon-appearance-compact a-minimal s-default f-default c-default id-start cr-round c-icon"
              onClick={handleGoBack}
            >
              <i className="icon bc-icon-arrow-back" />
            </button>
            Add Agent
          </div>
        </div>
        <div className="modal-body">
          <form noValidate>
            <div className="grid-holder">
              <div
                className="grid-items-group"
                style={{ width: "calc(100% + 2rem)", margin: "-1rem" }}
              >
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Email "
                            className="input-element placeholder"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">Email </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="dropdown-holder f-full-width a-outline s-default">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Role "
                                className="input-element placeholder write-protected"
                                type="text"
                              />
                            </div>
                            <div className="input-element-back">
                              <div className="input-swap-label">
                                <div className="input-swap">
                                  <div className="input-swap-animate ellipsis-text hide">
                                    <span className="ellipsis-text">Role </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                          <i className="icon bc-icon-arrow-down" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="asyncFormField">
                    <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text disabled">
                      <div className="input-structure">
                        <label>
                          <div className="input-element-relative">
                            <input
                              placeholder="Parent "
                              className="input-element placeholder"
                              disabled
                            />
                          </div>
                          <div className="input-element-back">
                            <div className="input-swap-label">
                              <div className="input-swap">
                                <div className="input-swap-animate ellipsis-text hide">
                                  <span className="ellipsis-text">Parent </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                        <i className="icon bc-icon-arrow-down" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-password">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="New Password "
                            className="input-element placeholder"
                            type="password"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  New Password{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-password">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Confirm Password "
                            className="input-element placeholder"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  Confirm Password{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="dropdown-holder f-full-width a-outline s-default pointer-events-none-dropdown">
                    <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text disabled">
                      <div className="input-structure">
                        <label>
                          <div className="input-element-relative">
                            <input
                              disabled
                              placeholder="Select Currency "
                              readOnly
                              className="input-element placeholder write-protected"
                              type="text"
                            />
                          </div>
                          <div className="input-element-back">
                            <div className="input-swap-label">
                              <div className="input-swap">
                                <div className="input-swap-animate ellipsis-text hide">
                                  <span className="ellipsis-text">
                                    Select Currency{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                        <i className="icon bc-icon-arrow-down" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fullRegistrationSwitcherWrapper-bc">
                  <div className="crs-holder lp-right la-start">
                    <div className="label-holder has-label">
                      <div className="crs-item crs-label">
                        <label
                          className="ellipsis-text"
                          htmlFor="7a00bdda-1764-4359-8e75-0443351576e2"
                        >
                          Full registration
                        </label>
                      </div>
                      <div
                        className="crs-item crs-component"
                        onClick={handleChangeFull}
                      >
                        <input type="checkbox" />
                        <label
                          className={`switcher-element s-small ${
                            fullRegistration ? "active" : ""
                          }`}
                          htmlFor="7a00bdda-1764-4359-8e75-0443351576e2"
                        >
                          <span />
                          <small />
                        </label>
                      </div>
                    </div>
                  </div>
                  <i className="icon bc-icon-info" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="btn a-minimal s-medium f-default c-default id-start cr-round"
            onClick={handleCloseModal}
          >
            <span className="ellipsis-text">Cancel</span>
          </button>
          <button
            className="btn a-default s-medium f-default c-primary id-start cr-round"
            disabled
          >
            <span className="ellipsis-text">Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalAddAgent };
