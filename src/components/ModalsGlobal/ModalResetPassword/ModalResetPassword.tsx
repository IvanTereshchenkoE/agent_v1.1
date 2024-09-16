import React from "react";

import "./ModalResetPassword.scss";
import { setModalResetPassword } from "store/reducers/modalsReducer";
import { useDispatch } from "react-redux";

const ModalResetPassword = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalResetPassword(false));
  };
  return (
    <div
      className="modal-splash transparent a-compact p-top"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-content-size">
        <div className="modal-head">
          <div className="ellipsis-text">Change Password</div>
        </div>
        <div className="modal-body">
          <form noValidate className="resetPassWrapper-bc">
            <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-password resetPasswordFormField">
              <div className="input-structure">
                <label>
                  <div className="input-element-relative">
                    <input
                      required
                      placeholder="Current Password *"
                      className="input-element placeholder"
                      type="password"
                    />
                  </div>
                  <div className="input-element-back">
                    <div className="input-swap-label">
                      <div className="input-swap">
                        <div className="input-swap-animate ellipsis-text hide">
                          <span className="ellipsis-text">
                            Current Password *
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-password resetPasswordFormField">
              <div className="input-structure">
                <label>
                  <div className="input-element-relative">
                    <input
                      required
                      placeholder="New Password *"
                      className="input-element placeholder"
                      name="f58a1774-6fd0-7f22-0d03-be8591a0dfa4"
                      type="password"
                    />
                  </div>
                  <div className="input-element-back">
                    <div className="input-swap-label">
                      <div className="input-swap">
                        <div className="input-swap-animate ellipsis-text hide">
                          <span className="ellipsis-text">New Password *</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-password resetPasswordFormField">
              <div className="input-structure">
                <label>
                  <div className="input-element-relative">
                    <input
                      required
                      placeholder="Confirm Password *"
                      className="input-element placeholder"
                      type="password"
                    />
                  </div>
                  <div className="input-element-back">
                    <div className="input-swap-label">
                      <div className="input-swap">
                        <div className="input-swap-animate ellipsis-text hide">
                          <span className="ellipsis-text">
                            Confirm Password *
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
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
            <span className="ellipsis-text">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalResetPassword };
