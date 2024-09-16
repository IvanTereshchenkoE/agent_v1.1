import React from "react";

import "./ModalAddPlayer.scss";
import { useDispatch } from "react-redux";
import {
  setModalAddPlayer,
  setModalAddUser,
} from "store/reducers/modalsReducer";

const ModalAddPlayer = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setModalAddPlayer(false));
  };
  const handleGoBack = () => {
    dispatch(setModalAddPlayer(false));
    dispatch(setModalAddUser(true));
  };
  return (
    <div
      className="modal-splash light-background a-compact p-top"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-default" style={{ width: "580px" }}>
        <div className="modal-head">
          <div className="ellipsis-text">
            <button
              className="btn icon-appearance-compact a-minimal s-default f-default c-default id-start cr-round c-icon"
              onClick={handleGoBack}
            >
              <i className="icon bc-icon-arrow-back" />
            </button>
            Add Player
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
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="First Name "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  First Name{" "}
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
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Middle name "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  Middle name{" "}
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
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Last Name "
                            className="input-element placeholder"
                            autoComplete="new-password"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  Last Name{" "}
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
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            required
                            placeholder="user-name *"
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  user-name *
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
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Mobile "
                            className="input-element placeholder"
                            autoComplete="new-password"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">Mobile </span>
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
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            required
                            placeholder="Email *"
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">Email *</span>
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
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-password">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            required
                            placeholder="Password *"
                            className="input-element placeholder"
                            type="password"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  Password *
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
                  <div className="dropdown-holder f-full-width a-minimal s-default">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Countries "
                                className="input-element placeholder"
                                type="text"
                              />
                            </div>
                            <div className="input-element-back">
                              <div className="input-swap-label">
                                <div className="input-swap">
                                  <div className="input-swap-animate ellipsis-text hide">
                                    <span className="ellipsis-text">
                                      Countries{" "}
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
                </div>
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="popover-track cursor-pointer">
                    <div className="input-holder a-minimal s-default id-end f-full-width cr-smooth-radius t-text">
                      <div className="input-structure">
                        <i className="icon bc-icon-calendar" />
                        <label>
                          <div className="input-element-relative">
                            <input
                              placeholder="Birth Date "
                              className="input-element placeholder"
                              autoComplete="new-password"
                              type="text"
                            />
                          </div>
                          <div className="input-element-back">
                            <div className="input-swap-label">
                              <div className="input-swap">
                                <div className="input-swap-animate ellipsis-text hide">
                                  <span className="ellipsis-text">
                                    Birth Date{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="grid-child"
                  style={{ padding: "1rem", width: "50%" }}
                >
                  <div className="asyncFormField">
                    <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text">
                      <div className="input-structure">
                        <label>
                          <div className="input-element-relative">
                            <input
                              required
                              placeholder="Parent *"
                              className="input-element placeholder"
                              type="text"
                            />
                          </div>
                          <div className="input-element-back">
                            <div className="input-swap-label">
                              <div className="input-swap">
                                <div className="input-swap-animate ellipsis-text hide">
                                  <span className="ellipsis-text">
                                    Parent *
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

export { ModalAddPlayer };
